import type { SearchPerformanceDateRanges, SearchPerformancePeriod } from '~~/server/types/dashboard/searchPerformance'
import type {
  GscSearchAnalyticsQuery,
  GscSearchAnalyticsRow,
  GscSearchAnalyticsRunner,
} from '~~/server/utils/gscSearchAnalytics'
import { getGscAccessToken } from '~~/server/utils/gscAuth'
import { GSC_SITE_PROPERTY, querySearchAnalytics } from '~~/server/utils/gscSearchAnalytics'

/** Search Console of the site: the dates of a period and the authenticated Search Analytics queries. */
export class SearchConsoleService {
  private static readonly PERIOD_DAYS: Record<SearchPerformancePeriod, number> = {
    '7d': 7,
    '28d': 28,
    '3m': 90,
    '6m': 180,
  }
  private static readonly VALID_PERIODS: SearchPerformancePeriod[] = ['7d', '28d', '3m', '6m']
  private static readonly DEFAULT_PERIOD: SearchPerformancePeriod = '28d'
  /** Search Console finalizes data with a ~2-3 day lag; end the window there to avoid partial days. */
  private static readonly DATA_LATENCY_DAYS: number = 3

  /**
   * Reads the period of a request, falling back to 28 days when it is missing or unknown.
   *
   * @param {unknown} raw - The raw `period` query parameter.
   * @returns {SearchPerformancePeriod} A valid period.
   */
  public static resolvePeriod(raw: unknown): SearchPerformancePeriod {
    const candidate: string = String(raw ?? SearchConsoleService.DEFAULT_PERIOD)
    return SearchConsoleService.VALID_PERIODS.includes(candidate as SearchPerformancePeriod)
      ? (candidate as SearchPerformancePeriod)
      : SearchConsoleService.DEFAULT_PERIOD
  }

  /**
   * Computes the dates of a period, ending where Search Console data is final, and of the period right before it.
   *
   * @param {SearchPerformancePeriod} period - The requested period.
   * @returns {SearchPerformanceDateRanges} The current and previous windows.
   */
  public static buildDateRanges(period: SearchPerformancePeriod): SearchPerformanceDateRanges {
    const days: number = SearchConsoleService.PERIOD_DAYS[period]
    const end: Date = SearchConsoleService.shiftDays(new Date(), -SearchConsoleService.DATA_LATENCY_DAYS)
    const start: Date = SearchConsoleService.shiftDays(end, -(days - 1))
    const previousEnd: Date = SearchConsoleService.shiftDays(start, -1)
    const previousStart: Date = SearchConsoleService.shiftDays(previousEnd, -(days - 1))
    return {
      range: {
        startDate: SearchConsoleService.formatApiDate(start),
        endDate: SearchConsoleService.formatApiDate(end),
      },
      previousRange: {
        startDate: SearchConsoleService.formatApiDate(previousStart),
        endDate: SearchConsoleService.formatApiDate(previousEnd),
      },
    }
  }

  /**
   * Obtains an access token and binds it to the site property, so a handler runs its queries without repeating the authentication.
   *
   * @returns {Promise<GscSearchAnalyticsRunner | null>} The runner, or null when Search Console is not configured.
   */
  public static async createSearchAnalyticsRunner(): Promise<GscSearchAnalyticsRunner | null> {
    const config: ReturnType<typeof useRuntimeConfig> = useRuntimeConfig()
    let accessToken: string

    try {
      accessToken = await getGscAccessToken({
        gscServiceAccountJson: config.gscServiceAccountJson as string,
        googleClientId: config.googleClientId as string,
        googleClientSecret: config.googleClientSecret as string,
        gscRefreshToken: config.gscRefreshToken as string,
      })
    } catch {
      return null
    }
    const quotaProjectId: string = (config.gscQuotaProjectId as string | undefined)?.trim() ?? ''
    return (query: GscSearchAnalyticsQuery): Promise<GscSearchAnalyticsRow[]> =>
      querySearchAnalytics(GSC_SITE_PROPERTY, accessToken, quotaProjectId, query)
  }

  /**
   * Formats a date as the YYYY-MM-DD string expected by the Search Console API.
   *
   * @param {Date} date - The date to format.
   * @returns {string} The YYYY-MM-DD representation (UTC).
   */
  private static formatApiDate(date: Date): string {
    return date.toISOString().slice(0, 10)
  }

  /**
   * Returns a copy of a date shifted by a number of days (UTC).
   *
   * @param {Date} date - The base date.
   * @param {number} days - The number of days to add (negative to subtract).
   * @returns {Date} The shifted date.
   */
  private static shiftDays(date: Date, days: number): Date {
    const copy: Date = new Date(date)
    copy.setUTCDate(copy.getUTCDate() + days)
    return copy
  }
}
