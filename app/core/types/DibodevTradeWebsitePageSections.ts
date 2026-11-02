import type { DibodevTradeWebsiteKey } from '~/core/types/DibodevTradeWebsite'
import type { DibodevTradeWebsitePageContent } from '~/core/types/DibodevTradeWebsitePage'

/**
 * Type definitions for the DibodevTradeWebsitePageSections component props.
 * @type {DibodevTradeWebsitePageSectionsProps}
 * @property {DibodevTradeWebsiteKey} tradeKey - The trade of the page.
 * @property {DibodevTradeWebsitePageContent} page - Its texts in the page language.
 * @property {string} updatedAt - Day the rules and prices were last read, as `YYYY-MM-DD`.
 * @property {string[]} relatedArticleSlugs - Articles shown under the FAQ; the untranslated ones are left out of /en and /es.
 */
export type DibodevTradeWebsitePageSectionsProps = {
  tradeKey: DibodevTradeWebsiteKey
  page: DibodevTradeWebsitePageContent
  updatedAt: string
  relatedArticleSlugs: string[]
}
