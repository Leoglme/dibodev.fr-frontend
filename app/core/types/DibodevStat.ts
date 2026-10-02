/**
 * One key figure: its value, its label and, for a rating, the five stars shown before it.
 * @type {DibodevStatItemProps}
 * @property {string} value - The figure displayed (e.g. "7 ans", "17", "5/5").
 * @property {string} label - The short label read after the figure.
 * @property {boolean} hasStarRating - Shows five stars before the figure (a 5/5 rating).
 */
export type DibodevStatItemProps = {
  value: string
  label: string
  hasStarRating?: boolean
}
