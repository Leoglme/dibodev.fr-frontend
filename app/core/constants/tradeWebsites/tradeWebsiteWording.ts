import type { SupportedLocale } from '~/core/constants/categorySlugs'
import type { DibodevTradeWebsiteSharedWording } from '~/core/types/DibodevTradeWebsitePage'
import { TRADE_WEBSITE_WORDING_EN } from '~/core/constants/tradeWebsites/tradeWebsiteWording.en'
import { TRADE_WEBSITE_WORDING_ES } from '~/core/constants/tradeWebsites/tradeWebsiteWording.es'
import { TRADE_WEBSITE_WORDING_FR } from '~/core/constants/tradeWebsites/tradeWebsiteWording.fr'

export const TRADE_WEBSITE_WORDINGS: Record<SupportedLocale, DibodevTradeWebsiteSharedWording> = {
  fr: TRADE_WEBSITE_WORDING_FR,
  en: TRADE_WEBSITE_WORDING_EN,
  es: TRADE_WEBSITE_WORDING_ES,
}
