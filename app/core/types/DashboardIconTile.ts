import type { DashboardIconName } from '~/core/constants/dashboardIcons'
import type { DashboardTone } from '~/core/types/Dashboard'

export type DashboardIconTileSize = 'xs' | 'sm' | 'md' | 'lg'

export type DashboardIconTileProps = {
  icon: DashboardIconName
  tone: DashboardTone
  size: DashboardIconTileSize
  isRound: boolean
}
