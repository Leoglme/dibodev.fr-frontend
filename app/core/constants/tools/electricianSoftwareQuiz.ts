import type { SupportedLocale } from '~/core/constants/categorySlugs'
import type { DibodevQuizDefinition } from '~/core/types/DibodevQuiz'
import type { DibodevTradeQuizConfig } from '~/core/types/DibodevTradeSoftwareQuiz'
import { ELECTRICIAN_QUIZ_WORDING_EN } from '~/core/constants/tools/electricianSoftware/quizWording.en'
import { ELECTRICIAN_QUIZ_WORDING_ES } from '~/core/constants/tools/electricianSoftware/quizWording.es'
import { ELECTRICIAN_QUIZ_WORDING_FR } from '~/core/constants/tools/electricianSoftware/quizWording.fr'
import { buildTradeSoftwareQuiz } from '~/core/constants/tools/tradeSoftwareQuiz'

/** New installations add the Consuel file, charging points add the IRVE qualification follow-up. */
const ELECTRICIAN_QUIZ_CONFIG: DibodevTradeQuizConfig = {
  id: 'electrician-software',
  progressTravellerIcon: 'Zap',
  leadingFeatureKey: 'quotes',
  fallbackFeatureKeys: ['reports', 'planning', 'invoices'],
  featureRules: [
    { questionId: 'scope', optionId: 'installation', entryKey: 'consuel' },
    { questionId: 'scope', optionId: 'charging', entryKey: 'charging' },
  ],
  checkRules: [
    { questionId: 'scope', optionId: 'installation', entryKey: 'consuel' },
    { questionId: 'scope', optionId: 'charging', entryKey: 'charging' },
  ],
}

/** The electrician test in each language. */
export const ELECTRICIAN_SOFTWARE_QUIZZES: Record<SupportedLocale, DibodevQuizDefinition> = {
  fr: buildTradeSoftwareQuiz(ELECTRICIAN_QUIZ_CONFIG, ELECTRICIAN_QUIZ_WORDING_FR),
  en: buildTradeSoftwareQuiz(ELECTRICIAN_QUIZ_CONFIG, ELECTRICIAN_QUIZ_WORDING_EN),
  es: buildTradeSoftwareQuiz(ELECTRICIAN_QUIZ_CONFIG, ELECTRICIAN_QUIZ_WORDING_ES),
}
