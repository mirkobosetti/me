import type { PublicNote } from '../utils/db'

/**
 * Public wall — the 50 most recent notes. Identifiers are never exposed;
 * pass `?me=<identifier>` to get a `mine` flag on your own notes.
 */
export default defineEventHandler(async (event) => {
  const me = String(getQuery(event).me ?? '')
  const sql = useDb()

  try {
    const rows = await sql`
      select id, canvas, author, description, created_at,
             (${me} <> '' and user_identifier = ${me}) as mine
      from notes
      order by created_at desc
      limit 50
    `
    return rows as PublicNote[]
  } catch {
    throw createError({ statusCode: 502, statusMessage: 'Failed to load notes' })
  }
})
