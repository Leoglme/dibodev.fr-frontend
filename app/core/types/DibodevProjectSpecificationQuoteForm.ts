import type {
  DibodevProjectSpecificationBudget,
  DibodevProjectSpecificationDocument,
  DibodevProjectSpecificationInterfaceWording,
  DibodevProjectSpecificationProjectType,
} from '~/core/types/DibodevProjectSpecification'

/**
 * Props of the quote request sent with the specification.
 * @type {DibodevProjectSpecificationQuoteFormProps}
 * @property {DibodevProjectSpecificationInterfaceWording} wording - Labels and messages of the form.
 * @property {DibodevProjectSpecificationDocument} specification - The document sent to Léo as the message.
 * @property {DibodevProjectSpecificationProjectType} projectType - Kind of project, sent to PostHog.
 * @property {string} projectTypeLabel - Kind of project in words, shown in the e-mail subject.
 * @property {DibodevProjectSpecificationBudget | null} budget - Budget chosen, sent to PostHog.
 * @property {string} budgetLabel - Budget in words, shown in the e-mail.
 * @property {string} trackingLocation - `location` sent with the PostHog events of the form.
 */
export type DibodevProjectSpecificationQuoteFormProps = {
  wording: DibodevProjectSpecificationInterfaceWording
  specification: DibodevProjectSpecificationDocument
  projectType: DibodevProjectSpecificationProjectType
  projectTypeLabel: string
  budget: DibodevProjectSpecificationBudget | null
  budgetLabel: string
  trackingLocation: string
}
