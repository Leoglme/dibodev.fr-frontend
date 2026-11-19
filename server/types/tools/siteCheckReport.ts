import type { MailLocale } from '~~/server/types/mail/contact'
import type { GmailSendAsAnswers } from '~~/server/types/tools/gmailSendAsCheck'

export type SiteCheckToolKey =
  | 'phpVulnerability'
  | 'wordpressHack'
  | 'joomlaVersion'
  | 'emailDeliverability'
  | 'websiteHealth'
  | 'gdprCookie'
  | 'gmailSendAs'

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

/** `checkAnswers` is kept for the Gmail checker only: its verdict depends on answers the server cannot read anywhere. */
export type SiteCheckReportRequest = {
  id: string
  tool: SiteCheckToolKey
  site: string
  email: string
  locale: MailLocale
  contactConsent: boolean
  checkAnswers: GmailSendAsAnswers | null
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

/** The texts of the e-mail that name what was checked: a checker that does not test a website words them in its own way. */
export type SiteCheckReportMailToolSpecificTexts = {
  replySubject: (host: string) => string
  helpIntro: string
  footerTextWithContactConsent: string
}

/** What the owner's notice says the visitor agreed to: the sentence of its preview and text part, and its chip. */
export type SiteCheckLeadConsentTexts = {
  sentence: string
  chipText: string
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
  unrecognizedMailHostName: string
  mailHostGuideLabel: string
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
  toolSpecificTexts: Partial<Record<SiteCheckToolKey, SiteCheckReportMailToolSpecificTexts>>
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
