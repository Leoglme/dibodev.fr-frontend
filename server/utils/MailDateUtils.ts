import { DateTime } from 'luxon'
import type { MailLocale } from '~~/server/types/mail/contact'

/** Dates shown in e-mails, in the Paris time zone: next business day and localized formats. */
export class MailDateUtils {
  private static readonly TIME_ZONE: string = 'Europe/Paris'

  /**
   * Returns the current date and time in Paris.
   *
   * @returns {DateTime} Now, in the Europe/Paris time zone.
   */
  public static nowInParis(): DateTime {
    return DateTime.now().setZone(MailDateUtils.TIME_ZONE)
  }

  /**
   * Returns the next business day: the following day from Monday to Thursday, the next Monday from Friday to Sunday.
   *
   * @param {DateTime} date - Starting date.
   * @returns {DateTime} The next business day, at the same time.
   */
  public static getNextBusinessDay(date: DateTime): DateTime {
    const daysToAdd: number = date.weekday >= 5 ? 8 - date.weekday : 1
    return date.plus({ days: daysToAdd })
  }

  /**
   * Formats a date as weekday, day and month in the e-mail language ("jeudi 1er octobre", "Thursday, October 1").
   *
   * @param {DateTime} date - Date to format.
   * @param {MailLocale} locale - Language of the e-mail.
   * @returns {string} The formatted day.
   */
  public static formatWeekdayDayAndMonth(date: DateTime, locale: MailLocale): string {
    if (locale === 'en') {
      return date.setLocale('en').toFormat('cccc, LLLL d')
    }
    if (locale === 'es') {
      return date.setLocale('es').toFormat("cccc d 'de' LLLL")
    }

    const frenchDate: DateTime = date.setLocale('fr')
    const dayOfMonth: string = date.day === 1 ? '1er' : String(date.day)
    return `${frenchDate.toFormat('cccc')} ${dayOfMonth} ${frenchDate.toFormat('LLLL')}`
  }

  /**
   * Formats a date and time in French ("30 septembre 2026 à 14 h 32").
   *
   * @param {DateTime} date - Date to format.
   * @returns {string} The formatted date and time.
   */
  public static formatFrenchDateAndTime(date: DateTime): string {
    return `${date.setLocale('fr').toFormat('d LLLL yyyy')} à ${MailDateUtils.formatFrenchTime(date)}`
  }

  /**
   * Formats a short date and time in French ("30 sept. · 14 h 32").
   *
   * @param {DateTime} date - Date to format.
   * @returns {string} The short date and time.
   */
  public static formatFrenchShortDateAndTime(date: DateTime): string {
    return `${date.setLocale('fr').toFormat('d LLL')} · ${MailDateUtils.formatFrenchTime(date)}`
  }

  /**
   * Formats a time the French way, with non-breaking spaces so it never breaks across lines ("14 h 32").
   *
   * @param {DateTime} date - Date whose time is formatted.
   * @returns {string} The formatted time.
   */
  private static formatFrenchTime(date: DateTime): string {
    return `${date.toFormat('HH')}\u00a0h\u00a0${date.toFormat('mm')}`
  }
}
