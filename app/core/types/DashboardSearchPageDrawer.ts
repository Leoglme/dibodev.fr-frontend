import type { IndexingLocale } from '~/core/utils/DashboardIndexingUtils'
import type { SearchPerformanceEntry, SearchPerformancePeriod } from '~~/server/types/dashboard/searchPerformance'

export type DashboardSearchPageDrawerProps = {
  rowKey: string
  pageLabel: string
  pageUrls: string[]
  period: SearchPerformancePeriod
}

/** `entry` is null when this language version had no impression over the period. */
export type DashboardSearchPageVersion = {
  url: string
  locale: IndexingLocale
  path: string
  entry: SearchPerformanceEntry | null
}
