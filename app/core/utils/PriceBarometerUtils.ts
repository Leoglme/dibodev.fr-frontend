import type {
  DibodevPriceBarometerDataset,
  DibodevPriceBarometerRangeKey,
  DibodevPriceBarometerSource,
  DibodevPriceBarometerTier,
  DibodevPriceBarometerTierStats,
  DibodevPriceRange,
} from '~/core/types/DibodevPriceBarometer'
import type { DibodevPriceBarometerSourceWording } from '~/core/types/DibodevPriceBarometerPage'
import { QuizTextUtils } from '~/core/utils/QuizTextUtils'

const MONTHS_PER_YEAR: number = 12
const PERCENT: number = 100

/**
 * Figures of the custom software price barometer: medians of the published ranges, costs over several years and
 * the sentence describing each source in the page language.
 * @class PriceBarometerUtils
 */
export class PriceBarometerUtils {
  /**
   * Median of a list of numbers (the mean of the two middle values for an even count).
   * @param {number[]} values - The values, in any order.
   * @returns {number} The median, 0 when the list is empty.
   */
  public static median(values: number[]): number {
    if (values.length === 0) return 0
    const sorted: number[] = [...values].sort((a: number, b: number): number => a - b)
    const middle: number = Math.floor(sorted.length / 2)
    return sorted.length % 2 === 0 ? (sorted[middle - 1]! + sorted[middle]!) / 2 : sorted[middle]!
  }

  /**
   * What the sources publish for a tier: lowest and highest figures, medians of the floors and of the ceilings.
   * @param {DibodevPriceBarometerDataset} dataset - The recorded prices.
   * @param {DibodevPriceBarometerTier} tier - The project size.
   * @returns {DibodevPriceBarometerTierStats} The figures of the tier.
   */
  public static tierStatsOf(
    dataset: DibodevPriceBarometerDataset,
    tier: DibodevPriceBarometerTier,
  ): DibodevPriceBarometerTierStats {
    const ranges: DibodevPriceRange[] = dataset.sources.flatMap(
      (source: DibodevPriceBarometerSource): DibodevPriceRange[] => (source.ranges[tier] ? [source.ranges[tier]] : []),
    )
    const floors: number[] = ranges.map((range: DibodevPriceRange): number => range.min)
    const ceilings: number[] = ranges.flatMap((range: DibodevPriceRange): number[] =>
      range.max === null ? [] : [range.max],
    )
    return {
      tier,
      sourceCount: ranges.length,
      lowestFloor: floors.length ? Math.min(...floors) : 0,
      floorMedian: PriceBarometerUtils.median(floors),
      ceilingMedian: PriceBarometerUtils.median(ceilings),
      highestCeiling: ceilings.length ? Math.max(...ceilings) : 0,
    }
  }

  /**
   * Cost of a subscription over several years.
   * @param {DibodevPriceRange} monthly - The monthly price range.
   * @param {number} years - The number of years.
   * @returns {DibodevPriceRange} The total over the period.
   */
  public static subscriptionCostOver(monthly: DibodevPriceRange, years: number): DibodevPriceRange {
    const months: number = years * MONTHS_PER_YEAR
    return { min: monthly.min * months, max: monthly.max === null ? null : monthly.max * months }
  }

  /**
   * Cost of a custom tool over several years: the initial price plus a monthly maintenance.
   * @param {DibodevPriceRange} initial - The initial price range.
   * @param {DibodevPriceRange} maintenanceMonthly - The monthly maintenance range.
   * @param {number} years - The number of years.
   * @returns {DibodevPriceRange} The total over the period.
   */
  public static customCostWithMonthlyMaintenance(
    initial: DibodevPriceRange,
    maintenanceMonthly: DibodevPriceRange,
    years: number,
  ): DibodevPriceRange {
    const maintenance: DibodevPriceRange = PriceBarometerUtils.subscriptionCostOver(maintenanceMonthly, years)
    return {
      min: initial.min + maintenance.min,
      max: initial.max === null || maintenance.max === null ? null : initial.max + maintenance.max,
    }
  }

  /**
   * Cost of a custom tool over several years when the maintenance is a yearly share of the initial price.
   * @param {DibodevPriceRange} initial - The initial price range.
   * @param {DibodevPriceRange} yearlyPercent - The maintenance, as a percentage of the initial price per year.
   * @param {number} years - The number of years.
   * @returns {DibodevPriceRange} The total over the period.
   */
  public static customCostWithPercentMaintenance(
    initial: DibodevPriceRange,
    yearlyPercent: DibodevPriceRange,
    years: number,
  ): DibodevPriceRange {
    const minFactor: number = 1 + (years * yearlyPercent.min) / PERCENT
    const maxFactor: number = 1 + (years * (yearlyPercent.max ?? yearlyPercent.min)) / PERCENT
    return {
      min: Math.round(initial.min * minFactor),
      max: initial.max === null ? null : Math.round(initial.max * maxFactor),
    }
  }

