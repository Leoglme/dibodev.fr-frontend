import type { DashboardIconName } from '~/core/constants/dashboardIcons'
import type { DashboardDelta, DashboardTone } from '~/core/types/Dashboard'
import type {
  DashboardWeeklyChannelKey,
  DashboardWeeklyDoneKind,
  DashboardWeeklyMetricKey,
  DashboardWeeklyPoint,
} from '~/core/types/DashboardWeeklyPoint'

/** Tabs of the weekly points page, spelled as they appear in the shared address (`?tab=canaux`). */
export type DashboardWeeklyTabKey = 'resume' | 'canaux' | 'fait' | 'tests' | 'compte-rendu'

export type DashboardWeeklyMetricDefinition = {
  label: string
  channelLabel: string
  hint: string | null
}

export type DashboardWeeklyChannelDefinition = {
  key: DashboardWeeklyChannelKey
  label: string
  sourceLabel: string
  color: string
  tintColor: string
  headlineMetric: DashboardWeeklyMetricKey
  headlineUnitSingular: string
  headlineUnitPlural: string
  metrics: DashboardWeeklyMetricKey[]
}

export type DashboardWeeklyDoneKindDefinition = {
  kind: DashboardWeeklyDoneKind
  label: string
  icon: DashboardIconName
  tone: DashboardTone
}

/** One figure of the opened point next to the same figure of the compared point. */
export type DashboardWeeklyMetricComparison = {
  metricKey: DashboardWeeklyMetricKey
  label: string
  channelLabel: string
  hint: string | null
  currentValue: number | null
  previousValue: number | null
  currentLabel: string
  previousLabel: string | null
  delta: DashboardDelta | null
  rebuiltNote: string | null
}

export type DashboardWeeklyChannelComparison = {
  channel: DashboardWeeklyChannelDefinition
  headline: DashboardWeeklyMetricComparison
  headlineCaption: string
  metrics: DashboardWeeklyMetricComparison[]
}

/** One thing done, ready to display: its link is kept only when it is a web address. */
export type DashboardWeeklyDoneEntry = {
  title: string
  detail: string
  webUrl: string | null
}

export type DashboardWeeklyDoneGroup = DashboardWeeklyDoneKindDefinition & {
  entries: DashboardWeeklyDoneEntry[]
}

export type DashboardWeeklyHistoryBar = {
  pointId: string
  value: number | null
  valueLabel: string
  heightPercent: number
  isOpenedPoint: boolean
  isComparedPoint: boolean
}

export type DashboardWeeklyTargetProgress = {
  label: string
  progressLabel: string
  percent: number | null
}

export type DashboardWeeklySelection = {
  openedPoint: DashboardWeeklyPoint | null
  comparedPoint: DashboardWeeklyPoint | null
}

export type DashboardPointTimelineEntry = {
  id: string
  dateLabel: string
  longDateLabel: string
}
