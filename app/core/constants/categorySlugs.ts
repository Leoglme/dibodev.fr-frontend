/**
 * Mapping Catégorie <=> slug par locale (SEO routes).
 * 6 catégories : site-web, application-mobile, saas, application-metier, logiciel, ia
 */

import type { CategoryKey } from '~/core/constants/projectEnums'
import { CATEGORY_KEYS } from '~/core/constants/projectEnums'

export type SupportedLocale = 'fr' | 'en' | 'es'

/** Slug par catégorie et par locale (SEO routes traduites). */
export const CATEGORY_SLUGS: Record<SupportedLocale, Record<CategoryKey, string>> = {
  fr: {
    'site-web': 'site-web',
    'application-mobile': 'application-mobile',
    saas: 'saas',
    'application-metier': 'application-metier',
    logiciel: 'logiciel',
    ia: 'ia',
  },
  en: {
    'site-web': 'website',
    'application-mobile': 'mobile-app',
    saas: 'saas',
    'application-metier': 'business-app',
    logiciel: 'software',
    ia: 'ai',
  },
  es: {
    'site-web': 'sitio-web',
    'application-mobile': 'aplicacion-movil',
    saas: 'saas',
    'application-metier': 'aplicacion-de-negocio',
    logiciel: 'software',
    ia: 'ia',
  },
}

/** Tous les slugs catégorie (toutes locales) pour détecter une page catégorie à partir du path. */
export const ALL_CATEGORY_SLUGS = new Set(
  (['fr', 'en', 'es'] as const).flatMap((loc) => Object.values(CATEGORY_SLUGS[loc])),
)

/**
 * Retourne le slug SEO pour une catégorie dans la locale donnée.
 */
export function categoryToSlug(locale: SupportedLocale, categoryKey: CategoryKey): string {
  return CATEGORY_SLUGS[locale][categoryKey]
}

/**
 * Résout un CategoryKey à partir du slug et de la locale.
 * Retourne null si le slug ne correspond à aucune catégorie.
 */
export function parseCategoryFromSlug(locale: SupportedLocale, slug: string): CategoryKey | null {
  const normalized = slug.trim().toLowerCase()
  if (!normalized) return null
  const slugsForLocale = CATEGORY_SLUGS[locale]
  const entry = (Object.entries(slugsForLocale) as [CategoryKey, string][]).find(([, s]) => s === normalized)
  return entry ? entry[0] : null
}

/**
 * Retourne le label affiché pour une catégorie dans la locale donnée.
 * Les labels sont gérés via i18n (projects.categories.*).
 */
export function categoryLabelByLocale(
  locale: SupportedLocale,
  categoryKey: CategoryKey,
  i18nLabels?: Record<CategoryKey, string>,
): string {
  if (i18nLabels) return i18nLabels[categoryKey]
  const labelsFr: Record<CategoryKey, string> = {
    'site-web': 'Site web',
    'application-mobile': 'Application mobile',
    saas: 'SaaS',
    'application-metier': 'Application métier',
    logiciel: 'Logiciel',
    ia: 'IA',
  }
  const labelsEn: Record<CategoryKey, string> = {
    'site-web': 'Website',
    'application-mobile': 'Mobile app',
    saas: 'SaaS',
    'application-metier': 'Business app',
    logiciel: 'Software',
    ia: 'AI',
  }
  const labelsEs: Record<CategoryKey, string> = {
    'site-web': 'Sitio web',
    'application-mobile': 'Aplicación móvil',
    saas: 'SaaS',
    'application-metier': 'Aplicación de negocio',
    logiciel: 'Software',
    ia: 'IA',
  }
  const map: Record<SupportedLocale, Record<CategoryKey, string>> = {
    fr: labelsFr,
    en: labelsEn,
    es: labelsEs,
  }
  return map[locale][categoryKey] ?? labelsFr[categoryKey]
}

/** Liste des CategoryKey pour itération (ordre stable). */
export function allCategoryKeys(): CategoryKey[] {
  return [...CATEGORY_KEYS]
}

/**
 * URLs catégorie à ignorer au prerender : slug d'une langue sur le path d'une autre
 * (ex. /en/projects/category/application-mobile → 404, le bon slug EN est mobile-app).
 */
export function getPrerenderCategoryIgnoreUrls(): string[] {
  const urls: string[] = []
  const locales: SupportedLocale[] = ['fr', 'en', 'es']
  const pathByLocale: Record<SupportedLocale, (slug: string) => string> = {
    fr: (slug) => `/projets/categorie/${slug}`,
    en: (slug) => `/en/projects/category/${slug}`,
    es: (slug) => `/es/proyectos/categoria/${slug}`,
  }
  for (const pathLocale of locales) {
    const correctSlugs = new Set(Object.values(CATEGORY_SLUGS[pathLocale]))
    for (const otherLocale of locales) {
      if (otherLocale === pathLocale) continue
      for (const slug of Object.values(CATEGORY_SLUGS[otherLocale])) {
        if (!correctSlugs.has(slug)) urls.push(pathByLocale[pathLocale](slug))
      }
    }
  }
  return [...new Set(urls)]
}
