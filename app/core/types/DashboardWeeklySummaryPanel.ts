import type { DashboardWeeklyPoint } from '~/core/types/DashboardWeeklyPoint'
import type { DashboardWeeklyChannelComparison } from '~/core/types/DashboardWeeklyPointsPage'

export type DashboardWeeklySummaryPanelProps = {
  sortedPoints: DashboardWeeklyPoint[]
  openedPoint: DashboardWeeklyPoint
  comparedPoint: DashboardWeeklyPoint | null
  channelComparisons: DashboardWeeklyChannelComparison[]
}
