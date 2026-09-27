import type { SeoMetaTag } from '~/core/types/SeoMetaTag'
import { SHARE_IMAGE_HEIGHT, SHARE_IMAGE_WIDTH } from '~/core/constants/shareImage'

/**
 * Builds the Open Graph and X meta tags describing a JPEG share image of the site size.
 * @param {string} imageUrl - The absolute URL of the share image.
 * @param {string} imageAlt - The alternative text of the share image.
 * @returns {SeoMetaTag[]} The meta tags to add to the page head.
 */
export function buildShareImageMeta(imageUrl: string, imageAlt: string): SeoMetaTag[] {
  return [
    { property: 'og:image', content: imageUrl },
    { property: 'og:image:type', content: 'image/jpeg' },
    { property: 'og:image:width', content: String(SHARE_IMAGE_WIDTH) },
    { property: 'og:image:height', content: String(SHARE_IMAGE_HEIGHT) },
    { property: 'og:image:alt', content: imageAlt },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:image', content: imageUrl },
    { name: 'twitter:image:alt', content: imageAlt },
  ]
}
