import type { DashboardWeeklyPoint } from '~/core/types/DashboardWeeklyPoint'
import type { DashboardWeeklyChannelComparison } from '~/core/types/DashboardWeeklyPointsPage'

/** A titled list of sentences of the report (explanations, decisions, follow-ups). */
export type DashboardWeeklyReportSection = {
  title: string
  sentences: string[]
}

export type DashboardWeeklyReportPanelProps = {
  openedPoint: DashboardWeeklyPoint
  comparedPoint: DashboardWeeklyPoint | null
  channelComparisons: DashboardWeeklyChannelComparison[]
}
