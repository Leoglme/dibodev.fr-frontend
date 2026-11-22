import type { SupportedLocale } from '~/core/constants/categorySlugs'
import type { DibodevFreeTemplatePageContent } from '~/core/types/DibodevFreeTemplatePage'
import { STAFF_REGISTER_TEMPLATE_CONTENT_EN } from '~/core/constants/freeTemplates/staffRegister/pageContent.en'
import { STAFF_REGISTER_TEMPLATE_CONTENT_ES } from '~/core/constants/freeTemplates/staffRegister/pageContent.es'
import { STAFF_REGISTER_TEMPLATE_CONTENT_FR } from '~/core/constants/freeTemplates/staffRegister/pageContent.fr'

/** Content of the single staff register template page in each language (shared values in `staffRegister/pageShared.ts`). */
export const STAFF_REGISTER_TEMPLATE_PAGES: Record<SupportedLocale, DibodevFreeTemplatePageContent> = {
  fr: STAFF_REGISTER_TEMPLATE_CONTENT_FR,
  en: STAFF_REGISTER_TEMPLATE_CONTENT_EN,
  es: STAFF_REGISTER_TEMPLATE_CONTENT_ES,
}
