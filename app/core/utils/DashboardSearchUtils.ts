import type { RouteRecordNormalized } from 'vue-router'
import type { DashboardKpi } from '~/core/types/Dashboard'
import type { DashboardSearchPageGroup, DashboardToolPageRoute } from '~/core/types/DashboardSearchPerformancePage'
import type { IndexingLocale } from '~/core/utils/DashboardIndexingUtils'
import type {
  SearchPerformanceEntry,
  SearchPerformancePeriod,
  SearchPerformanceResponse,
  SearchPerformanceTrendPoint,
} from '~~/server/types/dashboard/searchPerformance'
import { DASHBOARD_TOOL_HUB_ROUTE_NAME, DASHBOARD_TOOL_PAGE_LABELS } from '~/core/constants/dashboardToolPages'
import { DashboardFormatUtils } from '~/core/utils/DashboardFormatUtils'
import { DashboardIndexingUtils } from '~/core/utils/DashboardIndexingUtils'

export type SearchOpportunities = {
  toRecover: SearchPerformanceEntry[]
  almostPageOne: SearchPerformanceEntry[]
  working: SearchPerformanceEntry[]
}

/** Search Console helpers: key figures, opportunities, period labels and pages grouped across languages. */
export class DashboardSearchUtils {
  private static readonly ARTICLE_PATH_PATTERN: RegExp = /^(?:\/(?:en|es))?\/blog\/([^/]+)$/
  private static readonly ROUTE_LOCALE_SEPARATOR: string = '___'
  private static readonly OPPORTUNITY_LIMIT: number = 6
  private static readonly RECOVER_MIN_IMPRESSIONS: number = 20
  private static readonly RECOVER_MAX_POSITION: number = 10
  private static readonly RECOVER_MAX_CTR: number = 0.02
  private static readonly ALMOST_MIN_POSITION: number = 10
  private static readonly ALMOST_MAX_POSITION: number = 20
  private static readonly ALMOST_MIN_IMPRESSIONS: number = 5

  /** Languages of the site, in display order. */
  public static readonly SITE_LOCALES: IndexingLocale[] = ['fr', 'en', 'es']

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
   * Slug of an article from its URL in any language (/blog/<slug>, /en/blog/<slug>, /es/blog/<slug>); the slug is the same in the three languages.
   *
   * @param {string} url - An absolute URL as Search Console reports it.
   * @returns {string | null} The slug, or null for any other page.
   */
  public static extractArticleSlug(url: string): string | null {
    const match: RegExpExecArray | null = DashboardSearchUtils.ARTICLE_PATH_PATTERN.exec(
      DashboardIndexingUtils.path(url),
    )
    return match?.[1] ?? null
  }

  /**
   * Localized routes of the tool pages read from the router, whose names end with `___<locale>` (`tools` is the hub, `tools-<tool>` each test).
   *
   * @param {RouteRecordNormalized[]} routes - Every route of the app.
   * @returns {DashboardToolPageRoute[]} One entry per tool page and language.
   */
  public static readToolPageRoutes(routes: RouteRecordNormalized[]): DashboardToolPageRoute[] {
    const toolRoutes: DashboardToolPageRoute[] = []
    for (const route of routes) {
      if (typeof route.name !== 'string') {
        continue
      }
      const [routeName, locale]: string[] = route.name.split(DashboardSearchUtils.ROUTE_LOCALE_SEPARATOR)
      const isToolRoute: boolean =
        routeName === DASHBOARD_TOOL_HUB_ROUTE_NAME ||
        (routeName?.startsWith(`${DASHBOARD_TOOL_HUB_ROUTE_NAME}-`) ?? false)

      if (!routeName || !isToolRoute || !DashboardSearchUtils.isSiteLocale(locale)) {
        continue
      }
      toolRoutes.push({ routeName, locale, path: DashboardIndexingUtils.path(route.path) })
    }
    return toolRoutes
  }

