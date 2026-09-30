import type { SupportedLocale } from '~/core/constants/categorySlugs'
import type { DibodevQuizDefinition } from '~/core/types/DibodevQuiz'
import type { DibodevTradeQuizConfig } from '~/core/types/DibodevTradeSoftwareQuiz'
import { EVENT_RENTAL_QUIZ_WORDING_EN } from '~/core/constants/tools/eventRentalSoftware/quizWording.en'
import { EVENT_RENTAL_QUIZ_WORDING_ES } from '~/core/constants/tools/eventRentalSoftware/quizWording.es'
import { EVENT_RENTAL_QUIZ_WORDING_FR } from '~/core/constants/tools/eventRentalSoftware/quizWording.fr'
import { buildTradeSoftwareQuiz } from '~/core/constants/tools/tradeSoftwareQuiz'

const EVENT_RENTAL_QUIZ_CONFIG: DibodevTradeQuizConfig = {
  id: 'event-rental-software',
  progressTravellerIcon: 'Truck',
  leadingFeatureKey: 'availability',
  fallbackFeatureKeys: ['prep', 'quotes', 'breakage'],
  featureRules: [{ questionId: 'scope', optionId: 'tents', entryKey: 'documents' }],
  checkRules: [{ questionId: 'scope', optionId: 'tents', entryKey: 'tents' }],
}

/** The event equipment rental test in each language. */
export const EVENT_RENTAL_SOFTWARE_QUIZZES: Record<SupportedLocale, DibodevQuizDefinition> = {
  fr: buildTradeSoftwareQuiz(EVENT_RENTAL_QUIZ_CONFIG, EVENT_RENTAL_QUIZ_WORDING_FR),
  en: buildTradeSoftwareQuiz(EVENT_RENTAL_QUIZ_CONFIG, EVENT_RENTAL_QUIZ_WORDING_EN),
  es: buildTradeSoftwareQuiz(EVENT_RENTAL_QUIZ_CONFIG, EVENT_RENTAL_QUIZ_WORDING_ES),
}
