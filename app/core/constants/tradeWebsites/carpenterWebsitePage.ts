import type { SupportedLocale } from '~/core/constants/categorySlugs'
import type { DibodevTradeWebsitePageContent } from '~/core/types/DibodevTradeWebsitePage'
import { CARPENTER_WEBSITE_PAGE_EN } from '~/core/constants/tradeWebsites/carpenter/pageContent.en'
import { CARPENTER_WEBSITE_PAGE_ES } from '~/core/constants/tradeWebsites/carpenter/pageContent.es'
import { CARPENTER_WEBSITE_PAGE_FR } from '~/core/constants/tradeWebsites/carpenter/pageContent.fr'

/** The "website for carpenters" page, in each language. */
export const CARPENTER_WEBSITE_PAGES: Record<SupportedLocale, DibodevTradeWebsitePageContent> = {
  fr: CARPENTER_WEBSITE_PAGE_FR,
  en: CARPENTER_WEBSITE_PAGE_EN,
  es: CARPENTER_WEBSITE_PAGE_ES,
}
