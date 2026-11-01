import type { DibodevFreeTemplatePageContent } from '~/core/types/DibodevFreeTemplatePage'
import { CLEANING_SCHEDULE_TEMPLATE_UPDATED_AT } from '~/core/constants/freeTemplates/cleaningSchedule/pageShared'
import {
  CLEANING_BUSINESS_TEMPLATE_PDF_PATH,
  CLEANING_BUSINESS_TEMPLATE_XLSX_PATH,
  CLEANING_COLLECTIVE_AGREEMENT_SOURCE,
  PREVENTION_PLAN_SOURCE,
  WORKING_TIME_MONITORING_SOURCE,
} from '~/core/constants/tools/cleaningBusinessSoftware/pageShared'

export const CLEANING_SCHEDULE_TEMPLATE_CONTENT_EN: DibodevFreeTemplatePageContent = {
  meta: {
    title: 'Cleaning visit schedule: free French Excel template',
    description:
      'Cleaning visit schedule: free French template in Excel and PDF, with a quality inspection sheet. Hours per cleaner and conformity rate calculated. No sign-up.',
    inLanguage: 'en',
    schemaAbout: 'French visit schedule and quality inspection sheet template for cleaning companies',
  },
  breadcrumbLabel: 'Cleaning schedule',
  shareImage: {
    titleLines: ['Cleaning schedule', 'free French template'],
    highlight: 'Cleaning schedule',
    subtitle: 'Visit schedule and quality inspection sheet template in Excel and PDF, hours and conformity calculated',
    badge: 'Free, no sign-up',
    icon: 'sparkles',
    alt: 'Free French cleaning schedule template: visit schedule and quality inspection sheet in Excel and PDF, downloaded without sign-up on dibodev.fr',
  },
  hero: {
    titleBefore: '',
    titleHighlight: 'Cleaning visit schedule',
    titleAfter: ': free French Excel template (+ quality inspection sheet)',
    reassurances: [
      'Schedule + quality inspection sheet',
      'Excel with calculated hours and conformity',
      'No sign-up, no email',
    ],
    aboutTitle: 'About the template',
    description:
      'A weekly visit schedule and a quality inspection sheet ready to fill in, written in French for the French market, for a cleaning company, a team supervisor or a self-employed cleaner. The schedule gives, site by site, the cleaner and their times for each day, then each cleaner’s weekly hours against their contract. The inspection sheet scores a site area by area, with photos of the defects and the customer’s signature.',
    authorIntro: 'Template prepared by',
    authorBio:
      'a business software developer near Rennes, France. I read the French cleaning collective agreement and the clocking rules so that the template’s benchmarks are up to date.',
    updatedAt: CLEANING_SCHEDULE_TEMPLATE_UPDATED_AT,
  },
  downloads: {
    eyebrow: 'Free download',
    lead: 'For cleaning companies, team supervisors and self-employed cleaners working in France. Two files in French, no form to fill in: the PDF prints, the Excel file calculates the hours and the conformity rate.',
    files: [
      {
        label: 'Download the PDF template',
        href: CLEANING_BUSINESS_TEMPLATE_PDF_PATH,
        format: 'PDF, 2 pages, in French',
      },
      {
        label: 'Download the Excel version',
        href: CLEANING_BUSINESS_TEMPLATE_XLSX_PATH,
        format: 'Excel, 2 sheets, calculated hours and conformity, in French',
      },
    ],
    footnote:
      'Free to use and adapt to your company and your contracts. It does not replace reading your collective agreement.',
  },
  contents: {
    anchorId: 'contents',
    eyebrow: 'What the template contains',
    title: 'A visit schedule and a quality inspection sheet, as PDF and Excel',
    intro:
      'The PDF holds both documents on two A4 pages. The Excel file holds them on two sheets, with the weekly hours, the totals per cleaner and per site, then the conformity rate calculated as soon as you type a time or a score.',
    documents: [
      {
        title: 'Visit schedule',
        format: 'Page 1 of the PDF, “Planning des passages” sheet of the Excel file',
        items: [
          'Company header (name, address, phone), week starting, area or team, supervisor (the PDF adds the update date)',
          'Visit table: customer site and address, cleaner, start and end time for each day from Monday to Sunday, weekly hours (12 rows in the PDF, 16 in the Excel file), total planned hours',
          'Hours per cleaner: planned hours against contract hours in the PDF; in the Excel file, automatic sum per cleaner and a flag when a total falls under 16 hours',
          'The Excel file adds total hours per customer site and counts a night visit (22:00 → 06:00) correctly',
          'Site instructions: keys and badges, alarm code, access, opening hours, products and equipment on site, customer contact',
          'Supervisor’s approval (schedule validated), date handed to the cleaners, reminder of the French cleaning collective agreement on part-time work',
        ],
      },
      {
        title: 'Quality inspection sheet',
        format: 'Page 2 of the PDF, “Contrôle qualité” sheet of the Excel file',
        items: [
          'Customer site and address, date and time, inspector, cleaner(s) on site, customer contact and role, contract and visit frequency, type of inspection (scheduled, unannounced or with the customer)',
          'Scale from 1 to 4 (very poor, poor, satisfactory, very satisfactory), area compliant from 3; the threshold can be changed in the Excel file',
          '9 pre-filled areas with their checkpoints (reception, offices, meeting rooms, toilets, kitchen, corridors, lift, windows and mirrors, bins and sorting) and 3 free rows',
          'Per area: score, compliant yes or no (calculated in the Excel file, in green or red), photo number of the defect, corrective action',
          'Result: areas inspected, areas compliant, conformity rate (the Excel file adds the average score out of 4)',
          'Corrective actions and deadline, customer’s remarks, inspector’s and customer’s signatures, reminder to write the sheet and its frequency into the contract',
        ],
      },
    ],
  },
  howToFill: {
    anchorId: 'how-to-fill',
    eyebrow: 'How to fill it in',
    title: 'Fill in the schedule and the inspection sheet in six steps',
    intro:
      'In the Excel file, only the white cells are typed in. The weekly hours, the totals per cleaner and per site, the compliance and the rate are calculated on their own.',
    steps: [
      {
        label: 'Step 1',
        title: 'Your company and the week',
        description:
          'Fill in the header (name, address, phone), the week starting, the area or team and the supervisor, then save the file as your template. Every week starts from that copy.',
      },
      {
        label: 'Step 2',
        title: 'One cleaner per row, their times for each day',
        description:
          'For each site, write the cleaner, then the start and end time of each day (in hh:mm format in the Excel file). Two visits on the same day at the same site: one more row. The Excel file counts the weekly hours, night visits included.',
      },
      {
        label: 'Step 3',
        title: 'Each cleaner’s hours against their contract',
        description:
          'In the PDF, copy each cleaner’s planned hours next to their contract hours. In the Excel file, write their name as in the schedule: the sum is done on its own and a total under 16 hours is flagged.',
      },
      {
        label: 'Step 4',
        title: 'Instructions, approval and handover',
        description:
          'Note for each site the keys, the alarm code, the access and the products on site. The supervisor signs off the validated schedule, and you date its handover to the cleaners.',
      },
      {
        label: 'Step 5',
        title: 'The quality inspection, area by area',
        description:
          'On site, score each area from 1 to 4, photograph each defect and write its number in the “Photo n°” column, then write the corrective action. In the Excel file, “Conforme” and the rate follow.',
      },
      {
        label: 'Step 6',
        title: 'Result, actions and the customer’s signature',
        description:
          'Count the areas inspected and compliant, work out the rate, set a deadline for the corrective actions and take the customer’s remarks. The sheet is signed by both of you and a copy is handed over.',
      },
    ],
  },
  rules: {
    anchorId: 'rules',
    eyebrow: 'What the French rules require',
    title: 'The benchmarks the template already provides',
    intro:
      'Three French rules for cleaning companies go through the schedule and the count of hours. The template keeps a column or a line for each of them.',
    facts: [
      {
        contextLabel: 'Cleaning collective agreement, art. 6.2.4.1',
        title: 'Part-time work of at least 16 hours a week',
        text: 'Unless the employee asks otherwise in writing, a part-time contract counts at least 16 hours a week, with at most 2 work slots a day below 24 hours a week, and 3 above. The template puts each cleaner’s planned hours against their contract, and the Excel file flags a total under 16 hours.',
        sourceName: CLEANING_COLLECTIVE_AGREEMENT_SOURCE.name,
        sourceUrl: CLEANING_COLLECTIVE_AGREEMENT_SOURCE.url,
      },
      {
        contextLabel: 'CNIL rules',
        title: 'On-site clocking, announced before it starts',
        text: 'NFC badge, QR code or phone geolocation: any working-time monitoring system is brought to employees’ attention before it is set up, and the works council (CSE) is consulted from 50 employees. The schedule handed to the cleaners is not one; the day you move to clocking, tell them first.',
        sourceName: WORKING_TIME_MONITORING_SOURCE.name,
        sourceUrl: WORKING_TIME_MONITORING_SOURCE.url,
      },
      {
        contextLabel: 'From 400 hours over 12 months',
        title: 'A written prevention plan at the customer’s premises',
        text: 'Your company and the customer analyse the risks together after a joint inspection of the premises. The prevention plan is written from 400 hours of work over 12 months, or for the dangerous work listed in the order of 19 March 1993. The Excel file’s total hours per site helps you see that threshold coming.',
        sourceName: PREVENTION_PLAN_SOURCE.name,
        sourceUrl: PREVENTION_PLAN_SOURCE.url,
      },
    ],
  },
  faq: {
    eyebrow: 'Frequently asked questions',
    title: 'Cleaning schedule template: your questions',
    questions: [
      {
        question: 'Is the cleaning schedule template really free?',
        answer:
          'Yes. Both files download without sign-up or email address, and you can edit, print and reuse them as much as you want. The only trade-off: a “template by Dibodev” line in the footer, which you may remove.',
      },
      {
        question: 'How many hours a week at least for a part-time cleaner in France?',
        answer:
          '16 hours, unless the employee asks otherwise in writing (French cleaning collective agreement, art. 6.2.4.1), with at most 2 work slots a day below 24 hours a week and 3 above. When working time is averaged over the calendar half-year, a provisional schedule is handed out every month and any change is announced 3 working days in advance. The “Total d’heures par agent” table is there for that check.',
      },
      {
        question: 'Is the quality inspection sheet mandatory?',
        answer:
          'I found no text that requires this report or a proof-of-visit certificate: it is common practice in the trade, which customers expect and which is best written into your contract, with its frequency. The template gives the outline: one score per area, a photo of each defect, the sheet signed with the customer and handed over as a copy.',
      },
      {
        question: 'Can the schedule be used as a clocking record?',
        answer:
          'No. It gives the planned times, not the hours actually worked. If you move to clocking (NFC badge, QR code or phone geolocation), in France the system is brought to employees’ attention before it is set up, and the works council is consulted from 50 employees (CNIL).',
      },
      {
        question: 'How does the Excel version work?',
        answer:
          'In the “Planning des passages” sheet, you type the start and end time of each day in hh:mm format: the weekly hours of each row, the total planned hours, the total per cleaner (with the 16-hour flag) and the total per site are calculated on their own, night visits included. In the “Contrôle qualité” sheet, you score each area from 1 to 4: the “Conforme” column, the conformity rate and the average score follow, from a minimum score of 3 that you can change. Each sheet prints on one A4 page.',
      },
      {
        question: 'And when the sites pile up?',
        answer:
          'An Excel template is enough for one team and a few sites. Beyond that, French cleaning software (PROPRET, PROGESTI, CleanPlus) adds clocking, photos and a customer portal from €29 excl. VAT per month, often plus a price per cleaner. If your organisation falls outside their frame (work slots, contract takeovers, prevention plans), the test on the tool page tells you what to choose.',
      },
    ],
  },
  excelLimits: {
    title: 'When Excel is no longer enough?',
    description:
      'When the schedule is copied out every week, the hours go to payroll by hand and the inspection sheets sleep in a binder, a tool that chains them gives you hours back. Describe your sites and teams to me: I reply within 24 hours, and if off-the-shelf software is enough, I tell you so.',
    button: 'Discuss my project',
    toolPageLinkLabel: 'Compare cleaning business software',
  },
}
