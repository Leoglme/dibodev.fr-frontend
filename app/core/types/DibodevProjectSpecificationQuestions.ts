import type {
  DibodevProjectSpecificationAnswers,
  DibodevProjectSpecificationStep,
  DibodevProjectSpecificationWording,
} from '~/core/types/DibodevProjectSpecification'

/**
 * Props of the questions of one step.
 * @type {DibodevProjectSpecificationQuestionsProps}
 * @property {DibodevProjectSpecificationStep} step - The step shown.
 * @property {DibodevProjectSpecificationAnswers} answers - The answers given so far.
 * @property {DibodevProjectSpecificationWording} wording - Questions and options of the page language.
 * @property {string} budgetHelpTo - Localized path of the price barometer that matches the project type.
 */
export type DibodevProjectSpecificationQuestionsProps = {
  step: DibodevProjectSpecificationStep
  answers: DibodevProjectSpecificationAnswers
  wording: DibodevProjectSpecificationWording
  budgetHelpTo: string
}

export type DibodevProjectSpecificationCompanyTextField = {
  key: 'companyName' | 'activity' | 'city'
  label: string
  placeholder: string
  maxLength: number
  autocomplete: string
}

export type DibodevProjectSpecificationQuestionsExposed = {
  focusHeading: () => void
}
