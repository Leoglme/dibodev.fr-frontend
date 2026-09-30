import type { DibodevSectionTone } from '~/core/types/DibodevSectionTone'

/**
 * Type definitions for the DibodevTestimonialSection component props.
 * @type {DibodevTestimonialSectionProps}
 * @property {string} eyebrow - Small uppercase line displayed above the section title.
 * @property {string} title - The section title.
 * @property {string} quote - The client quote.
 * @property {string} authorName - The client first name or name.
 * @property {string} authorRole - The client role and company.
 * @property {string} sourceNote - Where and when the review was published.
 * @property {string} sourceLinkLabel - Label of the link to the public review.
 * @property {string} sourceHref - URL of the public review.
 * @property {number} rating - Rating out of five (0 hides the stars).
 * @property {string} ratingLabel - Accessible label of the stars (e.g. "Rating: 5 out of 5").
 * @property {string} verifiedLabel - Optional badge text (e.g. "Verified review · Malt, May 2026").
 * @property {DibodevSectionTone} tone - Background tone of the section.
 */
export type DibodevTestimonialSectionProps = {
  eyebrow: string
  title: string
  quote: string
  authorName: string
  authorRole: string
  sourceNote: string
  sourceLinkLabel: string
  sourceHref: string
  rating: number
  ratingLabel: string
  verifiedLabel: string
  tone: DibodevSectionTone
}
