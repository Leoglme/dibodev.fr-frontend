/**
 * Composable pour définir les meta SEO (title, description, lang) depuis les traductions i18n.
 * Réactif au changement de locale.
 */
export function useSeoMetaFromI18n(): void {
  const { t, locale } = useI18n()

  useHead(() => ({
    title: t('meta.title'),
    meta: [
      {
        name: 'description',
        content: t('meta.description'),
      },
    ],
    htmlAttrs: {
      lang: locale.value,
    },
  }))
}
