import type { SeoMetaTag } from '~/core/types/SeoMetaTag'

/** Every share image of the site is a 1200×630 JPEG: the size expected by LinkedIn, Facebook, WhatsApp and X. */
export const SHARE_IMAGE_WIDTH: number = 1200
export const SHARE_IMAGE_HEIGHT: number = 630
/** Site background (gray-900) behind share images that do not fill the 1200×630 frame. */
export const SHARE_IMAGE_BACKGROUND_COLOR: string = '101623'

const SITE_URL: string = 'https://dibodev.fr'
const DEFAULT_SHARE_IMAGE_LOCALE: string = 'fr'
const SHARE_IMAGE_LOCALES: string[] = ['fr', 'en', 'es']

/**
 * Returns the absolute URL of the default share image in the given locale.
 * @param {string} locale - The current locale code.
 * @returns {string} The absolute URL of the localized default share image.
 */
export function getDefaultShareImageUrl(locale: string): string {
  const imageLocale: string = SHARE_IMAGE_LOCALES.includes(locale) ? locale : DEFAULT_SHARE_IMAGE_LOCALE
  return `${SITE_URL}/images/og/dibodev-share-${imageLocale}.jpg`
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
