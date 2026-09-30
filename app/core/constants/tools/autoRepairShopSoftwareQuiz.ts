import type { SupportedLocale } from '~/core/constants/categorySlugs'
import type { DibodevQuizDefinition } from '~/core/types/DibodevQuiz'
import type { DibodevTradeQuizConfig } from '~/core/types/DibodevTradeSoftwareQuiz'
import { AUTO_REPAIR_QUIZ_WORDING_EN } from '~/core/constants/tools/autoRepairShopSoftware/quizWording.en'
import { AUTO_REPAIR_QUIZ_WORDING_ES } from '~/core/constants/tools/autoRepairShopSoftware/quizWording.es'
import { AUTO_REPAIR_QUIZ_WORDING_FR } from '~/core/constants/tools/autoRepairShopSoftware/quizWording.fr'
import { buildTradeSoftwareQuiz } from '~/core/constants/tools/tradeSoftwareQuiz'

const AUTO_REPAIR_QUIZ_CONFIG: DibodevTradeQuizConfig = {
  id: 'auto-repair-shop-software',
  progressTravellerIcon: 'Wrench',
  leadingFeatureKey: 'quotes',
  fallbackFeatureKeys: ['orders', 'history', 'invoices'],
  featureRules: [
    { questionId: 'scope', optionId: 'used', entryKey: 'used' },
    { questionId: 'scope', optionId: 'body', entryKey: 'photos' },
  ],
  checkRules: [
    { questionId: 'scope', optionId: 'used', entryKey: 'used' },
    { questionId: 'scope', optionId: 'body', entryKey: 'photos' },
  ],
}

/** The auto repair shop test in each language. */
export const AUTO_REPAIR_SHOP_SOFTWARE_QUIZZES: Record<SupportedLocale, DibodevQuizDefinition> = {
  fr: buildTradeSoftwareQuiz(AUTO_REPAIR_QUIZ_CONFIG, AUTO_REPAIR_QUIZ_WORDING_FR),
  en: buildTradeSoftwareQuiz(AUTO_REPAIR_QUIZ_CONFIG, AUTO_REPAIR_QUIZ_WORDING_EN),
  es: buildTradeSoftwareQuiz(AUTO_REPAIR_QUIZ_CONFIG, AUTO_REPAIR_QUIZ_WORDING_ES),
}
