import type { SupportedLocale } from '~/core/constants/categorySlugs'
import type { DibodevFreeTemplatePageContent } from '~/core/types/DibodevFreeTemplatePage'
import { PLUMBER_QUOTE_TEMPLATE_CONTENT_EN } from '~/core/constants/freeTemplates/plumberQuote/pageContent.en'
import { PLUMBER_QUOTE_TEMPLATE_CONTENT_ES } from '~/core/constants/freeTemplates/plumberQuote/pageContent.es'
import { PLUMBER_QUOTE_TEMPLATE_CONTENT_FR } from '~/core/constants/freeTemplates/plumberQuote/pageContent.fr'

/** Content of the plumber quote and intervention slip template page in each language (shared values in `plumberQuote/pageShared.ts`). */
export const PLUMBER_QUOTE_TEMPLATE_PAGES: Record<SupportedLocale, DibodevFreeTemplatePageContent> = {
  fr: PLUMBER_QUOTE_TEMPLATE_CONTENT_FR,
  en: PLUMBER_QUOTE_TEMPLATE_CONTENT_EN,
  es: PLUMBER_QUOTE_TEMPLATE_CONTENT_ES,
}
