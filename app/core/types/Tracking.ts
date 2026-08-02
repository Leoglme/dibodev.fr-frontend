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
    errorStatus?: number | null
  }
  [TRACKING_EVENTS.contactIntentSubmitted]: undefined
  [TRACKING_EVENTS.projectCardClicked]: { project: string; route: string | null }
  [TRACKING_EVENTS.projectSiteVisited]: { project: string; siteUrl: string }
  [TRACKING_EVENTS.projectRepoVisited]: { repoUrl: string }
  [TRACKING_EVENTS.articleCardClicked]: { article: string }
  [TRACKING_EVENTS.articleCtaClicked]: { label: string; href: string; variant: 'button' | 'link' }
  [TRACKING_EVENTS.localeSwitched]: { from: string; to: string }
}
