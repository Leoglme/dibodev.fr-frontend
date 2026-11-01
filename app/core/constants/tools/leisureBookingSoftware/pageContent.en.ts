import type { DibodevSoftwareToolPageContent } from '~/core/types/DibodevSoftwareToolPage'
import {
  CANOE_KAYAK_SAFETY_SOURCE,
  LEISURE_ACTIVITY_NO_WITHDRAWAL_SOURCE,
  LEISURE_ACTIVITY_VAT_RATES_SOURCE,
  LEISURE_BOOKING_PAGE_COMPARISON_ROWS_ON_SMALL_SCREENS,
  LEISURE_BOOKING_PAGE_PROJECT_SLUG,
  LEISURE_BOOKING_PAGE_RELATED_ARTICLE_SLUGS,
  LEISURE_BOOKING_PAGE_SCREENSHOT_URL,
  LEISURE_BOOKING_PAGE_UPDATED_AT,
  LEISURE_BOOKING_TEMPLATE_PDF_PATH,
  LEISURE_BOOKING_TEMPLATE_XLSX_PATH,
  PAID_SPORTS_INSTRUCTOR_SOURCE,
  SPORTS_FACILITY_DISPLAY_SOURCE,
} from '~/core/constants/tools/leisureBookingSoftware/pageShared'
import { E_INVOICING_SOURCE } from '~/core/constants/tools/officialSources'
import { BOOKING_SCHEDULE_TEMPLATE_ROUTE_NAME } from '~/core/constants/freeTemplates/bookingSchedule/pageShared'

