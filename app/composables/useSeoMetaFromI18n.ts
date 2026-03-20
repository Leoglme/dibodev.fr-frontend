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

const SECTOR_ROUTE_NAME = 'projects-sector-slug'
const CATEGORY_ROUTE_NAME = 'projects-category-slug'

/** Path secteur : /projets/secteur/x, /en/projects/sector/x, /es/proyectos/sector/x */
const SECTOR_PATH_REGEX = /^\/(?:(?:en|es)\/)?(?:projets\/secteur|projects\/sector|proyectos\/sector)\/[^/]+$/i
/** Path catégorie : /projets/categorie/x, /en/projects/category/x, /es/proyectos/categoria/x */
const CATEGORY_PATH_REGEX = /^\/(?:(?:en|es)\/)?(?:projets\/categorie|projects\/category|proyectos\/categoria)\/[^/]+$/i

/** Routes dont le slug dépend de la locale (canonical + hreflang gérés par la page). */
function isRouteWithLocaleDependentSlug(route: { path?: string; name?: string | symbol }): boolean {
  const name = typeof route.name === 'string' ? route.name : ''
  if (name === SECTOR_ROUTE_NAME || name.startsWith(`${SECTOR_ROUTE_NAME}__`)) return true
  if (name === CATEGORY_ROUTE_NAME || name.startsWith(`${CATEGORY_ROUTE_NAME}__`)) return true
  const p = (route.path ?? '').trim().toLowerCase().replace(/^\/+/, '/')
  return (
    SECTOR_PATH_REGEX.test(p) ||
    p.includes('/secteur/') ||
    p.includes('/sector/') ||
    CATEGORY_PATH_REGEX.test(p) ||
    p.includes('/categorie/') ||
    p.includes('/category/') ||
    p.includes('/categoria/')
  )
}

export function useSeoMetaFromI18n(): void {
  const { t, locale } = useI18n()
  const route = useRoute()
  const switchLocalePath = useSwitchLocalePath()

  useHead(() => {
    const path: string = route.path ?? ''
    const skipLinkAlternates: boolean = isRouteWithLocaleDependentSlug(route)

    // Canonical basé sur la route courante (fiable) + normalisation trailing slash
    const canonicalUrl = buildCanonicalUrl(path)

    // Alternates hreflang (fallback si switchLocalePath renvoie null). À ne pas ajouter pour les pages dont le slug varie par locale (ex. secteur), la page fournit ses propres liens.
    const alternateLinks: Array<{ rel: string; hreflang: string; href: string }> = skipLinkAlternates
      ? []
      : SEO_LOCALES.map(({ code, hreflang }) => {
          const pathForLocale = switchLocalePath(code) || path
          return {
            rel: 'alternate',
            hreflang,
            href: buildCanonicalUrl(pathForLocale),
          }
        })

    if (!skipLinkAlternates) {
      const defaultPath = switchLocalePath(DEFAULT_LOCALE_CODE) || path
      alternateLinks.push({
        rel: 'alternate',
        hreflang: 'x-default',
        href: buildCanonicalUrl(defaultPath),
      })
    }

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

    const ogImageUrl: string = `${CANONICAL_ORIGIN}/android-chrome-512x512.png`

    const head: {
      title: string
      meta: Array<{ name?: string; property?: string; content: string }>
      htmlAttrs: { lang: string }
      link?: Array<{ rel: string; hreflang?: string; href: string }>
    } = {
      title: t('meta.title'),
      meta: [
        { name: 'description', content: t('meta.description') },
        { property: 'og:url', content: canonicalUrl },
        { property: 'og:title', content: t('meta.title') },
        { property: 'og:description', content: t('meta.description') },
        { property: 'og:image', content: ogImageUrl },
        { property: 'og:type', content: 'website' },
        ...ogLocaleMeta,
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:image', content: ogImageUrl },
      ],
      htmlAttrs: {
        lang: locale.value,
      },
    }
    if (!skipLinkAlternates) {
      head.link = [{ rel: 'canonical', href: canonicalUrl }, ...alternateLinks]
    }
    return head
  })
}
