/**
 * Formats an article ISO date for display in the current locale (e.g. "12 mars 2026", "March 12, 2026").
 * @param {string} dateIso - The article date (ISO 8601).
 * @param {string} locale - The locale code (fr, en, es).
 * @param {'long' | 'short'} monthStyle - Full or abbreviated month name.
 * @returns {string} The formatted date, or the raw value when it cannot be parsed.
 */
export function formatArticleDate(dateIso: string, locale: string, monthStyle: 'long' | 'short' = 'long'): string {
  const parsed: number = Date.parse(dateIso)
  if (Number.isNaN(parsed)) return dateIso
  const intlLocale: string = locale === 'fr' ? 'fr-FR' : locale === 'es' ? 'es-ES' : 'en-US'
  return new Intl.DateTimeFormat(intlLocale, { day: 'numeric', month: monthStyle, year: 'numeric' }).format(
    new Date(parsed),
  )
}
