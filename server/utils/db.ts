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

/** Shape returned by the API — never exposes user_identifier or ip. */
export interface PublicNote {
  id: string
  canvas: string
  author: string
  description: string
  created_at: string
  mine: boolean
}

export const MAX_NOTES_PER_USER = 3
export const MAX_NOTES_PER_IP_PER_DAY = 10
// Editor produces a 300x300 PNG data URL (~10-50KB); anything near this cap is abuse.
export const MAX_CANVAS_LENGTH = 400_000
