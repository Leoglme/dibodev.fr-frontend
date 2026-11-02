import type { DibodevSectionTone } from '~/core/types/DibodevSectionTone'

export type DibodevIconCardTone = 'violet' | 'cyan' | 'amber' | 'green' | 'pink'

/** Link at the bottom of a card: `to` is an already localized path. */
export type DibodevIconCardLink = {
  label: string
  to: string
}

/** Optional texts are empty strings, and a card without a link has `link: null`. */
export type DibodevIconCard = {
  key: string
  icon: string
  iconTone: DibodevIconCardTone
  eyebrow: string
  title: string
  text: string
  note: string
  link: DibodevIconCardLink | null
}

export type DibodevIconCardsColumns = 2 | 3 | 4

/**
 * Props of the section of cards with an icon.
 * @type {DibodevIconCardsSectionProps}
 * @property {string} anchorId - Id of the section, for in-page links.
 * @property {string} eyebrow - Small uppercase line above the title.
 * @property {string} title - The section title.
 * @property {string} intro - Optional paragraph under the title.
 * @property {'left' | 'center'} align - Alignment of the heading.
 * @property {DibodevIconCard[]} cards - The cards, in display order.
 * @property {DibodevIconCardsColumns} columns - Cards per row on large screens.
 * @property {string} highlightedKey - Key of the card drawn with the violet border, empty for none.
 * @property {string} trackingLocation - `location` sent with `tool_teaser_clicked` when a card link is clicked.
 * @property {DibodevSectionTone} tone - Background tone of the section.
 */
export type DibodevIconCardsSectionProps = {
  anchorId: string
  eyebrow: string
  title: string
  intro: string
  align: 'left' | 'center'
  cards: DibodevIconCard[]
  columns: DibodevIconCardsColumns
  highlightedKey: string
  trackingLocation: string
  tone: DibodevSectionTone
}
