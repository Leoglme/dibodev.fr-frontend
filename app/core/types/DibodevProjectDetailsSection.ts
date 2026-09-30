import type { DibodevProject } from '~/core/types/DibodevProject'

/**
 * Type definitions for the DibodevProjectDetailsSection component props.
 * @type {DibodevProjectDetailsSectionProps}
 * @property {DibodevProject} project - The project displayed (description, categories, sectors, stack, links).
 * @property {string} formattedDate - The project date already formatted for display (e.g. "Juillet 2025").
 */
export type DibodevProjectDetailsSectionProps = {
  project: DibodevProject
  formattedDate: string
}
