/**
 * Trivial query that keeps the Neon compute warm and avoids cold starts.
 * Neon free-tier scales to zero after inactivity (it does NOT delete the
 * project like Supabase). Wired to a Nitro scheduled task (see nuxt.config.ts)
 * for Node hosts. On AWS Lambda, point an EventBridge rule at this URL.
 */
export default defineEventHandler(async () => {
  const sql = useDb()
  try {
    await sql`select 1`
    return { ok: true, pingedAt: new Date().toISOString() }
  } catch {
    return { ok: false, pingedAt: new Date().toISOString() }
  }
})
