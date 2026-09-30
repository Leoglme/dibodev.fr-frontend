import type {
  DibodevEstimatorOption,
  DibodevEstimatorProjectKind,
  DibodevEstimatorProjectSize,
} from '~/core/types/DibodevBudgetEstimator'
import { TRACKING_EVENTS } from '~/core/constants/trackingEvents'

/** Status of a contact form submission. */
export type ContactFormSubmissionStatus = 'success' | 'error'

/** Typed payloads per event name (keys = `TRACKING_EVENTS` values). */
export type TrackingEventPayloads = {
  [TRACKING_EVENTS.ctaProjectDiscussion]: { location: string }
  [TRACKING_EVENTS.contactPhone]: { location: string }
  [TRACKING_EVENTS.contactEmail]: { location: string }
  [TRACKING_EVENTS.contactFormSubmitted]: {
    status: ContactFormSubmissionStatus
    projectType?: string | null
    pagesRange?: string | null
    budget?: string
    hasPhone?: boolean
    errorStatus?: number | null
    location?: string
  }
  [TRACKING_EVENTS.contactIntentSubmitted]: { hasEmail: boolean; hasPhone: boolean }
  [TRACKING_EVENTS.projectCardClicked]: { project: string; route: string | null; source?: string }
  [TRACKING_EVENTS.projectSiteVisited]: { project: string; siteUrl: string; location: string }
  [TRACKING_EVENTS.projectRepoVisited]: { repoUrl: string }
  [TRACKING_EVENTS.externalProfileClicked]: { platform: string; location: string }
  [TRACKING_EVENTS.articleCardClicked]: { article: string; source: string }
  [TRACKING_EVENTS.articleCtaClicked]: { label: string; href: string; variant: 'button' | 'link' }
  [TRACKING_EVENTS.localeSwitched]: { from: string; to: string }
  [TRACKING_EVENTS.budgetEstimated]: {
    kind: DibodevEstimatorProjectKind
    size: DibodevEstimatorProjectSize
    options: DibodevEstimatorOption[]
    minPrice: number
    maxPrice: number
    location: string
  }
  [TRACKING_EVENTS.budgetEstimatorStarted]: { location: string }
  [TRACKING_EVENTS.comparisonDetailsOpened]: { location: string }
  [TRACKING_EVENTS.tunnelStarted]: { tunnel: string }
  [TRACKING_EVENTS.tunnelStepAnswered]: { tunnel: string; step: number; question: string; answers: string[] }
  [TRACKING_EVENTS.tunnelCompleted]: { tunnel: string; verdict: string; answers: Record<string, string[]> }
  [TRACKING_EVENTS.tunnelLeadFormOpened]: { tunnel: string; verdict: string }
  [TRACKING_EVENTS.tunnelLeadSubmitted]: {
    tunnel: string
    verdict: string
    status: ContactFormSubmissionStatus
    hasPhone: boolean
    errorStatus?: number | null
  }
  [TRACKING_EVENTS.toolTeaserClicked]: { tool: string; location: string }
}
