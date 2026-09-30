import type { ComputedRef, Ref } from 'vue'
import type { DashboardIndexingState } from '~/core/types/Dashboard'
import type { IndexingRefreshState, IndexingStatusRow } from '~~/server/types/indexing'
import { computed } from 'vue'
import { DashboardIndexingUtils } from '~/core/utils/DashboardIndexingUtils'

export type IndexingStatusPayload = {
  items: IndexingStatusRow[]
  refresh: IndexingRefreshState
  gscConnected: boolean
}

export type IndexingCounts = Record<DashboardIndexingState, number> & { total: number }

export type UseDashboardIndexingReturn = {
  payload: Ref<IndexingStatusPayload | null>
  loading: Ref<boolean>
  error: Ref<string>
  refreshingUrls: Ref<string[]>
  counts: ComputedRef<IndexingCounts>
  isIndexingRefreshRunning: ComputedRef<boolean>
  loadIndexing: (force?: boolean) => Promise<void>
  startRefresh: () => Promise<void>
  cancelRefresh: () => Promise<void>
  refreshUrl: (url: string) => Promise<IndexingStatusRow | null>
  stopPolling: () => void
}

const POLL_INTERVAL_MS: number = 3000
const POLL_TIMEOUT_MS: number = 600_000

let pollIntervalId: ReturnType<typeof setInterval> | null = null
let pollTimeoutId: ReturnType<typeof setTimeout> | null = null

/**
 * Google indexing status of every page of the site, with the background refresh job and its progress.
 *
 * @returns {UseDashboardIndexingReturn} The data, counts and actions.
 */
export function useDashboardIndexing(): UseDashboardIndexingReturn {
  const payload: Ref<IndexingStatusPayload | null> = useState(
    'dashboard-indexing',
    (): IndexingStatusPayload | null => null,
  )
  const loading: Ref<boolean> = useState('dashboard-indexing-loading', (): boolean => false)
  const error: Ref<string> = useState('dashboard-indexing-error', (): string => '')
  const refreshingUrls: Ref<string[]> = useState('dashboard-indexing-refreshing', (): string[] => [])

  const counts: ComputedRef<IndexingCounts> = computed((): IndexingCounts => {
    const result: IndexingCounts = {
      total: 0,
      indexed: 0,
      'not-indexed': 0,
      duplicate: 0,
      unknown: 0,
      excluded: 0,
      error: 0,
    }
    for (const row of payload.value?.items ?? []) {
      result.total += 1
      result[DashboardIndexingUtils.state(row)] += 1
    }
    return result
  })

  const isIndexingRefreshRunning: ComputedRef<boolean> = computed(
    (): boolean => payload.value?.refresh.status === 'running',
  )

  /**
   * Stops polling the refresh job.
   *
   * @returns {void}
   */
  function stopPolling(): void {
    if (pollIntervalId) clearInterval(pollIntervalId)
    if (pollTimeoutId) clearTimeout(pollTimeoutId)
    pollIntervalId = null
    pollTimeoutId = null
  }

  /**
   * Polls the refresh job until it ends (or after ten minutes).
   *
   * @returns {void}
   */
  function startPolling(): void {
    stopPolling()
    pollIntervalId = setInterval((): void => {
      $fetch<IndexingStatusPayload>('/api/indexing-status')
        .then((data: IndexingStatusPayload): void => {
          payload.value = data
          if (data.refresh.status !== 'running') stopPolling()
        })
        .catch((): void => {
          // a failed poll is retried at the next tick
        })
    }, POLL_INTERVAL_MS)
    pollTimeoutId = setTimeout((): void => stopPolling(), POLL_TIMEOUT_MS)
  }

  /**
   * Loads the cached statuses (fast, no call to Google). Resumes polling when a refresh is running.
   *
   * @param {boolean} force - Reload even when data is already in memory.
   * @returns {Promise<void>}
   */
  async function loadIndexing(force: boolean = false): Promise<void> {
    if (!force && payload.value) {
      if (isIndexingRefreshRunning.value && !pollIntervalId) startPolling()
      return
    }
    loading.value = true
    error.value = ''
    try {
      payload.value = await $fetch<IndexingStatusPayload>('/api/indexing-status')
      if (isIndexingRefreshRunning.value) startPolling()
    } catch (e: unknown) {
      error.value = e instanceof Error ? e.message : 'Impossible de charger l’indexation.'
    } finally {
      loading.value = false
    }
  }

  /**
   * Starts the background job that inspects every page in Search Console.
   *
   * @returns {Promise<void>}
   */
  async function startRefresh(): Promise<void> {
    error.value = ''
    await $fetch('/api/indexing-status/refresh', { method: 'POST' })
    if (payload.value) payload.value = { ...payload.value, refresh: { ...payload.value.refresh, status: 'running' } }
    startPolling()
  }

  /**
   * Asks the job to stop at the next page and frees the interface right away.
   *
   * @returns {Promise<void>}
   */
  async function cancelRefresh(): Promise<void> {
    await $fetch('/api/indexing-status/refresh-cancel', { method: 'POST' })
    stopPolling()
    if (payload.value) {
      payload.value = {
        ...payload.value,
        refresh: { status: 'idle', startedAt: payload.value.refresh.startedAt, finishedAt: new Date().toISOString() },
      }
    }
  }

  /**
   * Inspects one page now and updates its row.
   *
   * @param {string} url - The page URL.
   * @returns {Promise<IndexingStatusRow | null>} The updated row, or null on error.
   */
  async function refreshUrl(url: string): Promise<IndexingStatusRow | null> {
    refreshingUrls.value = [...refreshingUrls.value, url]
    try {
      const data: { ok: boolean; item: IndexingStatusRow } = await $fetch<{ ok: boolean; item: IndexingStatusRow }>(
        '/api/indexing-status/refresh-url',
        { method: 'POST', body: { url } },
      )
      if (payload.value) {
        payload.value = {
          ...payload.value,
          items: payload.value.items.map(
            (row: IndexingStatusRow): IndexingStatusRow => (row.url === url ? { ...row, ...data.item } : row),
          ),
        }
      }
      return data.item
    } catch (e: unknown) {
      error.value = e instanceof Error ? e.message : 'Impossible d’actualiser cette page.'
      return null
    } finally {
      refreshingUrls.value = refreshingUrls.value.filter((u: string): boolean => u !== url)
    }
  }

  return {
    payload,
    loading,
    error,
    refreshingUrls,
    counts,
    isIndexingRefreshRunning,
    loadIndexing,
    startRefresh,
    cancelRefresh,
    refreshUrl,
    stopPolling,
  }
}
