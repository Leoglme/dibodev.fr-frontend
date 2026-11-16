import type { SupportedLocale } from '~/core/constants/categorySlugs'
import type {
  DibodevGoogleSearchUpdate,
  DibodevGoogleUpdateImpactMetric,
  DibodevGoogleUpdateImpactResult,
  DibodevGoogleUpdateImpactTrend,
  DibodevGoogleUpdatePageMovement,
  DibodevGoogleUpdatePageMovements,
  DibodevGoogleUpdateUnreadableReason,
  DibodevSearchConsoleDailyRow,
  DibodevSearchConsoleExport,
  DibodevSearchConsolePageRow,
} from '~/core/types/DibodevGoogleUpdateImpact'

/** A drop of 20 % or more since the start is a clear drop; a rise of 20 % or more a clear rise. Written in the « Method » section. */
export const GOOGLE_UPDATE_DROP_THRESHOLD: number = -0.2
export const GOOGLE_UPDATE_RISE_THRESHOLD: number = 0.2
/** Under 7 days since the start, the trend is provisional; under 3 days, none is shown. */
export const GOOGLE_UPDATE_MINIMUM_DAYS_FOR_VERDICT: number = 7
export const GOOGLE_UPDATE_MINIMUM_DAYS_FOR_TREND: number = 3
/** Google advises to wait a full week after the end of the rollout before drawing conclusions. */
export const GOOGLE_UPDATE_DAYS_TO_WAIT_AFTER_END: number = 7
/** Clicks are compared when the weeks before count at least 100 of them; impressions otherwise. */
export const GOOGLE_UPDATE_MINIMUM_CLICKS_FOR_CLICK_METRIC: number = 100
/** At most five weeks after the start are compared. */
export const GOOGLE_UPDATE_MAXIMUM_DAYS_COMPARED: number = 35
/** A page counts as « dropped to zero » when it had at least 10 impressions before. */
export const GOOGLE_UPDATE_MINIMUM_IMPRESSIONS_BEFORE_ZERO: number = 10
export const GOOGLE_UPDATE_PAGE_LIST_LIMIT: number = 10

const DAY_IN_MILLISECONDS: number = 86_400_000
const DAYS_IN_A_WEEK: number = 7
const PAGE_LABEL_MAXIMUM_LENGTH: number = 48
const PAGE_LABEL_HEAD_LENGTH: number = 30
const PAGE_LABEL_TAIL_LENGTH: number = 15
const EXAMPLE_SITE: string = 'https://www.example.com'
const EXAMPLE_DAYS_BEFORE_START: number = 63
const EXAMPLE_DAYS_AFTER_END: number = 8
const EXAMPLE_DAYS_WHILE_ROLLING_OUT: number = 6
const EXAMPLE_DROP_FACTOR: number = 0.62
const EXAMPLE_WEEKDAY_IMPRESSIONS: number = 410
const EXAMPLE_WEEKEND_IMPRESSIONS: number = 260
const EXAMPLE_DAILY_WAVE_HEIGHT: number = 0.08
const EXAMPLE_DAILY_WAVE_PACE: number = 1.7
const EXAMPLE_DAILY_CLICK_RATE: number = 0.031
const EXAMPLE_PAGE_CLICK_RATE: number = 0.03
/** Fictitious pages of the example: path, impressions before, impressions after. */
const EXAMPLE_PAGES: [string, number, number][] = [
  ['/', 3200, 2900],
  ['/tarifs', 1450, 0],
  ['/contact', 980, 940],
  ['/blog/choisir-son-four-a-pain', 2100, 640],
  ['/blog/recette-pain-de-campagne', 1800, 0],
  ['/services/livraison-entreprises', 760, 1180],
  ['/blog/horaires-jours-feries', 520, 0],
  ['/a-propos', 430, 410],
  ['/blog/farines-anciennes-guide-complet-pour-les-particuliers', 1250, 700],
  ['/commander-en-ligne', 690, 980],
  ['/blog/galette-des-rois', 310, 590],
  ['/mentions-legales', 40, 35],
]

