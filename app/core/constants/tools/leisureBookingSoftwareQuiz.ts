import type { SupportedLocale } from '~/core/constants/categorySlugs'
import type { DibodevQuizDefinition } from '~/core/types/DibodevQuiz'
import type { DibodevTradeQuizConfig } from '~/core/types/DibodevTradeSoftwareQuiz'
import { LEISURE_BOOKING_QUIZ_WORDING_EN } from '~/core/constants/tools/leisureBookingSoftware/quizWording.en'
import { LEISURE_BOOKING_QUIZ_WORDING_ES } from '~/core/constants/tools/leisureBookingSoftware/quizWording.es'
import { LEISURE_BOOKING_QUIZ_WORDING_FR } from '~/core/constants/tools/leisureBookingSoftware/quizWording.fr'
import { buildTradeSoftwareQuiz } from '~/core/constants/tools/tradeSoftwareQuiz'

/** Treetop parks add the PPE checks, escape games the room slots, water sports the swimming certificate, riding the VAT per service, hire the deposits. */
const LEISURE_BOOKING_QUIZ_CONFIG: DibodevTradeQuizConfig = {
  id: 'leisure-booking-software',
  progressTravellerIcon: 'Tent',
  leadingFeatureKey: 'overbooking',
  fallbackFeatureKeys: ['weather', 'commissions', 'payments'],
  featureRules: [
    { questionId: 'scope', optionId: 'aerial', entryKey: 'ppeChecks' },
    { questionId: 'scope', optionId: 'games', entryKey: 'roomSlots' },
    { questionId: 'scope', optionId: 'water', entryKey: 'swimmingCertificate' },
    { questionId: 'scope', optionId: 'equestrian', entryKey: 'vatPerService' },
    { questionId: 'scope', optionId: 'rental', entryKey: 'deposits' },
  ],
  checkRules: [
    { questionId: 'scope', optionId: 'aerial', entryKey: 'ppeChecks' },
    { questionId: 'scope', optionId: 'games', entryKey: 'roomSlots' },
    { questionId: 'scope', optionId: 'water', entryKey: 'swimmingCertificate' },
    { questionId: 'scope', optionId: 'equestrian', entryKey: 'vatPerService' },
    { questionId: 'scope', optionId: 'rental', entryKey: 'deposits' },
  ],
}

/** The leisure activity booking test in each language. */
export const LEISURE_BOOKING_SOFTWARE_QUIZZES: Record<SupportedLocale, DibodevQuizDefinition> = {
  fr: buildTradeSoftwareQuiz(LEISURE_BOOKING_QUIZ_CONFIG, LEISURE_BOOKING_QUIZ_WORDING_FR),
  en: buildTradeSoftwareQuiz(LEISURE_BOOKING_QUIZ_CONFIG, LEISURE_BOOKING_QUIZ_WORDING_EN),
  es: buildTradeSoftwareQuiz(LEISURE_BOOKING_QUIZ_CONFIG, LEISURE_BOOKING_QUIZ_WORDING_ES),
}
