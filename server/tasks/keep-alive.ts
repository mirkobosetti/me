/** Scheduled Neon keep-alive. Runs daily on Node hosts (see nuxt.config.ts). */
export default defineTask({
  meta: {
    name: 'keep-alive',
    description: 'Ping Neon so the compute stays warm'
  },
  async run() {
    try {
      const sql = useDb()
      await sql`select 1`
      return { result: 'pinged' }
    } catch {
      return { result: 'skipped (database not configured)' }
    }
  }
})