const NUMBER_LOCALE_TAGS: Record<SupportedLocale, string> = { fr: 'fr-FR', en: 'en-GB', es: 'es-ES' }

/** Compares the days since the start of a Google update with the same weekdays before, and lists the pages that moved. */
export class GoogleUpdateImpactUtils {
  /**
   * Writes a date in words for the page language (« 10 novembre 2026 »).
   * @param {string} isoDate - The date (YYYY-MM-DD).
   * @param {SupportedLocale} locale - The page language.
   * @returns {string} The date in words.
   */
  static formatDate(isoDate: string, locale: SupportedLocale): string {
    return new Intl.DateTimeFormat(NUMBER_LOCALE_TAGS[locale], {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
      timeZone: 'UTC',
    }).format(new Date(`${isoDate}T00:00:00Z`))
  }

  /**
   * Writes a count with the thousands separator of the page language (« 1 234 »).
   * @param {number} count - The count.
   * @param {SupportedLocale} locale - The page language.
   * @returns {string} The count in figures.
   */
  static formatCount(count: number, locale: SupportedLocale): string {
    return new Intl.NumberFormat(NUMBER_LOCALE_TAGS[locale]).format(count)
  }

  /**
   * Writes a change as a signed percentage, rounded to the unit (« −38 % », « +12 % »).
   * @param {number} ratio - The change (-0.38 for a 38 % drop).
   * @param {SupportedLocale} locale - The page language.
   * @returns {string} The percentage.
   */
  static formatChange(ratio: number, locale: SupportedLocale): string {
    return new Intl.NumberFormat(NUMBER_LOCALE_TAGS[locale], {
      style: 'percent',
      maximumFractionDigits: 0,
      signDisplay: 'exceptZero',
    }).format(ratio)
  }

  /**
   * Adds days to a date.
   * @param {string} isoDate - The date (YYYY-MM-DD).
   * @param {number} days - Days to add, negative to go back.
   * @returns {string} The new date (YYYY-MM-DD).
   */
  static addDays(isoDate: string, days: number): string {
    return new Date(Date.parse(`${isoDate}T00:00:00Z`) + days * DAY_IN_MILLISECONDS).toISOString().slice(0, 10)
  }

  /**
   * Counts the days from one date to another.
   * @param {string} fromDate - The first date (YYYY-MM-DD).
   * @param {string} toDate - The second date (YYYY-MM-DD).
   * @returns {number} The days between them, negative when `toDate` comes first.
   */
  static daysBetween(fromDate: string, toDate: string): number {
    return Math.round((Date.parse(`${toDate}T00:00:00Z`) - Date.parse(`${fromDate}T00:00:00Z`)) / DAY_IN_MILLISECONDS)
  }

