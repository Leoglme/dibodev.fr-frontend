import type { DibodevSectionTone } from '~/core/types/DibodevSectionTone'

export type DibodevNumberedGuideItem = {
  title: string
  text: string
  pitfall: string
}

/**
 * Props of the section of numbered cards, read in order.
 * @type {DibodevNumberedGuideSectionProps}
 * @property {string} anchorId - Id of the section, for in-page links.
 * @property {string} eyebrow - Small uppercase line above the title.
 * @property {string} title - The section title.
 * @property {string} intro - Optional paragraph under the title.
 * @property {string} pitfallLabel - Small label above each pitfall ("L'erreur fréquente").
 * @property {DibodevNumberedGuideItem[]} items - The items, numbered from 1 in this order.
 * @property {DibodevSectionTone} tone - Background tone of the section.
 */
export type DibodevNumberedGuideSectionProps = {
  anchorId: string
  eyebrow: string
  title: string
  intro: string
  pitfallLabel: string
  items: DibodevNumberedGuideItem[]
  tone: DibodevSectionTone
}
