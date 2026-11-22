export type DibodevWorkHoursDayKey = 'monday' | 'tuesday' | 'wednesday' | 'thursday' | 'friday' | 'saturday' | 'sunday'

/** Times as typed in the `HH:MM` fields; the break is kept as typed and read as minutes. */
export type DibodevWorkHoursDayEntry = {
  dayKey: DibodevWorkHoursDayKey
  arrivalTime: string
  departureTime: string
  breakMinutesText: string
}

/** `crossesMidnight` is true when the departure is earlier than the arrival: the shift ends the next day. */
export type DibodevWorkHoursDayResult = {
  dayKey: DibodevWorkHoursDayKey
  workedMinutes: number
  breakMinutes: number
  hasBothTimes: boolean
  crossesMidnight: boolean
  isBreakLongerThanShift: boolean
  exceedsDailyMaximum: boolean
  hasShortBreak: boolean
}

/** `firstTierMinutes` are the first eight hours beyond the reference, `nextTierMinutes` the ones after. */
export type DibodevWorkHoursWeekResult = {
  days: DibodevWorkHoursDayResult[]
  totalMinutes: number
  workedDayCount: number
  referenceMinutes: number
  regularMinutes: number
  beyondReferenceMinutes: number
  firstTierMinutes: number
  nextTierMinutes: number
  exceedsReference: boolean
  exceedsWeeklyMaximum: boolean
}

export type DibodevWorkHoursPay = {
  regularAmount: number
  firstTierAmount: number
  nextTierAmount: number
  totalAmount: number
}

/** Templates of the copied summary; they use `{day}`, `{arrival}`, `{departure}`, `{break}`, `{duration}`, `{decimal}`, `{reference}`, `{firstTier}`, `{nextTier}` and `{amount}`. */
export type DibodevWorkHoursSummaryWording = {
  title: string
  dayLineTemplate: string
  restDayTemplate: string
  totalTemplate: string
  beyondReferenceTemplate: string
  regularPayTemplate: string
  firstTierPayTemplate: string
  nextTierPayTemplate: string
  totalPayTemplate: string
  footer: string
}

/** Everything the copied summary needs that is not computed: day names, formats and the language of the numbers. */
export type DibodevWorkHoursSummaryFormat = {
  dayLabels: Record<DibodevWorkHoursDayKey, string>
  durationTemplate: string
  numberLocale: string
  wording: DibodevWorkHoursSummaryWording
}

export type DibodevWorkHoursCopyStatus = 'idle' | 'copied' | 'failed'
