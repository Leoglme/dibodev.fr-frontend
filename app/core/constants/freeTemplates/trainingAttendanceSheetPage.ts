import type { SupportedLocale } from '~/core/constants/categorySlugs'
import type { DibodevFreeTemplatePageContent } from '~/core/types/DibodevFreeTemplatePage'
import { TRAINING_ATTENDANCE_SHEET_TEMPLATE_CONTENT_EN } from '~/core/constants/freeTemplates/trainingAttendanceSheet/pageContent.en'
import { TRAINING_ATTENDANCE_SHEET_TEMPLATE_CONTENT_ES } from '~/core/constants/freeTemplates/trainingAttendanceSheet/pageContent.es'
import { TRAINING_ATTENDANCE_SHEET_TEMPLATE_CONTENT_FR } from '~/core/constants/freeTemplates/trainingAttendanceSheet/pageContent.fr'

/** Content of the training attendance sheet and hour tracking template page in each language (shared values in `trainingAttendanceSheet/pageShared.ts`). */
export const TRAINING_ATTENDANCE_SHEET_TEMPLATE_PAGES: Record<SupportedLocale, DibodevFreeTemplatePageContent> = {
  fr: TRAINING_ATTENDANCE_SHEET_TEMPLATE_CONTENT_FR,
  en: TRAINING_ATTENDANCE_SHEET_TEMPLATE_CONTENT_EN,
  es: TRAINING_ATTENDANCE_SHEET_TEMPLATE_CONTENT_ES,
}
