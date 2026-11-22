import type {
  DibodevWorkHoursDayEntry,
  DibodevWorkHoursDayResult,
  DibodevWorkHoursPay,
  DibodevWorkHoursSummaryFormat,
  DibodevWorkHoursWeekResult,
} from '~/core/types/DibodevWorkHours'
import {
  BREAK_THRESHOLD_WORK_HOURS,
  DAILY_MAXIMUM_WORK_HOURS,
  FIRST_TIER_OVERTIME_HOURS,
  FIRST_TIER_OVERTIME_RATE_PERCENT,
  LEGAL_WEEKLY_HOURS,
  MINIMUM_BREAK_MINUTES,
  NEXT_TIER_OVERTIME_RATE_PERCENT,
  WEEKLY_MAXIMUM_WORK_HOURS,
} from '~/core/constants/workHoursCalculator/pageShared'
import { QuizTextUtils } from '~/core/utils/QuizTextUtils'

const MINUTES_PER_HOUR: number = 60
const MINUTES_PER_DAY: number = 24 * MINUTES_PER_HOUR
const TIME_REGEX: RegExp = /^(\d{1,2}):(\d{2})$/
const DECIMAL_COMMA_REGEX: RegExp = /,/g
const WHITESPACE_REGEX: RegExp = /\s+/g

/** Daily and weekly working time, hours beyond the weekly reference and their pay with the default rates of French law. */
export class WorkHoursUtils {
  /**
   * Reads a `HH:MM` time as minutes after midnight ("08:30" gives 510).
   * @param {string} time - The time as typed.
   * @returns {number | null} The minutes, or null when the time is empty or invalid.
   */
  public static parseTimeToMinutes(time: string): number | null {
    const match: RegExpExecArray | null = TIME_REGEX.exec(time.trim())

    if (!match) {
      return null
    }
    const hours: number = Number(match[1])
    const minutes: number = Number(match[2])

    if (hours > 23 || minutes > 59) {
      return null
    }
    return hours * MINUTES_PER_HOUR + minutes
  }

  /**
   * Reads a number typed with a comma or a dot ("24,5" gives 24.5).
   * @param {string} text - The field text.
   * @returns {number} The number, 0 when empty, negative or invalid.
   */
  public static parsePositiveNumber(text: string): number {
    const value: number = Number(text.replace(WHITESPACE_REGEX, '').replace(DECIMAL_COMMA_REGEX, '.'))

    return Number.isFinite(value) && value > 0 ? value : 0
  }

  /**
   * Computes the worked time of one day: departure minus arrival minus break, the departure counted the next day when earlier than the arrival.
   * @param {DibodevWorkHoursDayEntry} entry - The times of the day.
   * @returns {DibodevWorkHoursDayResult} The worked minutes and the checks of the day.
   */
  public static computeDay(entry: DibodevWorkHoursDayEntry): DibodevWorkHoursDayResult {
    const arrivalMinutes: number | null = WorkHoursUtils.parseTimeToMinutes(entry.arrivalTime)
    const departureMinutes: number | null = WorkHoursUtils.parseTimeToMinutes(entry.departureTime)
    const breakMinutes: number = Math.round(WorkHoursUtils.parsePositiveNumber(entry.breakMinutesText))
    const emptyDay: DibodevWorkHoursDayResult = {
      dayKey: entry.dayKey,
      workedMinutes: 0,
      breakMinutes,
      hasBothTimes: false,
      crossesMidnight: false,
      isBreakLongerThanShift: false,
      exceedsDailyMaximum: false,
      hasShortBreak: false,
    }

    if (arrivalMinutes === null || departureMinutes === null) {
      return emptyDay
    }
    const crossesMidnight: boolean = departureMinutes < arrivalMinutes
    const shiftMinutes: number = crossesMidnight
      ? departureMinutes + MINUTES_PER_DAY - arrivalMinutes
      : departureMinutes - arrivalMinutes
    const workedMinutes: number = Math.max(0, shiftMinutes - breakMinutes)

    return {
      ...emptyDay,
      workedMinutes,
      hasBothTimes: true,
      crossesMidnight,
      isBreakLongerThanShift: shiftMinutes > 0 && breakMinutes >= shiftMinutes,
      exceedsDailyMaximum: workedMinutes > DAILY_MAXIMUM_WORK_HOURS * MINUTES_PER_HOUR,
      hasShortBreak:
        workedMinutes >= BREAK_THRESHOLD_WORK_HOURS * MINUTES_PER_HOUR && breakMinutes < MINIMUM_BREAK_MINUTES,
    }
  }

