import type { DibodevSoftwareToolPageContent } from '~/core/types/DibodevSoftwareToolPage'
import {
  BOILER_MAINTENANCE_SOURCE,
  DECENNIAL_INSURANCE_SOURCE,
  PLUMBING_HEATING_PAGE_COMPARISON_ROWS_ON_SMALL_SCREENS,
  PLUMBING_HEATING_PAGE_PROJECT_SLUG,
  PLUMBING_HEATING_PAGE_RELATED_ARTICLE_SLUGS,
  PLUMBING_HEATING_PAGE_SCREENSHOT_URL,
  PLUMBING_HEATING_PAGE_UPDATED_AT,
  PLUMBING_HEATING_TEMPLATE_PDF_PATH,
  PLUMBING_HEATING_TEMPLATE_XLSX_PATH,
  PLUMBING_QUOTE_RULES_SOURCE,
  REDUCED_VAT_WORKS_SOURCE,
} from '~/core/constants/tools/plumbingHeatingSoftware/pageShared'
import { E_INVOICING_SOURCE } from '~/core/constants/tools/officialSources'

// The page describes the French market (publishers, VAT, boiler and quote rules): the English text says so instead of adapting it.

export const PLUMBING_HEATING_PAGE_CONTENT_EN: DibodevSoftwareToolPageContent = {
  meta: {
    title: 'Plumbing and heating software in France: quotes, call-outs, prices',
    description:
      'Software for plumbers and heating engineers in France: 2026 prices (Tolteck, Obat, Batappli, Organilog…), a free 6-question test and a quote template to download.',
    inLanguage: 'en',
    schemaAbout: 'Management software for plumbers and heating engineers in France',
  },
  breadcrumbLabel: 'Plumbing and heating software',
  shareImage: {
    titleLines: ['Which software for a', 'plumbing and heating business?'],
    highlight: 'plumbing and heating',
    subtitle: 'Six questions, 2026 prices of the software sold in France and a free quote template',
    badge: 'Free test, in 2 minutes',
    icon: 'flame',
    alt: 'Which software for a plumbing and heating business? Free 6-question test, 2026 software prices in France and a quote template, on dibodev.fr',
  },
  hero: {
    titleBefore: 'Which software for your ',
    titleHighlight: 'plumbing and heating business',
    titleAfter: '?',
    description:
      'Answer six questions about your team, branches and activity. Plumber, heating engineer or both, based on the French market the test tells you which kind of software to choose for your quotes, call-outs and maintenance contracts, and how much to budget.',
    reassurances: ['2 minutes', 'No sign-up, no email', 'Instant result'],
    authorIntro: 'Test designed by',
    authorBio:
      'a business software developer near Rennes, France. I built from scratch time-tracking software per job site, still used by small and mid-sized companies.',
    updatedAt: PLUMBING_HEATING_PAGE_UPDATED_AT,
  },
  marketSoftware: {
    anchorId: 'software',
    eyebrow: '2026 public prices',
    title: 'Plumbing and heating software sold in France and its prices',
    intro:
      'The prices the building-trade and field-service publishers show on their websites. They mostly depend on the modules you choose and the number of users.',
    productColumnLabel: 'Software',
    coverageColumnLabel: 'What it handles',
    priceColumnLabel: 'Public price',
    products: [
      {
        name: 'Tolteck',
        coverage: 'Quotes and invoices, works library, VAT and deductible amounts, on PC, tablet and phone, offline',
        price: '€25 per month excl. VAT',
        priceCondition: '€19 excl. VAT per month when paid yearly (€228 a year), a single plan, one-month trial',
      },
      {
        name: 'Obat',
        coverage:
          'Unlimited quotes and invoices, e-invoicing, library of 30,000 works, e-signature; schedule and team workload in the Croissance plan',
        price: '€49 to €129 per month excl. VAT',
        priceCondition:
          '€39 to €109 excl. VAT when paid yearly; €32 to €95 excl. VAT for a micro-entreprise; team access as an option',
      },
      {
        name: 'Batappli',
        coverage:
          'Quotes and invoices, deposits, progress invoices, accounting export (Devis plan); stock, job tracking, maintenance contracts and work orders (Artisan plan)',
        price: '€39 or €79 per month excl. VAT',
        priceCondition: '€429 or €869 excl. VAT a year; €19 excl. VAT per month per extra user',
      },
      {
        name: 'Organilog',
        coverage:
          'Call-outs, schedule, offline mobile app, intervention reports, stock (Pro plan); quotes, invoices and online signature (Business plan)',
        price: '€19 to €59 per month per user',
        priceCondition:
          'Free and limited Basique plan (72-hour archive); quotes and invoices from the €35 Business plan',
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
      'run a real day through the software. A call-out taken over the phone, placed in the technician’s round, the intervention slip signed on their phone in a boiler room without network, then the invoice at 10% VAT, with nothing retyped.',
    calloutFootnote: 'Prices checked on 19 October 2026 on the publishers’ websites. Non-exhaustive list.',
  },
  rules: {
    anchorId: 'rules',
    eyebrow: 'France in 2026',
    title: 'Quotes, invoices, maintenance, VAT: what your software must respect in France in 2026',
    intro:
      'In France, the quote before any call-out, the invoice, yearly boiler maintenance, reduced VAT and ten-year insurance: plumbing and heating rules all go through your documents. Good software fills them in for you.',
    facts: [
      {
        contextLabel: 'Since 1 April 2017',
        title: 'A quote before any job',
        text: 'Breakdown, repair or maintenance at a private home (plumbing, sanitary, HVAC): a detailed quote handed over before the work, whatever the amount, with the hourly rate, travel costs and its validity period.',
        sourceName: PLUMBING_QUOTE_RULES_SOURCE.name,
        sourceUrl: PLUMBING_QUOTE_RULES_SOURCE.url,
      },
      {
        contextLabel: 'From €25 incl. VAT',
        title: 'An invoice in two copies',
        text: 'Handed over after the work and before payment: date, company name and address, customer name, date and place of the job, totals excl. and incl. VAT. The customer may keep the replaced parts.',
        sourceName: PLUMBING_QUOTE_RULES_SOURCE.name,
        sourceUrl: PLUMBING_QUOTE_RULES_SOURCE.url,
      },
      {
        contextLabel: 'Every calendar year',
        title: 'Maintenance of 4 to 400 kW boilers',
        text: 'Oil, gas, wood or coal boilers, heat pumps and ventilated heating appliances: one visit per calendar year, and a maintenance certificate handed to the customer within 15 days, kept for 2 years.',
        sourceName: BOILER_MAINTENANCE_SOURCE.name,
        sourceUrl: BOILER_MAINTENANCE_SOURCE.url,
      },
      {
        contextLabel: '10% or 5.5% VAT',
        title: 'The customer’s statement on the quote or invoice',
        text: 'For works in a dwelling completed more than 2 years ago, the customer certifies on the quote or invoice that the reduced-rate conditions are met. Each document is drawn up in two copies, theirs kept for 5 years.',
        sourceName: REDUCED_VAT_WORKS_SOURCE.name,
        sourceUrl: REDUCED_VAT_WORKS_SOURCE.url,
      },
      {
        contextLabel: 'With every quote and invoice',
        title: 'The ten-year insurance certificate',
        text: 'As a building tradesperson or sole trader, you take out ten-year civil liability insurance, and its certificate goes with your quotes and invoices.',
        sourceName: DECENNIAL_INSURANCE_SOURCE.name,
        sourceUrl: DECENNIAL_INSURANCE_SOURCE.url,
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
      'your accounting software, nor the publishers’ price libraries (works, supplier prices). Invoices go to your accounts (export or Factur-X), and the tool imports your suppliers’ prices.',
  },
  freeTemplate: {
    anchorId: 'template',
    eyebrow: 'Free template',
    title: 'A quote and an intervention slip ready to fill in',
    description:
      'The quote with 5.5%, 10% or 20% VAT and the customer’s statement for dwellings over 2 years old; the intervention slip with the boiler maintenance checklist. In French, as a PDF to fill in by hand or an Excel file with calculated totals.',
    items: [
      'Quote: supplies and labour, hourly rate, travel costs, VAT per line, deposit, ten-year insurance',
      'Intervention slip: appliance, hours, work done, parts, yearly maintenance checkpoints, customer signature',
      'Up-to-date wording: quote before any job, maintenance certificate within 15 days, invoice from €25 incl. VAT',
    ],
    downloads: [
      {
        label: 'Download the PDF template',
        href: PLUMBING_HEATING_TEMPLATE_PDF_PATH,
        format: 'PDF, 2 pages, in French',
      },
      {
        label: 'Download the Excel version',
        href: PLUMBING_HEATING_TEMPLATE_XLSX_PATH,
        format: 'Excel, 2 sheets, calculated totals, in French',
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
          { state: 'yes', text: '€19 to €129 excl. VAT per month, depending on modules and users' },
          { state: 'partial', text: 'Your subscription, plus €2,500 to €7,000 paid once' },
          { state: 'partial', text: '€5,000 to €25,000 paid once, plus €100 to €300 per month for maintenance' },
        ],
      },
      {
        label: 'Quotes, intervention slips, invoices',
        cells: [
          { state: 'yes', text: 'Included, in line with French building-trade rules' },
          { state: 'yes', text: 'Stay in your current software' },
          { state: 'yes', text: 'Designed around your packages, contracts and rounds' },
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
        label: 'Call-out and quote requests on your website',
        cells: [
          { state: 'partial', text: 'Often a form or a publisher page' },
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
    rowsShownOnSmallScreens: PLUMBING_HEATING_PAGE_COMPARISON_ROWS_ON_SMALL_SCREENS,
  },
  project: {
    slug: PLUMBING_HEATING_PAGE_PROJECT_SLUG,
    screenshotUrl: PLUMBING_HEATING_PAGE_SCREENSHOT_URL,
    showBrowserFrame: true,
    eyebrow: 'Already built',
    title: 'Time-tracking software per job site, already in production',
    description:
      'Gest-Time is the working-time software I built from scratch at Kodeva, during my work-study years. Teams enter their hours by project or job site on a tablet, and managers approve them every week. The same idea tracks the time your technicians spend on each job site and each call-out.',
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
    title: 'Plumbing and heating software: your questions',
    questions: [
      {
        question: 'How much does plumbing and heating software cost in France?',
        answer:
          'Tolteck costs €25 excl. VAT per month (€19 when paid yearly), Obat €49 to €129 excl. VAT per month (€39 to €109 yearly, less for a micro-entreprise), Batappli €39 or €79 excl. VAT per month and Organilog €19 to €59 per month per user. Praxedo is on quote (prices checked on 19 October 2026). A custom extension costs €2,500 to €7,000 paid once, a complete tool €5,000 to €25,000, then €100 to €300 per month for maintenance.',
      },
      {
        question: 'Which quoting and invoicing software for a plumber in France?',
        answer:
          'General invoicing software makes quotes and invoices, but it lacks the works library, 10% or 5.5% VAT with the customer’s statement, progress invoices and the ten-year insurance certificate. Building-trade software (Tolteck, Obat, Batappli…) includes them, and Obat already issues e-invoices. A company with several technicians on the road also needs the schedule and the intervention slip on mobile, found in Organilog or in a custom tool.',
      },
      {
        question: 'Is there free plumbing software?',
        answer:
          'Organilog offers a free, limited Basique plan (a preview of the modules, 72-hour archive, no support). Tolteck offers a one-month trial and Obat a free trial. Free invoicing software can help out, but without intervention slips or maintenance contracts.',
      },
      {
        question: 'Is a quote mandatory for a plumbing call-out in France?',
        answer:
          'Yes. Since 1 April 2017, any professional who repairs, fixes or maintains at a private home (plumbing, sanitary, HVAC…) hands over a detailed quote before the work, whatever the amount, even in an emergency. It states the hourly rate, travel costs, its validity period and whether it is free or charged. Signed at the customer’s home, it opens a 14-day withdrawal right, except for urgent work the customer asked for.',
      },
      {
        question: 'What must a boiler maintenance certificate contain?',
        answer:
          'After each yearly maintenance (4 to 400 kW boilers, heat pumps, ventilated heating appliances), the heating engineer hands over a certificate within 15 days, on paper or by email, which the customer keeps for at least 2 years. It carries their advice on using the appliance properly, possible improvements and whether a replacement is worthwhile. Good software generates it at the end of the visit and schedules the next one.',
      },
      {
        question: 'How do I apply 10% VAT on a plumbing quote in France?',
        answer:
          'For improvement, conversion, fitting-out or maintenance works in a dwelling completed more than 2 years ago, VAT is 10% (5.5% for energy renovation). The customer certifies on the quote or invoice that these conditions are met; the Cerfa attestation is no longer required since 16 February 2025. Each document is drawn up in two copies, and the customer keeps theirs for 5 years.',
      },
      {
        question: 'Which software for maintenance contracts?',
        answer:
          'Batappli (Artisan plan) handles maintenance contracts and work orders, Organilog recurring call-outs with its mobile app. If your contracts have their own rules (visits in different months depending on the energy, parts included, prices per customer), a custom tool schedules the visits, generates the certificate and invoices the contract when due.',
      },
      {
        question: 'My technicians often work without network: which software?',
        answer:
          'Check that the mobile app works offline: the round, the customer record and the intervention slip stay available in a basement or a boiler room, and sync when the network is back. Tolteck and Organilog advertise it; in a custom tool, it is planned from the quote.',
      },
      {
        question: 'Can my data be moved from my current software?',
        answer:
          'If your software exports your customers, appliances, contracts and invoices to Excel or CSV, I import them into the new tool; it is planned in the quote. Check this export option before signing with a publisher.',
      },
    ],
  },
  relatedArticles: {
    title: 'Read next',
    slugs: PLUMBING_HEATING_PAGE_RELATED_ARTICLE_SLUGS,
  },
  contactCta: {
    title: 'Not sure which option suits your business?',
    description:
      'Tell me about your activity in a few lines. I reply within 24 hours, and if off-the-shelf software is enough for you, I will tell you.',
    button: 'Discuss my project',
  },
}
