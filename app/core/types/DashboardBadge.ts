import type { DashboardIconName } from '~/core/constants/dashboardIcons'
import type { DashboardTone } from '~/core/types/Dashboard'

export type DashboardBadgeProps = {
  tone: DashboardTone
  icon: DashboardIconName | null
  isSpinning: boolean
}
