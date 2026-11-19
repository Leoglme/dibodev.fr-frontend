import type { EmailProviderKey } from '~~/server/types/tools/emailDeliverabilityCheck'

/** Where the mail of the domain lives: only an address hosted outside Google can lose "Send mail as" and the POP fetch in a free Gmail. */
export type GmailSendAsHosting =
  | 'gmailAddress'
  | 'googleHosted'
  | 'consumerMailbox'
  | 'thirdParty'
  | 'noMailSetup'
  | 'invalidDomain'

export type GmailSendAsMailHost = {
  key: EmailProviderKey
  name: string
}

/** `mailHost` is null for a free webmail and for a host the catalog does not know; `mxHost` then names the server. */
export type GmailSendAsCheckResult = {
  domain: string
  hosting: GmailSendAsHosting
  mailHost: GmailSendAsMailHost | null
  mxHost: string | null
  isGoogleAllowedBySpf: boolean
  checkedAt: string
}

export type GmailSendAsCheckQuery = {
  domain?: string
}
