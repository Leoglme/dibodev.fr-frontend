/**
 * Project type, pages range and budget are sent as translated display values from the frontend (i18n).
 * The API accepts any string so emails reflect the user's language.
 * Budget is optional (selected range label or empty string if not provided).
 */
export type ContactFormPayload = {
  projectType: string | null
  pagesRange: string | null
  budget: string
  fullName: string
  email: string
  message: string
}
