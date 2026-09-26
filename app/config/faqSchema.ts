import type { DibodevFaqQuestion } from '~/core/types/DibodevFaqSection'

export type SchemaFaqAnswer = {
  '@type': 'Answer'
  text: string
}

export type SchemaFaqQuestion = {
  '@type': 'Question'
  name: string
  acceptedAnswer: SchemaFaqAnswer
}

export type SchemaFaqPage = {
  '@context': 'https://schema.org'
  '@type': 'FAQPage'
  mainEntity: SchemaFaqQuestion[]
}

/**
 * Builds the FAQPage JSON-LD of a list of questions, serialized for a script tag.
 *
 * @param {DibodevFaqQuestion[]} questions - The questions and answers shown on the page.
 * @returns {string} The serialized JSON-LD.
 */
export function buildFaqSchemaJson(questions: DibodevFaqQuestion[]): string {
  const faqSchema: SchemaFaqPage = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: questions.map(
      (faqQuestion: DibodevFaqQuestion): SchemaFaqQuestion => ({
        '@type': 'Question',
        name: faqQuestion.question,
        acceptedAnswer: { '@type': 'Answer', text: faqQuestion.answer },
      }),
    ),
  }
  return JSON.stringify(faqSchema)
}
