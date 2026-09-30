import { computed } from 'vue'
import type { ComputedRef } from 'vue'
import type { DibodevBreadcrumbItem } from '~/core/types/DibodevBreadcrumb'

/**
 * Builds a breadcrumb trail starting at the localized home page.
 * @param {() => DibodevBreadcrumbItem[]} innerItems - The levels after the home page, the last one being the current page (`to: null`).
 * @returns {ComputedRef<DibodevBreadcrumbItem[]>} The complete trail.
 */
export function useBreadcrumbTrail(innerItems: () => DibodevBreadcrumbItem[]): ComputedRef<DibodevBreadcrumbItem[]> {
  const { t } = useI18n()
  const localePath = useLocalePath()

  return computed((): DibodevBreadcrumbItem[] => [{ label: t('nav.home'), to: localePath('/') }, ...innerItems()])
}
