import type { SupportedLocale } from '~/core/constants/categorySlugs'
import type { DibodevPriceBarometerPageContent } from '~/core/types/DibodevPriceBarometerPage'
import { PRICE_BAROMETER_PAGE_CONTENT_EN } from '~/core/constants/priceBarometer/pageContent.en'
import { PRICE_BAROMETER_PAGE_CONTENT_ES } from '~/core/constants/priceBarometer/pageContent.es'
import { PRICE_BAROMETER_PAGE_CONTENT_FR } from '~/core/constants/priceBarometer/pageContent.fr'

/** Content of the custom software price barometer page in each language (shared values in `priceBarometer/pageShared.ts`). */
export const PRICE_BAROMETER_PAGES: Record<SupportedLocale, DibodevPriceBarometerPageContent> = {
  fr: PRICE_BAROMETER_PAGE_CONTENT_FR,
  en: PRICE_BAROMETER_PAGE_CONTENT_EN,
  es: PRICE_BAROMETER_PAGE_CONTENT_ES,
}
