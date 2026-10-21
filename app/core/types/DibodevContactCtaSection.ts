/**
 * Type definitions for the DibodevContactCtaSection component props.
 * Empty strings fall back to the shared `blog.cta.*` translations.
 * @type {DibodevContactCtaSectionProps}
 * @property {string} title - The block title.
 * @property {string} description - The short paragraph under the title.
 * @property {string} ctaText - The button label.
 * @property {string} ctaTo - Route of the button; the contact page when empty.
 */
export type DibodevContactCtaSectionProps = {
  title: string
  description: string
  ctaText: string
  ctaTo: string
}
