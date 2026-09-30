import type { DibodevSoftwareToolPageContent } from '~/core/types/DibodevSoftwareToolPage'
import {
  DRIVING_SCHOOL_PAGE_COMPARISON_ROWS_ON_SMALL_SCREENS,
  DRIVING_SCHOOL_PAGE_PROJECT_SLUG,
  DRIVING_SCHOOL_PAGE_RELATED_ARTICLE_SLUGS,
  DRIVING_SCHOOL_PAGE_SCREENSHOT_URL,
  DRIVING_SCHOOL_PAGE_UPDATED_AT,
  DRIVING_SCHOOL_RULE_SOURCES,
} from '~/core/constants/tools/drivingSchoolSoftware/pageShared'

// The page describes the French market (publishers, ANTS, RdvPermis, CPF): the English text says so instead of adapting it.

export const DRIVING_SCHOOL_PAGE_CONTENT_EN: DibodevSoftwareToolPageContent = {
  meta: {
    title: 'Driving school software in France: 2026 prices and free test',
    description:
      'Driving school management software in France compared, with 2026 prices (Drivea, Ma Gestion Zen, Drivup, Kréno 2…), and a free 6-question test to choose yours.',
    inLanguage: 'en',
    schemaAbout: 'Driving school management software in France',
  },
  breadcrumbLabel: 'Driving school software',
  shareImage: {
    titleLines: ['Which software for', 'your driving school?'],
    highlight: 'driving school',
    subtitle: 'Six questions, 2026 prices of the software on the French market and how much to budget',
    badge: 'Free test, in 2 minutes',
    icon: 'car',
    alt: 'Which software for your driving school? Free 6-question test and 2026 software prices in France, on dibodev.fr',
  },
  hero: {
    titleBefore: 'Which software for your ',
    titleHighlight: 'driving school',
    titleAfter: '?',
    description:
      'Answer six questions about your instructors, branches and students. Based on the French market, the test tells you which kind of software to choose and how much to budget.',
    reassurances: ['2 minutes', 'No sign-up, no email', 'Instant result'],
    authorIntro: 'Test designed by',
    authorBio:
      ', a business software developer near Rennes, France. I have already built a driving school management application.',
    updatedAt: DRIVING_SCHOOL_PAGE_UPDATED_AT,
  },
  marketSoftware: {
    anchorId: 'software',
    eyebrow: '2026 public prices',
    title: 'Driving school software in France and its prices',
    intro:
      'The prices French publishers show on their websites, excluding VAT. They mostly depend on the number of branches or student sign-ups.',
    productColumnLabel: 'Software',
    coverageColumnLabel: 'What it handles',
    priceColumnLabel: 'Public price, excl. VAT',
    products: [
      {
        name: 'Drivea',
        coverage: 'Scheduling, students, payments, student progress, iOS and Android apps',
        price: 'Free',
        priceCondition: '€10 per month option to receive new students',
      },
      {
        name: 'rdv360',
        coverage: 'Online diary, 24/7 booking, reminders; till and online payment in the paid plans',
        price: 'Free, then €29.90 to €59.90 per month',
        priceCondition: 'Depending on the till and online payment',
      },
      {
        name: 'Ma Gestion Zen',
        coverage: 'Scheduling, students, fleet, accounting, student portal, ANTS connection, several branches',
        price: '€39 per month',
        priceCondition: '3 users included',
      },
      {
        name: 'Drivup',
        coverage: 'Scheduling, online booking and payment, logbook, e-signature, ANTS, student app',
        price: '€45 or €69 per month',
        priceCondition: 'For one branch, depending on the plan; logbook from €3.50 per student',
      },
      {
        name: 'Kréno 2',
        coverage:
          'Scheduling, contracts, invoices, certified payments, logbook linked to the State, student and instructor apps',
        price: '€49 per month',
        priceCondition: 'Up to 200 sign-ups a year, then €2.70 per sign-up',
      },
      {
        name: 'GestAuto-École',
        coverage: 'Scheduling, logbook, student portal, lesson packages, several branches, built on Odoo',
        price: '€79 per month',
        priceCondition: 'Unlimited instructors and students',
      },
      {
        name: 'Klaxo',
        coverage: 'Scheduling, online booking, text reminders, online shop, contracts, logbook, ANTS and RdvPermis',
        price: 'On quote',
        priceCondition: 'Three plans depending on sign-ups, prices not published',
      },
      {
        name: 'Rapido, Elgéaweb, AGX',
        coverage: 'Suites from the long-standing publishers: logbook, ANTS, RdvPermis, student apps',
        price: 'On quote',
        priceCondition: 'Prices not published',
      },
    ],
    calloutEmphasizedIntro: 'Before you sign:',
    calloutText:
      'in France, the digital learner’s logbook has been mandatory since 2024. Ask the publisher whether it sends your hours to the State through the official interface, and whether you can export your data the day you change software.',
    calloutFootnote: 'Prices checked on 28 and 29 September 2026 on the publishers’ websites. Not an exhaustive list.',
  },
  rules: {
    anchorId: 'rules',
    eyebrow: 'France in 2026',
    title: 'What driving school software must handle in France in 2026',
    intro: 'These French obligations partly decide what software must do, and what should not be rebuilt from scratch.',
    facts: [
      {
        contextLabel: 'Since 1 January 2024',
        title: 'The digital learner’s logbook',
        text: 'Mandatory. The hours it sends are used to calculate your driving test slots: a wrong NEPH number or inconsistent times, and those hours do not count.',
        sourceName: DRIVING_SCHOOL_RULE_SOURCES.logbook.name,
        sourceUrl: DRIVING_SCHOOL_RULE_SOURCES.logbook.url,
      },
      {
        contextLabel: '1.57 million slots in 2024',
        title: 'Driving test slots on RdvPermis',
        text: 'You book the test slots of your students, and there are not enough: the profession estimated the need at 2.19 million for 2025.',
        sourceName: DRIVING_SCHOOL_RULE_SOURCES.testSlots.name,
        sourceUrl: DRIVING_SCHOOL_RULE_SOURCES.testSlots.url,
      },
      {
        contextLabel: 'Since 1 January 2025',
        title: 'The standard contract',
        text: 'An initial assessment, prices per lesson and per package, and a lesson not cancelled at least 48 working hours ahead is not refunded.',
        sourceName: DRIVING_SCHOOL_RULE_SOURCES.standardContract.name,
        sourceUrl: DRIVING_SCHOOL_RULE_SOURCES.standardContract.url,
      },
      {
        contextLabel: 'Since 20 February 2026',
        title: 'Much tighter CPF funding',
        text: 'The CPF (the French personal training account) now funds the B licence only for jobseekers and co-funded employees, up to €900. Qualiopi certification is still required.',
        sourceName: DRIVING_SCHOOL_RULE_SOURCES.trainingAccount.name,
        sourceUrl: DRIVING_SCHOOL_RULE_SOURCES.trainingAccount.url,
      },
      {
        contextLabel: 'Article 286 of the French Tax Code',
        title: 'Payments and invoices',
        text: 'Your payments go through secure till software. E-invoicing: receiving is mandatory since 1 September 2026, issuing will be for small businesses from 1 September 2027.',
        sourceName: DRIVING_SCHOOL_RULE_SOURCES.payments.name,
        sourceUrl: DRIVING_SCHOOL_RULE_SOURCES.payments.url,
      },
      {
        contextLabel: '3,000 km minimum',
        title: 'Accompanied driving',
        text: 'Initial meeting, teaching meetings, kilometres driven: students and parents want to follow all of it without calling the office.',
        sourceName: DRIVING_SCHOOL_RULE_SOURCES.accompaniedDriving.name,
        sourceUrl: DRIVING_SCHOOL_RULE_SOURCES.accompaniedDriving.url,
      },
    ],
    calloutEmphasizedIntro: 'What I never rebuild as custom software:',
    calloutText:
      'the digital logbook, ANTS and RdvPermis. These exchanges with the French State go through specialised publishers, and a mistake costs test slots. A custom tool plugs in next to compliant software.',
  },
  comparison: {
    eyebrow: 'The three options',
    title: 'Off-the-shelf software, an extension or a custom tool?',
    intro:
      'Each one has its place. The test points you in the right direction; this table shows what you gain and what you accept with each.',
    criterionLabel: 'Criterion',
    columns: ['Off-the-shelf software', 'Software + custom extension', 'Custom tool'],
    rows: [
      {
        label: 'Price',
        cells: [
          {
            state: 'yes',
            text: 'Free to €79 excl. VAT per month for one branch, or on quote depending on the publisher',
          },
          { state: 'partial', text: 'Your subscription, plus €2,500 to €7,000 once' },
          { state: 'partial', text: '€5,000 to €25,000 once, plus €100 to €300 per month for maintenance' },
        ],
      },
      {
        label: 'Digital logbook, ANTS, RdvPermis',
        cells: [
          { state: 'yes', text: 'Included and kept up to date by the publisher, depending on the software' },
          { state: 'yes', text: 'Stay in your current software' },
          { state: 'partial', text: 'Stay in compliant software, connected to the tool' },
        ],
      },
      {
        label: 'Your rules: packages, prices, branches',
        cells: [
          { state: 'partial', text: 'Within the settings the publisher provides' },
          { state: 'yes', text: 'On the points the extension adds' },
          { state: 'yes', text: 'Designed around the way you work' },
        ],
      },
      {
        label: 'Booking and payment on your website',
        cells: [
          { state: 'partial', text: 'Often on the publisher’s portal or shop' },
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
    rowsShownOnSmallScreens: DRIVING_SCHOOL_PAGE_COMPARISON_ROWS_ON_SMALL_SCREENS,
  },
  project: {
    slug: DRIVING_SCHOOL_PAGE_PROJECT_SLUG,
    screenshotUrl: DRIVING_SCHOOL_PAGE_SCREENSHOT_URL,
    showBrowserFrame: true,
    eyebrow: 'Already built',
    title: 'Driving school management software, already built',
    description:
      'Driving School is a web application for managing a driving school, which I designed during my studies at Epitech. It replaces the wall planner with a shared schedule and shows each student where they stand.',
    highlights: [
      'Driving lesson schedule, by day, week or month',
      'Student and instructor records, with each person’s rights',
      'Hours done and hours left for each student',
    ],
    linkLabel: 'See the Driving School project',
    imageAlt: 'Monthly schedule in Driving School: driving lessons spread over the days with the student’s first name',
    browserBarCaption: 'Driving School · monthly schedule',
  },
  faq: {
    eyebrow: 'Frequently asked questions',
    title: 'Driving school software in France: your questions',
    questions: [
      {
        question: 'How much does driving school management software cost in France?',
        answer:
          'Between €0 and €79 excl. VAT per month for one branch with the software that publishes its prices. Drivea and the basic plan of rdv360 are free, Ma Gestion Zen costs €39 per month, Drivup €45 or €69 for one branch, Kréno 2 €49 up to 200 sign-ups a year and GestAuto-École €79 (public prices checked at the end of September 2026). Klaxo, Rapido, Elgéaweb and AGX are on quote. A custom extension costs €2,500 to €7,000 once, a complete tool €5,000 to €25,000, then €100 to €300 per month for maintenance.',
      },
      {
        question: 'Is there free driving school software?',
        answer:
          'Yes. Drivea is free, with a €10 per month option to receive new students. The free plan of rdv360 gives you an online diary, 24/7 booking and reminders, without a till or online payment. In any case, check the digital logbook: it has been mandatory in France since 2024 and your hours must be sent to the State.',
      },
      {
        question: 'What is the best software for a driving school?',
        answer:
          'It mostly depends on your size. On your own or with a few instructors, simple software under €50 a month is often enough. With several branches, look at multi-branch management, the logbook linked to the State, online booking and payment. The test at the top of this page points you in the right direction in 2 minutes.',
      },
      {
        question: 'Can a custom tool replace my software for the digital logbook?',
        answer:
          'I do not recommend it. The logbook sends your training hours to the French State through an interface meant for software publishers, and those hours are used to calculate your test slots. Keep compliant software for that part; the custom tool plugs in next to it for scheduling, bookings, prices or branch management.',
      },
      {
        question: 'Can my students book and pay on my own website?',
        answer:
          'Yes, it is often the first request: booking lessons, paying online or in instalments and seeing the hours left on the driving school’s website, rather than on a publisher’s portal.',
      },
      {
        question: 'What about payments and the till?',
        answer:
          'In France, your students’ payments must be recorded in secure till software (article 286 of the French Tax Code). If the custom tool takes payments, the quote sets where they are recorded: in your compliant software, or in the tool with the required guarantees.',
      },
      {
        question: 'How long does it take to set up a custom tool?',
        answer:
          'Allow 2 to 6 weeks for an extension, and 5 to 20 weeks for a complete tool depending on the number of branches. You test each part as it comes, without stopping your business.',
      },
      {
        question: 'Can you take over the data from my current software?',
        answer:
          'If your software exports your data (students, lessons, payments) to Excel or CSV, I import it into the new tool; it is included in the quote. Check this export option before signing with a publisher, whatever you choose.',
      },
    ],
  },
  relatedArticles: {
    title: 'Read next',
    slugs: DRIVING_SCHOOL_PAGE_RELATED_ARTICLE_SLUGS,
  },
  contactCta: {
    title: 'Not sure which option suits your driving school?',
    description:
      'Tell me about your driving school in a few lines. I reply within 24 hours, and if off-the-shelf software is enough for you, I will tell you.',
    button: 'Discuss my project',
  },
}
