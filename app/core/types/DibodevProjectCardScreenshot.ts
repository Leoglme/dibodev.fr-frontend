import type { DibodevProject } from '~/core/types/DibodevProject'

/**
 * Screenshot displayed at the top of a project card.
 * @type {DibodevProjectCardScreenshot}
 * @property {string} url - Image URL (resized Storyblok asset, or a static file of the site).
 * @property {string} srcset - Responsive candidates, empty when the image cannot be resized.
 */
export type DibodevProjectCardScreenshot = {
  url: string
  srcset: string
}

/** Storyblok media fields of a project that can hold a screenshot. */
export type DibodevProjectScreenshotMediaKey = keyof Pick<DibodevProject, 'media1' | 'media2'>

/**
 * Per-project choice of the card screenshot, keyed by project slug.
 * @type {DibodevProjectCardScreenshotOverride}
 * @property {DibodevProjectScreenshotMediaKey} [media] - Storyblok media to use instead of the first one.
 * @property {string} [staticPath] - Public path of a static image used instead of the Storyblok media.
 */
export type DibodevProjectCardScreenshotOverride = {
  media?: DibodevProjectScreenshotMediaKey
  staticPath?: string
}
