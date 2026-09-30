/**
 * Type definitions for the DibodevNavbarLink
 * @type {DibodevNavbarLink}
 * @property {string} text - The text to display in the navbar link.
 * @property {string} to - The route path to navigate to when the link is clicked
 * @property {string[]} activePrefixes - Paths whose sub-pages also mark the link as the current section.
 */
export type DibodevNavbarLink = {
  text: string
  to: string
  activePrefixes: string[]
}
