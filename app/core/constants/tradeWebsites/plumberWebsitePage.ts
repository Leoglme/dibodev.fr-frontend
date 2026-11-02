import type { SupportedLocale } from '~/core/constants/categorySlugs'
import type { DibodevTradeWebsitePageContent } from '~/core/types/DibodevTradeWebsitePage'
import { PLUMBER_WEBSITE_PAGE_EN } from '~/core/constants/tradeWebsites/plumber/pageContent.en'
import { PLUMBER_WEBSITE_PAGE_ES } from '~/core/constants/tradeWebsites/plumber/pageContent.es'
import { PLUMBER_WEBSITE_PAGE_FR } from '~/core/constants/tradeWebsites/plumber/pageContent.fr'

/** The "website for plumbers" page, in each language. */
export const PLUMBER_WEBSITE_PAGES: Record<SupportedLocale, DibodevTradeWebsitePageContent> = {
  fr: PLUMBER_WEBSITE_PAGE_FR,
  en: PLUMBER_WEBSITE_PAGE_EN,
  es: PLUMBER_WEBSITE_PAGE_ES,
}
