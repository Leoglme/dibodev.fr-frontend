export const dibodevButtonSizes: string[] = ['xs', 'sm', 'md', 'lg', 'xl', '2xl'] as const

/**
 * Type definitions for the dibodev button component size
 * @type {DibodevButtonSize}
 */
export type DibodevButtonSize = (typeof dibodevButtonSizes)[number]

/**
 * Type definitions for the dibodev button component props
 * @type {DibodevButtonProps}
 * @property {string | null} to - The route to navigate to
 * @property {string} backgroundColor - The button background color
 * @property {string} backgroundHoverColor - The button background hover color
 * @property {boolean} disabled - Whether the button is disabled
 * @property {string | null} icon - The icon to display
 * @property {'left' | 'right' | null} iconPosition - The icon position
 * @property {DibodevButtonSize} size - The button size
 * @property {boolean} outlined - Whether the button is outlined
 */
export type DibodevButtonProps = {
  to?: string | null
  backgroundColor: string
  backgroundHoverColor: string
  disabled: boolean
  icon?: string | null
  iconPosition?: 'left' | 'right' | null
  size: DibodevButtonSize
  outlined: boolean
}
