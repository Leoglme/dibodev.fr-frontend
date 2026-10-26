import type { SupportedLocale } from '~/core/constants/categorySlugs'
import type { DibodevSoftwareToolPageContent } from '~/core/types/DibodevSoftwareToolPage'
import { CLEANING_BUSINESS_PAGE_CONTENT_EN } from '~/core/constants/tools/cleaningBusinessSoftware/pageContent.en'
import { CLEANING_BUSINESS_PAGE_CONTENT_ES } from '~/core/constants/tools/cleaningBusinessSoftware/pageContent.es'
import { CLEANING_BUSINESS_PAGE_CONTENT_FR } from '~/core/constants/tools/cleaningBusinessSoftware/pageContent.fr'

/** Content of the cleaning business software page in each language (shared values in `cleaningBusinessSoftware/pageShared.ts`). */
export const CLEANING_BUSINESS_SOFTWARE_PAGES: Record<SupportedLocale, DibodevSoftwareToolPageContent> = {
  fr: CLEANING_BUSINESS_PAGE_CONTENT_FR,
  en: CLEANING_BUSINESS_PAGE_CONTENT_EN,
  es: CLEANING_BUSINESS_PAGE_CONTENT_ES,
}
