import type { DibodevSectionTone } from '~/core/types/DibodevSectionTone'

/** Tailwind background class of each section tone (full class names so Tailwind keeps them). */
export const SECTION_TONE_CLASSES: Record<DibodevSectionTone, string> = {
  white: 'bg-white',
  offWhite: 'bg-gray-800',
  tint: 'bg-surface-tint',
}

/** Background of a card placed on a section of the given tone: cards stay readable by contrasting with the band. */
export const SECTION_TONE_CARD_CLASSES: Record<DibodevSectionTone, string> = {
  white: 'bg-gray-800',
  offWhite: 'bg-white',
  tint: 'bg-white',
}
