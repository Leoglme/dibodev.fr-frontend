import type { DibodevPriceRange } from '~/core/types/DibodevPriceBarometer'

/** Size of a showcase website, from a single page to a complete site or an online shop. */
export type DibodevWebsitePriceBarometerCategory = 'onePage' | 'showcase' | 'fullShowcase'

/** Who publishes the price: a freelancer, an agency, a website builder with a "made for you" offer, or a price guide. */
export type DibodevWebsitePriceBarometerSourceKind = 'freelance' | 'agency' | 'builder' | 'guide'

/** How the source writes its prices: before tax, including tax, net of tax (no VAT applicable) or without saying. */
export type DibodevWebsitePriceBarometerTaxLabel = 'excludingTax' | 'includingTax' | 'net' | 'unspecified'

/** One provider, builder or guide whose public website prices were recorded. */
export type DibodevWebsitePriceBarometerSource = {
  key: string
  name: string
  kind: DibodevWebsitePriceBarometerSourceKind
  city: string
  sourceUrl: string
  publishedAt: string
  taxLabel: DibodevWebsitePriceBarometerTaxLabel
  ranges: Partial<Record<DibodevWebsitePriceBarometerCategory, DibodevPriceRange>>
  maintenanceMonthly: DibodevPriceRange | null
}

/** The whole record, as stored in `content/data/website-price-barometer-<edition>.json`. */
export type DibodevWebsitePriceBarometerDataset = {
  edition: number
  checkedAt: string
  license: string
  currency: string
  sources: DibodevWebsitePriceBarometerSource[]
}

/** What the sources publish for one category: the lowest and highest figures, and the medians of the floors and ceilings. */
export type DibodevWebsitePriceBarometerCategoryStats = {
  sourceCount: number
  lowestFloor: number
  floorMedian: number
  ceilingMedian: number
  highestCeiling: number
}
