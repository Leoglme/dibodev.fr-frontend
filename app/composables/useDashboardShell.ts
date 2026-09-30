import type { UseDashboardSessionReturn } from '~/composables/useDashboardSession'
import type { Ref } from 'vue'
import { useDashboardSession } from '~/composables/useDashboardSession'

export type UseDashboardShellReturn = {
  isSidebarCollapsed: Ref<boolean>
  isMobileMenuOpen: Ref<boolean>
  isCommandPaletteOpen: Ref<boolean>
  toggleSidebar: () => void
  openCommandPalette: () => void
  closeCommandPalette: () => void
  restoreSidebarPreference: () => void
  logout: () => Promise<void>
}

const SIDEBAR_STORAGE_KEY: string = 'dibodev-dashboard-sidebar-collapsed'

/**
 * Shared state of the dashboard shell: collapsed sidebar (remembered on this device), mobile menu and command palette.
 *
 * @returns {UseDashboardShellReturn} The shell state and its actions.
 */
export function useDashboardShell(): UseDashboardShellReturn {
  const localePath: ReturnType<typeof useLocalePath> = useLocalePath()
  const { forgetSession }: UseDashboardSessionReturn = useDashboardSession()
  const isSidebarCollapsed: Ref<boolean> = useState('dashboard-sidebar-collapsed', (): boolean => false)
  const isMobileMenuOpen: Ref<boolean> = useState('dashboard-mobile-menu', (): boolean => false)
  const isCommandPaletteOpen: Ref<boolean> = useState('dashboard-command-palette', (): boolean => false)

  /**
   * Collapses or expands the desktop sidebar and remembers the choice on this device.
   *
   * @returns {void}
   */
  function toggleSidebar(): void {
    isSidebarCollapsed.value = !isSidebarCollapsed.value
    try {
      window.localStorage.setItem(SIDEBAR_STORAGE_KEY, isSidebarCollapsed.value ? '1' : '0')
    } catch {
      // storage unavailable: the choice lasts for the session only
    }
  }

  /**
   * Restores the sidebar choice saved on this device.
   *
   * @returns {void}
   */
  function restoreSidebarPreference(): void {
    try {
      isSidebarCollapsed.value = window.localStorage.getItem(SIDEBAR_STORAGE_KEY) === '1'
    } catch {
      isSidebarCollapsed.value = false
    }
  }

  /**
   * Opens the command palette (Ctrl K) and closes the mobile menu.
   *
   * @returns {void}
   */
  function openCommandPalette(): void {
    isMobileMenuOpen.value = false
    isCommandPaletteOpen.value = true
  }

  /**
   * Closes the command palette.
   *
   * @returns {void}
   */
  function closeCommandPalette(): void {
    isCommandPaletteOpen.value = false
  }

  /**
   * Ends the dashboard session and goes back to the login page.
   *
   * @returns {Promise<void>}
   */
  async function logout(): Promise<void> {
    await $fetch('/api/auth/logout', { method: 'POST' })
    forgetSession()
    await navigateTo(localePath('/dashboard/login'))
  }

  return {
    isSidebarCollapsed,
    isMobileMenuOpen,
    isCommandPaletteOpen,
    toggleSidebar,
    openCommandPalette,
    closeCommandPalette,
    restoreSidebarPreference,
    logout,
  }
}
