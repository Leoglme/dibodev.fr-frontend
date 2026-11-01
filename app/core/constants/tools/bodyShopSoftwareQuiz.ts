import type { SupportedLocale } from '~/core/constants/categorySlugs'
import type { DibodevQuizDefinition } from '~/core/types/DibodevQuiz'
import type { DibodevTradeQuizConfig } from '~/core/types/DibodevTradeSoftwareQuiz'
import { BODY_SHOP_QUIZ_WORDING_EN } from '~/core/constants/tools/bodyShopSoftware/quizWording.en'
import { BODY_SHOP_QUIZ_WORDING_ES } from '~/core/constants/tools/bodyShopSoftware/quizWording.es'
import { BODY_SHOP_QUIZ_WORDING_FR } from '~/core/constants/tools/bodyShopSoftware/quizWording.fr'
import { buildTradeSoftwareQuiz } from '~/core/constants/tools/tradeSoftwareQuiz'

/** Insurer claims add the claim circuit, direct customers the signed quote, fleets the multi-vehicle accounts, glass the glass circuit. */
const BODY_SHOP_QUIZ_CONFIG: DibodevTradeQuizConfig = {
  id: 'body-shop-software',
  progressTravellerIcon: 'SprayCan',
  leadingFeatureKey: 'experts',
  fallbackFeatureKeys: ['parts', 'invoicing', 'photos'],
  featureRules: [
    { questionId: 'scope', optionId: 'insurance', entryKey: 'claimFlow' },
    { questionId: 'scope', optionId: 'direct', entryKey: 'directQuotes' },
    { questionId: 'scope', optionId: 'fleet', entryKey: 'fleetBilling' },
    { questionId: 'scope', optionId: 'glass', entryKey: 'glassClaims' },
  ],
  checkRules: [
    { questionId: 'scope', optionId: 'insurance', entryKey: 'claimFlow' },
    { questionId: 'scope', optionId: 'direct', entryKey: 'directQuotes' },
    { questionId: 'scope', optionId: 'fleet', entryKey: 'fleetBilling' },
    { questionId: 'scope', optionId: 'glass', entryKey: 'glassClaims' },
  ],
}

/** The body shop test in each language. */
export const BODY_SHOP_SOFTWARE_QUIZZES: Record<SupportedLocale, DibodevQuizDefinition> = {
  fr: buildTradeSoftwareQuiz(BODY_SHOP_QUIZ_CONFIG, BODY_SHOP_QUIZ_WORDING_FR),
  en: buildTradeSoftwareQuiz(BODY_SHOP_QUIZ_CONFIG, BODY_SHOP_QUIZ_WORDING_EN),
  es: buildTradeSoftwareQuiz(BODY_SHOP_QUIZ_CONFIG, BODY_SHOP_QUIZ_WORDING_ES),
}
