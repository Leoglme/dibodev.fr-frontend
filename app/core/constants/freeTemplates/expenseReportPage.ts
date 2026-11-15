import type { SupportedLocale } from '~/core/constants/categorySlugs'
import type { DibodevFreeTemplatePageContent } from '~/core/types/DibodevFreeTemplatePage'
import { EXPENSE_REPORT_TEMPLATE_CONTENT_EN } from '~/core/constants/freeTemplates/expenseReport/pageContent.en'
import { EXPENSE_REPORT_TEMPLATE_CONTENT_ES } from '~/core/constants/freeTemplates/expenseReport/pageContent.es'
import { EXPENSE_REPORT_TEMPLATE_CONTENT_FR } from '~/core/constants/freeTemplates/expenseReport/pageContent.fr'

/** Content of the expense report and mileage log template page in each language (shared values in `expenseReport/pageShared.ts`). */
export const EXPENSE_REPORT_TEMPLATE_PAGES: Record<SupportedLocale, DibodevFreeTemplatePageContent> = {
  fr: EXPENSE_REPORT_TEMPLATE_CONTENT_FR,
  en: EXPENSE_REPORT_TEMPLATE_CONTENT_EN,
  es: EXPENSE_REPORT_TEMPLATE_CONTENT_ES,
}
