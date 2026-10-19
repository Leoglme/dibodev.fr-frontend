import type { SupportedLocale } from '~/core/constants/categorySlugs'
import type { DibodevQuizDefinition } from '~/core/types/DibodevQuiz'
import type { DibodevTradeQuizConfig } from '~/core/types/DibodevTradeSoftwareQuiz'
import { PLUMBING_HEATING_QUIZ_WORDING_EN } from '~/core/constants/tools/plumbingHeatingSoftware/quizWording.en'
import { PLUMBING_HEATING_QUIZ_WORDING_ES } from '~/core/constants/tools/plumbingHeatingSoftware/quizWording.es'
import { PLUMBING_HEATING_QUIZ_WORDING_FR } from '~/core/constants/tools/plumbingHeatingSoftware/quizWording.fr'
import { buildTradeSoftwareQuiz } from '~/core/constants/tools/tradeSoftwareQuiz'

/** Heating work adds the boiler maintenance certificate; air conditioning and heat pumps add the equipment record. */
const PLUMBING_HEATING_QUIZ_CONFIG: DibodevTradeQuizConfig = {
  id: 'plumbing-heating-software',
  progressTravellerIcon: 'Flame',
  leadingFeatureKey: 'quotes',
  fallbackFeatureKeys: ['reports', 'contracts', 'invoices'],
  featureRules: [
    { questionId: 'scope', optionId: 'heating', entryKey: 'certificates' },
    { questionId: 'scope', optionId: 'hvac', entryKey: 'equipment' },
  ],
  checkRules: [
    { questionId: 'scope', optionId: 'heating', entryKey: 'certificates' },
    { questionId: 'scope', optionId: 'hvac', entryKey: 'equipment' },
  ],
}

/** The plumbing and heating test in each language. */
export const PLUMBING_HEATING_SOFTWARE_QUIZZES: Record<SupportedLocale, DibodevQuizDefinition> = {
  fr: buildTradeSoftwareQuiz(PLUMBING_HEATING_QUIZ_CONFIG, PLUMBING_HEATING_QUIZ_WORDING_FR),
  en: buildTradeSoftwareQuiz(PLUMBING_HEATING_QUIZ_CONFIG, PLUMBING_HEATING_QUIZ_WORDING_EN),
  es: buildTradeSoftwareQuiz(PLUMBING_HEATING_QUIZ_CONFIG, PLUMBING_HEATING_QUIZ_WORDING_ES),
}
