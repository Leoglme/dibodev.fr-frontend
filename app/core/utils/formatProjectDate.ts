/**
 * Formate une date ISO (YYYY-MM-DD) en format humain pour affichage (ex. "Juillet 2025").
 * i18n-friendly : utilise la locale pour le nom du mois.
 */

/**
 * Formate une date projet (ISO) en libellé lisible.
 * @param dateIso - Date au format ISO (ex. "2025-07-01")
 * @param locale - Code langue (fr, en, es)
 * @returns Ex. "Juillet 2025", "July 2025", "Julio 2025"
 */
export function formatProjectDate(dateIso: string, locale: string): string {
  const trimmed: string = dateIso.trim()
  if (trimmed === '') return trimmed
  const parsed: number = Date.parse(trimmed)
  if (Number.isNaN(parsed)) return trimmed
  const date: Date = new Date(parsed)
  const localeNorm: string = locale === 'fr' ? 'fr-FR' : locale === 'es' ? 'es-ES' : 'en-US'
  const formatted: string = new Intl.DateTimeFormat(localeNorm, { month: 'long', year: 'numeric' }).format(date)
  return formatted.charAt(0).toUpperCase() + formatted.slice(1)
}
