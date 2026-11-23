import type { DashboardWeeklyChannelKey } from '~/core/types/DashboardWeeklyPoint'

export type DashboardChannelLogoSize = 'md' | 'lg'

export type DashboardChannelLogoProps = {
  channel: DashboardWeeklyChannelKey
  size: DashboardChannelLogoSize
}
