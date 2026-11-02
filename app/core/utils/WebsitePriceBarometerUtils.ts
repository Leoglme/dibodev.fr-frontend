import type { DibodevPriceRange } from '~/core/types/DibodevPriceBarometer'
import type {
  DibodevWebsitePriceBarometerCategory,
  DibodevWebsitePriceBarometerCategoryStats,
  DibodevWebsitePriceBarometerDataset,
  DibodevWebsitePriceBarometerSource,
  DibodevWebsitePriceBarometerSourceKind,
} from '~/core/types/DibodevWebsitePriceBarometer'
import type { DibodevWebsitePriceBarometerSourceWording } from '~/core/types/DibodevWebsitePriceBarometerPage'
import { PriceBarometerUtils } from '~/core/utils/PriceBarometerUtils'
import { QuizTextUtils } from '~/core/utils/QuizTextUtils'

const MONTHS_PER_YEAR: number = 12

/**
 * Figures of the website price barometer: medians of the published ranges per category, maintenance over several
 * years and the sentence describing each source in the page language. Amount formatting is shared with the custom
 * software barometer (`PriceBarometerUtils`).
 * @class WebsitePriceBarometerUtils
 */
export class WebsitePriceBarometerUtils {
  /**
   * Lowest and highest figures and medians of the floors and ceilings of a list of ranges.
   * @param {DibodevPriceRange[]} ranges - The published ranges.
   * @returns {DibodevWebsitePriceBarometerCategoryStats} The figures, all 0 when no source publishes the category.
   */
  private static statsOf(ranges: DibodevPriceRange[]): DibodevWebsitePriceBarometerCategoryStats {
    const floors: number[] = ranges.map((range: DibodevPriceRange): number => range.min)
    const ceilings: number[] = ranges.flatMap((range: DibodevPriceRange): number[] =>
      range.max === null ? [] : [range.max],
    )
    return {
      sourceCount: ranges.length,
      lowestFloor: floors.length ? Math.min(...floors) : 0,
      floorMedian: PriceBarometerUtils.median(floors),
      ceilingMedian: PriceBarometerUtils.median(ceilings),
      highestCeiling: ceilings.length ? Math.max(...ceilings) : 0,
    }
  }

  /**
   * What the sources publish for a website category.
   * @param {DibodevWebsitePriceBarometerDataset} dataset - The recorded prices.
   * @param {DibodevWebsitePriceBarometerCategory} category - The website size.
   * @returns {DibodevWebsitePriceBarometerCategoryStats} The figures of the category.
   */
  public static categoryStatsOf(
    dataset: DibodevWebsitePriceBarometerDataset,
    category: DibodevWebsitePriceBarometerCategory,
  ): DibodevWebsitePriceBarometerCategoryStats {
    return WebsitePriceBarometerUtils.statsOf(
      dataset.sources.flatMap((source: DibodevWebsitePriceBarometerSource): DibodevPriceRange[] =>
        source.ranges[category] ? [source.ranges[category]] : [],
      ),
    )
  }

  /**
   * What the sources of the given kinds publish per month: the maintenance of freelancers and agencies, or the
   * subscription of website builders.
   * @param {DibodevWebsitePriceBarometerDataset} dataset - The recorded prices.
   * @param {DibodevWebsitePriceBarometerSourceKind[]} kinds - The kinds of sources kept.
   * @returns {DibodevWebsitePriceBarometerCategoryStats} The figures of the monthly price.
   */
  public static monthlyStatsOf(
    dataset: DibodevWebsitePriceBarometerDataset,
    kinds: DibodevWebsitePriceBarometerSourceKind[],
  ): DibodevWebsitePriceBarometerCategoryStats {
    return WebsitePriceBarometerUtils.statsOf(
      dataset.sources.flatMap((source: DibodevWebsitePriceBarometerSource): DibodevPriceRange[] =>
        source.maintenanceMonthly && kinds.includes(source.kind) ? [source.maintenanceMonthly] : [],
      ),
    )
  }

