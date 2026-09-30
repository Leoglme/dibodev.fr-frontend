import { computed } from 'vue'
import type { ComputedRef } from 'vue'
import type { DibodevAboutFact } from '~/core/types/DibodevAboutPage'
import type { DibodevProject } from '~/core/types/DibodevProject'

/** Which other taxonomy is counted in the facts: the sectors of a category listing, or the categories of a sector listing. */
export type DibodevListingFactsCounterpart = 'sectors' | 'categories'

export type UseProjectListingFactsReturn = {
  listingFacts: ComputedRef<DibodevAboutFact[]>
  listingTechnologies: ComputedRef<string[]>
}

/** Number of technologies shown under a listing intro. */
const LISTING_TECHNOLOGIES_COUNT: number = 8

/**
 * Key figures of a category or sector listing (projects delivered, first year, counterpart taxonomy count)
 * and the technologies met on its projects, most frequent first.
 * @param {ComputedRef<DibodevProject[]>} listingProjects - The projects of the listing.
 * @param {DibodevListingFactsCounterpart} counterpart - The taxonomy counted next to the project count.
 * @returns {UseProjectListingFactsReturn} The facts and the technologies.
 */
export function useProjectListingFacts(
  listingProjects: ComputedRef<DibodevProject[]>,
  counterpart: DibodevListingFactsCounterpart,
): UseProjectListingFactsReturn {
  const { t } = useI18n()

  const listingFacts: ComputedRef<DibodevAboutFact[]> = computed((): DibodevAboutFact[] => {
    const projects: DibodevProject[] = listingProjects.value
    if (projects.length === 0) {
      return []
    }
    const years: number[] = projects
      .map((project: DibodevProject): number => new Date(project.date).getFullYear())
      .filter((year: number): boolean => !Number.isNaN(year))
    const counterpartKeys: Set<string> = new Set(
      projects.flatMap((project: DibodevProject): string[] =>
        counterpart === 'sectors' ? (project.sectors ?? []) : project.categories,
      ),
    )
    const facts: DibodevAboutFact[] = [
      { label: t('projects.listingFacts.projectsLabel', projects.length), value: String(projects.length) },
    ]
    if (years.length > 0) {
      facts.push({ label: t('projects.listingFacts.sinceLabel'), value: String(Math.min(...years)) })
    }
    if (counterpartKeys.size > 0) {
      facts.push({
        label: t(
          counterpart === 'sectors' ? 'projects.listingFacts.sectorsLabel' : 'projects.listingFacts.categoriesLabel',
          counterpartKeys.size,
        ),
        value: String(counterpartKeys.size),
      })
    }
    return facts
  })

  const listingTechnologies: ComputedRef<string[]> = computed((): string[] => {
    const occurrences: Map<string, number> = new Map()
    for (const project of listingProjects.value) {
      for (const technology of project.stack) {
        occurrences.set(technology, (occurrences.get(technology) ?? 0) + 1)
      }
    }
    return [...occurrences.entries()]
      .sort((a: [string, number], b: [string, number]): number => b[1] - a[1] || a[0].localeCompare(b[0]))
      .slice(0, LISTING_TECHNOLOGIES_COUNT)
      .map(([technology]: [string, number]): string => technology)
  })

  return { listingFacts, listingTechnologies }
}
