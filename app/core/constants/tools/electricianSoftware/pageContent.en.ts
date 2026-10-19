import type { DibodevSoftwareToolPageContent } from '~/core/types/DibodevSoftwareToolPage'
import {
  CHARGING_POINT_QUALIFICATION_SOURCE,
  CONSUEL_SOURCE,
  ELECTRICIAN_PAGE_COMPARISON_ROWS_ON_SMALL_SCREENS,
  ELECTRICIAN_PAGE_PROJECT_SLUG,
  ELECTRICIAN_PAGE_RELATED_ARTICLE_SLUGS,
  ELECTRICIAN_PAGE_SCREENSHOT_URL,
  ELECTRICIAN_PAGE_UPDATED_AT,
  ELECTRICIAN_TEMPLATE_PDF_PATH,
  ELECTRICIAN_TEMPLATE_XLSX_PATH,
} from '~/core/constants/tools/electricianSoftware/pageShared'
import { E_INVOICING_SOURCE, HOME_REPAIR_QUOTE_RULES_SOURCE } from '~/core/constants/tools/officialSources'
import {
  DECENNIAL_INSURANCE_SOURCE,
  REDUCED_VAT_WORKS_SOURCE,
} from '~/core/constants/tools/plumbingHeatingSoftware/pageShared'

