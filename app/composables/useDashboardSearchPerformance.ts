import type { Ref } from 'vue'
import type {
  SearchPageQueriesResponse,
  SearchPerformanceEntry,
  SearchPerformancePeriod,
  SearchPerformanceResponse,
} from '~~/server/types/dashboard/searchPerformance'

export type SearchPerformanceCacheEntry = {
  data: SearchPerformanceResponse
  loadedAt: string
}

export type SearchPageQueriesCacheEntry = {
  queries: SearchPerformanceEntry[]
  loadedAt: string
}

export type UseDashboardSearchPerformanceReturn = {
  cache: Ref<Partial<Record<SearchPerformancePeriod, SearchPerformanceCacheEntry>>>
  loadingPeriods: Ref<SearchPerformancePeriod[]>
  errors: Ref<Partial<Record<SearchPerformancePeriod, string>>>
  pageQueriesCache: Ref<Record<string, SearchPageQueriesCacheEntry>>
  loadingPageQueryKeys: Ref<string[]>
  pageQueriesErrors: Ref<Record<string, string>>
  loadSearchPerformance: (period: SearchPerformancePeriod, force?: boolean) => Promise<SearchPerformanceResponse | null>
  buildPageQueriesCacheKey: (period: SearchPerformancePeriod, url: string) => string
  loadSearchPageQueries: (
    period: SearchPerformancePeriod,
    url: string,
    force?: boolean,
  ) => Promise<SearchPerformanceEntry[] | null>
}

/**
 * Search Console data of the dashboard, cached for the session: the payload of each period and the queries of each page.
 *
 * @returns {UseDashboardSearchPerformanceReturn} The caches, loading states and loaders.
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
  const pageQueriesCache: Ref<Record<string, SearchPageQueriesCacheEntry>> = useState(
    'dashboard-search-page-queries',
    (): Record<string, SearchPageQueriesCacheEntry> => ({}),
  )
  const loadingPageQueryKeys: Ref<string[]> = useState('dashboard-search-page-queries-loading', (): string[] => [])
  const pageQueriesErrors: Ref<Record<string, string>> = useState(
    'dashboard-search-page-queries-errors',
    (): Record<string, string> => ({}),
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

  /**
   * Cache key of the queries of a page over a period.
   *
   * @param {SearchPerformancePeriod} period - The period.
   * @param {string} url - The page URL.
   * @returns {string} The key.
   */
  function buildPageQueriesCacheKey(period: SearchPerformancePeriod, url: string): string {
    return `${period}|${url}`
  }

  /**
   * Loads the queries on which a page appeared in Google over a period, from the cache unless forced.
   *
   * @param {SearchPerformancePeriod} period - The period.
   * @param {string} url - The page URL, exactly as Search Console reports it.
   * @param {boolean} force - Bypass the cache.
   * @returns {Promise<SearchPerformanceEntry[] | null>} The queries, or null on error.
   */
  async function loadSearchPageQueries(
    period: SearchPerformancePeriod,
    url: string,
    force: boolean = false,
  ): Promise<SearchPerformanceEntry[] | null> {
    const key: string = buildPageQueriesCacheKey(period, url)
    const cached: SearchPageQueriesCacheEntry | undefined = pageQueriesCache.value[key]

    if (!force && cached) {
      return cached.queries
    }
    if (loadingPageQueryKeys.value.includes(key)) {
      return cached?.queries ?? null
    }
    loadingPageQueryKeys.value = [...loadingPageQueryKeys.value, key]
    pageQueriesErrors.value = { ...pageQueriesErrors.value, [key]: '' }
    try {
      const data: SearchPageQueriesResponse = await $fetch<SearchPageQueriesResponse>(
        '/api/dashboard/search-page-queries',
        { query: { period, url }, retry: 0 },
      )
      pageQueriesCache.value = {
        ...pageQueriesCache.value,
        [key]: { queries: data.queries, loadedAt: new Date().toISOString() },
      }
      return data.queries
    } catch (error: unknown) {
      pageQueriesErrors.value = {
        ...pageQueriesErrors.value,
        [key]: error instanceof Error ? error.message : 'Impossible de charger les requêtes de cette page.',
      }
      return null
    } finally {
      loadingPageQueryKeys.value = loadingPageQueryKeys.value.filter(
        (loadingKey: string): boolean => loadingKey !== key,
      )
    }
  }

  return {
    cache,
    loadingPeriods,
    errors,
    pageQueriesCache,
    loadingPageQueryKeys,
    pageQueriesErrors,
    loadSearchPerformance,
    buildPageQueriesCacheKey,
    loadSearchPageQueries,
  }
}
