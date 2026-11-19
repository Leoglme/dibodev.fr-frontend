import type { DibodevEmailProviderKey } from '~/core/types/DibodevEmailDeliverabilityCheck'
import type { DibodevGmailSendAsHostGuide, DibodevGmailSendAsQuestionKey } from '~/core/types/DibodevGmailSendAsCheck'
import type { DibodevGmailSendAsCheckerWording } from '~/core/types/DibodevGmailSendAsCheckPage'

/**
 * Props of the Gmail "Send mail as" checker: the address field, the call to the API, the three questions and the result card.
 * @type {DibodevGmailSendAsCheckerProps}
 * @property {string} anchorId - Id of the block, for in-page links.
 * @property {DibodevGmailSendAsCheckerWording} wording - Every text of the checker in the page language.
 * @property {Partial<Record<DibodevEmailProviderKey, DibodevGmailSendAsHostGuide>>} hostGuides - The published blog guide of each mail host.
 * @property {DibodevGmailSendAsHostGuide | null} consumerMailboxGuide - The published guide for internet provider addresses, when there is one.
 * @property {string} trackingLocation - `location` property of the PostHog events.
 */
export type DibodevGmailSendAsCheckerProps = {
  anchorId: string
  wording: DibodevGmailSendAsCheckerWording
  hostGuides: Partial<Record<DibodevEmailProviderKey, DibodevGmailSendAsHostGuide>>
  consumerMailboxGuide: DibodevGmailSendAsHostGuide | null
  trackingLocation: string
}

export type DibodevGmailSendAsAnswerOption = {
  label: string
  value: string
}

/** One question as the checker draws it: its texts, its options and the answer already given. */
export type DibodevGmailSendAsQuestionBlock = {
  key: DibodevGmailSendAsQuestionKey
  label: string
  hint: string
  options: DibodevGmailSendAsAnswerOption[]
  answer: string | null
}
