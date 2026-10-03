import type { SupportedLocale } from '~/core/constants/categorySlugs'
import type {
  DibodevQuizAnswers,
  DibodevQuizDefinition,
  DibodevQuizQuestion,
  DibodevQuizResult,
} from '~/core/types/DibodevQuiz'

/**
 * A worked example of a trade test: the trade, the test in each language and the answers the example is computed from.
 * @type {DibodevQuizResultExampleConfig}
 * @property {Record<SupportedLocale, string>} tradeLabel - Name of the trade in each language (e.g. "Garage").
 * @property {Record<SupportedLocale, DibodevQuizDefinition>} quizzes - The test in each language.
 * @property {DibodevQuizAnswers} answers - The answers given in the example.
 */
export type DibodevQuizResultExampleConfig = {
  tradeLabel: Record<SupportedLocale, string>
  quizzes: Record<SupportedLocale, DibodevQuizDefinition>
  answers: DibodevQuizAnswers
}

/**
 * A worked example computed by the real test, in the language of the page.
 * @type {DibodevQuizResultExample}
 * @property {string} context - The trade and the answers in words (e.g. "Garage · une seule personne, un seul atelier, mécanique").
 * @property {DibodevQuizQuestion} firstQuestion - First question of the test.
 * @property {string} firstAnswerId - Option picked for the first question.
 * @property {number} questionCount - Number of questions in the test.
 * @property {string} progressTravellerIcon - Icon travelling on the progress road of the test.
 * @property {DibodevQuizResult} result - The recommendation the test gives for these answers.
 */
export type DibodevQuizResultExample = {
  context: string
  firstQuestion: DibodevQuizQuestion
  firstAnswerId: string
  questionCount: number
  progressTravellerIcon: string
  result: DibodevQuizResult
}
