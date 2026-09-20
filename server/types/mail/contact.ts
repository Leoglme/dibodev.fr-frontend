/** First-touch acquisition source sent with the contact form and intent; every field is null when unavailable. */
export type LeadSource = {
  referrer: string | null
  landingPage: string | null
  utmSource: string | null
  utmMedium: string | null
  utmCampaign: string | null
}

/**
 * Project type, pages range and budget are sent as translated display values from the frontend (i18n).
 * The API accepts any string so emails reflect the user's language.
 * Budget is optional (selected range label or empty string if not provided).
 * Phone is optional (raw string as typed, or null if not provided).
 * Source is the first-touch acquisition source, or null when unavailable.
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
}

/**
 * Contact intent captured when a user starts filling the form without submitting: email and/or phone, at least one present.
 * Source is the first-touch acquisition source, or null when unavailable.
 */
export type ContactIntentPayload = {
  email: string | null
  phone: string | null
  source: LeadSource | null
}
