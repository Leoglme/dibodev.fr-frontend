import type { SupportedLocale } from '~/core/constants/categorySlugs'
import type { DibodevQuizDefinition } from '~/core/types/DibodevQuiz'
import type { DibodevTradeQuizConfig } from '~/core/types/DibodevTradeSoftwareQuiz'
import { CARPENTRY_QUIZ_WORDING_EN } from '~/core/constants/tools/carpentrySoftware/quizWording.en'
import { CARPENTRY_QUIZ_WORDING_ES } from '~/core/constants/tools/carpentrySoftware/quizWording.es'
import { CARPENTRY_QUIZ_WORDING_FR } from '~/core/constants/tools/carpentrySoftware/quizWording.fr'
import { buildTradeSoftwareQuiz } from '~/core/constants/tools/tradeSoftwareQuiz'

/** Window fitting adds the withdrawal follow-up, fitted furniture the CAD cutting list, kitchens the variants, the workshop the machine rates. */
const CARPENTRY_QUIZ_CONFIG: DibodevTradeQuizConfig = {
  id: 'carpentry-software',
  progressTravellerIcon: 'Wrench',
  leadingFeatureKey: 'jobCosting',
  fallbackFeatureKeys: ['quotes', 'cuttingLists', 'planning'],
  featureRules: [
    { questionId: 'scope', optionId: 'windows', entryKey: 'withdrawal' },
    { questionId: 'scope', optionId: 'fittings', entryKey: 'cadLink' },
    { questionId: 'scope', optionId: 'kitchens', entryKey: 'variants' },
    { questionId: 'scope', optionId: 'joinery', entryKey: 'machineRates' },
  ],
  checkRules: [
    { questionId: 'scope', optionId: 'windows', entryKey: 'withdrawal' },
    { questionId: 'scope', optionId: 'fittings', entryKey: 'cadLink' },
    { questionId: 'scope', optionId: 'kitchens', entryKey: 'variants' },
    { questionId: 'scope', optionId: 'joinery', entryKey: 'machineRates' },
  ],
}

/** The carpentry and joinery test in each language. */
export const CARPENTRY_SOFTWARE_QUIZZES: Record<SupportedLocale, DibodevQuizDefinition> = {
  fr: buildTradeSoftwareQuiz(CARPENTRY_QUIZ_CONFIG, CARPENTRY_QUIZ_WORDING_FR),
  en: buildTradeSoftwareQuiz(CARPENTRY_QUIZ_CONFIG, CARPENTRY_QUIZ_WORDING_EN),
  es: buildTradeSoftwareQuiz(CARPENTRY_QUIZ_CONFIG, CARPENTRY_QUIZ_WORDING_ES),
}
