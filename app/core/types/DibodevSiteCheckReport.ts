import type { DibodevSiteCheckErrorKind } from '~/core/types/DibodevSiteCheck'

/** Mirrored in `server/types/tools/siteCheckReport.ts`: keep both in step. */
export type DibodevSiteCheckToolKey =
  | 'phpVulnerability'
  | 'wordpressHack'
  | 'joomlaVersion'
  | 'emailDeliverability'
  | 'websiteHealth'
  | 'gdprCookie'

export type DibodevSiteCheckReportOutcome = 'sent' | 'ignored'

export type DibodevSiteCheckReportResponse = {
  outcome: DibodevSiteCheckReportOutcome
}

export type DibodevSiteCheckReportFormState = 'idle' | 'submitting' | 'sent' | 'error'

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
}

export type DibodevSiteCheckReportFormProps = {
  tool: DibodevSiteCheckToolKey
  site: string
  verdict: string
  trackingLocation: string
}
