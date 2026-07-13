/**
 * Genera un identificatore unico per il browser dell'utente
 * Usa una combinazione di caratteristiche del browser per creare un fingerprint
 * Non è 100% affidabile ma è sufficiente come prima linea di difesa
 */
export function getUserIdentifier(): string {
  // Controlla se esiste già in sessionStorage (dura per la sessione del tab)
  const existing = sessionStorage.getItem('user_identifier')
  if (existing) {
    return existing
  }

  // Crea un fingerprint basato su caratteristiche del browser
  const fingerprint = [
    navigator.userAgent,
    navigator.language,
    navigator.hardwareConcurrency || '',
    navigator.platform,
    screen.width + 'x' + screen.height,
    screen.colorDepth,
    new Date().getTimezoneOffset(),
    !!window.sessionStorage,
    !!window.localStorage,
  ].join('|')

  // Hash semplice (non crittografico)
  const hash = simpleHash(fingerprint)

  // Salva in sessionStorage
  sessionStorage.setItem('user_identifier', hash)

  return hash
}

/**
 * Hash semplice e veloce (djb2)
 */
function simpleHash(str: string): string {
  let hash = 5381
  for (let i = 0; i < str.length; i++) {
    hash = (hash << 5) + hash + str.charCodeAt(i)
  }
  return hash.toString(36)
}

/**
 * Conta quante note ha già creato questo utente
 */
export async function getUserNotesCount(userId: string): Promise<number> {
  const count = parseInt(localStorage.getItem(`notes_count_${userId}`) || '0', 10)
  return count
}

/**
 * Incrementa il contatore locale delle note
 */
export function incrementUserNotesCount(userId: string): void {
  const current = parseInt(localStorage.getItem(`notes_count_${userId}`) || '0', 10)
  localStorage.setItem(`notes_count_${userId}`, (current + 1).toString())
}

/**
 * Verifica se l'utente ha raggiunto il limite di 3 note
 */
export async function canUserCreateNote(userId: string): Promise<boolean> {
  const count = await getUserNotesCount(userId)
  return count < 3
}
