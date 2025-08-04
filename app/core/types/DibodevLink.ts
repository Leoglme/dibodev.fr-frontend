/**
 * Type definitions for the DibodevLink component props
 * @type {DibodevLinkProps}
 * @property {boolean} externalLink - Whether the link is external or internal
 * @property {string} link - The link to navigate to
 * @property {string} [color] - Optional color for the link, defaults to primary color if not provided
 */
export type DibodevLinkProps = {
  externalLink: boolean
  link: string
  color?: string
}
