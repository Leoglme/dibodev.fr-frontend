/**
 * Project type and pages range are sent as translated display values from the frontend (i18n).
 * The API accepts any string so emails reflect the user's language.
 */
export type ContactFormPayload = {
  projectType: string | null
  pagesRange: string | null
  budget: number
  fullName: string
  email: string
  message: string
}
