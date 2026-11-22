import type { DibodevWorkHoursCalculatorPageContent } from '~/core/types/DibodevWorkHoursCalculatorPage'
import { TIME_CLOCK_SHEET_TEMPLATE_ROUTE_NAME } from '~/core/constants/freeTemplates/timeClockSheet/pageShared'
import { WEEKLY_SCHEDULE_TEMPLATE_ROUTE_NAME } from '~/core/constants/freeTemplates/weeklySchedule/pageShared'
import {
  DAILY_MAXIMUM_WORK_SOURCE,
  DAILY_REST_SOURCE,
  FULL_TIME_MAXIMUM_DURATIONS_SOURCE,
  OVERTIME_DEFAULT_RATES_SOURCE,
  OVERTIME_SERVICE_PUBLIC_SOURCE,
  OVERTIME_WEEKLY_COUNT_SOURCE,
} from '~/core/constants/workHoursCalculator/pageShared'

export const WORK_HOURS_CALCULATOR_PAGE_EN: DibodevWorkHoursCalculatorPageContent = {
  meta: {
    title: 'Work hours calculator: weekly total and overtime (France)',
    description:
      'Free work hours calculator: arrival, departure and break of each day, weekly total in hours and in decimal, overtime at 25% and 50% under French law.',
    inLanguage: 'en-GB',
    schemaAbout:
      'Calculation of weekly working hours, conversion to decimal hours and overtime under French labour law',
  },
  breadcrumbLabel: 'Work hours calculator',
  numberLocale: 'en-GB',
  shareImage: {
    titleLines: ['Work hours', 'calculator, free'],
    highlight: 'Work hours',
    subtitle: 'Weekly total in hours and in decimal, break deducted, overtime at 25% and 50% under French law',
    badge: 'Free, no sign-up',
    alt: 'Free work hours calculator: weekly total in hours and in decimal, break deducted and overtime under French law, on dibodev.fr',
  },
  hero: {
    titleBefore: '',
    titleHighlight: 'Work hours calculator',
    titleAfter: ' online',
    reassurances: ['Total in hours and in decimal', 'Overtime at 25% and 50%', 'Nothing is saved'],
    aboutTitle: 'About the calculator',
    description:
      'A work hours calculator to count the week of an employee, or your own, from the times of each day: break deducted, night shift counted, total converted to decimal hours for payroll. With the weekly reference and a gross hourly rate, it separates the hours beyond the reference and gives their pay with the increases set by French law when no agreement sets other rates.',
    authorIntro: 'Calculator prepared by',
    authorBio:
      'a business software developer near Rennes, France. I built from scratch, at the software publisher Kodeva, a tool that tracks hours per job site (Gest-Time), still used by small and mid-sized businesses. For this calculator, I read the French Labour Code articles and the Service-Public pages on working time and overtime.',
  },
  calculator: {
    dayLabels: {
      monday: 'Monday',
      tuesday: 'Tuesday',
      wednesday: 'Wednesday',
      thursday: 'Thursday',
      friday: 'Friday',
      saturday: 'Saturday',
      sunday: 'Sunday',
    },
    dayColumnLabel: 'Day',
    arrivalLabel: 'Arrival',
    departureLabel: 'Departure',
    breakLabel: 'Break (min)',
    dayTotalLabel: 'Total',
    nextDayTag: 'ends next day',
    breakTooLongTag: 'break too long',
    referenceLabel: 'Weekly reference (hours per week)',
    referenceHint: '35 h by default, the legal working week in France. Amounts only show with 35 h.',
    hourlyRateLabel: 'Gross hourly rate in euros (optional)',
    hourlyRateHint: 'To show the pay of the hours. It stays in your browser.',
    copyMondayButton: 'Copy Monday to weekdays',
    clearButton: 'Clear all',
    copySummaryButton: 'Copy the summary',
    copiedStatus: 'Summary copied: paste it into an email or a spreadsheet.',
    copyFailedStatus: 'Copying did not work in this browser: write the result down by hand.',
    durationTemplate: '{hours} h {minutes}',
    resultLabel: 'Total of the week',
    emptyResultText: 'Enter the arrival and departure of at least one day: the total updates as you type.',
    decimalTemplate: 'that is {decimal} h in decimal hours',
    regularLabel: 'Hours up to the reference',
    beyondReferenceTemplate: 'Beyond {reference}',
    firstTierLabel: 'First 8 hours beyond',
    nextTierLabel: 'Following hours',
    payTitle: 'Estimated gross pay',
    payRegularLabel: 'Normal hours',
    payFirstTierLabel: 'First 8 overtime hours (+25%)',
    payNextTierLabel: 'Following overtime hours (+50%)',
    payTotalLabel: 'Total of the week',
    payNote:
      'Default rates of article L3121-36 of the French Labour Code, when no agreement sets anything else. Your collective agreement or a company agreement can set other rates, of at least 10%.',
    payUnavailableNote:
      'Amounts only show with the 35 h reference, the legal working week. With another reference the rules change (extra hours of a part-time contract, hours already paid at a higher rate in a 39 h contract): check your contract and your collective agreement.',
    alertsTitle: 'To check',
    dailyMaximumAlertTemplate: '{days}: more than 10 h of actual work, the daily maximum unless a waiver applies.',
    shortBreakAlertTemplate: '{days}: 6 h of work or more with a break shorter than 20 minutes.',
    weeklyMaximumAlert: 'More than 48 h in the week, the maximum unless exceptionally authorised.',
    listConjunction: 'and',
    privacyNote: 'Everything is calculated in your browser: no time or rate is sent or saved.',
    summary: {
      title: 'Summary of the hours of the week',
      dayLineTemplate: '{day}: {arrival} to {departure}, {break} min break, {duration} ({decimal} h)',
      restDayTemplate: '{day}: not worked',
      totalTemplate: 'Total: {duration} ({decimal} h)',
      beyondReferenceTemplate:
        'Beyond {reference}: {duration} ({decimal} h), of which {firstTier} for the first 8 hours and {nextTier} for the following ones',
      regularPayTemplate: 'Normal hours: {amount}',
      firstTierPayTemplate: 'First 8 overtime hours (+25%): {amount}',
      nextTierPayTemplate: 'Following overtime hours (+50%): {amount}',
      totalPayTemplate: 'Estimated gross pay: {amount}',
      footer:
        'Calculated with the work hours calculator of dibodev.fr. Estimate to check against your collective agreement.',
    },
  },
  summary: {
    eyebrow: 'In short',
    text: 'Hours of the day = departure − arrival − break. Add up the seven days, Monday to Sunday, then convert the minutes to decimals by dividing them by 60 (30 min = 0.50 h). In France, every hour beyond 35 h in the week is overtime: without a collective agreement, the first 8 are paid 25% more, the following ones 50% more.',
    dateLabel: 'Rules re-read on 22 November 2026 on Légifrance and Service-Public.',
  },
  howToCount: {
    eyebrow: 'How to count',
    title: 'Counting your hours without mistakes',
    intro:
      'Four points make the difference between a right total and a wrong one: the break, the decimal conversion, the night shift and the week.',
    steps: [
      {
        label: 'The break',
        title: 'Take the break out of the time on site',
        description:
          'Arrival at 8:00, departure at 17:30, a one-hour break: 9 h 30 on site, 8 h 30 of work. If your contract or your collective agreement pays the break, or if you stay at the employer’s disposal during it, leave 0 in the field.',
      },
      {
        label: 'Decimal',
        title: 'Convert minutes to decimals',
        description:
          'Payroll counts in decimal hours: divide the minutes by 60. 15 min = 0.25 h, 30 min = 0.50 h, 45 min = 0.75 h, 20 min = 0.33 h. So 7 h 30 is written 7.50, not 7.30. The calculator shows both.',
      },
      {
        label: 'Midnight',
        title: 'A night shift past midnight',
        description:
          'If the departure time is earlier than the arrival time, the shift ends the next day: 22:00 to 6:00 makes 8 h on site. The calculator counts the whole shift on the arrival day. For a shift starting on Sunday evening, the hours after midnight strictly belong to the next week, which starts on Monday at 0:00.',
      },
      {
        label: 'The week',
        title: 'Compare the week with 35 hours',
        description:
          'Overtime is counted week by week, never over the month: a 40 h week gives 5 overtime hours, even if the next one only has 30, unless an agreement spreads working time over several weeks. Set the reference to the length of your contract to see the hours beyond it.',
      },
    ],
  },
  rules: {
    anchorId: 'rules',
    eyebrow: 'What French law says',
    title: 'Six rules on working time and overtime in France',
    intro:
      'Read on 22 November 2026 on Légifrance and Service-Public, for a full-time employee of the private sector in France. A collective agreement can change several of them: they apply when nothing else is set.',
    facts: [
      {
        contextLabel: 'Labour Code, art. L3121-29',
        title: 'Overtime is counted week by week',
        text: 'The French Labour Code says it in one sentence: overtime is counted per week. Service-Public adds that the week runs from Monday 0:00 to Sunday 24:00 and that the legal working week is 35 hours. That is what the calculator does, Monday to Sunday.',
        sourceName: OVERTIME_WEEKLY_COUNT_SOURCE.name,
        sourceUrl: OVERTIME_WEEKLY_COUNT_SOURCE.url,
      },
      {
        contextLabel: 'Without an agreement, art. L3121-36',
        title: 'Beyond 35 h, 25% then 50%',
        text: 'Without an agreement, each of the first 8 overtime hours of the week, from the 36th to the 43rd, is paid 25% more. The following hours, from the 44th, are paid 50% more. These are the rates the calculator applies when you give an hourly rate.',
        sourceName: OVERTIME_DEFAULT_RATES_SOURCE.name,
        sourceUrl: OVERTIME_DEFAULT_RATES_SOURCE.url,
      },
      {
        contextLabel: 'Agreement',
        title: 'Other rates possible, never below 10%',
        text: 'A collective agreement can set other overtime rates, each of at least 10%, according to Service-Public. Without any agreement, the annual quota is 220 overtime hours per employee. Before paying or claiming hours, read your collective agreement.',
        sourceName: OVERTIME_SERVICE_PUBLIC_SOURCE.name,
        sourceUrl: OVERTIME_SERVICE_PUBLIC_SOURCE.url,
      },
      {
        contextLabel: 'Labour Code, art. L3121-18',
        title: '10 hours of actual work per day at most',
        text: 'Daily actual working time cannot exceed 10 hours, save for a waiver from the labour inspectorate, an emergency or cases set by law. The calculator flags every day above 10 h.',
        sourceName: DAILY_MAXIMUM_WORK_SOURCE.name,
        sourceUrl: DAILY_MAXIMUM_WORK_SOURCE.url,
      },
      {
        contextLabel: 'Full time',
        title: '48 h in one week, 44 h on average over 12 weeks',
        text: 'For a full-time employee aged 18 or over, Service-Public sets the maximum at 48 hours in a single week and 44 hours on average over 12 consecutive weeks. A break of at least 20 consecutive minutes is due once work reaches 6 hours.',
        sourceName: FULL_TIME_MAXIMUM_DURATIONS_SOURCE.name,
        sourceUrl: FULL_TIME_MAXIMUM_DURATIONS_SOURCE.url,
      },
      {
        contextLabel: 'Daily rest',
        title: '11 hours of rest between two working days',
        text: 'Between two working days, an adult employee is entitled to at least 11 consecutive hours of rest. Waivers can shorten it, never below 9 hours. A shift ending at 23:00 means starting again at 10:00 the next day at the earliest.',
        sourceName: DAILY_REST_SOURCE.name,
        sourceUrl: DAILY_REST_SOURCE.url,
      },
    ],
    calloutEmphasizedIntro: 'The calculator does not replace your collective agreement.',
    calloutText:
      'It applies the default rates of French law. A collective or company agreement, a days-based contract, part-time work or working time spread over several weeks change the calculation: check them before paying or claiming hours.',
  },
  faq: {
    eyebrow: 'Frequently asked questions',
    title: 'Work hours calculation: your questions',
    questions: [
      {
        question: 'How do I calculate my working hours?',
        answer:
          'For each day: departure time − arrival time − break. Arrival at 8:30, departure at 17:00, a 45-minute break: 8 h 30 on site, 7 h 45 of work, that is 7.75 hours. Then add up the days from Monday to Sunday to get the week. The calculator on this page does it as you type.',
      },
      {
        question: 'How do I convert minutes to decimal hours?',
        answer:
          'Divide the minutes by 60. 6 min = 0.10 h, 10 min = 0.17 h, 15 min = 0.25 h, 20 min = 0.33 h, 30 min = 0.50 h, 40 min = 0.67 h, 45 min = 0.75 h, 50 min = 0.83 h. The other way round, multiply the decimals by 60: 0.40 h = 24 minutes.',
      },
      {
        question: 'What is 7 h 30 in decimal?',
        answer:
          '7.50 hours: 30 minutes are half an hour, so 0.50. The common mistake is writing 7.30, which is actually 7 h 18. Likewise, 7 h 45 = 7.75, 7 h 20 = 7.33 and 8 h 15 = 8.25.',
      },
      {
        question: 'How do I calculate my overtime?',
        answer:
          'Add up the week, Monday to Sunday, and take away 35 hours. What is left is the overtime of the week under French law. A 41 h 30 week gives 6 h 30 of overtime, all at the first rate. A 45 h week gives 10 overtime hours: 8 at the first rate, 2 at the second. Overtime is counted week by week, never over the month.',
      },
      {
        question: 'What is the overtime pay increase in France?',
        answer:
          'Without an agreement, the law sets 25% for each of the first 8 overtime hours of the week (36th to 43rd) and 50% from the 44th (art. L3121-36 of the Labour Code). A collective agreement can set other rates, of at least 10%. At €12 gross an hour, an hour increased by 25% is worth €15, by 50% €18.',
      },
      {
        question: 'How do I count a night shift past midnight?',
        answer:
          'Count the departure on the next day: from 21:00 to 5:00 makes 8 h on site, not a negative number. In the calculator, just enter the arrival and departure on the same line: a departure earlier than the arrival is counted on the next day, and the line says so.',
      },
      {
        question: 'Does the lunch break count as working time?',
        answer:
          'Usually not: it is taken out of the time on site. It counts as actual work when the employee stays at the employer’s disposal and cannot freely go about their own business, for example if they must answer the phone. Your contract or collective agreement can also pay it. In those cases, leave the break at 0.',
      },
      {
        question: 'What about a part-time employee?',
        answer:
          'In France, hours beyond the length of a part-time contract are not overtime but extra hours (heures complémentaires), with their own rules (art. L3123-8 of the Labour Code). Set the reference to the length of the contract: the calculator shows the hours beyond it, but no amount, because the 25% and 50% rates do not apply.',
      },
      {
        question: 'How many overtime hours can be worked in a year?',
        answer:
          'Without any agreement, the annual quota is 220 overtime hours per employee, according to Service-Public. The maximums still apply every week: 48 hours in one week, 44 hours on average over 12 weeks, 10 hours a day unless a waiver applies.',
      },
      {
        question: 'Does the calculator keep my times?',
        answer:
          'No. Everything is calculated in your browser: no time or hourly rate is sent or saved, and everything is cleared when you close the page. To keep a record, copy the summary or use the free timesheet.',
      },
    ],
  },
  templates: {
    eyebrow: 'Free templates',
    title: 'Keeping a record of the hours of each week',
    intro:
      'The calculator keeps nothing. To keep the hours, have them signed and plan the next week, two free French templates in PDF, Word and Excel, no sign-up.',
    links: [
      {
        routeName: TIME_CLOCK_SHEET_TEMPLATE_ROUTE_NAME,
        title: 'Timesheet',
        description:
          'Arrival, break and departure of each day, weekly total and hours beyond 35 h, monthly summary for payroll.',
        linkLabel: 'See the timesheet',
      },
      {
        routeName: WEEKLY_SCHEDULE_TEMPLATE_ROUTE_NAME,
        title: 'Weekly schedule',
        description: 'Team schedule and printable weekly planner, with daily hours, rest days and totals calculated.',
        linkLabel: 'See the weekly schedule',
      },
    ],
  },
  contactCta: {
    title: 'The hours of a whole team to count every month?',
    description:
      'When timesheets are typed again one by one into payroll and overtime is recalculated by hand at the end of each month, a tool that links clocking in, scheduling and payroll gives you those hours back. Tell me how you work: I answer within 24 h, and if a market software is enough, I tell you.',
    button: 'Discuss my project',
  },
}
