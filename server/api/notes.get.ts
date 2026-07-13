import type { Note } from '../utils/db'

/** Public wall — the 50 most recent notes. */
export default defineEventHandler(async () => {
  const sql = useDb()

  try {
    const rows = await sql`
      select id, canvas, author, description, user_identifier, created_at
      from notes
      order by created_at desc
      limit 50
    `
    return rows as Note[]
  } catch {
    throw createError({ statusCode: 502, statusMessage: 'Failed to load notes' })
  }
})
