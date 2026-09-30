import type { UseDashboardToastReturn } from '~/composables/useDashboardToast'
import type { Ref } from 'vue'
import { useDashboardToast } from '~/composables/useDashboardToast'

export type UseDashboardPwaReturn = {
  isInstalledApp: Ref<boolean>
  isIos: Ref<boolean>
  isOnline: Ref<boolean>
  initPwa: () => () => void
  showInstallInstructions: () => void
}

/**
 * Installed-app helpers: home screen mode, iOS detection, network state and install instructions.
 *
 * @returns {UseDashboardPwaReturn} The flags, the initializer (returns its cleanup) and the install help.
 */
export function useDashboardPwa(): UseDashboardPwaReturn {
  const { showToast }: UseDashboardToastReturn = useDashboardToast()
  const isInstalledApp: Ref<boolean> = useState('dashboard-pwa-installed', (): boolean => false)
  const isIos: Ref<boolean> = useState('dashboard-pwa-ios', (): boolean => false)
  const isOnline: Ref<boolean> = useState('dashboard-pwa-online', (): boolean => true)

  /**
   * Reads the platform and starts listening to the network state.
   *
   * @returns {() => void} Removes the listeners.
   */
  function initPwa(): () => void {
    const navigatorWithStandalone: Navigator & { standalone?: boolean } = window.navigator
    isInstalledApp.value =
      window.matchMedia('(display-mode: standalone)').matches || navigatorWithStandalone.standalone === true
    isIos.value =
      /iPad|iPhone|iPod/.test(window.navigator.userAgent) ||
      (window.navigator.platform === 'MacIntel' && window.navigator.maxTouchPoints > 1)
    isOnline.value = window.navigator.onLine

    /**
     * Updates the network flag.
     *
     * @returns {void}
     */
    function updateOnline(): void {
      isOnline.value = window.navigator.onLine
    }
    window.addEventListener('online', updateOnline)
    window.addEventListener('offline', updateOnline)
    return (): void => {
      window.removeEventListener('online', updateOnline)
      window.removeEventListener('offline', updateOnline)
    }
  }

  /**
   * Explains how to add the dashboard to the home screen (Safari has no install prompt).
   *
   * @returns {void}
   */
  function showInstallInstructions(): void {
    showToast({
      tone: 'violet',
      icon: 'share',
      title: 'Installer le dashboard',
      text: 'Dans Safari : bouton Partager, puis « Sur l’écran d’accueil ». Il s’ouvrira comme une app, sur ce tableau de bord.',
      durationMs: 9000,
    })
  }

  return { isInstalledApp, isIos, isOnline, initPwa, showInstallInstructions }
}
