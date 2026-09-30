import type { DibodevSectionTone } from '~/core/types/DibodevSectionTone'

/**
 * One question of the FAQ.
 * @type {DibodevFaqQuestion}
 * @property {string} question - The question.
 * @property {string} answer - The plain-text answer.
 */
export type DibodevFaqQuestion = {
  question: string
  answer: string
}

/**
 * Type definitions for the DibodevFaqSection component props.
 * @type {DibodevFaqSectionProps}
 * @property {string} eyebrow - Small uppercase line displayed above the title.
 * @property {string} title - The section title.
 * @property {DibodevFaqQuestion[]} questions - The questions, in display order.
 * @property {DibodevSectionTone} tone - Background tone of the section (cards contrast with it).
 */
export type DibodevFaqSectionProps = {
  eyebrow: string
  title: string
  questions: DibodevFaqQuestion[]
  tone: DibodevSectionTone
}
