import type { DashboardDelta, DashboardScoreLevel, DashboardTone } from '~/core/types/Dashboard'

/** French formatting helpers of the back-office: numbers, dates, relative times and variations. */
export class DashboardFormatUtils {
  private static readonly MINUTE_MS: number = 60_000
  private static readonly HOUR_MS: number = 3_600_000
  private static readonly DAY_MS: number = 86_400_000

  /**
   * Formats a number the French way (thin spaces for thousands, comma for decimals).
   *
   * @param {number} value - The number to format.
   * @param {number} fractionDigits - Number of decimals to keep.
   * @returns {string} The formatted number.
   */
  public static formatNumber(value: number, fractionDigits: number = 0): string {
    return value.toLocaleString('fr-FR', {
      minimumFractionDigits: fractionDigits,
      maximumFractionDigits: fractionDigits,
    })
  }

  /**
   * Formats a 0-1 ratio as a French percentage number (without the % sign).
   *
   * @param {number} ratio - The ratio between 0 and 1.
   * @param {number} fractionDigits - Number of decimals to keep.
   * @returns {string} The percentage, e.g. "0,23".
   */
  public static formatPercent(ratio: number, fractionDigits: number = 1): string {
    return DashboardFormatUtils.formatNumber(ratio * 100, fractionDigits)
  }

  /**
   * Parses a date string safely.
   *
   * @param {string | null | undefined} iso - An ISO date or datetime.
   * @returns {Date | null} The date, or null when missing or invalid.
   */
  public static parseDate(iso: string | null | undefined): Date | null {
    if (!iso) return null
    const date: Date = new Date(iso)
    return Number.isNaN(date.getTime()) ? null : date
  }

  /**
   * Formats a date as "27 sept." (with the year when it is not the current one).
   *
   * @param {string | null | undefined} iso - An ISO date or datetime.
   * @returns {string} The short date, or an em dash when missing.
   */
  public static formatShortDate(iso: string | null | undefined): string {
    const date: Date | null = DashboardFormatUtils.parseDate(iso)
    if (!date) return '—'
    const sameYear: boolean = date.getFullYear() === new Date().getFullYear()
    return date.toLocaleDateString('fr-FR', {
      day: 'numeric',
      month: 'short',
      ...(sameYear ? {} : { year: 'numeric' }),
    })
  }

  /**
   * Formats a date as "27 septembre 2026".
   *
   * @param {string | null | undefined} iso - An ISO date or datetime.
   * @returns {string} The long date, or an em dash when missing.
   */
  public static formatLongDate(iso: string | null | undefined): string {
    const date: Date | null = DashboardFormatUtils.parseDate(iso)
    if (!date) return '—'
    return date.toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' })
  }

  /**
   * Formats a datetime as "27 sept., 06:38".
   *
   * @param {string | null | undefined} iso - An ISO datetime.
   * @returns {string} The date and time, or an em dash when missing.
   */
  public static formatDateTime(iso: string | null | undefined): string {
    const date: Date | null = DashboardFormatUtils.parseDate(iso)
    if (!date) return '—'
    return `${DashboardFormatUtils.formatShortDate(iso)}, ${date.toLocaleTimeString('fr-FR', {
      hour: '2-digit',
      minute: '2-digit',
    })}`
  }

  /**
   * Formats a datetime as "jeu. 1 oct. à 9:00", for planned publications.
   *
   * @param {string | null | undefined} iso - An ISO datetime.
   * @returns {string} The weekday, date and time, or an em dash when missing.
   */
  public static formatPlannedDate(iso: string | null | undefined): string {
    const date: Date | null = DashboardFormatUtils.parseDate(iso)
    if (!date) return '—'
    const day: string = date.toLocaleDateString('fr-FR', { weekday: 'short', day: 'numeric', month: 'short' })
    const time: string = `${date.getHours()}:${String(date.getMinutes()).padStart(2, '0')}`
    return `${day} à ${time}`
  }

  /**
   * Formats how long ago something happened ("à l’instant", "il y a 12 min", "il y a 3 h", "hier", "le 27 sept.").
   *
   * @param {string | null | undefined} iso - An ISO datetime.
   * @param {number} now - Reference timestamp (defaults to now).
   * @returns {string} The relative time, or an em dash when missing.
   */
  public static formatRelative(iso: string | null | undefined, now: number = Date.now()): string {
    const date: Date | null = DashboardFormatUtils.parseDate(iso)
    if (!date) return '—'
    const elapsed: number = now - date.getTime()
    if (elapsed < DashboardFormatUtils.MINUTE_MS) return 'à l’instant'
    if (elapsed < DashboardFormatUtils.HOUR_MS) {
      return `il y a ${Math.floor(elapsed / DashboardFormatUtils.MINUTE_MS)} min`
    }
    if (elapsed < DashboardFormatUtils.DAY_MS) return `il y a ${Math.floor(elapsed / DashboardFormatUtils.HOUR_MS)} h`
    if (elapsed < 2 * DashboardFormatUtils.DAY_MS) return 'hier'
    return `le ${DashboardFormatUtils.formatShortDate(iso)}`
  }

