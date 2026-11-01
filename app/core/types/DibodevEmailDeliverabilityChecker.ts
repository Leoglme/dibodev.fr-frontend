import type {
  DibodevEmailDeliverabilityFinding,
  DibodevEmailProviderGuideKey,
  DibodevEmailProviderKey,
  DibodevEmailRecordKind,
  DibodevEmailRecordStatus,
} from '~/core/types/DibodevEmailDeliverabilityCheck'
import type { DibodevEmailDeliverabilityCheckerWording } from '~/core/types/DibodevEmailDeliverabilityCheckPage'

/**
 * Props of the e-mail deliverability checker: the domain field, the call to the API and the result card.
 * @type {DibodevEmailDeliverabilityCheckerProps}
 * @property {string} anchorId - Id of the block, for in-page links.
 * @property {DibodevEmailDeliverabilityCheckerWording} wording - Every text of the checker in the page language.
 * @property {string} trackingLocation - `location` property of the PostHog events.
 */
export type DibodevEmailDeliverabilityCheckerProps = {
  anchorId: string
  wording: DibodevEmailDeliverabilityCheckerWording
  trackingLocation: string
}

/**
 * One of the three records shown in the result card, with its check mark or cross.
 * @type {DibodevEmailRecordLine}
 * @property {DibodevEmailRecordKind} kind - SPF, DKIM or DMARC.
 * @property {DibodevEmailRecordStatus} status - Found and fine, found but weak, or missing.
 * @property {string} label - The record name in the page language.
 * @property {string} text - What was read, filled with the values of the check.
 * @property {boolean} isVerbatimRecord - True when `text` is the record itself, shown in a monospace font.
 */
export type DibodevEmailRecordLine = {
  kind: DibodevEmailRecordKind
  status: DibodevEmailRecordStatus
  label: string
  text: string
  isVerbatimRecord: boolean
}

/**
 * A finding of the check with its text in the page language.
 * @type {DibodevEmailFindingLine}
 * @property {DibodevEmailDeliverabilityFinding} finding - The finding returned by the API.
 * @property {string} text - Its explanation, filled with the values of the check.
 */
export type DibodevEmailFindingLine = {
  finding: DibodevEmailDeliverabilityFinding
  text: string
}

/**
 * A link to the official guide of a provider shown under a result.
 * @type {DibodevEmailProviderGuideLink}
 * @property {DibodevEmailProviderKey} provider - The provider documented.
 * @property {DibodevEmailProviderGuideKey} key - The record the guide configures.
 * @property {string} label - The link text in the page language.
 * @property {string} url - The external page.
 */
export type DibodevEmailProviderGuideLink = {
  provider: DibodevEmailProviderKey
  key: DibodevEmailProviderGuideKey
  label: string
  url: string
}