  /**
   * Formats an amount in the page language ("13 500", "13,500").
   * @param {number} amount - The amount in euros.
   * @param {string} numberLocale - The locale of the numbers.
   * @returns {string} The formatted amount, without currency.
   */
  public static formatAmount(amount: number, numberLocale: string): string {
    return new Intl.NumberFormat(numberLocale, { maximumFractionDigits: 0 }).format(amount)
  }

  /**
   * Formats a range with the language's template ("13 500 à 50 000 €").
   * @param {DibodevPriceRange} range - The range.
   * @param {string} template - The template with `{min}` and `{max}`.
   * @param {string} numberLocale - The locale of the numbers.
   * @returns {string} The formatted range.
   */
  public static formatRange(range: DibodevPriceRange, template: string, numberLocale: string): string {
    return QuizTextUtils.fillTemplate(template, {
      min: PriceBarometerUtils.formatAmount(range.min, numberLocale),
      max: PriceBarometerUtils.formatAmount(range.max ?? range.min, numberLocale),
    })
  }

  /**
   * One sentence describing what a source publishes: its ranges, its daily rate, its maintenance and its date.
   * @param {DibodevPriceBarometerSource} source - The source.
   * @param {DibodevPriceBarometerSourceWording} wording - Sentence fragments in the page language.
   * @param {string} checkedAt - The day the prices were recorded, already formatted.
   * @param {string} numberLocale - The locale of the numbers.
   * @returns {string} The sentence.
   */
  public static describeSource(
    source: DibodevPriceBarometerSource,
    wording: DibodevPriceBarometerSourceWording,
    checkedAt: string,
    numberLocale: string,
  ): string {
    const rangeKeys: DibodevPriceBarometerRangeKey[] = ['simpleTool', 'businessApp', 'platform', 'overall']
    const parts: string[] = rangeKeys.flatMap((key: DibodevPriceBarometerRangeKey): string[] => {
      const range: DibodevPriceRange | undefined = source.ranges[key]
      if (!range) return []
      const isFixedPrice: boolean = range.max === range.min
      const template: string = isFixedPrice
        ? wording.fixedPriceTemplate
        : range.max === null
          ? wording.openRangeTemplate
          : wording.rangeTemplate
      return [
        QuizTextUtils.fillTemplate(template, {
          label: wording.rangeLabels[key],
          value: PriceBarometerUtils.formatAmount(range.min, numberLocale),
          min: PriceBarometerUtils.formatAmount(range.min, numberLocale),
          max: PriceBarometerUtils.formatAmount(range.max ?? range.min, numberLocale),
        }),
      ]
    })
    if (source.dayRate) {
      const isSingleRate: boolean = source.dayRate.max === null || source.dayRate.max === source.dayRate.min
      parts.push(
        QuizTextUtils.fillTemplate(isSingleRate ? wording.singleDayRateTemplate : wording.dayRateTemplate, {
          value: PriceBarometerUtils.formatAmount(source.dayRate.min, numberLocale),
          min: PriceBarometerUtils.formatAmount(source.dayRate.min, numberLocale),
          max: PriceBarometerUtils.formatAmount(source.dayRate.max ?? source.dayRate.min, numberLocale),
        }),
      )
    }
    if (source.maintenancePercentPerYear) {
      parts.push(
        QuizTextUtils.fillTemplate(wording.maintenanceTemplate, {
          min: String(source.maintenancePercentPerYear.min),
          max: String(source.maintenancePercentPerYear.max ?? source.maintenancePercentPerYear.min),
        }),
      )
    }
    const note: string = wording.notes[source.key] ? ` ${wording.notes[source.key]}` : ''
    const published: string = QuizTextUtils.fillTemplate(wording.publishedTemplate, {
      checkedAt,
      publishedAt: source.publishedAt,
    })
    return `${parts.join(' · ')}.${note} ${published}`
  }

  /**
   * Host of a source page, shown as the source name ("lonestone.io").
   * @param {string} url - The page address.
   * @returns {string} The host without "www.".
   */
  public static hostOf(url: string): string {
    return new URL(url).hostname.replace(/^www\./, '')
  }
}
