import type { DibodevCalloutTone } from '~/core/types/DibodevCallout'

/** Texts of the website redesign prompt in one language. */
export type DibodevWebsiteRedesignPromptWording = {
  emphasizedIntro: string
  text: string
  linkLabel: string
}

/**
 * Props of the website redesign prompt shown on the pages read by owners of an old site.
 * @type {DibodevWebsiteRedesignPromptProps}
 * @property {string} trackingLocation - `location` property of the PostHog click event.
 * @property {DibodevCalloutTone} tone - Background of the callout.
 */
export type DibodevWebsiteRedesignPromptProps = {
  trackingLocation: string
  tone: DibodevCalloutTone
}
