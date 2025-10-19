import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables')
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

export interface Note {
  id: string
  canvas: string
  author: string
  description: string
  user_identifier: string
  created_at: string
}

export interface NoteInput {
  canvas: string
  author: string
  description: string
  user_identifier: string
}
