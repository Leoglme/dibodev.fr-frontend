import type { DibodevStatItemProps } from '~/core/types/DibodevStat'

/**
 * The three stages of a case study, in reading order: the situation before, what was built, the results after.
 * @type {DibodevProjectCaseStudyStage}
 */
export type DibodevProjectCaseStudyStage = 'before' | 'built' | 'after'

/**
 * Translation keys of one project case study. The texts live in the locale files under `project.caseStudy.studies.<key>`.
 * @type {DibodevProjectCaseStudyDefinition}
 * @property {string} key - Key of the case study in the locale files.
 * @property {string[]} statKeys - Keys of the key figures, in display order (two to four).
 * @property {Record<DibodevProjectCaseStudyStage, string[]>} itemKeys - Keys of the list items of each stage, in display order.
 */
export type DibodevProjectCaseStudyDefinition = {
  key: string
  statKeys: string[]
  itemKeys: Record<DibodevProjectCaseStudyStage, string[]>
}

/**
 * Colours of a case study stage: its icon tile and its list markers.
 * @type {DibodevProjectCaseStudyStageAccent}
 * @property {string} color - Colour of the icon and the list markers.
 * @property {string} background - Background of the icon tile.
 */
export type DibodevProjectCaseStudyStageAccent = {
  color: string
  background: string
}

/**
 * One column of a translated case study.
 * @type {DibodevProjectCaseStudyColumn}
 * @property {DibodevProjectCaseStudyStage} stage - Before, built or after.
 * @property {string} title - The column title.
 * @property {string[]} items - The list items.
 */
export type DibodevProjectCaseStudyColumn = {
  stage: DibodevProjectCaseStudyStage
  title: string
  items: string[]
}

/**
 * A translated case study, ready for DibodevProjectCaseStudySection.
 * @type {DibodevProjectCaseStudy}
 * @property {string} role - Léo's role on the project and the period, shown under the section title.
 * @property {DibodevStatItemProps[]} stats - The key figures.
 * @property {DibodevProjectCaseStudyColumn[]} columns - Before, built and after.
 */
export type DibodevProjectCaseStudy = {
  role: string
  stats: DibodevStatItemProps[]
  columns: DibodevProjectCaseStudyColumn[]
}
