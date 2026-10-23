import type { DibodevEInvoicingCheckerWording } from '~/core/types/DibodevEInvoicingCheckPage'

/**
 * Props of the e-invoicing software checker: the name field, the suggestions and the result card.
 * @type {DibodevEInvoicingCheckerProps}
 * @property {string} anchorId - Id of the block, for in-page links.
 * @property {DibodevEInvoicingCheckerWording} wording - Every text of the checker in the page language.
 * @property {string} trackingLocation - `location` property of the PostHog events.
 */
export type DibodevEInvoicingCheckerProps = {
  anchorId: string
  wording: DibodevEInvoicingCheckerWording
  trackingLocation: string
}

/**
 * A link shown under a verdict to the page it rests on.
 * @type {DibodevEInvoicingSourceLink}
 * @property {string} href - The page address.
 * @property {string} label - The link text in the page language.
 */
export type DibodevEInvoicingSourceLink = {
  href: string
  label: string
}
