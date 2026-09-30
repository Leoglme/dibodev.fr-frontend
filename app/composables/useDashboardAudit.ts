import type { Ref } from 'vue'
import type { IndexingUrlType } from '~~/server/types/indexing'
import type { LighthouseHistoryResponse, LighthouseReportResponse, LighthouseSummary } from '~~/server/types/lighthouse'

export type AuditablePage = {
  url: string
  title: string
  type: IndexingUrlType
}

export type UseDashboardAuditReturn = {
  pages: Ref<AuditablePage[]>
  summaries: Ref<Record<string, LighthouseSummary>>
  reports: Ref<Record<string, LighthouseReportResponse>>
  loadingPages: Ref<boolean>
  runningUrls: Ref<string[]>
  error: Ref<string>
  loadAuditPages: (force?: boolean) => Promise<void>
  loadAuditHistory: (force?: boolean) => Promise<void>
  loadStoredReport: (url: string) => Promise<LighthouseReportResponse | null>
  runAudit: (url: string) => Promise<LighthouseReportResponse | null>
}

/**
 * Lighthouse audits of the sitemap pages: last audit of each page (kept server-side) and full reports.
 *
 * @returns {UseDashboardAuditReturn} The pages, summaries, reports and actions.
 */
export function useDashboardAudit(): UseDashboardAuditReturn {
  const pages: Ref<AuditablePage[]> = useState('dashboard-audit-pages', (): AuditablePage[] => [])
  const summaries: Ref<Record<string, LighthouseSummary>> = useState(
    'dashboard-audit-summaries',
    (): Record<string, LighthouseSummary> => ({}),
  )
  const reports: Ref<Record<string, LighthouseReportResponse>> = useState(
    'dashboard-audit-reports',
    (): Record<string, LighthouseReportResponse> => ({}),
  )
  const historyLoaded: Ref<boolean> = useState('dashboard-audit-history-loaded', (): boolean => false)
  const loadingPages: Ref<boolean> = useState('dashboard-audit-loading', (): boolean => false)
  const runningUrls: Ref<string[]> = useState('dashboard-audit-running', (): string[] => [])
  const error: Ref<string> = useState('dashboard-audit-error', (): string => '')

  /**
   * Loads the pages of the sitemap.
   *
   * @param {boolean} force - Reload even when pages are already in memory.
   * @returns {Promise<void>}
   */
  async function loadAuditPages(force: boolean = false): Promise<void> {
    if (!force && pages.value.length > 0) return
    loadingPages.value = true
    error.value = ''
    try {
      const data: { items: AuditablePage[] } = await $fetch<{ items: AuditablePage[] }>('/api/dashboard/sitemap-pages')
      pages.value = data.items
    } catch (e: unknown) {
      error.value = e instanceof Error ? e.message : 'Impossible de charger les pages du sitemap.'
    } finally {
      loadingPages.value = false
    }
  }

  /**
   * Loads the last audit summary of every audited page.
   *
   * @param {boolean} force - Reload even when already loaded.
   * @returns {Promise<void>}
   */
  async function loadAuditHistory(force: boolean = false): Promise<void> {
    if (!force && historyLoaded.value) return
    try {
      const data: LighthouseHistoryResponse = await $fetch<LighthouseHistoryResponse>(
        '/api/dashboard/lighthouse-history',
      )
      summaries.value = Object.fromEntries(
        data.summaries.map((summary: LighthouseSummary): [string, LighthouseSummary] => [summary.url, summary]),
      )
      historyLoaded.value = true
    } catch {
      // no history yet: pages simply show « pas encore analysée »
    }
  }

  /**
   * Loads the last stored report of a page without running PageSpeed again.
   *
   * @param {string} url - The page URL.
   * @returns {Promise<LighthouseReportResponse | null>} The report, or null when the page was never audited.
   */
  async function loadStoredReport(url: string): Promise<LighthouseReportResponse | null> {
    const inMemory: LighthouseReportResponse | undefined = reports.value[url]
    if (inMemory) return inMemory
    try {
      const report: LighthouseReportResponse = await $fetch<LighthouseReportResponse>('/api/dashboard/lighthouse', {
        query: { url, cached: '1' },
      })
      reports.value = { ...reports.value, [url]: report }
      return report
    } catch {
      return null
    }
  }

  /**
   * Runs a new audit (20 to 60 seconds), keeps the report and refreshes the history.
   *
   * @param {string} url - The page URL.
   * @returns {Promise<LighthouseReportResponse | null>} The report, or null on error.
   */
  async function runAudit(url: string): Promise<LighthouseReportResponse | null> {
    if (runningUrls.value.includes(url)) return null
    runningUrls.value = [...runningUrls.value, url]
    error.value = ''
    try {
      const report: LighthouseReportResponse = await $fetch<LighthouseReportResponse>('/api/dashboard/lighthouse', {
        query: { url },
        timeout: 180_000,
      })
      reports.value = { ...reports.value, [url]: report }
      await loadAuditHistory(true)
      return report
    } catch (e: unknown) {
      error.value = e instanceof Error ? e.message : 'L’audit PageSpeed a échoué.'
      return null
    } finally {
      runningUrls.value = runningUrls.value.filter((u: string): boolean => u !== url)
    }
  }

  return {
    pages,
    summaries,
    reports,
    loadingPages,
    runningUrls,
    error,
    loadAuditPages,
    loadAuditHistory,
    loadStoredReport,
    runAudit,
  }
}
