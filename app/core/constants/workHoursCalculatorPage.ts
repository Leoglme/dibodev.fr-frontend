import type { SupportedLocale } from '~/core/constants/categorySlugs'
import type { DibodevWorkHoursCalculatorPageContent } from '~/core/types/DibodevWorkHoursCalculatorPage'
import { WORK_HOURS_CALCULATOR_PAGE_EN } from '~/core/constants/workHoursCalculator/pageContent.en'
import { WORK_HOURS_CALCULATOR_PAGE_ES } from '~/core/constants/workHoursCalculator/pageContent.es'
import { WORK_HOURS_CALCULATOR_PAGE_FR } from '~/core/constants/workHoursCalculator/pageContent.fr'

export const WORK_HOURS_CALCULATOR_PAGES: Record<SupportedLocale, DibodevWorkHoursCalculatorPageContent> = {
  fr: WORK_HOURS_CALCULATOR_PAGE_FR,
  en: WORK_HOURS_CALCULATOR_PAGE_EN,
  es: WORK_HOURS_CALCULATOR_PAGE_ES,
}
