import type { DibodevSoftwareToolPageContent } from '~/core/types/DibodevSoftwareToolPage'
import {
  DOCUMENT_RETENTION_SOURCE,
  FIELD_SERVICE_PAGE_COMPARISON_ROWS_ON_SMALL_SCREENS,
  FIELD_SERVICE_PAGE_PROJECT_SLUG,
  FIELD_SERVICE_PAGE_RELATED_ARTICLE_SLUGS,
  FIELD_SERVICE_PAGE_SCREENSHOT_URL,
  FIELD_SERVICE_PAGE_UPDATED_AT,
  FIELD_SERVICE_TEMPLATE_PDF_PATH,
  FIELD_SERVICE_TEMPLATE_XLSX_PATH,
  INVOICE_MENTIONS_SOURCE,
  ITINERANT_TRAVEL_TIME_SOURCE,
  VEHICLE_GEOLOCATION_SOURCE,
} from '~/core/constants/tools/fieldServiceSoftware/pageShared'
import { E_INVOICING_SOURCE, HOME_REPAIR_QUOTE_RULES_SOURCE } from '~/core/constants/tools/officialSources'

// The page describes the French market (publishers, working-time and invoicing rules): the English text says so instead of adapting it.

export const FIELD_SERVICE_PAGE_CONTENT_EN: DibodevSoftwareToolPageContent = {
  meta: {
    title: 'Field service software in France: scheduling, mobile app, prices',
    description:
      'Field service management software sold in France: 2026 prices (Organilog, Synchroteam, Kizeo Forms, Praxedo…), a free 6-question test and an intervention slip template to download.',
    inLanguage: 'en',
    schemaAbout: 'Field service management software for technicians in France',
  },
  breadcrumbLabel: 'Field service software',
  shareImage: {
    titleLines: ['Which software for', 'your field technicians?'],
    highlight: 'field technicians',
    subtitle:
      'Six questions, 2026 prices of the field service software sold in France and a free intervention slip template',
    badge: 'Free test, in 2 minutes',
    icon: 'clipboard',
    alt: 'Which field service software for your technicians? Free 6-question test, 2026 software prices in France and an intervention slip template, on dibodev.fr',
  },
  hero: {
    titleBefore: 'Which ',
    titleHighlight: 'field service software',
    titleAfter: ' for your technicians?',
    description:
      'Answer six questions about your team, branches and jobs. Maintenance, call-outs, installation or inspections, based on the French market the test tells you which kind of software to choose for your rounds, intervention slips and invoices, and how much to budget.',
    reassurances: ['2 minutes', 'No sign-up, no email', 'Instant result'],
    authorIntro: 'Test designed by',
    authorBio:
      'a business software developer near Rennes, France. At Kodeva I worked on an after-sales app for field technicians and built from scratch time-tracking software per job site, still used by small and mid-sized companies.',
    updatedAt: FIELD_SERVICE_PAGE_UPDATED_AT,
  },
  marketSoftware: {
    anchorId: 'software',
    eyebrow: '2026 public prices',
    title: 'Field service software sold in France and its prices',
    intro:
      'The prices field service and mobile form publishers show on their websites. They mostly depend on the number of technicians and the modules you choose.',
    productColumnLabel: 'Software',
    coverageColumnLabel: 'What it handles',
    priceColumnLabel: 'Public price',
    products: [
      {
        name: 'Organilog',
        coverage:
          'Jobs, schedule, offline mobile app, intervention reports, stock (Pro plan); quotes, invoices and online signature (Business); maintenance ranges (Premium)',
        price: '€19 to €59 per month per user',
        priceCondition:
          'Free and limited Basique plan (72-hour archive); quotes and invoices from the €35 Business plan',
      },
      {
        name: 'Kizeo Forms',
        coverage:
          'Mobile forms and intervention reports, offline mode, photos, automations, API; voice input and OCR in Business; no scheduling',
        price: '€15 to €37 excl. VAT per user per month',
        priceCondition: 'Smart €15 and Business €25 when paid yearly, €22 and €37 monthly; 15-day trial',
      },
      {
        name: 'Synchroteam',
        coverage:
          'Job scheduling and dispatching, mobile app, reports, connectors for Sage, Zoho CRM, Xero and QuickBooks (all features included)',
        price: '€39.49 or €64.79 per user per month',
        priceCondition: 'First admin licence free; route optimisation only in Premium; 14-day trial, no commitment',
      },
      {
        name: 'Batappli',
        coverage:
          'Quotes, invoices, progress invoices, job tracking, maintenance contracts and work orders, stock, user rights (Artisan plan)',
        price: '€79 per month excl. VAT',
        priceCondition: '€869 excl. VAT a year; €19 excl. VAT per month per extra user',
      },
      {
        name: 'Praxedo',
        coverage: 'Field service management for technician teams: schedule, mobile app, reports',
        price: 'On quote',
        priceCondition: 'Prices not published',
      },
    ],
    calloutEmphasizedIntro: 'Before signing:',
    calloutText:
      'run a real day through the software. A call-out taken over the phone, assigned to the nearest technician, the intervention slip signed on their phone in a basement without network, the part taken from the van’s stock, then the invoice sent before leaving, with nothing retyped.',
    calloutFootnote: 'Prices checked on 19 October 2026 on the publishers’ websites. Non-exhaustive list.',
  },
  rules: {
    anchorId: 'rules',
    eyebrow: 'France in 2026',
    title: 'Quotes, invoices, travel time, geolocation: what your software must respect in France in 2026',
    intro:
      'In France, the quote before a call-out, the invoice wording, technicians’ travel time, geolocation and the retention of slips: the rules of a field service company all go through its documents and its schedule. Good software applies them for you.',
    facts: [
      {
        contextLabel: 'Since 1 April 2017',
        title: 'A quote before any call-out at a private home',
        text: 'Breakdown, repair or maintenance at a private home (plumbing, electricity, locksmithing, HVAC…): a detailed quote handed over before the work, whatever the amount, then an invoice from €25 incl. VAT.',
        sourceName: HOME_REPAIR_QUOTE_RULES_SOURCE.name,
        sourceUrl: HOME_REPAIR_QUOTE_RULES_SOURCE.url,
      },
      {
        contextLabel: 'Between businesses',
        title: 'An invoice with due date and penalties',
        text: 'Payment due date, late-payment penalty rate, early-payment discount terms and the €40 flat recovery fee: these mentions appear on every invoice sent to a business customer.',
        sourceName: INVOICE_MENTIONS_SOURCE.name,
        sourceUrl: INVOICE_MENTIONS_SOURCE.url,
      },
      {
        contextLabel: 'Cour de cassation, 23 November 2022',
        title: 'The trip to the first customer is working time',
        text: 'For an itinerant employee who stays at the employer’s disposal during the trip, travel between home and the first or last customer counts as working time and is paid as such.',
        sourceName: ITINERANT_TRAVEL_TIME_SOURCE.name,
        sourceUrl: ITINERANT_TRAVEL_TIME_SOURCE.url,
      },
      {
        contextLabel: 'CNIL rules',
        title: 'Technician geolocation, within limits',
        text: 'Limited purposes (proving a job, sending the nearest technician, safety), employees and staff representatives informed, never outside working hours nor to check speed, data kept 2 months (1 year to prove a job).',
        sourceName: VEHICLE_GEOLOCATION_SOURCE.name,
        sourceUrl: VEHICLE_GEOLOCATION_SOURCE.url,
      },
      {
        contextLabel: '10 years',
        title: 'Slips and invoices kept for ten years',
        text: 'Order, delivery and intervention slips, customer and supplier invoices: supporting documents kept for 10 years from the end of the financial year.',
        sourceName: DOCUMENT_RETENTION_SOURCE.name,
        sourceUrl: DOCUMENT_RETENTION_SOURCE.url,
      },
      {
        contextLabel: '1 September 2027',
        title: 'E-invoicing',
        text: 'Every French company must be able to receive e-invoices since 1 September 2026; small and mid-sized companies will have to issue them from 1 September 2027.',
        sourceName: E_INVOICING_SOURCE.name,
        sourceUrl: E_INVOICING_SOURCE.url,
      },
    ],
    calloutEmphasizedIntro: 'What a custom tool does not replace:',
    calloutText:
      'your accounting software nor your payroll. Invoices go to your accounts (export or Factur-X), technicians’ hours to your payroll software, and the tool plugs into your current tools (CRM, stock, telephony).',
  },
  freeTemplate: {
    anchorId: 'template',
    eyebrow: 'Free template',
    title: 'An intervention slip and a daily round sheet ready to fill in',
    description:
      'The intervention slip for a call-out, maintenance, installation or inspection, with parts, labour and next steps; a technician’s daily round sheet with times, statuses and mileage. In French, as a PDF to fill in by hand or an Excel file with durations and totals calculated.',
    items: [
      'Intervention slip: customer and site, equipment, job type, times, findings and work done, parts and labour, next steps, customer signature',
      'Round sheet: the day’s jobs, arrival and departure times, status, mileage, parts to restock, notes for the office',
      'Up-to-date wording: 10-year retention, quote before a call-out at a private home, itinerant travel time, geolocation under CNIL rules',
    ],
    downloads: [
      { label: 'Download the PDF template', href: FIELD_SERVICE_TEMPLATE_PDF_PATH, format: 'PDF, 2 pages, in French' },
      {
        label: 'Download the Excel version',
        href: FIELD_SERVICE_TEMPLATE_XLSX_PATH,
        format: 'Excel, 2 sheets, calculated durations and totals, in French',
      },
    ],
    footnote: 'Free to use, to adapt to your company. It does not replace your accountant’s advice.',
  },
  comparison: {
    eyebrow: 'The three options',
    title: 'Off-the-shelf software, an extension or a custom tool?',
    intro:
      'Each one has its place. The test points you in a direction; this table shows what you gain and what you accept with each one.',
    criterionLabel: 'Criterion',
    columns: ['Off-the-shelf software', 'Off-the-shelf software + extension', 'Custom tool'],
    rows: [
      {
        label: 'Price',
        cells: [
          { state: 'yes', text: '€15 to €79 per month, usually per user' },
          { state: 'partial', text: 'Your subscription, plus €2,500 to €7,000 paid once' },
          { state: 'partial', text: '€5,000 to €25,000 paid once, plus €100 to €300 per month for maintenance' },
        ],
      },
      {
        label: 'Intervention slips, scheduling, invoices',
        cells: [
          { state: 'yes', text: 'Included with field service publishers (mobile forms alone have no scheduling)' },
          { state: 'yes', text: 'Stay in your current software' },
          { state: 'yes', text: 'Designed around your contracts, rounds and equipment' },
        ],
      },
      {
        label: 'Your rules: contracts, rounds, branches',
        cells: [
          { state: 'partial', text: 'Within the settings the publisher provides' },
          { state: 'yes', text: 'For the points the extension adds' },
          { state: 'yes', text: 'Designed around the way you work' },
        ],
      },
      {
        label: 'Job requests and tracking on your website (customer portal)',
        cells: [
          { state: 'partial', text: 'Often a publisher portal, in its colours' },
          { state: 'yes', text: 'On your website, in your colours' },
          { state: 'yes', text: 'On your website, in your colours' },
        ],
      },
      {
        label: 'Getting started',
        cells: [
          { state: 'yes', text: 'A few days' },
          { state: 'partial', text: '2 to 6 weeks' },
          { state: 'partial', text: '5 to 20 weeks, in stages' },
        ],
      },
      {
        label: 'Your data',
        cells: [
          { state: 'partial', text: 'With the publisher, export depending on the software' },
          { state: 'partial', text: 'Split between the two tools' },
          { state: 'yes', text: 'Yours, code included' },
        ],
      },
    ],
    rowsShownOnSmallScreens: FIELD_SERVICE_PAGE_COMPARISON_ROWS_ON_SMALL_SCREENS,
  },
  project: {
    slug: FIELD_SERVICE_PAGE_PROJECT_SLUG,
    screenshotUrl: FIELD_SERVICE_PAGE_SCREENSHOT_URL,
    showBrowserFrame: true,
    eyebrow: 'Already built',
    title: 'Time-tracking software per job site, already in production',
    description:
      'Gest-Time is the working-time software I built from scratch at Kodeva, during my work-study years. Teams enter their hours by project or job site on a tablet, and managers approve them every week. The same idea tracks the time your technicians spend on each job, travel included.',
    highlights: [
      'Hours entered by job site, designed for tablets',
      'Weekly approval, alerts on missing hours',
      'Reporting by project, Excel and PDF exports',
    ],
    linkLabel: 'See the Gest-Time project',
    imageAlt: 'Gest-Time report: hours, absences and travel time by employee and by week, with Excel export',
    browserBarCaption: 'Gest-Time · hours report by employee',
  },
  faq: {
    eyebrow: 'Frequently asked questions',
    title: 'Field service software: your questions',
    questions: [
      {
        question: 'How much does field service software cost in France?',
        answer:
          'Organilog costs €19 to €59 per month per user (free, limited Basique plan), Kizeo Forms €15 to €37 excl. VAT per user per month, Synchroteam €39.49 or €64.79 per user per month, Batappli €79 excl. VAT per month on the Artisan plan. Praxedo is on quote (prices checked on 19 October 2026). For five technicians, expect €75 to €325 per month depending on the publisher. A custom extension costs €2,500 to €7,000 paid once, a complete tool €5,000 to €25,000, then €100 to €300 per month for maintenance.',
      },
      {
        question: 'Which software for technicians who work without network?',
        answer:
          'Check the offline mode: the round, the customer record and the intervention slip stay available in a basement, a boiler room or a dead zone, and sync when the network is back. Organilog (Pro plan) and Kizeo Forms advertise it; in a custom tool, it is planned from the quote, with photos queued.',
      },
      {
        question: 'Is there free field service software?',
        answer:
          'Organilog offers a free, limited Basique plan (a preview of the modules, 72-hour archive, no support). Kizeo Forms offers a 15-day trial, Synchroteam 14 days. A shared spreadsheet gets a team of two by, but without signatures, photos or history per piece of equipment.',
      },
      {
        question: 'Is an intervention slip signed on a tablet valid?',
        answer:
          'An electronic signature is admissible as evidence; its strength depends on its level (simple, advanced or qualified). For an intervention slip, common practice is a time-stamped simple signature, with the PDF sent to the customer right away, and the slip kept 10 years with the invoice. For a contract or a significant financial commitment, use an advanced or qualified signature.',
      },
      {
        question: 'Can technicians be geolocated in France?',
        answer:
          'Yes, within the frame set by the CNIL: to prove a job, send the nearest technician or secure the vehicle, never to monitor an employee permanently nor outside working hours. Employees are informed, can switch geolocation off outside work, and data is kept 2 months at most (1 year to prove a job).',
      },
      {
        question: 'Does technicians’ travel time count as work in France?',
        answer:
          'For an itinerant employee who stays at the employer’s disposal during the trip (calls, appointments to handle), travel between home and the first or last customer is working time (Cour de cassation, 23 November 2022). Software that time-stamps departure, arrival and return avoids disputes over hours.',
      },
      {
        question: 'Which software for maintenance contracts and recurring visits?',
        answer:
          'Batappli (Artisan plan) handles maintenance contracts and work orders, Organilog schedules recurring jobs and offers maintenance ranges in Premium. If your contracts have their own rules (frequencies per piece of equipment, parts included, deadline penalties), a custom tool schedules the visits, generates the report and invoices the contract when due.',
      },
      {
        question: 'Does this software suit professional kitchen or refrigeration maintenance?',
        answer:
          'Yes, as long as the equipment record accepts your data (refrigerant, power, serial number, installation date) and the intervention slip carries your checkpoints. Check it in a demo. A custom tool starts directly from your equipment and your mandatory readings.',
      },
      {
        question: 'Can my data be moved from my current software?',
        answer:
          'If your software exports your customers, sites, equipment, contracts and jobs to Excel or CSV, I import them into the new tool; it is planned in the quote. Check this export option before signing with a publisher.',
      },
    ],
  },
  relatedArticles: {
    title: 'Read next',
    slugs: FIELD_SERVICE_PAGE_RELATED_ARTICLE_SLUGS,
  },
  contactCta: {
    title: 'Not sure which option suits your technicians?',
    description:
      'Tell me about your jobs in a few lines. I reply within 24 hours, and if off-the-shelf software is enough for you, I will tell you.',
    button: 'Discuss my project',
  },
}
