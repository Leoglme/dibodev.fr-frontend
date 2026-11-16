/** `core` is a broad update of the ranking, `spam` an update of the spam systems. */
export type DibodevGoogleSearchUpdateKind = 'core' | 'spam'

/**
 * A ranking update listed on Google's official Search Status Dashboard.
 * @type {DibodevGoogleSearchUpdate}
 * @property {string} id - Stable id, sent to PostHog (`november-2026-core`).
 * @property {string} name - Official name, as Google writes it.
 * @property {DibodevGoogleSearchUpdateKind} kind - Core or spam update.
 * @property {string} startDate - First day of the rollout (YYYY-MM-DD, US/Pacific).
 * @property {string | null} endDate - Day the rollout was announced complete, null while it is still rolling out.
 * @property {string} incidentUrl - Page of the update on the dashboard.
 */
export type DibodevGoogleSearchUpdate = {
  id: string
  name: string
  kind: DibodevGoogleSearchUpdateKind
  startDate: string
  endDate: string | null
  incidentUrl: string
}

/** One day of the « Dates » file of a Search Console export. */
export type DibodevSearchConsoleDailyRow = {
  date: string
  clicks: number
  impressions: number
}

/** One page of the « Pages » file: the `previous` values are null when the export does not compare two periods. */
export type DibodevSearchConsolePageRow = {
  page: string
  clicksCurrent: number
  clicksPrevious: number | null
  impressionsCurrent: number
  impressionsPrevious: number | null
}

export type DibodevSearchConsolePageFile = {
  rows: DibodevSearchConsolePageRow[]
  isComparison: boolean
}

/** What could be read from the files given, all files merged. */
export type DibodevSearchConsoleExport = {
  dailyRows: DibodevSearchConsoleDailyRow[]
  pageRows: DibodevSearchConsolePageRow[]
  hasPageComparison: boolean
  recognizedFileCount: number
}

/** Why nothing could be read: the browser cannot unzip, the zip is damaged, or no file looks like a Search Console export. */
export type DibodevSearchConsoleReadErrorKind = 'zipUnsupported' | 'zipUnreadable' | 'noRecognizedFile'

export type DibodevSearchConsoleReadResult =
  | { isRead: true; searchConsoleExport: DibodevSearchConsoleExport }
  | { isRead: false; errorKind: DibodevSearchConsoleReadErrorKind }

/** A file handed to the reader: its name and its bytes. */
export type DibodevSearchConsoleInputFile = {
  name: string
  bytes: Uint8Array
}

/** The trend measured by comparing the days since the start with the same weekdays before. */
export type DibodevGoogleUpdateImpactTrend = 'affected' | 'stable' | 'winner' | 'startedBefore'

/** The verdict shown: a trend, or why none can be given yet. */
export type DibodevGoogleUpdateImpactVerdict = DibodevGoogleUpdateImpactTrend | 'tooEarly' | 'unreadable'

/** Why the dates could not be compared. */
export type DibodevGoogleUpdateUnreadableReason = 'noDates' | 'noDaysBefore' | 'noTrafficBefore' | 'endsBeforeUpdate'

/** The measure compared: clicks when there are enough of them, impressions otherwise. */
export type DibodevGoogleUpdateImpactMetric = 'clicks' | 'impressions'

/**
 * Result of the comparison of the days since the start of an update with the same weekdays before.
 * @type {DibodevGoogleUpdateImpactResult}
 * @property {DibodevGoogleUpdateImpactVerdict} verdict - The verdict shown.
 * @property {DibodevGoogleUpdateImpactTrend | null} provisionalTrend - With `tooEarly`, the trend seen so far, null when there are too few days.
 * @property {DibodevGoogleUpdateUnreadableReason | null} unreadableReason - With `unreadable`, why.
 * @property {DibodevGoogleUpdateImpactMetric} metric - The measure compared.
 * @property {number} daysSinceStart - Days of data from the start of the update.
 * @property {number | null} changeRatio - Change since the start (-0.3 for a 30 % drop), null when unreadable.
 * @property {number | null} changeBeforeRatio - Change of the weeks just before the start, compared with the weeks before them.
 * @property {number} currentTotal - Clicks or impressions since the start.
 * @property {number} baselineTotal - Clicks or impressions on the same weekdays before.
 * @property {boolean} isRolloutFinished - True once Google announced the end of the rollout.
 * @property {boolean} hasWaitedAWeekAfterEnd - True when the data goes at least a week past the end of the rollout.
 */
export type DibodevGoogleUpdateImpactResult = {
  verdict: DibodevGoogleUpdateImpactVerdict
  provisionalTrend: DibodevGoogleUpdateImpactTrend | null
  unreadableReason: DibodevGoogleUpdateUnreadableReason | null
  metric: DibodevGoogleUpdateImpactMetric
  daysSinceStart: number
  changeRatio: number | null
  changeBeforeRatio: number | null
  currentTotal: number
  baselineTotal: number
  isRolloutFinished: boolean
  hasWaitedAWeekAfterEnd: boolean
}

/** A page that moved between the two periods of the export, with its shortened link and its impressions. */
export type DibodevGoogleUpdatePageMovement = {
  pageLabel: string
  page: string
  impressionsPrevious: number
  impressionsCurrent: number
}

/** The three lists drawn from a « Pages » file in comparison mode. */
export type DibodevGoogleUpdatePageMovements = {
  droppedToZero: DibodevGoogleUpdatePageMovement[]
  biggestDrops: DibodevGoogleUpdatePageMovement[]
  biggestGains: DibodevGoogleUpdatePageMovement[]
}
