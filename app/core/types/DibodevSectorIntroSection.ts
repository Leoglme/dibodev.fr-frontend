import type { DibodevAboutFact } from '~/core/types/DibodevAboutPage'

/**
 * Type definitions for the DibodevSectorIntroSection component props.
 * @type {DibodevSectorIntroSectionProps}
 * @property {string} title - Optional section title (e.g. "À propos de ce secteur").
 * @property {string} html - Intro HTML converted from the Storyblok richtext.
 * @property {DibodevAboutFact[]} facts - Key figures of the listing (projects delivered, since, sectors…).
 * @property {string[]} technologies - Technologies met on the listing's projects, most frequent first.
 * @property {string} technologiesTitle - Label of the technologies row.
 */
export type DibodevSectorIntroSectionProps = {
  title: string
  html: string
  facts: DibodevAboutFact[]
  technologies: string[]
  technologiesTitle: string
}
