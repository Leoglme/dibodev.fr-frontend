import type { DibodevFreeTemplatePageContent } from '~/core/types/DibodevFreeTemplatePage'
import { INTERVENTION_SLIP_TEMPLATE_UPDATED_AT } from '~/core/constants/freeTemplates/interventionSlip/pageShared'
import {
  DOCUMENT_RETENTION_SOURCE,
  FIELD_SERVICE_TEMPLATE_PDF_PATH,
  FIELD_SERVICE_TEMPLATE_XLSX_PATH,
  ITINERANT_TRAVEL_TIME_SOURCE,
  VEHICLE_GEOLOCATION_SOURCE,
} from '~/core/constants/tools/fieldServiceSoftware/pageShared'
import { HOME_REPAIR_QUOTE_RULES_SOURCE } from '~/core/constants/tools/officialSources'

export const INTERVENTION_SLIP_TEMPLATE_CONTENT_EN: DibodevFreeTemplatePageContent = {
  meta: {
    title: 'Intervention slip: free French template (PDF + Excel)',
    description:
      'Intervention slip: free French template in PDF and Excel, with a daily round sheet. Parts, labour, hours and kilometres calculated. No sign-up.',
    inLanguage: 'en',
    schemaAbout: 'French intervention slip and daily round sheet template for field technicians',
  },
  breadcrumbLabel: 'Intervention slip',
  shareImage: {
    titleLines: ['Intervention slip', 'free French template'],
    highlight: 'Intervention slip',
    subtitle:
      'Intervention slip and daily round sheet in PDF and Excel, calculated totals and durations, French wording',
    badge: 'Free, no sign-up',
    icon: 'clipboard',
    alt: 'Free French intervention slip template: intervention slip and daily round sheet in PDF and Excel, downloaded without sign-up on dibodev.fr',
  },
  hero: {
    titleBefore: '',
    titleHighlight: 'Intervention slip',
    titleAfter: ': free French template, PDF and Excel (+ round sheet)',
    reassurances: ['Slip + daily round sheet', 'Excel with calculated totals and durations', 'No sign-up, no email'],
    aboutTitle: 'About the template',
    description:
      'An intervention slip and a daily round sheet ready to fill in, written in French for the French market, for a sole repair technician, an after-sales department or a small team of field technicians. The slip is signed at the customer’s, with the job type, the findings, parts, labour and next steps. The round sheet follows a technician’s day: planned jobs, times, statuses and mileage.',
    authorIntro: 'Template prepared by',
    authorBio:
      'a business software developer near Rennes, France. I read the French rules on keeping slips, on the quote before a call-out, on travel time and on geolocation so that the wording is up to date.',
    updatedAt: INTERVENTION_SLIP_TEMPLATE_UPDATED_AT,
  },
  downloads: {
    eyebrow: 'Free download',
    lead: 'For field technicians, repairers, after-sales departments and every company working at its customers’ premises in France. Two files in French, no form to fill in: the PDF prints, the Excel file calculates.',
    files: [
      {
        label: 'Download the PDF template',
        href: FIELD_SERVICE_TEMPLATE_PDF_PATH,
        format: 'PDF, 2 pages, in French',
      },
      {
        label: 'Download the Excel version',
        href: FIELD_SERVICE_TEMPLATE_XLSX_PATH,
        format: 'Excel, 2 sheets, calculated durations and totals, in French',
      },
    ],
    footnote: 'Free to use and adapt to your business. It does not replace the advice of your accountant.',
  },
  contents: {
    anchorId: 'contents',
    eyebrow: 'What the template contains',
    title: 'An intervention slip and a daily round sheet, as PDF and Excel',
    intro:
      'The PDF holds both documents on two A4 pages. The Excel file holds them on two sheets, with the slip totals, the duration of each job and the day’s mileage calculated as soon as you type.',
    documents: [
      {
        title: 'Intervention slip',
        format: 'Page 1 of the PDF, “Bon d’intervention” sheet of the Excel file',
        items: [
          'Company header (name, address, phone, SIRET), intervention number, date, technician, contract or request number',
          'Customer and site: company or name, on-site contact, address, equipment (make, model, serial number), location, installation date or last job',
          'Job type in 4 boxes (breakdown, preventive maintenance, installation and commissioning, inspection), arrival and departure times, outbound travel time on the PDF',
          'Free area for the customer’s request, the findings, the work done, the readings taken and photo references',
          'Parts and labour: description, quantity, unit price excl. VAT, VAT, total excl. VAT, with a labour line at the hourly rate and a travel costs line, then total excl. and incl. VAT (the Excel file adds the incl. VAT per line and 20% VAT by default)',
          'Next steps in 4 boxes (completed, new job to schedule, quote to draw up, part to order), customer’s remarks, customer and technician signatures',
        ],
      },
      {
        title: 'Daily round sheet',
        format: 'Page 2 of the PDF, “Feuille de tournée” sheet of the Excel file',
        items: [
          'Technician, date, vehicle, mileage at departure and arrival, departure and return times (the Excel file calculates the day’s mileage)',
          'The day’s jobs: planned time, customer and address, reason, arrival, departure, status, km, on 8 lines (10 in the Excel file, which calculates the duration of each one)',
          'One-letter status: T completed, R return needed (part, quote, absent), A cancelled',
          'Day total: job and travel hours to write in on the PDF, hours and mileage added up in the Excel file',
          'Parts taken from the van or to restock, notes for the office (quotes to draw up, jobs to reschedule, incidents)',
          'Technician signature, manager’s initials, French wording on itinerant travel time and vehicle geolocation',
        ],
      },
    ],
  },
  howToFill: {
    anchorId: 'how-to-fill',
    eyebrow: 'How to fill it in',
    title: 'Fill in the intervention slip in five steps',
    intro:
      'In the Excel file, only the white cells are typed in. The slip totals, the durations and the mileage of the round are calculated on their own.',
    steps: [
      {
        label: 'Step 1',
        title: 'Your details, once and for all',
        description:
          'Fill in the header (name, address, phone, SIRET) on both sheets and save the file as your template. Every slip starts from that copy, with a running intervention number.',
      },
      {
        label: 'Step 2',
        title: 'The customer, the site and the equipment',
        description:
          'Company or name, on-site contact, address, then the equipment with make, model, serial number and installation date: that is what lets you find the history of an appliance at the next visit.',
      },
      {
        label: 'Step 3',
        title: 'The job type and the findings',
        description:
          'Tick breakdown, maintenance, installation or inspection, note the arrival and departure times, then describe the customer’s request, the findings, the work done and the readings taken.',
      },
      {
        label: 'Step 4',
        title: 'Parts, labour and next steps',
        description:
          'One line per part with its quantity and unit price excl. VAT, then labour at the hourly rate and travel. The Excel file calculates the totals excl. and incl. VAT. Tick the next steps and have the customer sign: work received.',
      },
      {
        label: 'Step 5',
        title: 'The round sheet, as the day goes',
        description:
          'Technician, vehicle, mileage at departure, then one line per job with the planned time, arrival, departure, status and km. In the evening, parts to restock, notes for the office and the manager’s initials.',
      },
    ],
  },
  rules: {
    anchorId: 'rules',
    eyebrow: 'What the French rules require',
    title: 'The wording the template already provides',
    intro:
      'Four French rules for field service companies go through the intervention slip and the round sheet. The template keeps a box or a line for each of them.',
    facts: [
      {
        contextLabel: '10 years',
        title: 'The signed intervention slip, kept for ten years',
        text: 'Order, delivery and intervention slips, customer and supplier invoices: supporting documents kept for 10 years from the end of the financial year. The slip signed by the customer is the proof of the work done, and the template says so in its footer.',
        sourceName: DOCUMENT_RETENTION_SOURCE.name,
        sourceUrl: DOCUMENT_RETENTION_SOURCE.url,
      },
      {
        contextLabel: 'Since 1 April 2017',
        title: 'A quote before any call-out at a private home',
        text: 'Breakdown, repair or maintenance at a private home (plumbing, electricity, locksmithing, HVAC…): a detailed quote handed over before the work, whatever the amount, then an invoice from €25 incl. VAT. The intervention slip comes after the quote, it does not replace it.',
        sourceName: HOME_REPAIR_QUOTE_RULES_SOURCE.name,
        sourceUrl: HOME_REPAIR_QUOTE_RULES_SOURCE.url,
      },
      {
        contextLabel: 'Cour de cassation, 23 November 2022',
        title: 'The trip to the first customer is working time',
        text: 'For an itinerant employee who stays at the employer’s disposal during the trip, travel between home and the first or last customer counts as working time. The round sheet records the departure time, the arrival at each customer and the return time.',
        sourceName: ITINERANT_TRAVEL_TIME_SOURCE.name,
        sourceUrl: ITINERANT_TRAVEL_TIME_SOURCE.url,
      },
      {
        contextLabel: 'CNIL rules',
        title: 'Vehicle geolocation, within limits',
        text: 'Limited purposes (proving a job, sending the nearest technician, safety), employees informed, never outside working hours nor to check speed, data kept 2 months (1 year to prove a job). The mileage on the round sheet, for its part, is written down by the technician.',
        sourceName: VEHICLE_GEOLOCATION_SOURCE.name,
        sourceUrl: VEHICLE_GEOLOCATION_SOURCE.url,
      },
    ],
  },
  faq: {
    eyebrow: 'Frequently asked questions',
    title: 'Intervention slip template: your questions',
    questions: [
      {
        question: 'Is the intervention slip template really free?',
        answer:
          'Yes. Both files download without sign-up or email address, and you can edit, print and reuse them as much as you want. The only trade-off: a “template by Dibodev” line in the footer, which you may remove.',
      },
      {
        question: 'Does the intervention slip replace the quote or the invoice in France?',
        answer:
          'No. At a private home, a detailed quote is handed over before any breakdown, repair or maintenance job, whatever the amount. The signed slip then proves the work was done and received, and the invoice follows, with, between businesses, the due date, the late-payment penalty rate and the €40 flat recovery fee. The template recalls these three documents in its footer.',
      },
      {
        question: 'What should an intervention slip contain?',
        answer:
          'Everything that proves, a year later, what was done, where, when and by whom: the company, the customer and the site, the date and times, the equipment, the job type, the findings and the work, parts and labour, the next steps, the customer’s name and signature. The template lists these sections in that order.',
      },
      {
        question: 'How does the Excel version work?',
        answer:
          'On the “Bon d’intervention” sheet, you type the quantity and unit price excl. VAT of each line; the line totals excl. and incl. VAT (20% VAT by default, editable), then the slip total excl. VAT, the VAT and the total incl. VAT are calculated on their own. On the “Feuille de tournée” sheet, arrival and departure times typed as hh:mm give the duration of each job, the bottom of the table adds up hours and mileage, and the day’s mileage comes from the odometer readings. Both sheets print on one A4 page.',
      },
      {
        question: 'Does technicians’ travel time count as working hours in France?',
        answer:
          'For an itinerant employee who stays at the employer’s disposal during the trip, travel between home and the first or last customer is working time (Cour de cassation, 23 November 2022). The round sheet provides the departure time, arrival and departure at each customer and the return time, with a box for total travel hours on the PDF.',
      },
      {
        question: 'And when the intervention slips pile up?',
        answer:
          'An Excel template is enough for a few jobs a week and one or two technicians. Beyond that, French field service software (Organilog, Synchroteam, Kizeo Forms) schedules the rounds and has the slip signed on the technician’s phone, from €15 excl. VAT per user per month at Kizeo Forms (no scheduling) and €19 at Organilog. If your organisation falls outside their frame (maintenance contracts, van stock, several branches), the test on the tool page tells you what to choose.',
      },
    ],
  },
  excelLimits: {
    title: 'When Excel is no longer enough?',
    description:
      'When intervention slips, round sheets and invoices get copied from one file to the next, a tool that chains them gives you hours back. Describe your business to me: I reply within 24 hours, and if off-the-shelf software is enough, I tell you so.',
    button: 'Discuss my project',
    toolPageLinkLabel: 'Compare field service software',
  },
}
