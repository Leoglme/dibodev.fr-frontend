import type { DibodevSoftwareToolPageContent } from '~/core/types/DibodevSoftwareToolPage'
import {
  GYM_MEMBERSHIP_RULES_SOURCE,
  HEALTH_DATA_SOURCE,
  PERSONAL_TRAINER_PAGE_COMPARISON_ROWS_ON_SMALL_SCREENS,
  PERSONAL_TRAINER_PAGE_PROJECT_SLUG,
  PERSONAL_TRAINER_PAGE_RELATED_ARTICLE_SLUGS,
  PERSONAL_TRAINER_PAGE_SCREENSHOT_URL,
  PERSONAL_TRAINER_PAGE_UPDATED_AT,
  PERSONAL_TRAINER_TEMPLATE_PDF_PATH,
  PERSONAL_TRAINER_TEMPLATE_XLSX_PATH,
  SPORTS_EDUCATOR_DECLARATION_SOURCE,
} from '~/core/constants/tools/personalTrainerSoftware/pageShared'
import { E_INVOICING_SOURCE } from '~/core/constants/tools/officialSources'

export const PERSONAL_TRAINER_PAGE_CONTENT_EN: DibodevSoftwareToolPageContent = {
  meta: {
    title: 'Personal trainer software in France: bookings, programmes, prices',
    description:
      'Software for personal trainers and gyms in France: 2026 prices (Harbiz, Hexfit, Eversports, Trafft…), a free 6-question test and a client assessment and training log template to download.',
    inLanguage: 'en',
    schemaAbout: 'Management software for personal trainers and gyms in France',
  },
  breadcrumbLabel: 'Personal trainer software',
  shareImage: {
    titleLines: ['Which software for a', 'personal trainer?'],
    highlight: 'personal trainer',
    subtitle:
      'Six questions, 2026 prices of the coaching and gym software sold in France and a free training log template',
    badge: 'Free test, in 2 minutes',
    icon: 'dumbbell',
    alt: 'Which software for a personal trainer? Free 6-question test, 2026 software prices in France and a training log template, on dibodev.fr',
  },
  hero: {
    titleBefore: 'Which software for a ',
    titleHighlight: 'personal trainer',
    titleAfter: ' or a gym?',
    description:
      'Answer six questions about your team, locations and activity. One-to-one coaching, group classes, online coaching or a gym, based on the French market the test tells you which kind of software to choose for your bookings, programmes and payments, and how much to budget.',
    reassurances: ['2 minutes', 'No sign-up, no email', 'Instant result'],
    authorIntro: 'Test designed by',
    authorBio:
      'a business software developer near Rennes, France, and a strength training enthusiast. At Izidoor I built the booking platform of some thirty sports and leisure businesses.',
    updatedAt: PERSONAL_TRAINER_PAGE_UPDATED_AT,
  },
  marketSoftware: {
    anchorId: 'software',
    eyebrow: '2026 public prices',
    title: 'Coaching and gym software sold in France and its prices',
    intro:
      'The prices coaching and booking publishers show on their websites. They mostly depend on the number of active clients or bookings per month.',
    productColumnLabel: 'Software',
    coverageColumnLabel: 'What it handles',
    priceColumnLabel: 'Public price',
    products: [
      {
        name: 'Harbiz',
        coverage:
          'Training programmes, client follow-up, your own branded app (iOS and Android), payments, community, AI assistant',
        price: '€19 to €199 per month',
        priceCondition:
          '€14 to €149 excl. VAT per month when paid yearly; Basic up to 5 clients, Pro and My APP up to 50; 14-day trial',
      },
      {
        name: 'Hexfit',
        coverage:
          'Programmes, exercise library, fitness tests, appointments, mobile app, PDFs for clients, nutrition as an option',
        price: '$19 to $250 per month',
        priceCondition:
          'Prices shown in dollars; Starter 5 active clients, Solo 15 to 30, Growth 40 to 150, Studio 500; 14-day trial',
      },
      {
        name: 'Eversports Manager',
        coverage:
          'Class schedule, online booking and payment (Stripe), memberships and passes, product sales, live classes',
        price: '€36 to €169 per month excl. VAT',
        priceCondition: 'Paid yearly, by number of bookings (49 to over 1,500 a month); branded app on quote',
      },
      {
        name: 'Trafft',
        coverage: 'Online appointment booking, booking website, reminders, deposits, gift cards, group bookings',
        price: 'Free up to 100 appointments a month',
        priceCondition:
          '1 user on the free plan; paid plans from 3 to 30 users, prices not shown on the page; 14-day trial',
      },
      {
        name: 'Virtuagym',
        coverage: 'Member management, memberships and payments, access control, programmes and nutrition, app',
        price: 'On request',
        priceCondition: 'Prices given after a demo',
      },
    ],
    calloutEmphasizedIntro: 'Before signing:',
    calloutText:
      'run a real week through the software. A session booked and paid from your website, the reminder the day before, the programme sent to the client’s phone, the late cancellation charged by your rules, then the membership invoice, with nothing retyped.',
    calloutFootnote: 'Prices checked on 19 October 2026 on the publishers’ websites. Non-exhaustive list.',
  },
  rules: {
    anchorId: 'rules',
    eyebrow: 'France in 2026',
    title: 'Professional card, memberships, health data: what your software must respect in France in 2026',
    intro:
      'In France, the sports educator declaration, displayed diplomas, information before a membership, the medical certificate and health data: coach and gym rules go through client records and contracts. Good software keeps them up to date for you.',
    facts: [
      {
        contextLabel: 'Before the first paid session',
        title: 'The sports educator declaration',
        text: 'Teaching, leading or supervising a physical activity for pay requires a declaration to the administration, which checks the qualification and the absence of a ban on coaching, then issues the professional card.',
        sourceName: SPORTS_EDUCATOR_DECLARATION_SOURCE.name,
        sourceUrl: SPORTS_EDUCATOR_DECLARATION_SOURCE.url,
      },
      {
        contextLabel: 'In the gym',
        title: 'Diplomas and cards on display',
        text: 'Copies of the diplomas, titles and professional cards of every coach are displayed, visible to the public, in the establishment.',
        sourceName: GYM_MEMBERSHIP_RULES_SOURCE.name,
        sourceUrl: GYM_MEMBERSHIP_RULES_SOURCE.url,
      },
      {
        contextLabel: 'Memberships',
        title: 'Information before signing',
        text: 'Contract duration, cancellation terms, prices incl. VAT and fees (registration, options) are given before joining; the client may read the contract away from the sales point, and has 14 days to withdraw from a contract concluded at a distance.',
        sourceName: GYM_MEMBERSHIP_RULES_SOURCE.name,
        sourceUrl: GYM_MEMBERSHIP_RULES_SOURCE.url,
      },
      {
        contextLabel: 'Medical certificate',
        title: 'Not a legal obligation, often requested',
        text: 'Providing a medical certificate is not a legal obligation to join; the gym may ask for one, as it is tied to its insurance. Software keeps its date and sends a reminder before it expires.',
        sourceName: GYM_MEMBERSHIP_RULES_SOURCE.name,
        sourceUrl: GYM_MEMBERSHIP_RULES_SOURCE.url,
      },
      {
        contextLabel: 'Sensitive data',
        title: 'Injuries, inabilities and combined measurements',
        text: 'Being unfit for a sport is health data, as is weight combined with other measurements: a special regime applies (confidentiality, security, no commercial use). Plan for it from the client record.',
        sourceName: HEALTH_DATA_SOURCE.name,
        sourceUrl: HEALTH_DATA_SOURCE.url,
      },
      {
        contextLabel: '1 September 2027',
        title: 'E-invoicing',
        text: 'For your business customers (companies, clubs): every French company must be able to receive e-invoices since 1 September 2026; small and mid-sized companies will have to issue them from 1 September 2027.',
        sourceName: E_INVOICING_SOURCE.name,
        sourceUrl: E_INVOICING_SOURCE.url,
      },
    ],
    calloutEmphasizedIntro: 'What a custom tool does not replace:',
    calloutText:
      'your accounting software, nor the training apps your clients already love. Payments go through Stripe or your bank, and the tool plugs into your website, your calendar and your emails.',
  },
  freeTemplate: {
    anchorId: 'template',
    eyebrow: 'Free template',
    title: 'A client assessment and a training log ready to fill in',
    description:
      'The initial client assessment (goals, history, measurements, baseline tests) and the strength training log with sets, reps, loads and effort. In French, as a PDF to fill in by hand or an Excel file with tonnage and progress calculated.',
    items: [
      'Initial assessment: goals, current practice, history and pain, baseline measurements and tests, consent for health data',
      'Training log: exercises, sets, reps, load, RPE, tonnage per session, coach notes',
      'Excel version: tonnage calculated automatically, progress from one session to the next',
    ],
    downloads: [
      {
        label: 'Download the PDF template',
        href: PERSONAL_TRAINER_TEMPLATE_PDF_PATH,
        format: 'PDF, 2 pages, in French',
      },
      {
        label: 'Download the Excel version',
        href: PERSONAL_TRAINER_TEMPLATE_XLSX_PATH,
        format: 'Excel, 2 sheets, calculated tonnage, in French',
      },
    ],
    footnote: 'Free to use, to adapt to your practice. It does not replace medical advice.',
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
          { state: 'yes', text: '€14 to €199 per month, depending on clients or bookings' },
          { state: 'partial', text: 'Your subscription, plus €2,500 to €7,000 paid once' },
          { state: 'partial', text: '€5,000 to €25,000 paid once, plus €100 to €300 per month for maintenance' },
        ],
      },
      {
        label: 'Bookings, programmes, payments',
        cells: [
          { state: 'yes', text: 'Included, in the publisher’s app and colours' },
          { state: 'yes', text: 'Stay in your current software' },
          { state: 'yes', text: 'Designed around your method, plans and locations' },
        ],
      },
      {
        label: 'Your rules: plans, cancellations, locations',
        cells: [
          { state: 'partial', text: 'Within the settings the publisher provides' },
          { state: 'yes', text: 'For the points the extension adds' },
          { state: 'yes', text: 'Designed around the way you work' },
        ],
      },
      {
        label: 'Booking and payment on your website, in your colours',
        cells: [
          { state: 'partial', text: 'Often a publisher page or app' },
          { state: 'yes', text: 'On your website, in your colours' },
          { state: 'yes', text: 'On your website and in your own branded app' },
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
    rowsShownOnSmallScreens: PERSONAL_TRAINER_PAGE_COMPARISON_ROWS_ON_SMALL_SCREENS,
  },
  project: {
    slug: PERSONAL_TRAINER_PAGE_PROJECT_SLUG,
    screenshotUrl: PERSONAL_TRAINER_PAGE_SCREENSHOT_URL,
    showBrowserFrame: false,
    eyebrow: 'Already built',
    title: 'A booking platform for sports and leisure, already in production',
    description:
      'At Izidoor, I built the booking platform of some thirty sports and leisure businesses. Their customers book and pay on each business’s website, and the team follows everything in a schedule per instructor. Several thousand bookings go through it every season.',
    highlights: [
      'Online booking on each business’s website',
      'Stripe payments, deposits and refunds',
      'Schedule per instructor, availability and a till for on-site payments',
    ],
    linkLabel: 'See the Izidoor project',
    imageAlt: 'Izidoor schedule on desktop and phone: booked slots per instructor and per day',
    browserBarCaption: 'Izidoor · booking schedule',
  },
  faq: {
    eyebrow: 'Frequently asked questions',
    title: 'Personal trainer software: your questions',
    questions: [
      {
        question: 'How much does personal trainer software cost in France?',
        answer:
          'Harbiz costs €19 to €199 per month (€14 to €149 excl. VAT yearly) depending on the number of clients, Hexfit $19 to $250 per month, Eversports Manager €36 to €169 excl. VAT per month depending on bookings, Trafft is free up to 100 appointments a month and Virtuagym is on request (prices checked on 19 October 2026). A custom extension costs €2,500 to €7,000 paid once, a complete tool €5,000 to €25,000, then €100 to €300 per month for maintenance.',
      },
      {
        question: 'Which software for an independent personal trainer?',
        answer:
          'With fewer than 15 active clients, a coaching app under €30 per month (Harbiz Basic, Hexfit Starter or Solo) covers programmes, follow-up and appointments; for online booking alone, Trafft is free up to 100 appointments a month. Custom pays off when your plans, your method or your own branded app no longer fit these tools.',
      },
      {
        question: 'Is there free personal trainer software?',
        answer:
          'Trafft offers a free plan limited to one user and 100 appointments a month, enough to take bookings. Harbiz and Hexfit offer a 14-day trial with all features. A calendar and a spreadsheet get you started, but without automatic reminders, programmes on the client’s phone or online payment.',
      },
      {
        question: 'Do I need a professional card to coach in France?',
        answer:
          'Yes. Teaching, leading or supervising a physical activity for pay requires a declaration to the administration, which checks your qualification and the absence of a ban on coaching, then issues the professional card. In a gym, copies of every coach’s diplomas and cards are displayed, visible to the public.',
      },
      {
        question: 'Can I store my clients’ injuries and measurements?',
        answer:
          'Yes, with care: being unfit for a sport is health data according to the CNIL, and weight combined with other measurements can become health data. A special regime applies (confidentiality, security, no commercial use). Collect consent in the initial assessment, restrict access to these fields and avoid consumer messaging apps to exchange them.',
      },
      {
        question: 'What must a gym membership contract contain in France?',
        answer:
          'The duration, cancellation terms, price incl. VAT and fees (registration, options), given before joining, and a contract the client may read away from the sales point. At a distance, the client has 14 days to withdraw. Contracts of six months or more are treated as long-term: offer short plans too.',
      },
      {
        question: 'How do I limit last-minute cancellations?',
        answer:
          'With a cancellation policy written into the booking (notice, session counted or deposit kept), an automatic reminder the day before and a waiting list that gives the slot to another client. Off-the-shelf software handles the reminder; the waiting list and charging no-shows by your rules are often where a custom extension becomes useful.',
      },
      {
        question: 'Which software for a gym with access control?',
        answer:
          'Gym software (Virtuagym, Eversports Manager) links memberships to badges or QR codes and to recurring payments. If your gym has its own rules (reserved slots, access per plan, several sites), a custom tool links your access control hardware to your memberships and schedule.',
      },
      {
        question: 'Can my data be moved from my current software?',
        answer:
          'If your software exports your clients, sessions, memberships and payments to Excel or CSV, I import them into the new tool; it is planned in the quote. Check this export option before signing with a publisher.',
      },
    ],
  },
  relatedArticles: {
    title: 'Read next',
    slugs: PERSONAL_TRAINER_PAGE_RELATED_ARTICLE_SLUGS,
  },
  contactCta: {
    title: 'Not sure which option suits your coaching?',
    description:
      'Tell me about your activity in a few lines. I reply within 24 hours, and if off-the-shelf software is enough for you, I will tell you.',
    button: 'Discuss my project',
  },
}
