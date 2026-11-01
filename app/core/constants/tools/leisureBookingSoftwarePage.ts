import type { SupportedLocale } from '~/core/constants/categorySlugs'
import type { DibodevSoftwareToolPageContent } from '~/core/types/DibodevSoftwareToolPage'
import { LEISURE_BOOKING_PAGE_CONTENT_EN } from '~/core/constants/tools/leisureBookingSoftware/pageContent.en'
import { LEISURE_BOOKING_PAGE_CONTENT_ES } from '~/core/constants/tools/leisureBookingSoftware/pageContent.es'
import { LEISURE_BOOKING_PAGE_CONTENT_FR } from '~/core/constants/tools/leisureBookingSoftware/pageContent.fr'

/** Content of the leisure activity booking software page in each language (shared values in `leisureBookingSoftware/pageShared.ts`). */
export const LEISURE_BOOKING_SOFTWARE_PAGES: Record<SupportedLocale, DibodevSoftwareToolPageContent> = {
  fr: LEISURE_BOOKING_PAGE_CONTENT_FR,
  en: LEISURE_BOOKING_PAGE_CONTENT_EN,
  es: LEISURE_BOOKING_PAGE_CONTENT_ES,
}
