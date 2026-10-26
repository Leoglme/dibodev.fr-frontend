import type { SupportedLocale } from '~/core/constants/categorySlugs'
import type { DibodevSoftwareToolPageContent } from '~/core/types/DibodevSoftwareToolPage'
import { LANDSCAPING_PAGE_CONTENT_EN } from '~/core/constants/tools/landscapingSoftware/pageContent.en'
import { LANDSCAPING_PAGE_CONTENT_ES } from '~/core/constants/tools/landscapingSoftware/pageContent.es'
import { LANDSCAPING_PAGE_CONTENT_FR } from '~/core/constants/tools/landscapingSoftware/pageContent.fr'

/** Content of the landscaping software page in each language (shared values in `landscapingSoftware/pageShared.ts`). */
export const LANDSCAPING_SOFTWARE_PAGES: Record<SupportedLocale, DibodevSoftwareToolPageContent> = {
  fr: LANDSCAPING_PAGE_CONTENT_FR,
  en: LANDSCAPING_PAGE_CONTENT_EN,
  es: LANDSCAPING_PAGE_CONTENT_ES,
}
