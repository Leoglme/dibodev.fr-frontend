import type { DibodevGdprCookieCheckerWording } from '~/core/types/DibodevGdprCookieCheckPage'
import type { DibodevWebsiteHealthVerdict } from '~/core/types/DibodevWebsiteHealthCheck'

/**
 * Props of the GDPR cookie checker: the address field, the call to the API and the result card.
 * @type {DibodevGdprCookieCheckerProps}
 * @property {string} anchorId - Id of the block, for in-page links.
 * @property {DibodevGdprCookieCheckerWording} wording - Every text of the checker in the page language.
 * @property {string} trackingLocation - `location` property of the PostHog events.
 */
export type DibodevGdprCookieCheckerProps = {
  anchorId: string
  wording: DibodevGdprCookieCheckerWording
  trackingLocation: string
}

export type DibodevGdprCookieCheckRowGroupKey = 'trackers' | 'consentTool' | 'links'

/** One line of the result card; `adviceText` is empty when there is nothing to do. */
export type DibodevGdprCookieCheckRow = {
  key: string
  level: DibodevWebsiteHealthVerdict
  label: string
  badgeLabel: string
  seenText: string
  meaningText: string
  adviceText: string
}

export type DibodevGdprCookieCheckRowGroup = {
  key: DibodevGdprCookieCheckRowGroupKey
  title: string
  rows: DibodevGdprCookieCheckRow[]
}
