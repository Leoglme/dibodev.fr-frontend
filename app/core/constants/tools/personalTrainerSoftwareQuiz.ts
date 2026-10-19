import type { SupportedLocale } from '~/core/constants/categorySlugs'
import type { DibodevQuizDefinition } from '~/core/types/DibodevQuiz'
import type { DibodevTradeQuizConfig } from '~/core/types/DibodevTradeSoftwareQuiz'
import { PERSONAL_TRAINER_QUIZ_WORDING_EN } from '~/core/constants/tools/personalTrainerSoftware/quizWording.en'
import { PERSONAL_TRAINER_QUIZ_WORDING_ES } from '~/core/constants/tools/personalTrainerSoftware/quizWording.es'
import { PERSONAL_TRAINER_QUIZ_WORDING_FR } from '~/core/constants/tools/personalTrainerSoftware/quizWording.fr'
import { buildTradeSoftwareQuiz } from '~/core/constants/tools/tradeSoftwareQuiz'

/** Group classes add the waiting list, online coaching the branded app, a gym the access control. */
const PERSONAL_TRAINER_QUIZ_CONFIG: DibodevTradeQuizConfig = {
  id: 'personal-trainer-software',
  progressTravellerIcon: 'Dumbbell',
  leadingFeatureKey: 'booking',
  fallbackFeatureKeys: ['payments', 'programs', 'progress'],
  featureRules: [
    { questionId: 'scope', optionId: 'group', entryKey: 'waitlist' },
    { questionId: 'scope', optionId: 'online', entryKey: 'app' },
    { questionId: 'scope', optionId: 'gym', entryKey: 'access' },
  ],
  checkRules: [
    { questionId: 'scope', optionId: 'group', entryKey: 'waitlist' },
    { questionId: 'scope', optionId: 'online', entryKey: 'app' },
    { questionId: 'scope', optionId: 'gym', entryKey: 'access' },
  ],
}

/** The personal trainer test in each language. */
export const PERSONAL_TRAINER_SOFTWARE_QUIZZES: Record<SupportedLocale, DibodevQuizDefinition> = {
  fr: buildTradeSoftwareQuiz(PERSONAL_TRAINER_QUIZ_CONFIG, PERSONAL_TRAINER_QUIZ_WORDING_FR),
  en: buildTradeSoftwareQuiz(PERSONAL_TRAINER_QUIZ_CONFIG, PERSONAL_TRAINER_QUIZ_WORDING_EN),
  es: buildTradeSoftwareQuiz(PERSONAL_TRAINER_QUIZ_CONFIG, PERSONAL_TRAINER_QUIZ_WORDING_ES),
}