  /**
   * French label of a tool page: the registry when it knows the route, otherwise its French slug made readable.
   *
   * @param {string} routeName - The route name without its locale suffix.
   * @param {string | null} frenchPath - The French path of the page, when the router knows it.
   * @returns {string} The label.
   */
  public static buildToolPageLabel(routeName: string, frenchPath: string | null): string {
    const known: string | undefined = DASHBOARD_TOOL_PAGE_LABELS[routeName]

    if (known) {
      return known
    }
    const slug: string =
      (frenchPath ?? routeName)
        .split('/')
        .filter((segment: string): boolean => segment.length > 0)
        .pop() ?? routeName
    const words: string = slug.replace(/-/g, ' ')
    return words.charAt(0).toUpperCase() + words.slice(1)
  }

  /**
   * Sums entries into one: clicks and impressions added, position weighted by impressions, click-through rate recomputed.
   *
   * @param {string} key - Key of the merged entry.
   * @param {SearchPerformanceEntry[]} entries - The entries to merge.
   * @returns {SearchPerformanceEntry} The merged entry (all zero when there is nothing to merge).
   */
  public static mergeEntries(key: string, entries: SearchPerformanceEntry[]): SearchPerformanceEntry {
    const clicks: number = entries.reduce((sum: number, entry: SearchPerformanceEntry): number => sum + entry.clicks, 0)
    const impressions: number = entries.reduce(
      (sum: number, entry: SearchPerformanceEntry): number => sum + entry.impressions,
      0,
    )
    const weightedPosition: number = entries.reduce(
      (sum: number, entry: SearchPerformanceEntry): number => sum + entry.position * entry.impressions,
      0,
    )
    return {
      key,
      clicks,
      impressions,
      ctr: impressions > 0 ? clicks / impressions : 0,
      position: impressions > 0 ? weightedPosition / impressions : 0,
    }
  }

  /**
   * Merges the entries sharing a key (the same query seen from several language versions of a page).
   *
   * @param {SearchPerformanceEntry[]} entries - Entries from several sources.
   * @returns {SearchPerformanceEntry[]} One entry per key, in order of first appearance.
   */
  public static mergeEntriesByKey(entries: SearchPerformanceEntry[]): SearchPerformanceEntry[] {
    const byKey: Map<string, SearchPerformanceEntry[]> = new Map()
    for (const entry of entries) {
      byKey.set(entry.key, [...(byKey.get(entry.key) ?? []), entry])
    }
    return [...byKey.entries()].map(
      ([key, group]: [string, SearchPerformanceEntry[]]): SearchPerformanceEntry =>
        DashboardSearchUtils.mergeEntries(key, group),
    )
  }

  /**
   * Groups the pages of the period under a key (null leaves a page out), each group keeping its URLs and summed metrics.
   *
   * @param {SearchPerformanceEntry[]} pages - Pages of the period, keyed by URL.
   * @param {(url: string) => string | null} groupKeyOf - Key of a page from its URL.
   * @returns {DashboardSearchPageGroup[]} The groups, in order of first appearance.
   */
  public static groupPages(
    pages: SearchPerformanceEntry[],
    groupKeyOf: (url: string) => string | null,
  ): DashboardSearchPageGroup[] {
    const byKey: Map<string, SearchPerformanceEntry[]> = new Map()
    for (const page of pages) {
      const key: string | null = groupKeyOf(page.key)

      if (key === null) {
        continue
      }
      byKey.set(key, [...(byKey.get(key) ?? []), page])
    }
    return [...byKey.entries()].map(
      ([key, entries]: [string, SearchPerformanceEntry[]]): DashboardSearchPageGroup => ({
        key,
        pageUrls: entries.map((entry: SearchPerformanceEntry): string => entry.key),
        entry: DashboardSearchUtils.mergeEntries(key, entries),
      }),
    )
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

  /**
   * Whether a route name suffix is one of the three languages of the site.
   *
   * @param {string | undefined} value - The text after `___` in a route name.
   * @returns {boolean} True for fr, en and es.
   */
  private static isSiteLocale(value: string | undefined): value is IndexingLocale {
    return value === 'fr' || value === 'en' || value === 'es'
  }
}
