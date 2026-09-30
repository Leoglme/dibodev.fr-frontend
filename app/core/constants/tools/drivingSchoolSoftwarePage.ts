import type { SupportedLocale } from '~/core/constants/categorySlugs'
import type { DibodevSoftwareToolPageContent } from '~/core/types/DibodevSoftwareToolPage'
import { DRIVING_SCHOOL_PAGE_CONTENT_EN } from '~/core/constants/tools/drivingSchoolSoftware/pageContent.en'
import { DRIVING_SCHOOL_PAGE_CONTENT_ES } from '~/core/constants/tools/drivingSchoolSoftware/pageContent.es'
import { DRIVING_SCHOOL_PAGE_CONTENT_FR } from '~/core/constants/tools/drivingSchoolSoftware/pageContent.fr'

/** Content of the driving school software page in each language (shared values in `drivingSchoolSoftware/pageShared.ts`). */
export const DRIVING_SCHOOL_SOFTWARE_PAGES: Record<SupportedLocale, DibodevSoftwareToolPageContent> = {
  fr: DRIVING_SCHOOL_PAGE_CONTENT_FR,
  en: DRIVING_SCHOOL_PAGE_CONTENT_EN,
  es: DRIVING_SCHOOL_PAGE_CONTENT_ES,
}
