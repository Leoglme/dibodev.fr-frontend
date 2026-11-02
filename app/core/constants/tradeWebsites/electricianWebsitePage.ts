import type { SupportedLocale } from '~/core/constants/categorySlugs'
import type { DibodevTradeWebsitePageContent } from '~/core/types/DibodevTradeWebsitePage'
import { ELECTRICIAN_WEBSITE_PAGE_EN } from '~/core/constants/tradeWebsites/electrician/pageContent.en'
import { ELECTRICIAN_WEBSITE_PAGE_ES } from '~/core/constants/tradeWebsites/electrician/pageContent.es'
import { ELECTRICIAN_WEBSITE_PAGE_FR } from '~/core/constants/tradeWebsites/electrician/pageContent.fr'

/** The "website for electricians" page, in each language. */
export const ELECTRICIAN_WEBSITE_PAGES: Record<SupportedLocale, DibodevTradeWebsitePageContent> = {
  fr: ELECTRICIAN_WEBSITE_PAGE_FR,
  en: ELECTRICIAN_WEBSITE_PAGE_EN,
  es: ELECTRICIAN_WEBSITE_PAGE_ES,
}
