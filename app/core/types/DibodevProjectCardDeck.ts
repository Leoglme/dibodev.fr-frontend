import type { DibodevProject } from '~/core/types/DibodevProject'

/**
 * A project in the card deck, identified by its route for the shared slideshow mechanics.
 * @type {DibodevProjectCardDeckSlide}
 * @property {string} id - Route of the project (unique).
 * @property {DibodevProject} project - The project shown on the card.
 */
export type DibodevProjectCardDeckSlide = {
  id: string
  project: DibodevProject
}

/** Place of a card in the fan: in front, tilted behind on either side, hidden, or leaving to the left. */
export type DibodevProjectCardDeckSlot = 'front' | 'right' | 'left' | 'hidden' | 'leaving'

/**
 * Type definitions for the DibodevProjectCardDeck component props.
 * @type {DibodevProjectCardDeckProps}
 * @property {DibodevProject[]} projects - Projects to deal, in order (the first six are shown).
 * @property {string} accessibleName - Name of the deck read by screen readers.
 * @property {string} trackingSource - Where the deck is shown, sent with the card click and card change events (e.g. "projects_hero").
 */
export type DibodevProjectCardDeckProps = {
  projects: DibodevProject[]
  accessibleName: string
  trackingSource: string
}
