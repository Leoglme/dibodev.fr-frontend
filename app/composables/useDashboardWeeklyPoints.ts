import type { Ref } from 'vue'
import type { DashboardWeeklyPointsFile } from '~/core/types/DashboardWeeklyPoint'

export type UseDashboardWeeklyPointsReturn = {
  weeklyPointsFile: Ref<DashboardWeeklyPointsFile | null>
  isLoadingWeeklyPoints: Ref<boolean>
  weeklyPointsError: Ref<string>
  loadWeeklyPoints: (force?: boolean) => Promise<void>
}

/**
 * Weekly points of the dashboard, read once per session from the protected API.
 *
 * @returns {UseDashboardWeeklyPointsReturn} The file, its loading and error states, and the loader.
 */
export function useDashboardWeeklyPoints(): UseDashboardWeeklyPointsReturn {
  const weeklyPointsFile: Ref<DashboardWeeklyPointsFile | null> = useState(
    'dashboard-weekly-points',
    (): DashboardWeeklyPointsFile | null => null,
  )
  const isLoadingWeeklyPoints: Ref<boolean> = useState('dashboard-weekly-points-loading', (): boolean => false)
  const weeklyPointsError: Ref<string> = useState('dashboard-weekly-points-error', (): string => '')

  /**
   * Loads the weekly points, from the session cache unless forced.
   *
   * @param {boolean} force - Bypass the cache.
   * @returns {Promise<void>}
   */
  async function loadWeeklyPoints(force: boolean = false): Promise<void> {
    if (isLoadingWeeklyPoints.value || (weeklyPointsFile.value && !force)) {
      return
    }
    isLoadingWeeklyPoints.value = true
    weeklyPointsError.value = ''
    try {
      weeklyPointsFile.value = await $fetch<DashboardWeeklyPointsFile>('/api/dashboard/weekly-points')
    } catch {
      weeklyPointsError.value = 'Impossible de charger les points hebdo.'
    } finally {
      isLoadingWeeklyPoints.value = false
    }
  }

  return { weeklyPointsFile, isLoadingWeeklyPoints, weeklyPointsError, loadWeeklyPoints }
}
