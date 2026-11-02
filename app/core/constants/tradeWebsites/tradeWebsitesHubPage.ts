import type { SupportedLocale } from '~/core/constants/categorySlugs'
import type { DibodevTradeWebsiteHubPageContent } from '~/core/types/DibodevTradeWebsiteHubPage'
import { TRADE_WEBSITES_HUB_PAGE_EN } from '~/core/constants/tradeWebsites/hub/pageContent.en'
import { TRADE_WEBSITES_HUB_PAGE_ES } from '~/core/constants/tradeWebsites/hub/pageContent.es'
import { TRADE_WEBSITES_HUB_PAGE_FR } from '~/core/constants/tradeWebsites/hub/pageContent.fr'

/** The "websites by trade" hub, in each language. */
export const TRADE_WEBSITES_HUB_PAGES: Record<SupportedLocale, DibodevTradeWebsiteHubPageContent> = {
  fr: TRADE_WEBSITES_HUB_PAGE_FR,
  en: TRADE_WEBSITES_HUB_PAGE_EN,
  es: TRADE_WEBSITES_HUB_PAGE_ES,
}
