import type { DibodevEmailProviderKey } from '~/core/types/DibodevEmailDeliverabilityCheck'

/** Mirror of `server/types/tools/gmailSendAsCheck.ts` (result of GET /api/tools/gmail-send-as-check). */
export type DibodevGmailSendAsHosting =
  | 'gmailAddress'
  | 'googleHosted'
  | 'consumerMailbox'
  | 'thirdParty'
  | 'noMailSetup'
  | 'invalidDomain'

export type DibodevGmailSendAsMailHost = {
  key: DibodevEmailProviderKey
  name: string
}

export type DibodevGmailSendAsCheckResult = {
  domain: string
  hosting: DibodevGmailSendAsHosting
  mailHost: DibodevGmailSendAsMailHost | null
  mxHost: string | null
  isGoogleAllowedBySpf: boolean
  checkedAt: string
}

export type DibodevGmailSendAsQuestionKey = 'reading' | 'sending' | 'receiving'

export type DibodevGmailSendAsReadingAnswer = 'inGmail' | 'elsewhere'

/** The address the recipients see when the visitor writes from Gmail. */
export type DibodevGmailSendAsSendingAnswer = 'domainAddress' | 'gmailAddress' | 'unknown'

/** Whether the address is on the "Check mail from other accounts" line of the Gmail settings. */
export type DibodevGmailSendAsReceivingAnswer = 'listed' | 'notListed' | 'unknown'

/** A null answer is a question not answered yet. */
export type DibodevGmailSendAsAnswers = {
  reading: DibodevGmailSendAsReadingAnswer | null
  sending: DibodevGmailSendAsSendingAnswer | null
  receiving: DibodevGmailSendAsReceivingAnswer | null
}

export type DibodevGmailSendAsVerdict =
  | 'bothAffected'
  | 'sendingAffected'
  | 'receivingAffected'
  | 'notAffected'
  | 'toCheck'
  | 'notInGmail'
  | 'googleHosted'
  | 'gmailAddress'
  | 'noMailSetup'
  | 'invalidDomain'

/** `mustCheck…` is true when the visitor did not know: the card then says where to look in Gmail. */
export type DibodevGmailSendAsOutcome = {
  verdict: DibodevGmailSendAsVerdict
  mustCheckSending: boolean
  mustCheckReceiving: boolean
}

export type DibodevGmailSendAsHostGuideArticle = {
  mailHost: DibodevEmailProviderKey
  slug: string
}

/** A guide of the blog for the mail host recognized, already localized. */
export type DibodevGmailSendAsHostGuide = {
  title: string
  to: string
}
