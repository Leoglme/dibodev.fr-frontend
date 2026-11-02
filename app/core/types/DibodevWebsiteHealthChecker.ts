import type {
  DibodevWebsiteHealthCheckItem,
  DibodevWebsiteHealthDetailedToolKey,
  DibodevWebsiteHealthVerdict,
} from '~/core/types/DibodevWebsiteHealthCheck'
import type { DibodevWebsiteHealthCheckerWording } from '~/core/types/DibodevWebsiteHealthCheckPage'

/**
 * Props of the website health checker: the address field, the call to the API and the result card.
 * @type {DibodevWebsiteHealthCheckerProps}
 * @property {string} anchorId - Id of the block, for in-page links.
 * @property {DibodevWebsiteHealthCheckerWording} wording - Every text of the checker in the page language.
 * @property {string} trackingLocation - `location` property of the PostHog events.
 */
export type DibodevWebsiteHealthCheckerProps = {
  anchorId: string
  wording: DibodevWebsiteHealthCheckerWording
  trackingLocation: string
}

/** A link to the detailed checker of a point (PHP, WordPress, e-mails), shown under a check that is not fine. */
export type DibodevWebsiteHealthDetailedToolLink = {
  key: DibodevWebsiteHealthDetailedToolKey
  label: string
  to: string
}

/** One check as the result card lists it: its label, its level, the sentence, the advice and the detailed tool. */
export type DibodevWebsiteHealthCheckRow = {
  check: DibodevWebsiteHealthCheckItem
  label: string
  verdictLabel: string
  detailText: string
  adviceText: string
  detailedTool: DibodevWebsiteHealthDetailedToolLink | null
}

/** Icon and colour of each level in the result card. */
export type DibodevWebsiteHealthVerdictStyle = {
  icon: string
  badgeClass: string
}

export type DibodevWebsiteHealthVerdictStyles = Record<DibodevWebsiteHealthVerdict, DibodevWebsiteHealthVerdictStyle>
