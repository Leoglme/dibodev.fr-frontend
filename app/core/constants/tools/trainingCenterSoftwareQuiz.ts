import type { SupportedLocale } from '~/core/constants/categorySlugs'
import type { DibodevQuizDefinition } from '~/core/types/DibodevQuiz'
import type { DibodevTradeQuizConfig } from '~/core/types/DibodevTradeSoftwareQuiz'
import { TRAINING_CENTER_QUIZ_WORDING_EN } from '~/core/constants/tools/trainingCenterSoftware/quizWording.en'
import { TRAINING_CENTER_QUIZ_WORDING_ES } from '~/core/constants/tools/trainingCenterSoftware/quizWording.es'
import { TRAINING_CENTER_QUIZ_WORDING_FR } from '~/core/constants/tools/trainingCenterSoftware/quizWording.fr'
import { buildTradeSoftwareQuiz } from '~/core/constants/tools/tradeSoftwareQuiz'

/** Who pays decides the extras: EDOF for the CPF, funders' proofs, the immediate advance for families, family billing. */
const TRAINING_CENTER_QUIZ_CONFIG: DibodevTradeQuizConfig = {
  id: 'training-center-software',
  progressTravellerIcon: 'CalendarCheck',
  leadingFeatureKey: 'attendance',
  fallbackFeatureKeys: ['planning', 'hours', 'invoicing'],
  featureRules: [
    { questionId: 'scope', optionId: 'cpf', entryKey: 'edof' },
    { questionId: 'scope', optionId: 'funders', entryKey: 'fundingProofs' },
    { questionId: 'scope', optionId: 'families', entryKey: 'immediateAdvance' },
    { questionId: 'scope', optionId: 'members', entryKey: 'familyBilling' },
  ],
  checkRules: [
    { questionId: 'scope', optionId: 'cpf', entryKey: 'edof' },
    { questionId: 'scope', optionId: 'funders', entryKey: 'fundingProofs' },
    { questionId: 'scope', optionId: 'families', entryKey: 'immediateAdvance' },
    { questionId: 'scope', optionId: 'members', entryKey: 'familyBilling' },
  ],
}

/** The training centre test in each language. */
export const TRAINING_CENTER_SOFTWARE_QUIZZES: Record<SupportedLocale, DibodevQuizDefinition> = {
  fr: buildTradeSoftwareQuiz(TRAINING_CENTER_QUIZ_CONFIG, TRAINING_CENTER_QUIZ_WORDING_FR),
  en: buildTradeSoftwareQuiz(TRAINING_CENTER_QUIZ_CONFIG, TRAINING_CENTER_QUIZ_WORDING_EN),
  es: buildTradeSoftwareQuiz(TRAINING_CENTER_QUIZ_CONFIG, TRAINING_CENTER_QUIZ_WORDING_ES),
}
