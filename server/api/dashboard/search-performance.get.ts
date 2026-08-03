import type { H3Event } from 'h3'
import { createError, getQuery } from 'h3'
import { requireDashboardAuth } from '~~/server/utils/dashboardAuth'
import { getGscAccessToken } from '~~/server/utils/gscAuth'
import {
  querySearchAnalytics,
  toSearchEntry,
  toSearchTotals,
  type GscSearchAnalyticsRow,
} from '~~/server/utils/gscSearchAnalytics'
import type {
  SearchPerformancePeriod,
  SearchPerformanceResponse,
  SearchPerformanceTrendPoint,
} from '~~/server/types/dashboard/searchPerformance'

const GSC_SITE_PROPERTY = 'sc-domain:dibodev.fr'
const PERIOD_DAYS: Record<SearchPerformancePeriod, number> = { '7d': 7, '28d': 28, '3m': 90, '6m': 180 }
const VALID_PERIODS: SearchPerformancePeriod[] = ['7d', '28d', '3m', '6m']
/** Search Console finalizes data with a ~2-3 day lag; end the window there to avoid partial days. */
const DATA_LATENCY_DAYS = 3

/**
 * Formats a date as the YYYY-MM-DD string expected by the Search Console API.
 *
 * @param {Date} date - The date to format.
 * @returns {string} The YYYY-MM-DD representation (UTC).
 */
function formatApiDate(date: Date): string {
  return date.toISOString().slice(0, 10)
}

/**
 * Returns a copy of a date shifted by a number of days (UTC).
 *
 * @param {Date} date - The base date.
 * @param {number} days - The number of days to add (negative to subtract).
 * @returns {Date} The shifted date.
 */
function shiftDays(date: Date, days: number): Date {
  const copy = new Date(date)
  copy.setUTCDate(copy.getUTCDate() + days)
  return copy
}

/**
 * GET /api/dashboard/search-performance?period=28d
 * Returns Search Console performance data (totals + trend + queries/pages/countries/devices)
 * for the requested window and the immediately preceding one (for deltas). Never calls Google
 * when GSC is not configured — it returns an empty, disconnected payload instead.
 */
export default defineEventHandler(async (event: H3Event): Promise<SearchPerformanceResponse> => {
  requireDashboardAuth(event)
  const config = useRuntimeConfig()

  const rawPeriod = String(getQuery(event).period ?? '28d')
  const period: SearchPerformancePeriod = VALID_PERIODS.includes(rawPeriod as SearchPerformancePeriod)
    ? (rawPeriod as SearchPerformancePeriod)
    : '28d'
  const days = PERIOD_DAYS[period]

  const end = shiftDays(new Date(), -DATA_LATENCY_DAYS)
  const start = shiftDays(end, -(days - 1))
  const previousEnd = shiftDays(start, -1)
  const previousStart = shiftDays(previousEnd, -(days - 1))
  const range = { startDate: formatApiDate(start), endDate: formatApiDate(end) }
  const previousRange = { startDate: formatApiDate(previousStart), endDate: formatApiDate(previousEnd) }

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

  let accessToken: string
  try {
    accessToken = await getGscAccessToken({
      gscServiceAccountJson: config.gscServiceAccountJson as string,
      googleClientId: config.googleClientId as string,
      googleClientSecret: config.googleClientSecret as string,
      gscRefreshToken: config.gscRefreshToken as string,
    })
  } catch {
    return emptyResponse(false)
  }

  const quotaProjectId = (config.gscQuotaProjectId as string | undefined)?.trim() ?? ''
  const run = (query: Parameters<typeof querySearchAnalytics>[3]): Promise<GscSearchAnalyticsRow[]> =>
    querySearchAnalytics(GSC_SITE_PROPERTY, accessToken, quotaProjectId, query)

  try {
    const [totalsRows, previousTotalsRows, trendRows, queryRows, pageRows, countryRows, deviceRows] = await Promise.all(
      [
        run({ ...range }),
        run({ ...previousRange }),
        run({ ...range, dimensions: ['date'], rowLimit: 500 }),
        run({ ...range, dimensions: ['query'], rowLimit: 200 }),
        run({ ...range, dimensions: ['page'], rowLimit: 100 }),
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
