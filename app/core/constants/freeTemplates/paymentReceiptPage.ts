import type { SupportedLocale } from '~/core/constants/categorySlugs'
import type { DibodevFreeTemplatePageContent } from '~/core/types/DibodevFreeTemplatePage'
import { PAYMENT_RECEIPT_TEMPLATE_CONTENT_EN } from '~/core/constants/freeTemplates/paymentReceipt/pageContent.en'
import { PAYMENT_RECEIPT_TEMPLATE_CONTENT_ES } from '~/core/constants/freeTemplates/paymentReceipt/pageContent.es'
import { PAYMENT_RECEIPT_TEMPLATE_CONTENT_FR } from '~/core/constants/freeTemplates/paymentReceipt/pageContent.fr'

/** Content of the payment receipt book and deposit receipt template page in each language (shared values in `paymentReceipt/pageShared.ts`). */
export const PAYMENT_RECEIPT_TEMPLATE_PAGES: Record<SupportedLocale, DibodevFreeTemplatePageContent> = {
  fr: PAYMENT_RECEIPT_TEMPLATE_CONTENT_FR,
  en: PAYMENT_RECEIPT_TEMPLATE_CONTENT_EN,
  es: PAYMENT_RECEIPT_TEMPLATE_CONTENT_ES,
}
