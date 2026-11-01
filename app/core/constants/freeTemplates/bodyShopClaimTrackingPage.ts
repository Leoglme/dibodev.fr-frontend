import type { SupportedLocale } from '~/core/constants/categorySlugs'
import type { DibodevFreeTemplatePageContent } from '~/core/types/DibodevFreeTemplatePage'
import { BODY_SHOP_CLAIM_TRACKING_TEMPLATE_CONTENT_EN } from '~/core/constants/freeTemplates/bodyShopClaimTracking/pageContent.en'
import { BODY_SHOP_CLAIM_TRACKING_TEMPLATE_CONTENT_ES } from '~/core/constants/freeTemplates/bodyShopClaimTracking/pageContent.es'
import { BODY_SHOP_CLAIM_TRACKING_TEMPLATE_CONTENT_FR } from '~/core/constants/freeTemplates/bodyShopClaimTracking/pageContent.fr'

/** Content of the body shop quote and claim tracking sheet template page in each language (shared values in `bodyShopClaimTracking/pageShared.ts`). */
export const BODY_SHOP_CLAIM_TRACKING_TEMPLATE_PAGES: Record<SupportedLocale, DibodevFreeTemplatePageContent> = {
  fr: BODY_SHOP_CLAIM_TRACKING_TEMPLATE_CONTENT_FR,
  en: BODY_SHOP_CLAIM_TRACKING_TEMPLATE_CONTENT_EN,
  es: BODY_SHOP_CLAIM_TRACKING_TEMPLATE_CONTENT_ES,
}
