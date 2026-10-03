import type { DibodevSoftwareToolPageContent } from '~/core/types/DibodevSoftwareToolPage'
import {
  EVENT_RENTAL_MARQUEE_RULES_SOURCE,
  EVENT_RENTAL_PAGE_COMPARISON_ROWS_ON_SMALL_SCREENS,
  EVENT_RENTAL_PAGE_PROJECT_SLUG,
  EVENT_RENTAL_PAGE_RELATED_ARTICLE_SLUGS,
  EVENT_RENTAL_PAGE_SCREENSHOT_URL,
  EVENT_RENTAL_PAGE_UPDATED_AT,
} from '~/core/constants/tools/eventRentalSoftware/pageShared'
import { E_INVOICING_SOURCE } from '~/core/constants/tools/officialSources'

// The page describes the French market (publishers, marquee rules, e-invoicing): the English text says so instead of adapting it.

export const EVENT_RENTAL_PAGE_CONTENT_EN: DibodevSoftwareToolPageContent = {
  meta: {
    title: 'Event rental software in France: 2026 prices and free test',
    description:
      'Event equipment rental software sold in France compared, with 2026 prices (free, LoKisi, Rentman, Booqable…), and a free 6-question test to choose yours.',
    inLanguage: 'en',
    schemaAbout: 'Event equipment rental management software in France',
  },
  breadcrumbLabel: 'Event rental software',
  shareImage: {
    titleLines: ['Which software for', 'your event rentals?'],
    highlight: 'event rentals',
    subtitle: 'Six questions, 2026 prices of the rental software sold in France and how much to budget',
    badge: 'Free test, in 2 minutes',
    icon: 'truck',
    alt: 'Which software for your event equipment rentals? Free 6-question test and 2026 software prices in France, on dibodev.fr',
  },
  hero: {
    titleBefore: 'Which software for your ',
    titleHighlight: 'event equipment rentals',
    titleAfter: '?',
    description:
      'Answer six questions about your team, warehouses and equipment. Based on the French market, the test tells you which kind of software to choose to manage availability, orders and returns, and how much to budget.',
    reassurances: ['2 minutes', 'No sign-up, no email', 'Instant result'],
    authorIntro: 'Test designed by',
    authorBio:
      'a business software developer near Rennes, France. I have already built multi-warehouse stock management software for small and mid-sized companies.',
    updatedAt: EVENT_RENTAL_PAGE_UPDATED_AT,
  },
  marketSoftware: {
    anchorId: 'software',
    eyebrow: '2026 public prices',
    title: 'Event rental software sold in France and its prices',
    intro:
      'The prices publishers show on their websites. They mostly depend on the number of users, warehouses or modules you choose.',
    productColumnLabel: 'Software',
    coverageColumnLabel: 'What it handles',
    priceColumnLabel: 'Public price',
    products: [
      {
        name: 'Unipresta',
        coverage: 'Quotes, bookings, stock and availability, schedule, customers, online rental website',
        price: 'Free version',
        priceCondition: 'Paid plans for unlimited access, prices not shown on the page',
      },
      {
        name: 'LoKisi',
        coverage: 'Real-time stock and availability, quotes, bookings, delivery notes, contracts, invoices',
        price: 'From €29 per month',
        priceCondition: 'No commitment',
      },
      {
        name: 'Booqable',
        coverage: 'Orders, stock and availability, online booking page, e-signature (Grow plan)',
        price: '$29 to $149 per month',
        priceCondition: 'Prices in dollars, 20% less when paid yearly; deliveries as an option',
      },
      {
        name: 'Rentman',
        coverage: 'Stock, crew scheduling, quotes and invoices (add-on), equipment tracking, several warehouses',
        price: '€39 per month, plus modules',
        priceCondition: 'Per power user: inventory €14 to €19, quotes and invoices €9, extra warehouse €5',
      },
      {
        name: 'Current RMS',
        coverage: 'Rentals, stock, quotes, scheduling, with no module to add',
        price: '€69 per month',
        priceCondition: 'For the first user, then €49 per user',
      },
      {
        name: 'Sphinx Manager',
        coverage: 'Catalogue, delivery and return notes, billed breakages, kits, mobile app, Factur-X invoices',
        price: 'On quote',
        priceCondition: 'Prices not published',
      },
      {
        name: 'Locasyst, Codial, CLE, Utiliz',
        coverage: 'Rental management suites: stock per warehouse, quotes, scheduling, invoicing',
        price: 'On quote',
        priceCondition: 'Prices not published',
      },
    ],
    calloutEmphasizedIntro: 'Before signing:',
    calloutText:
      'ask the software to handle a real case from your season. The same item rented for two events in a row, with cleaning time in between, and a kit (table, chairs, tablecloth) with one piece missing on return.',
    calloutFootnote: 'Prices checked on 29 September 2026 on the publishers’ websites. Non-exhaustive list.',
  },
  rules: {
    anchorId: 'rules',
    eyebrow: 'France in 2026',
    title: 'What your software must keep track of in France in 2026',
    intro:
      'In France, marquees and tents have their own safety rules, and e-invoicing is coming for every company. Good software keeps these documents with the equipment.',
    facts: [
      {
        contextLabel: 'Over 50 people',
        title: 'A safety register for each marquee',
        text: 'Touring marquees, tents and structures that welcome more than 50 people must have a safety register, issued by the prefect.',
        sourceName: EVENT_RENTAL_MARQUEE_RULES_SOURCE.name,
        sourceUrl: EVENT_RENTAL_MARQUEE_RULES_SOURCE.url,
      },
      {
        contextLabel: 'Before it is issued',
        title: 'A check by an approved body',
        text: 'The owner first has an approved body check the stability of the frame and the fire behaviour of the canvas.',
        sourceName: EVENT_RENTAL_MARQUEE_RULES_SOURCE.name,
        sourceUrl: EVENT_RENTAL_MARQUEE_RULES_SOURCE.url,
      },
      {
        contextLabel: '8 days before opening',
        title: 'An extract of the register for the mayor',
        text: 'The event organiser must hand it to the mayor eight days before welcoming the public: your customer will ask you for it with the rental.',
        sourceName: EVENT_RENTAL_MARQUEE_RULES_SOURCE.name,
        sourceUrl: EVENT_RENTAL_MARQUEE_RULES_SOURCE.url,
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
      'your accounting software. Invoices are sent to it (export or Factur-X), and online payments go through an approved provider such as Stripe.',
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
          { state: 'yes', text: 'Free to €150 per month, depending on users and modules' },
          { state: 'partial', text: 'Your subscription, plus €2,500 to €7,000 paid once' },
          { state: 'partial', text: '€5,000 to €25,000 paid once, plus €100 to €300 per month for maintenance' },
        ],
      },
      {
        label: 'Availability, orders and returns',
        cells: [
          { state: 'yes', text: 'Included, with differences from one software to another' },
          { state: 'yes', text: 'Stay in your current software' },
          { state: 'yes', text: 'Designed around your kits and cleaning times' },
        ],
      },
      {
        label: 'Your rules: kits, prices, warehouses',
        cells: [
          { state: 'partial', text: 'Within the settings the publisher provides' },
          { state: 'yes', text: 'For the points the extension adds' },
          { state: 'yes', text: 'Designed around the way you work' },
        ],
      },
      {
        label: 'Quotes and bookings on your website',
        cells: [
          { state: 'partial', text: 'Often on the publisher’s page or shop' },
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
    rowsShownOnSmallScreens: EVENT_RENTAL_PAGE_COMPARISON_ROWS_ON_SMALL_SCREENS,
  },
  project: {
    slug: EVENT_RENTAL_PAGE_PROJECT_SLUG,
    screenshotUrl: EVENT_RENTAL_PAGE_SCREENSHOT_URL,
    showBrowserFrame: true,
    eyebrow: 'Already built',
    title: 'Multi-warehouse stock software, already in production',
    description:
      'StockPME is stock management software I built from scratch at Kodeva, during my work-study years. It is still in production in companies of 20 to 200 employees. Every movement is tracked, warehouse by warehouse: stock in, stock out, transfers and stock counts.',
    highlights: [
      'Stock per warehouse, transfers between warehouses',
      'QR code labels for each item',
      'History of movements and stock counts',
    ],
    linkLabel: 'See the StockPME project',
    imageAlt: 'StockPME product sheet: stock per warehouse, serial numbers, transfer and label buttons',
    browserBarCaption: 'StockPME · product sheet, stock per warehouse',
  },
  faq: {
    eyebrow: 'Frequently asked questions',
    title: 'Event rental software: your questions',
    questions: [
      {
        question: 'How much does event equipment rental software cost in France?',
        answer:
          'Unipresta has a free version, LoKisi costs from €29 per month, Rentman €39 per month plus modules per user, Current RMS €69 per month for the first user then €49 per user, and Booqable $29 to $149 per month. Sphinx Manager, Locasyst, Codial and CLE are on quote (prices checked on 29 September 2026). A custom extension costs €2,500 to €7,000 paid once, a complete tool €5,000 to €25,000, then €100 to €300 per month for maintenance.',
      },
      {
        question: 'Is there free event rental software?',
        answer:
          'Yes, Unipresta offers a free version with management features and an online rental website; its paid plans unlock unlimited access. Before you start, check how it handles your kits and incomplete returns.',
      },
      {
        question: 'How do I avoid renting the same item twice?',
        answer:
          'The software must reserve the item for the whole period, preparation, delivery and cleaning included, and show it as unavailable as soon as the quote is written. Test it on two events in a row before signing.',
      },
      {
        question: 'Can I manage several warehouses?',
        answer:
          'Yes: Rentman charges €5 per extra warehouse and per power user, and Locasyst tracks stock per warehouse. A custom tool can also handle transfers between warehouses, like StockPME, the multi-warehouse stock software I built.',
      },
      {
        question: 'How do I bill breakages and missing items?',
        answer:
          'On return, the team scans or ticks what comes back. The difference with the delivery note is calculated, then added to the invoice or kept from the deposit according to your rental terms.',
      },
      {
        question: 'Can my customers book on my own website?',
        answer:
          'Yes: a catalogue linked to the real stock, with a quote request or a booking and a down payment paid online through a provider such as Stripe. Your customers only see what is available on their dates.',
      },
      {
        question: 'Which documents should I keep for marquees?',
        answer:
          'In France, the safety register, required for structures that welcome more than 50 people. The organiser hands an extract to the mayor eight days before the event: your software can attach it directly to the rental contract.',
      },
      {
        question: 'Can my data be moved from my current software?',
        answer:
          'If your software exports your items, customers and contracts to Excel or CSV, I import them into the new tool; it is planned in the quote. Check this export option before signing with a publisher.',
      },
    ],
  },
  relatedArticles: {
    title: 'Read next',
    slugs: EVENT_RENTAL_PAGE_RELATED_ARTICLE_SLUGS,
  },
  contactCta: {
    title: 'Not sure which tool suits your rental business?',
    description:
      'Describe your business in a few lines. I reply within 24 hours, and if off-the-shelf software is enough for you, I will tell you.',
    button: 'Discuss my project',
  },
}
