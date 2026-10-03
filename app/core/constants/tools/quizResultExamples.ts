import type { DibodevQuizResultExampleConfig } from '~/core/types/DibodevQuizResultExample'
import { AUTO_REPAIR_SHOP_SOFTWARE_QUIZZES } from '~/core/constants/tools/autoRepairShopSoftwareQuiz'
import { BIKE_SHOP_SOFTWARE_QUIZZES } from '~/core/constants/tools/bikeShopSoftwareQuiz'
import { DRIVING_SCHOOL_SOFTWARE_QUIZZES } from '~/core/constants/tools/drivingSchoolSoftwareQuiz'

/** Result shown in the header of the tools page: a garage run by one person, for whom market software is enough. */
export const TOOLS_HUB_HEADER_RESULT_EXAMPLE: DibodevQuizResultExampleConfig = {
  tradeLabel: { fr: 'Garage', en: 'Auto repair shop', es: 'Taller mecánico' },
  quizzes: AUTO_REPAIR_SHOP_SOFTWARE_QUIZZES,
  answers: { team: ['1'], sites: ['1'], scope: ['mechanics'], pains: [], current: ['none'], priority: ['budget'] },
}

/** Two opposite answers of the tests: market software for a one-person bike shop, a custom tool for a driving school with several agencies. */
export const TOOLS_HUB_RESULT_EXAMPLES: DibodevQuizResultExampleConfig[] = [
  {
    tradeLabel: { fr: 'Atelier vélo', en: 'Bike shop', es: 'Taller de bicicletas' },
    quizzes: BIKE_SHOP_SOFTWARE_QUIZZES,
    answers: { team: ['1'], sites: ['1'], scope: ['repair'], pains: [], current: ['none'], priority: ['budget'] },
  },
  {
    tradeLabel: { fr: 'Auto-école', en: 'Driving school', es: 'Autoescuela' },
    quizzes: DRIVING_SCHOOL_SOFTWARE_QUIZZES,
    answers: {
      instructors: ['2-4'],
      agencies: ['2-3'],
      booking: ['phone', 'messages'],
      pains: ['planning', 'noshow'],
      current: ['unfit'],
      priority: ['simple'],
    },
  },
]
