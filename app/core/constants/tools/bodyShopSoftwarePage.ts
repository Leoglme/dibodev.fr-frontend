import type { SupportedLocale } from '~/core/constants/categorySlugs'
import type { DibodevSoftwareToolPageContent } from '~/core/types/DibodevSoftwareToolPage'
import { BODY_SHOP_PAGE_CONTENT_EN } from '~/core/constants/tools/bodyShopSoftware/pageContent.en'
import { BODY_SHOP_PAGE_CONTENT_ES } from '~/core/constants/tools/bodyShopSoftware/pageContent.es'
import { BODY_SHOP_PAGE_CONTENT_FR } from '~/core/constants/tools/bodyShopSoftware/pageContent.fr'

/** Content of the body shop software page in each language (shared values in `bodyShopSoftware/pageShared.ts`). */
export const BODY_SHOP_SOFTWARE_PAGES: Record<SupportedLocale, DibodevSoftwareToolPageContent> = {
  fr: BODY_SHOP_PAGE_CONTENT_FR,
  en: BODY_SHOP_PAGE_CONTENT_EN,
  es: BODY_SHOP_PAGE_CONTENT_ES,
}
