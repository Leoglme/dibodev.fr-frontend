/** Outlined button shown next to the main one, towards a free tool page: `toolId` is sent with `tool_teaser_clicked`. */
export type DibodevContactCtaSecondaryLink = {
  label: string
  to: string
  toolId: string
}

/**
 * Type definitions for the DibodevContactCtaSection component props.
 * Empty strings fall back to the shared `blog.cta.*` translations.
 * @type {DibodevContactCtaSectionProps}
 * @property {string} title - The block title.
 * @property {string} description - The short paragraph under the title.
 * @property {string} ctaText - The button label.
 * @property {string} ctaTo - Route of the button; the contact page when empty.
 * @property {DibodevContactCtaSecondaryLink | null} secondaryLink - Optional outlined button towards a free tool page.
 * @property {string} trackingLocation - `location` sent with the clicks of the block.
 */
export type DibodevContactCtaSectionProps = {
  title: string
  description: string
  ctaText: string
  ctaTo: string
  secondaryLink: DibodevContactCtaSecondaryLink | null
  trackingLocation: string
}
