import type { SupportedLocale } from '~/core/constants/categorySlugs'
import type { DibodevFreeTemplatePageContent } from '~/core/types/DibodevFreeTemplatePage'
import { TIME_CLOCK_SHEET_TEMPLATE_CONTENT_EN } from '~/core/constants/freeTemplates/timeClockSheet/pageContent.en'
import { TIME_CLOCK_SHEET_TEMPLATE_CONTENT_ES } from '~/core/constants/freeTemplates/timeClockSheet/pageContent.es'
import { TIME_CLOCK_SHEET_TEMPLATE_CONTENT_FR } from '~/core/constants/freeTemplates/timeClockSheet/pageContent.fr'

/** Content of the weekly time clock sheet and monthly summary template page in each language (shared values in `timeClockSheet/pageShared.ts`). */
export const TIME_CLOCK_SHEET_TEMPLATE_PAGES: Record<SupportedLocale, DibodevFreeTemplatePageContent> = {
  fr: TIME_CLOCK_SHEET_TEMPLATE_CONTENT_FR,
  en: TIME_CLOCK_SHEET_TEMPLATE_CONTENT_EN,
  es: TIME_CLOCK_SHEET_TEMPLATE_CONTENT_ES,
}
