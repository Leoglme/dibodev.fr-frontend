import { computed } from 'vue'
import type { ComputedRef } from 'vue'
import type { DibodevProject } from '~/core/types/DibodevProject'
import type { DibodevProjectTaxonomyLink, DibodevProjectTaxonomyLogo } from '~/core/types/DibodevProjectTaxonomySection'
import type { CategoryKey, SectorKey } from '~/core/constants/projectEnums'
import type { SupportedLocale } from '~/core/constants/categorySlugs'
import { allCategoryKeys, categoryToSlug } from '~/core/constants/categorySlugs'
import { allSectorKeys, sectorToSlug } from '~/core/constants/sectorSlugs'
import { ProjectOrderUtils } from '~/core/utils/ProjectOrderUtils'

export type UseProjectTaxonomyLinksReturn = {
  categoryLinks: ComputedRef<DibodevProjectTaxonomyLink[]>
  sectorLinks: ComputedRef<DibodevProjectTaxonomyLink[]>
}

/** Number of project logos shown on a listing card. */
const LISTING_LOGO_COUNT: number = 3
/** Fallback tile colour for projects without a secondary colour. */
const DEFAULT_LOGO_BACKGROUND: string = '#f5f3ff'

/**
 * Picks the logos of a listing: projects chosen for the home page first, then the most recent ones.
 * @param {DibodevProject[]} listingProjects - Projects of the listing (already sorted by date, newest first).
 * @returns {DibodevProjectTaxonomyLogo[]} Up to three logo tiles.
 */
function pickListingLogos(listingProjects: DibodevProject[]): DibodevProjectTaxonomyLogo[] {
  return ProjectOrderUtils.homePageSelectionFirst(listingProjects)
    .slice(0, LISTING_LOGO_COUNT)
    .map(
      (project: DibodevProject): DibodevProjectTaxonomyLogo => ({
        name: project.name,
        url: project.logoUrl,
        backgroundColor: project.secondaryColor ?? DEFAULT_LOGO_BACKGROUND,
      }),
    )
}

/**
 * Links to every category and sector listing page, with the number of published projects in each
 * and a few of their logos, for the internal-linking hubs of the projects pages.
 * @param {ComputedRef<DibodevProject[]>} projects - The published projects.
 * @returns {UseProjectTaxonomyLinksReturn} Category links (with descriptions) and sector links.
 */
export function useProjectTaxonomyLinks(projects: ComputedRef<DibodevProject[]>): UseProjectTaxonomyLinksReturn {
  const { t, locale } = useI18n()
  const localePath = useLocalePath()

  const categoryLinks: ComputedRef<DibodevProjectTaxonomyLink[]> = computed((): DibodevProjectTaxonomyLink[] => {
    const currentLocale: SupportedLocale = (locale.value as SupportedLocale) || 'fr'
    return allCategoryKeys().map((key: CategoryKey): DibodevProjectTaxonomyLink => {
      const listingProjects: DibodevProject[] = projects.value.filter((project: DibodevProject): boolean =>
        project.categories.includes(key),
      )
      return {
        key,
        label: t(`projects.categories.${key}`),
        description: t(`projects.categoryDescriptions.${key}`),
        count: listingProjects.length,
        to: localePath({ name: 'projects-category-slug', params: { slug: categoryToSlug(currentLocale, key) } }),
        logos: pickListingLogos(listingProjects),
      }
    })
  })

  const sectorLinks: ComputedRef<DibodevProjectTaxonomyLink[]> = computed((): DibodevProjectTaxonomyLink[] => {
    const currentLocale: SupportedLocale = (locale.value as SupportedLocale) || 'fr'
    return allSectorKeys().map((key: SectorKey): DibodevProjectTaxonomyLink => {
      const listingProjects: DibodevProject[] = projects.value.filter((project: DibodevProject): boolean =>
        (project.sectors ?? []).includes(key),
      )
      return {
        key,
        label: t(`projects.sectors.${key}`),
        description: '',
        count: listingProjects.length,
        to: localePath({ name: 'projects-sector-slug', params: { slug: sectorToSlug(currentLocale, key) } }),
        logos: pickListingLogos(listingProjects),
      }
    })
  })

  return { categoryLinks, sectorLinks }
}
