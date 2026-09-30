import type { DibodevProjectCaseStudyColumn } from '~/core/types/DibodevProjectCaseStudy'
import type { DibodevSectionTone } from '~/core/types/DibodevSectionTone'
import type { DibodevStatItemProps } from '~/core/types/DibodevStat'

/**
 * Type definitions for the DibodevProjectCaseStudySection component props.
 * @type {DibodevProjectCaseStudySectionProps}
 * @property {string} eyebrow - Small uppercase line displayed above the title.
 * @property {string} title - The section title.
 * @property {string} intro - Paragraph displayed under the title (role and period on the project).
 * @property {DibodevStatItemProps[]} stats - Key figures, shown in a band under the heading.
 * @property {DibodevProjectCaseStudyColumn[]} columns - Before, built and after, in reading order.
 * @property {DibodevSectionTone} tone - Background tone of the section.
 */
export type DibodevProjectCaseStudySectionProps = {
  eyebrow: string
  title: string
  intro: string
  stats: DibodevStatItemProps[]
  columns: DibodevProjectCaseStudyColumn[]
  tone: DibodevSectionTone
}
