import type { DashboardTone } from '~/core/types/Dashboard'
import type { SearchPerformanceEntry } from '~~/server/types/dashboard/searchPerformance'

export type DashboardSearchDetailTab = 'queries' | 'pages' | 'countries' | 'devices'

export type DashboardSearchSortKey = 'key' | 'clicks' | 'impressions' | 'ctr' | 'position'

export type DashboardSearchOpportunityKey = 'recover' | 'almost' | 'working'

export type DashboardSearchOpportunityGroup = {
  key: DashboardSearchOpportunityKey
  title: string
  hint: string
  tone: DashboardTone
  items: SearchPerformanceEntry[]
}
