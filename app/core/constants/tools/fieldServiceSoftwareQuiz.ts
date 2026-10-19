import type { SupportedLocale } from '~/core/constants/categorySlugs'
import type { DibodevQuizDefinition } from '~/core/types/DibodevQuiz'
import type { DibodevTradeQuizConfig } from '~/core/types/DibodevTradeSoftwareQuiz'
import { FIELD_SERVICE_QUIZ_WORDING_EN } from '~/core/constants/tools/fieldServiceSoftware/quizWording.en'
import { FIELD_SERVICE_QUIZ_WORDING_ES } from '~/core/constants/tools/fieldServiceSoftware/quizWording.es'
import { FIELD_SERVICE_QUIZ_WORDING_FR } from '~/core/constants/tools/fieldServiceSoftware/quizWording.fr'
import { buildTradeSoftwareQuiz } from '~/core/constants/tools/tradeSoftwareQuiz'

/** Maintenance work adds the recurring visits, breakdowns the dispatching, inspections the checklists. */
const FIELD_SERVICE_QUIZ_CONFIG: DibodevTradeQuizConfig = {
  id: 'field-service-software',
  progressTravellerIcon: 'ClipboardCheck',
  leadingFeatureKey: 'reports',
  fallbackFeatureKeys: ['planning', 'invoices', 'history'],
  featureRules: [
    { questionId: 'scope', optionId: 'maintenance', entryKey: 'contracts' },
    { questionId: 'scope', optionId: 'breakdown', entryKey: 'dispatch' },
    { questionId: 'scope', optionId: 'inspection', entryKey: 'checklists' },
  ],
  checkRules: [
    { questionId: 'scope', optionId: 'maintenance', entryKey: 'contracts' },
    { questionId: 'scope', optionId: 'breakdown', entryKey: 'dispatch' },
    { questionId: 'scope', optionId: 'inspection', entryKey: 'checklists' },
  ],
}

/** The field service test in each language. */
export const FIELD_SERVICE_SOFTWARE_QUIZZES: Record<SupportedLocale, DibodevQuizDefinition> = {
  fr: buildTradeSoftwareQuiz(FIELD_SERVICE_QUIZ_CONFIG, FIELD_SERVICE_QUIZ_WORDING_FR),
  en: buildTradeSoftwareQuiz(FIELD_SERVICE_QUIZ_CONFIG, FIELD_SERVICE_QUIZ_WORDING_EN),
  es: buildTradeSoftwareQuiz(FIELD_SERVICE_QUIZ_CONFIG, FIELD_SERVICE_QUIZ_WORDING_ES),
}
