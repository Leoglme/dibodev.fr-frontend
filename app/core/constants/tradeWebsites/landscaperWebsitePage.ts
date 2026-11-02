import type { SupportedLocale } from '~/core/constants/categorySlugs'
import type { DibodevTradeWebsitePageContent } from '~/core/types/DibodevTradeWebsitePage'
import { LANDSCAPER_WEBSITE_PAGE_EN } from '~/core/constants/tradeWebsites/landscaper/pageContent.en'
import { LANDSCAPER_WEBSITE_PAGE_ES } from '~/core/constants/tradeWebsites/landscaper/pageContent.es'
import { LANDSCAPER_WEBSITE_PAGE_FR } from '~/core/constants/tradeWebsites/landscaper/pageContent.fr'

/** The "website for landscapers" page, in each language. */
export const LANDSCAPER_WEBSITE_PAGES: Record<SupportedLocale, DibodevTradeWebsitePageContent> = {
  fr: LANDSCAPER_WEBSITE_PAGE_FR,
  en: LANDSCAPER_WEBSITE_PAGE_EN,
  es: LANDSCAPER_WEBSITE_PAGE_ES,
}
