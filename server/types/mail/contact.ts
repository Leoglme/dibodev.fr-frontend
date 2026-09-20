/**
 * Project type, pages range and budget are sent as translated display values from the frontend (i18n).
 * The API accepts any string so emails reflect the user's language.
 * Budget is optional (selected range label or empty string if not provided).
 * Phone is optional (raw string as typed, or null if not provided).
 */
export type ContactFormPayload = {
  projectType: string | null
  pagesRange: string | null
  budget: string
  fullName: string
  email: string
  phone: string | null
  message: string
}

/**
 * Contact intent captured when a user starts filling the form without submitting: email and/or phone, at least one present.
 */
export type ContactIntentPayload = {
  email: string | null
  phone: string | null
}
