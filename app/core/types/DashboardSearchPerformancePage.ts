import type { DashboardTone } from '~/core/types/Dashboard'
import type { IndexingLocale } from '~/core/utils/DashboardIndexingUtils'
import type { SearchPerformanceEntry } from '~~/server/types/dashboard/searchPerformance'

export type DashboardSearchDetailTab = 'queries' | 'pages' | 'articles' | 'tools' | 'countries' | 'devices'

export type DashboardSearchSortKey = 'key' | 'clicks' | 'impressions' | 'ctr' | 'position'

/** `pageUrls` holds the Search Console URLs behind the line: several for an article or a tool page grouped across languages, one for a page, none for a query, a country or a device. */
export type DashboardSearchDetailRow = SearchPerformanceEntry & {
  label: string
  pathLabel: string | null
  pageUrls: string[]
}

/** `routeName` has no locale suffix: `tools` for the hub, `tools-<tool>` for each test. */
export type DashboardToolPageRoute = {
  routeName: string
  locale: IndexingLocale
  path: string
}

/** `key` is an article slug or a tool route name; `entry` sums the metrics of `pageUrls`. */
export type DashboardSearchPageGroup = {
  key: string
  pageUrls: string[]
  entry: SearchPerformanceEntry
}

export type DashboardSearchOpportunityKey = 'recover' | 'almost' | 'working'

export type DashboardSearchOpportunityGroup = {
  key: DashboardSearchOpportunityKey
  title: string
  hint: string
  tone: DashboardTone
  items: SearchPerformanceEntry[]
}
