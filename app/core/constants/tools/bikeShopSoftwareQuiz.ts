import type { SupportedLocale } from '~/core/constants/categorySlugs'
import type { DibodevQuizDefinition } from '~/core/types/DibodevQuiz'
import type { DibodevTradeQuizConfig } from '~/core/types/DibodevTradeSoftwareQuiz'
import { BIKE_SHOP_QUIZ_WORDING_EN } from '~/core/constants/tools/bikeShopSoftware/quizWording.en'
import { BIKE_SHOP_QUIZ_WORDING_ES } from '~/core/constants/tools/bikeShopSoftware/quizWording.es'
import { BIKE_SHOP_QUIZ_WORDING_FR } from '~/core/constants/tools/bikeShopSoftware/quizWording.fr'
import { buildTradeSoftwareQuiz } from '~/core/constants/tools/tradeSoftwareQuiz'

const BIKE_SHOP_QUIZ_CONFIG: DibodevTradeQuizConfig = {
  id: 'bike-shop-software',
  progressTravellerIcon: 'Bike',
  leadingFeatureKey: 'booking',
  fallbackFeatureKeys: ['tickets', 'history', 'parts'],
  featureRules: [
    { questionId: 'scope', optionId: 'rental', entryKey: 'rental' },
    { questionId: 'scope', optionId: 'sales', entryKey: 'marking' },
    { questionId: 'scope', optionId: 'ebike', entryKey: 'ebike' },
  ],
  checkRules: [
    { questionId: 'scope', optionId: 'sales', entryKey: 'marking' },
    { questionId: 'scope', optionId: 'rental', entryKey: 'rental' },
    { questionId: 'scope', optionId: 'ebike', entryKey: 'ebike' },
  ],
}

/** The bike shop test in each language. */
export const BIKE_SHOP_SOFTWARE_QUIZZES: Record<SupportedLocale, DibodevQuizDefinition> = {
  fr: buildTradeSoftwareQuiz(BIKE_SHOP_QUIZ_CONFIG, BIKE_SHOP_QUIZ_WORDING_FR),
  en: buildTradeSoftwareQuiz(BIKE_SHOP_QUIZ_CONFIG, BIKE_SHOP_QUIZ_WORDING_EN),
  es: buildTradeSoftwareQuiz(BIKE_SHOP_QUIZ_CONFIG, BIKE_SHOP_QUIZ_WORDING_ES),
}
