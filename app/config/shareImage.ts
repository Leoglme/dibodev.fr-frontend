import type { SeoMetaTag } from '~/core/types/SeoMetaTag'
import type { ShareImagePage } from '~/core/types/ShareImagePage'

/** Every share image of the site is a 1200×630 JPEG: the size expected by LinkedIn, Facebook, WhatsApp and X. */
export const SHARE_IMAGE_WIDTH: number = 1200
export const SHARE_IMAGE_HEIGHT: number = 630
/** Site background (gray-900) behind share images that do not fill the 1200×630 frame. */
export const SHARE_IMAGE_BACKGROUND_COLOR: string = '101623'

const SITE_URL: string = 'https://dibodev.fr'
const DEFAULT_SHARE_IMAGE_LOCALE: string = 'fr'
const SHARE_IMAGE_LOCALES: string[] = ['fr', 'en', 'es']
const SHARE_IMAGE_FILE_SLUGS: Record<ShareImagePage, string> = {
  home: 'home',
  about: 'about',
  contact: 'contact',
  businessSoftware: 'business-software',
  projects: 'projects',
  blog: 'blog',
}

/**
 * Returns the absolute URL of the share image of a page in the given locale.
 * @param {ShareImagePage} page - The page the share image belongs to.
 * @param {string} locale - The current locale code.
 * @returns {string} The absolute URL of the localized share image.
 */
export function getPageShareImageUrl(page: ShareImagePage, locale: string): string {
  const imageLocale: string = SHARE_IMAGE_LOCALES.includes(locale) ? locale : DEFAULT_SHARE_IMAGE_LOCALE
  return `${SITE_URL}/images/og/dibodev-share-${SHARE_IMAGE_FILE_SLUGS[page]}-${imageLocale}.jpg`
}

/**
 * Builds the Open Graph and X meta tags describing a 1200×630 JPEG share image.
 * @param {string} imageUrl - The absolute URL of the share image.
 * @param {string} imageAlt - The alternative text of the share image.
 * @returns {SeoMetaTag[]} The meta tags to add to the page head.
 */
export function buildShareImageMeta(imageUrl: string, imageAlt: string): SeoMetaTag[] {
  return [
    { property: 'og:image', content: imageUrl },
    { property: 'og:image:secure_url', content: imageUrl },
    { property: 'og:image:type', content: 'image/jpeg' },
    { property: 'og:image:width', content: String(SHARE_IMAGE_WIDTH) },
    { property: 'og:image:height', content: String(SHARE_IMAGE_HEIGHT) },
    { property: 'og:image:alt', content: imageAlt },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:image', content: imageUrl },
    { name: 'twitter:image:alt', content: imageAlt },
  ]
}
