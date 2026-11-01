import type { SupportedLocale } from '~/core/constants/categorySlugs'
import type { DibodevFreeTemplatePageContent } from '~/core/types/DibodevFreeTemplatePage'
import { INVENTORY_SHEET_TEMPLATE_CONTENT_EN } from '~/core/constants/freeTemplates/inventorySheet/pageContent.en'
import { INVENTORY_SHEET_TEMPLATE_CONTENT_ES } from '~/core/constants/freeTemplates/inventorySheet/pageContent.es'
import { INVENTORY_SHEET_TEMPLATE_CONTENT_FR } from '~/core/constants/freeTemplates/inventorySheet/pageContent.fr'

/** Content of the inventory sheet and goods receipt template page in each language (shared values in `inventorySheet/pageShared.ts`). */
export const INVENTORY_SHEET_TEMPLATE_PAGES: Record<SupportedLocale, DibodevFreeTemplatePageContent> = {
  fr: INVENTORY_SHEET_TEMPLATE_CONTENT_FR,
  en: INVENTORY_SHEET_TEMPLATE_CONTENT_EN,
  es: INVENTORY_SHEET_TEMPLATE_CONTENT_ES,
}