  /**
   * Compares the days since the start of the update with the same weekdays just before, and the weeks before with the weeks before them.
   * @param {DibodevSearchConsoleDailyRow[]} dailyRows - The days of the export, in any order.
   * @param {DibodevGoogleSearchUpdate} update - The update compared with.
   * @returns {DibodevGoogleUpdateImpactResult} The verdict and the figures behind it.
   */
  static evaluate(
    dailyRows: DibodevSearchConsoleDailyRow[],
    update: DibodevGoogleSearchUpdate,
  ): DibodevGoogleUpdateImpactResult {
    const sortedDates: string[] = dailyRows.map((row: DibodevSearchConsoleDailyRow): string => row.date).sort()
    const firstDate: string | undefined = sortedDates[0]
    // Google is still counting the most recent day of an export: it is left out, or it would read as a drop.
    const lastDate: string | undefined = sortedDates[Math.max(sortedDates.length - 2, 0)]
    const isRolloutFinished: boolean = update.endDate !== null
    const hasWaitedAWeekAfterEnd: boolean =
      update.endDate !== null &&
      lastDate !== undefined &&
      this.daysBetween(update.endDate, lastDate) >= GOOGLE_UPDATE_DAYS_TO_WAIT_AFTER_END

    if (!firstDate || !lastDate) {
      return this.unreadable('noDates', isRolloutFinished)
    }
    if (lastDate < update.startDate) {
      return this.unreadable('endsBeforeUpdate', isRolloutFinished)
    }
    const daysSinceStart: number = Math.min(
      this.daysBetween(update.startDate, lastDate) + 1,
      GOOGLE_UPDATE_MAXIMUM_DAYS_COMPARED,
    )
    const shiftInDays: number = Math.ceil(daysSinceStart / DAYS_IN_A_WEEK) * DAYS_IN_A_WEEK

    if (firstDate > this.addDays(update.startDate, -shiftInDays)) {
      return this.unreadable('noDaysBefore', isRolloutFinished)
    }
    const rowsByDate: Map<string, DibodevSearchConsoleDailyRow> = new Map(
      dailyRows.map((row: DibodevSearchConsoleDailyRow): [string, DibodevSearchConsoleDailyRow] => [row.date, row]),
    )
    const baselineClicks: number = this.sumWindow(rowsByDate, update.startDate, -shiftInDays, daysSinceStart, 'clicks')
    const metric: DibodevGoogleUpdateImpactMetric =
      baselineClicks >= GOOGLE_UPDATE_MINIMUM_CLICKS_FOR_CLICK_METRIC ? 'clicks' : 'impressions'
    const currentTotal: number = this.sumWindow(rowsByDate, update.startDate, 0, daysSinceStart, metric)
    const baselineTotal: number = this.sumWindow(rowsByDate, update.startDate, -shiftInDays, daysSinceStart, metric)

    if (baselineTotal === 0) {
      return this.unreadable('noTrafficBefore', isRolloutFinished)
    }
    const changeRatio: number = currentTotal / baselineTotal - 1
    const hasWeeksBeforeBaseline: boolean = firstDate <= this.addDays(update.startDate, -2 * shiftInDays)
    const earlierTotal: number = hasWeeksBeforeBaseline
      ? this.sumWindow(rowsByDate, update.startDate, -2 * shiftInDays, daysSinceStart, metric)
      : 0
    const changeBeforeRatio: number | null = earlierTotal > 0 ? baselineTotal / earlierTotal - 1 : null
    const trend: DibodevGoogleUpdateImpactTrend = this.trendOf(changeRatio, changeBeforeRatio)
    const isTooEarly: boolean = daysSinceStart < GOOGLE_UPDATE_MINIMUM_DAYS_FOR_VERDICT || !hasWaitedAWeekAfterEnd

    return {
      verdict: isTooEarly ? 'tooEarly' : trend,
      provisionalTrend: isTooEarly && daysSinceStart >= GOOGLE_UPDATE_MINIMUM_DAYS_FOR_TREND ? trend : null,
      unreadableReason: null,
      metric,
      daysSinceStart,
      changeRatio,
      changeBeforeRatio,
      currentTotal,
      baselineTotal,
      isRolloutFinished,
      hasWaitedAWeekAfterEnd,
    }
  }

  /**
   * Picks the trend from the change since the start and the change of the weeks before.
   * @param {number} changeRatio - Change since the start.
   * @param {number | null} changeBeforeRatio - Change of the weeks just before the start, null when unknown.
   * @returns {DibodevGoogleUpdateImpactTrend} The trend.
   */
  static trendOf(changeRatio: number, changeBeforeRatio: number | null): DibodevGoogleUpdateImpactTrend {
    if (changeRatio <= GOOGLE_UPDATE_DROP_THRESHOLD) {
      return changeBeforeRatio !== null && changeBeforeRatio <= GOOGLE_UPDATE_DROP_THRESHOLD
        ? 'startedBefore'
        : 'affected'
    }
    return changeRatio >= GOOGLE_UPDATE_RISE_THRESHOLD ? 'winner' : 'stable'
  }

