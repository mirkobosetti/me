import { MAX_NOTES_PER_USER, type Note } from '../utils/db'

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

/** Create a note, enforcing the per-user limit server-side. */
export default defineEventHandler(async (event) => {
  const body = await readBody<Body>(event)

  const canvas = (body.canvas ?? '').trim()
  const author = sanitize(body.author ?? '')
  const description = sanitize(body.description ?? '')
  const userIdentifier = sanitize(body.user_identifier ?? '')

  if (!userIdentifier) {
    throw createError({ statusCode: 400, statusMessage: 'Missing user identifier' })
  }
  if (!canvas.startsWith('data:image/')) {
    throw createError({ statusCode: 400, statusMessage: 'Invalid drawing' })
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

  let count = 0
  try {
    const [row] = await sql`
      select count(*)::int as count from notes where user_identifier = ${userIdentifier}
    `
    count = (row as { count: number })?.count ?? 0
  } catch {
    throw createError({ statusCode: 502, statusMessage: 'Failed to verify note limit' })
  }

  if (count >= MAX_NOTES_PER_USER) {
    throw createError({
      statusCode: 429,
      statusMessage: `You have reached the maximum of ${MAX_NOTES_PER_USER} notes`
    })
  }

  try {
    const [note] = await sql`
      insert into notes (canvas, author, description, user_identifier)
      values (${canvas}, ${author}, ${description}, ${userIdentifier})
      returning id, canvas, author, description, user_identifier, created_at
    `
    return note as Note
  } catch {
    throw createError({ statusCode: 502, statusMessage: 'Failed to save note' })
  }
})
