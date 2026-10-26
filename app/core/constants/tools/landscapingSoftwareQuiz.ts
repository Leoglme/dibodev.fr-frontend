import type { SupportedLocale } from '~/core/constants/categorySlugs'
import type { DibodevQuizDefinition } from '~/core/types/DibodevQuiz'
import type { DibodevTradeQuizConfig } from '~/core/types/DibodevTradeSoftwareQuiz'
import { LANDSCAPING_QUIZ_WORDING_EN } from '~/core/constants/tools/landscapingSoftware/quizWording.en'
import { LANDSCAPING_QUIZ_WORDING_ES } from '~/core/constants/tools/landscapingSoftware/quizWording.es'
import { LANDSCAPING_QUIZ_WORDING_FR } from '~/core/constants/tools/landscapingSoftware/quizWording.fr'
import { buildTradeSoftwareQuiz } from '~/core/constants/tools/tradeSoftwareQuiz'

/** Maintenance adds the contracts, home services the tax certificates, business customers e-invoicing, garden building the hours per job site. */
const LANDSCAPING_QUIZ_CONFIG: DibodevTradeQuizConfig = {
  id: 'landscaping-software',
  progressTravellerIcon: 'Sprout',
  leadingFeatureKey: 'quotes',
  fallbackFeatureKeys: ['contracts', 'planning', 'invoices'],
  featureRules: [
    { questionId: 'scope', optionId: 'maintenance', entryKey: 'contracts' },
    { questionId: 'scope', optionId: 'homeServices', entryKey: 'taxCertificates' },
    { questionId: 'scope', optionId: 'businessClients', entryKey: 'eInvoicing' },
    { questionId: 'scope', optionId: 'creation', entryKey: 'hours' },
  ],
  checkRules: [
    { questionId: 'scope', optionId: 'maintenance', entryKey: 'contracts' },
    { questionId: 'scope', optionId: 'homeServices', entryKey: 'taxCertificates' },
    { questionId: 'scope', optionId: 'businessClients', entryKey: 'eInvoicing' },
    { questionId: 'scope', optionId: 'creation', entryKey: 'hours' },
  ],
}

/** The landscaping test in each language. */
export const LANDSCAPING_SOFTWARE_QUIZZES: Record<SupportedLocale, DibodevQuizDefinition> = {
  fr: buildTradeSoftwareQuiz(LANDSCAPING_QUIZ_CONFIG, LANDSCAPING_QUIZ_WORDING_FR),
  en: buildTradeSoftwareQuiz(LANDSCAPING_QUIZ_CONFIG, LANDSCAPING_QUIZ_WORDING_EN),
  es: buildTradeSoftwareQuiz(LANDSCAPING_QUIZ_CONFIG, LANDSCAPING_QUIZ_WORDING_ES),
}
