import type {
  DibodevGoogleSearchUpdate,
  DibodevGoogleSearchUpdateKind,
  DibodevGoogleUpdateImpactMetric,
  DibodevGoogleUpdateImpactResult,
  DibodevGoogleUpdateImpactTrend,
  DibodevGoogleUpdateImpactVerdict,
  DibodevGoogleUpdatePageMovement,
  DibodevGoogleUpdatePageMovements,
  DibodevGoogleUpdateUnreadableReason,
  DibodevSearchConsoleReadErrorKind,
} from '~/core/types/DibodevGoogleUpdateImpact'
import type { DibodevQuizDefinition } from '~/core/types/DibodevQuiz'

/** The two ways in: the Search Console export, or the 5-question test. */
export type DibodevGoogleUpdateImpactMode = 'export' | 'quiz'

/**
 * Texts of the checker in one language. Templates take `{name}`, `{startDate}`, `{endDate}`, `{days}`, `{trend}`, `{metric}`.
 * @type {DibodevGoogleUpdateImpactCheckerWording}
 */
export type DibodevGoogleUpdateImpactCheckerWording = {
  tabsLabel: string
  exportTabLabel: string
  exportTabHint: string
  quizTabLabel: string
  quizTabHint: string
  updateSelectLabel: string
  updateOptionTemplate: string
  updateKindLabels: Record<DibodevGoogleSearchUpdateKind, string>
  dropZoneTitle: string
  dropZoneText: string
  dropZoneButton: string
  dropZoneFormats: string
  privacyNote: string
  readingLabel: string
  exampleButton: string
  exampleBadge: string
  resetButton: string
  errors: Record<DibodevSearchConsoleReadErrorKind, string>
  exportStepsTitle: string
  exportSteps: string[]
  resultLabel: string
  idleTitle: string
  idleText: string
  verdictTitles: Record<DibodevGoogleUpdateImpactVerdict, string>
  verdictTexts: Record<DibodevGoogleUpdateImpactVerdict, string>
  rolloutOngoingNote: string
  rolloutWaitNote: string
  provisionalTemplate: string
  trendLabels: Record<DibodevGoogleUpdateImpactTrend, string>
  unreadableTexts: Record<DibodevGoogleUpdateUnreadableReason, string>
  figuresTitle: string
  metricLabels: Record<DibodevGoogleUpdateImpactMetric, string>
  currentFigureTemplate: string
  baselineFigureLabel: string
  changeFigureLabel: string
  changeBeforeFigureLabel: string
  changeBeforeUnknown: string
  pagesTitle: string
  droppedToZeroTitle: string
  biggestDropsTitle: string
  biggestGainsTitle: string
  pageImpressionsLabel: string
  pagesEmptyList: string
  pagesNeedComparison: string
  pagesMissing: string
  disclaimer: string
  ctaIntro: string
  idleCtaIntro: string
  ctaLabels: Record<DibodevGoogleUpdateImpactVerdict, string>
  idleCtaLabel: string
}

/** Props of the whole checker: the tabs, the export panel and the test. */
export type DibodevGoogleUpdateImpactCheckerProps = {
  anchorId: string
  wording: DibodevGoogleUpdateImpactCheckerWording
  quiz: DibodevQuizDefinition
  trackingLocation: string
}

/** One tab of the checker: its way in, its label and the short line under it. */
export type DibodevGoogleUpdateImpactTab = {
  mode: DibodevGoogleUpdateImpactMode
  label: string
  hint: string
}

/** Props of the export way in: the update chosen, the drop zone and the result card. */
export type DibodevGoogleUpdateExportPanelProps = {
  wording: DibodevGoogleUpdateImpactCheckerWording
  trackingLocation: string
}

/** Props of the drop zone, the example button and the export steps. */
export type DibodevGoogleUpdateExportDropZoneProps = {
  wording: DibodevGoogleUpdateImpactCheckerWording
  isReading: boolean
  errorMessage: string
}

/** Props of the result card of the export. */
export type DibodevGoogleUpdateExportResultProps = {
  wording: DibodevGoogleUpdateImpactCheckerWording
  update: DibodevGoogleSearchUpdate
  result: DibodevGoogleUpdateImpactResult | null
  pageMovements: DibodevGoogleUpdatePageMovements | null
  hasPageRows: boolean
  isExample: boolean
  contactRoute: string
}

/** Props of one list of pages that moved. */
export type DibodevGoogleUpdatePageMovementListProps = {
  title: string
  movements: DibodevGoogleUpdatePageMovement[]
  impressionsLabel: string
  emptyText: string
}
