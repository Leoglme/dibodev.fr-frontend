import type { DibodevSectionTone } from '~/core/types/DibodevSectionTone'

/** One card of the grid: an icon on a pastel tile, a title and a sentence. */
export type DibodevFeatureCard = {
  icon: string
  title: string
  description: string
}

/**
 * Type definitions for the DibodevFeatureCardsSection component props.
 * @type {DibodevFeatureCardsSectionProps}
 * @property {string} anchorId - Id of the section, for in-page links.
 * @property {string} eyebrow - Small uppercase line displayed above the title.
 * @property {string} title - The section title.
 * @property {string} intro - Optional paragraph displayed under the title.
 * @property {DibodevFeatureCard[]} cards - The cards, in display order; their icon tiles cycle through the accent palettes.
 * @property {DibodevSectionTone} tone - Background tone of the section.
 */
export type DibodevFeatureCardsSectionProps = {
  anchorId: string
  eyebrow: string
  title: string
  intro: string
  cards: DibodevFeatureCard[]
  tone: DibodevSectionTone
}
