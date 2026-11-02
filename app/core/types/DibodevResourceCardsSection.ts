import type { DibodevSectionTone } from '~/core/types/DibodevSectionTone'

/** One linked card: a small uppercase label ("Test gratuit, 6 questions"), a title and a sentence, towards a page of the site. */
export type DibodevResourceCard = {
  icon: string
  label: string
  title: string
  description: string
}

/** A resource card with the page it opens, by route name, and the id sent with `tool_teaser_clicked`. */
export type DibodevResourceCardLink = DibodevResourceCard & {
  routeName: string
  toolId: string
}

/** One pill of the row under the cards, towards a sister page. */
export type DibodevResourcePill = {
  label: string
  routeName: string
  toolId: string
}

/**
 * Type definitions for the DibodevResourceCardsSection component props.
 * @type {DibodevResourceCardsSectionProps}
 * @property {string} anchorId - Id of the section, for in-page links.
 * @property {string} eyebrow - Small uppercase line displayed above the title.
 * @property {string} title - The section title.
 * @property {DibodevResourceCardLink[]} cards - The linked cards, two at most side by side.
 * @property {string} pillsTitle - Heading of the pill row (no row when there is no pill).
 * @property {DibodevResourcePill[]} pills - The sister pages, as pills.
 * @property {DibodevSectionTone} tone - Background tone of the section.
 * @property {string} trackingLocation - `location` sent with the clicks of the section.
 */
export type DibodevResourceCardsSectionProps = {
  anchorId: string
  eyebrow: string
  title: string
  cards: DibodevResourceCardLink[]
  pillsTitle: string
  pills: DibodevResourcePill[]
  tone: DibodevSectionTone
  trackingLocation: string
}
