import type { ComputedRef, Ref } from 'vue'
import type { DashboardDrawerEntry } from '~/core/types/Dashboard'
import { computed } from 'vue'

export type UseDashboardDrawerReturn = {
  entries: Ref<DashboardDrawerEntry[]>
  topEntry: ComputedRef<DashboardDrawerEntry | null>
  openedItemKey: ComputedRef<string | null>
  isDrawerOpen: ComputedRef<boolean>
  openDrawer: (entry: DashboardDrawerEntry) => void
  replaceDrawer: (entry: DashboardDrawerEntry) => void
  closeDrawer: () => void
  closeAllDrawers: () => void
  restoreDrawers: () => void
}

const STORAGE_KEY: string = 'dibodev-dashboard-drawers'
const MAX_STACK_DEPTH: number = 3

/**
 * Stack of right-hand drawers (article, publication, indexing, query), kept across reloads of the tab.
 *
 * @returns {UseDashboardDrawerReturn} The stack, the key of the item shown on top and the functions to open, browse and close drawers.
 */
export function useDashboardDrawer(): UseDashboardDrawerReturn {
  const entries: Ref<DashboardDrawerEntry[]> = useState('dashboard-drawers', (): DashboardDrawerEntry[] => [])

  const topEntry: ComputedRef<DashboardDrawerEntry | null> = computed(
    (): DashboardDrawerEntry | null => entries.value[entries.value.length - 1] ?? null,
  )

  const openedItemKey: ComputedRef<string | null> = computed((): string | null => {
    const entry: DashboardDrawerEntry | null = topEntry.value
    if (entry?.kind === 'article') return entry.articleKey
    if (entry?.kind === 'indexing') return entry.url
    if (entry?.kind === 'query') return entry.query
    return null
  })

  const isDrawerOpen: ComputedRef<boolean> = computed((): boolean => entries.value.length > 0)

  /**
   * Saves the stack for the tab session.
   *
   * @param {DashboardDrawerEntry[]} stack - The stack to save.
   * @returns {void}
   */
  function saveStackForSession(stack: DashboardDrawerEntry[]): void {
    if (!import.meta.client) return
    try {
      window.sessionStorage.setItem(STORAGE_KEY, JSON.stringify(stack))
    } catch {
      // storage unavailable (private mode): the stack simply is not restored
    }
  }

  /**
   * Replaces the whole stack and saves it.
   *
   * @param {DashboardDrawerEntry[]} stack - The new stack.
   * @returns {void}
   */
  function setStack(stack: DashboardDrawerEntry[]): void {
    entries.value = stack
    saveStackForSession(stack)
  }

  /**
   * Opens a drawer: replaces the top one when it is of the same kind, stacks it otherwise.
   *
   * @param {DashboardDrawerEntry} entry - The drawer to open.
   * @returns {void}
   */
  function openDrawer(entry: DashboardDrawerEntry): void {
    const top: DashboardDrawerEntry | null = topEntry.value
    if (top && top.kind === entry.kind) {
      setStack([...entries.value.slice(0, -1), entry])
      return
    }
    setStack([...entries.value, entry].slice(-MAX_STACK_DEPTH))
  }

  /**
   * Replaces the top drawer (browsing to the previous or next item).
   *
   * @param {DashboardDrawerEntry} entry - The drawer that takes the top place.
   * @returns {void}
   */
  function replaceDrawer(entry: DashboardDrawerEntry): void {
    setStack([...entries.value.slice(0, -1), entry])
  }

  /**
   * Closes the top drawer.
   *
   * @returns {void}
   */
  function closeDrawer(): void {
    setStack(entries.value.slice(0, -1))
  }

  /**
   * Closes every drawer.
   *
   * @returns {void}
   */
  function closeAllDrawers(): void {
    setStack([])
  }

  /**
   * Restores the stack saved for this tab (after a reload of the installed app).
   *
   * @returns {void}
   */
  function restoreDrawers(): void {
    if (!import.meta.client || entries.value.length > 0) return
    try {
      const raw: string | null = window.sessionStorage.getItem(STORAGE_KEY)
      if (!raw) return
      const parsed: unknown = JSON.parse(raw)
      if (Array.isArray(parsed)) entries.value = parsed as DashboardDrawerEntry[]
    } catch {
      // corrupted value: start with no drawer
    }
  }

  return {
    entries,
    topEntry,
    openedItemKey,
    isDrawerOpen,
    openDrawer,
    replaceDrawer,
    closeDrawer,
    closeAllDrawers,
    restoreDrawers,
  }
}
