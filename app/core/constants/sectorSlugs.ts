/**
 * Mapping Secteur <=> slug par locale (SEO routes).
 * 9 secteurs : sport-loisirs, immobilier, sante, voyage-transport, productivite,
 * logistique, b2b, reseaux-sociaux, gaming
 */

import type { SectorKey } from '~/core/constants/projectEnums'
import { SECTOR_KEYS } from '~/core/constants/projectEnums'

export type SupportedLocale = 'fr' | 'en' | 'es'

/** Slug par secteur et par locale. */
export const SECTOR_SLUGS: Record<SupportedLocale, Record<SectorKey, string>> = {
  fr: {
    'sport-loisirs': 'sport-loisirs',
    immobilier: 'immobilier',
    sante: 'sante',
    'voyage-transport': 'voyage-transport',
    productivite: 'productivite',
    logistique: 'logistique',
    b2b: 'b2b',
    'reseaux-sociaux': 'reseaux-sociaux',
    gaming: 'gaming',
  },
  en: {
    'sport-loisirs': 'sports-leisure',
    immobilier: 'real-estate',
    sante: 'health',
    'voyage-transport': 'travel-transport',
    productivite: 'productivity',
    logistique: 'logistics',
    b2b: 'b2b',
    'reseaux-sociaux': 'social-networks',
    gaming: 'gaming',
  },
  es: {
    'sport-loisirs': 'deporte-ocio',
    immobilier: 'inmobiliaria',
    sante: 'salud',
    'voyage-transport': 'viaje-transporte',
    productivite: 'productividad',
    logistique: 'logistica',
    b2b: 'b2b',
    'reseaux-sociaux': 'redes-sociales',
    gaming: 'gaming',
  },
}

/** Tous les slugs secteur (toutes locales) pour détecter une page secteur à partir du path. */
export const ALL_SECTOR_SLUGS = new Set(
  (['fr', 'en', 'es'] as const).flatMap((loc) => Object.values(SECTOR_SLUGS[loc])),
)

/**
 * Retourne le slug SEO pour un secteur dans la locale donnée.
 */
export function sectorToSlug(locale: SupportedLocale, sectorKey: SectorKey): string {
  return SECTOR_SLUGS[locale][sectorKey]
}

/**
 * Résout un SectorKey à partir du slug et de la locale.
 * Retourne null si le slug ne correspond à aucun secteur.
 */
export function parseSectorFromSlug(locale: SupportedLocale, slug: string): SectorKey | null {
  const normalized = slug.trim().toLowerCase()
  if (!normalized) return null
  const slugsForLocale = SECTOR_SLUGS[locale]
  const entry = (Object.entries(slugsForLocale) as [SectorKey, string][]).find(([, s]) => s === normalized)
  return entry ? entry[0] : null
}

/**
 * Retourne le label affiché pour un secteur dans la locale donnée.
 * Les labels sont gérés via i18n (projects.sectors.*) ; ce helper est utilisé
 * côté serveur ou quand i18n n’est pas disponible. En composant, préférer $t('projects.sectors.' + key).
 */
export function sectorLabelByLocale(
  locale: SupportedLocale,
  sectorKey: SectorKey,
  i18nLabels?: Record<SectorKey, string>,
): string {
  if (i18nLabels) return i18nLabels[sectorKey]
  const labelsFr: Record<SectorKey, string> = {
    'sport-loisirs': 'Sport & Loisirs',
    immobilier: 'Immobilier',
    sante: 'Santé',
    'voyage-transport': 'Voyage & Transport',
    productivite: 'Productivité',
    logistique: 'Logistique',
    b2b: 'B2B',
    'reseaux-sociaux': 'Réseaux sociaux',
    gaming: 'Gaming',
  }
  const labelsEn: Record<SectorKey, string> = {
    'sport-loisirs': 'Sports & Leisure',
    immobilier: 'Real estate',
    sante: 'Health',
    'voyage-transport': 'Travel & Transport',
    productivite: 'Productivity',
    logistique: 'Logistics',
    b2b: 'B2B',
    'reseaux-sociaux': 'Social networks',
    gaming: 'Gaming',
  }
  const labelsEs: Record<SectorKey, string> = {
    'sport-loisirs': 'Deporte y ocio',
    immobilier: 'Inmobiliaria',
    sante: 'Salud',
    'voyage-transport': 'Viaje y transporte',
    productivite: 'Productividad',
    logistique: 'Logística',
    b2b: 'B2B',
    'reseaux-sociaux': 'Redes sociales',
    gaming: 'Gaming',
  }
  const map: Record<SupportedLocale, Record<SectorKey, string>> = {
    fr: labelsFr,
    en: labelsEn,
    es: labelsEs,
  }
  return map[locale][sectorKey] ?? labelsFr[sectorKey]
}

/** Liste des SectorKey pour itération (ordre stable). */
export function allSectorKeys(): SectorKey[] {
  return [...SECTOR_KEYS]
}

/**
 * URLs secteur à ignorer au prerender : slug d'une langue sur le path d'une autre (ex. /en/projects/sector/sante).
 * On n'ignore que si le slug n'est pas le bon pour ce path (ex. on n'ignore pas /projets/secteur/b2b car b2b est le slug FR).
 */
export function getPrerenderSectorIgnoreUrls(): string[] {
  const urls: string[] = []
  const locales: SupportedLocale[] = ['fr', 'en', 'es']
  const pathByLocale: Record<SupportedLocale, (slug: string) => string> = {
    fr: (slug) => `/projets/secteur/${slug}`,
    en: (slug) => `/en/projects/sector/${slug}`,
    es: (slug) => `/es/proyectos/sector/${slug}`,
  }
  for (const pathLocale of locales) {
    const correctSlugs = new Set(Object.values(SECTOR_SLUGS[pathLocale]))
    for (const otherLocale of locales) {
      if (otherLocale === pathLocale) continue
      for (const slug of Object.values(SECTOR_SLUGS[otherLocale])) {
        if (!correctSlugs.has(slug)) urls.push(pathByLocale[pathLocale](slug))
      }
    }
  }
  return [...new Set(urls)]
}
