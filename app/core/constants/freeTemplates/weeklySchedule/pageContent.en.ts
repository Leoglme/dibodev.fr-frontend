import type { DibodevFreeTemplatePageContent } from '~/core/types/DibodevFreeTemplatePage'
import {
  COLLECTIVE_SCHEDULE_POSTING_SOURCE,
  DAILY_REST_SOURCE,
  MAXIMUM_WORKING_HOURS_SOURCE,
  PART_TIME_CHANGE_NOTICE_SOURCE,
  PART_TIME_WORK_SOURCE,
  WEEKLY_SCHEDULE_TEMPLATE_DOCX_PATH,
  WEEKLY_SCHEDULE_TEMPLATE_PDF_PATH,
  WEEKLY_SCHEDULE_TEMPLATE_UPDATED_AT,
  WEEKLY_SCHEDULE_TEMPLATE_XLSX_PATH,
} from '~/core/constants/freeTemplates/weeklySchedule/pageShared'

export const WEEKLY_SCHEDULE_TEMPLATE_CONTENT_EN: DibodevFreeTemplatePageContent = {
  meta: {
    title: 'Weekly schedule: free French template (PDF, Word, Excel)',
    description:
      'Weekly team schedule and printable weekly planner: free French template in PDF, Word and Excel, daily hours, rest and totals calculated. No sign-up.',
    inLanguage: 'en',
    schemaAbout: 'French weekly team schedule and printable one-person weekly planner template',
  },
  breadcrumbLabel: 'Weekly schedule',
  shareImage: {
    titleLines: ['Weekly schedule', 'free French template'],
    highlight: 'Weekly schedule',
    subtitle: 'Team schedule for the week and one-person weekly planner, in PDF, Word and Excel, hours calculated',
    badge: 'Free, no sign-up',
    icon: 'fileText',
    alt: 'Free French weekly schedule template: team schedule from Monday to Sunday and printable weekly planner in PDF, Word and Excel, downloaded without sign-up on dibodev.fr',
  },
  hero: {
    titleBefore: '',
    titleHighlight: 'Weekly schedule',
    titleAfter: ': free French template, Excel, Word and PDF (+ printable weekly planner)',
    reassurances: ['Team schedule + weekly planner', 'Excel that checks rest and hours', 'No sign-up, no email'],
    aboutTitle: 'About the template',
    description:
      'A weekly schedule (planning hebdomadaire), written in French for employers in France, is made before the week: who works which day, from what time to what time, and how many hours that makes against each person’s contract. Page 1 gives it for the whole team, Monday to Sunday, ready to post. Page 2 is a weekly planner (semainier): one person’s week hour by hour, to print and hand to the employee or to organise your own days. The Excel file calculates the hours and flags a day that is too long or a rest that is too short before the schedule goes out.',
    authorIntro: 'Template prepared by',
    authorBio:
      'a business software developer near Rennes, France. At the software publisher Kodeva, I built from scratch Gest-Time, a tool that tracks hours per job site, still used by small and mid-sized businesses. For this template, I read on Légifrance and Service-Public the French rules on posting schedules, rest and part-time work.',
    updatedAt: WEEKLY_SCHEDULE_TEMPLATE_UPDATED_AT,
  },
  downloads: {
    eyebrow: 'Free download',
    lead: 'For shops, restaurants, cleaning companies, practices, associations and any team in France working several shifts, and for anyone who just wants a printable weekly schedule. Three files in French, no form to fill in: the PDF prints, the Excel file calculates and checks, the Word file can be edited freely.',
    files: [
      {
        label: 'Download the PDF template',
        href: WEEKLY_SCHEDULE_TEMPLATE_PDF_PATH,
        format: 'PDF, 2 pages, in French',
      },
      {
        label: 'Download the Excel version',
        href: WEEKLY_SCHEDULE_TEMPLATE_XLSX_PATH,
        format: 'Excel, 3 sheets, hours and checks calculated, in French',
      },
      {
        label: 'Download the Word version',
        href: WEEKLY_SCHEDULE_TEMPLATE_DOCX_PATH,
        format: 'Word, 2 pages, editable, in French',
      },
    ],
    footnote:
      'Free to use and adapt to your business and your collective agreement. It does not replace a lawyer’s advice.',
  },
  contents: {
    anchorId: 'contents',
    eyebrow: 'What the template contains',
    title: 'A team schedule, a weekly planner and a summary of the week',
    intro:
      'The PDF holds two A4 pages: the team schedule in landscape, to fit the seven days, then the weekly planner in portrait. The Excel file holds both, links the planner to the schedule, and adds a summary that checks the week before you send it out.',
    documents: [
      {
        title: 'Weekly team schedule',
        format: 'Page 1 of the PDF in landscape, “Planning de l’équipe” sheet of the Excel file',
        items: [
          'Business, team or workplace, week from Monday to Sunday, week number, date drawn up and version number',
          '9 people in rows (15 in the Excel file): name, job, hours set in the contract, then the seven days, with two lines per day for a day split in two periods',
          'In the Excel file, for each day: start, end and break in minutes, and the day’s hours calculated, night shifts included',
          'At the end of the row, the week’s planned total and the gap with the contract, and in the Excel file the days worked, the longest day and the shortest rest between two days',
          'A “Contrôle” (check) column in the Excel file: day over 10 h, week over 48 h, rest under 11 h, total above or below the contract',
          'At the bottom, the people and hours planned each day, the table of changes after release (notice given on, new hours, told by) and the dated, signed and posted box',
        ],
      },
      {
        title: 'One person’s weekly planner',
        format: 'Page 2 of the PDF, “Semainier” sheet of the Excel file',
        items: [
          'Name, job or role, week from Monday to Sunday, week number',
          'A grid from 7 am to 9 pm, one row per hour split into two half-hours in the PDF, one row per half-hour in the Excel file, seven columns from Monday to Sunday',
          'Under the grid, each day’s planned hours and times, and the week’s total',
          'In the Excel file, you pick the person from a list: their start, end and hours come from the schedule, and their working half-hours are coloured',
          'Priorities of the week to tick, appointments, deadlines, what to prepare for the next week, notes',
        ],
      },
      {
        title: 'Summary of the week',
        format: '“Synthèse” sheet of the Excel file, not in the PDF',
        items: [
          'Per person: contract, planned total, gap, days worked, longest day, shortest rest and check',
          'Per day, the people and hours planned, to spot at a glance a Saturday too thin or a Tuesday too busy',
          'For the team, the number of people, the week’s hours and the number of rows to fix',
          'The four landmarks used by the checks, each with the French Labour Code article it comes from',
        ],
      },
    ],
  },
  howToFill: {
    anchorId: 'how-to-fill',
    eyebrow: 'How to fill it in',
    title: 'Fill in the weekly schedule in four steps',
    intro:
      'In the Excel file, only the white and yellow cells are typed in. Hours, totals, checks and the weekly planner update on their own.',
    steps: [
      {
        label: 'Step 1',
        title: 'The team and the week',
        description:
          'Write each person’s name, job and the hours set in their contract. In the Excel file, type the Monday’s date in the yellow cell: the seven dates and the week number follow. Delete the “Exemple” line once you have seen the calculation.',
      },
      {
        label: 'Step 2',
        title: 'Each day’s hours',
        description:
          'For each person, the start and end of each working day, in 08:30 format, and the break in minutes. A split day (9:00 → 12:00 then 15:00 → 19:00) is typed as one period with a 180-minute break. On paper, write R for a rest day, CP for paid leave.',
      },
      {
        label: 'Step 3',
        title: 'Check, then send out',
        description:
          'Before sending it out, look at the “Contrôle” column and the summary: day too long, rest too short, total away from the contract. Date, sign and post the schedule, and print the weekly planner of each person who must receive their hours in writing.',
      },
      {
        label: 'Step 4',
        title: 'A change during the week',
        description:
          'Write it in the table of changes: date of the notice, person, day, old and new hours, how they were told. Move the version to 2, post the corrected schedule before it applies, and respect the notice period of a part-time employee.',
      },
    ],
  },
  rules: {
    anchorId: 'rules',
    eyebrow: 'What the French rules require',
    title: 'What the French Labour Code asks of a schedule before the week',
    intro:
      'Six French rules apply to a team schedule, from posting it to changing it. The template gives each one a box, a check or a reminder; it does not replace a lawyer’s advice or a reading of your collective agreement.',
    facts: [
      {
        contextLabel: 'French Labour Code, D3171-1 to D3171-4',
        title: 'A collective schedule dated, signed and posted',
        text: 'When a whole team works the same hours, the schedule states the start and end of each work period. The employer dates and signs it, then posts it legibly in each workplace concerned. A change is posted before it applies, and a copy of the schedule and its corrections goes in advance to the labour inspectorate. The box at the bottom of page 1 is there for this.',
        sourceName: COLLECTIVE_SCHEDULE_POSTING_SOURCE.name,
        sourceUrl: COLLECTIVE_SCHEDULE_POSTING_SOURCE.url,
      },
      {
        contextLabel: 'French Labour Code, D3171-7',
        title: 'Successive shifts: everyone’s name',
        text: 'With relay, rotating or successive shifts, the named make-up of each shift, temporary workers included, is given by a posted table or by a register kept up to date, open to the labour inspectorate and staff representatives. A weekly schedule with one row per person and per shift answers that question.',
        sourceName: COLLECTIVE_SCHEDULE_POSTING_SOURCE.name,
        sourceUrl: COLLECTIVE_SCHEDULE_POSTING_SOURCE.url,
      },
      {
        contextLabel: 'Maximum hours',
        title: 'No more than 10 hours a day or 48 hours in the week',
        text: 'Actual work does not go over 10 hours a day, save for a waiver, and a collective agreement can raise this to 12 hours. The week stays under 48 hours, and under 44 hours on average over 12 consecutive weeks. Better to see it while planning than to find it in the hours worked: the Excel file warns as you type.',
        sourceName: MAXIMUM_WORKING_HOURS_SOURCE.name,
        sourceUrl: MAXIMUM_WORKING_HOURS_SOURCE.url,
      },
      {
        contextLabel: 'Daily rest',
        title: '11 consecutive hours of rest between two days',
        text: 'An adult employee is entitled to at least 11 consecutive hours of rest between two working days. Some activities or a peak in activity allow a waiver by agreement or with the labour inspectorate’s approval, never below 9 hours. It is the classic trap of closing at night and opening the next morning: the Excel file calculates each person’s shortest rest in the week.',
        sourceName: DAILY_REST_SOURCE.name,
        sourceUrl: DAILY_REST_SOURCE.url,
      },
      {
        contextLabel: 'Part-time, L3123-31 and L3123-24',
        title: 'A change of hours announced 7 working days ahead',
        text: 'For a part-time employee, any change in how their hours are spread across the days of the week or the weeks of the month is notified at least 7 working days ahead. A company or branch agreement can set a shorter notice, never under 3 working days, with compensation for the employee. The table of changes keeps the date of each notice.',
        sourceName: PART_TIME_CHANGE_NOTICE_SOURCE.name,
        sourceUrl: PART_TIME_CHANGE_NOTICE_SOURCE.url,
      },
      {
        contextLabel: 'Part-time contract',
        title: 'Each working day’s hours, given in writing',
        text: 'The part-time contract sets how the hours of each working day are given to the employee in writing, and the cases where their spread can change. If the change is not provided for in the contract, the employee’s refusal is neither misconduct nor grounds for dismissal. The weekly planner, printed or sent each week, is a simple medium for that writing.',
        sourceName: PART_TIME_WORK_SOURCE.name,
        sourceUrl: PART_TIME_WORK_SOURCE.url,
      },
    ],
  },
  faq: {
    eyebrow: 'Frequently asked questions',
    title: 'Weekly schedule: your questions',
    questions: [
      {
        question: 'Is the weekly schedule template really free?',
        answer:
          'Yes. The three files download without sign-up or email address, and you can edit, print and reuse them as much as you want. The only trade-off: a “template by Dibodev” line in the footer, which you may remove.',
      },
      {
        question: 'Weekly schedule or weekly planner: what is the difference?',
        answer:
          'The weekly schedule shows a whole team on one page: one row per person, one column per day. The weekly planner (semainier) shows one person, hour by hour, with room for their appointments and tasks. The first is for organising and posting, the second for handing each person their hours or keeping your own diary for the week.',
      },
      {
        question: 'Schedule or time sheet: which one do I need?',
        answer:
          'Often both, as they do not say the same thing. The schedule says what is planned, before the week. The time sheet (fiche de pointage) records what was done, day after day, and it is the one that counts overtime: if the actual hours differ from the schedule, the time sheet prevails. The time sheet template is in the free templates.',
      },
      {
        question: 'Must the team schedule be posted in France?',
        answer:
          'When the whole team follows the same collective schedule, yes: dated, signed by the employer, posted legibly in the workplace, and each change posted before it applies (French Labour Code, D3171-1 to D3171-3). When hours differ from one person to the next, each person’s working time is recorded every day and totalled every week (D3171-8): the schedule still helps to give notice, but it does not replace that record.',
      },
      {
        question: 'How much notice must I give for a schedule change?',
        answer:
          'For a part-time employee, at least 7 working days, unless a collective agreement sets another period, never under 3 working days (L3123-31 and L3123-24). If your business spreads working time over several weeks under an agreement, changes to the programme follow the seven-day notice or the agreement’s (D3171-5). Your collective agreement may add its own rules: read it.',
      },
      {
        question: 'How many hours can I plan per day and per week at most?',
        answer:
          '10 hours of actual work a day, save for a waiver, and 12 at most if your collective agreement provides for it; 48 hours in one week and 44 hours on average over 12 weeks; and at least 11 consecutive hours of rest between two days. The Excel file checks each person’s day, week and rest as soon as you type their hours.',
      },
      {
        question: 'How do I print a weekly schedule?',
        answer:
          'Use page 2 of the PDF, the weekly planner: one A4 page in portrait, from 7 am to 9 pm, seven columns from Monday to Sunday, to print as many times as there are weeks. It works as a printable weekly schedule for an employee as well as a personal diary. In the Excel file, the “Semainier” sheet fits on one A4 page and fills itself from the team schedule.',
      },
      {
        question: 'How does the Excel version work?',
        answer:
          'Three sheets. “Planning de l’équipe”: you type the Monday in the yellow cell, then each person’s start, end and break for each day; the hours, totals, gap with the contract and the “Contrôle” column are calculated, night shifts included. “Semainier”: you pick a person from the list, and their hours and coloured working time show up. “Synthèse” reviews the week per person and per day.',
      },
      {
        question: 'And when the schedule has to be redone every week?',
        answer:
          'An Excel file works well for one team and a standard week. When absences, replacements and last-minute changes force you to redo everything and then tell everyone, software that links the schedule, messages to staff and time tracking saves that time. If you run a cleaning company, the test on the tool page tells you which one to choose for your staff’s schedules.',
      },
    ],
  },
  excelLimits: {
    title: 'When Excel is no longer enough?',
    description:
      'When the schedule is copied out every Monday, each change goes out by text message one by one and nobody knows which version is the right one, a tool that holds the schedule, tells the team and keeps the history gives you hours back. Describe your organisation to me: I reply within 24 hours, and if off-the-shelf software is enough, I tell you so.',
    button: 'Discuss my project',
    toolPageLinkLabel: 'Compare cleaning business software',
  },
}