  /**
   * Cost of a website over several years: the initial price plus a monthly price (maintenance, hosting or subscription).
   * @param {DibodevPriceRange} initial - The initial price range (0 for a subscription-only offer).
   * @param {DibodevPriceRange} monthly - The monthly price range.
   * @param {number} years - The number of years.
   * @returns {DibodevPriceRange} The total over the period.
   */
  public static costOver(initial: DibodevPriceRange, monthly: DibodevPriceRange, years: number): DibodevPriceRange {
    const months: number = years * MONTHS_PER_YEAR
    return {
      min: initial.min + monthly.min * months,
      max: initial.max === null || monthly.max === null ? null : initial.max + monthly.max * months,
    }
  }

  /**
   * One sentence describing what a source publishes: its ranges per category, its monthly price, its tax label and its date.
   * @param {DibodevWebsitePriceBarometerSource} source - The source.
   * @param {DibodevWebsitePriceBarometerSourceWording} wording - Sentence fragments in the page language.
   * @param {string} checkedAt - The day the prices were recorded, already formatted.
   * @param {string} numberLocale - The locale of the numbers.
   * @returns {string} The sentence.
   */
  public static describeSource(
    source: DibodevWebsitePriceBarometerSource,
    wording: DibodevWebsitePriceBarometerSourceWording,
    checkedAt: string,
    numberLocale: string,
  ): string {
    const categories: DibodevWebsitePriceBarometerCategory[] = ['onePage', 'showcase', 'fullShowcase']
    const parts: string[] = categories.flatMap((category: DibodevWebsitePriceBarometerCategory): string[] => {
      const range: DibodevPriceRange | undefined = source.ranges[category]
      if (!range) {
        return []
      }
      return [WebsitePriceBarometerUtils.describeRange(range, wording.rangeLabels[category], wording, numberLocale)]
    })
    if (source.maintenanceMonthly) {
      parts.push(
        WebsitePriceBarometerUtils.describeRange(
          source.maintenanceMonthly,
          wording.maintenanceLabel,
          wording,
          numberLocale,
        ),
      )
    }
    const note: string = wording.notes[source.key] ? ` ${wording.notes[source.key]}` : ''
    const published: string = QuizTextUtils.fillTemplate(wording.publishedTemplate, {
      checkedAt,
      publishedAt: source.publishedAt,
    })
    return `${parts.join(' · ')} (${wording.taxLabels[source.taxLabel]}).${note} ${published}`
  }

  /**
   * One fragment for a range: "Site vitrine 1 500 à 2 500 €", "Par mois dès 22 €".
   * @param {DibodevPriceRange} range - The range.
   * @param {string} label - The category label.
   * @param {DibodevWebsitePriceBarometerSourceWording} wording - Sentence fragments in the page language.
   * @param {string} numberLocale - The locale of the numbers.
   * @returns {string} The fragment.
   */
  private static describeRange(
    range: DibodevPriceRange,
    label: string,
    wording: DibodevWebsitePriceBarometerSourceWording,
    numberLocale: string,
  ): string {
    const isFixedPrice: boolean = range.max === range.min
    const template: string = isFixedPrice
      ? wording.fixedPriceTemplate
      : range.max === null
        ? wording.openRangeTemplate
        : wording.rangeTemplate
    return QuizTextUtils.fillTemplate(template, {
      label,
      value: WebsitePriceBarometerUtils.formatExactAmount(range.min, numberLocale),
      min: WebsitePriceBarometerUtils.formatExactAmount(range.min, numberLocale),
      max: WebsitePriceBarometerUtils.formatExactAmount(range.max ?? range.min, numberLocale),
    })
  }

  /**
   * Formats an amount as the source writes it: whole euros without decimals, monthly plans with their cents ("16,80").
   * @param {number} amount - The amount in euros.
   * @param {string} numberLocale - The locale of the numbers.
   * @returns {string} The formatted amount, without currency.
   */
  public static formatExactAmount(amount: number, numberLocale: string): string {
    const fractionDigits: number = Number.isInteger(amount) ? 0 : 2
    return new Intl.NumberFormat(numberLocale, {
      minimumFractionDigits: fractionDigits,
      maximumFractionDigits: fractionDigits,
    }).format(amount)
  }
}
