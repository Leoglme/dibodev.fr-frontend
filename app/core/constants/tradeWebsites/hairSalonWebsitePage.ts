import type { SupportedLocale } from '~/core/constants/categorySlugs'
import type { DibodevTradeWebsitePageContent } from '~/core/types/DibodevTradeWebsitePage'
import { HAIR_SALON_WEBSITE_PAGE_EN } from '~/core/constants/tradeWebsites/hairSalon/pageContent.en'
import { HAIR_SALON_WEBSITE_PAGE_ES } from '~/core/constants/tradeWebsites/hairSalon/pageContent.es'
import { HAIR_SALON_WEBSITE_PAGE_FR } from '~/core/constants/tradeWebsites/hairSalon/pageContent.fr'

/** The "website for hair salons" page, in each language. */
export const HAIR_SALON_WEBSITE_PAGES: Record<SupportedLocale, DibodevTradeWebsitePageContent> = {
  fr: HAIR_SALON_WEBSITE_PAGE_FR,
  en: HAIR_SALON_WEBSITE_PAGE_EN,
  es: HAIR_SALON_WEBSITE_PAGE_ES,
}
