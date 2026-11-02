import type { SupportedLocale } from '~/core/constants/categorySlugs'
import type { DibodevWebsitePriceBarometerPageContent } from '~/core/types/DibodevWebsitePriceBarometerPage'
import { WEBSITE_PRICE_BAROMETER_PAGE_CONTENT_EN } from '~/core/constants/websitePriceBarometer/pageContent.en'
import { WEBSITE_PRICE_BAROMETER_PAGE_CONTENT_ES } from '~/core/constants/websitePriceBarometer/pageContent.es'
import { WEBSITE_PRICE_BAROMETER_PAGE_CONTENT_FR } from '~/core/constants/websitePriceBarometer/pageContent.fr'

/** Content of the website price barometer page in each language (shared values in `websitePriceBarometer/pageShared.ts`). */
export const WEBSITE_PRICE_BAROMETER_PAGES: Record<SupportedLocale, DibodevWebsitePriceBarometerPageContent> = {
  fr: WEBSITE_PRICE_BAROMETER_PAGE_CONTENT_FR,
  en: WEBSITE_PRICE_BAROMETER_PAGE_CONTENT_EN,
  es: WEBSITE_PRICE_BAROMETER_PAGE_CONTENT_ES,
}
