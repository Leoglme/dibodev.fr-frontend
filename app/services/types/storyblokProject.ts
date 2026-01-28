/**
 * Type definitions for Storyblok project content.
 *
 * This mirrors the structure of DibodevProject so that
 * Storyblok projects can be mapped 1:1 to DibodevProject.
 *
 * @type {StoryblokProjectContent}
 * @property {string} name - Human-readable project name (e.g. "AI Pneumonia Detector")
 * @property {string} primaryColor - Primary brand color in hex format
 * @property {string} [secondaryColor] - Optional secondary color in hex format
 * @property {string} logoUrl - Path/URL to the project logo
 * @property {string[]} categories - Functional categories (e.g. "Site web", "Application métier")
 * @property {string} date - Project date in ISO format (e.g. "2025-07-01")
 * @property {string} shortDescription - Short marketing description
 * @property {string} longDescription - Long, detailed description
 * @property {string} [siteUrl] - Public URL of the project, if any
 * @property {string[]} stack - Technology stack labels
 * @property {string} [repoUrl] - Optional Git repository URL
 * @property {string} [media1] - Path/URL of the first visual asset
 * @property {string} [media2] - Path/URL of the second visual asset
 * @property {string[]} tags - SEO / search tags
 * @property {string} metaTitle - SEO title for the project page
 * @property {string} metaDescription - SEO description for the project page
 * @property {boolean} isFavorite - Indicates if the project should be highlighted
 */
export type StoryblokProjectContent = {
  name: string
  primaryColor: string
  secondaryColor?: string
  logoUrl: StoryblokAssetInput
  categories: StoryblokStringListInput
  date: string
  shortDescription: string
  longDescription: string
  siteUrl?: string
  stack: StoryblokStringListInput
  repoUrl?: string
  media1?: StoryblokAssetInput
  media2?: StoryblokAssetInput
  tags: StoryblokStringListInput
  metaTitle: string
  metaDescription: string
  isFavorite: boolean
}

/**
 * Storyblok Asset field value (minimal shape we need).
 */
export type StoryblokAsset = {
  filename?: string
  alt?: string
  name?: string
  title?: string
}

/**
 * Some Storyblok setups can store either an asset object or a plain string URL.
 */
export type StoryblokAssetInput = StoryblokAsset | string | null

/**
 * Multi-value string input used by Storyblok fields.
 * Depending on the chosen field type, it can be:
 * - an array of strings (Multi-Options)
 * - a single string (Textarea) using separators (comma/newline)
 */
export type StoryblokStringListInput = string[] | string
