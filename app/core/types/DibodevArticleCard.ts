/**
 * Type definitions for the article cards (featured, compact and listing cards).
 * @type {DibodevArticleCardProps}
 * @property {string} title - Article title.
 * @property {string} excerpt - Short summary displayed under the title.
 * @property {string} date - Publication date (ISO 8601).
 * @property {string} coverImageUrl - Cover image URL (empty for a placeholder).
 * @property {string[]} tags - Tags displayed as badges.
 * @property {number} readingTimeMinutes - Estimated reading time (0 hides it).
 * @property {string} route - Article route, localized by the card.
 * @property {string} source - Where the card is displayed, sent with the click event (listing cards only).
 * @property {boolean} isWideOnTablet - Takes a full two-column row on tablets, image on the left (listing cards only).
 */
export type DibodevArticleCardProps = {
  title: string
  excerpt: string
  date: string
  coverImageUrl: string
  tags: string[]
  readingTimeMinutes: number
  route: string
  source?: string
  isWideOnTablet?: boolean
}
