import type { SupportedLocale } from '~/core/constants/categorySlugs'
import type { DibodevFreeTemplatePageContent } from '~/core/types/DibodevFreeTemplatePage'
import { GARAGE_REPAIR_ORDER_TEMPLATE_CONTENT_EN } from '~/core/constants/freeTemplates/garageRepairOrder/pageContent.en'
import { GARAGE_REPAIR_ORDER_TEMPLATE_CONTENT_ES } from '~/core/constants/freeTemplates/garageRepairOrder/pageContent.es'
import { GARAGE_REPAIR_ORDER_TEMPLATE_CONTENT_FR } from '~/core/constants/freeTemplates/garageRepairOrder/pageContent.fr'

/** Content of the garage repair order and quote template page in each language (shared values in `garageRepairOrder/pageShared.ts`). */
export const GARAGE_REPAIR_ORDER_TEMPLATE_PAGES: Record<SupportedLocale, DibodevFreeTemplatePageContent> = {
  fr: GARAGE_REPAIR_ORDER_TEMPLATE_CONTENT_FR,
  en: GARAGE_REPAIR_ORDER_TEMPLATE_CONTENT_EN,
  es: GARAGE_REPAIR_ORDER_TEMPLATE_CONTENT_ES,
}
