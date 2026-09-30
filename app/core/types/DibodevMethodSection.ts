import type { DibodevSectionTone } from '~/core/types/DibodevSectionTone'

/**
 * One step of the working method.
 * @type {DibodevMethodStep}
 * @property {string} label - Short step name (e.g. "Échange").
 * @property {string} title - Step title.
 * @property {string} description - What happens during the step.
 */
export type DibodevMethodStep = {
  label: string
  title: string
  description: string
}

/**
 * Type definitions for the DibodevMethodSection component props.
 * @type {DibodevMethodSectionProps}
 * @property {string} eyebrow - Small uppercase line displayed above the title.
 * @property {string} title - The section title.
 * @property {string} intro - Optional paragraph displayed under the title.
 * @property {DibodevMethodStep[]} steps - The numbered steps, in order.
 * @property {DibodevSectionTone} tone - Background tone of the section.
 */
export type DibodevMethodSectionProps = {
  eyebrow: string
  title: string
  intro: string
  steps: DibodevMethodStep[]
  tone: DibodevSectionTone
}
