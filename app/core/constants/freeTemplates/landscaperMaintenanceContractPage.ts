import type { SupportedLocale } from '~/core/constants/categorySlugs'
import type { DibodevFreeTemplatePageContent } from '~/core/types/DibodevFreeTemplatePage'
import { LANDSCAPER_MAINTENANCE_CONTRACT_TEMPLATE_CONTENT_EN } from '~/core/constants/freeTemplates/landscaperMaintenanceContract/pageContent.en'
import { LANDSCAPER_MAINTENANCE_CONTRACT_TEMPLATE_CONTENT_ES } from '~/core/constants/freeTemplates/landscaperMaintenanceContract/pageContent.es'
import { LANDSCAPER_MAINTENANCE_CONTRACT_TEMPLATE_CONTENT_FR } from '~/core/constants/freeTemplates/landscaperMaintenanceContract/pageContent.fr'

/** Content of the landscaper quote and maintenance contract template page in each language (shared values in `landscaperMaintenanceContract/pageShared.ts`). */
export const LANDSCAPER_MAINTENANCE_CONTRACT_TEMPLATE_PAGES: Record<SupportedLocale, DibodevFreeTemplatePageContent> = {
  fr: LANDSCAPER_MAINTENANCE_CONTRACT_TEMPLATE_CONTENT_FR,
  en: LANDSCAPER_MAINTENANCE_CONTRACT_TEMPLATE_CONTENT_EN,
  es: LANDSCAPER_MAINTENANCE_CONTRACT_TEMPLATE_CONTENT_ES,
}
