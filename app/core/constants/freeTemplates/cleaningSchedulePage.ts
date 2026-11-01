import type { SupportedLocale } from '~/core/constants/categorySlugs'
import type { DibodevFreeTemplatePageContent } from '~/core/types/DibodevFreeTemplatePage'
import { CLEANING_SCHEDULE_TEMPLATE_CONTENT_EN } from '~/core/constants/freeTemplates/cleaningSchedule/pageContent.en'
import { CLEANING_SCHEDULE_TEMPLATE_CONTENT_ES } from '~/core/constants/freeTemplates/cleaningSchedule/pageContent.es'
import { CLEANING_SCHEDULE_TEMPLATE_CONTENT_FR } from '~/core/constants/freeTemplates/cleaningSchedule/pageContent.fr'

/** Content of the cleaning schedule and quality inspection sheet template page in each language (shared values in `cleaningSchedule/pageShared.ts`). */
export const CLEANING_SCHEDULE_TEMPLATE_PAGES: Record<SupportedLocale, DibodevFreeTemplatePageContent> = {
  fr: CLEANING_SCHEDULE_TEMPLATE_CONTENT_FR,
  en: CLEANING_SCHEDULE_TEMPLATE_CONTENT_EN,
  es: CLEANING_SCHEDULE_TEMPLATE_CONTENT_ES,
}
