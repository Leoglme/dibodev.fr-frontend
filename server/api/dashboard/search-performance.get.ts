import type { H3Event } from 'h3'
import type {
  SearchPerformanceDateRanges,
  SearchPerformancePeriod,
  SearchPerformanceResponse,
  SearchPerformanceTrendPoint,
} from '~~/server/types/dashboard/searchPerformance'
import type { GscSearchAnalyticsRow, GscSearchAnalyticsRunner } from '~~/server/utils/gscSearchAnalytics'
import { createError, getQuery } from 'h3'
import { SearchConsoleService } from '~~/server/services/SearchConsoleService'
import { requireDashboardAuth } from '~~/server/utils/dashboardAuth'
import { GSC_SITE_PROPERTY, toSearchEntry, toSearchTotals } from '~~/server/utils/gscSearchAnalytics'

const PAGE_ROW_LIMIT: number = 1000

/**
 * GET /api/dashboard/search-performance?period=28d
 * Returns Search Console performance data (totals + trend + queries/pages/countries/devices)
 * for the requested window and the immediately preceding one (for deltas). Never calls Google
 * when GSC is not configured — it returns an empty, disconnected payload instead.
 */
export default defineEventHandler(async (event: H3Event): Promise<SearchPerformanceResponse> => {
  requireDashboardAuth(event)

  const period: SearchPerformancePeriod = SearchConsoleService.resolvePeriod(getQuery(event).period)
  const { range, previousRange }: SearchPerformanceDateRanges = SearchConsoleService.buildDateRanges(period)

  const emptyTotals = { clicks: 0, impressions: 0, ctr: 0, position: 0 }
  const emptyResponse = (gscConnected: boolean): SearchPerformanceResponse => ({
    gscConnected,
    siteProperty: GSC_SITE_PROPERTY,
    period,
    range,
    totals: emptyTotals,
    previousTotals: emptyTotals,
    trend: [],
    queries: [],
    pages: [],
    countries: [],
    devices: [],
  })

  const run: GscSearchAnalyticsRunner | null = await SearchConsoleService.createSearchAnalyticsRunner()

  if (!run) {
    return emptyResponse(false)
  }

  try {
    const [totalsRows, previousTotalsRows, trendRows, queryRows, pageRows, countryRows, deviceRows] = await Promise.all(
      [
        run({ ...range }),
        run({ ...previousRange }),
        run({ ...range, dimensions: ['date'], rowLimit: 500 }),
        run({ ...range, dimensions: ['query'], rowLimit: 200 }),
        run({ ...range, dimensions: ['page'], rowLimit: PAGE_ROW_LIMIT }),
        run({ ...range, dimensions: ['country'], rowLimit: 20 }),
        run({ ...range, dimensions: ['device'], rowLimit: 10 }),
      ],
    )

    const trend: SearchPerformanceTrendPoint[] = trendRows
      .map(
        (row: GscSearchAnalyticsRow): SearchPerformanceTrendPoint => ({
          date: row.keys?.[0] ?? '',
          clicks: row.clicks ?? 0,
          impressions: row.impressions ?? 0,
          position: row.position ?? 0,
        }),
      )
      .filter((point: SearchPerformanceTrendPoint): boolean => point.date !== '')
      .sort((a: SearchPerformanceTrendPoint, b: SearchPerformanceTrendPoint): number => a.date.localeCompare(b.date))

    return {
      gscConnected: true,
      siteProperty: GSC_SITE_PROPERTY,
      period,
      range,
      totals: toSearchTotals(totalsRows),
      previousTotals: toSearchTotals(previousTotalsRows),
      trend,
      queries: queryRows.map(toSearchEntry),
      pages: pageRows.map(toSearchEntry),
      countries: countryRows.map(toSearchEntry),
      devices: deviceRows.map(toSearchEntry),
    }
  } catch (e: unknown) {
    const message = e instanceof Error ? e.message : 'Search Console request failed.'
    throw createError({ statusCode: 502, statusMessage: `Search Console: ${message}` })
  }
})
