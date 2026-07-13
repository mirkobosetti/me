import { neon, type NeonQueryFunction } from '@neondatabase/serverless'

let sql: NeonQueryFunction<false, false> | null = null

/** Lazily-created Neon serverless (HTTP) client using runtime config. */
export function useDb() {
  if (sql) return sql

  const { databaseUrl } = useRuntimeConfig()
  if (!databaseUrl) {
    throw createError({
      statusCode: 500,
      statusMessage: 'Database is not configured (missing DATABASE_URL)'
    })
  }

  sql = neon(databaseUrl as string)
  return sql
}

export interface Note {
  id: string
  canvas: string
  author: string
  description: string
  user_identifier: string
  created_at: string
}

export const MAX_NOTES_PER_USER = 3
