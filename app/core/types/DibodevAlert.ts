import type { iconsList } from './DibodevIcon'

/**
 * List of available variants for the DibodevAlert component
 * @description This list is used to define the different styles and behaviors of the alert component.
 */
export const dibodevAlertVariants: string[] = ['error', 'success', 'warning', 'info'] as const

/**
 * Type definitions for the DibodevAlert component variants
 * @description This type is used to restrict the variant prop to the defined variants.
 */
export type DibodevAlertVariant = (typeof dibodevAlertVariants)[number]

/**
 * Type definitions for the DibodevAlert component props
 */
export type DibodevAlertProps = {
  message: string
  icon?: (typeof iconsList)[number]
  dismissible?: boolean
  variant?: DibodevAlertVariant
}
