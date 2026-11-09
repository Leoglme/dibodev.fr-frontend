import type { MailLocale } from '~~/server/types/mail/contact'

export type SiteCheckToolKey =
  | 'phpVulnerability'
  | 'wordpressHack'
  | 'joomlaVersion'
  | 'emailDeliverability'
  | 'websiteHealth'
  | 'gdprCookie'

export type SiteCheckReportLevel = 'ok' | 'warning' | 'critical' | 'unknown' | 'info'

export type SiteCheckReportPoint = {
  level: SiteCheckReportLevel
  label: string
  statusLabel: string | null
  text: string
  advice: string | null
}

export type SiteCheckReportSection = {
  title: string
  points: SiteCheckReportPoint[]
}

export type SiteCheckReportLink = {
  label: string
  url: string
}

/** Only verdicts, our own names and the wording of the tool page: never a text written by the site checked. */
export type SiteCheckReport = {
  tool: SiteCheckToolKey
  host: string
  verdict: string
  level: SiteCheckReportLevel
  title: string
  summary: string
  sections: SiteCheckReportSection[]
  stepsTitle: string
  steps: string[]
  guidesTitle: string
  guides: SiteCheckReportLink[]
}

export type SiteCheckReportRequest = {
  id: string
  tool: SiteCheckToolKey
  site: string
  email: string
  locale: MailLocale
  contactConsent: boolean
  pagePath: string | null
  receivedAt: string
}

export type SiteCheckReportOutcome = 'sent' | 'ignored'

export type SiteCheckReportResponse = {
  outcome: SiteCheckReportOutcome
}

/** Erased a year after the request. */
export type SiteCheckLeadRecord = {
  id: string
  tool: SiteCheckToolKey
  host: string
  verdict: string
  email: string
  locale: MailLocale
  pagePath: string | null
  receivedAt: string
}

export type SiteCheckReportRateLimitWindow = {
  count: number
  resetAt: number
}

export type SiteCheckEmailRecordStatus = 'ok' | 'warning' | 'missing'

/** The sentence never quotes the record published by the domain owner. */
export type SiteCheckEmailRecordState = {
  status: SiteCheckEmailRecordStatus
  text: string
}

/** Never a price, never a tracking pixel. */
export type SiteCheckReportMailTexts = {
  fromName: string
  toolNames: Record<SiteCheckToolKey, string>
  subject: (toolName: string, host: string) => string
  preheader: (toolName: string, host: string) => string
  eyebrow: (toolName: string) => string
  replySubject: (host: string) => string
  recordStatusLabels: Record<SiteCheckEmailRecordStatus, string>
  adviceLabel: string
  labelSeparator: string
  detailedToolsTitle: string
  testAgainIntro: string
  testAgainLabel: string
  helpIntro: string
  signOff: string
  footerText: string
  footerTextWithContactConsent: string
  privacyLabel: string
  privacyUrl: string
  hiddenValue: string
  injectedContentSummary: (count: number) => string
  externalScriptsSummary: (count: number) => string
}

export type SiteCheckReportLevelColors = {
  accent: string
  badgeBackground: string
  badgeText: string
}

export type SiteCheckReportMailPoint = SiteCheckReportPoint & {
  accentColor: string
  badgeBackground: string
  badgeColor: string
}

export type SiteCheckReportMailSection = {
  title: string
  points: SiteCheckReportMailPoint[]
}

export type SiteCheckReportMailStep = {
  number: number
  text: string
}

export type SiteCheckMailContent = {
  subject: string
  htmlContent: string
  textContent: string
  fromName: string
}
