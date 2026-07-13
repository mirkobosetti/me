/**
 * Ensures the `notes` table exists on server startup. Idempotent — safe to
 * run on every boot / cold start. No-ops (with a log) when DATABASE_URL is
 * missing so local dev without a DB still works.
 */
export default defineNitroPlugin(async () => {
  const { databaseUrl } = useRuntimeConfig()
  if (!databaseUrl) {
    console.warn('[init-db] DATABASE_URL not set — notes wall will be offline')
    return
  }

  try {
    const sql = useDb()
    await sql`
      create table if not exists notes (
        id uuid primary key default gen_random_uuid(),
        canvas text not null,
        author text not null,
        description text not null default '',
        user_identifier text not null,
        created_at timestamptz not null default now()
      )
    `
    await sql`create index if not exists notes_user_idx on notes (user_identifier)`
    await sql`create index if not exists notes_created_idx on notes (created_at desc)`
    console.log('[init-db] notes table ready')
  } catch (err) {
    console.error('[init-db] failed to initialise notes table:', err)
  }
})
