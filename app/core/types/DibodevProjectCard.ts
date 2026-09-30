import type { DibodevProjectCardScreenshot } from '~/core/types/DibodevProjectCardScreenshot'

/**
 * Type definitions for the DibodevProjectCard component props.
 * @type {DibodevProjectCardProps}
 * @property {string} name - The full name of the project ("Short name — tagline").
 * @property {string} description - A brief description of the project, shown when the name has no tagline.
 * @property {string} [createdAt] - The creation date of the project.
 * @property {string} logo - The URL or path to the project's logo image.
 * @property {DibodevProjectCardScreenshot | null} [screenshot] - Screenshot shown at the top of the card (logo panel when null).
 * @property {string} [primaryColor] - The primary color of the project card.
 * @property {string} [secondaryColor] - The secondary color of the project card.
 * @property {string} [route] - Canonical route from Storyblok (e.g. /project/stockpme). When provided, used for the link instead of deriving from name.
 * @property {string[]} [categories] - Optional categories/tags (e.g. SaaS, IA, Web app) displayed on the card.
 */
export type DibodevProjectCardProps = {
  name: string
  description: string
  createdAt?: string
  logo: string
  screenshot?: DibodevProjectCardScreenshot | null
  primaryColor?: string
  secondaryColor?: string
  route?: string
  categories?: string[]
}
