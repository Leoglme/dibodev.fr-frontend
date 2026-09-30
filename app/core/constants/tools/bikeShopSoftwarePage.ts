import type { SupportedLocale } from '~/core/constants/categorySlugs'
import type { DibodevSoftwareToolPageContent } from '~/core/types/DibodevSoftwareToolPage'
import { BIKE_SHOP_PAGE_CONTENT_EN } from '~/core/constants/tools/bikeShopSoftware/pageContent.en'
import { BIKE_SHOP_PAGE_CONTENT_ES } from '~/core/constants/tools/bikeShopSoftware/pageContent.es'
import { BIKE_SHOP_PAGE_CONTENT_FR } from '~/core/constants/tools/bikeShopSoftware/pageContent.fr'

/** Content of the bike shop software page in each language (shared values in `bikeShopSoftware/pageShared.ts`). */
export const BIKE_SHOP_SOFTWARE_PAGES: Record<SupportedLocale, DibodevSoftwareToolPageContent> = {
  fr: BIKE_SHOP_PAGE_CONTENT_FR,
  en: BIKE_SHOP_PAGE_CONTENT_EN,
  es: BIKE_SHOP_PAGE_CONTENT_ES,
}
