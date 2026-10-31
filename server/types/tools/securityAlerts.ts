import type { HostingProviderKey } from '~~/server/types/tools/hostingStatus'
import type { MailLocale } from '~~/server/types/mail/contact'

export type SecurityAlertTopic = 'security' | `hosting:${HostingProviderKey}`

export type SecurityAlertSubscription = {
  id: string
  email: string
  site: string | null
  topic: SecurityAlertTopic
  locale: MailLocale
  source: string
  token: string
  createdAt: string
  confirmedAt: string | null
  unsubscribedAt: string | null
  lastNotifiedAt: string | null
}

/** A subscription as the dashboard and the daily recap see it, without the secret of its links. */
export type SecurityAlertSubscriptionOverview = {
  id: string
  email: string
  site: string | null
  topic: SecurityAlertTopic
  locale: MailLocale
  source: string
  createdAt: string
  confirmedAt: string | null
  unsubscribedAt: string | null
  lastNotifiedAt: string | null
}

export type SecurityAlertSubscribeInput = {
  email: string
  site: string | null
  topic: SecurityAlertTopic
  locale: MailLocale
  source: string
}

export type SecurityAlertSubscribePayload = {
  email?: unknown
  site?: unknown
  topic?: unknown
  locale?: unknown
  source?: unknown
  pagePath?: unknown
}

export type SecurityAlertSubscribeOutcome = 'confirmationSent' | 'alreadyConfirmed'

export type SecurityAlertSubscribeResult = {
  outcome: SecurityAlertSubscribeOutcome
}

export type SecurityAlertRateLimitWindow = {
  count: number
  resetAt: number
}

export type SecurityAlertBroadcastTexts = {
  subject: string
  title: string
  intro: string
  buttonLabel: string
  buttonUrl: string
}

export type SecurityAlertBroadcastPayload = {
  topic?: unknown
  texts?: Partial<Record<MailLocale, SecurityAlertBroadcastTexts>>
  dryRun?: unknown
}

export type SecurityAlertBroadcastResult = {
  topic: SecurityAlertTopic
  recipients: number
  sent: number
  failed: number
  dryRun: boolean
}

export type SecurityAlertTopicSummary = {
  topic: SecurityAlertTopic
  confirmed: number
  pending: number
  unsubscribed: number
}

export type SecurityAlertDashboardSummary = {
  total: number
  topics: SecurityAlertTopicSummary[]
  subscriptions: SecurityAlertSubscriptionOverview[]
}

export type SecurityAlertConfirmationTexts = {
  fromName: string
  subjectSecurity: string
  subjectSecurityWithSite: string
  subjectHosting: string
  preheader: string
  titleSecurity: string
  titleHosting: string
  introSecurity: string
  introSecurityWithSite: string
  introHosting: string
  buttonLabel: string
  expiryNote: string
  ignoreNote: string
  signOff: string
  footerText: string
  unsubscribeLabel: string
  privacyLabel: string
  privacyUrl: string
}

export type HostingIncidentMailTexts = {
  fromName: string
  subject: string
  preheader: string
  title: string
  intro: string
  incidentLabel: string
  sinceLabel: string
  buttonLabel: string
  statusPageLabel: string
  contactIntro: string
  contactLabel: string
  signOff: string
  footerText: string
  unsubscribeLabel: string
}

export type SecurityAlertMailDetailRow = {
  label: string
  value: string
}

export type SecurityAlertLandingPaths = {
  confirmed: string
  unsubscribed: string
  invalid: string
}
