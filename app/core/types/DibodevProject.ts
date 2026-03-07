import type { SectorKey, CategoryKey } from '~/core/constants/projectEnums'

/**
 * Type definitions for DibodevProject
 * @type {DibodevProject}
 * @property {string} name - Nom du projet, affiché en H1 (descriptif et SEO-friendly)
 * @property {string} primaryColor - The primaryColor associated with the project
 * @property {string} [secondaryColor] - The secondaryColor associated with the project (optional)
 * @property {string} logoUrl - The URL of the project's logo
 * @property {CategoryKey[]} categories - The category keys the project belongs to (e.g. ["site-web", "saas"])
 * @property {SectorKey[]} [sectors] - Sector keys (e.g. ["sport-loisirs", "b2b"])
 * @property {string} date - The date of the project in ISO format (e.g., "2025-07-01")
 * @property {string} shortDescription - A short description of the project
 * @property {DibodevProjectLongDescription} longDescription - Detailed description: plain text or RichText document
 * @property {string} siteUrl - The URL of the project's website
 * @property {string[]} stack - The technology stack used in the project
 * @property {string} [repoUrl] - The URL of the project's repository (if available)
 * @property {string} [media1] - The URL of the first media asset (if available)
 * @property {string} [media2] - The URL of the second media asset (if available)
 * @property {string} route - The route for accessing the project
 * @property {string[]} tags - Tags associated with the project
 * @property {string} metaTitle - The meta title for SEO purposes
 * @property {string} metaDescription - The meta description for SEO purposes
 * @property {boolean} isFavorite - Indicates if the project is marked as a favorite
 */
/** Document Richtext Storyblok (forme minimale pour projet longDescription). */
export type DibodevProjectLongDescription =
  | string
  | {
      type: string
      content?: Array<{ type: string; content?: unknown[]; attrs?: Record<string, unknown>; text?: string }>
    }

export type DibodevProject = {
  name: string
  primaryColor: string
  secondaryColor?: string
  logoUrl: string
  categories: CategoryKey[]
  sectors?: SectorKey[]
  date: string // format ISO ex: "2025-07-01"
  shortDescription: string
  longDescription: DibodevProjectLongDescription
  siteUrl?: string
  stack: string[]
  repoUrl?: string
  media1?: string
  media2?: string
  route: string
  tags: string[]
  metaTitle: string
  metaDescription: string
  isFavorite: boolean
}

/**
 * Type definitions for DibodevProjectCategory
 * @type {DibodevProjectCategory}
 * @property {string} name - The name of the category
 * @property {string} color - The color associated with the category
 * @property {string} backgroundColor - The background color associated with the category
 */
export type DibodevProjectCategory = {
  name: string
  color: string
  backgroundColor: string
}
