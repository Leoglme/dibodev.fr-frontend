/** Time window the SEO performance dashboard can request. */
export type SearchPerformancePeriod = '7d' | '28d' | '3m' | '6m'

/** Aggregate Search Console metrics over a period. */
export type SearchPerformanceTotals = {
  clicks: number
  impressions: number
  ctr: number
  position: number
}

/** One day of the clicks/impressions trend. */
export type SearchPerformanceTrendPoint = {
  date: string
  clicks: number
  impressions: number
}

/** One ranked row (a query, page, country or device) with its metrics. */
export type SearchPerformanceEntry = {
  key: string
  clicks: number
  impressions: number
  ctr: number
  position: number
}

/** Full payload powering the SEO performance dashboard. */
export type SearchPerformanceResponse = {
  gscConnected: boolean
  siteProperty: string
  period: SearchPerformancePeriod
  range: { startDate: string; endDate: string }
  totals: SearchPerformanceTotals
  previousTotals: SearchPerformanceTotals
  trend: SearchPerformanceTrendPoint[]
  queries: SearchPerformanceEntry[]
  pages: SearchPerformanceEntry[]
  countries: SearchPerformanceEntry[]
  devices: SearchPerformanceEntry[]
}
