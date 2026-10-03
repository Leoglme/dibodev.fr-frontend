import type { DibodevSoftwareToolPageContent } from '~/core/types/DibodevSoftwareToolPage'
import {
  BIKE_MARKING_SOURCE,
  BIKE_REPAIR_BONUS_REFUND_SOURCE,
  BIKE_REPAIR_BONUS_SOURCE,
  BIKE_SHOP_PAGE_COMPARISON_ROWS_ON_SMALL_SCREENS,
  BIKE_SHOP_PAGE_PROJECT_SLUG,
  BIKE_SHOP_PAGE_RELATED_ARTICLE_SLUGS,
  BIKE_SHOP_PAGE_SCREENSHOT_URL,
  BIKE_SHOP_PAGE_UPDATED_AT,
  BIKE_SHOP_TILL_SOURCE,
} from '~/core/constants/tools/bikeShopSoftware/pageShared'
import { E_INVOICING_SOURCE } from '~/core/constants/tools/officialSources'

// The page describes the French market (publishers, bike marking, repair bonus): the English text says so instead of adapting it.

export const BIKE_SHOP_PAGE_CONTENT_EN: DibodevSoftwareToolPageContent = {
  meta: {
    title: 'Bike shop software in France: 2026 prices and free test',
    description:
      'Bike shop software sold in France: 2026 prices (Epsylon, Atelier Vélo+, CycleSoftware, Shifter…) and a free 6-question test to choose yours.',
    inLanguage: 'en',
    schemaAbout: 'Bike workshop and bike shop management software in France',
  },
  breadcrumbLabel: 'Bike shop software',
  shareImage: {
    titleLines: ['Which software for', 'your bike shop?'],
    highlight: 'bike shop',
    subtitle: 'Six questions, 2026 prices of the bike shop software sold in France and how much to budget',
    badge: 'Free test, in 2 minutes',
    icon: 'bike',
    alt: 'Which software for your bike shop? Free 6-question test and 2026 software prices in France, on dibodev.fr',
  },
  hero: {
    titleBefore: 'Which software for your ',
    titleHighlight: 'bike shop',
    titleAfter: '?',
    description:
      'Answer six questions about your team, shops and activity. Based on the French market, the test tells you which kind of software to choose for your bookings, repair tickets and till, and how much to budget.',
    reassurances: ['2 minutes', 'No sign-up, no email', 'Instant result'],
    authorIntro: 'Test designed by',
    authorBio:
      'a business software developer near Rennes, France. I built the online booking platform used by around thirty sports and leisure centres.',
    updatedAt: BIKE_SHOP_PAGE_UPDATED_AT,
  },
  marketSoftware: {
    anchorId: 'software',
    eyebrow: '2026 public prices',
    title: 'Bike shop software sold in France and its prices',
    intro:
      'The prices publishers show on their websites. They mostly depend on the modules you choose and the number of shops.',
    productColumnLabel: 'Software',
    coverageColumnLabel: 'What it handles',
    priceColumnLabel: 'Public price',
    products: [
      {
        name: 'Epsylon',
        coverage: 'Repair tickets, parts stock, till and invoices, workshop app, several shops (Shop plan)',
        price: '€9 to €89 per month',
        priceCondition: 'No VAT charged; 1 shop at €9, up to 3 at €45',
      },
      {
        name: 'Atelier Vélo+',
        coverage: 'Customers, bikes, repairs, quotes and invoices, online payment, offline Windows software',
        price: '€199 or €359 per year',
        priceCondition: 'The Pro plan adds online booking and service reminders',
      },
      {
        name: 'CycleSoftware',
        coverage: 'Till, stock, workshop, supplier catalogues, unlimited workstations',
        price: '€70 per month excl. VAT',
        priceCondition: 'One-year commitment; extra modules, including several shops (€70) and online booking (€15)',
      },
      {
        name: 'Shifter',
        coverage: 'Till, workshop, stock, supplier orders, e-invoicing included',
        price: '€69 to €148 per month excl. VAT',
        priceCondition: 'Several shops and a warehouse in the €148 plan',
      },
      {
        name: 'MCA Bike',
        coverage: 'Till, multi-site stock, workshop, bookings, rental, QR codes',
        price: 'On quote',
        priceCondition: 'Prices not published',
      },
    ],
    calloutEmphasizedIntro: 'Before signing:',
    calloutText:
      'ask for a demo with a real spring Saturday. Ten bikes dropped off, two parts to order, a customer to text and a new bike sale to mark.',
    calloutFootnote: 'Prices checked on 29 September 2026 on the publishers’ websites. Non-exhaustive list.',
  },
  rules: {
    anchorId: 'rules',
    eyebrow: 'France in 2026',
    title: 'What your software must keep track of in France in 2026',
    intro:
      'In France, bike marking, the repair bonus, a secure till and soon e-invoicing: your software keeps track of it all, bike by bike.',
    facts: [
      {
        contextLabel: 'Since 1 January 2021',
        title: 'Marking of new bikes sold',
        text: 'Every new bike sold carries a unique identifier, saved with its owner’s details in the national register (FNUCI), run by the APIC association.',
        sourceName: BIKE_MARKING_SOURCE.name,
        sourceUrl: BIKE_MARKING_SOURCE.url,
      },
      {
        contextLabel: 'Since 1 July 2021',
        title: 'And of used bikes sold in shops',
        text: 'Used bikes sold by a business must be marked too, by one of the seven approved operators (Paravol, Recobike…).',
        sourceName: BIKE_MARKING_SOURCE.name,
        sourceUrl: BIKE_MARKING_SOURCE.url,
      },
      {
        contextLabel: '€15 or €30 per repair',
        title: 'The bike repair bonus',
        text: 'For a standard bike, €15 off from €65 of repairs incl. VAT, €30 off from €120. Only a certified repairer can apply it.',
        sourceName: BIKE_REPAIR_BONUS_SOURCE.name,
        sourceUrl: BIKE_REPAIR_BONUS_SOURCE.url,
      },
      {
        contextLabel: 'Within 15 days',
        title: 'The bonus paid back to the shop',
        text: 'Ecologic usually pays the shop back within 15 days of a complete claim, plus a €5 fee per approved claim.',
        sourceName: BIKE_REPAIR_BONUS_REFUND_SOURCE.name,
        sourceUrl: BIKE_REPAIR_BONUS_REFUND_SOURCE.url,
      },
      {
        contextLabel: 'Since 21 February 2026',
        title: 'A secure till, with proof',
        text: 'If you take payments from consumers with till software, it must keep sales unalterable and archived. The proof: a certificate, or once again a statement from the publisher.',
        sourceName: BIKE_SHOP_TILL_SOURCE.name,
        sourceUrl: BIKE_SHOP_TILL_SOURCE.url,
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
      'your secure till and bike marking. The till stays with a publisher that provides the certificate or statement, marking with an approved operator; the custom tool connects to both.',
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
          { state: 'yes', text: '€9 to €150 per month, depending on modules and shops' },
          { state: 'partial', text: 'Your subscription, plus €2,500 to €7,000 paid once' },
          { state: 'partial', text: '€5,000 to €25,000 paid once, plus €100 to €300 per month for maintenance' },
        ],
      },
      {
        label: 'Secure till',
        cells: [
          { state: 'yes', text: 'Provided by the publisher, with its certificate or statement' },
          { state: 'yes', text: 'Stays in your current software' },
          { state: 'partial', text: 'Stays with a till publisher, connected to the tool' },
        ],
      },
      {
        label: 'Your rules: packages, lead times, shops',
        cells: [
          { state: 'partial', text: 'Within the settings the publisher provides' },
          { state: 'yes', text: 'For the points the extension adds' },
          { state: 'yes', text: 'Designed around the way you work' },
        ],
      },
      {
        label: 'Workshop booking on your website',
        cells: [
          { state: 'partial', text: 'Often a paid module, on a publisher page' },
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
    rowsShownOnSmallScreens: BIKE_SHOP_PAGE_COMPARISON_ROWS_ON_SMALL_SCREENS,
  },
  project: {
    slug: BIKE_SHOP_PAGE_PROJECT_SLUG,
    screenshotUrl: BIKE_SHOP_PAGE_SCREENSHOT_URL,
    showBrowserFrame: false,
    eyebrow: 'Already built',
    title: 'A booking platform, already in production',
    description:
      'At Izidoor, I built the booking platform of around thirty sports and leisure centres. Their customers book and pay on each centre’s website, and the team follows everything in a schedule. Several thousand bookings go through it every season.',
    highlights: [
      'Online booking on each centre’s website',
      'Stripe payment, down payments and refunds',
      'Schedule, availability and a till to take payments on site',
    ],
    linkLabel: 'See the Izidoor project',
    imageAlt: 'Izidoor schedule on a laptop and a phone: booked slots by instructor and by day',
    browserBarCaption: 'Izidoor · booking schedule',
  },
  faq: {
    eyebrow: 'Frequently asked questions',
    title: 'Bike shop software: your questions',
    questions: [
      {
        question: 'How much does bike workshop software cost in France?',
        answer:
          'Epsylon costs €9 per month for one shop (€45 and €89 for several), Atelier Vélo+ €199 or €359 per year, CycleSoftware €70 excl. VAT per month plus its modules, and Shifter €69 to €148 excl. VAT per month. MCA Bike is on quote (prices checked on 29 September 2026). A custom extension costs €2,500 to €7,000 paid once, a complete tool €5,000 to €25,000, then €100 to €300 per month for maintenance.',
      },
      {
        question: 'Is there free bike workshop software?',
        answer:
          'Not among the ones listed here, but free trials are common: 30 days with Epsylon and CycleSoftware, 14 days with Atelier Vélo+. The cheapest, Epsylon, costs €9 per month for one shop.',
      },
      {
        question: 'Is bike marking mandatory in France?',
        answer:
          'Yes, for new bikes sold since 1 January 2021 and for used bikes sold by a business since 1 July 2021. Marking goes through one of the seven approved operators, and the number is saved in the national register (FNUCI); your software can keep it with the bike’s record.',
      },
      {
        question: 'How do I apply the bike repair bonus?',
        answer:
          'You need to be a certified repairer. You deduct the bonus from the customer’s invoice (€15 from €65 of repairs incl. VAT, €30 from €120 for a standard bike), then Ecologic pays you back, usually within 15 days, with a €5 fee per approved claim.',
      },
      {
        question: 'Does my till need to be certified?',
        answer:
          'If you take payments from consumers with till software, it must keep sales unalterable and archived. Since 21 February 2026, the proof can be a certificate from an accredited body or an individual statement from the publisher: ask for it before signing.',
      },
      {
        question: 'Can my customers book online?',
        answer:
          'Yes: most software offers it as an option (€15 per month with CycleSoftware, Pro plan with Atelier Vélo+). A custom tool puts it on your own website, with your mechanics’ real availability.',
      },
      {
        question: 'Can software manage several shops?',
        answer:
          'Yes: Epsylon up to 3 shops at €45 per month, Shifter in its €148 excl. VAT plan, CycleSoftware with a €70 monthly module. Check that stock and transfers between shops are tracked.',
      },
      {
        question: 'Can my data be moved from my current software?',
        answer:
          'If your software exports your customers, bikes and sales to Excel or CSV, I import them into the new tool; it is planned in the quote. Check this export option before signing with a publisher.',
      },
    ],
  },
  relatedArticles: {
    title: 'Read next',
    slugs: BIKE_SHOP_PAGE_RELATED_ARTICLE_SLUGS,
  },
  contactCta: {
    title: 'Not sure which option suits your bike shop?',
    description:
      'Tell me about your workshop in a few lines. I reply within 24 hours, and if off-the-shelf software is enough for you, I will tell you.',
    button: 'Discuss my project',
  },
}