  /**
   * Computes the week: total, hours up to the reference, hours beyond it split into the first eight and the following ones.
   * @param {DibodevWorkHoursDayEntry[]} entries - The seven days, Monday first.
   * @param {number} referenceHours - Weekly reference in hours (35 by default, 0 means 35).
   * @returns {DibodevWorkHoursWeekResult} The totals of the week.
   */
  public static computeWeek(entries: DibodevWorkHoursDayEntry[], referenceHours: number): DibodevWorkHoursWeekResult {
    const days: DibodevWorkHoursDayResult[] = entries.map(
      (entry: DibodevWorkHoursDayEntry): DibodevWorkHoursDayResult => WorkHoursUtils.computeDay(entry),
    )
    const totalMinutes: number = days.reduce(
      (sum: number, day: DibodevWorkHoursDayResult): number => sum + day.workedMinutes,
      0,
    )
    const referenceMinutes: number = Math.round(
      (referenceHours > 0 ? referenceHours : LEGAL_WEEKLY_HOURS) * MINUTES_PER_HOUR,
    )
    const beyondReferenceMinutes: number = Math.max(0, totalMinutes - referenceMinutes)
    const firstTierMinutes: number = Math.min(beyondReferenceMinutes, FIRST_TIER_OVERTIME_HOURS * MINUTES_PER_HOUR)

    return {
      days,
      totalMinutes,
      workedDayCount: days.filter((day: DibodevWorkHoursDayResult): boolean => day.workedMinutes > 0).length,
      referenceMinutes,
      regularMinutes: totalMinutes - beyondReferenceMinutes,
      beyondReferenceMinutes,
      firstTierMinutes,
      nextTierMinutes: beyondReferenceMinutes - firstTierMinutes,
      exceedsReference: beyondReferenceMinutes > 0,
      exceedsWeeklyMaximum: totalMinutes > WEEKLY_MAXIMUM_WORK_HOURS * MINUTES_PER_HOUR,
    }
  }

  /**
   * Whether the default rates of the law apply to the hours beyond the reference: only when the reference is the legal 35 hours.
   * @param {DibodevWorkHoursWeekResult} week - The computed week.
   * @returns {boolean} True when the reference is 35 hours.
   */
  public static isLegalReference(week: DibodevWorkHoursWeekResult): boolean {
    return week.referenceMinutes === LEGAL_WEEKLY_HOURS * MINUTES_PER_HOUR
  }

  /**
   * Computes the gross pay of the week: normal hours at the hourly rate, the first eight hours beyond 35 at +25 %, the following ones at +50 %.
   * @param {DibodevWorkHoursWeekResult} week - The computed week, with the legal 35-hour reference.
   * @param {number} hourlyRate - Gross hourly rate in euros.
   * @returns {DibodevWorkHoursPay} The amounts, not rounded.
   */
  public static computePay(week: DibodevWorkHoursWeekResult, hourlyRate: number): DibodevWorkHoursPay {
    const regularAmount: number = (week.regularMinutes / MINUTES_PER_HOUR) * hourlyRate
    const firstTierAmount: number =
      (week.firstTierMinutes / MINUTES_PER_HOUR) * hourlyRate * (1 + FIRST_TIER_OVERTIME_RATE_PERCENT / 100)
    const nextTierAmount: number =
      (week.nextTierMinutes / MINUTES_PER_HOUR) * hourlyRate * (1 + NEXT_TIER_OVERTIME_RATE_PERCENT / 100)

    return {
      regularAmount,
      firstTierAmount,
      nextTierAmount,
      totalAmount: regularAmount + firstTierAmount + nextTierAmount,
    }
  }

  /**
   * Writes minutes as hours and minutes with the template of the language ("{hours} h {minutes}" gives "7 h 05").
   * @param {number} minutes - The duration in minutes.
   * @param {string} template - Template with `{hours}` and `{minutes}`.
   * @returns {string} The duration.
   */
  public static formatDuration(minutes: number, template: string): string {
    return QuizTextUtils.fillTemplate(template, {
      hours: String(Math.floor(minutes / MINUTES_PER_HOUR)),
      minutes: String(minutes % MINUTES_PER_HOUR).padStart(2, '0'),
    })
  }

