import type { SupportedLocale } from '~/core/constants/categorySlugs'
import type { DibodevVatCalculatorPageContent } from '~/core/types/DibodevVatCalculatorPage'
import { VAT_CALCULATOR_PAGE_EN } from '~/core/constants/vatCalculator/pageContent.en'
import { VAT_CALCULATOR_PAGE_ES } from '~/core/constants/vatCalculator/pageContent.es'
import { VAT_CALCULATOR_PAGE_FR } from '~/core/constants/vatCalculator/pageContent.fr'

export const VAT_CALCULATOR_PAGES: Record<SupportedLocale, DibodevVatCalculatorPageContent> = {
  fr: VAT_CALCULATOR_PAGE_FR,
  en: VAT_CALCULATOR_PAGE_EN,
  es: VAT_CALCULATOR_PAGE_ES,
}
