import type {
  LighthouseAuditItem,
  LighthouseCategoryId,
  LighthouseCategoryScore,
  LighthouseKeyMetric,
  LighthouseMetric,
  LighthouseReportResponse,
  LighthouseStrategyReport,
  LighthouseStrategySummary,
  LighthouseSummary,
} from '~~/server/types/lighthouse'

/**
 * History of the Lighthouse audits run from the dashboard: last full report of each page and its summary.
 */
export class LighthouseService {
  private static readonly SUMMARIES_KEY: string = 'lighthouse:summaries'
  private static readonly REPORT_KEY_PREFIX: string = 'lighthouse:report:'
  private static readonly KEY_METRICS: LighthouseKeyMetric[] = [
    { id: 'first-contentful-paint', label: 'FCP' },
    { id: 'largest-contentful-paint', label: 'LCP' },
    { id: 'total-blocking-time', label: 'TBT' },
    { id: 'cumulative-layout-shift', label: 'CLS' },
    { id: 'speed-index', label: 'Speed Index' },
  ]

  /**
   * Stores the report of a page and updates its summary, so every device sees the latest audit.
   *
   * @param {LighthouseReportResponse} report - The fresh report.
   * @returns {Promise<LighthouseSummary>} The stored summary.
   */
  public static async saveReport(report: LighthouseReportResponse): Promise<LighthouseSummary> {
    const storage: ReturnType<typeof useStorage> = LighthouseService.getStorage()
    const summary: LighthouseSummary = {
      url: report.requestedUrl,
      auditedAt: new Date().toISOString(),
      mobile: LighthouseService.summarizeStrategy(report.mobile),
      desktop: LighthouseService.summarizeStrategy(report.desktop),
    }
    const summaries: Record<string, LighthouseSummary> =
      (await storage.getItem<Record<string, LighthouseSummary>>(LighthouseService.SUMMARIES_KEY)) ?? {}
    summaries[report.requestedUrl] = summary
    await Promise.all([
      storage.setItem(LighthouseService.SUMMARIES_KEY, summaries),
      storage.setItem(LighthouseService.reportKey(report.requestedUrl), report),
    ])
    return summary
  }

  /**
   * Summaries of every audited page, most recent first.
   *
   * @returns {Promise<LighthouseSummary[]>} The summaries.
   */
  public static async getSummaries(): Promise<LighthouseSummary[]> {
    const summaries: Record<string, LighthouseSummary> =
      (await LighthouseService.getStorage().getItem<Record<string, LighthouseSummary>>(
        LighthouseService.SUMMARIES_KEY,
      )) ?? {}
    return Object.values(summaries).sort((a: LighthouseSummary, b: LighthouseSummary): number =>
      b.auditedAt.localeCompare(a.auditedAt),
    )
  }

  /**
   * Last full report of a page.
   *
   * @param {string} url - The audited URL.
   * @returns {Promise<LighthouseReportResponse | null>} The report, or null when the page was never audited.
   */
  public static async getReport(url: string): Promise<LighthouseReportResponse | null> {
    return (
      (await LighthouseService.getStorage().getItem<LighthouseReportResponse>(LighthouseService.reportKey(url))) ?? null
    )
  }

  /**
   * Storage shared with the article queue and the indexing cache.
   *
   * @returns {ReturnType<typeof useStorage>} The data storage.
   */
  private static getStorage(): ReturnType<typeof useStorage> {
    return useStorage('data')
  }

  /**
   * Storage key of the full report of a page.
   *
   * @param {string} url - The audited URL.
   * @returns {string} The storage key.
   */
  private static reportKey(url: string): string {
    return `${LighthouseService.REPORT_KEY_PREFIX}${encodeURIComponent(url)}`
  }

  /**
   * Scores and key metrics of one strategy.
   *
   * @param {LighthouseStrategyReport} report - The full strategy report.
   * @returns {LighthouseStrategySummary} The summary.
   */
  private static summarizeStrategy(report: LighthouseStrategyReport): LighthouseStrategySummary {
    const scores: Record<LighthouseCategoryId, number | null> = {
      performance: null,
      accessibility: null,
      'best-practices': null,
      seo: null,
    }
    report.categories.forEach((category: LighthouseCategoryScore): void => {
      scores[category.id] = category.score
    })
    const metrics: LighthouseMetric[] = LighthouseService.KEY_METRICS.flatMap(
      (metric: LighthouseKeyMetric): LighthouseMetric[] => {
        const audit: LighthouseAuditItem | undefined = report.audits.find(
          (item: LighthouseAuditItem): boolean => item.id === metric.id,
        )
        return audit?.displayValue
          ? [{ id: metric.id, label: metric.label, displayValue: audit.displayValue, score: audit.score }]
          : []
      },
    )
    return { fetchTime: report.fetchTime, scores, metrics, runtimeError: report.runtimeError }
  }
}
