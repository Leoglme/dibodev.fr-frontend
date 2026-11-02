import type { SupportedLocale } from '~/core/constants/categorySlugs'
import type { DibodevTradeWebsitePageContent } from '~/core/types/DibodevTradeWebsitePage'
import { DENTIST_WEBSITE_PAGE_EN } from '~/core/constants/tradeWebsites/dentist/pageContent.en'
import { DENTIST_WEBSITE_PAGE_ES } from '~/core/constants/tradeWebsites/dentist/pageContent.es'
import { DENTIST_WEBSITE_PAGE_FR } from '~/core/constants/tradeWebsites/dentist/pageContent.fr'

/** The "website for dentists" page, in each language. */
export const DENTIST_WEBSITE_PAGES: Record<SupportedLocale, DibodevTradeWebsitePageContent> = {
  fr: DENTIST_WEBSITE_PAGE_FR,
  en: DENTIST_WEBSITE_PAGE_EN,
  es: DENTIST_WEBSITE_PAGE_ES,
}
