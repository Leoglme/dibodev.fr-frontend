/**
 * Metas et hreflang pour les pages catégorie (projects/category/[slug]).
 * buildCategorySeo(locale, categoryKey) => title, description, canonical, link (hreflang), meta (og).
 */

import type { CategoryKey } from '~/core/constants/projectEnums'
import type { SupportedLocale } from '~/core/constants/categorySlugs'
import { categoryToSlug } from '~/core/constants/categorySlugs'
import { normalizeUrlPath } from '~/composables/useSeoMetaFromI18n'

const CANONICAL_ORIGIN = 'https://dibodev.fr'
const DEFAULT_OG_IMAGE_URL = `${CANONICAL_ORIGIN}/android-chrome-512x512.png`

const SEO_LOCALES: Array<{ code: SupportedLocale; hreflang: 'fr-FR' | 'en-US' | 'es-ES' }> = [
  { code: 'fr', hreflang: 'fr-FR' },
  { code: 'en', hreflang: 'en-US' },
  { code: 'es', hreflang: 'es-ES' },
]

function buildCanonicalUrl(path: string): string {
  const normalized = normalizeUrlPath(path)
  const pathPart = normalized === '/' ? '' : normalized
  return `${CANONICAL_ORIGIN}${pathPart}`
}

/**
 * Construit le path de la page catégorie pour une locale (sans origin).
 * FR: /projets/categorie/site-web, EN: /en/projects/category/site-web, ES: /es/proyectos/categoria/site-web
 */
export function getCategoryPagePath(locale: SupportedLocale, categoryKey: CategoryKey): string {
  const slug: string = categoryToSlug(locale, categoryKey)
  const pathByLocale: Record<SupportedLocale, string> = {
    fr: `/projets/categorie/${slug}`,
    en: `/projects/category/${slug}`,
    es: `/proyectos/categoria/${slug}`,
  }
  const path: string = pathByLocale[locale]
  if (locale === 'fr') return path
  return `/${locale}${path}`
}

export interface CategorySeoResult {
  title: string
  description: string
  canonical: string
  link: Array<{ rel: string; hreflang: string; href: string }>
  meta: Array<{ property?: string; name?: string; content: string }>
}

/**
 * Construit les métadonnées SEO pour une page catégorie.
 */
export function buildCategorySeo(
  locale: SupportedLocale,
  categoryKey: CategoryKey,
  title: string,
  description: string,
): CategorySeoResult {
  const currentPath = getCategoryPagePath(locale, categoryKey)
  const canonical = buildCanonicalUrl(currentPath)

  const link: CategorySeoResult['link'] = SEO_LOCALES.map(({ code, hreflang }) => {
    const path = getCategoryPagePath(code, categoryKey)
    return {
      rel: 'alternate',
      hreflang,
      href: buildCanonicalUrl(path),
    }
  })
  link.push({
    rel: 'alternate',
    hreflang: 'x-default',
    href: buildCanonicalUrl(getCategoryPagePath('fr', categoryKey)),
  })

  const meta: CategorySeoResult['meta'] = [
    { name: 'description', content: description },
    { property: 'og:url', content: canonical },
    { property: 'og:title', content: title },
    { property: 'og:description', content: description },
    { property: 'og:image', content: DEFAULT_OG_IMAGE_URL },
    { property: 'og:type', content: 'website' },
  ]

  return {
    title,
    description,
    canonical,
    link,
    meta,
  }
}
