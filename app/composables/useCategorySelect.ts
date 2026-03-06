/**
 * Composable pour le select catégorie (options avec href selon la locale).
 * Options triées par ordre alphabétique du label (locale courante).
 */

import type { ComputedRef } from 'vue'
import { computed } from 'vue'
import type { DibodevSelectOptionWithHref } from '~/core/types/DibodevSelect'
import type { CategoryKey } from '~/core/constants/projectEnums'
import { allCategoryKeys, parseCategoryFromSlug, categoryToSlug } from '~/core/constants/categorySlugs'
import type { SupportedLocale } from '~/core/constants/categorySlugs'

export type UseCategorySelectReturn = {
  categoryOptionsWithHref: ComputedRef<DibodevSelectOptionWithHref[]>
  selectedCategoryFromRoute: ComputedRef<DibodevSelectOptionWithHref>
}

/**
 * Options catégorie avec href (locale courante), triées par ordre alphabétique du label.
 */
export function useCategorySelect(): UseCategorySelectReturn {
  const { t, locale } = useI18n()
  const localePath = useLocalePath()
  const route = useRoute()

  const categoryOptionsWithHref: ComputedRef<DibodevSelectOptionWithHref[]> = computed(
    (): DibodevSelectOptionWithHref[] => {
      const loc: SupportedLocale = (locale.value as SupportedLocale) || 'fr'
      const allOption: DibodevSelectOptionWithHref = {
        label: t('projects.section.allCategories'),
        value: 'all',
        href: localePath('projects'),
      }
      const keys: CategoryKey[] = allCategoryKeys()
      const categoryOpts: DibodevSelectOptionWithHref[] = keys.map(
        (key: CategoryKey): DibodevSelectOptionWithHref => ({
          label: t(`projects.categories.${key}`),
          value: key,
          href: localePath({ name: 'projects-category-slug', params: { slug: categoryToSlug(loc, key) } }),
        }),
      )
      // Tri alphabétique par label (sans "Toutes les catégories" qui reste en premier)
      categoryOpts.sort((a, b) => (a.label as string).localeCompare(b.label as string, loc))
      return [allOption, ...categoryOpts]
    },
  )

  const selectedCategoryFromRoute: ComputedRef<DibodevSelectOptionWithHref> = computed(
    (): DibodevSelectOptionWithHref => {
      const opts: DibodevSelectOptionWithHref[] = categoryOptionsWithHref.value
      const first: DibodevSelectOptionWithHref = opts[0]!
      const path: string = String(route.path ?? '')
      const isProjectsIndex: boolean =
        path === '/projects' || path === '/projets' || path.endsWith('/projects') || path.endsWith('/projets')
      if (isProjectsIndex) return first
      const slug: string | undefined = route.params.slug as string | undefined
      if (slug == null || slug === '') return first
      const loc: SupportedLocale = (locale.value as SupportedLocale) || 'fr'
      const isCategoryPath = path.includes('/categorie/') || path.includes('/category/') || path.includes('/categoria/')
      if (!isCategoryPath) return first
      const categoryKey: CategoryKey | null = parseCategoryFromSlug(loc, slug)
      if (categoryKey == null) return first
      const found: DibodevSelectOptionWithHref | undefined = opts.find(
        (o: DibodevSelectOptionWithHref) => o.value === categoryKey,
      )
      return found ?? first
    },
  )

  return { categoryOptionsWithHref, selectedCategoryFromRoute }
}
