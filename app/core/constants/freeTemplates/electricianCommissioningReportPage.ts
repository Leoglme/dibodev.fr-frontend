import type { SupportedLocale } from '~/core/constants/categorySlugs'
import type { DibodevFreeTemplatePageContent } from '~/core/types/DibodevFreeTemplatePage'
import { ELECTRICIAN_COMMISSIONING_REPORT_TEMPLATE_CONTENT_EN } from '~/core/constants/freeTemplates/electricianCommissioningReport/pageContent.en'
import { ELECTRICIAN_COMMISSIONING_REPORT_TEMPLATE_CONTENT_ES } from '~/core/constants/freeTemplates/electricianCommissioningReport/pageContent.es'
import { ELECTRICIAN_COMMISSIONING_REPORT_TEMPLATE_CONTENT_FR } from '~/core/constants/freeTemplates/electricianCommissioningReport/pageContent.fr'

/** Content of the electrician quote and commissioning report template page in each language (shared values in `electricianCommissioningReport/pageShared.ts`). */
export const ELECTRICIAN_COMMISSIONING_REPORT_TEMPLATE_PAGES: Record<SupportedLocale, DibodevFreeTemplatePageContent> =
  {
    fr: ELECTRICIAN_COMMISSIONING_REPORT_TEMPLATE_CONTENT_FR,
    en: ELECTRICIAN_COMMISSIONING_REPORT_TEMPLATE_CONTENT_EN,
    es: ELECTRICIAN_COMMISSIONING_REPORT_TEMPLATE_CONTENT_ES,
  }
