import type { DibodevLandingSecondaryCta } from '~/core/types/DibodevLandingSection'
import type { DibodevSectionTone } from '~/core/types/DibodevSectionTone'

/**
 * One pricing offer displayed as a card.
 * @type {DibodevPricingOffer}
 * @property {string} title - What the offer covers.
 * @property {string} price - Price or price range, already formatted.
 * @property {string} description - What is included and what makes the price vary.
 * @property {boolean} isHighlighted - Whether the card gets the emphasised (violet) border.
 */
export type DibodevPricingOffer = {
  title: string
  price: string
  description: string
  isHighlighted: boolean
}

/**
 * Type definitions for the DibodevPricingSection component props.
 * @type {DibodevPricingSectionProps}
 * @property {string} eyebrow - Small uppercase line displayed above the title.
 * @property {string} title - The section title.
 * @property {string} intro - Optional paragraph displayed under the title.
 * @property {DibodevPricingOffer[]} offers - The offers, two to four cards.
 * @property {string[]} notes - Small print displayed under the cards (daily rate, VAT, free quote…).
 * @property {string} ctaLabel - Optional button label (no button when empty).
 * @property {string} ctaLocation - PostHog `location` property sent when the button is clicked.
 * @property {string} highlightLabel - Small label displayed on the highlighted card (e.g. "Most requested").
 * @property {DibodevSectionTone} tone - Background tone of the section.
 * @property {DibodevLandingSecondaryCta | null} secondaryLink - Optional text link next to the button (e.g. the budget estimator).
 */
export type DibodevPricingSectionProps = {
  eyebrow: string
  title: string
  intro: string
  offers: DibodevPricingOffer[]
  notes: string[]
  ctaLabel: string
  ctaLocation: string
  highlightLabel: string
  tone: DibodevSectionTone
  secondaryLink: DibodevLandingSecondaryCta | null
}
