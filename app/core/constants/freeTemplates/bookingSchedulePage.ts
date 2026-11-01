import type { SupportedLocale } from '~/core/constants/categorySlugs'
import type { DibodevFreeTemplatePageContent } from '~/core/types/DibodevFreeTemplatePage'
import { BOOKING_SCHEDULE_TEMPLATE_CONTENT_EN } from '~/core/constants/freeTemplates/bookingSchedule/pageContent.en'
import { BOOKING_SCHEDULE_TEMPLATE_CONTENT_ES } from '~/core/constants/freeTemplates/bookingSchedule/pageContent.es'
import { BOOKING_SCHEDULE_TEMPLATE_CONTENT_FR } from '~/core/constants/freeTemplates/bookingSchedule/pageContent.fr'

/** Content of the leisure booking schedule and registration form template page in each language (shared values in `bookingSchedule/pageShared.ts`). */
export const BOOKING_SCHEDULE_TEMPLATE_PAGES: Record<SupportedLocale, DibodevFreeTemplatePageContent> = {
  fr: BOOKING_SCHEDULE_TEMPLATE_CONTENT_FR,
  en: BOOKING_SCHEDULE_TEMPLATE_CONTENT_EN,
  es: BOOKING_SCHEDULE_TEMPLATE_CONTENT_ES,
}
