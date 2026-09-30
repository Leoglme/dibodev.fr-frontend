import type { SearchPerformancePeriod } from '~~/server/types/dashboard/searchPerformance'
import type { DashboardTone } from '~/core/types/Dashboard'

export type DashboardQueryDrawerProps = {
  query: string
  period: SearchPerformancePeriod
}

export type DashboardQueryVerdict = { tone: DashboardTone; label: string; advice: string }
