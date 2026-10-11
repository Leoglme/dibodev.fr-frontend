/** Size of a custom software project, from a single-purpose tool to a platform. */
export type DibodevPriceBarometerTier = 'simpleTool' | 'businessApp' | 'platform'

/** A tier, or `overall` when a source only publishes one global range. */
export type DibodevPriceBarometerRangeKey = DibodevPriceBarometerTier | 'overall'

export type DibodevPriceBarometerSourceKind = 'agency' | 'freelance' | 'platform' | 'media' | 'directory'

/** A published range in euros; `max` is null when the source only gives a starting price. */
export type DibodevPriceRange = {
  min: number
  max: number | null
}

/** One provider or platform whose public prices were recorded. */
export type DibodevPriceBarometerSource = {
  key: string
  name: string
  kind: DibodevPriceBarometerSourceKind
  city: string
  sourceUrl: string
  publishedAt: string
  ranges: Partial<Record<DibodevPriceBarometerRangeKey, DibodevPriceRange>>
  dayRate: DibodevPriceRange | null
  maintenancePercentPerYear: DibodevPriceRange | null
}

/** The whole record, as stored in `content/data/price-barometer-<edition>.json`. */
export type DibodevPriceBarometerDataset = {
  edition: number
  checkedAt: string
  license: string
  currency: string
  sources: DibodevPriceBarometerSource[]
}

/** What the sources publish for one tier: the lowest and highest figures, and the medians of the floors and ceilings. */
export type DibodevPriceBarometerTierStats = {
  tier: DibodevPriceBarometerTier
  sourceCount: number
  lowestFloor: number
  floorMedian: number
  ceilingMedian: number
  highestCeiling: number
}
