const STORAGE_KEY = 'user_identifier'

/**
 * Returns a stable, anonymous identifier for this browser. A random ID
 * persisted in localStorage — no fingerprinting, nothing derived from the
 * device. Only used to attribute wall notes to their author. The real
 * note limits are enforced server-side (per identifier and per IP).
 */
export function getUserIdentifier(): string {
  const existing = localStorage.getItem(STORAGE_KEY) ?? sessionStorage.getItem(STORAGE_KEY)
  if (existing) {
    localStorage.setItem(STORAGE_KEY, existing)
    return existing
  }

  const id =
    typeof crypto !== 'undefined' && 'randomUUID' in crypto
      ? crypto.randomUUID()
      : `${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 10)}`

  localStorage.setItem(STORAGE_KEY, id)
  return id
}
