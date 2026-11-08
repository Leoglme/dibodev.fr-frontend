import type { SupportedLocale } from '~/core/constants/categorySlugs'
import type { DibodevFreeTemplatePageContent } from '~/core/types/DibodevFreeTemplatePage'
import { WORKS_ACCEPTANCE_REPORT_TEMPLATE_CONTENT_EN } from '~/core/constants/freeTemplates/worksAcceptanceReport/pageContent.en'
import { WORKS_ACCEPTANCE_REPORT_TEMPLATE_CONTENT_ES } from '~/core/constants/freeTemplates/worksAcceptanceReport/pageContent.es'
import { WORKS_ACCEPTANCE_REPORT_TEMPLATE_CONTENT_FR } from '~/core/constants/freeTemplates/worksAcceptanceReport/pageContent.fr'

/** Content of the works acceptance report and reservation clearance template page in each language (shared values in `worksAcceptanceReport/pageShared.ts`). */
export const WORKS_ACCEPTANCE_REPORT_TEMPLATE_PAGES: Record<SupportedLocale, DibodevFreeTemplatePageContent> = {
  fr: WORKS_ACCEPTANCE_REPORT_TEMPLATE_CONTENT_FR,
  en: WORKS_ACCEPTANCE_REPORT_TEMPLATE_CONTENT_EN,
  es: WORKS_ACCEPTANCE_REPORT_TEMPLATE_CONTENT_ES,
}
