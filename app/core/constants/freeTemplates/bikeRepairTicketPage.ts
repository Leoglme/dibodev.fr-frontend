import type { SupportedLocale } from '~/core/constants/categorySlugs'
import type { DibodevFreeTemplatePageContent } from '~/core/types/DibodevFreeTemplatePage'
import { BIKE_REPAIR_TICKET_TEMPLATE_CONTENT_EN } from '~/core/constants/freeTemplates/bikeRepairTicket/pageContent.en'
import { BIKE_REPAIR_TICKET_TEMPLATE_CONTENT_ES } from '~/core/constants/freeTemplates/bikeRepairTicket/pageContent.es'
import { BIKE_REPAIR_TICKET_TEMPLATE_CONTENT_FR } from '~/core/constants/freeTemplates/bikeRepairTicket/pageContent.fr'

/** Content of the bike drop-off and repair ticket template page in each language (shared values in `bikeRepairTicket/pageShared.ts`). */
export const BIKE_REPAIR_TICKET_TEMPLATE_PAGES: Record<SupportedLocale, DibodevFreeTemplatePageContent> = {
  fr: BIKE_REPAIR_TICKET_TEMPLATE_CONTENT_FR,
  en: BIKE_REPAIR_TICKET_TEMPLATE_CONTENT_EN,
  es: BIKE_REPAIR_TICKET_TEMPLATE_CONTENT_ES,
}
