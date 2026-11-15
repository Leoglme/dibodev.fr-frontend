import type { SupportedLocale } from '~/core/constants/categorySlugs'
import type { DibodevFreeTemplatePageContent } from '~/core/types/DibodevFreeTemplatePage'
import { PURCHASE_ORDER_TEMPLATE_CONTENT_EN } from '~/core/constants/freeTemplates/purchaseOrder/pageContent.en'
import { PURCHASE_ORDER_TEMPLATE_CONTENT_ES } from '~/core/constants/freeTemplates/purchaseOrder/pageContent.es'
import { PURCHASE_ORDER_TEMPLATE_CONTENT_FR } from '~/core/constants/freeTemplates/purchaseOrder/pageContent.fr'

/** Content of the purchase order and order follow-up template page in each language (shared values in `purchaseOrder/pageShared.ts`). */
export const PURCHASE_ORDER_TEMPLATE_PAGES: Record<SupportedLocale, DibodevFreeTemplatePageContent> = {
  fr: PURCHASE_ORDER_TEMPLATE_CONTENT_FR,
  en: PURCHASE_ORDER_TEMPLATE_CONTENT_EN,
  es: PURCHASE_ORDER_TEMPLATE_CONTENT_ES,
}
