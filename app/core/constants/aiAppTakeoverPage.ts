import type { SupportedLocale } from '~/core/constants/categorySlugs'
import type { DibodevAiAppTakeoverPageContent } from '~/core/types/DibodevAiAppTakeoverPage'
import { AI_APP_TAKEOVER_PAGE_CONTENT_EN } from '~/core/constants/aiAppTakeover/pageContent.en'
import { AI_APP_TAKEOVER_PAGE_CONTENT_ES } from '~/core/constants/aiAppTakeover/pageContent.es'
import { AI_APP_TAKEOVER_PAGE_CONTENT_FR } from '~/core/constants/aiAppTakeover/pageContent.fr'

/** Content of the AI application takeover page in each language (shared values in `aiAppTakeover/pageShared.ts`). */
export const AI_APP_TAKEOVER_PAGES: Record<SupportedLocale, DibodevAiAppTakeoverPageContent> = {
  fr: AI_APP_TAKEOVER_PAGE_CONTENT_FR,
  en: AI_APP_TAKEOVER_PAGE_CONTENT_EN,
  es: AI_APP_TAKEOVER_PAGE_CONTENT_ES,
}
