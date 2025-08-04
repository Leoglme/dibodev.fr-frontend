export const dibodevBadgeSizes: string[] = ['sm', 'md', 'lg', 'xl']
/**
 * Type definitions for the DibodevBadge component props
 * @type {DibodevBadgeSize}
 * @property {string} sm - Small size
 * @property {string} md - Medium size
 * @property {string} lg - Large size
 * @property {string} xl - Extra large size
 */
export type DibodevBadgeSize = (typeof dibodevBadgeSizes)[number]

/**
 * Type definitions for the DibodevBadge component props
 * @type {DibodevBadgeProps}
 * @property {boolean} close - Whether to show the close button
 * @property {string} backgroundColor - The background color of the badge
 * @property {string | null} textColor - The text color of the badge
 * @property {DibodevBadgeSize} size - The size of the badge
 */
export type DibodevBadgeProps = {
  close: boolean
  backgroundColor: string
  textColor?: string | null
  size: DibodevBadgeSize
}
