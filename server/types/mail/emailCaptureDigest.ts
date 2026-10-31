import type { ContactMailDetailRow, MailLocale } from '~~/server/types/mail/contact'
import type { SecurityAlertTopic } from '~~/server/types/tools/securityAlerts'

export type EmailCaptureContactKind = 'contactIntent' | 'contactForm'

export type EmailCaptureKind = 'alert' | EmailCaptureContactKind

/** One form filled on the site, kept a few days for the owner's daily recap; only an alert request keeps its address. */
export type EmailCapture = {
  id: string
  kind: EmailCaptureKind
  email: string | null
  site: string | null
  alertTopic: SecurityAlertTopic | null
  projectType: string | null
  pagePath: string | null
  landingPagePath: string | null
  locale: MailLocale
  acquisitionSource: string | null
  capturedAt: string
}

export type EmailCaptureInput = {
  kind: EmailCaptureKind
  email: string | null
  site: string | null
  alertTopic: SecurityAlertTopic | null
  projectType: string | null
  pagePath: string | null
  landingPagePath: string | null
  locale: MailLocale
  acquisitionSource: string | null
}

/** Where the daily recap stands: the Paris day of the last run and the end of the period it covered. */
export type EmailCaptureDigestState = {
  lastRunDay: string
  coveredUntil: string
}

export type EmailCaptureDigestOutcome = 'notDue' | 'nothingNew' | 'sent'

export type EmailCaptureDigestRunResult = {
  outcome: EmailCaptureDigestOutcome
  captureCount: number
}

export type EmailCaptureAlertState = 'confirmed' | 'pending' | 'unsubscribed' | 'erased'

export type EmailCaptureDigestEntry = {
  capture: EmailCapture
  alertState: EmailCaptureAlertState | null
}

export type EmailCaptureAlertTotals = {
  confirmedSecurity: number
  confirmedHosting: number
  pending: number
}

export type EmailCaptureDigestContent = {
  entries: EmailCaptureDigestEntry[]
  hiddenCount: number
  periodStart: string
  periodEnd: string
  alertTotals: EmailCaptureAlertTotals
}

export type EmailCaptureKindLabels = {
  one: string
  many: string
}

export type EmailCaptureDigestMailEntry = {
  heading: string
  rows: ContactMailDetailRow[]
}
