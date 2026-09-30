import type { Ref } from 'vue'
import type { SearchPerformancePeriod, SearchPerformanceResponse } from '~~/server/types/dashboard/searchPerformance'

export type SearchPerformanceCacheEntry = {
  data: SearchPerformanceResponse
  loadedAt: string
}

export type UseDashboardSearchPerformanceReturn = {
  cache: Ref<Partial<Record<SearchPerformancePeriod, SearchPerformanceCacheEntry>>>
  loadingPeriods: Ref<SearchPerformancePeriod[]>
  errors: Ref<Partial<Record<SearchPerformancePeriod, string>>>
  loadSearchPerformance: (period: SearchPerformancePeriod, force?: boolean) => Promise<SearchPerformanceResponse | null>
}

/**
 * Search Console data of the dashboard, cached per period for the session.
 *
 * @returns {UseDashboardSearchPerformanceReturn} The cache, loading state and loader.
 */
export function useDashboardSearchPerformance(): UseDashboardSearchPerformanceReturn {
  const cache: Ref<Partial<Record<SearchPerformancePeriod, SearchPerformanceCacheEntry>>> = useState(
    'dashboard-search-performance',
    (): Partial<Record<SearchPerformancePeriod, SearchPerformanceCacheEntry>> => ({}),
  )
  const loadingPeriods: Ref<SearchPerformancePeriod[]> = useState(
    'dashboard-search-performance-loading',
    (): SearchPerformancePeriod[] => [],
  )
  const errors: Ref<Partial<Record<SearchPerformancePeriod, string>>> = useState(
    'dashboard-search-performance-errors',
    (): Partial<Record<SearchPerformancePeriod, string>> => ({}),
  )

  /**
   * Loads the payload of a period, from the cache unless forced.
   *
   * @param {SearchPerformancePeriod} period - The period to load.
   * @param {boolean} force - Bypass the cache.
   * @returns {Promise<SearchPerformanceResponse | null>} The payload, or null on error.
   */
  async function loadSearchPerformance(
    period: SearchPerformancePeriod,
    force: boolean = false,
  ): Promise<SearchPerformanceResponse | null> {
    const cached: SearchPerformanceCacheEntry | undefined = cache.value[period]
    if (!force && cached) return cached.data
    if (loadingPeriods.value.includes(period)) return cached?.data ?? null
    loadingPeriods.value = [...loadingPeriods.value, period]
    errors.value = { ...errors.value, [period]: '' }
    try {
      const data: SearchPerformanceResponse = await $fetch<SearchPerformanceResponse>(
        '/api/dashboard/search-performance',
        { query: { period } },
      )
      cache.value = { ...cache.value, [period]: { data, loadedAt: new Date().toISOString() } }
      return data
    } catch (error: unknown) {
      errors.value = {
        ...errors.value,
        [period]: error instanceof Error ? error.message : 'Impossible de charger les données Search Console.',
      }
      return null
    } finally {
      loadingPeriods.value = loadingPeriods.value.filter((p: SearchPerformancePeriod): boolean => p !== period)
    }
  }

  return { cache, loadingPeriods, errors, loadSearchPerformance }
}
