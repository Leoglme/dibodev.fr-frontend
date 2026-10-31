import type { DibodevHostingProviderKey } from '~/core/types/DibodevHostingStatus'

/** `security` = new PHP or WordPress vulnerabilities; `hosting:<provider>` = an outage announced by that provider. */
export type DibodevSecurityAlertTopic = 'security' | `hosting:${DibodevHostingProviderKey}`

export type DibodevSecurityAlertSubscribeOutcome = 'confirmationSent' | 'alreadyConfirmed'

/** Answer of POST /api/tools/security-alerts/subscribe. */
export type DibodevSecurityAlertSubscribeResult = {
  outcome: DibodevSecurityAlertSubscribeOutcome
}

export type DibodevSecurityAlertSubscribeErrorKind = 'invalid' | 'rateLimited' | 'failed'

/** Texts of the alert form in one language; `{provider}` and `{site}` are filled by the form. */
export type DibodevSecurityAlertFormWording = {
  title: string
  titleWithSite: string
  intro: string
  emailLabel: string
  emailPlaceholder: string
  consent: string
  submit: string
  submitting: string
  confirmationSentTitle: string
  confirmationSentText: string
  alreadyConfirmedTitle: string
  alreadyConfirmedText: string
  errorTitle: string
  errorTexts: Record<DibodevSecurityAlertSubscribeErrorKind, string>
  privacyLinkLabel: string
}

/** Content of the three landing pages of the alert links (confirmed, unsubscribed, invalid), in one language. */
export type DibodevSecurityAlertPageContent = {
  meta: {
    title: string
    description: string
  }
  title: string
  text: string
  topicTexts: Record<'security' | 'hosting', string>
  linkLabel: string
}

export type DibodevSecurityAlertPagesContent = {
  confirmed: DibodevSecurityAlertPageContent
  unsubscribed: DibodevSecurityAlertPageContent
  invalid: DibodevSecurityAlertPageContent
}
