import type { DibodevProject } from '~/core/types/DibodevProject'

/**
 * Type definitions for the dibodev recommended button component props
 * @type {DibodevRecommendedProjectSectionProps}
 * @property {DibodevProject} currentProject - The current project to display recommendations for
 */
export type DibodevRecommendedProjectSectionProps = {
  currentProject: DibodevProject
}
