import {
  MAX_NOTES_PER_USER,
  MAX_NOTES_PER_IP_PER_DAY,
  MAX_CANVAS_LENGTH,
  type PublicNote
} from '../utils/db'

interface Body {
  canvas?: string
  author?: string
  description?: string
  user_identifier?: string
}

const sanitize = (s: string) =>
  s
    .trim()
    .replace(/[<>"']/g, '')
    .slice(0, 100)

/** Best-effort client IP: trustworthy on Cloudflare, header fallback elsewhere. */
const clientIp = (event: Parameters<typeof getRequestHeader>[0]) =>
  getRequestHeader(event, 'cf-connecting-ip') ||
  getRequestHeader(event, 'x-forwarded-for')?.split(',')[0]?.trim() ||
  ''

/** Create a note, enforcing per-user and per-IP limits server-side. */
export default defineEventHandler(async (event) => {
  const body = await readBody<Body>(event)

  const canvas = (body.canvas ?? '').trim()
  const author = sanitize(body.author ?? '')
  const description = sanitize(body.description ?? '')
  const userIdentifier = sanitize(body.user_identifier ?? '')
  const ip = clientIp(event)

  if (!userIdentifier) {
    throw createError({ statusCode: 400, statusMessage: 'Missing user identifier' })
  }
  if (!canvas.startsWith('data:image/png;base64,')) {
    throw createError({ statusCode: 400, statusMessage: 'Invalid drawing' })
  }
  if (canvas.length > MAX_CANVAS_LENGTH) {
    throw createError({ statusCode: 400, statusMessage: 'Drawing is too large' })
  }
  if (!author) {
    throw createError({ statusCode: 400, statusMessage: 'Author is required' })
  }
  if (author.length > 20) {
    throw createError({ statusCode: 400, statusMessage: 'Author must be 20 characters or less' })
  }
  if (description.length > 50) {
    throw createError({ statusCode: 400, statusMessage: 'Description must be 50 characters or less' })
  }

  const sql = useDb()

  let userCount = 0
  let ipCount = 0
  try {
    const [row] = await sql`
      select
        count(*) filter (where user_identifier = ${userIdentifier})::int as user_count,
        count(*) filter (where ip <> '' and ip = ${ip} and created_at > now() - interval '1 day')::int as ip_count
      from notes
    `
    userCount = (row as { user_count: number })?.user_count ?? 0
    ipCount = (row as { ip_count: number })?.ip_count ?? 0
  } catch {
    throw createError({ statusCode: 502, statusMessage: 'Failed to verify note limit' })
  }

  if (userCount >= MAX_NOTES_PER_USER) {
    throw createError({
      statusCode: 429,
      statusMessage: `You have reached the maximum of ${MAX_NOTES_PER_USER} notes`
    })
  }
  if (ip && ipCount >= MAX_NOTES_PER_IP_PER_DAY) {
    throw createError({
      statusCode: 429,
      statusMessage: 'Too many notes from this network today. Try again tomorrow.'
    })
  }

  try {
    const [note] = await sql`
      insert into notes (canvas, author, description, user_identifier, ip)
      values (${canvas}, ${author}, ${description}, ${userIdentifier}, ${ip})
      returning id, canvas, author, description, created_at, true as mine
    `
    return note as PublicNote
  } catch {
    throw createError({ statusCode: 502, statusMessage: 'Failed to save note' })
  }
})
