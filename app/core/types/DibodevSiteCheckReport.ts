import type { DibodevSiteCheckErrorKind } from '~/core/types/DibodevSiteCheck'

/** Mirrored in `server/types/tools/siteCheckReport.ts`: keep both in step. */
export type DibodevSiteCheckToolKey =
  | 'phpVulnerability'
  | 'wordpressHack'
  | 'joomlaVersion'
  | 'emailDeliverability'
  | 'websiteHealth'
  | 'gdprCookie'
  | 'gmailSendAs'

/** What the visitor answered to the questions of a checker, by question; null for a question not answered. */
export type DibodevSiteCheckAnswers = Record<string, string | null>

export type DibodevSiteCheckReportOutcome = 'sent' | 'ignored'

export type DibodevSiteCheckReportResponse = {
  outcome: DibodevSiteCheckReportOutcome
}

export type DibodevSiteCheckReportFormState = 'idle' | 'submitting' | 'sent' | 'error'

/** The texts of the form that name what was checked: a checker that does not test a website words them in its own way. */
export type DibodevSiteCheckReportFormToolSpecificWording = {
  intro: string
  contactConsent: string
  sentTextWithContactConsent: string
}

/** `intro` quotes the `{site}`. */
export type DibodevSiteCheckReportFormWording = {
  title: string
  intro: string
  emailLabel: string
  emailPlaceholder: string
  contactConsent: string
  privacyNote: string
  privacyLinkLabel: string
  submit: string
  submitting: string
  sentTitle: string
  sentText: string
  sentTextWithContactConsent: string
  errorTitle: string
  errorTexts: Record<DibodevSiteCheckErrorKind, string>
  toolSpecificWordings: Partial<Record<DibodevSiteCheckToolKey, DibodevSiteCheckReportFormToolSpecificWording>>
}

/** `checkAnswers` is null for a checker without questions; with questions, the server needs the answers to find the same verdict. */
export type DibodevSiteCheckReportFormProps = {
  tool: DibodevSiteCheckToolKey
  site: string
  verdict: string
  checkAnswers: DibodevSiteCheckAnswers | null
  trackingLocation: string
}
