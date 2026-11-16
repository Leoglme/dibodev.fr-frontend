import type { DibodevAiReadabilityCheckerWording } from '~/core/types/DibodevAiReadabilityCheckPage'
import type { DibodevWebsiteHealthVerdict } from '~/core/types/DibodevWebsiteHealthCheck'

/**
 * Props of the AI readability checker: the link field, the call to the API and the result card.
 * @type {DibodevAiReadabilityCheckerProps}
 * @property {string} anchorId - Id of the block, for in-page links.
 * @property {DibodevAiReadabilityCheckerWording} wording - Every text of the checker in the page language.
 * @property {string} trackingLocation - `location` property of the PostHog events.
 */
export type DibodevAiReadabilityCheckerProps = {
  anchorId: string
  wording: DibodevAiReadabilityCheckerWording
  trackingLocation: string
}

export type DibodevAiReadabilityRowGroupKey = 'robots' | 'botFetch' | 'content' | 'directives' | 'understanding'

/** One line of the result card; `meaningText` and `adviceText` are empty when there is nothing to add. */
export type DibodevAiReadabilityRow = {
  key: string
  level: DibodevWebsiteHealthVerdict
  label: string
  badgeLabel: string
  seenText: string
  meaningText: string
  adviceText: string
}

export type DibodevAiReadabilityRowGroup = {
  key: DibodevAiReadabilityRowGroupKey
  title: string
  rows: DibodevAiReadabilityRow[]
}
