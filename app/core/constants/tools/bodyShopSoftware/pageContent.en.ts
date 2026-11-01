import type { DibodevSoftwareToolPageContent } from '~/core/types/DibodevSoftwareToolPage'
import {
  BODY_SHOP_PAGE_COMPARISON_ROWS_ON_SMALL_SCREENS,
  BODY_SHOP_PAGE_PROJECT_SLUG,
  BODY_SHOP_PAGE_RELATED_ARTICLE_SLUGS,
  BODY_SHOP_PAGE_SCREENSHOT_URL,
  BODY_SHOP_PAGE_UPDATED_AT,
  BODY_SHOP_TEMPLATE_PDF_PATH,
  BODY_SHOP_TEMPLATE_XLSX_PATH,
  CIRCULAR_ECONOMY_PARTS_SOURCE,
  COURTESY_CAR_SOURCE,
  FREE_CHOICE_OF_REPAIRER_SOURCE,
  GARAGE_RULES_SOURCE,
  PAINT_BOOTH_ICPE_SOURCE,
  VEHICLE_APPRAISAL_SOURCE,
} from '~/core/constants/tools/bodyShopSoftware/pageShared'

export const BODY_SHOP_PAGE_CONTENT_EN: DibodevSoftwareToolPageContent = {
  meta: {
    title: 'Auto body shop software in France: 2026 prices, claims',
    description:
      'Body shop software in France: 2026 prices (Gest’Garage, TDV, AutoProGestion, EBP…), what each does with an insurance claim, free 6-question test.',
    inLanguage: 'en',
    schemaAbout: 'Management software for auto body shops in France',
  },
  breadcrumbLabel: 'Auto body shop software',
  shareImage: {
    titleLines: ['Which software for', 'your body shop?'],
    highlight: 'body shop',
    subtitle:
      'Six questions, 2026 prices of the workshop software sold in France and a free quote and claim tracking template',
    badge: 'Free test, in 2 minutes',
    icon: 'wrench',
    alt: 'Which software for your auto body shop? Free 6-question test, 2026 prices of workshop software in France and a body shop quote template with a claim tracking sheet, on dibodev.fr',
  },
  hero: {
    titleBefore: 'Which software for your ',
    titleHighlight: 'body shop',
    titleAfter: '?',
    description:
      'Answer six questions about your workshop, your jobs and what takes up your time. Claims covered by insurers, direct quotes, fleets or glass breakage, based on the French market the test tells you which kind of software to choose to estimate, follow each job from the appraiser to the payment and keep the paint booth running, and how much to budget.',
    reassurances: ['2 minutes', 'No sign-up, no email', 'Instant result'],
    authorIntro: 'Test designed by',
    authorBio:
      'a business software developer near Rennes, France. At Kodeva I built from scratch time-tracking software per job site, still used by small and mid-sized companies.',
    updatedAt: BODY_SHOP_PAGE_UPDATED_AT,
  },
  marketSoftware: {
    anchorId: 'software',
    eyebrow: '2026 public prices',
    title: 'Body shop software sold in France and its prices',
    intro:
      'The prices that workshop software publishers show on their websites, and what each says about body repair. None of them replaces the standardised estimating tool (Sidexa, GT Estimate, DAT…) or access to Darva, the French insurers’ exchange platform: both are on quote, and a body shop working with insurers often stacks two or three subscriptions.',
    productColumnLabel: 'Software',
    coverageColumnLabel: 'What it handles',
    priceColumnLabel: 'Public price',
    products: [
      {
        name: 'Gest’Garage',
        coverage:
          'Quotes signed online, repair orders, invoices, a separate paint hourly rate, SMS and emails; the publisher states it has no manufacturer labour times, no paint estimating, no claim files and no photos on the repair order',
        price: '€19 incl. VAT per month',
        priceCondition:
          'Or €180 a year, up to 5 staff, extra garage €10 per month; 14-day trial with no card, no commitment',
      },
      {
        name: 'TDV Agent (Asttas group)',
        coverage:
          'Vehicle walk-around with 6 photos before check-in, damage map, customer signature, quotes, Factur-X invoices, stock, “insurance follow-up for body shops” and insurer invoices (Pro); no estimating, no Darva, no courtesy cars',
        price: '€19.90 to €79 incl. VAT per month',
        priceCondition:
          'Solo Essentiel €19.90 (diary only), Solo Complet €24.90, Essentiel €39 (1 site, unlimited users), Pro €79 (up to 3 sites); 14-day trial with no card, no commitment',
      },
      {
        name: 'AutoProGestion',
        coverage:
          'Quotes, repair orders with condition report, invoices, customer and vehicle records, stock; remote signature and video inspection (Pro), courtesy cars with contract and condition report (plan not specified); no estimating, no insurers',
        price: '€29 or €59 excl. VAT per month',
        priceCondition:
          '€24 or €49 excl. VAT paid yearly; Starter 100 customers and 2 users, Pro unlimited, Entreprise on quote; 14 days, card not charged',
      },
      {
        name: 'Kwixéo',
        coverage: 'Vehicles and repair orders, quotes, invoices, stock; body repair is not mentioned',
        price: '€18.33 to €89 excl. VAT per month',
        priceCondition:
          'Essentiel, Pro or Expert at €22, €59 and €89 excl. VAT per month, plus €6, €8 and €10 per extra user; paid yearly, €18.33 to €74.17 and €5 to €8.33 per user in the first year (2 months free, then 1); 14-day trial, no card',
      },
      {
        name: 'WinMotor Next (Solware Auto)',
        coverage:
          'Dealer management system for independent garages, brand agents and body shops: job files, workshop management, multi-payer invoicing and courtesy car scheduling (Premium); estimating, Darva and Sidexa absent from the pricing page; Windows 10 Pro only',
        price: '€68 excl. VAT per month for 1 user',
        priceCondition:
          'Starter €44 excl. VAT per user from 2 users, Premium €87 excl. VAT for 1 or €57 per user; set-up, data migration and maintenance not priced; no trial or commitment stated',
      },
      {
        name: 'ProGarage (BH Atelier)',
        coverage:
          'Quotes, repair orders, invoices, stock, Glasscheck windscreen estimating and “insurance management” from Essentiel; no body shop module as such',
        price: '€99 to €499 excl. VAT per month',
        priceCondition:
          'Starter €99 (1 user), Essentiel €199 (3), Performance €299 (5), Intégral €499 (unlimited); 3 months free when paid yearly; 7-day trial, no commitment',
      },
      {
        name: 'EBP MéCa PRO + Carrosserie module, Fiducial (V-Mobility, Vulcain), Repair Soft, Cilea Mastercar, 3Dsoft MecaPlanning',
        coverage:
          'Dealer management systems with claim files: Darva exchanges, estimating tool interfaces (Sidexa, Qapter, ETAI), claim notice filled in from the insurer’s data, insurer / customer split, assignment of claim, replacement vehicles, scheduling by skill and light / medium / heavy damage (3Dsoft), depending on the publisher; Darva is subscribed separately',
        price: 'On quote',
        priceCondition: 'Prices not published; free demo',
      },
      {
        name: 'Estimating tools: Sidexa Qapter, GT Estimate, DAT, Lacour Diva, Atelio Chiffrage',
        coverage:
          'Standardised estimate from manufacturer data (labour times, parts, paint), accepted by the appraiser and the insurer; Qapter detects damage on photos. An estimating tool does not produce the repair order, the invoice or the schedule',
        price: 'On quote',
        priceCondition: 'No public price; GT Estimate offers a 15-day trial',
      },
    ],
    calloutEmphasizedIntro: 'Before signing:',
    calloutText:
      'run a real job through the software. The vehicle photos at check-in, the estimate sent to the appraiser, the approval back in the job with the gap, a part on back order that pushes the paint booth slot, the courtesy car handed out then returned, then the invoice split between the insurer and the customer, with nothing retyped.',
    calloutFootnote: 'Prices checked on 1 November 2026 on the publishers’ pricing pages. Non-exhaustive list.',
  },
  rules: {
    anchorId: 'rules',
    eyebrow: 'France in 2026',
    title: 'Posted rates, reused parts, appraiser, courtesy car: what your software must track in France in 2026',
    intro:
      'In France, a body repair job is more than a quote: the posted panel and paint rates, the customer’s choice on reused parts, the free choice of repairer reminded by the insurer, the appraiser’s approval, the courtesy car and the paint booth each have their own rule. Your documents and your job tracking have to carry them.',
    facts: [
      {
        contextLabel: 'Order of 27 March 1987',
        title: 'A panel rate and a paint rate, each posted including VAT',
        text: 'When your hourly rates differ (mechanics, body, paint), each one is posted including VAT outside and at reception, with the calculation method (time spent or a schedule available for consultation). Administrative fine up to €3,000, €15,000 for a company.',
        sourceName: GARAGE_RULES_SOURCE.name,
        sourceUrl: GARAGE_RULES_SOURCE.url,
      },
      {
        contextLabel: 'Since 1 October 2024',
        title: 'The customer’s choice on reused parts, recorded and kept for 2 years',
        text: 'Removable body panels, non-bonded glazing, lights, interior trim: the customer chooses between a new part and a circular economy part, on a durable medium, before accepting the quote, with availability, lead time and price. A copy is kept for 2 years, and the information is also shown on your website.',
        sourceName: CIRCULAR_ECONOMY_PARTS_SOURCE.name,
        sourceUrl: CIRCULAR_ECONOMY_PARTS_SOURCE.url,
      },
      {
        contextLabel: 'Insurance Code, art. L211-5-1',
        title: 'The free choice of repairer, reminded as soon as the claim is declared',
        text: 'The policyholder chooses their repairer, and the insurer reminds them clearly at the first contact to declare the claim, in writing if the reminder is oral (order of 17 June 2016). Since December 2020, a clause forbidding them to assign their indemnity claim to you is void (art. L211-5-2).',
        sourceName: FREE_CHOICE_OF_REPAIRER_SOURCE.name,
        sourceUrl: FREE_CHOICE_OF_REPAIRER_SOURCE.url,
      },
      {
        contextLabel: 'No legal deadline for the report',
        title: 'The insurer chooses the appraiser “on average within 15 days”',
        text: 'The insurer chooses the appraiser, on average within 15 days of the declaration, and the appraiser intervenes on site or on photos for minor claims; no text sets a deadline for the report. Do not repair before the visit, except in an emergency. Vehicle beyond economical repair: the insurer offers a settlement within 15 days of the report (article L327-1 of the French Highway Code).',
        sourceName: VEHICLE_APPRAISAL_SOURCE.name,
        sourceUrl: VEHICLE_APPRAISAL_SOURCE.url,
      },
      {
        contextLabel: 'Court of Cassation, 25 November 2003',
        title: 'Courtesy car: inform the customer about its insurance',
        text: 'Nothing obliges you to lend a vehicle. If you do, you must inform the customer about the insurance cover that applies, and the vehicle is at least insured for third-party liability. A loan agreement and condition reports at hand-over and return are common practice, to keep in the job file.',
        sourceName: COURTESY_CAR_SOURCE.name,
        sourceUrl: COURTESY_CAR_SOURCE.url,
      },
      {
        contextLabel: 'ICPE, heading 2930',
        title: 'Paint booth: declaration above 10 kg of products a day',
        text: 'Body shops fall under heading 2930 of the French classified installations: applying paint, varnish or primer requires a declaration with inspection above 10 kg of products a day, and registration above 100 kg. Tracking the quantities put through the booth tells you which side of the threshold you are on.',
        sourceName: PAINT_BOOTH_ICPE_SOURCE.name,
        sourceUrl: PAINT_BOOTH_ICPE_SOURCE.url,
      },
    ],
    calloutEmphasizedIntro: 'What a custom tool does not replace:',
    calloutText:
      'your estimating tool, whose manufacturer times and parts are licensed, nor Darva, which insurers require, nor your accounts. It follows the job between these tools (photos, appraiser’s approval, parts, booth, courtesy car, insurer and customer shares, reminders), then exports to your dealer management system or your accountant.',
  },
  freeTemplate: {
    anchorId: 'template',
    eyebrow: 'Free template',
    title: 'A body shop quote with photo survey and a claim tracking sheet ready to fill in',
    description:
      'The quote with panel and paint rates, the damage survey photo by photo, the nature of each part (new, reused, equivalent quality, exchange), the insurer’s share and the customer’s; the tracking sheet of a job, from the vehicle’s arrival to the insurer’s payment. In French, as a PDF to print or an Excel file with totals, days off the road, quote / approval gap and insurer receivables calculated.',
    items: [
      'Body shop quote: claim (insurer, claim number, appraiser, appraisal method), photo survey by area with repair / replace decision and reused part offered, estimate lines with panel and paint hours, insurer / customer shares, assignment of claim, customer agreements',
      'Claim tracking sheet: photos and quote sent, appraiser’s approval and amount, parts ordered, received or missing, panel work, paint booth slot, courtesy car, return, invoice, insurer’s payment and reminders',
      'In the Excel file: days off the road, quote / approval gap, insurer receivables, jobs waiting for parts or approval and paint booth occupancy calculated, plus a booth schedule and a courtesy car register',
    ],
    downloads: [
      {
        label: 'Download the PDF template',
        href: BODY_SHOP_TEMPLATE_PDF_PATH,
        format: 'PDF, 2 pages, in French',
      },
      {
        label: 'Download the Excel version',
        href: BODY_SHOP_TEMPLATE_XLSX_PATH,
        format: 'Excel, 3 sheets, calculated totals and delays, in French',
      },
    ],
    footnote:
      'Free to use, to adapt to your workshop. It replaces neither the estimating tool nor your accountant’s advice.',
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
          {
            state: 'yes',
            text: '€18 to €499 per month for the workshop software; estimating tool and Darva extra, on quote',
          },
          { state: 'partial', text: 'Your subscription, plus €2,500 to €7,000 paid once' },
          { state: 'partial', text: '€5,000 to €25,000 paid once, plus €100 to €300 per month for maintenance' },
        ],
      },
      {
        label: 'Standardised estimating and Darva exchanges',
        cells: [
          { state: 'partial', text: 'Through the estimating tool and a Darva partner system, both on quote' },
          { state: 'yes', text: 'Stay in your current tools' },
          { state: 'partial', text: 'Stay in your estimating tool and Darva, connected to the tool' },
        ],
      },
      {
        label: 'Claim tracking (approval, parts, booth, courtesy car, payment)',
        cells: [
          { state: 'partial', text: 'Complete in systems with a body shop module, absent from software under €100' },
          { state: 'yes', text: 'For the points the extension adds' },
          { state: 'yes', text: 'Designed around your circuit, from the photo survey to the payment' },
        ],
      },
      {
        label: 'Customer kept informed (job steps, photos, courtesy car)',
        cells: [
          { state: 'partial', text: 'Often an SMS or a publisher portal, in its colours' },
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
    rowsShownOnSmallScreens: BODY_SHOP_PAGE_COMPARISON_ROWS_ON_SMALL_SCREENS,
  },
  project: {
    slug: BODY_SHOP_PAGE_PROJECT_SLUG,
    screenshotUrl: BODY_SHOP_PAGE_SCREENSHOT_URL,
    showBrowserFrame: true,
    eyebrow: 'Already built',
    title: 'Time-tracking software per job site, already in production',
    description:
      'Gest-Time is the working-time software I built from scratch at Kodeva, during my work-study years. Teams enter their hours by project or job site on a tablet, and managers approve them every week. It is not body shop software, but the principle is the same as counting the panel and paint hours spent on each job, to know its margin against the amount approved by the appraiser.',
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
    title: 'Auto body shop software: your questions',
    questions: [
      {
        question: 'How much does body shop software cost in France?',
        answer:
          'For the workshop software: Gest’Garage €19 incl. VAT per month, TDV Agent €19.90 to €79 incl. VAT, AutoProGestion €29 or €59 excl. VAT, Kwixéo €22 to €89 excl. VAT per month (€18.33 to €74.17 in the first year paid yearly), WinMotor Next €68 excl. VAT for one user (€44 per user from two), ProGarage €99 to €499 excl. VAT. Dealer management systems with a body shop module (EBP MéCa PRO, Fiducial, Repair Soft, Cilea, 3Dsoft) and estimating tools (Sidexa, GT Estimate, DAT, Lacour, Atelio) are on quote, and Darva access is subscribed separately (prices checked on 1 November 2026). A custom extension costs €2,500 to €7,000 paid once, a complete tool €5,000 to €25,000, then €100 to €300 per month for maintenance.',
      },
      {
        question: 'Do I need an estimating tool (Sidexa, GT Estimate, DAT) on top of the workshop software?',
        answer:
          'Yes, as soon as your jobs go through insurers: the estimating tool produces, from licensed manufacturer labour times and parts, an estimate that the appraiser and the insurer accept. No workshop software under €100 per month includes one, and Gest’Garage says so itself: no manufacturer times, no paint estimating. Systems with a body shop module (EBP MéCa PRO, Fiducial, Repair Soft) connect to these tools to avoid retyping, once an account is opened with each platform. Sidexa Qapter goes further by detecting damage on photos. For customers paying themselves, workshop software with a separate paint rate is often enough.',
      },
      {
        question: 'What is Darva, and how much does it cost?',
        answer:
          'Darva is the French exchange platform between insurers, appraisers and repairers, created in 1988 near Niort and mostly owned by insurers; its presentation page mentions 9 million claim files. The insurer’s assignment, the claim notice, the photos, the appraiser’s approval, the invoice and the payment go through it. It is not management software: it is reached through a partner system (EBP, Fiducial, Solware, Cilea, Repair Soft…) or the Sinapps Auto portal, with a separate subscription whose price is not published. Its Flash service sends the policyholder an SMS link to photograph the damage themselves. Not to be confused with Alpha Scale, which is not an estimating tool but a parts purchasing centre created by Prefikar, a subsidiary of Axa.',
      },
      {
        question: 'Can I track my claims without specialised software, or with free software?',
        answer:
          'The software listed here is all paid, but most of it can be tried for free: 14 days with no card at Gest’Garage, TDV Agent and Kwixéo, 14 days at AutoProGestion (card not charged), 7 days at ProGarage, 15 days for the GT Estimate estimating tool. For a small body shop, the free tracking sheet on this page, one row per job in Excel, is enough to see where each vehicle stands and what each insurer owes you. What a spreadsheet does not do: attach photos to the job, chase the appraiser or the supplier by itself, and hold up beyond about thirty jobs open at the same time.',
      },
      {
        question: 'Which reused parts should a body shop offer in France?',
        answer:
          'The categories of the French Consumer Code (art. R224-25) target your workshop directly: removable body panels, interior trim, non-bonded glazing, lights, and some mechanical or electronic parts outside running gear, steering, braking and suspension. You may skip them when the service is free, under warranty or part of a recall, when the part is not available within a lead time compatible with the vehicle’s time off the road, or when safety is at risk (art. R224-24), noting the reason. The customer’s choice is recorded on a durable medium before their agreement, with availability, lead time and price, and a copy is kept for 2 years; the information is posted outside and on your website. Penalty: up to €3,000, €15,000 for a company. Equivalent quality parts have no rule of their own; since 1 January 2023, glazing is free of design rights and other visible parts may come from the original equipment supplier (art. L513-6 of the French Intellectual Property Code).',
      },
      {
        question: 'What should I tell the customer about the free choice of repairer?',
        answer:
          'That their policy mentions it and that their insurer must remind them of it at the first contact to declare the claim, in writing if it was oral (art. L211-5-1 of the French Insurance Code, order of 17 June 2016): they can have the repair done at your shop even if the insurer steers them to its approved network. The insurer keeps the choice of the appraiser, whom it appoints on average within 15 days, and no text sets a deadline for the report. The quote template on this page has a “free choice of repairer reminded to the customer” box, useful if the job is disputed later.',
      },
      {
        question: 'How does the assignment of claim work?',
        answer:
          'The customer assigns their right to the indemnity to you: you invoice the insurer directly for its share, and the customer only pays you their excess and any depreciation. Since the French law of 3 December 2020, a policy clause forbidding this assignment is void (art. L211-5-2 of the Insurance Code). Have an assignment document signed with the quote and keep it in the job file; EBP MéCa PRO handles it through a Mobilians interface, and the free template on this page has its “assignment of claim: yes / no” line and its two shares, insurer and customer.',
      },
      {
        question: 'Courtesy car: who insures it, and what should the job file keep?',
        answer:
          'You are not obliged to lend a vehicle. If you do, you must inform the customer about the insurance cover that applies (Court of Cassation, 25 November 2003), and the vehicle is at least insured for third-party liability: check that your workshop policy covers vehicles lent to customers. Keep in the job file a loan agreement, the condition reports at hand-over and return, the mileage and the dates. On the software side, AutoProGestion handles the contract and the condition report, WinMotor Next (Premium) and 3Dsoft the courtesy car schedule, Repair Soft replacement vehicles; the free Excel file on this page has a loan register.',
      },
      {
        question: 'Paint booth: am I a classified installation, and what about waste?',
        answer:
          'Body shops fall under heading 2930 of the French classified installations: applying paint, varnish or primer requires a declaration with inspection above 10 kg of products a day and registration above 100 kg; repair itself does above 2,000 m² of workshop. Keep count of the quantities put through the booth to know which side of the threshold you are on. Paints, solvents, aerosols, oils and batteries are hazardous waste: the tracking slip has been dematerialised on Trackdéchets since 1 January 2022, and the chronological register is declared there since 5 May 2025, within 7 days. An end-of-life vehicle goes to an approved ELV centre, with a destruction certificate.',
      },
      {
        question: 'E-invoicing and invoices to insurers: what changes?',
        answer:
          'Every French company must be able to receive e-invoices since 1 September 2026, and small and mid-sized companies will have to issue them from 1 September 2027. Your invoices to insurers and fleets are business-to-business invoices: they will go through an accredited platform, in Factur-X or an equivalent format; invoices to private customers fall under e-reporting. So check that your software can split an invoice between the insurer’s share and the customer’s (TDV Agent in its Pro plan, WinMotor Next with its multi-payer invoicing, EBP MéCa PRO with its insurance / customer split) and that it already produces Factur-X, as TDV Agent does from its Essentiel plan.',
      },
      {
        question: 'Can my data be moved from my current software?',
        answer:
          'If your software exports your customers, vehicles, jobs and invoices to Excel or CSV, I import them into the new tool; it is planned in the quote. Check this export option before signing with a publisher, and ask what happens to the photos.',
      },
    ],
  },
  relatedArticles: {
    title: 'Read next',
    slugs: BODY_SHOP_PAGE_RELATED_ARTICLE_SLUGS,
  },
  contactCta: {
    title: 'Not sure which tool suits your body shop?',
    description:
      'Tell me about your workshop and your jobs in a few lines. I reply within 24 hours, and if off-the-shelf software is enough for you, I will tell you.',
    button: 'Discuss my project',
  },
}
