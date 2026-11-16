import type { SupportedLocale } from '~/core/constants/categorySlugs'
import type { DibodevAiReadabilityCheckPageContent } from '~/core/types/DibodevAiReadabilityCheckPage'
import { AI_READABILITY_CHECK_PAGE_EN } from '~/core/constants/aiReadabilityCheck/pageContent.en'
import { AI_READABILITY_CHECK_PAGE_ES } from '~/core/constants/aiReadabilityCheck/pageContent.es'
import { AI_READABILITY_CHECK_PAGE_FR } from '~/core/constants/aiReadabilityCheck/pageContent.fr'

/** Content of the AI readability check page in each language (shared values in `aiReadabilityCheck/pageShared.ts`). */
export const AI_READABILITY_CHECK_PAGES: Record<SupportedLocale, DibodevAiReadabilityCheckPageContent> = {
  fr: AI_READABILITY_CHECK_PAGE_FR,
  en: AI_READABILITY_CHECK_PAGE_EN,
  es: AI_READABILITY_CHECK_PAGE_ES,
}
