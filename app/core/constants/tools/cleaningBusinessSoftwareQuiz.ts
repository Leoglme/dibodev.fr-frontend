import type { SupportedLocale } from '~/core/constants/categorySlugs'
import type { DibodevQuizDefinition } from '~/core/types/DibodevQuiz'
import type { DibodevTradeQuizConfig } from '~/core/types/DibodevTradeSoftwareQuiz'
import { CLEANING_BUSINESS_QUIZ_WORDING_EN } from '~/core/constants/tools/cleaningBusinessSoftware/quizWording.en'
import { CLEANING_BUSINESS_QUIZ_WORDING_ES } from '~/core/constants/tools/cleaningBusinessSoftware/quizWording.es'
import { CLEANING_BUSINESS_QUIZ_WORDING_FR } from '~/core/constants/tools/cleaningBusinessSoftware/quizWording.fr'
import { buildTradeSoftwareQuiz } from '~/core/constants/tools/tradeSoftwareQuiz'

/** Apartment buildings add the keys and badges, private homes the 10 % VAT and quote, sensitive sites the protocols. */
const CLEANING_BUSINESS_QUIZ_CONFIG: DibodevTradeQuizConfig = {
  id: 'cleaning-business-software',
  progressTravellerIcon: 'SprayCan',
  leadingFeatureKey: 'timesheets',
  fallbackFeatureKeys: ['planning', 'quality', 'invoices'],
  featureRules: [
    { questionId: 'scope', optionId: 'condo', entryKey: 'keys' },
    { questionId: 'scope', optionId: 'homes', entryKey: 'homeServices' },
    { questionId: 'scope', optionId: 'sensitive', entryKey: 'protocols' },
  ],
  checkRules: [
    { questionId: 'scope', optionId: 'condo', entryKey: 'keys' },
    { questionId: 'scope', optionId: 'homes', entryKey: 'homeServices' },
    { questionId: 'scope', optionId: 'sensitive', entryKey: 'protocols' },
  ],
}

/** The cleaning business test in each language. */
export const CLEANING_BUSINESS_SOFTWARE_QUIZZES: Record<SupportedLocale, DibodevQuizDefinition> = {
  fr: buildTradeSoftwareQuiz(CLEANING_BUSINESS_QUIZ_CONFIG, CLEANING_BUSINESS_QUIZ_WORDING_FR),
  en: buildTradeSoftwareQuiz(CLEANING_BUSINESS_QUIZ_CONFIG, CLEANING_BUSINESS_QUIZ_WORDING_EN),
  es: buildTradeSoftwareQuiz(CLEANING_BUSINESS_QUIZ_CONFIG, CLEANING_BUSINESS_QUIZ_WORDING_ES),
}
