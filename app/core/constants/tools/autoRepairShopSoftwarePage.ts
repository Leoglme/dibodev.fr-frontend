import type { SupportedLocale } from '~/core/constants/categorySlugs'
import type { DibodevSoftwareToolPageContent } from '~/core/types/DibodevSoftwareToolPage'
import { AUTO_REPAIR_PAGE_CONTENT_EN } from '~/core/constants/tools/autoRepairShopSoftware/pageContent.en'
import { AUTO_REPAIR_PAGE_CONTENT_ES } from '~/core/constants/tools/autoRepairShopSoftware/pageContent.es'
import { AUTO_REPAIR_PAGE_CONTENT_FR } from '~/core/constants/tools/autoRepairShopSoftware/pageContent.fr'

/** Content of the auto repair shop software page in each language (shared values in `autoRepairShopSoftware/pageShared.ts`). */
export const AUTO_REPAIR_SHOP_SOFTWARE_PAGES: Record<SupportedLocale, DibodevSoftwareToolPageContent> = {
  fr: AUTO_REPAIR_PAGE_CONTENT_FR,
  en: AUTO_REPAIR_PAGE_CONTENT_EN,
  es: AUTO_REPAIR_PAGE_CONTENT_ES,
}
