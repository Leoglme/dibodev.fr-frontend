import type { H3Event } from 'h3'
import type {
  SearchPageQueriesResponse,
  SearchPerformanceDateRanges,
  SearchPerformancePeriod,
} from '~~/server/types/dashboard/searchPerformance'
import type { GscSearchAnalyticsRow, GscSearchAnalyticsRunner } from '~~/server/utils/gscSearchAnalytics'
import { createError, getQuery } from 'h3'
import { SearchConsoleService } from '~~/server/services/SearchConsoleService'
import { requireDashboardAuth } from '~~/server/utils/dashboardAuth'
import { toSearchEntry } from '~~/server/utils/gscSearchAnalytics'

const SITE_PAGE_URL_PATTERN: RegExp = /^https?:\/\/(?:[a-z0-9-]+\.)*dibodev\.fr(?:\/|$)/i
const QUERY_ROW_LIMIT: number = 50

/**
 * GET /api/dashboard/search-page-queries?period=28d&url=https://dibodev.fr/blog/…
 * Returns the queries on which one page of the site appeared in Google over the period,
 * most impressions first. Returns an empty, disconnected payload when GSC is not configured.
 */
export default defineEventHandler(async (event: H3Event): Promise<SearchPageQueriesResponse> => {
  requireDashboardAuth(event)

  const query: Record<string, unknown> = getQuery(event)
  const period: SearchPerformancePeriod = SearchConsoleService.resolvePeriod(query.period)
  const url: string = String(query.url ?? '').trim()

  if (!SITE_PAGE_URL_PATTERN.test(url)) {
    throw createError({ statusCode: 400, statusMessage: 'A page URL of dibodev.fr is required.' })
  }
  const { range }: SearchPerformanceDateRanges = SearchConsoleService.buildDateRanges(period)
  const run: GscSearchAnalyticsRunner | null = await SearchConsoleService.createSearchAnalyticsRunner()

  if (!run) {
    return { gscConnected: false, period, range, url, queries: [] }
  }

  try {
    const rows: GscSearchAnalyticsRow[] = await run({
      ...range,
      dimensions: ['query'],
      rowLimit: QUERY_ROW_LIMIT,
      dimensionFilterGroups: [{ filters: [{ dimension: 'page', operator: 'equals', expression: url }] }],
    })
    return { gscConnected: true, period, range, url, queries: rows.map(toSearchEntry) }
  } catch (e: unknown) {
    const message: string = e instanceof Error ? e.message : 'Search Console request failed.'
    throw createError({ statusCode: 502, statusMessage: `Search Console: ${message}` })
  }
})
