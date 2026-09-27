import type { SeoMetaTag } from '~/core/types/SeoMetaTag'
import type { ShareImagePage } from '~/core/types/ShareImagePage'
import { buildShareImageMeta, getPageShareImageUrl } from '~/config/shareImage'

export type PageShareImageMetaBuilder = (page: ShareImagePage) => SeoMetaTag[]

/**
 * Gives pages their localized share image, with an alternative text naming the label drawn on the image.
 * @returns {PageShareImageMetaBuilder} The builder to call inside a reactive useHead.
 */
export function usePageShareImageMeta(): PageShareImageMetaBuilder {
  const { t, locale } = useI18n()

  /**
   * Builds the share image meta tags of a page in the current locale.
   * @param {ShareImagePage} page - The page the share image belongs to.
   * @returns {SeoMetaTag[]} The Open Graph and X meta tags of the share image.
   */
  function buildPageShareImageMeta(page: ShareImagePage): SeoMetaTag[] {
    const imageAlt: string = t('meta.shareImage.alt', { pageLabel: t(`meta.shareImage.pageLabels.${page}`) })
    return buildShareImageMeta(getPageShareImageUrl(page, locale.value), imageAlt)
  }

  return buildPageShareImageMeta
}
