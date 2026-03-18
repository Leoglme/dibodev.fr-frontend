/**
 * Composable pour obtenir l’URL de changement de locale en gérant les slugs
 * traduits (pages secteur et catégorie). Sans ça, switchLocalePath garde le
 * slug de la locale courante (ex. /en/projects/sector/immobilier au lieu de real-estate).
 */

import type { SupportedLocale as SectorLocale } from '~/core/constants/sectorSlugs'
import { parseSectorFromSlug } from '~/core/constants/sectorSlugs'
import { getSectorPagePath } from '~/composables/useSectorSeo'
import type { SupportedLocale as CategoryLocale } from '~/core/constants/categorySlugs'
import { parseCategoryFromSlug } from '~/core/constants/categorySlugs'
import { getCategoryPagePath } from '~/composables/useCategorySeo'

const SUPPORTED_LOCALES: SectorLocale[] = ['fr', 'en', 'es']

function isSupportedLocale(code: string): code is SectorLocale {
  return SUPPORTED_LOCALES.includes(code as SectorLocale)
}

/**
 * Retourne le path vers la même page dans la locale cible.
 * Sur les pages secteur ou catégorie, le slug est converti (ex. immobilier → real-estate).
 * Sinon, délègue à useSwitchLocalePath().
 */
export function useSwitchLocalePathWithSlug(): (targetLocale: string) => string {
  const route = useRoute()
  const { locale } = useI18n()
  const switchLocalePath = useSwitchLocalePath()

  return (targetLocale: string): string => {
    const path = (route.path && String(route.path)) || ''
    const slug = route.params?.slug
    const slugStr = typeof slug === 'string' ? slug : Array.isArray(slug) ? slug[0] : ''
    const currentLocale: SectorLocale = (locale.value as SectorLocale) || 'fr'

    if (!isSupportedLocale(targetLocale)) {
      return switchLocalePath(targetLocale) || path
    }

    // Page secteur : /projets/secteur/..., /en/projects/sector/..., etc.
    if (path.includes('/secteur/') || path.includes('/sector/')) {
      if (slugStr) {
        const sectorKey = parseSectorFromSlug(currentLocale, slugStr)
        if (sectorKey) {
          return getSectorPagePath(targetLocale, sectorKey)
        }
      }
    }

    // Page catégorie : /projets/categorie/..., /en/projects/category/..., etc.
    if (path.includes('/categorie/') || path.includes('/category/') || path.includes('/categoria/')) {
      if (slugStr) {
        const categoryKey = parseCategoryFromSlug(currentLocale as CategoryLocale, slugStr)
        if (categoryKey) {
          return getCategoryPagePath(targetLocale as CategoryLocale, categoryKey)
        }
      }
    }

    return switchLocalePath(targetLocale) || path
  }
}
