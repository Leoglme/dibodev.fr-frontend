import type { AsyncDataRequestStatus } from '#app'
import type { ComputedRef, Ref } from 'vue'
import type {
  DibodevHostingProviderKey,
  DibodevHostingProviderStatus,
  DibodevHostingStatusSnapshot,
} from '~/core/types/DibodevHostingStatus'
import { computed } from 'vue'
import { HOSTING_STATUS_API_PATH } from '~/core/constants/hostingStatus/pageShared'

/** What a page gets back: the data read in the browser, whether the read is running, and a way to read again. */
export type UseHostingStatusReturn<T> = {
  data: ComputedRef<T | null>
  isLoading: ComputedRef<boolean>
  hasError: ComputedRef<boolean>
  refresh: () => Promise<void>
}

/**
 * Reads the live status of every watched hosting provider in the browser only, so the prerendered HTML never shows an old state.
 * @returns {UseHostingStatusReturn<DibodevHostingStatusSnapshot>} The snapshot and its loading state.
 */
export function useHostingStatusSnapshot(): UseHostingStatusReturn<DibodevHostingStatusSnapshot> {
  const { data, status, refresh } = useAsyncData<DibodevHostingStatusSnapshot>(
    'hosting-status-snapshot',
    (): Promise<DibodevHostingStatusSnapshot> =>
      $fetch<DibodevHostingStatusSnapshot>(HOSTING_STATUS_API_PATH, { retry: 0 }),
    { server: false, lazy: true },
  )

  return buildReturn<DibodevHostingStatusSnapshot>(data, status, refresh)
}

/**
 * Reads the live status of one hosting provider, in the browser only.
 * @param {DibodevHostingProviderKey} provider - The provider.
 * @returns {UseHostingStatusReturn<DibodevHostingProviderStatus>} Its status and the loading state.
 */
export function useHostingProviderStatus(
  provider: DibodevHostingProviderKey,
): UseHostingStatusReturn<DibodevHostingProviderStatus> {
  const { data, status, refresh } = useAsyncData<DibodevHostingProviderStatus>(
    `hosting-status-${provider}`,
    (): Promise<DibodevHostingProviderStatus> =>
      $fetch<DibodevHostingProviderStatus>(HOSTING_STATUS_API_PATH, { query: { provider }, retry: 0 }),
    { server: false, lazy: true },
  )

  return buildReturn<DibodevHostingProviderStatus>(data, status, refresh)
}

/**
 * Wraps the async data for the components; a read not started yet counts as loading, so the server render shows the waiting card.
 * @param {Ref<T | undefined>} rawData - The data read, undefined before the first read.
 * @param {Ref<AsyncDataRequestStatus>} status - The async data status.
 * @param {() => Promise<void>} refresh - The function reading again.
 * @returns {UseHostingStatusReturn<T>} The wrapped data.
 */
function buildReturn<T>(
  rawData: Ref<T | undefined>,
  status: Ref<AsyncDataRequestStatus>,
  refresh: () => Promise<void>,
): UseHostingStatusReturn<T> {
  const data: ComputedRef<T | null> = computed((): T | null => rawData.value ?? null)
  const isLoading: ComputedRef<boolean> = computed((): boolean => status.value === 'idle' || status.value === 'pending')
  const hasError: ComputedRef<boolean> = computed((): boolean => status.value === 'error')

  return { data, isLoading, hasError, refresh }
}
