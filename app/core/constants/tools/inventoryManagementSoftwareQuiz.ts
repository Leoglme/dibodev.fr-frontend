import type { SupportedLocale } from '~/core/constants/categorySlugs'
import type { DibodevQuizDefinition } from '~/core/types/DibodevQuiz'
import type { DibodevTradeQuizConfig } from '~/core/types/DibodevTradeSoftwareQuiz'
import { INVENTORY_MANAGEMENT_QUIZ_WORDING_EN } from '~/core/constants/tools/inventoryManagementSoftware/quizWording.en'
import { INVENTORY_MANAGEMENT_QUIZ_WORDING_ES } from '~/core/constants/tools/inventoryManagementSoftware/quizWording.es'
import { INVENTORY_MANAGEMENT_QUIZ_WORDING_FR } from '~/core/constants/tools/inventoryManagementSoftware/quizWording.fr'
import { buildTradeSoftwareQuiz } from '~/core/constants/tools/tradeSoftwareQuiz'

/** Resale goods add the sales link, workshop parts the job allocation, rentals the returns, perishables the lots, serialised items the units. */
const INVENTORY_MANAGEMENT_QUIZ_CONFIG: DibodevTradeQuizConfig = {
  id: 'inventory-management-software',
  progressTravellerIcon: 'ClipboardCheck',
  leadingFeatureKey: 'counting',
  fallbackFeatureKeys: ['alerts', 'transfers', 'receiving'],
  featureRules: [
    { questionId: 'scope', optionId: 'goods', entryKey: 'sales' },
    { questionId: 'scope', optionId: 'parts', entryKey: 'jobs' },
    { questionId: 'scope', optionId: 'rental', entryKey: 'returns' },
    { questionId: 'scope', optionId: 'perishable', entryKey: 'lots' },
    { questionId: 'scope', optionId: 'serialized', entryKey: 'serials' },
  ],
  checkRules: [
    { questionId: 'scope', optionId: 'goods', entryKey: 'sales' },
    { questionId: 'scope', optionId: 'parts', entryKey: 'jobs' },
    { questionId: 'scope', optionId: 'rental', entryKey: 'returns' },
    { questionId: 'scope', optionId: 'perishable', entryKey: 'lots' },
    { questionId: 'scope', optionId: 'serialized', entryKey: 'serials' },
  ],
}

/** The inventory management test in each language. */
export const INVENTORY_MANAGEMENT_SOFTWARE_QUIZZES: Record<SupportedLocale, DibodevQuizDefinition> = {
  fr: buildTradeSoftwareQuiz(INVENTORY_MANAGEMENT_QUIZ_CONFIG, INVENTORY_MANAGEMENT_QUIZ_WORDING_FR),
  en: buildTradeSoftwareQuiz(INVENTORY_MANAGEMENT_QUIZ_CONFIG, INVENTORY_MANAGEMENT_QUIZ_WORDING_EN),
  es: buildTradeSoftwareQuiz(INVENTORY_MANAGEMENT_QUIZ_CONFIG, INVENTORY_MANAGEMENT_QUIZ_WORDING_ES),
}
