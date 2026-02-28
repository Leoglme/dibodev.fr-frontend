/**
 * Composable pour définir les meta SEO (title, description, lang), canonical, hreflang et og:url
 * depuis les traductions i18n. Réactif au changement de locale.
 * URLs canoniques : https://dibodev.fr, sans www, sans slash final, sans querystring.
 */

const CANONICAL_ORIGIN = 'https://dibodev.fr'

const SEO_LOCALES = [
  { code: 'fr', hreflang: 'fr-FR' as const },
  { code: 'en', hreflang: 'en-US' as const },
  { code: 'es', hreflang: 'es-ES' as const },
] as const

const DEFAULT_LOCALE_CODE = 'fr'

export function normalizeUrlPath(path: string): string {
  const withoutQuery = path.includes('?') ? path.slice(0, path.indexOf('?')) : path
  const trimmed = withoutQuery.replace(/\/+$/, '') || '/'
  return trimmed
}

function buildCanonicalUrl(path: string): string {
  const normalized = normalizeUrlPath(path)
  const pathPart = normalized === '/' ? '' : normalized
  return `${CANONICAL_ORIGIN}${pathPart}`
}

export function useSeoMetaFromI18n(): void {
  const { t, locale } = useI18n()
  const route = useRoute()
  const switchLocalePath = useSwitchLocalePath()

  useHead(() => {
    // Canonical basé sur la route courante (fiable) + normalisation trailing slash
    const canonicalUrl = buildCanonicalUrl(route.path)

    // Alternates hreflang (fallback si switchLocalePath renvoie null)
    const alternateLinks: Array<{ rel: string; hreflang: string; href: string }> = SEO_LOCALES.map(
      ({ code, hreflang }) => {
        const pathForLocale = switchLocalePath(code) || route.path
        return {
          rel: 'alternate',
          hreflang,
          href: buildCanonicalUrl(pathForLocale),
        }
      },
    )

    // x-default -> locale par défaut (FR)
    const defaultPath = switchLocalePath(DEFAULT_LOCALE_CODE) || route.path
    alternateLinks.push({
      rel: 'alternate',
      hreflang: 'x-default',
      href: buildCanonicalUrl(defaultPath),
    })

    // OG locale : uniquement si la locale courante est connue (évite doublons / cas inconnus)
    const currentLocaleEntry = SEO_LOCALES.find((l) => l.code === locale.value)
    const currentHreflang = currentLocaleEntry?.hreflang
    const ogLocaleMeta: Array<{ property: string; content: string }> = []
    if (currentHreflang) {
      ogLocaleMeta.push({ property: 'og:locale', content: currentHreflang })
      // Alternates OG = autres locales connues uniquement (sans doublon, exclut la courante)
      const alternateHreflangs = SEO_LOCALES.filter((l) => l.code !== locale.value).map((l) => l.hreflang)
      ogLocaleMeta.push(...alternateHreflangs.map((content) => ({ property: 'og:locale:alternate' as const, content })))
    }
    // Si locale.value inconnue : on n’ajoute que og:url (pas og:locale ni alternates)

    return {
      title: t('meta.title'),
      meta: [
        { name: 'description', content: t('meta.description') },
        { property: 'og:url', content: canonicalUrl },
        { property: 'og:title', content: t('meta.title') },
        { property: 'og:description', content: t('meta.description') },
        ...ogLocaleMeta,
      ],
      link: [{ rel: 'canonical', href: canonicalUrl }, ...alternateLinks],
      htmlAttrs: {
        lang: locale.value,
      },
    }
  })
}
