/** Figures followed from one weekly review to the next, one key per acquisition channel metric. */
export type DashboardWeeklyMetricKey =
  | 'googleClicks'
  | 'googleImpressions'
  | 'googleClicksExcludingSecurity'
  | 'googleImpressionsExcludingSecurity'
  | 'bingClicks'
  | 'bingImpressions'
  | 'aiVisits'
  | 'chatgptVisits'
  | 'copilotCitations'
  | 'aiTestCitations'
  | 'siteVisits'
  | 'templateDownloads'
  | 'contactRequests'

/** Where a figure comes from: read on the day of the review, or recomputed afterwards from the source. */
export type DashboardWeeklyMetricOrigin = 'measured' | 'rebuilt'

export type DashboardWeeklyMetricValue = {
  value: number
  origin: DashboardWeeklyMetricOrigin
  note?: string
}

export type DashboardWeeklyChannelKey = 'google' | 'bing' | 'aiAssistants' | 'site'

export type DashboardWeeklyDoneKind = 'page' | 'article' | 'update' | 'action'

export type DashboardWeeklyDoneItem = {
  kind: DashboardWeeklyDoneKind
  title: string
  detail: string
  url?: string
}

/** Goal set during a review for the next one; `metric` links it to a followed figure when there is one. */
export type DashboardWeeklyTarget = {
  label: string
  goal: number
  metric?: DashboardWeeklyMetricKey
}

export type DashboardWeeklyExperimentProgress = {
  label: string
  value: number
  goal: number
}

export type DashboardWeeklyExperiment = {
  name: string
  deadline: string
  deadlineLabel: string
  stopRule: string
  progress?: DashboardWeeklyExperimentProgress[]
}

/** One weekly review: the week measured, its figures and what was decided and done that day. */
export type DashboardWeeklyPoint = {
  id: string
  number: number
  date: string
  weekStart: string
  weekEnd: string
  headline: string
  context?: string
  metrics: Partial<Record<DashboardWeeklyMetricKey, DashboardWeeklyMetricValue>>
  explanations: string[]
  doneItems: DashboardWeeklyDoneItem[]
  decisions: string[]
  followUps: string[]
  nextTargets: DashboardWeeklyTarget[]
  experiments: DashboardWeeklyExperiment[]
}

export type DashboardWeeklyPointsFile = {
  updatedAt: string
  points: DashboardWeeklyPoint[]
}
