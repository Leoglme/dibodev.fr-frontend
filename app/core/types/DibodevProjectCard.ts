/**
 * Type definitions for the DibodevProjectCard component props.
 * @type {DibodevProjectCardProps}
 * @property {string} name - The name of the project.
 * @property {string} description - A brief description of the project.
 * @property {string} logo - The URL or path to the project's logo image.
 * @property {string} [primaryColor] - The primary color of the project card.
 * @property {string} [secondaryColor] - The secondary color of the project card.
 */
export type DibodevProjectCardProps = {
  name: string
  description: string
  createdAt?: string
  logo: string
  primaryColor?: string
  secondaryColor?: string
}
