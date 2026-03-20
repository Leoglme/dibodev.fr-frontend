/**
 * Metas et hreflang pour les pages secteur (projects/sector/[slug]).
 * buildSectorSeo(locale, sectorKey) => title, description, canonical, link (hreflang), meta (og).
 */

import type { SectorKey } from '~/core/constants/projectEnums'
import type { SupportedLocale } from '~/core/constants/sectorSlugs'
import { sectorToSlug } from '~/core/constants/sectorSlugs'
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
 * Construit le path de la page secteur pour une locale (sans origin).
 * FR: /projets/secteur/sante, EN: /en/projects/sector/health, ES: /es/proyectos/sector/salud
 */
export function getSectorPagePath(locale: SupportedLocale, sectorKey: SectorKey): string {
  const slug: string = sectorToSlug(locale, sectorKey)
  const pathByLocale: Record<SupportedLocale, string> = {
    fr: `/projets/secteur/${slug}`,
    en: `/projects/sector/${slug}`,
    es: `/proyectos/sector/${slug}`,
  }
  const path: string = pathByLocale[locale]
  if (locale === 'fr') return path
  return `/${locale}${path}`
}

export interface SectorSeoResult {
  title: string
  description: string
  canonical: string
  link: Array<{ rel: string; hreflang: string; href: string }>
  meta: Array<{ property?: string; name?: string; content: string }>
}

/**
 * Construit les métadonnées SEO pour une page secteur.
 * À utiliser avec useHead() ; title/description doivent être passés (i18n ou générés).
 */
export function buildSectorSeo(
  locale: SupportedLocale,
  sectorKey: SectorKey,
  title: string,
  description: string,
): SectorSeoResult {
  const currentPath = getSectorPagePath(locale, sectorKey)
  const canonical = buildCanonicalUrl(currentPath)

  const link: SectorSeoResult['link'] = SEO_LOCALES.map(({ code, hreflang }) => {
    const path = getSectorPagePath(code, sectorKey)
    return {
      rel: 'alternate',
      hreflang,
      href: buildCanonicalUrl(path),
    }
  })
  link.push({
    rel: 'alternate',
    hreflang: 'x-default',
    href: buildCanonicalUrl(getSectorPagePath('fr', sectorKey)),
  })

  const meta: SectorSeoResult['meta'] = [
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
