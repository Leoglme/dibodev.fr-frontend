import type { SupportedLocale } from '~/core/constants/categorySlugs'
import type { DibodevSoftwareToolPageContent } from '~/core/types/DibodevSoftwareToolPage'
import { EVENT_RENTAL_PAGE_CONTENT_EN } from '~/core/constants/tools/eventRentalSoftware/pageContent.en'
import { EVENT_RENTAL_PAGE_CONTENT_ES } from '~/core/constants/tools/eventRentalSoftware/pageContent.es'
import { EVENT_RENTAL_PAGE_CONTENT_FR } from '~/core/constants/tools/eventRentalSoftware/pageContent.fr'

/** Content of the event rental software page in each language (shared values in `eventRentalSoftware/pageShared.ts`). */
export const EVENT_RENTAL_SOFTWARE_PAGES: Record<SupportedLocale, DibodevSoftwareToolPageContent> = {
  fr: EVENT_RENTAL_PAGE_CONTENT_FR,
  en: EVENT_RENTAL_PAGE_CONTENT_EN,
  es: EVENT_RENTAL_PAGE_CONTENT_ES,
}