  /**
   * Lists the pages that dropped to zero impressions, the biggest drops and the biggest rises between the two periods.
   * @param {DibodevSearchConsolePageRow[]} pageRows - The pages of a « Pages » file in comparison mode.
   * @returns {DibodevGoogleUpdatePageMovements} At most ten pages per list.
   */
  static pageMovements(pageRows: DibodevSearchConsolePageRow[]): DibodevGoogleUpdatePageMovements {
    const movements: DibodevGoogleUpdatePageMovement[] = pageRows
      .filter((row: DibodevSearchConsolePageRow): boolean => row.impressionsPrevious !== null)
      .map(
        (row: DibodevSearchConsolePageRow): DibodevGoogleUpdatePageMovement => ({
          page: row.page,
          pageLabel: this.shortenPageLink(row.page),
          impressionsPrevious: row.impressionsPrevious ?? 0,
          impressionsCurrent: row.impressionsCurrent,
        }),
      )
    const deltaOf: (movement: DibodevGoogleUpdatePageMovement) => number = (
      movement: DibodevGoogleUpdatePageMovement,
    ): number => movement.impressionsCurrent - movement.impressionsPrevious

    return {
      droppedToZero: movements
        .filter(
          (movement: DibodevGoogleUpdatePageMovement): boolean =>
            movement.impressionsCurrent === 0 &&
            movement.impressionsPrevious >= GOOGLE_UPDATE_MINIMUM_IMPRESSIONS_BEFORE_ZERO,
        )
        .sort(
          (first: DibodevGoogleUpdatePageMovement, second: DibodevGoogleUpdatePageMovement): number =>
            second.impressionsPrevious - first.impressionsPrevious,
        )
        .slice(0, GOOGLE_UPDATE_PAGE_LIST_LIMIT),
      biggestDrops: movements
        .filter(
          (movement: DibodevGoogleUpdatePageMovement): boolean =>
            movement.impressionsCurrent > 0 && deltaOf(movement) < 0,
        )
        .sort(
          (first: DibodevGoogleUpdatePageMovement, second: DibodevGoogleUpdatePageMovement): number =>
            deltaOf(first) - deltaOf(second),
        )
        .slice(0, GOOGLE_UPDATE_PAGE_LIST_LIMIT),
      biggestGains: movements
        .filter((movement: DibodevGoogleUpdatePageMovement): boolean => deltaOf(movement) > 0)
        .sort(
          (first: DibodevGoogleUpdatePageMovement, second: DibodevGoogleUpdatePageMovement): number =>
            deltaOf(second) - deltaOf(first),
        )
        .slice(0, GOOGLE_UPDATE_PAGE_LIST_LIMIT),
    }
  }

  /**
   * Shortens the link of a page to its path, cut in the middle when it is long.
   * @param {string} pageLink - The full link of the page.
   * @returns {string} The short label (« /blog/recette… »).
   */
  static shortenPageLink(pageLink: string): string {
    let path: string = pageLink

    try {
      const parsed: URL = new URL(pageLink)
      path = decodeURIComponent(`${parsed.pathname}${parsed.search}`)
    } catch {
      path = pageLink
    }
    if (path.length <= PAGE_LABEL_MAXIMUM_LENGTH) {
      return path
    }
    return `${path.slice(0, PAGE_LABEL_HEAD_LENGTH)}…${path.slice(-PAGE_LABEL_TAIL_LENGTH)}`
  }

