import type { SupportedLocale } from '~/core/constants/categorySlugs'
import type { DibodevFreeTemplatePageContent } from '~/core/types/DibodevFreeTemplatePage'
import { MEETING_AGENDA_TEMPLATE_CONTENT_EN } from '~/core/constants/freeTemplates/meetingAgenda/pageContent.en'
import { MEETING_AGENDA_TEMPLATE_CONTENT_ES } from '~/core/constants/freeTemplates/meetingAgenda/pageContent.es'
import { MEETING_AGENDA_TEMPLATE_CONTENT_FR } from '~/core/constants/freeTemplates/meetingAgenda/pageContent.fr'

/** Content of the timed meeting agenda and meeting notice template page in each language (shared values in `meetingAgenda/pageShared.ts`). */
export const MEETING_AGENDA_TEMPLATE_PAGES: Record<SupportedLocale, DibodevFreeTemplatePageContent> = {
  fr: MEETING_AGENDA_TEMPLATE_CONTENT_FR,
  en: MEETING_AGENDA_TEMPLATE_CONTENT_EN,
  es: MEETING_AGENDA_TEMPLATE_CONTENT_ES,
}
