import type { DibodevQuizResultExample } from '~/core/types/DibodevQuizResultExample'
import type { DibodevSectionTone } from '~/core/types/DibodevSectionTone'

/**
 * Type definitions for the DibodevQuizResultExamplesSection component props.
 * @type {DibodevQuizResultExamplesSectionProps}
 * @property {string} title - The section title.
 * @property {string} intro - Paragraph under the title.
 * @property {string[]} points - What a test result gives, one line each.
 * @property {string} ctaText - Label of the button under the points.
 * @property {string} ctaTo - Link of the button (e.g. "#free-tools" to scroll back to the tests).
 * @property {DibodevQuizResultExample[]} examples - Worked results shown side by side.
 * @property {DibodevSectionTone} tone - Background tone of the section.
 */
export type DibodevQuizResultExamplesSectionProps = {
  title: string
  intro: string
  points: string[]
  ctaText: string
  ctaTo: string
  examples: DibodevQuizResultExample[]
  tone: DibodevSectionTone
}
