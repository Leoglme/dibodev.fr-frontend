import type { SupportedLocale } from '~/core/constants/categorySlugs'
import type { DibodevTradeWebsitePageContent } from '~/core/types/DibodevTradeWebsitePage'
import { GARAGE_WEBSITE_PAGE_EN } from '~/core/constants/tradeWebsites/garage/pageContent.en'
import { GARAGE_WEBSITE_PAGE_ES } from '~/core/constants/tradeWebsites/garage/pageContent.es'
import { GARAGE_WEBSITE_PAGE_FR } from '~/core/constants/tradeWebsites/garage/pageContent.fr'

/** The "website for auto repair shops" page, in each language. */
export const GARAGE_WEBSITE_PAGES: Record<SupportedLocale, DibodevTradeWebsitePageContent> = {
  fr: GARAGE_WEBSITE_PAGE_FR,
  en: GARAGE_WEBSITE_PAGE_EN,
  es: GARAGE_WEBSITE_PAGE_ES,
}
