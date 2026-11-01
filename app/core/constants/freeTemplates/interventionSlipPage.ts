import type { SupportedLocale } from '~/core/constants/categorySlugs'
import type { DibodevFreeTemplatePageContent } from '~/core/types/DibodevFreeTemplatePage'
import { INTERVENTION_SLIP_TEMPLATE_CONTENT_EN } from '~/core/constants/freeTemplates/interventionSlip/pageContent.en'
import { INTERVENTION_SLIP_TEMPLATE_CONTENT_ES } from '~/core/constants/freeTemplates/interventionSlip/pageContent.es'
import { INTERVENTION_SLIP_TEMPLATE_CONTENT_FR } from '~/core/constants/freeTemplates/interventionSlip/pageContent.fr'

/** Content of the intervention slip and round sheet template page in each language (shared values in `interventionSlip/pageShared.ts`). */
export const INTERVENTION_SLIP_TEMPLATE_PAGES: Record<SupportedLocale, DibodevFreeTemplatePageContent> = {
  fr: INTERVENTION_SLIP_TEMPLATE_CONTENT_FR,
  en: INTERVENTION_SLIP_TEMPLATE_CONTENT_EN,
  es: INTERVENTION_SLIP_TEMPLATE_CONTENT_ES,
}
