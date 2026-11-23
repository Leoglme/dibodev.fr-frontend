import type { DashboardPointTimelineEntry } from '~/core/types/DashboardWeeklyPointsPage'

export type DashboardPointTimelineProps = {
  entries: DashboardPointTimelineEntry[]
  openedPointId: string
  comparedPointId: string | null
  isAwaitingComparedPoint: boolean
}
