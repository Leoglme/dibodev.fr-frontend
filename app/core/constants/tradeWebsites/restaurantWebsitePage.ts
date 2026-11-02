import type { SupportedLocale } from '~/core/constants/categorySlugs'
import type { DibodevTradeWebsitePageContent } from '~/core/types/DibodevTradeWebsitePage'
import { RESTAURANT_WEBSITE_PAGE_EN } from '~/core/constants/tradeWebsites/restaurant/pageContent.en'
import { RESTAURANT_WEBSITE_PAGE_ES } from '~/core/constants/tradeWebsites/restaurant/pageContent.es'
import { RESTAURANT_WEBSITE_PAGE_FR } from '~/core/constants/tradeWebsites/restaurant/pageContent.fr'

/** The "website for restaurants" page, in each language. */
export const RESTAURANT_WEBSITE_PAGES: Record<SupportedLocale, DibodevTradeWebsitePageContent> = {
  fr: RESTAURANT_WEBSITE_PAGE_FR,
  en: RESTAURANT_WEBSITE_PAGE_EN,
  es: RESTAURANT_WEBSITE_PAGE_ES,
}
