import type { DashboardKpi } from '~/core/types/Dashboard'
import type {
  SearchPerformanceEntry,
  SearchPerformancePeriod,
  SearchPerformanceResponse,
  SearchPerformanceTrendPoint,
} from '~~/server/types/dashboard/searchPerformance'
import { DashboardFormatUtils } from '~/core/utils/DashboardFormatUtils'

export type SearchOpportunities = {
  toRecover: SearchPerformanceEntry[]
  almostPageOne: SearchPerformanceEntry[]
  working: SearchPerformanceEntry[]
}

/** Search Console helpers: key figures, opportunities and period labels. */
export class DashboardSearchUtils {
  private static readonly OPPORTUNITY_LIMIT: number = 6
  private static readonly RECOVER_MIN_IMPRESSIONS: number = 20
  private static readonly RECOVER_MAX_POSITION: number = 10
  private static readonly RECOVER_MAX_CTR: number = 0.02
  private static readonly ALMOST_MIN_POSITION: number = 10
  private static readonly ALMOST_MAX_POSITION: number = 20
  private static readonly ALMOST_MIN_IMPRESSIONS: number = 5

  /** Period labels of the selector. */
  public static readonly PERIOD_LABELS: Record<SearchPerformancePeriod, string> = {
    '7d': '7 jours',
    '28d': '28 jours',
    '3m': '3 mois',
    '6m': '6 mois',
  }

  /** "vs …" label of each period. */
  private static readonly COMPARISON_LABELS: Record<SearchPerformancePeriod, string> = {
    '7d': 'vs 7 jours précédents',
    '28d': 'vs 28 jours précédents',
    '3m': 'vs 3 mois précédents',
    '6m': 'vs 6 mois précédents',
  }

  /**
   * Whether the previous period holds enough data to compare against.
   *
   * @param {SearchPerformanceResponse} data - The Search Console payload.
   * @returns {boolean} True when the previous period has impressions.
   */
  public static hasComparison(data: SearchPerformanceResponse): boolean {
    return data.previousTotals.impressions > 0
  }

  /**
   * Builds the four key figures (impressions, clicks, click-through rate, average position) with their trend.
   *
   * @param {SearchPerformanceResponse} data - The Search Console payload.
   * @returns {DashboardKpi[]} The key figures in display order.
   */
  public static buildKpis(data: SearchPerformanceResponse): DashboardKpi[] {
    const compare: boolean = DashboardSearchUtils.hasComparison(data)
    const comparisonLabel: string = compare
      ? DashboardSearchUtils.COMPARISON_LABELS[data.period]
      : 'pas de période comparable'
    const trend: SearchPerformanceTrendPoint[] = data.trend
    return [
      {
        key: 'impressions',
        label: 'Impressions',
        value: DashboardFormatUtils.formatNumber(data.totals.impressions),
        delta: compare
          ? DashboardFormatUtils.percentDelta(data.totals.impressions, data.previousTotals.impressions)
          : null,
        comparisonLabel,
        spark: trend.map((point: SearchPerformanceTrendPoint): number => point.impressions),
        sparkStyle: 'line',
      },
      {
        key: 'clicks',
        label: 'Clics',
        value: DashboardFormatUtils.formatNumber(data.totals.clicks),
        delta: compare ? DashboardFormatUtils.percentDelta(data.totals.clicks, data.previousTotals.clicks) : null,
        comparisonLabel,
        spark: trend.map((point: SearchPerformanceTrendPoint): number => point.clicks),
        sparkStyle: 'bars',
      },
      {
        key: 'ctr',
        label: 'Taux de clic',
        value: DashboardFormatUtils.formatPercent(data.totals.ctr, 2),
        unit: '%',
        delta: compare
          ? DashboardFormatUtils.absoluteDelta((data.totals.ctr - data.previousTotals.ctr) * 100, 'pt', true)
          : null,
        comparisonLabel,
        spark: DashboardSearchUtils.rollingCtr(trend),
        sparkStyle: 'line',
      },
      {
        key: 'position',
        label: 'Position moyenne',
        value: DashboardFormatUtils.formatNumber(data.totals.position, 1),
        delta: compare
          ? DashboardFormatUtils.absoluteDelta(data.totals.position - data.previousTotals.position, 'place', false)
          : null,
        comparisonLabel,
        spark: DashboardSearchUtils.rollingPosition(trend),
        sparkStyle: 'line',
      },
    ]
  }