export const LEISURE_BOOKING_PAGE_CONTENT_EN: DibodevSoftwareToolPageContent = {
  meta: {
    title: 'Leisure activity booking software in France: 2026 prices',
    description:
      'Leisure booking software in France: 2026 prices (Yoplanning, Activiteez, Regiondo, Bookeo…), commission costs, a free 6-question test and a booking template.',
    inLanguage: 'en',
    schemaAbout: 'Booking and management software for leisure activities in France',
  },
  breadcrumbLabel: 'Leisure activity booking software',
  shareImage: {
    titleLines: ['Which software for', 'leisure activities?'],
    highlight: 'leisure activities',
    subtitle: 'Six questions, 2026 prices of the booking software sold in France and a free booking planner',
    badge: 'Free test, in 2 minutes',
    icon: 'tent',
    alt: 'Which booking software for your leisure activities? Free 6-question test, 2026 prices of booking software in France and a booking planner template, on dibodev.fr',
  },
  hero: {
    titleBefore: 'Which booking software for your ',
    titleHighlight: 'leisure activities',
    titleAfter: '?',
    description:
      'Answer six questions about your instructors, sites and activities. Treetop adventure, escape game, water sports centre, riding school or karting, based on the French market the test tells you which kind of software to choose for your bookings, your instructors and your bad-weather days, and how much to budget, commissions included.',
    reassurances: ['2 minutes', 'No sign-up, no email', 'Instant result'],
    authorIntro: 'Test designed by',
    authorBio:
      'a business software developer near Rennes, France. During my work-study years at Izidoor, from 2023 to 2025, I built the booking platform of around thirty sports and leisure businesses; I am now an Izidoor shareholder.',
    updatedAt: LEISURE_BOOKING_PAGE_UPDATED_AT,
  },
  marketSoftware: {
    anchorId: 'software',
    eyebrow: '2026 public prices',
    title: 'Leisure activity booking software sold in France and its prices',
    intro:
      'The prices that booking software publishers for the leisure sector show on their websites, from treetop adventure parks to escape games, from water sports centres to karting. Two models coexist: a subscription with no commission, or a small subscription (sometimes free) plus a share of each online booking. Which one costs you less depends on your volume: the calculation is below the table.',
    productColumnLabel: 'Software',
    coverageColumnLabel: 'What it handles',
    priceColumnLabel: 'Public price',
    products: [
      {
        name: 'Yoplanning',
        coverage:
          'Scheduling, customer base, ticketing, gift vouchers, real-time equipment stock, tax management, API; on request: French invoicing, instructor fees',
        price: '€0 + 5%, or €19 to €59 + 2.5%',
        priceCondition:
          'Découverte free with a 5% booking fee; Solo €19, Micro €39 (turnover under €150,000), Entreprise €59 per month, plus 2.5% on online bookings; excl. or incl. VAT not stated; 14-day trial, no card',
      },
      {
        name: 'Activiteez',
        coverage:
          'Scheduling, customer area, instructors (20 in BUSINESS, 60 in SÉRÉNITÉ), fee notes, promo codes, FEC accounting export',
        price: 'From €19 excl. VAT per month',
        priceCondition:
          'LIGHT €19 excl. VAT with a 12-month commitment or €29 without, up to SÉRÉNITÉ €119 or €129; plus 2% and Stripe fees on online payments; free GO plan at 10% + €0.40; NF525 till and e-invoicing +€20 excl. VAT per month (included in SÉRÉNITÉ); off-season pause possible without commitment',
      },
      {
        name: 'Regiondo',
        coverage:
          'Booking widget, Stripe and PayPal payments, sales on GetYourGuide and Viator, tickets and scanning app; in Pro: API, seating plan, data hosted in Europe',
        price: '€59 or €99 per month',
        priceCondition:
          'Grow or Pro, annual contract billed monthly (−10% paid yearly); a “small commission” per online booking, rate not shown, none offline; excl. or incl. VAT not stated; website €1,000 one-off',
      },
      {
        name: 'Tourbiz',
        coverage:
          'Channel manager (GetYourGuide, Viator, Funbooker…), gift vouchers, resources; offline bookings free of charge',
        price: '€0 to €249 per month + 0.8% to 0.99%',
        priceCondition:
          'Freemium €0 + 0.99% (3 products), Intermediate €29 + 0.95%, Advanced €79 + 0.90%, Entreprise €249 + from 0.8%, all prices excl. VAT; free trial, no card',
      },
      {
        name: 'Bookeo Tours et activités',
        coverage: 'Online bookings, guides and vehicles, waivers signed online',
        price: '€29.95 to €89.95 per month',
        priceCondition:
          'No commission; Standard €29.95 (20 guides, 1,000 bookings a month), Large €59.95, X-large €89.95; off-season freeze at 30% of the price; digital waivers from €7 per month; excl. or incl. VAT not stated; 30-day trial, no card',
      },
      {
        name: 'Booky',
        coverage:
          'Online booking; in PRO: anti-fraud VAT till, e-invoicing, signed contracts, PPE; in BUSINESS: deposits, gift vouchers, GPS',
        price: '€49 to €149 excl. VAT per month',
        priceCondition:
          'START €49, PRO €89, BUSINESS €149; half price in months with no sales; “no commission”; 14-day trial, no card, no commitment',
      },
      {
        name: 'MyEscapeBoard (escape game)',
        coverage: 'Bookings, individual payment, game master scheduling, API, accounting exports',
        price: '€30 excl. VAT per room per month',
        priceCondition:
          '€30 for rooms 1 to 6, €25 for rooms 7 to 14, €20 from room 15; from 3 rooms (€90 excl. VAT per month); paid yearly, 2 months free; no commitment',
      },
      {
        name: 'Guidap, Qweekle, OuiRésa, FareHarbor',
        coverage:
          'Leisure booking and ticketing: treetop adventure, canoeing and caves (Guidap), till and access control (Qweekle), water sports centres (OuiRésa), depending on the publisher',
        price: 'On quote',
        priceCondition: 'Prices not published',
      },
    ],
    calloutEmphasizedIntro: 'The real cost over a year, for 2,000 online bookings at €30 (€60,000):',
    calloutText:
      'Bookeo Standard €359, payment fees on top; Booky START €588 excl. VAT and Tourbiz Advanced €1,488 excl. VAT, payment fees not stated; Yoplanning Micro €1,968, payment fees not stated; Weezevent €1,980 incl. VAT, bank fees included (€0.99 minimum per ticket); Activiteez PRO with commitment, about €2,948 excl. VAT, payment included; Addock €3,740 excl. VAT, bank fees included; Bookingkit Starterkit, at least €5,388, transaction fees included (one ticket per booking). For the same volume, the gap is over €5,000 a year: run this calculation with your own figures before signing.',
    calloutFootnote:
      'Subscription and commissions over a year, based on prices checked on 1 November 2026 on the publishers’ pricing pages; Bookeo, Yoplanning and Bookingkit do not state whether their prices include VAT. Non-exhaustive list.',
  },
  rules: {
    anchorId: 'rules',
    eyebrow: 'France in 2026',
    title: 'VAT, deposits, instructors, weather: what your software must track in France in 2026',
    intro:
      'In France, a VAT rate per activity, an advance payment that counts as a forfeitable deposit (arrhes), professional cards to renew, trips to cancel when the river rises: the rules of a leisure business all go through its bookings. On 16 October 2026, the French consumer protection authority (DGCCRF) published its survey of sports leisure: 332 sites inspected in 2024, 13% in breach, 13 suspensions. And the law of 3 August 2026 brings back an activity declaration, whose decree was not yet published on 1 November 2026.',
    facts: [
      {
        contextLabel: 'BOFiP, BOI-TVA-LIQ-30-20-50',
        title: '10, 20 or 5.5%: one VAT rate per activity',
        text: '10% for admission fees (treetop adventure, zip lines, escape games, laser games, paintball, leisure parks), 20% for karting, climbing, water sports, equipment hire and a lesson sold on its own, 5.5% for some equestrian activities. A package that mixes several activities follows a single rate, that of the main activity.',
        sourceName: LEISURE_ACTIVITY_VAT_RATES_SOURCE.name,
        sourceUrl: LEISURE_ACTIVITY_VAT_RATES_SOURCE.url,
      },
      {
        contextLabel: 'Consumer Code, L221-28 and L214-1',
        title: 'No withdrawal period, and an advance that counts as arrhes',
        text: 'A leisure activity booked for a set date gives no right of withdrawal. Unless the contract says otherwise, an advance payment counts as arrhes: a customer who cancels loses it, a business that backs out pays back twice the amount.',
        sourceName: LEISURE_ACTIVITY_NO_WITHDRAWAL_SOURCE.name,
        sourceUrl: LEISURE_ACTIVITY_NO_WITHDRAWAL_SOURCE.url,
      },
      {
        contextLabel: 'Sports Code, L212-1 and L212-11',
        title: 'Qualified, declared instructors with a valid card',
        text: 'Coaching for pay requires a diploma and a declaration to the authorities, which issue the professional card, to be renewed every 5 years. A copy of each instructor’s card and diploma is displayed on the premises.',
        sourceName: PAID_SPORTS_INSTRUCTOR_SOURCE.name,
        sourceUrl: PAID_SPORTS_INSTRUCTOR_SOURCE.url,
      },
      {
        contextLabel: 'Sports Code, A322-44 and A322-3-1',
        title: 'Canoeing: cancel when the water or the weather requires it',
        text: 'The operator adapts or cancels the trip if the weather or the state of the water puts participants at risk. In canoeing, kayaking and sailing, each participant certifies they can swim 25 metres and go under water (for a minor, their legal guardian signs), otherwise they take the Pass-nautique test.',
        sourceName: CANOE_KAYAK_SAFETY_SOURCE.name,
        sourceUrl: CANOE_KAYAK_SAFETY_SOURCE.url,
      },
      {
        contextLabel: 'Sports Code, R322-4 and R322-5',
        title: 'An emergency chart and mandatory notices',
        text: 'The facility has a first-aid kit, a means of raising the alarm and an emergency organisation chart on display. It also displays copies of diplomas and cards, safety texts, the insurance certificate and, since 2025, information on how to report violence. Any serious accident is reported to the prefect.',
        sourceName: SPORTS_FACILITY_DISPLAY_SOURCE.name,
        sourceUrl: SPORTS_FACILITY_DISPLAY_SOURCE.url,
      },
      {
        contextLabel: '1 September 2027',
        title: 'E-invoicing and e-reporting',
        text: 'Every French company must be able to receive e-invoices since 1 September 2026; small and mid-sized companies will issue them from 1 September 2027. From the same date, for your private customers, the invoice stays on the usual channel, but the data of each sale and its payment go to the approved platform (e-reporting).',
        sourceName: E_INVOICING_SOURCE.name,
        sourceUrl: E_INVOICING_SOURCE.url,
      },
    ],
    calloutEmphasizedIntro: 'What a custom tool does not replace:',
    calloutText:
      'your secure till nor your accounts: online payments go through Stripe, on-site payments through your till, and the tool plugs into both. Nor does it settle your terms of sale: when you are the one cancelling because of the weather, arrhes paid back twice or force majeure, have your terms reviewed by a lawyer, and the tool will apply what they say.',
  },
  freeTemplate: {
    anchorId: 'template',
    eyebrow: 'Free template',
    title: 'A booking planner and a registration form ready to use',
    description:
      'For the season: the planner of time slots, bookings and deposits, instructor tracking and equipment checks in Excel, and a registration and briefing form to print, with the swimming certificate and a parent’s signature for a minor. In French, a free booking planner with no subscription and no commission.',
    items: [
      'Excel, 4 sheets: time slots (places left and fill rate calculated), bookings and deposits (VAT rate, arrhes, balance, channel commission), instructors (professional card and expiry date), equipment checks (alert when overdue)',
      'PDF: registration and briefing form (activity, level, instructions read, “can swim 25 m and go under water” certificate, legal guardian’s signature), emergency organisation chart and list of mandatory notices',
      'Useful benchmarks: 10%, 20% or 5.5% VAT depending on the activity (BOFiP), an advance that counts as arrhes unless agreed otherwise, prices incl. VAT displayed at reception',
    ],
    downloads: [
      {
        label: 'Download the PDF template',
        href: LEISURE_BOOKING_TEMPLATE_PDF_PATH,
        format: 'PDF, 2 pages, in French',
      },
      {
        label: 'Download the Excel version',
        href: LEISURE_BOOKING_TEMPLATE_XLSX_PATH,
        format: 'Excel, 4 sheets, places, balances and alerts calculated, in French',
      },
    ],
    footnote: 'Free to use, to adapt with your sports federation and your insurer.',
    pageLinkLabel: 'See the template page',
    pageLinkRouteName: BOOKING_SCHEDULE_TEMPLATE_ROUTE_NAME,
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
          { state: 'yes', text: '€0 to €249 per month, often plus a commission on each online booking' },
          { state: 'partial', text: 'Your subscription, plus €2,500 to €7,000 paid once' },
          { state: 'partial', text: '€5,000 to €25,000 paid once, plus €100 to €300 per month for maintenance' },
        ],
      },
      {
        label: 'Commission on your bookings',
        cells: [
          { state: 'partial', text: 'From 0% to over 10% per online booking, depending on the publisher and the plan' },
          { state: 'partial', text: 'That of your current software' },
          { state: 'yes', text: 'None, only the payment fees of your bank or Stripe' },
        ],
      },
      {
        label: 'Online booking, scheduling, payments',
        cells: [
          { state: 'yes', text: 'Included, in a publisher widget or page' },
          { state: 'yes', text: 'Stay in your current software' },
          { state: 'yes', text: 'On your website, in your colours, built around your slots and instructors' },
        ],
      },
      {
        label: 'Your rules: weather, equipment, VAT per activity',
        cells: [
          { state: 'partial', text: 'Within the settings the publisher provides' },
          { state: 'yes', text: 'For the points the extension adds' },
          { state: 'yes', text: 'Designed around the way you work' },
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
    rowsShownOnSmallScreens: LEISURE_BOOKING_PAGE_COMPARISON_ROWS_ON_SMALL_SCREENS,
  },
  project: {
    slug: LEISURE_BOOKING_PAGE_PROJECT_SLUG,
    screenshotUrl: LEISURE_BOOKING_PAGE_SCREENSHOT_URL,
    showBrowserFrame: false,
    eyebrow: 'Already built',
    title: 'Surfing, kayaking, skiing, cycling: a booking platform already in production',
    description:
      'During my work-study years at Izidoor, from January 2023 to July 2025, I built as a full-stack engineer the booking platform of around thirty sports and leisure businesses (surfing, water sports centres, skiing, kayaking, fishing, bike hire). Their customers book and pay in a module built into each business’s website; the team handles bookings, schedules, products, payments and the till in the back office. Several thousand bookings go through it every season, and I am now an Izidoor shareholder.',
    highlights: [
      'Time slots calculated by a multi-criteria availability engine',
      'Schedule per instructor and dynamic pricing',
      'Deposits and refunds through Stripe, till in the back office',
    ],
    linkLabel: 'See the Izidoor project',
    imageAlt: 'Izidoor schedule on a computer and a phone: slots booked per instructor and per day',
    browserBarCaption: 'Izidoor · booking schedule',
  },
  faq: {
    eyebrow: 'Frequently asked questions',
    title: 'Leisure activity booking software: your questions',
    questions: [
      {
        question: 'How much does leisure activity booking software cost in France?',
        answer:
          'Bookeo costs €29.95 to €89.95 per month with no commission, Booky €49 to €149 excl. VAT per month, Activiteez from €19 excl. VAT per month plus 2% online, Yoplanning €19 to €59 per month plus 2.5% (or €0 plus 5%), Regiondo €59 or €99 per month plus a commission it does not show, Tourbiz €0 to €249 excl. VAT per month plus 0.8% to 0.99% and MyEscapeBoard €30 excl. VAT per room; Guidap, Qweekle, OuiRésa and FareHarbor are on quote (prices checked on 1 November 2026). A custom extension costs €2,500 to €7,000 paid once, a complete tool €5,000 to €25,000, then €100 to €300 per month for maintenance, with no commission on your sales.',
      },
      {
        question: 'Subscription or commission: which costs less?',
        answer:
          'It depends on your volume. For 2,000 online bookings a year at €30 (€60,000), the cost over a year ranges from €359 with Bookeo Standard (payment fees on top) to at least €5,388 with Bookingkit Starterkit (transaction fees included). In between: Booky START €588 excl. VAT and Tourbiz Advanced €1,488 excl. VAT (payment fees not stated); Yoplanning Micro €1,968 (payment fees not stated); Weezevent €1,980 incl. VAT (bank fees included); Activiteez PRO about €2,948 excl. VAT (payment included); Addock €3,740 excl. VAT (bank fees included). A commission grows with your volume, a subscription does not: run this calculation with your own bookings and average basket before signing.',
      },
      {
        question: 'What is the best booking software for a leisure activity?',
        answer:
          'The one that fits the way you sell, not the best known. Before signing, put it through a real day: a group of 12 booking on your website while a customer on the phone takes the last two kayaks, a storm at 2 pm that forces you to postpone a slot and warn everyone booked, a gift voucher used at reception, then the balance paid on site and the platform’s commission found in your accounts. Also check that the booking page is accessible: in France, a booking website has had to be since 28 June 2025, except for companies with fewer than 10 employees whose turnover or balance sheet stays under €2 million.',
      },
      {
        question: 'Which booking software for a treetop adventure course or a leisure park?',
        answer:
          'Guidap (treetop adventure, canoeing, caves) and Qweekle (ticketing, till, access control) are on quote, Logi-parc costs €216 a year, all-inclusive licence (excl. or incl. VAT not stated), Regiondo €59 or €99 per month and Booky €49 to €149 excl. VAT per month, with PPE from the PRO plan. Leisure park management software must also keep a record of your checks: in its October 2026 survey, the French consumer protection authority found “mandatory periodic equipment checks not recorded” and expired PPE. In France, admission to a high ropes course carries 10% VAT. Data ES, the French Ministry of Sports’ facility census, lists 757 high ropes courses or treetop adventure sites.',
      },
      {
        question: 'Which booking software for an escape game?',
        answer:
          'MyEscapeBoard, designed for escape games, costs €30 excl. VAT per room per month for rooms 1 to 6, €25 for rooms 7 to 14 and €20 beyond, from 3 rooms, with game master scheduling, individual payment and an API. The other software on this page sells time slots: check in a demo that a room can never be booked twice for the same slot, whether the booking comes from the website, the phone or a platform. In France, escape games, laser games and paintball carry 10% VAT (admission fees).',
      },
      {
        question: 'Which VAT rate for a leisure activity in France: 10, 20 or 5.5%?',
        answer:
          'It depends on the activity (BOFiP, BOI-TVA-LIQ-30-20-50). 10% for admission fees: high ropes courses, zip lines, summer toboggans, escape games, laser games, paintball, virtual reality, leisure parks. 20% for sports facilities (karting, even for fun, climbing, bowling, water sports), for equipment hire and for a lesson or a guide sold on its own; 5.5% for some equestrian activities. Karting or riding school management software must therefore carry a rate per service, and a package that mixes several activities follows a single rate, that of the main activity.',
      },
      {
        question: 'What should you do when the weather forces a cancellation?',
        answer:
          'In canoeing, kayaking and rafting, it is not a choice: in France the operator adapts or cancels the trip if the weather or the state of the water puts participants at risk (Sports Code, A322-44). The open question is what you owe when you are the one cancelling: arrhes paid back twice, like a business backing out, or is it force majeure? The answer depends on your terms of sale: have them reviewed by a lawyer. Weather refunds, as I wrote on 20 October 2026, are the point that does the most damage when badly handled: good software postpones or refunds a whole slot in a few clicks and warns everyone booked.',
      },
      {
        question: 'Deposit or arrhes: what should your terms of sale say?',
        answer:
          'Unless the contract says otherwise, an advance payment counts as arrhes in France: a customer who cancels loses it, a business that backs out pays back twice the amount (Consumer Code, L214-1). A leisure activity booked for a set date gives no right of withdrawal (L221-28), and you must offer a free consumer mediator (L612-1). In its survey published on 16 October 2026, the French consumer protection authority found incomplete terms of sale and missing information on the right of withdrawal, followed by injunctions. Record in the software the nature of each advance payment, arrhes or deposit, so you pay back the right amount when a booking is cancelled.',
      },
      {
        question: 'Do you have to declare a leisure activity in France in 2026?',
        answer:
          'The opening declaration for a sports facility was abolished in 2014, but the law of 3 August 2026 creates article L322-2-1 of the Sports Code, in force since 5 August: a Council of State decree will set the activity declaration, and it was not yet published on 1 November 2026. Meanwhile, every paid instructor declares themselves and holds a professional card, any serious accident is reported to the prefect, and liability insurance is mandatory (6 months in prison and a €7,500 fine without it). From 7 minors welcomed without their parents, the French rules for group holiday activities for minors apply.',
      },
      {
        question: 'Is there free booking software?',
        answer:
          'Yes, but free often means a commission: Yoplanning Découverte costs €0 with a 5% booking fee, Activiteez GO takes 10% + €0.40, Tourbiz Freemium 0.99% excl. VAT for 3 products and Ubiliz Forever Free 4% excl. VAT on online bookings. SimplyBook.me is free up to 50 bookings, with no transaction fees, and HelloAsso charges associations no fees and no commission (a voluntary contribution is offered to the payer). If you are looking for a free online booking planner, these are the plans; to start with no subscription and no commission, the free template on this page (Excel and PDF, in French) tracks your time slots, deposits, instructors and equipment checks.',
      },
      {
        question: 'Do you need certified till software to take payments on site?',
        answer:
          'Yes, if you are registered for VAT in France and take payments from private customers with till software: it must be secure, with the publisher’s certificate brought back by the finance law of 19 February 2026, or face a €7,500 fine per till. Businesses under the VAT franchise scheme are exempt, as are those whose payments all go through a bank. Activiteez sells the NF525 till as an option (+€20 excl. VAT per month) and Booky includes an anti-fraud till from the PRO plan.',
      },
      {
        question: 'Can my data be moved from my current software?',
        answer:
          'If your software exports your customers, bookings, products, gift vouchers and payments to Excel or CSV, I import them into the new tool; it is planned in the quote. Two limits set by the CNIL, the French data protection authority: a card’s security code is never kept after the first transaction, and customer data is kept 3 years after the end of the relationship, prospect data 3 years after the last contact. Check this export option before signing with a publisher.',
      },
    ],
  },
  relatedArticles: {
    title: 'Read next',
    slugs: LEISURE_BOOKING_PAGE_RELATED_ARTICLE_SLUGS,
  },
  contactCta: {
    title: 'Not sure which tool suits your leisure activities?',
    description:
      'Tell me about your activities, your seasons and your booking channels in a few lines. I reply within 24 hours, and if off-the-shelf software is enough for you, I will tell you.',
    button: 'Discuss my project',
  },
}
