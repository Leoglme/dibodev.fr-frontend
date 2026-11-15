import type { SupportedLocale } from '~/core/constants/categorySlugs'
import type { DibodevFreeTemplatePageContent } from '~/core/types/DibodevFreeTemplatePage'
import { DELIVERY_NOTE_TEMPLATE_CONTENT_EN } from '~/core/constants/freeTemplates/deliveryNote/pageContent.en'
import { DELIVERY_NOTE_TEMPLATE_CONTENT_ES } from '~/core/constants/freeTemplates/deliveryNote/pageContent.es'
import { DELIVERY_NOTE_TEMPLATE_CONTENT_FR } from '~/core/constants/freeTemplates/deliveryNote/pageContent.fr'

/** Content of the delivery note and delivery reservations template page in each language (shared values in `deliveryNote/pageShared.ts`). */
export const DELIVERY_NOTE_TEMPLATE_PAGES: Record<SupportedLocale, DibodevFreeTemplatePageContent> = {
  fr: DELIVERY_NOTE_TEMPLATE_CONTENT_FR,
  en: DELIVERY_NOTE_TEMPLATE_CONTENT_EN,
  es: DELIVERY_NOTE_TEMPLATE_CONTENT_ES,
}
