import type { SupportedLocale } from '~/core/constants/categorySlugs'
import type { DibodevFreeTemplatePageContent } from '~/core/types/DibodevFreeTemplatePage'
import { ATTENDANCE_LIST_TEMPLATE_CONTENT_EN } from '~/core/constants/freeTemplates/attendanceList/pageContent.en'
import { ATTENDANCE_LIST_TEMPLATE_CONTENT_ES } from '~/core/constants/freeTemplates/attendanceList/pageContent.es'
import { ATTENDANCE_LIST_TEMPLATE_CONTENT_FR } from '~/core/constants/freeTemplates/attendanceList/pageContent.fr'

/** Content of the attendance sheet and monthly attendance list template page in each language (shared values in `attendanceList/pageShared.ts`). */
export const ATTENDANCE_LIST_TEMPLATE_PAGES: Record<SupportedLocale, DibodevFreeTemplatePageContent> = {
  fr: ATTENDANCE_LIST_TEMPLATE_CONTENT_FR,
  en: ATTENDANCE_LIST_TEMPLATE_CONTENT_EN,
  es: ATTENDANCE_LIST_TEMPLATE_CONTENT_ES,
}
