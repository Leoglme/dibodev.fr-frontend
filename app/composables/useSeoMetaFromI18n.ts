/**
 * Composable pour définir les meta SEO (title, description, lang), canonical, hreflang et og:url
 * depuis les traductions i18n. Réactif au changement de locale.
 * URLs canoniques : https://dibodev.fr, sans www, sans slash final, sans querystring.
 */

import type { SeoMetaTag } from '~/core/types/SeoMetaTag'

const CANONICAL_ORIGIN = 'https://dibodev.fr'
const SITE_NAME: string = 'Dibodev'

const SEO_LOCALES = [
  { code: 'fr', hreflang: 'fr-FR' as const },
  { code: 'en', hreflang: 'en-US' as const },
  { code: 'es', hreflang: 'es-ES' as const },
] as const

const DEFAULT_LOCALE_CODE = 'fr'
const ROUTE_NAME_LOCALE_SEPARATOR: string = '___'

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

const BLOG_ARTICLE_ROUTE_NAME: string = 'blog-slug'
const BLOG_ARTICLE_PATH_REGEX: RegExp = /^\/(?:(?:en|es)\/)?blog\/[^/]+$/i

/**
 * Tells whether the route is a blog article, whose page declares only its translated locales (canonical + hreflang).
 *
 * @param {{ path?: string; name?: string | symbol }} route - The current route.
 * @returns {boolean} True for /blog/x, /en/blog/x and /es/blog/x.
 */
function isBlogArticleRoute(route: { path?: string; name?: string | symbol }): boolean {
  const name: string = typeof route.name === 'string' ? route.name : ''
  if (name === BLOG_ARTICLE_ROUTE_NAME || name.startsWith(`${BLOG_ARTICLE_ROUTE_NAME}___`)) return true
  return BLOG_ARTICLE_PATH_REGEX.test(normalizeUrlPath(route.path ?? ''))
}

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
  const router = useRouter()
  const switchLocalePath = useSwitchLocalePath()

  /**
   * Tells whether the current page exists in a locale, since a page written for one country has no /en or /es copy.
   * @param {string} code - The locale code.
   * @returns {boolean} True when the page exists in this locale, or when the route has no localized name to check.
   */
  function isPageGeneratedInLocale(code: string): boolean {
    const routeName: string = typeof route.name === 'string' ? route.name : ''
    const baseRouteName: string = routeName.split(ROUTE_NAME_LOCALE_SEPARATOR)[0] ?? ''
    if (!routeName.includes(ROUTE_NAME_LOCALE_SEPARATOR) || !baseRouteName) return true
    return router.hasRoute(`${baseRouteName}${ROUTE_NAME_LOCALE_SEPARATOR}${code}`)
  }

  useHead(() => {
    const path: string = route.path ?? ''
    const skipLinkAlternates: boolean = isRouteWithLocaleDependentSlug(route) || isBlogArticleRoute(route)
    const pageLocales: (typeof SEO_LOCALES)[number][] = SEO_LOCALES.filter(
      ({ code }: (typeof SEO_LOCALES)[number]): boolean => isPageGeneratedInLocale(code),
    )

    // Canonical basé sur la route courante (fiable) + normalisation trailing slash
    const canonicalUrl = buildCanonicalUrl(path)

    // Alternates hreflang (fallback si switchLocalePath renvoie null). À ne pas ajouter pour les pages dont le slug varie par locale (ex. secteur), la page fournit ses propres liens.
    // La `key` par hreflang est partagée avec les composables SEO de page (useSectorSeo/useCategorySeo) : sur ces routes, switchLocalePath ne traduit pas le slug et produirait un hreflang en 404 ; la version émise par la page (enregistrée après app.vue) écrase donc la nôtre via cette dédup.
    const alternateLinks: Array<{ rel: string; hreflang: string; href: string; key: string }> = skipLinkAlternates
      ? []
      : pageLocales.map(({ code, hreflang }) => {
          const pathForLocale = switchLocalePath(code) || path
          return {
            rel: 'alternate',
            hreflang,
            href: buildCanonicalUrl(pathForLocale),
            key: `i18n-alternate-${hreflang}`,
          }
        })

    if (!skipLinkAlternates) {
      const defaultPath = switchLocalePath(DEFAULT_LOCALE_CODE) || path
      alternateLinks.push({
        rel: 'alternate',
        hreflang: 'x-default',
        href: buildCanonicalUrl(defaultPath),
        key: 'i18n-alternate-x-default',
      })
    }

    // OG locale : uniquement si la locale courante est connue (évite doublons / cas inconnus)
    const currentLocaleEntry = SEO_LOCALES.find((l) => l.code === locale.value)
    const currentHreflang = currentLocaleEntry?.hreflang
    const ogLocaleMeta: Array<{ property: string; content: string }> = []
    if (currentHreflang) {
      // Open Graph expects "fr_FR", unlike hreflang ("fr-FR").
      ogLocaleMeta.push({ property: 'og:locale', content: currentHreflang.replace('-', '_') })
      // Alternates OG = autres locales connues uniquement (sans doublon, exclut la courante)
      const alternateHreflangs = pageLocales
        .filter((l) => l.code !== locale.value)
        .map((l) => l.hreflang.replace('-', '_'))
      ogLocaleMeta.push(...alternateHreflangs.map((content) => ({ property: 'og:locale:alternate' as const, content })))
    }
    // Si locale.value inconnue : on n’ajoute que og:url (pas og:locale ni alternates)

    const head: {
      title: string
      meta: SeoMetaTag[]
      htmlAttrs: { lang: string }
      link?: Array<{ rel: string; hreflang?: string; href: string; key?: string }>
    } = {
      title: t('meta.title'),
      meta: [
        { name: 'description', content: t('meta.description') },
        { property: 'og:url', content: canonicalUrl },
        { property: 'og:title', content: t('meta.title') },
        { property: 'og:description', content: t('meta.description') },
        { property: 'og:site_name', content: SITE_NAME },
        { property: 'og:type', content: 'website' },
        ...ogLocaleMeta,
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