  /**
   * Returns today's date as YYYY-MM-DD in local time.
   *
   * @returns {string} Today's ISO date.
   */
  public static todayIso(): string {
    const now: Date = new Date()
    return `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')}`
  }

  /**
   * Builds a percentage variation between two values.
   *
   * @param {number} current - Value of the period.
   * @param {number} previous - Value of the previous period.
   * @param {boolean} higherIsBetter - Whether a rise is good news.
   * @returns {DashboardDelta | null} The variation, or null when the previous value is zero.
   */
  public static percentDelta(current: number, previous: number, higherIsBetter: boolean = true): DashboardDelta | null {
    if (previous <= 0) return null
    const value: number = ((current - previous) / previous) * 100
    const rounded: number = Math.round(value)
    return {
      value: rounded,
      text: `${Math.abs(rounded)} %`,
      favourable: rounded === 0 ? null : higherIsBetter ? rounded > 0 : rounded < 0,
    }
  }

  /**
   * Builds a variation expressed in points (click-through rate) or places (average position).
   *
   * @param {number} difference - Current minus previous value.
   * @param {'pt' | 'place'} unit - Unit of the variation.
   * @param {boolean} higherIsBetter - Whether a rise is good news (false for positions).
   * @returns {DashboardDelta} The variation.
   */
  public static absoluteDelta(difference: number, unit: 'pt' | 'place', higherIsBetter: boolean): DashboardDelta {
    const rounded: number = Math.round(difference * 100) / 100
    const absolute: number = Math.abs(rounded)
    const digits: number = unit === 'pt' ? 2 : 1
    const suffix: string = unit === 'pt' ? ' pt' : absolute >= 2 ? ' places' : ' place'
    return {
      // A smaller position is a better one: the arrow points up when places are gained.
      value: unit === 'place' ? -rounded : rounded,
      text: `${DashboardFormatUtils.formatNumber(absolute, digits)}${suffix}`,
      favourable: Math.abs(rounded) < 0.005 ? null : higherIsBetter ? rounded > 0 : rounded < 0,
    }
  }

  /**
   * Lowercases a text and strips its accents so a search ignores case and accents.
   *
   * @param {string} text - Raw text.
   * @returns {string} The text ready to compare.
   */
  public static toSearchableText(text: string): string {
    return text
      .toLowerCase()
      .normalize('NFD')
      .replace(/\p{Diacritic}/gu, '')
  }

  /**
   * Level of a score out of 100: good from the threshold, average from 50, poor below, empty when not measured.
   *
   * @param {number | null} score - Score from 0 to 100.
   * @param {number} goodThreshold - Score from which the level is good.
   * @returns {DashboardScoreLevel} The level.
   */
  public static scoreLevel(score: number | null, goodThreshold: number = 90): DashboardScoreLevel {
    if (score === null) return 'empty'
    if (score >= goodThreshold) return 'good'
    if (score >= 50) return 'average'
    return 'poor'
  }

  /**
   * Tone of an average Google position: top 3, first page, second page or further.
   *
   * @param {number} position - Average position.
   * @returns {DashboardTone} The badge tone.
   */
  public static positionTone(position: number): DashboardTone {
    if (position <= 3) return 'green'
    if (position <= 10) return 'cyan'
    if (position <= 20) return 'amber'
    return 'neutral'
  }

  /**
   * Word count of a Markdown body (links count by their label only).
   *
   * @param {string} markdown - The Markdown source.
   * @returns {number} Number of words.
   */
  public static countWords(markdown: string): number {
    const text: string = markdown.replace(/\]\([^)]*\)/g, ']').replace(/[#>*_`[\]-]/g, ' ')
    const words: string[] = text.split(/\s+/).filter((word: string): boolean => word.length > 0)
    return words.length
  }

  /**
   * Singular or plural form of a French noun.
   *
   * @param {number} count - The count.
   * @param {string} singular - Singular form.
   * @param {string} plural - Plural form (defaults to singular + s).
   * @returns {string} The count followed by the right form, e.g. "3 articles".
   */
  public static plural(count: number, singular: string, plural: string = `${singular}s`): string {
    return `${DashboardFormatUtils.formatNumber(count)} ${Math.abs(count) >= 2 ? plural : singular}`
  }
}