  /**
   * Click-through rate over a sliding window of seven points, so a single click does not draw a spike.
   *
   * @param {SearchPerformanceTrendPoint[]} trend - Daily points.
   * @returns {number[]} The smoothed click-through rate of each point.
   */
  public static rollingCtr(trend: SearchPerformanceTrendPoint[]): number[] {
    return trend.map((_point: SearchPerformanceTrendPoint, index: number): number => {
      const window: SearchPerformanceTrendPoint[] = trend.slice(Math.max(0, index - 6), index + 1)
      const clicks: number = window.reduce((sum: number, p: SearchPerformanceTrendPoint): number => sum + p.clicks, 0)
      const impressions: number = window.reduce(
        (sum: number, p: SearchPerformanceTrendPoint): number => sum + p.impressions,
        0,
      )
      return impressions > 0 ? clicks / impressions : 0
    })
  }

  /**
   * Seven-point average position weighted by impressions, negated so the sparkline rises when the site climbs.
   *
   * @param {SearchPerformanceTrendPoint[]} trend - Daily points.
   * @returns {number[]} The negated smoothed position of each point (empty when no position is known).
   */
  public static rollingPosition(trend: SearchPerformanceTrendPoint[]): number[] {
    const ranked: SearchPerformanceTrendPoint[] = trend.filter(
      (point: SearchPerformanceTrendPoint): boolean => point.impressions > 0 && point.position > 0,
    )
    return ranked.map((_point: SearchPerformanceTrendPoint, index: number): number => {
      const window: SearchPerformanceTrendPoint[] = ranked.slice(Math.max(0, index - 6), index + 1)
      const impressions: number = window.reduce(
        (sum: number, p: SearchPerformanceTrendPoint): number => sum + p.impressions,
        0,
      )
      const weighted: number = window.reduce(
        (sum: number, p: SearchPerformanceTrendPoint): number => sum + p.position * p.impressions,
        0,
      )
      return -(weighted / impressions)
    })
  }

  /**
   * Splits the queries into three buckets. A query already listed as working is not repeated as "to recover".
   *
   * @param {SearchPerformanceEntry[]} queries - Queries of the period.
   * @returns {SearchOpportunities} The three buckets, each capped and sorted by relevance.
   */
  public static buildOpportunities(queries: SearchPerformanceEntry[]): SearchOpportunities {
    const byImpressions = (a: SearchPerformanceEntry, b: SearchPerformanceEntry): number =>
      b.impressions - a.impressions
    const working: SearchPerformanceEntry[] = queries
      .filter((entry: SearchPerformanceEntry): boolean => entry.clicks > 0)
      .sort((a: SearchPerformanceEntry, b: SearchPerformanceEntry): number => b.clicks - a.clicks)
      .slice(0, DashboardSearchUtils.OPPORTUNITY_LIMIT)
    const workingKeys: Set<string> = new Set(working.map((entry: SearchPerformanceEntry): string => entry.key))
    const toRecover: SearchPerformanceEntry[] = queries
      .filter(
        (entry: SearchPerformanceEntry): boolean =>
          !workingKeys.has(entry.key) &&
          entry.impressions >= DashboardSearchUtils.RECOVER_MIN_IMPRESSIONS &&
          entry.position <= DashboardSearchUtils.RECOVER_MAX_POSITION &&
          entry.ctr < DashboardSearchUtils.RECOVER_MAX_CTR,
      )
      .sort(byImpressions)
      .slice(0, DashboardSearchUtils.OPPORTUNITY_LIMIT)
    const almostPageOne: SearchPerformanceEntry[] = queries
      .filter(
        (entry: SearchPerformanceEntry): boolean =>
          entry.position > DashboardSearchUtils.ALMOST_MIN_POSITION &&
          entry.position <= DashboardSearchUtils.ALMOST_MAX_POSITION &&
          entry.impressions >= DashboardSearchUtils.ALMOST_MIN_IMPRESSIONS,
      )
      .sort(byImpressions)
      .slice(0, DashboardSearchUtils.OPPORTUNITY_LIMIT)
    return { toRecover, almostPageOne, working }
  }

  /**
   * Sums daily points into weeks (each point dated by the first day of its week) so a 3 or 6 month chart stays readable.
   *
   * @param {SearchPerformanceTrendPoint[]} trend - Daily points, oldest first.
   * @returns {SearchPerformanceTrendPoint[]} Weekly points, oldest first.
   */
  public static aggregateWeekly(trend: SearchPerformanceTrendPoint[]): SearchPerformanceTrendPoint[] {
    const weeks: SearchPerformanceTrendPoint[] = []
    trend.forEach((point: SearchPerformanceTrendPoint, index: number): void => {
      if (index % 7 === 0) {
        weeks.push({ ...point })
        return
      }
      const current: SearchPerformanceTrendPoint = weeks[weeks.length - 1]!
      const impressions: number = current.impressions + point.impressions
      if (impressions > 0) {
        current.position = (current.position * current.impressions + point.position * point.impressions) / impressions
      }
      current.clicks += point.clicks
      current.impressions = impressions
    })
    return weeks
  }
}
