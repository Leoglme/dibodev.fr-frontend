import type { DibodevSoftwareToolPageContent } from '~/core/types/DibodevSoftwareToolPage'
import {
  CLEANING_BUSINESS_PAGE_COMPARISON_ROWS_ON_SMALL_SCREENS,
  CLEANING_BUSINESS_PAGE_PROJECT_SLUG,
  CLEANING_BUSINESS_PAGE_RELATED_ARTICLE_SLUGS,
  CLEANING_BUSINESS_PAGE_SCREENSHOT_URL,
  CLEANING_BUSINESS_PAGE_UPDATED_AT,
  CLEANING_BUSINESS_TEMPLATE_PDF_PATH,
  CLEANING_BUSINESS_TEMPLATE_XLSX_PATH,
  CLEANING_COLLECTIVE_AGREEMENT_SOURCE,
  HOME_SERVICES_VAT_SOURCE,
  PREVENTION_PLAN_SOURCE,
  WORKING_TIME_MONITORING_SOURCE,
} from '~/core/constants/tools/cleaningBusinessSoftware/pageShared'
import { E_INVOICING_SOURCE } from '~/core/constants/tools/officialSources'

export const CLEANING_BUSINESS_PAGE_CONTENT_EN: DibodevSoftwareToolPageContent = {
  meta: {
    title: 'Cleaning business software in France: 2026 price comparison',
    description:
      'Cleaning business software sold in France: 2026 prices (PROPRET, PROGESTI, CleanPlus, MyClic…), a free 6-question test and a schedule template to download.',
    inLanguage: 'en',
    schemaAbout: 'Management software for cleaning companies in France',
  },
  breadcrumbLabel: 'Cleaning business software',
  shareImage: {
    titleLines: ['Which software for', 'a cleaning business?'],
    highlight: 'cleaning business',
    subtitle: 'Six questions, 2026 prices of the cleaning software sold in France and a free schedule template',
    badge: 'Free test, in 2 minutes',
    icon: 'sparkles',
    alt: 'Which software for your cleaning business? Free 6-question test, 2026 prices of cleaning software in France and a visit schedule template, on dibodev.fr',
  },
  hero: {
    titleBefore: 'Which software for your ',
    titleHighlight: 'cleaning business',
    titleAfter: '?',
    description:
      'Answer six questions about your teams, branches and customers. Offices, apartment buildings, private homes or sensitive sites, based on the French market the test tells you which kind of software to choose for scheduling, clocking your cleaners in and out and quality inspections, and how much to budget.',
    reassurances: ['2 minutes', 'No sign-up, no email', 'Instant result'],
    authorIntro: 'Test designed by',
    authorBio:
      'a business software developer near Rennes, France. At Kodeva I built from scratch time-tracking software per job site, still used by small and mid-sized companies.',
    updatedAt: CLEANING_BUSINESS_PAGE_UPDATED_AT,
  },
  marketSoftware: {
    anchorId: 'software',
    eyebrow: '2026 public prices',
    title: 'Cleaning business software sold in France and its prices',
    intro:
      'The prices that publishers specialised in commercial cleaning, and one general field service tool, show on their websites. They mostly depend on the number of users, the cleaners who clock in and the options.',
    productColumnLabel: 'Software',
    coverageColumnLabel: 'What it handles',
    priceColumnLabel: 'Public price',
    products: [
      {
        name: 'PROPRET',
        coverage:
          'Scheduling, start and end-of-shift clocking, geolocation, intervention slips, contracts, invoicing, HR and payroll preparation, stock; e-invoicing through Pennylane (Factur-X)',
        price: '€29.99 to €99.99 excl. VAT per month',
        priceCondition:
          'Starter, Pro (5 users) or Premium (20 users), all modules, free set-up; access with no bank card, no commitment',
      },
      {
        name: 'PROGESTI',
        coverage:
          'Multi-site scheduling, geolocated clock-in and clock-out, quotes and invoices fed by the clocking data, HR, CRM',
        price: '€59 to €399 excl. VAT per month',
        priceCondition:
          'Solo (1 user), Équipe (5), Business (15), Enterprise (30), €10 per extra user; 14-day trial, no card',
      },
      {
        name: 'CleanPlus',
        coverage:
          'GPS clocking, customer portal, quality inspection grids with photos and scores, reports, residence permit alerts; Pennylane link',
        price: '€29 per month excl. VAT',
        priceCondition:
          'Plus €3.40 to €4.40 per cleaner depending on the tier; one admin included (€289 excl. VAT a year); options Factur-X €14 per month, AI assistant €9, signature €7; 7-day trial',
      },
      {
        name: 'MyClic Propreté',
        coverage: 'CRM, quotes, invoices and reminders, scheduling, clocking of arrivals, departures and breaks',
        price: '€169 per month excl. VAT',
        priceCondition: 'For 3 staff, €49 per extra staff member; field clocking €4 excl. VAT per cleaner; on demo',
      },
      {
        name: 'Experhygia (SASHA)',
        coverage:
          'Offline app, clocking of arrivals, departures and breaks (QR code possible), weighted quality inspections with photos and signatures',
        price: 'From €30 excl. VAT per month',
        priceCondition: 'Depending on the number of users and needs',
      },
      {
        name: 'Organilog',
        coverage:
          'General field service software with a cleaning offer: scheduling, clocking by NFC, QR code or geolocation, quality inspection forms, offline mode',
        price: '€19 to €64 per user per month',
        priceCondition: 'Pro €19 yearly or €24 monthly, Business €35 or €45, Premium €59, Premium + Carte €64',
      },
      {
        name: 'Penbase MOZAIK Clean, Teleric, Progiclean, 2BePragma',
        coverage:
          'Cleaning industry suites: NFC, QR code or GPS clocking, mobile quality inspections, before and after photos, customer extranet or payroll link, depending on the publisher',
        price: 'On quote',
        priceCondition: 'Prices not published',
      },
    ],
    calloutEmphasizedIntro: 'Before signing:',
    calloutText:
      'run a real week through the software. A cleaner off sick replaced the same morning on three sites, her replacement clocking in by QR code in a basement with no network, a site’s quality inspection with photos sent to the customer, then the month’s hours sent to payroll and the contract invoice sent out, with nothing retyped.',
    calloutFootnote: 'Prices checked on 26 October 2026 on the publishers’ pricing pages. Non-exhaustive list.',
  },
  rules: {
    anchorId: 'rules',
    eyebrow: 'France in 2026',
    title: 'Part-time work, clocking, contract takeovers: what your software must track in France in 2026',
    intro:
      'In France, part-time work and shifts, on-site clocking, staff transfers when a contract changes provider, the prevention plan at the customer’s premises, VAT and e-invoicing: the rules of a cleaning company all go through its schedule and its documents. In the sector, one employee in two works for several employers, hence tight schedules.',
    facts: [
      {
        contextLabel: 'Cleaning collective agreement, art. 6.2.4.1',
        title: 'Part-time work of at least 16 hours a week',
        text: 'Unless the employee asks otherwise in writing, a part-time contract counts at least 16 hours a week, with at most 2 work slots a day below 24 hours a week, and 3 above.',
        sourceName: CLEANING_COLLECTIVE_AGREEMENT_SOURCE.name,
        sourceUrl: CLEANING_COLLECTIVE_AGREEMENT_SOURCE.url,
      },
      {
        contextLabel: 'CNIL rules',
        title: 'On-site clocking, announced before it starts',
        text: 'NFC badge, QR code or phone geolocation: any working-time monitoring system is brought to employees’ attention before it is set up, and the works council (CSE) is consulted from 50 employees.',
        sourceName: WORKING_TIME_MONITORING_SOURCE.name,
        sourceUrl: WORKING_TIME_MONITORING_SOURCE.url,
      },
      {
        contextLabel: 'Cleaning collective agreement, article 7',
        title: 'A contract changes provider, the staff follow',
        text: 'The new provider takes over 100% of the staff assigned to the contract who meet the conditions (including a permanent contract, at least 6 months on the contract, 30% of their working time on it). The outgoing company sends the information within 8 working days.',
        sourceName: CLEANING_COLLECTIVE_AGREEMENT_SOURCE.name,
        sourceUrl: CLEANING_COLLECTIVE_AGREEMENT_SOURCE.url,
      },
      {
        contextLabel: 'From 400 hours over 12 months',
        title: 'A written prevention plan at the customer’s premises',
        text: 'Your company and the customer analyse the risks together after a joint inspection of the premises. The prevention plan is written from 400 hours of work over 12 months, or for the dangerous work listed in the order of 19 March 1993.',
        sourceName: PREVENTION_PLAN_SOURCE.name,
        sourceUrl: PREVENTION_PLAN_SOURCE.url,
      },
      {
        contextLabel: 'VAT',
        title: '20% for businesses, 10% for private homes under one condition',
        text: 'Cleaning business premises is invoiced with 20% VAT. Cleaning at private homes, as a personal service (services à la personne), drops to 10% if the company only works at its customers’ homes; otherwise, 20%.',
        sourceName: HOME_SERVICES_VAT_SOURCE.name,
        sourceUrl: HOME_SERVICES_VAT_SOURCE.url,
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
      'your payroll software nor your accounts. Clocked hours go to your payroll, invoices to your accounts (export or Factur-X), and the tool plugs into your current tools.',
  },
  freeTemplate: {
    anchorId: 'template',
    eyebrow: 'Free template',
    title: 'A visit schedule and a quality inspection sheet ready to fill in',
    description:
      'The weekly schedule by site and by cleaner, with the times of each visit; a site’s quality inspection sheet, area by area, with score, photos and customer signature. In French, as a PDF to print or an Excel file with hours, the total per cleaner and the conformity rate calculated.',
    items: [
      'Visit schedule: site, cleaner, times for each day, weekly hours and total per cleaner',
      'Quality inspection sheet: areas of the site, points checked, score of each area, photos, corrective actions, customer signature',
      'Useful benchmarks: at least 16 hours a week for part-time work unless the employee asks otherwise in writing (French cleaning collective agreement); a photo of each defect during the inspection',
    ],
    downloads: [
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
    footnote: 'Free to use, to adapt to your company and your contracts.',
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
          { state: 'yes', text: '€29 to €399 excl. VAT per month, depending on users or cleaners' },
          { state: 'partial', text: 'Your subscription, plus €2,500 to €7,000 paid once' },
          { state: 'partial', text: '€5,000 to €25,000 paid once, plus €100 to €300 per month for maintenance' },
        ],
      },
      {
        label: 'Scheduling, clocking, invoices',
        cells: [
          {
            state: 'yes',
            text: 'Included with cleaning software publishers (clocking is sometimes charged per cleaner)',
          },
          { state: 'yes', text: 'Stay in your current software' },
          { state: 'yes', text: 'Designed around your sites, shifts and contracts' },
        ],
      },
      {
        label: 'Your rules: shifts, contract takeovers, prevention plans',
        cells: [
          { state: 'partial', text: 'Within the settings the publisher provides' },
          { state: 'yes', text: 'For the points the extension adds' },
          { state: 'yes', text: 'Designed around the way you work' },
        ],
      },
      {
        label: 'Visit and inspection reports for your customers (customer portal)',
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
    rowsShownOnSmallScreens: CLEANING_BUSINESS_PAGE_COMPARISON_ROWS_ON_SMALL_SCREENS,
  },
  project: {
    slug: CLEANING_BUSINESS_PAGE_PROJECT_SLUG,
    screenshotUrl: CLEANING_BUSINESS_PAGE_SCREENSHOT_URL,
    showBrowserFrame: true,
    eyebrow: 'Already built',
    title: 'Time-tracking software per job site, already in production',
    description:
      'Gest-Time is the working-time software I built from scratch at Kodeva, during my work-study years. Teams enter their hours by project or job site on a tablet, and managers approve them every week. The same idea counts your cleaners’ hours on each customer site, then prepares payroll and invoicing.',
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
    title: 'Cleaning business software: your questions',
    questions: [
      {
        question: 'How much does cleaning business software cost in France?',
        answer:
          'PROPRET costs €29.99 to €99.99 excl. VAT per month (all modules), PROGESTI €59 to €399 excl. VAT per month depending on the number of users, CleanPlus €29 excl. VAT per month plus €3.40 to €4.40 per cleaner, MyClic Propreté €169 excl. VAT per month for 3 staff, Experhygia from €30 excl. VAT per month and Organilog €19 to €64 per user per month. Penbase MOZAIK Clean, Teleric, Progiclean and 2BePragma are on quote (prices checked on 26 October 2026). A custom extension costs €2,500 to €7,000 paid once, a complete tool €5,000 to €25,000, then €100 to €300 per month for maintenance.',
      },
      {
        question: 'Which clocking system for cleaners: GPS, QR code or NFC?',
        answer:
          'All three exist. The phone’s GPS dates and locates arrival and departure (PROPRET, PROGESTI, CleanPlus); a QR code or NFC tag placed on the site proves the cleaner was there, even where GPS is inaccurate (Experhygia, Organilog, Penbase MOZAIK Clean). Experhygia and Organilog also work offline. In every case, in France the system is presented to employees before it is set up, and the works council is consulted from 50 employees (CNIL).',
      },
      {
        question: 'Can scheduling software handle part-time work and shifts?',
        answer:
          'Check it in a demo, because the French cleaning collective agreement has its own rules: part-time work counts at least 16 hours a week (unless the employee asks otherwise in writing), with at most 2 work slots a day below 24 hours a week, 3 above. When working time is averaged over the calendar half-year, a provisional schedule is handed out every month and any change is announced 3 working days in advance. One cleaner in two also works for other employers: the schedule has to fit around their other hours.',
      },
      {
        question: 'What happens when you win a contract already cleaned by another provider?',
        answer:
          'In France, article 7 of the collective agreement applies: you take over 100% of the staff assigned to the contract who meet its conditions (including a permanent contract, at least 6 months on the contract and 30% of their working time on it). The outgoing company sends you the information on these employees within 8 working days. Good software imports this list (contracts, seniority, hours) and puts it into the site’s schedule from day one.',
      },
      {
        question: 'When is a written prevention plan needed at the customer’s premises?',
        answer:
          'From 400 hours of work over 12 months at the customer’s premises, or whatever the duration for the dangerous work listed in the order of 19 March 1993. Before starting, your company and the customer analyse the risks together after a joint inspection of the premises (articles R4512-6 to R4512-12 of the French Labour Code). Software that counts hours per site can warn you before you reach the threshold.',
      },
      {
        question: 'Cleaning products: which documents must be kept?',
        answer:
          'Products are labelled and stored in a dedicated room or cupboard (cleaning collective agreement, art. 3.4.1.3), and their safety data sheets stay accessible to cleaners (articles R4411-73 and R4412-38 of the French Labour Code). In the cleaning sector, the risk assessment document (document unique) is mandatory whatever the headcount, and the agreement forbids leaving an employee alone on dangerous work.',
      },
      {
        question: 'How do you prove cleaning quality to the customer?',
        answer:
          'With an area-by-area inspection: each area gets a score, defects are photographed, then the report is signed by the customer and sent. CleanPlus and Experhygia offer scored grids with photos, 2BePragma a quality rate and before and after photos. I found no text that requires this report or a proof-of-visit certificate: it is common practice, to be written into your contract. The free template on this page gives a printable version.',
      },
      {
        question: 'Which VAT rate for a cleaning company in France: 10% or 20%?',
        answer:
          '20% for cleaning business premises (offices, shops). Cleaning at private homes, as a personal service, drops to 10% if the company only works at its customers’ homes; otherwise, 20%. For these private customers, a quote is mandatory from €100 incl. VAT per month. Software that handles both kinds of customers applies the right rate on each invoice.',
      },
      {
        question: 'Is there free software for a cleaning business?',
        answer:
          'The cleaning software listed here is paid, but several can be tried for free: PROPRET opens full access with no bank card or commitment, PROGESTI offers a 14-day trial with no card, CleanPlus 7 days (card required, nothing charged). To start, the free template on this page (visit schedule and quality inspection sheet, as PDF and Excel) gets a small team by, without clocking or photos.',
      },
      {
        question: 'Can my data be moved from my current software?',
        answer:
          'If your software exports your customers, sites, cleaners, contracts and schedules to Excel or CSV, I import them into the new tool; it is planned in the quote. Check this export option before signing with a publisher.',
      },
    ],
  },
  relatedArticles: {
    title: 'Read next',
    slugs: CLEANING_BUSINESS_PAGE_RELATED_ARTICLE_SLUGS,
  },
  contactCta: {
    title: 'Not sure which tool suits your cleaning business?',
    description:
      'Tell me about your sites and teams in a few lines. I reply within 24 hours, and if off-the-shelf software is enough for you, I will tell you.',
    button: 'Discuss my project',
  },
}
