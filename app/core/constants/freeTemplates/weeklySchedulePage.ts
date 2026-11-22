import type { SupportedLocale } from '~/core/constants/categorySlugs'
import type { DibodevFreeTemplatePageContent } from '~/core/types/DibodevFreeTemplatePage'
import { WEEKLY_SCHEDULE_TEMPLATE_CONTENT_EN } from '~/core/constants/freeTemplates/weeklySchedule/pageContent.en'
import { WEEKLY_SCHEDULE_TEMPLATE_CONTENT_ES } from '~/core/constants/freeTemplates/weeklySchedule/pageContent.es'
import { WEEKLY_SCHEDULE_TEMPLATE_CONTENT_FR } from '~/core/constants/freeTemplates/weeklySchedule/pageContent.fr'

/** Content of the weekly team schedule and weekly planner template page in each language (shared values in `weeklySchedule/pageShared.ts`). */
export const WEEKLY_SCHEDULE_TEMPLATE_PAGES: Record<SupportedLocale, DibodevFreeTemplatePageContent> = {
  fr: WEEKLY_SCHEDULE_TEMPLATE_CONTENT_FR,
  en: WEEKLY_SCHEDULE_TEMPLATE_CONTENT_EN,
  es: WEEKLY_SCHEDULE_TEMPLATE_CONTENT_ES,
}
