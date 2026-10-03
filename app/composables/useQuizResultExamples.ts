import type { ComputedRef } from 'vue'
import type { SupportedLocale } from '~/core/constants/categorySlugs'
import type { DibodevQuizDefinition, DibodevQuizQuestion, DibodevQuizResult } from '~/core/types/DibodevQuiz'
import type { DibodevQuizResultExample, DibodevQuizResultExampleConfig } from '~/core/types/DibodevQuizResultExample'
import { computed } from 'vue'

/** The answers summary of a test ends with a full stop, dropped when it follows the trade name. */
const TRAILING_FULL_STOP_REGEX: RegExp = /\.\s*$/

/**
 * Computes worked examples of the trade tests with the real tests, in the language of the page, so prices stay in sync.
 * @param {() => DibodevQuizResultExampleConfig[]} getConfigs - The examples to compute.
 * @returns {ComputedRef<DibodevQuizResultExample[]>} The examples, recomputed when the language changes.
 */
export function useQuizResultExamples(
  getConfigs: () => DibodevQuizResultExampleConfig[],
): ComputedRef<DibodevQuizResultExample[]> {
  const { locale } = useI18n()

  return computed((): DibodevQuizResultExample[] =>
    getConfigs().flatMap((config: DibodevQuizResultExampleConfig): DibodevQuizResultExample[] => {
      const currentLocale: SupportedLocale = locale.value as SupportedLocale
      const quiz: DibodevQuizDefinition = config.quizzes[currentLocale]
      const firstQuestion: DibodevQuizQuestion | undefined = quiz.questions[0]
      if (!firstQuestion) return []

      const result: DibodevQuizResult = quiz.computeResult(config.answers)
      return [
        {
          context: `${config.tradeLabel[currentLocale]} · ${result.answersSummary.replace(TRAILING_FULL_STOP_REGEX, '')}`,
          firstQuestion,
          firstAnswerId: config.answers[firstQuestion.id]?.[0] ?? '',
          questionCount: quiz.questions.length,
          progressTravellerIcon: quiz.progressTravellerIcon,
          result,
        },
      ]
    }),
  )
}
