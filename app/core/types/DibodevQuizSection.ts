import type { DibodevQuizDefinition } from '~/core/types/DibodevQuiz'
import type { DibodevSectionTone } from '~/core/types/DibodevSectionTone'

/**
 * Type definitions for the DibodevQuizSection component props.
 * @type {DibodevQuizSectionProps}
 * @property {string} anchorId - Id of the section, for in-page links to the test.
 * @property {string} eyebrow - Small uppercase line displayed above the title.
 * @property {string} title - The section title.
 * @property {string} intro - Optional paragraph displayed under the title.
 * @property {DibodevQuizDefinition} quiz - The test shown in the section.
 * @property {DibodevSectionTone} tone - Background tone of the section.
 */
export type DibodevQuizSectionProps = {
  anchorId: string
  eyebrow: string
  title: string
  intro: string
  quiz: DibodevQuizDefinition
  tone: DibodevSectionTone
}
