import type { DibodevFreeTemplatePageContent } from '~/core/types/DibodevFreeTemplatePage'
import {
  DAILY_MAXIMUM_WORK_SOURCE,
  OVERTIME_RATE_SOURCE,
  TIME_CLOCK_PRIVACY_SOURCE,
  TIME_CLOCK_SHEET_TEMPLATE_DOCX_PATH,
  TIME_CLOCK_SHEET_TEMPLATE_PDF_PATH,
  TIME_CLOCK_SHEET_TEMPLATE_UPDATED_AT,
  TIME_CLOCK_SHEET_TEMPLATE_XLSX_PATH,
  WORKING_HOURS_DISPUTE_SOURCE,
  WORKING_TIME_DAILY_RECORD_SOURCE,
  WORKING_TIME_RECORDS_RETENTION_SOURCE,
} from '~/core/constants/freeTemplates/timeClockSheet/pageShared'

export const TIME_CLOCK_SHEET_TEMPLATE_CONTENT_EN: DibodevFreeTemplatePageContent = {
  meta: {
    title: 'Timesheet: free French template (PDF, Word, Excel)',
    description:
      'Timesheet: free French template in PDF, Word and Excel. Clock-in, break, clock-out, daily and weekly hours calculated, overtime, monthly summary. No sign-up.',
    inLanguage: 'en',
    schemaAbout: 'French weekly timesheet of working hours and monthly summary template',
  },
  breadcrumbLabel: 'Timesheet',
  shareImage: {
    titleLines: ['Timesheet', 'free French template'],
    highlight: 'Timesheet',
    subtitle: 'Weekly time clock sheet and monthly summary, in PDF, Word and Excel, hours and overtime calculated',
    badge: 'Free, no sign-up',
    icon: 'clipboard',
    alt: 'Free French timesheet template: weekly clocking of working hours and monthly summary in PDF, Word and Excel, downloaded without sign-up on dibodev.fr',
  },
  hero: {
    titleBefore: '',
    titleHighlight: 'Timesheet',
    titleAfter: ': free French template, Excel, Word and PDF (week + monthly summary)',
    reassurances: ['Weekly timesheet + monthly summary', 'Excel that calculates overtime', 'No sign-up, no email'],
    aboutTitle: 'About the template',
    description:
      'A timesheet (fiche de pointage) written in French for employers in France, to note day after day an employee’s arrival time, break and departure time, then count the hours of the week and those above 35 hours. The monthly summary brings the weeks together for payroll. An attendance sheet says who was there; a timesheet says how many hours each person worked, and it is the one used to count overtime.',
    authorIntro: 'Template prepared by',
    authorBio:
      'a business software developer near Rennes, France. I built from scratch, at the software publisher Kodeva, a tool that tracks hours per job site (Gest-Time), still used by small and mid-sized businesses. For this template, I read the French Labour Code articles on counting working hours.',
    updatedAt: TIME_CLOCK_SHEET_TEMPLATE_UPDATED_AT,
  },
  downloads: {
    eyebrow: 'Free download',
    lead: 'For small businesses in France that still count hours on paper or in a spreadsheet: shops, restaurants, cleaning, building trades, associations. Three files in French, no form to fill in: the PDF prints and is filled in by hand, the Excel file calculates the hours, the Word file can be edited freely.',
    files: [
      {
        label: 'Download the PDF template',
        href: TIME_CLOCK_SHEET_TEMPLATE_PDF_PATH,
        format: 'PDF, 2 pages, in French',
      },
      {
        label: 'Download the Excel version',
        href: TIME_CLOCK_SHEET_TEMPLATE_XLSX_PATH,
        format: 'Excel, 3 sheets, calculated hours, in French',
      },
      {
        label: 'Download the Word version',
        href: TIME_CLOCK_SHEET_TEMPLATE_DOCX_PATH,
        format: 'Word, 2 pages, editable, in French',
      },
    ],
    footnote:
      'Free to use and adapt to your business and your collective agreement. It does not replace the advice of a lawyer or of your payroll provider.',
  },
  contents: {
    anchorId: 'contents',
    eyebrow: 'What the template contains',
    title: 'One timesheet per week, one summary per month',
    intro:
      'The PDF fits on two A4 pages: the weekly sheet, filled in every day, and the monthly summary, filled in from the weekly sheets. The Excel file holds both and adds a settings sheet for the hours set in the contract and the overtime rates.',
    documents: [
      {
        title: 'Weekly timesheet',
        format: 'Page 1 of the PDF, “Fiche de la semaine” sheet of the Excel file',
        items: [
          'Company header (name, address, SIRET), employee’s name, job or department, week from Monday to Sunday, hours set in the contract',
          'Seven lines, Monday to Sunday: date, arrival, break start, break end, departure, break length, hours of the day, notes (absence, lateness, travel)',
          'In the Excel file, a “Contrôle” (check) column for each day: missing time, break outside working hours, more than 10 hours in the day, break under 20 minutes once work reaches 6 hours, shift that runs past midnight',
          'Weekly total, hours above the contract hours, hours above 35 split between the first 8 and the following ones, warning above 48 hours',
          'Absences of the week in hours: paid leave, sickness or work accident, compensatory rest or RTT day, public holiday off, other',
          'Signatures of the employee (“I certify the hours noted are accurate”) and of the manager, reminder of the French Labour Code articles on counting hours and maximum durations',
        ],
      },
      {
        title: 'Monthly summary',
        format: 'Page 2 of the PDF, “Récapitulatif du mois” sheet of the Excel file',
        items: [
          'Employee’s name, month and year, contract hours, full time or part time',
          'Six week lines (a month touches up to six): hours worked, normal hours, overtime at the first and second rate, hours above the contract hours, absences with their code',
          'Monthly total and, in the Excel file, a payroll summary: normal hours, overtime per rate, absences, average per week',
          'Monthly checks to tick on the PDF: no day above 10 hours, no week above 48 hours, 44 hours at most on average over 12 weeks, breaks, signed sheets, hours sent to payroll',
          'Absence codes: CP, M, AT, RC, RTT, F, CSS, FO, A, picked from a list in the Excel file',
          'Signatures of the employee and the manager, date the summary is closed',
        ],
      },
      {
        title: 'Settings',
        format: '“Réglages” sheet of the Excel file',
        items: [
          'Weekly hours set in the contract in a yellow cell: 35 by default, the contract hours for a part-time employee',
          'Overtime rates in yellow cells: 25% and 50% by default, to change if a collective agreement sets others',
          'Minimum break length (20 minutes by default) and fixed French Labour Code benchmarks: 35 hours, 8 hours at the first rate, 10 hours a day, 48 hours a week',
          'For each value, the French Labour Code article it comes from',
        ],
      },
    ],
  },
  howToFill: {
    anchorId: 'how-to-fill',
    eyebrow: 'How to fill it in',
    title: 'Fill in the timesheet in four steps',
    intro:
      'In the Excel file, only the white and yellow cells are typed in. The break length, the hours of each day, the weekly total and the overtime are calculated on their own.',
    steps: [
      {
        label: 'Step 1',
        title: 'The settings, once per employee',
        description:
          'In the “Réglages” sheet, type the contract hours (35 for full time) and, if a collective agreement applies, its overtime rates. Then save the file under the employee’s name: every week starts from that copy.',
      },
      {
        label: 'Step 2',
        title: 'Every day, four times',
        description:
          'Arrival, break start, break end, departure, in the 08:30 format. Write them down on the day, not in advance. The “Contrôle” column flags a forgotten time, a break that is too short or a day over 10 hours.',
      },
      {
        label: 'Step 3',
        title: 'At the end of the week, the total and the signatures',
        description:
          'The weekly total and the hours above 35 show under the table. Note the absences in hours, print the sheet, have it signed by the employee then by the manager, and keep it.',
      },
      {
        label: 'Step 4',
        title: 'At the end of the month, the summary',
        description:
          'Copy the total of each weekly sheet onto its line of the “Récapitulatif du mois”: normal hours and overtime per rate are calculated week by week. Add the absences with their code, then send the summary to payroll.',
      },
    ],
  },
  rules: {
    anchorId: 'rules',
    eyebrow: 'What the French rules require',
    title: 'The rules the template already follows',
    intro:
      'Six rules of the French Labour Code and of the CNIL, the French data protection authority, go through the clocking of hours. The template keeps a column, a calculation or a line for each of them; it does not replace a lawyer’s advice in a dispute.',
    facts: [
      {
        contextLabel: 'French Labour Code, art. D3171-8',
        title: 'A count every day, a summary every week',
        text: 'When the employees of a workshop, department or team do not all follow the same posted collective schedule, each one’s working time is counted every day, by noting the start and end time of each work period or the number of hours worked, and summed up every week. That is exactly page 1 of the template: one line per day, one total per week.',
        sourceName: WORKING_TIME_DAILY_RECORD_SOURCE.name,
        sourceUrl: WORKING_TIME_DAILY_RECORD_SOURCE.url,
      },
      {
        contextLabel: 'For one year',
        title: 'The sheets stay available to the labour inspectorate',
        text: 'The employer keeps available to the labour inspectorate, for one year, the documents used to count the hours worked by each employee, individual schedules included. Signed weekly sheets and monthly summaries, filed by month and by employee, are part of them.',
        sourceName: WORKING_TIME_RECORDS_RETENTION_SOURCE.name,
        sourceUrl: WORKING_TIME_RECORDS_RETENTION_SOURCE.url,
      },
      {
        contextLabel: 'Without an agreement',
        title: 'Above 35 hours, 25% then 50%',
        text: 'Every hour worked above 35 hours in the week is an overtime hour, counted week by week. Without a collective agreement, the first 8 (from the 36th to the 43rd hour) are paid 25% more, the following ones 50% more. A company or industry agreement may set other rates, never below 10% (art. L3121-33): the template takes them from its settings.',
        sourceName: OVERTIME_RATE_SOURCE.name,
        sourceUrl: OVERTIME_RATE_SOURCE.url,
      },
      {
        contextLabel: 'French Labour Code, art. L3121-16 and L3121-18',
        title: 'A 20-minute break from 6 hours, 10 hours a day at most',
        text: 'Once the day’s work reaches 6 hours, the employee is entitled to a break of at least 20 consecutive minutes. Actual working time does not exceed 10 hours a day, save for a waiver or an emergency, nor 48 hours in a week (art. L3121-20). The Excel file checks the break and the day, and warns above 48 hours.',
        sourceName: DAILY_MAXIMUM_WORK_SOURCE.name,
        sourceUrl: DAILY_MAXIMUM_WORK_SOURCE.url,
      },
      {
        contextLabel: 'In a dispute',
        title: 'The employer must be able to show the hours actually worked',
        text: 'If an employee disputes their hours, the employer gives the judge the evidence of the hours actually worked, and the employee brings their own; the judge decides on both. An automatic recording system must be reliable and tamper-proof. A sheet filled in on the day and signed every week by both sides is worth more than a table rebuilt from memory at the end of the month.',
        sourceName: WORKING_HOURS_DISPUTE_SOURCE.name,
        sourceUrl: WORKING_HOURS_DISPUTE_SOURCE.url,
      },
      {
        contextLabel: 'CNIL',
        title: 'A time clock, yes; biometrics, no',
        text: 'A system to check working hours is allowed if it stays proportionate. For the CNIL, a biometric time clock (fingerprint, face recognition) or one that photographs the employee at each clock-in is excessive. Each employee is informed beforehand, and staff representatives are informed or consulted; the data used to track working time is kept at most 5 years in archive.',
        sourceName: TIME_CLOCK_PRIVACY_SOURCE.name,
        sourceUrl: TIME_CLOCK_PRIVACY_SOURCE.url,
      },
    ],
  },
  faq: {
    eyebrow: 'Frequently asked questions',
    title: 'Timesheet: your questions',
    questions: [
      {
        question: 'Is the timesheet template really free?',
        answer:
          'Yes. All three files download without sign-up or email address, and you can edit, print and reuse them as much as you want. The only trade-off: a “template by Dibodev” line in the footer, which you may remove.',
      },
      {
        question: 'Is a timesheet mandatory in France?',
        answer:
          'The French Labour Code sets no form, but it does require a count: as soon as your employees do not all follow the same posted collective schedule, each one’s working time is noted every day and summed up every week (art. D3171-8). Even with a shared schedule, a record of the hours actually worked protects you: in a dispute, the employer has to bring the evidence of those hours (art. L3171-4). Paper, Excel or time clock, the format is up to you.',
      },
      {
        question: 'Timesheet or attendance sheet: what is the difference?',
        answer:
          'An attendance sheet says who was there, on a given day or at a meeting. A timesheet notes when each person arrived, took their break and left, to count their working hours. It is the only one of the two that lets you calculate overtime and answer the labour inspectorate on working time.',
      },
      {
        question: 'How do I calculate the hours worked in a day?',
        answer:
          'Hours of the day = departure time − arrival time − break length. Arrival at 8:00, break from 12:00 to 13:00, departure at 17:30: 9 h 30 on site minus a 1-hour break, so 8 h 30, or 8.5 hours in decimal. For payroll, convert the minutes: 15 min = 0.25 h, 30 min = 0.5 h, 45 min = 0.75 h. The Excel file does this for each day.',
      },
      {
        question: 'How do I calculate overtime from the timesheet?',
        answer:
          'Week by week, never over the month: whatever goes beyond 35 hours in the week is overtime. Without a collective agreement, hours 36 to 43 are paid 25% more, the following ones 50% more: a 40.5-hour week gives 5.5 hours at 25%. For a part-time employee, the hours beyond the contract are “heures complémentaires”, with their own rules (art. L3123-8): the template shows them under “above the contract hours”.',
      },
      {
        question: 'How long should timesheets be kept?',
        answer:
          'At least one year: that is how long the employer keeps the documents counting each employee’s hours available to the labour inspectorate (art. D3171-16). For time clock data, the CNIL accepts keeping it in archive for up to 5 years. File the signed sheets and summaries by employee and by month.',
      },
      {
        question: 'Can I install a time clock?',
        answer:
          'Yes, if the system stays proportionate. The CNIL considers excessive a biometric time clock (fingerprint, face recognition) or one that takes a photo at each clock-in, and asks to limit the data to what is needed. Tell each employee before it starts (purpose, recipients, retention period) and inform or consult your staff representatives.',
      },
      {
        question: 'How does the Excel version work?',
        answer:
          'Three sheets. “Fiche de la semaine”: you type the Monday, then the arrival, break and departure of each day in the 08:30 format; the break, the hours of the day, the total and the overtime per rate are calculated, and the “Contrôle” column flags omissions and excesses. “Récapitulatif du mois” takes the total of each week. “Réglages” holds the contract hours and the rates. A shift that runs past midnight (22:00 → 06:00) is not calculated: the Excel file flags it, count it by hand.',
      },
      {
        question: 'And when clocking a whole team becomes a chore?',
        answer:
          'One sheet per employee and per week stays manageable for a few people. Beyond that, retyping each sheet into payroll, chasing signatures and spotting forgotten breaks takes hours every month: time clock software linked to the schedule and to payroll saves that time. If you run a cleaning business, the test on the tool page tells you which one to choose for scheduling and clocking your cleaners.',
      },
    ],
  },
  excelLimits: {
    title: 'When Excel is no longer enough?',
    description:
      'When timesheets come back late, get retyped one by one into payroll and overtime is recalculated by hand at the end of every month, a tool that links clocking, scheduling and payroll gives you hours back. Describe your organisation to me: I reply within 24 hours, and if off-the-shelf software is enough, I tell you so.',
    button: 'Discuss my project',
    toolPageLinkLabel: 'Compare cleaning business software',
  },
}
