import type { SupportedLocale } from '~/core/constants/categorySlugs'
import type { DibodevFreeTemplatePageContent } from '~/core/types/DibodevFreeTemplatePage'
import { MEETING_MINUTES_TEMPLATE_CONTENT_EN } from '~/core/constants/freeTemplates/meetingMinutes/pageContent.en'
import { MEETING_MINUTES_TEMPLATE_CONTENT_ES } from '~/core/constants/freeTemplates/meetingMinutes/pageContent.es'
import { MEETING_MINUTES_TEMPLATE_CONTENT_FR } from '~/core/constants/freeTemplates/meetingMinutes/pageContent.fr'

/** Content of the meeting minutes, decision log and action plan template page in each language (shared values in `meetingMinutes/pageShared.ts`). */
export const MEETING_MINUTES_TEMPLATE_PAGES: Record<SupportedLocale, DibodevFreeTemplatePageContent> = {
  fr: MEETING_MINUTES_TEMPLATE_CONTENT_FR,
  en: MEETING_MINUTES_TEMPLATE_CONTENT_EN,
  es: MEETING_MINUTES_TEMPLATE_CONTENT_ES,
}
