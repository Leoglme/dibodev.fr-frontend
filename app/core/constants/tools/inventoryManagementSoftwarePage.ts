import type { SupportedLocale } from '~/core/constants/categorySlugs'
import type { DibodevSoftwareToolPageContent } from '~/core/types/DibodevSoftwareToolPage'
import { INVENTORY_MANAGEMENT_PAGE_CONTENT_EN } from '~/core/constants/tools/inventoryManagementSoftware/pageContent.en'
import { INVENTORY_MANAGEMENT_PAGE_CONTENT_ES } from '~/core/constants/tools/inventoryManagementSoftware/pageContent.es'
import { INVENTORY_MANAGEMENT_PAGE_CONTENT_FR } from '~/core/constants/tools/inventoryManagementSoftware/pageContent.fr'

/** Content of the inventory management software page in each language (shared values in `inventoryManagementSoftware/pageShared.ts`). */
export const INVENTORY_MANAGEMENT_SOFTWARE_PAGES: Record<SupportedLocale, DibodevSoftwareToolPageContent> = {
  fr: INVENTORY_MANAGEMENT_PAGE_CONTENT_FR,
  en: INVENTORY_MANAGEMENT_PAGE_CONTENT_EN,
  es: INVENTORY_MANAGEMENT_PAGE_CONTENT_ES,
}
