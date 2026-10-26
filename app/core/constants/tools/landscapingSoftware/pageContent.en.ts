import type { DibodevSoftwareToolPageContent } from '~/core/types/DibodevSoftwareToolPage'
import {
  BIOWASTE_SORTING_SOURCE,
  GARDENING_HOME_SERVICES_SOURCE,
  HOME_SERVICES_TAX_CREDIT_SOURCE,
  LANDSCAPING_PAGE_COMPARISON_ROWS_ON_SMALL_SCREENS,
  LANDSCAPING_PAGE_PROJECT_SLUG,
  LANDSCAPING_PAGE_RELATED_ARTICLE_SLUGS,
  LANDSCAPING_PAGE_SCREENSHOT_URL,
  LANDSCAPING_PAGE_UPDATED_AT,
  LANDSCAPING_TEMPLATE_PDF_PATH,
  LANDSCAPING_TEMPLATE_XLSX_PATH,
  LANDSCAPING_VAT_SOURCE,
  PESTICIDE_BAN_SOURCE,
} from '~/core/constants/tools/landscapingSoftware/pageShared'
import { E_INVOICING_SOURCE } from '~/core/constants/tools/officialSources'

export const LANDSCAPING_PAGE_CONTENT_EN: DibodevSoftwareToolPageContent = {
  meta: {
    title: 'Landscaping software in France: quotes, contracts, prices',
    description:
      'Software for landscapers in France: 2026 prices (Robbin, Extrabat, Paysagio…), a free 6-question test and a quote and maintenance contract template.',
    inLanguage: 'en',
    schemaAbout: 'Management software for landscapers in France',
  },
  breadcrumbLabel: 'Landscaping software',
  shareImage: {
    titleLines: ['Which software for', 'a landscaper?'],
    highlight: 'landscaper',
    subtitle: 'Six questions, 2026 prices of the software sold in France and a free maintenance contract template',
    badge: 'Free test, in 2 minutes',
    icon: 'leaf',
    alt: 'Which software for a landscaper? Free 6-question test, 2026 software prices in France and a quote and maintenance contract template, on dibodev.fr',
  },
  hero: {
    titleBefore: 'Which software for your ',
    titleHighlight: 'landscaping business',
    titleAfter: '?',
    description:
      'Answer six questions about your team, depots and job sites. Garden design and build, maintenance contracts or small gardening jobs at private homes, based on the French market the test tells you which kind of software to choose for your quotes, maintenance contracts and invoices, and how much to budget.',
    reassurances: ['2 minutes', 'No sign-up, no email', 'Instant result'],
    authorIntro: 'Test designed by',
    authorBio:
      'a business software developer near Rennes, France. I built from scratch time-tracking software per job site, still used by small and mid-sized companies.',
    updatedAt: LANDSCAPING_PAGE_UPDATED_AT,
  },
  marketSoftware: {
    anchorId: 'software',
    eyebrow: '2026 public prices',
    title: 'Landscaping software sold in France and its prices',
    intro:
      'The prices the publishers of landscaping, building-trade and field-service software show on their websites. They mostly depend on the modules you choose and the number of users.',
    productColumnLabel: 'Software',
    coverageColumnLabel: 'What it handles',
    priceColumnLabel: 'Public price',
    products: [
      {
        name: 'Robbin',
        coverage:
          'Quotes and invoices for landscapers, works catalogue, schedule, margins and job-site time; maintenance contracts in the Pro plan; runs in the browser, no dedicated app',
        price: '€19 or €49 per month excl. VAT',
        priceCondition:
          '€15 or €39 excl. VAT per month when paid yearly (€180 or €468 excl. VAT a year); 1 user in Essentiel, 2 in Pro; 14-day trial, no card',
      },
      {
        name: 'Extrabat Paysage',
        coverage:
          'Complete management for landscaping businesses, e-invoicing included (via Iopole); job-site scheduling and service contracts from the Standard plan, workload planning in Premium',
        price: '€49 to €99 per user per month',
        priceCondition: 'Excl. VAT: Éco €49, Standard €69, Premium €99, on a sliding scale; no minimum term',
      },
      {
        name: 'Paysagio',
        coverage:
          'Software designed for landscapers: hours entered and profitability per job site; free accounts for workers',
        price: '€34.90 to €99.90 per month',
        priceCondition:
          'Per account, excl. VAT: Gestionnaire €99.90, Conducteur €49.90, Chef d’équipe €34.90; no commitment, 14-day trial, no card',
      },
      {
        name: 'Tomas',
        coverage:
          'Management software for landscapers, in two plans (Essentiel and Expert chantier), with licences for managers and technicians',
        price: '€24.50 or €49.50 per month excl. VAT',
        priceCondition:
          'Extra manager licence €24.50 excl. VAT per month, technician licence €9.50; no commitment, 15-day trial, no card',
      },
      {
        name: 'Organilog',
        coverage:
          'Field-service management for landscapers: price library, schedule and contracts from the Pro plan, offline mobile app; quotes and invoices from the Business plan',
        price: '€19 to €64 per month per user',
        priceCondition: 'Free Basique plan; Business €35, Premium €59, Premium + Carte €64; no commitment',
      },
      {
        name: 'Batappli',
        coverage:
          'Building-trade quotes and invoices, with landscaping quotes (terrace, planting, fence); recurring maintenance contracts in the Artisan plan',
        price: '€39 or €79 per month excl. VAT',
        priceCondition: '€429 or €869 excl. VAT a year; €19 excl. VAT per month per extra user; 10-day trial',
      },
    ],
    calloutEmphasizedIntro: 'Before signing:',
    calloutText:
      'run a real week through the software. A quote for renovating a masonry terrace and planting at a house over 2 years old, with 10% VAT on the terrace and 20% on the plants, accepted then scheduled, a maintenance contract and its visits for the year, the team’s hours entered on site, then the invoice and the tax certificate of a home-service customer.',
    calloutFootnote:
      'Prices checked on 26 October 2026 on the publishers’ websites. JardiSoft and Vertuoza are on quote. Non-exhaustive list.',
  },
  rules: {
    anchorId: 'rules',
    eyebrow: 'France in 2026',
    title: 'VAT, home services, pesticides: what your software must respect in France in 2026',
    intro:
      'In France, 10% or 20% VAT depending on the structure, the tax certificate of home-service customers, pesticides, green waste and e-invoicing: landscaping rules almost all go through your quotes, contracts and invoices. Good software fills them in for you.',
    facts: [
      {
        contextLabel: '10% or 20% VAT',
        title: 'The right VAT rate, structure by structure',
        text: 'Creating or maintaining a garden is invoiced at 20%. Some structures next to a home completed more than 2 years ago go down to 10%: fence wall (not hedges), gate, renovation of a masonry terrace, protective low wall, main access path. Sheds, greenhouses, pergolas, fountains, ponds, lighting and pools stay at 20%.',
        sourceName: LANDSCAPING_VAT_SOURCE.name,
        sourceUrl: LANDSCAPING_VAT_SOURCE.url,
      },
      {
        contextLabel: 'Home services',
        title: 'Small gardening jobs: a declaration and a tax certificate',
        text: 'Routine garden maintenance, hedge and tree trimming and brush clearing at a private home can count as home services (services à la personne), on a simple declaration (NOVA), with no approval needed. Each customer then gets a tax certificate before 31 March of the following year. Selling plants, designing and building landscaped gardens, tree surgery and earthworks are not included.',
        sourceName: GARDENING_HOME_SERVICES_SOURCE.name,
        sourceUrl: GARDENING_HOME_SERVICES_SOURCE.url,
      },
      {
        contextLabel: 'Up to €5,000 of expenses a year',
        title: 'A 50% tax credit for your customers',
        text: 'Small gardening jobs paid to a company declared for home services give the customer a tax credit of 50% of their expenses, up to €5,000 a year per household (within the overall €12,000 ceiling).',
        sourceName: HOME_SERVICES_TAX_CREDIT_SOURCE.name,
        sourceUrl: HOME_SERVICES_TAX_CREDIT_SOURCE.url,
      },
      {
        contextLabel: 'Since 1 July 2022',
        title: 'No more pesticides at private homes',
        text: 'Plant protection products are banned in private homes and their outdoor areas, except biocontrol products, low-risk products and those allowed in organic farming. Where they remain allowed, professional use requires the Certiphyto certificate, valid for 5 years.',
        sourceName: PESTICIDE_BAN_SOURCE.name,
        sourceUrl: PESTICIDE_BAN_SOURCE.url,
      },
      {
        contextLabel: 'Since 1 January 2024',
        title: 'Green waste sorted at source',
        text: 'Every professional sorts biowaste at source, green waste included. Burning green waste is banned (€750 fine), and the chronological waste register is kept for 3 years.',
        sourceName: BIOWASTE_SORTING_SOURCE.name,
        sourceUrl: BIOWASTE_SORTING_SOURCE.url,
      },
      {
        contextLabel: '1 September 2027',
        title: 'E-invoicing',
        text: 'Every French company subject to VAT must be able to receive e-invoices since 1 September 2026; small businesses and micro-entrepreneurs will have to issue them from 1 September 2027, and report their sales to private customers (e-reporting).',
        sourceName: E_INVOICING_SOURCE.name,
        sourceUrl: E_INVOICING_SOURCE.url,
      },
    ],
    calloutEmphasizedIntro: 'What a custom tool does not replace:',
    calloutText:
      'your accounting software, nor garden design software (plans, 3D). Invoices go to your accounts (export or Factur-X), and the tool imports the prices of your nurseries and suppliers.',
  },
  freeTemplate: {
    anchorId: 'template',
    eyebrow: 'Free template',
    title: 'A landscaping quote and a maintenance contract ready to fill in',
    description:
      'The landscaping quote with VAT line by line, 10% for eligible structures next to a home over 2 years old and 20% for planting and maintenance; the garden maintenance contract with the services, number of visits, period, price, price review and termination. In French, as a PDF to fill in by hand or an Excel file with calculated totals.',
    items: [
      'Quote: structures and plants, quantities, unit prices, VAT per line, deposit, validity period, customer’s statement for 10% VAT',
      'Maintenance contract: mowing, pruning, leaf collection, number of visits, period, yearly amount and monthly payments, price review, termination',
      'Useful wording: 50% tax credit if the company is declared for home services, free quote from €100 incl. VAT per month, no pesticides at private homes',
    ],
    downloads: [
      { label: 'Download the PDF template', href: LANDSCAPING_TEMPLATE_PDF_PATH, format: 'PDF, 2 pages, in French' },
      {
        label: 'Download the Excel version',
        href: LANDSCAPING_TEMPLATE_XLSX_PATH,
        format: 'Excel, 2 sheets, calculated totals, in French',
      },
    ],
    footnote:
      'Free to use, to adapt to your company. It does not replace your accountant’s advice, nor checking that you are eligible for home services.',
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
          { state: 'yes', text: '€15 to €99.90 excl. VAT per month, depending on modules and users' },
          { state: 'partial', text: 'Your subscription, plus €2,500 to €7,000 paid once' },
          { state: 'partial', text: '€5,000 to €25,000 paid once, plus €100 to €300 per month for maintenance' },
        ],
      },
      {
        label: 'Quotes, maintenance contracts, invoices',
        cells: [
          { state: 'yes', text: 'Included, contracts often in the mid-range plans' },
          { state: 'yes', text: 'Stay in your current software' },
          { state: 'yes', text: 'Designed around your structures, contracts and visits' },
        ],
      },
      {
        label: 'Your rules: contracts, visits, teams',
        cells: [
          { state: 'partial', text: 'Within the settings the publisher provides' },
          { state: 'yes', text: 'For the points the extension adds' },
          { state: 'yes', text: 'Designed around the way you work' },
        ],
      },
      {
        label: 'Quote and maintenance requests on your website',
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
    rowsShownOnSmallScreens: LANDSCAPING_PAGE_COMPARISON_ROWS_ON_SMALL_SCREENS,
  },
  project: {
    slug: LANDSCAPING_PAGE_PROJECT_SLUG,
    screenshotUrl: LANDSCAPING_PAGE_SCREENSHOT_URL,
    showBrowserFrame: true,
    eyebrow: 'Already built',
    title: 'Time-tracking software per job site, already in production',
    description:
      'Gest-Time is the working-time software I built from scratch at Kodeva, during my work-study years. Teams enter their hours by project or job site on a tablet, and managers approve them every week. The same idea tracks the time your teams spend on each landscaping job and each maintenance visit.',
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
    title: 'Landscaping software: your questions',
    questions: [
      {
        question: 'How much does landscaping software cost in France?',
        answer:
          'Robbin costs €19 or €49 excl. VAT per month (€15 or €39 when paid yearly), Extrabat Paysage €49 to €99 excl. VAT per user per month, Paysagio €34.90 to €99.90 excl. VAT per month depending on the account (free accounts for workers), Tomas €24.50 or €49.50 excl. VAT per month, Organilog €19 to €64 per month per user and Batappli €39 or €79 excl. VAT per month; JardiSoft and Vertuoza are on quote (prices checked on 26 October 2026). A custom extension costs €2,500 to €7,000 paid once, a complete tool €5,000 to €25,000, then €100 to €300 per month for maintenance.',
      },
      {
        question: 'Which quoting and invoicing software for a landscaper in France?',
        answer:
          'General invoicing software makes quotes and invoices, but it lacks the library of structures and plants, 10% VAT on eligible structures, maintenance contracts and, for home services, tax certificates. Landscaping software starts from these needs: Robbin has a works catalogue and handles contracts in the Pro plan, Extrabat Paysage service contracts from the Standard plan, and JardiSoft (on quote) advertises 7,000 plants and 1,000 materials. A company with several teams also needs the schedule and hours per job site on the phone, found in Paysagio, Organilog or a custom tool.',
      },
      {
        question: 'Is there free landscaping software?',
        answer:
          'Organilog has a free Basique plan, but quotes and invoices start with the Business plan (€35 per month per user). Robbin, Paysagio and Kwixéo offer a 14-day trial with no credit card, Tomas 15 days, Batappli 10 days. Free invoicing software can help out at first, but without a plant library, maintenance contracts or tax certificates.',
      },
      {
        question: 'How do I manage garden maintenance contracts?',
        answer:
          'The contract sets the services (mowing, pruning, leaf collection), the number of visits, the period, the price, its review and termination. The software turns it into the year’s visits in the schedule and invoices at the agreed pace, every month or after each visit. Robbin handles them in the Pro plan, Extrabat Paysage from the Standard plan, Organilog from the Pro plan, JardiSoft invoices contracts according to their frequency, and Prospecto (€29 per month) targets green-space businesses of 1 to 5 people. The free template on this page includes a contract ready to fill in.',
      },
      {
        question: 'Which VAT rate on a landscaping quote in France?',
        answer:
          '20% for creating and maintaining gardens, planting and small gardening jobs as a home service (standard rate since 1 July 2013). 10% for some structures next to a home completed more than 2 years ago: fence wall (not hedges), gate, renovation of a masonry terrace, protective low wall, main access path; the customer then certifies on the quote or invoice that the conditions are met. Sheds, greenhouses, pergolas, fountains, ponds, lighting and pools stay at 20%. On a quote that mixes both rates, show the VAT of each line and the total per rate.',
      },
      {
        question: 'How do I issue tax certificates to home-service customers?',
        answer:
          'If your company is declared for home services (NOVA declaration, no approval), you give each customer a tax certificate before 31 March of the following year. It lets them get a 50% tax credit on small gardening jobs, up to €5,000 of expenses a year per household. Only routine maintenance, hedge and tree trimming and brush clearing count, not garden building, tree surgery or earthworks: your software must therefore separate these services on your invoices. One landscaping company in five provides home services (20.5% according to UNEP, the French landscaping trade body).',
      },
      {
        question: 'Can pesticides still be used at a private home in France?',
        answer:
          'No, with exceptions: since 1 July 2022, plant protection products are banned in private homes and their outdoor areas, apart from biocontrol products, low-risk products and those allowed in organic farming. Where they remain allowed, professional use requires the Certiphyto certificate, valid for 5 years. Your software can keep each employee’s Certiphyto with its expiry date.',
      },
      {
        question: 'Is a quote mandatory for a landscaper in France?',
        answer:
          'The obligation to give a quote before a call-out, set in 2017 for building work (masonry, roofing, plumbing…), does not cover gardening. For home services, however, a quote is mandatory and free from €100 incl. VAT per month, with 12 required items. For a masonry structure (low wall, terrace), as for any landscaping job, a detailed signed quote remains the best protection.',
      },
      {
        question: 'How do I track the hours and profitability of each job site?',
        answer:
          'Teams enter their hours on the phone, job by job, and the software compares the time spent with the time planned in the quote. Paysagio highlights hours entry and profitability per job site, Robbin margins and job-site time (in the browser, no dedicated app), and JardiSoft a field app for hours and signatures. If your teams work without network, check the offline mode: Organilog advertises it; in a custom tool, it is planned from the quote.',
      },
      {
        question: '3D design software or management software: which one to choose?',
        answer:
          'They are different tools. Design software (Planner 5D, Lumion, Autodesk tools…) draws the garden in plan or in 3D to present it to the customer. The management software compared on this page handles quotes, maintenance contracts, scheduling and invoices: that is what the test is about.',
      },
      {
        question: 'Can my data be moved from my current software?',
        answer:
          'If your software exports your customers, contracts, works and invoices to Excel or CSV, I import them into the new tool; it is planned in the quote. Check this export option before signing with a publisher.',
      },
    ],
  },
  relatedArticles: {
    title: 'Read next',
    slugs: LANDSCAPING_PAGE_RELATED_ARTICLE_SLUGS,
  },
  contactCta: {
    title: 'Not sure which option suits your business?',
    description:
      'Tell me about your activity in a few lines. I reply within 24 hours, and if off-the-shelf software is enough for you, I will tell you.',
    button: 'Discuss my project',
  },
}
