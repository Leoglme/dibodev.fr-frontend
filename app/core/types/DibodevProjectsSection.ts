import type { DibodevProject } from '~/core/types/DibodevProject'

/**
 * Type definitions for the DibodevProjectsSection component props.
 * @type {DibodevProjectsSectionProps}
 * @property {DibodevProject[] | null} initialProjects - Pre-filtered list (sector or category page); when null, every project is fetched.
 */
export type DibodevProjectsSectionProps = {
  initialProjects: DibodevProject[] | null
}
