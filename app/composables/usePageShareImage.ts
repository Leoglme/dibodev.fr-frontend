import type { ShareImagePage } from '~/core/types/ShareImagePage'

/**
 * Gives the current page its share image, rendered at build time with the label of the page drawn on it.
 * @param {ShareImagePage} page - The page whose label is drawn on the image.
 * @returns {void}
 */
export function usePageShareImage(page: ShareImagePage): void {
  const { t } = useI18n()
  const label: string = t(`meta.shareImage.pageLabels.${page}`)

  defineOgImageComponent(
    'DibodevPageShareImage',
    { page, label, role: t('meta.shareImage.role'), place: t('meta.shareImage.place') },
    { alt: t('meta.shareImage.alt', { pageLabel: label }) },
  )
}
