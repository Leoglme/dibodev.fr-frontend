import type { DateTime } from 'luxon'

/** First-touch acquisition source sent with the contact form and intent; every field is null when unavailable. */
export type LeadSource = {
  referrer: string | null
  landingPage: string | null
  utmSource: string | null
  utmMedium: string | null
  utmCampaign: string | null
}

export type MailLocale = 'fr' | 'en' | 'es'

/**
 * Project type, pages range and budget are sent as translated display values from the frontend (i18n).
 * The API accepts any string so emails reflect the user's language.
 * Budget is optional (selected range label or empty string if not provided).
 * Phone is optional (raw string as typed, or null if not provided).
 * Source is the first-touch acquisition source, or null when unavailable.
 * Locale is the site language the form was filled in; the server falls back to French for any other value.
 */
export type ContactFormPayload = {
  projectType: string | null
  pagesRange: string | null
  budget: string
  fullName: string
  email: string
  phone: string | null
  message: string
  source: LeadSource | null
  locale: string | null
}

/**
 * Contact intent captured when a user starts filling the form without submitting: email and/or phone, at least one present.
 * Source is the first-touch acquisition source, or null when unavailable.
 * Locale is the site language the form was filled in, or null when unknown.
 */
export type ContactIntentPayload = {
  email: string | null
  phone: string | null
  source: LeadSource | null
  locale: string | null
}

export type ContactMailDetailRow = {
  label: string
  value: string
  href: string | null
}

export type ContactMailAction = {
  label: string
  href: string
  isPrimary: boolean
}

export type ContactAcknowledgementStepTexts = {
  title: string
  description: string
}

export type ContactMailNextStep = {
  number: number
  title: string
  description: string
}

export type ContactAcknowledgementTexts = {
  subject: string
  fromName: string
  preheader: (replyDeadline: string) => string
  title: (greetingName: string) => string
  introStart: string
  introEnd: string
  nextStepsTitle: string
  nextSteps: ContactAcknowledgementStepTexts[]
  requestTitle: string
  projectTypeLabel: string
  pagesRangeLabel: string
  budgetLabel: string
  phoneLabel: string
  messageLabel: string
  replyStart: string
  replyEnd: string
  ownerPhoneDisplay: string
  portfolioStart: string
  portfolioLabel: string
  portfolioEnd: string
  portfolioUrl: string
  signOff: string
  footerText: string
  privacyLabel: string
  privacyUrl: string
  labelSeparator: string
}

export type OwnerNotificationContact = {
  email: string | null
  phone: string | null
  source: LeadSource | null
  locale: MailLocale
  receivedAt: DateTime
}
