import type { SupportedLocale } from '~/core/constants/categorySlugs'
import type { DibodevSoftwareToolPageContent } from '~/core/types/DibodevSoftwareToolPage'
import { CARPENTRY_PAGE_CONTENT_EN } from '~/core/constants/tools/carpentrySoftware/pageContent.en'
import { CARPENTRY_PAGE_CONTENT_ES } from '~/core/constants/tools/carpentrySoftware/pageContent.es'
import { CARPENTRY_PAGE_CONTENT_FR } from '~/core/constants/tools/carpentrySoftware/pageContent.fr'

/** Content of the carpentry and joinery software page in each language (shared values in `carpentrySoftware/pageShared.ts`). */
export const CARPENTRY_SOFTWARE_PAGES: Record<SupportedLocale, DibodevSoftwareToolPageContent> = {
  fr: CARPENTRY_PAGE_CONTENT_FR,
  en: CARPENTRY_PAGE_CONTENT_EN,
  es: CARPENTRY_PAGE_CONTENT_ES,
}
