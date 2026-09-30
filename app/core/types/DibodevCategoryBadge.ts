import type { DibodevBadgeSize } from '~/core/types/DibodevBadge'

/**
 * Type definitions for the DibodevCategoryBadge component props.
 * @type {DibodevCategoryBadgeProps}
 * @property {string} category - Category key (translated) or free label of a project.
 * @property {DibodevBadgeSize} size - The badge size.
 */
export type DibodevCategoryBadgeProps = {
  category: string
  size: DibodevBadgeSize
}
