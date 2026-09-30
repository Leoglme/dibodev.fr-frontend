import type { DibodevSoftwareToolPageContent } from '~/core/types/DibodevSoftwareToolPage'
import {
  AUTO_REPAIR_PAGE_COMPARISON_ROWS_ON_SMALL_SCREENS,
  AUTO_REPAIR_PAGE_PROJECT_SLUG,
  AUTO_REPAIR_PAGE_RELATED_ARTICLE_SLUGS,
  AUTO_REPAIR_PAGE_SCREENSHOT_URL,
  AUTO_REPAIR_PAGE_UPDATED_AT,
  AUTO_REPAIR_RULES_SOURCE,
} from '~/core/constants/tools/autoRepairShopSoftware/pageShared'
import { E_INVOICING_SOURCE } from '~/core/constants/tools/officialSources'

// The page describes the French market (publishers, garage rules, e-invoicing): the English text says so instead of adapting it.

export const AUTO_REPAIR_PAGE_CONTENT_EN: DibodevSoftwareToolPageContent = {
  meta: {
    title: 'Auto repair shop software in France: 2026 prices and free test',
    description:
      'Garage management software sold in France: 2026 prices (Gest’Garage, TDV, AutoProGestion, Kwixéo…) and a free 6-question test to choose yours.',
    inLanguage: 'en',
    schemaAbout: 'Auto repair shop management software in France',
  },
  breadcrumbLabel: 'Auto repair shop software',
  shareImage: {
    titleLines: ['Which software for', 'your garage?'],
    highlight: 'garage',
    subtitle: 'Six questions, 2026 prices of the garage software sold in France and how much to budget',
    badge: 'Free test, in 2 minutes',
    icon: 'wrench',
    alt: 'Which software for your auto repair shop? Free 6-question test and 2026 software prices in France, on dibodev.fr',
  },
  hero: {
    titleBefore: 'Which software for your ',
    titleHighlight: 'auto repair shop',
    titleAfter: '?',
    description:
      'Answer six questions about your team, workshops and activity. Based on the French market, the test tells you which kind of software to choose for your quotes, repair orders and invoices, and how much to budget.',
    reassurances: ['2 minutes', 'No sign-up, no email', 'Instant result'],
    authorIntro: 'Test designed by',
    authorBio:
      ', a business software developer near Rennes, France. I built from scratch time-tracking software per job site, still used by small and mid-sized companies.',
    updatedAt: AUTO_REPAIR_PAGE_UPDATED_AT,
  },
  marketSoftware: {
    anchorId: 'software',
    eyebrow: '2026 public prices',
    title: 'Garage software sold in France and its prices',
    intro:
      'The prices publishers show on their websites. They mostly depend on the modules you choose and the number of users.',
    productColumnLabel: 'Software',
    coverageColumnLabel: 'What it handles',
    priceColumnLabel: 'Public price',
    products: [
      {
        name: 'Gest’Garage',
        coverage: 'Quotes, repair orders, Factur-X invoices, schedule, e-signature, stock, text reminders',
        price: '€19 per month',
        priceCondition: 'No VAT charged, up to 5 team members, a single plan',
      },
      {
        name: 'TDV',
        coverage: 'Diary and labour times, then quotes, repair orders, invoices and stock (Solo Complet)',
        price: '€19.90 to €24.90 per month incl. VAT',
        priceCondition: 'The €19.90 plan only covers the diary and labour times',
      },
      {
        name: 'AutoProGestion',
        coverage: 'Quotes, invoices, bookings, customer and vehicle records, stock',
        price: '€29 or €59 per month',
        priceCondition: 'No commitment; 100 customers at €29, unlimited and vehicle fleet at €59',
      },
      {
        name: 'Kwixéo',
        coverage: 'Vehicles, repair orders, quotes, invoices, multi-depot stock (Expert plan)',
        price: '€22 to €89 per month excl. VAT',
        priceCondition: '€18.33 to €74.17 excl. VAT per month when paid yearly',
      },
      {
        name: 'EBP MéCa, GAD Garage',
        coverage: 'Quotes, invoices, repair orders, stock, accounting or accounting exports',
        price: 'On quote',
        priceCondition: 'Prices not published',
      },
    ],
    calloutEmphasizedIntro: 'Before signing:',
    calloutText:
      'run a real day through the software. A quote accepted over the phone, turned into a signed repair order, a part added along the way, then the invoice, with nothing retyped.',
    calloutFootnote: 'Prices checked on 29 September 2026 on the publishers’ websites. Non-exhaustive list.',
  },
  rules: {
    anchorId: 'rules',
    eyebrow: 'France in 2026',
    title: 'What your software must respect in France in 2026',
    intro:
      'In France, price display, quotes, repair orders, reused parts and invoices: garage rules all go through your documents. Good software fills them in for you.',
    facts: [
      {
        contextLabel: 'Order of 27 March 1987',
        title: 'Prices incl. VAT displayed at the entrance',
        text: 'Hourly labour rates and service package prices incl. VAT, with the operations included, at the garage entrance and at the front desk.',
        sourceName: AUTO_REPAIR_RULES_SOURCE.name,
        sourceUrl: AUTO_REPAIR_RULES_SOURCE.url,
      },
      {
        contextLabel: 'If the customer asks',
        title: 'A quote, free or paid',
        text: 'A quote is not mandatory, but you cannot refuse one to a customer who asks. It can be charged if the customer knows beforehand; once signed, it binds you.',
        sourceName: AUTO_REPAIR_RULES_SOURCE.name,
        sourceUrl: AUTO_REPAIR_RULES_SOURCE.url,
      },
      {
        contextLabel: 'Strongly recommended',
        title: 'The repair order, in two copies',
        text: 'Signed by you and the customer: date, identity, vehicle and mileage, repairs, probable cost and time off the road.',
        sourceName: AUTO_REPAIR_RULES_SOURCE.name,
        sourceUrl: AUTO_REPAIR_RULES_SOURCE.url,
      },
      {
        contextLabel: 'Since 1 January 2017',
        title: 'Reused parts to offer',
        text: 'For some repairs (removable body parts, trim, lights, non-bonded glazing, some mechanical parts), excluding suspension and braking.',
        sourceName: AUTO_REPAIR_RULES_SOURCE.name,
        sourceUrl: AUTO_REPAIR_RULES_SOURCE.url,
      },
      {
        contextLabel: 'From €25 incl. VAT',
        title: 'A detailed invoice',
        text: 'Date, garage name and address, customer, date and place of the job, detailed breakdown, totals excl. and incl. VAT; the mileage appears on all your documents.',
        sourceName: AUTO_REPAIR_RULES_SOURCE.name,
        sourceUrl: AUTO_REPAIR_RULES_SOURCE.url,
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
      'your accounting software, nor the parts and labour time databases of specialist publishers. Invoices go to your accounts (export or Factur-X), and the tool connects to the databases you already use.',
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
          { state: 'yes', text: '€19 to €90 per month, depending on modules and users' },
          { state: 'partial', text: 'Your subscription, plus €2,500 to €7,000 paid once' },
          { state: 'partial', text: '€5,000 to €25,000 paid once, plus €100 to €300 per month for maintenance' },
        ],
      },
      {
        label: 'Quotes, repair orders, invoices',
        cells: [
          { state: 'yes', text: 'Included, in line with garage rules' },
          { state: 'yes', text: 'Stay in your current software' },
          { state: 'yes', text: 'Designed around your service packages and hourly rates' },
        ],
      },
      {
        label: 'Your rules: packages, rates, workshops',
        cells: [
          { state: 'partial', text: 'Within the settings the publisher provides' },
          { state: 'yes', text: 'For the points the extension adds' },
          { state: 'yes', text: 'Designed around the way you work' },
        ],
      },
      {
        label: 'Bookings and quote requests on your website',
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
    rowsShownOnSmallScreens: AUTO_REPAIR_PAGE_COMPARISON_ROWS_ON_SMALL_SCREENS,
  },
  project: {
    slug: AUTO_REPAIR_PAGE_PROJECT_SLUG,
    screenshotUrl: AUTO_REPAIR_PAGE_SCREENSHOT_URL,
    showBrowserFrame: true,
    eyebrow: 'Already built',
    title: 'Time-tracking software per job site, already in production',
    description:
      'Gest-Time is the working-time software I built from scratch at Kodeva, during my work-study years. Teams enter their hours by project or job site on a tablet, and managers approve them every week. The same idea tracks the time spent on each repair job.',
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
    title: 'Garage software: your questions',
    questions: [
      {
        question: 'How much does garage software cost in France?',
        answer:
          'Gest’Garage costs €19 per month, TDV €19.90 to €24.90 incl. VAT per month, AutoProGestion €29 or €59 per month and Kwixéo €22 to €89 excl. VAT per month (less when paid yearly). EBP MéCa and GAD Garage are on quote (prices checked on 29 September 2026). A custom extension costs €2,500 to €7,000 paid once, a complete tool €5,000 to €25,000, then €100 to €300 per month for maintenance.',
      },
      {
        question: 'Is there free garage software?',
        answer:
          'Software designed for garages is paid, with a 14-day free trial at Gest’Garage, AutoProGestion and Kwixéo. Free invoicing software can help out, but without repair orders or vehicle history.',
      },
      {
        question: 'Is a repair order mandatory in France?',
        answer:
          'It is strongly recommended, not required. In two signed copies, it protects both the garage and the customer: date, identity, vehicle and mileage, planned repairs, probable cost and time off the road. Good software creates it straight from the accepted quote.',
      },
      {
        question: 'Can a garage charge for a quote?',
        answer:
          'Yes, if it tells the customer beforehand. A quote is not mandatory, but the garage cannot refuse one if the customer asks. Once signed, it binds both parties.',
      },
      {
        question: 'Do I have to offer reused parts?',
        answer:
          'Yes, since 1 January 2017, for some parts (removable body parts, trim, lights, non-bonded glazing, some mechanical parts), excluding suspension and braking. The garage may not offer them if delivery takes too long or if the repair is covered by a warranty.',
      },
      {
        question: 'What must a garage invoice include?',
        answer:
          'From €25 incl. VAT: the date, the garage name and address, the customer name, the date and place of the job, a detailed breakdown and totals excl. and incl. VAT, with the mileage. From 1 September 2027, small and mid-sized companies will also have to issue their invoices electronically.',
      },
      {
        question: 'Does this software suit a motorbike garage?',
        answer:
          'Many are designed for cars. Check in a demo that the vehicle record accepts motorbikes and that your service packages can be set freely. A custom tool starts directly from your packages and vehicle categories.',
      },
      {
        question: 'Can my data be moved from my current software?',
        answer:
          'If your software exports your customers, vehicles and invoices to Excel or CSV, I import them into the new tool; it is planned in the quote. Check this export option before signing with a publisher.',
      },
    ],
  },
  relatedArticles: {
    title: 'Read next',
    slugs: AUTO_REPAIR_PAGE_RELATED_ARTICLE_SLUGS,
  },
  contactCta: {
    title: 'Not sure which option suits your garage?',
    description:
      'Tell me about your garage in a few lines. I reply within 24 hours, and if off-the-shelf software is enough for you, I will tell you.',
    button: 'Discuss my project',
  },
}