  /**
   * Writes minutes as decimal hours with two decimals (450 minutes give "7,50" in French).
   * @param {number} minutes - The duration in minutes.
   * @param {string} numberLocale - Locale of the numbers.
   * @returns {string} The decimal hours.
   */
  public static formatDecimalHours(minutes: number, numberLocale: string): string {
    return new Intl.NumberFormat(numberLocale, { minimumFractionDigits: 2, maximumFractionDigits: 2 }).format(
      minutes / MINUTES_PER_HOUR,
    )
  }

  /**
   * Writes an amount in euros with cents.
   * @param {number} amount - The amount.
   * @param {string} numberLocale - Locale of the numbers.
   * @returns {string} The amount.
   */
  public static formatAmount(amount: number, numberLocale: string): string {
    return new Intl.NumberFormat(numberLocale, { style: 'currency', currency: 'EUR' }).format(amount)
  }

  /**
   * Fills the `{duration}` and `{decimal}` placeholders of a summary line.
   * @param {number} minutes - The duration in minutes.
   * @param {DibodevWorkHoursSummaryFormat} format - Templates and locale.
   * @returns {Record<string, string>} The two values.
   */
  private static durationValues(minutes: number, format: DibodevWorkHoursSummaryFormat): Record<string, string> {
    return {
      duration: WorkHoursUtils.formatDuration(minutes, format.durationTemplate),
      decimal: WorkHoursUtils.formatDecimalHours(minutes, format.numberLocale),
    }
  }

  /**
   * Writes the plain-text summary of the week copied by the visitor: one line per day, the total, the hours beyond the reference and the pay.
   * @param {DibodevWorkHoursDayEntry[]} entries - The seven days as typed.
   * @param {DibodevWorkHoursWeekResult} week - The computed week.
   * @param {DibodevWorkHoursPay | null} pay - The pay, or null when no rate applies.
   * @param {DibodevWorkHoursSummaryFormat} format - Day names, templates and locale.
   * @returns {string} The summary, lines separated by line breaks.
   */
  public static buildSummaryText(
    entries: DibodevWorkHoursDayEntry[],
    week: DibodevWorkHoursWeekResult,
    pay: DibodevWorkHoursPay | null,
    format: DibodevWorkHoursSummaryFormat,
  ): string {
    const dayLines: string[] = week.days.map((day: DibodevWorkHoursDayResult, index: number): string => {
      const entry: DibodevWorkHoursDayEntry | undefined = entries[index]
      const dayLabel: string = format.dayLabels[day.dayKey]

      if (!entry || !day.hasBothTimes) {
        return QuizTextUtils.fillTemplate(format.wording.restDayTemplate, { day: dayLabel })
      }
      return QuizTextUtils.fillTemplate(format.wording.dayLineTemplate, {
        day: dayLabel,
        arrival: entry.arrivalTime,
        departure: entry.departureTime,
        break: String(day.breakMinutes),
        ...WorkHoursUtils.durationValues(day.workedMinutes, format),
      })
    })
    const lines: string[] = [
      format.wording.title,
      '',
      ...dayLines,
      '',
      QuizTextUtils.fillTemplate(
        format.wording.totalTemplate,
        WorkHoursUtils.durationValues(week.totalMinutes, format),
      ),
      QuizTextUtils.fillTemplate(format.wording.beyondReferenceTemplate, {
        ...WorkHoursUtils.durationValues(week.beyondReferenceMinutes, format),
        reference: WorkHoursUtils.formatDuration(week.referenceMinutes, format.durationTemplate),
        firstTier: WorkHoursUtils.formatDuration(week.firstTierMinutes, format.durationTemplate),
        nextTier: WorkHoursUtils.formatDuration(week.nextTierMinutes, format.durationTemplate),
      }),
    ]

    if (pay) {
      lines.push(
        QuizTextUtils.fillTemplate(format.wording.regularPayTemplate, {
          amount: WorkHoursUtils.formatAmount(pay.regularAmount, format.numberLocale),
        }),
        QuizTextUtils.fillTemplate(format.wording.firstTierPayTemplate, {
          amount: WorkHoursUtils.formatAmount(pay.firstTierAmount, format.numberLocale),
        }),
        QuizTextUtils.fillTemplate(format.wording.nextTierPayTemplate, {
          amount: WorkHoursUtils.formatAmount(pay.nextTierAmount, format.numberLocale),
        }),
        QuizTextUtils.fillTemplate(format.wording.totalPayTemplate, {
          amount: WorkHoursUtils.formatAmount(pay.totalAmount, format.numberLocale),
        }),
      )
    }
    lines.push('', format.wording.footer)
    return lines.join('\n')
  }
}