  /**
   * Builds the fictitious export of the « Try with an example » button: a site that loses about a third of its impressions at the start of the update.
   * @param {DibodevGoogleSearchUpdate} update - The update compared with.
   * @returns {DibodevSearchConsoleExport} The example, with dates and pages in comparison mode.
   */
  static buildExampleExport(update: DibodevGoogleSearchUpdate): DibodevSearchConsoleExport {
    const firstDate: string = this.addDays(update.startDate, -EXAMPLE_DAYS_BEFORE_START)
    const lastDate: string = update.endDate
      ? this.addDays(update.endDate, EXAMPLE_DAYS_AFTER_END)
      : this.addDays(update.startDate, EXAMPLE_DAYS_WHILE_ROLLING_OUT)
    const dailyRows: DibodevSearchConsoleDailyRow[] = []

    for (let offset: number = 0; offset <= this.daysBetween(firstDate, lastDate); offset++) {
      const date: string = this.addDays(firstDate, offset)
      const weekday: number = new Date(`${date}T00:00:00Z`).getUTCDay()
      const isWeekend: boolean = weekday === 0 || weekday === 6
      const wave: number = 1 + EXAMPLE_DAILY_WAVE_HEIGHT * Math.sin(offset * EXAMPLE_DAILY_WAVE_PACE)
      const factor: number = date >= update.startDate ? EXAMPLE_DROP_FACTOR : 1
      const dayImpressions: number = isWeekend ? EXAMPLE_WEEKEND_IMPRESSIONS : EXAMPLE_WEEKDAY_IMPRESSIONS
      const impressions: number = Math.round(dayImpressions * wave * factor)

      dailyRows.push({ date, impressions, clicks: Math.round(impressions * EXAMPLE_DAILY_CLICK_RATE) })
    }
    return {
      dailyRows,
      pageRows: EXAMPLE_PAGES.map(
        ([path, impressionsPrevious, impressionsCurrent]: [string, number, number]): DibodevSearchConsolePageRow => ({
          page: `${EXAMPLE_SITE}${path}`,
          clicksPrevious: Math.round(impressionsPrevious * EXAMPLE_PAGE_CLICK_RATE),
          clicksCurrent: Math.round(impressionsCurrent * EXAMPLE_PAGE_CLICK_RATE),
          impressionsPrevious,
          impressionsCurrent,
        }),
      ),
      hasPageComparison: true,
      recognizedFileCount: 2,
    }
  }

  /**
   * Sums a measure over a window of days placed from the start of the update.
   * @param {Map<string, DibodevSearchConsoleDailyRow>} rowsByDate - The days by date; a missing day counts as zero.
   * @param {string} startDate - The start of the update.
   * @param {number} offsetInDays - Days from the start to the first day of the window.
   * @param {number} lengthInDays - Days in the window.
   * @param {DibodevGoogleUpdateImpactMetric} metric - The measure summed.
   * @returns {number} The sum.
   */
  private static sumWindow(
    rowsByDate: Map<string, DibodevSearchConsoleDailyRow>,
    startDate: string,
    offsetInDays: number,
    lengthInDays: number,
    metric: DibodevGoogleUpdateImpactMetric,
  ): number {
    let total: number = 0

    for (let day: number = 0; day < lengthInDays; day++) {
      total += rowsByDate.get(this.addDays(startDate, offsetInDays + day))?.[metric] ?? 0
    }
    return total
  }

  /**
   * Builds the result of an export that cannot be compared.
   * @param {DibodevGoogleUpdateUnreadableReason} reason - Why.
   * @param {boolean} isRolloutFinished - Whether Google announced the end of the rollout.
   * @returns {DibodevGoogleUpdateImpactResult} The result.
   */
  private static unreadable(
    reason: DibodevGoogleUpdateUnreadableReason,
    isRolloutFinished: boolean,
  ): DibodevGoogleUpdateImpactResult {
    return {
      verdict: 'unreadable',
      provisionalTrend: null,
      unreadableReason: reason,
      metric: 'impressions',
      daysSinceStart: 0,
      changeRatio: null,
      changeBeforeRatio: null,
      currentTotal: 0,
      baselineTotal: 0,
      isRolloutFinished,
      hasWaitedAWeekAfterEnd: false,
    }
  }
}
