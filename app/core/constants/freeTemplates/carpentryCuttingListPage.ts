import type { SupportedLocale } from '~/core/constants/categorySlugs'
import type { DibodevFreeTemplatePageContent } from '~/core/types/DibodevFreeTemplatePage'
import { CARPENTRY_CUTTING_LIST_TEMPLATE_CONTENT_EN } from '~/core/constants/freeTemplates/carpentryCuttingList/pageContent.en'
import { CARPENTRY_CUTTING_LIST_TEMPLATE_CONTENT_ES } from '~/core/constants/freeTemplates/carpentryCuttingList/pageContent.es'
import { CARPENTRY_CUTTING_LIST_TEMPLATE_CONTENT_FR } from '~/core/constants/freeTemplates/carpentryCuttingList/pageContent.fr'

/** Content of the joinery cutting list and measured quote template page in each language (shared values in `carpentryCuttingList/pageShared.ts`). */
export const CARPENTRY_CUTTING_LIST_TEMPLATE_PAGES: Record<SupportedLocale, DibodevFreeTemplatePageContent> = {
  fr: CARPENTRY_CUTTING_LIST_TEMPLATE_CONTENT_FR,
  en: CARPENTRY_CUTTING_LIST_TEMPLATE_CONTENT_EN,
  es: CARPENTRY_CUTTING_LIST_TEMPLATE_CONTENT_ES,
}