export const ELECTRICIAN_PAGE_CONTENT_EN: DibodevSoftwareToolPageContent = {
  meta: {
    title: 'Electrician software in France: quotes, jobs, Consuel, prices',
    description:
      'Software for electricians in France: 2026 prices (Tolteck, Obat, Batappli, Organilog…), a free 6-question test and a quote and commissioning report template to download.',
    inLanguage: 'en',
    schemaAbout: 'Management software for electricians in France',
  },
  breadcrumbLabel: 'Electrician software',
  shareImage: {
    titleLines: ['Which software for', 'an electrician?'],
    highlight: 'electrician',
    subtitle: 'Six questions, 2026 prices of the software sold in France and a free quote template',
    badge: 'Free test, in 2 minutes',
    icon: 'zap',
    alt: 'Which software for an electrician? Free 6-question test, 2026 software prices in France and a quote template, on dibodev.fr',
  },
  hero: {
    titleBefore: 'Which software for your ',
    titleHighlight: 'electrical business',
    titleAfter: '?',
    description:
      'Answer six questions about your team, branches and jobs. Call-outs, installations, home automation or charging points, based on the French market the test tells you which kind of software to choose for your quotes, jobs and invoices, and how much to budget.',
    reassurances: ['2 minutes', 'No sign-up, no email', 'Instant result'],
    authorIntro: 'Test designed by',
    authorBio:
      'a business software developer near Rennes, France. I built from scratch time-tracking software per job site, still used by small and mid-sized companies.',
    updatedAt: ELECTRICIAN_PAGE_UPDATED_AT,
  },
  marketSoftware: {
    anchorId: 'software',
    eyebrow: '2026 public prices',
    title: 'Electrician software sold in France and its prices',
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
          'Unlimited quotes and invoices, e-invoicing, works library (including electrical works), e-signature; schedule and team workload in the Croissance plan',
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
          'Jobs, schedule, offline mobile app, intervention reports, stock (Pro plan); quotes, invoices and online signature (Business plan)',
        price: '€19 to €59 per month per user',
        priceCondition:
          'Free and limited Basique plan (72-hour archive); quotes and invoices from the €35 Business plan',
      },
      {
        name: 'Kizeo Forms',
        coverage:
          'Mobile forms and intervention reports (commissioning reports, checklists), offline mode, photos, automations; no quotes or scheduling',
        price: '€15 to €37 excl. VAT per user per month',
        priceCondition: 'Smart €15 and Business €25 when paid yearly, €22 and €37 monthly; 15-day trial',
      },
    ],
    calloutEmphasizedIntro: 'Before signing:',
    calloutText:
      'run a real day through the software. A panel renovation quote with your supplies and hourly rate, accepted then scheduled, the commissioning report filled in on the phone, the invoice at 10% VAT, then the Consuel certificate attached, with nothing retyped.',
    calloutFootnote: 'Prices checked on 19 October 2026 on the publishers’ websites. Non-exhaustive list.',
  },
  rules: {
    anchorId: 'rules',
    eyebrow: 'France in 2026',
    title: 'Quotes, Consuel, charging points, VAT: what your software must respect in France in 2026',
    intro:
      'In France, the quote before a call-out, the certificate of conformity, the charging point qualification, reduced VAT, ten-year insurance and e-invoicing: electrician rules all go through your documents. Good software fills them in for you.',
    facts: [
      {
        contextLabel: 'Since 1 April 2017',
        title: 'A quote before any call-out at a private home',
        text: 'Breakdown, repair or maintenance at a private home (electricity, plumbing, locksmithing…): a detailed quote handed over before the work, whatever the amount, with the hourly rate, travel costs and its validity period; an invoice from €25 incl. VAT.',
        sourceName: HOME_REPAIR_QUOTE_RULES_SOURCE.name,
        sourceUrl: HOME_REPAIR_QUOTE_RULES_SOURCE.url,
      },
      {
        contextLabel: 'Before power-on',
        title: 'The Consuel certificate of conformity',
        text: 'Every new installation connected to the public grid gets a certificate of conformity, sent to Consuel when the work is finished and at least 20 days before commissioning; since 1 January 2025, Consuel forwards it to the grid operator itself.',
        sourceName: CONSUEL_SOURCE.name,
        sourceUrl: CONSUEL_SOURCE.url,
      },
      {
        contextLabel: 'Decree of 12 January 2017',
        title: 'An IRVE qualification for charging points',
        text: 'Except charging points of 3.7 kW or less in a private home, charging points are installed by professionals qualified by an approved body; the administrative fine can reach €300 per charging point.',
        sourceName: CHARGING_POINT_QUALIFICATION_SOURCE.name,
        sourceUrl: CHARGING_POINT_QUALIFICATION_SOURCE.url,
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
      'your accounting software, nor the publishers’ price libraries (works, wholesaler prices). Invoices go to your accounts (export or Factur-X), and the tool imports your suppliers’ prices.',
  },
  freeTemplate: {
    anchorId: 'template',
    eyebrow: 'Free template',
    title: 'A quote and a commissioning report ready to fill in',
    description:
      'The electrician’s quote with 5.5%, 10% or 20% VAT and the customer’s statement for dwellings over 2 years old; the commissioning report with the panel, earthing and measurement checks, and the Consuel follow-up. In French, as a PDF to fill in by hand or an Excel file with calculated totals.',
    items: [
      'Quote: supplies and labour, hourly rate, travel costs, VAT per line, deposit, ten-year insurance, nature of the works',
      'Commissioning report: installation, panel and RCD checks, earthing, insulation and continuity, tests, Consuel certificate, customer signature',
      'Up-to-date wording: quote before a call-out, Consuel 20 days before commissioning, invoice from €25 incl. VAT',
    ],
    downloads: [
      { label: 'Download the PDF template', href: ELECTRICIAN_TEMPLATE_PDF_PATH, format: 'PDF, 2 pages, in French' },
      {
        label: 'Download the Excel version',
        href: ELECTRICIAN_TEMPLATE_XLSX_PATH,
        format: 'Excel, 2 sheets, calculated totals, in French',
      },
    ],
    footnote:
      'Free to use, to adapt to your company. It does not replace your accountant’s advice nor the official Consuel forms.',
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
          { state: 'yes', text: '€15 to €129 excl. VAT per month, depending on modules and users' },
          { state: 'partial', text: 'Your subscription, plus €2,500 to €7,000 paid once' },
          { state: 'partial', text: '€5,000 to €25,000 paid once, plus €100 to €300 per month for maintenance' },
        ],
      },
      {
        label: 'Quotes, intervention reports, invoices',
        cells: [
          { state: 'yes', text: 'Included, in line with French building-trade rules' },
          { state: 'yes', text: 'Stay in your current software' },
          { state: 'yes', text: 'Designed around your works, jobs and checks' },
        ],
      },
      {
        label: 'Your rules: works, jobs, branches',
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
    rowsShownOnSmallScreens: ELECTRICIAN_PAGE_COMPARISON_ROWS_ON_SMALL_SCREENS,
  },
  project: {
    slug: ELECTRICIAN_PAGE_PROJECT_SLUG,
    screenshotUrl: ELECTRICIAN_PAGE_SCREENSHOT_URL,
    showBrowserFrame: true,
    eyebrow: 'Already built',
    title: 'Time-tracking software per job site, already in production',
    description:
      'Gest-Time is the working-time software I built from scratch at Kodeva, during my work-study years. Teams enter their hours by project or job site on a tablet, and managers approve them every week. The same idea tracks the time your electricians spend on each job site and each call-out.',
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
    title: 'Electrician software: your questions',
    questions: [
      {
        question: 'How much does electrician software cost in France?',
        answer:
          'Tolteck costs €25 excl. VAT per month (€19 when paid yearly), Obat €49 to €129 excl. VAT per month (€39 to €109 yearly, less for a micro-entreprise), Batappli €39 or €79 excl. VAT per month, Organilog €19 to €59 per month per user and Kizeo Forms €15 to €37 excl. VAT per user per month (prices checked on 19 October 2026). A custom extension costs €2,500 to €7,000 paid once, a complete tool €5,000 to €25,000, then €100 to €300 per month for maintenance.',
      },
      {
        question: 'Which quoting and invoicing software for an electrician in France?',
        answer:
          'General invoicing software makes quotes and invoices, but it lacks the electrical works library, 10% or 5.5% VAT with the customer’s statement, progress invoices and the ten-year insurance certificate. Building-trade software (Tolteck, Obat, Batappli…) includes them, and Obat already issues e-invoices. A company with several electricians on site also needs the schedule and the intervention report on mobile, found in Organilog, Kizeo Forms or in a custom tool.',
      },
      {
        question: 'Is there free electrician software?',
        answer:
          'Organilog offers a free, limited Basique plan (a preview of the modules, 72-hour archive, no support). Tolteck offers a one-month trial, Obat and Kizeo Forms a free trial. Free invoicing software can help out, but without electrical works, commissioning reports or Consuel follow-up.',
      },
      {
        question: 'Is a quote mandatory for an electrical call-out in France?',
        answer:
          'Yes. Since 1 April 2017, any professional who repairs, fixes or maintains at a private home (electricity, plumbing, locksmithing…) hands over a detailed quote before the work, whatever the amount, even in an emergency. It states the hourly rate, travel costs, its validity period and whether it is free or charged. Signed at the customer’s home, it opens a 14-day withdrawal right, except for urgent work the customer asked for.',
      },
      {
        question: 'When is a Consuel certificate of conformity needed?',
        answer:
          'For every new permanent electrical installation connected to the public grid, before it is powered on: the form is sent to Consuel when the work is finished and at least 20 days before the commissioning date. Since 1 January 2025, Consuel forwards the stamped certificate to the grid operator itself. Temporary installations (site, fair) are not concerned. Good software keeps the certificate number and sending date for each job.',
      },
      {
        question: 'Is a qualification needed to install a charging point in France?',
        answer:
          'Yes, except for a charging point of 3.7 kW or less in a private home: charging points are installed by professionals with an IRVE qualification from an approved body, with an administrative fine of up to €300 per charging point. Your software can track each electrician’s qualifications and their renewal date.',
      },
      {
        question: 'How do I apply 10% VAT on an electrical quote in France?',
        answer:
          'For improvement, conversion, fitting-out or maintenance works in a dwelling completed more than 2 years ago, VAT is 10% (5.5% for energy renovation). The customer certifies on the quote or invoice that these conditions are met; the Cerfa attestation is no longer required since 16 February 2025. Each document is drawn up in two copies, and the customer keeps theirs for 5 years.',
      },
      {
        question: 'My electricians often work without network: which software?',
        answer:
          'Check the offline mode: the schedule, the job record and the intervention report stay available in a basement, a plant room or a dead zone, and sync when the network is back. Tolteck, Organilog (Pro plan) and Kizeo Forms advertise it; in a custom tool, it is planned from the quote.',
      },
      {
        question: 'Can my data be moved from my current software?',
        answer:
          'If your software exports your customers, jobs, works and invoices to Excel or CSV, I import them into the new tool; it is planned in the quote. Check this export option before signing with a publisher.',
      },
    ],
  },
  relatedArticles: {
    title: 'Read next',
    slugs: ELECTRICIAN_PAGE_RELATED_ARTICLE_SLUGS,
  },
  contactCta: {
    title: 'Not sure which option suits your business?',
    description:
      'Tell me about your activity in a few lines. I reply within 24 hours, and if off-the-shelf software is enough for you, I will tell you.',
    button: 'Discuss my project',
  },
}
