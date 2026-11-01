import type { DibodevHostingProviderKey } from '~/core/types/DibodevHostingStatus'
import { HOSTING_PROVIDER_STATUS_SOURCES } from '~/core/constants/hostingStatus/pageShared'

const PARIS_TIME_ZONE: string = 'Europe/Paris'
const MINUTE_MS: number = 60 * 1000
const HOUR_MS: number = 60 * MINUTE_MS
const DAY_MS: number = 24 * HOUR_MS
const RELATIVE_TIME_PREFIX_PATTERN: RegExp = /^(il y a|hace)\s+/i
const RELATIVE_TIME_SUFFIX_PATTERN: RegExp = /\s+ago$/i

/** Formats the dates of the hosting status pages, in the language of the page, and tells which providers can be read. */
export class HostingStatusUtils {
  /**
   * Tells whether a provider publishes a status page this tool can read.
   * @param {DibodevHostingProviderKey} provider - The provider.
   * @returns {boolean} False for o2switch and PlanetHoster, which have none.
   */
  static hasReadableStatusPage(provider: DibodevHostingProviderKey): boolean {
    return HOSTING_PROVIDER_STATUS_SOURCES[provider].sourceKind !== 'none'
  }

  /**
   * Formats a time of day in Paris ("14:05"), the time zone of the visitors of the French pages.
   * @param {string} isoDate - The date.
   * @param {string} locale - The page locale.
   * @returns {string} The time, or an empty string for an unreadable date.
   */
  static formatTime(isoDate: string, locale: string): string {
    const date: Date = new Date(isoDate)

    if (Number.isNaN(date.getTime())) {
      return ''
    }
    return new Intl.DateTimeFormat(locale, { hour: '2-digit', minute: '2-digit', timeZone: PARIS_TIME_ZONE }).format(
      date,
    )
  }

  /**
   * Formats a date with its time ("27 oct., 14:05"), in Paris time.
   * @param {string} isoDate - The date.
   * @param {string} locale - The page locale.
   * @returns {string} The date and time, or an empty string for an unreadable date.
   */
  static formatDateTime(isoDate: string, locale: string): string {
    const date: Date = new Date(isoDate)

    if (Number.isNaN(date.getTime())) {
      return ''
    }
    return new Intl.DateTimeFormat(locale, {
      day: 'numeric',
      month: 'short',
      hour: '2-digit',
      minute: '2-digit',
      timeZone: PARIS_TIME_ZONE,
    }).format(date)
  }

  /**
   * Says how long ago a date is, in words ("3 minutes", "2 hours", "5 days"), in the page language.
   * @param {string} isoDate - The date.
   * @param {string} locale - The page locale.
   * @param {number} now - The current time in milliseconds.
   * @returns {string} The elapsed time, or an empty string for an unreadable date.
   */
  static formatElapsed(isoDate: string, locale: string, now: number): string {
    const time: number = new Date(isoDate).getTime()

    if (Number.isNaN(time)) {
      return ''
    }
    const elapsed: number = Math.max(0, now - time)
    const formatter: Intl.RelativeTimeFormat = new Intl.RelativeTimeFormat(locale, { numeric: 'always', style: 'long' })

    if (elapsed < HOUR_MS) {
      return this.stripRelativeWords(formatter.format(-Math.max(1, Math.round(elapsed / MINUTE_MS)), 'minute'))
    }
    if (elapsed < DAY_MS) {
      return this.stripRelativeWords(formatter.format(-Math.round(elapsed / HOUR_MS), 'hour'))
    }
    return this.stripRelativeWords(formatter.format(-Math.round(elapsed / DAY_MS), 'day'))
  }

  /**
   * Keeps the quantity of a relative time ("il y a 3 minutes" becomes "3 minutes"), so it can follow "depuis".
   * @param {string} relative - The relative time as Intl writes it.
   * @returns {string} The quantity and its unit.
   */
  static stripRelativeWords(relative: string): string {
    return relative.replace(RELATIVE_TIME_PREFIX_PATTERN, '').replace(RELATIVE_TIME_SUFFIX_PATTERN, '').trim()
  }
}
