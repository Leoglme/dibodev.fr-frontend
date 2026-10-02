import { computed } from 'vue'
import type { ComputedRef } from 'vue'
import type { DibodevProject } from '~/core/types/DibodevProject'
import type { DibodevStatItemProps } from '~/core/types/DibodevStat'
import { useProjectsWithTranslations } from '~/composables/useProjectsWithTranslations'
import { CareerUtils } from '~/core/utils/CareerUtils'

/**
 * Key figures shown under the page titles; the years of experience are counted from the career start and the project count comes from Storyblok.
 * @returns {Promise<ComputedRef<DibodevStatItemProps[]>>} The three figures with their translated labels.
 */
export async function useHeroStats(): Promise<ComputedRef<DibodevStatItemProps[]>> {
  const { t } = useI18n()
  const { data: storyblokProjectsData } = await useProjectsWithTranslations()

  const publishedProjectsCount: ComputedRef<number> = computed(
    (): number =>
      (storyblokProjectsData.value ?? []).filter((project: DibodevProject): boolean => !!project.route).length,
  )

  return computed((): DibodevStatItemProps[] => [
    {
      value: t('home.hero.stats.experienceValue', { years: CareerUtils.getYearsOfExperience() }),
      label: t('home.hero.stats.experienceLabel'),
    },
    { value: String(publishedProjectsCount.value), label: t('home.hero.stats.projectsLabel') },
    { value: t('home.hero.stats.ratingValue'), label: t('home.hero.stats.ratingLabel'), hasStarRating: true },
  ])
}
