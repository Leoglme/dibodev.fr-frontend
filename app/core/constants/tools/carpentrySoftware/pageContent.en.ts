import type { DibodevSoftwareToolPageContent } from '~/core/types/DibodevSoftwareToolPage'
import {
  BUILDER_WARRANTIES_SOURCE,
  CARPENTRY_PAGE_COMPARISON_ROWS_ON_SMALL_SCREENS,
  CARPENTRY_PAGE_PROJECT_SLUG,
  CARPENTRY_PAGE_RELATED_ARTICLE_SLUGS,
  CARPENTRY_PAGE_SCREENSHOT_URL,
  CARPENTRY_PAGE_UPDATED_AT,
  CARPENTRY_TEMPLATE_PDF_PATH,
  CARPENTRY_TEMPLATE_XLSX_PATH,
  CUSTOM_WINDOW_WITHDRAWAL_SOURCE,
  MAPRIMERENOV_SOURCE,
  REDUCED_VAT_CUSTOMER_STATEMENT_SOURCE,
} from '~/core/constants/tools/carpentrySoftware/pageShared'
import { E_INVOICING_SOURCE, HOME_REPAIR_QUOTE_RULES_SOURCE } from '~/core/constants/tools/officialSources'

export const CARPENTRY_PAGE_CONTENT_EN: DibodevSoftwareToolPageContent = {
  meta: {
    title: 'Carpentry and joinery software in France: 2026 prices',
    description:
      'Joinery software sold in France: 2026 prices (Obat, ProDevis, Anodos, Aléker…), a free 6-question test and a quote and cutting list template to download.',
    inLanguage: 'en',
    schemaAbout: 'Management software for carpentry, joinery and window fitting businesses in France',
  },
  breadcrumbLabel: 'Carpentry and joinery software',
  shareImage: {
    titleLines: ['Which software for', 'a joinery business?'],
    highlight: 'joinery business',
    subtitle:
      'Six questions, 2026 prices of the joinery software sold in France and a free quote and cutting list template',
    badge: 'Free test, in 2 minutes',
    icon: 'hammer',
    alt: 'Which software for your joinery business? Free 6-question test, 2026 prices of joinery software in France and a quote template with measurements and cutting list, on dibodev.fr',
  },
  hero: {
    titleBefore: 'Which software for your ',
    titleHighlight: 'joinery business',
    titleAfter: '?',
    description:
      'Answer six questions about your workshop, your fitters and what takes up your time. Window fitting, shopfitting, kitchens or bespoke woodwork, based on the French market the test tells you which kind of software to choose for your quotes, cutting lists, workshop and fitting schedule and invoices, and how much to budget.',
    reassurances: ['2 minutes', 'No sign-up, no email', 'Instant result'],
    authorIntro: 'Test designed by',
    authorBio:
      'a business software developer near Rennes, France. At Kodeva I built from scratch time-tracking software per job site, still used by small and mid-sized companies.',
    updatedAt: CARPENTRY_PAGE_UPDATED_AT,
  },
  marketSoftware: {
    anchorId: 'software',
    eyebrow: '2026 public prices',
    title: 'Joinery software sold in France and its prices',
    intro:
      'Three families share the trade: construction quoting software, joinery specialists (pricing from manufacturers’ price lists, production and fitting schedules) and design and cutting software. Here are the prices the publishers show. I found none that links, on its own, the measurements, the quote, the cutting list, the cutting plan, workshop and fitting hours and the margin of the job.',
    productColumnLabel: 'Software',
    coverageColumnLabel: 'What it handles',
    priceColumnLabel: 'Public price',
    products: [
      {
        name: 'Obat',
        coverage:
          'Unlimited quotes and invoices, 30,000 work items, e-invoicing (through Iopole); job profitability, time tracking and scheduling in the Croissance plan',
        price: '€49 to €129 excl. VAT per month',
        priceCondition:
          'Pro, Croissance or Booster for a VAT-registered tradesperson, €39 to €109 excl. VAT per month paid yearly; €25 to €95 excl. VAT for a micro-business not registered for VAT; extra licence €20 excl. VAT per month; no commitment on the monthly plan',
      },
      {
        name: 'Batappli',
        coverage:
          'AI-assisted quotes (8 or 16 a month), deposits, progress invoices, scheduling; job tracking and online payment in the Artisan plan',
        price: '€39 or €79 excl. VAT per month',
        priceCondition: 'Devis or Artisan, €429 or €869 excl. VAT a year; €19 per month per extra user; 10-day trial',
      },
      {
        name: 'Sage Batigest Connect',
        coverage:
          'Cost estimates and work item libraries, simplified (Standard) or advanced (Premium) job tracking; price lists of 700 manufacturers with the Sage e-tarif module; Windows only',
        price: '€36.08 to €122.25 per month',
        priceCondition: 'Excl. VAT; Essentials (1 user), Standard €55.33 (up to 10), Premium (up to 50); demo',
      },
      {
        name: 'ProDevis START (Elcia)',
        coverage:
          'Pricing from manufacturers’ price lists (“more than 2,000 price lists from 650 manufacturers”), several suppliers, orders; no invoices (full version of ProDevis, price not shown)',
        price: '€75 excl. VAT per month',
        priceCondition: 'Cancel at any time, no trial announced',
      },
      {
        name: 'Anodos',
        coverage:
          'Quotes and e-invoices, supplier orders, production and fitting schedule, milestone invoicing; snag tracking, Gantt chart and GPS clocking in the Pro plan',
        price: '€19 or €49 per month',
        priceCondition:
          'Excl. or incl. VAT not stated; Starter (1 user, 5 active projects) or Pro (5 users), €14 or €36 per month paid yearly; Business €73 per month paid yearly (15 users); 30-day trial with no card, no commitment',
      },
      {
        name: 'Aléker',
        coverage:
          'Parametric 3D CAD for joinery; automatic cutting lists, cost breakdown and export to 10 cutting optimisers (Pro); exports for Biesse and Homag machines (Pro CN)',
        price: '€3,590, then €79 to €169 per month',
        priceCondition:
          'Licence €3,590 excl. VAT plus compulsory rental (Basic €79, Pro €109, Pro CN €169 excl. VAT per month); initial 12-month commitment, 8 hours of training included; one-hour demo',
      },
      {
        name: 'MaxCut',
        coverage: 'Cutting lists and panel cutting optimisation, edge banding, drilling, cutting and labour costs',
        price: 'Free (Community)',
        priceCondition:
          'Business USD 20 excl. tax per month or USD 200 excl. tax a year, per device; no trial mentioned',
      },
      {
        name: 'EBP Bâtiment, HerculePro, Cabinet Vision, Codial',
        coverage:
          'Construction business management (EBP Bâtiment, Codial), pricing from “1,800+ catalogues” of manufacturers (HerculePro), design and manufacturing for shopfitters, kitchen fitters and wardrobe makers (Cabinet Vision)',
        price: 'On quote',
        priceCondition: 'Prices not published, demo',
      },
    ],
    calloutEmphasizedIntro: 'Before signing:',
    calloutText:
      'run a real job through the software. The measurements of a wardrobe or three windows, the quote with one variant and the VAT statement signed by the customer, the supplier order, the cutting list and the cutting plan, workshop and fitting hours, the deposit then the final invoice, and at the end the margin of the job, with nothing retyped.',
    calloutFootnote: 'Prices checked on 1 November 2026 on the publishers’ pricing pages. Non-exhaustive list.',
  },
  rules: {
    anchorId: 'rules',
    eyebrow: 'France in 2026',
    title: 'Quotes, VAT, withdrawal, warranties: what your joinery software must track in France in 2026',
    intro:
      'In France, a quote before any repair, the customer’s VAT statement, withdrawal for windows fitted under an off-premises contract, warranties, renovation grants and e-invoicing: in joinery, the 2026 rules go through your quotes, your handover reports and your invoices. Good software fills them in for you.',
    facts: [
      {
        contextLabel: 'Order of 24 January 2017',
        title: 'A quote before any repair job at a private home',
        text: 'Repairs, fixes or maintenance in joinery, garage doors and electric gates included: the detailed quote is handed over before the work, whatever the amount, with prices excluding and including VAT and its validity period. Your quotes and invoices also state your professional insurance: name and address of the insurer, geographical cover (law of 5 July 1996, article 22-2).',
        sourceName: HOME_REPAIR_QUOTE_RULES_SOURCE.name,
        sourceUrl: HOME_REPAIR_QUOTE_RULES_SOURCE.url,
      },
      {
        contextLabel: '10% and 5.5% VAT',
        title: 'No more certificate, a statement by the customer on the quote',
        text: 'The VAT certificate, simplified or not, is gone: for works in a home completed more than two years ago, the customer certifies the conditions of the reduced rate with a statement on the quote or the invoice. The French tax doctrine (BOFiP) publishes the models, for the 10% rate and for the 5.5% rate of energy renovation works.',
        sourceName: REDUCED_VAT_CUSTOMER_STATEMENT_SOURCE.name,
        sourceUrl: REDUCED_VAT_CUSTOMER_STATEMENT_SOURCE.url,
      },
      {
        contextLabel: 'Contract signed at the customer’s home',
        title: 'Made-to-measure windows fitted: 14 days to withdraw',
        text: 'For the sale and fitting of made-to-measure windows, shutters or doors signed away from your premises, the DGCCRF (French consumer authority) rules out the exception for custom-made goods: the customer has 14 days to withdraw, counted from receipt of the goods (and can do so from signature), and you cannot receive any payment within 7 days.',
        sourceName: CUSTOM_WINDOW_WITHDRAWAL_SOURCE.name,
        sourceUrl: CUSTOM_WINDOW_WITHDRAWAL_SOURCE.url,
      },
      {
        contextLabel: 'At the handover of the works',
        title: 'The handover report starts the warranties',
        text: 'Completion warranty (1 year, snags in the report included), two-year warranty (detachable equipment) and ten-year warranty (soundness of the structure and of its non-detachable elements, such as door and window frames): all three start at the handover (réception). The dated and signed report is the proof.',
        sourceName: BUILDER_WARRANTIES_SOURCE.name,
        sourceUrl: BUILDER_WARRANTIES_SOURCE.url,
      },
      {
        contextLabel: 'MaPrimeRénov’',
        title: 'Windows: no more single-measure grant in mainland France',
        text: 'The “par geste” (single-measure) route of MaPrimeRénov’, the French renovation grant, no longer funds window replacement in mainland France. Windows remain one of the four “building envelope” items of the whole-house renovation route, and the grant requires an RGE-certified tradesperson.',
        sourceName: MAPRIMERENOV_SOURCE.name,
        sourceUrl: MAPRIMERENOV_SOURCE.url,
      },
      {
        contextLabel: '1 September 2027',
        title: 'E-invoicing',
        text: 'Every French company must be able to receive e-invoices since 1 September 2026; small and mid-sized companies and micro-businesses will have to issue them from 1 September 2027.',
        sourceName: E_INVOICING_SOURCE.name,
        sourceUrl: E_INVOICING_SOURCE.url,
      },
    ],
    calloutEmphasizedIntro: 'What a custom tool does not replace:',
    calloutText:
      'your CAD software, nor your manufacturers’ catalogues, nor your accounts. Drawings and cutting lists stay in your CAD, prices with your manufacturers, and the tool takes what they export to link it to your quotes, your hours and your invoices.',
  },
  freeTemplate: {
    anchorId: 'template',
    eyebrow: 'Free template',
    title: 'A quote with measurements, a cutting list and a cutting plan, ready to fill in',
    description:
      'The joinery quote with the measurements of each item, supply, workshop and fitting, VAT per line with the customer’s statement and the withdrawal box of a contract signed at the customer’s home; the handover report that starts the warranties. In French: the PDF (quote and handover report) is printed; the Excel file calculates the quote totals, the material cost of the cutting list and a simple panel cutting plan.',
    items: [
      'Quote: reference, item, material, dimensions, quantity, supply, workshop and fitting hours, variants and options, VAT per line, deposit, ten-year insurance',
      'Cutting list and cutting plan (Excel): 10 cm extra length and 10 mm extra width, 30% waste by default, material cost, saw kerf, grain direction, reusable offcuts',
      'Handover report: snags, snag clearance, signatures and the start date of the 1, 2 and 10-year warranties',
    ],
    downloads: [
      {
        label: 'Download the PDF template',
        href: CARPENTRY_TEMPLATE_PDF_PATH,
        format: 'PDF, 2 pages, quote and handover report, in French',
      },
      {
        label: 'Download the Excel version',
        href: CARPENTRY_TEMPLATE_XLSX_PATH,
        format: 'Excel, 3 sheets, calculated totals and cutting list, in French',
      },
    ],
    footnote:
      'Free to use, to adapt to your company. It replaces neither your CAD software nor your accountant’s advice.',
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
            text: '€14 to €129 per month depending on the publisher; CAD such as Aléker adds a €3,590 excl. VAT licence',
          },
          { state: 'partial', text: 'Your subscription, plus €2,500 to €7,000 paid once' },
          { state: 'partial', text: '€5,000 to €25,000 paid once, plus €100 to €300 per month for maintenance' },
        ],
      },
      {
        label: 'Quotes, orders, invoices',
        cells: [
          { state: 'yes', text: 'Included in construction and joinery software' },
          { state: 'yes', text: 'Stay in your current software' },
          { state: 'yes', text: 'Designed around your work items, variants and hourly rates' },
        ],
      },
      {
        label: 'From measurements to margin: quote, cutting list, workshop and fitting hours',
        cells: [
          { state: 'partial', text: 'Spread across several programs (CAD, quotes, hours spreadsheet)' },
          { state: 'yes', text: 'The extension links your tools together' },
          { state: 'yes', text: 'One tool, from measurements to the margin of each job' },
        ],
      },
      {
        label: 'Your rules: in-house work items, rates per machine, snags after fitting',
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
    rowsShownOnSmallScreens: CARPENTRY_PAGE_COMPARISON_ROWS_ON_SMALL_SCREENS,
  },
  project: {
    slug: CARPENTRY_PAGE_PROJECT_SLUG,
    screenshotUrl: CARPENTRY_PAGE_SCREENSHOT_URL,
    showBrowserFrame: false,
    eyebrow: 'Already built',
    title: 'Time spent on each job, already counted in software in production',
    description:
      'Gest-Time is the time-tracking software I built from scratch at Kodeva, during my work-study years, for companies of 20 to 200 employees; it is still in production. Everyone enters their hours by day and by project, task or job site, on a tablet or a phone, and their manager approves them every week. It is not joinery software. But the cost price of a job comes in two halves: materials, which you read on supplier invoices, and workshop and fitting hours, which have to be counted. Gest-Time already does the second.',
    highlights: [
      'Hours entered to the quarter hour, by day and by job site, project or task',
      'Weekly approval, anomaly alerts and absence tracking',
      'Hourly costs and mileage, Excel and PDF exports',
    ],
    linkLabel: 'See the Gest-Time project',
    imageAlt:
      'Gest-Time on a phone: the day view with tasks and absences, and the keypad that enters hours by the quarter hour',
    browserBarCaption: 'Gest-Time · daily time entry',
  },
  faq: {
    eyebrow: 'Frequently asked questions',
    title: 'Joinery software: your questions',
    questions: [
      {
        question: 'How much does joinery software cost in France?',
        answer:
          'For quotes and invoices, count €25 excl. VAT per month with Tolteck (€19 paid yearly), €49 to €129 excl. VAT with Obat (€39 to €109 paid yearly), €39 or €79 excl. VAT with Batappli and €36.08 to €122.25 excl. VAT for Sage Batigest Connect. Joinery specialists show €75 excl. VAT per month for ProDevis START and €19 to €49 per month at Anodos (€14 to €36 paid yearly, excl. or incl. VAT not stated). The Aléker CAD costs a €3,590 excl. VAT licence plus €79 to €169 excl. VAT per month, and MaxCut is free in its Community version (prices checked on 1 November 2026). A custom extension costs €2,500 to €7,000 paid once, a complete tool €5,000 to €25,000, then €100 to €300 per month for maintenance.',
      },
      {
        question: 'Which quoting software for a joinery business?',
        answer:
          'It depends on where your quotes start. If you resell windows, shutters and doors, software that prices from manufacturers’ price lists saves you copying catalogues: ProDevis START announces “more than 2,000 price lists from 650 manufacturers”, HerculePro “1,800+ catalogues”, Sage Batigest Connect 700 manufacturers with its e-tarif module. If you price from site measurements with your own work items, construction quoting software is enough (Obat announces 30,000 work items, Tolteck a work item library, Batappli AI-assisted quotes). If you start from a 3D drawing, CAD that calculates the cost breakdown, such as Aléker in its Pro version, prices from the drawing.',
      },
      {
        question: 'Is there free joinery software?',
        answer:
          'For cutting, yes: MaxCut has a free Community version, and CutList Optimizer a free plan limited in the number of calculations. For quotes, Costructor offers a free Starter plan, and several paid publishers can be tried for free (30 days with no card at Anodos, one month at Tolteck, 15 days at INFast). SketchUp shows no free version on its pricing page. To start, the free template on this page (quote with measurements, cutting list and simple cutting plan, as PDF and Excel, in French) gets a workshop by, without scheduling or e-invoicing.',
      },
      {
        question: 'Can you optimise panel cutting in Excel?',
        answer:
          'For an estimate, yes: the “Plan de coupe” sheet of this page’s Excel template calculates, piece by piece, how many fit on a panel given the saw kerf and grain direction, how many panels to buy and which offcuts are big enough to reuse. For real nesting that mixes pieces on the same panel, an optimiser does better: CutList Optimizer (free with a calculation limit, then €15 or €25 per month) or MaxCut (free, Business at USD 20 excl. tax per month). The Menuiserie de l’Auxois adopted OptiCoupe for its panel and batten cutting plans, with less waste and handling according to Prévention BTP. Boole & Partners does not show its prices, and a British reseller sells OptiCut for €545 to €3,445 (excl. or incl. VAT not stated).',
      },
      {
        question: 'Which design software for a joiner and shopfitter?',
        answer:
          'To draw furniture and produce cutting lists, there is plenty of joinery design and manufacturing software: SketchUp (Go USD 10.75, Pro USD 33.25 and Studio USD 71.58 per month, billed yearly, excl. tax), Aléker (€3,590 excl. VAT licence plus €79 to €169 excl. VAT per month, Biesse and Homag exports in the Pro CN version), PolyBoard by Boole & Partners (€2,445 to €4,695 at a British reseller, excl. or incl. VAT not stated, no price from the publisher) or Cabinet Vision, on quote, for shopfitters, kitchen fitters and wardrobe makers. They design and produce cutting lists; the quote, the fitting schedule and the invoice are usually done in a second program. Before choosing, check that the cutting list exports, to Excel or CSV, to your quoting software.',
      },
      {
        question: 'Which VAT rate on a joinery quote in France, and is a certificate still needed?',
        answer:
          'The VAT certificate, simplified or not, no longer exists. To apply 10% (article 279-0 bis of the French tax code) or 5.5% for energy renovation works (article 278-0 bis A), the customer certifies the conditions with a statement on the quote or the invoice, for which the BOFiP publishes models (BOI-LETTRE-000280). Otherwise, the standard 20% rate applies. The technical criteria that open the 5.5% rate to a window are to be checked with your supplier or your accountant; the quote template on this page includes the statement, ready to sign.',
      },
      {
        question: 'Can a customer cancel an order for made-to-measure windows signed at home?',
        answer:
          'Yes. According to the DGCCRF, a contract signed off premises for the sale and fitting of made-to-measure windows, shutters or doors does not fall under the exception for goods “made to the consumer’s specifications”: the customer has 14 days to withdraw. The period runs from receipt of the goods, but the customer can withdraw from signature, and you cannot receive any payment within 7 days. Your quote signed at the customer’s home must therefore provide for it, and the deposit wait until those 7 days are over.',
      },
      {
        question: 'Which warranties after fitting, and from when?',
        answer:
          'Three warranties start at the handover of the works: the completion warranty (1 year, for the snags noted in the handover report and defects appearing during the year), the two-year warranty (for detachable equipment) and the ten-year warranty (for what compromises the soundness of the structure or makes it unfit for use; Service-Public lists door and window frames among the non-detachable elements). The dated and signed handover report sets this starting point: it is page 2 of the free template, with the snags and their clearance.',
      },
      {
        question: 'Are windows still funded by MaPrimeRénov’?',
        answer:
          'Not through the “par geste” (single-measure) route in mainland France: window replacement is no longer listed there. It remains one of the four “building envelope” items of MaPrimeRénov’ whole-house renovation, where each item chosen must cover at least 25% of the home’s surfaces. In both routes, the grant requires an RGE-certified tradesperson (Service-Public, page checked on 1 September 2026).',
      },
      {
        question: 'Wood dust: what are the obligations for the workshop?',
        answer:
          'Wood dust is classified as carcinogenic (IARC group 1), whatever the wood. The INRS (French occupational safety institute) lists the limit value of 1 mg/m³ over 8 hours (article R4412-149 of the French Labour Code), checked every year by an accredited body, extraction at source, cleaning by vacuum, enhanced individual health monitoring of exposed employees and a yearly check of the ventilation. Machines stay compliant with the rules of their date of first use, and their risks appear in the risk assessment document. A management tool can remind you of these checks when they are due.',
      },
      {
        question: 'How much does ProDevis cost in 2026?',
        answer:
          'Elcia shows ProDevis START at €75 excl. VAT per month, cancellable at any time: it prices from manufacturers’ price lists and places orders, but does not issue invoices. The price of the full version of ProDevis is not shown. Other amounts circulate online, from €55 to €175 depending on the website; only the price on the publisher’s page, checked here on 1 November 2026, counts.',
      },
      {
        question: 'Can my data be moved from my current software?',
        answer:
          'If your software exports your customers, jobs, work items and quotes to Excel or CSV, I import them into the new tool; it is planned in the quote. The cutting lists of your CAD software can take the same route. Check this export option before signing with a publisher.',
      },
    ],
  },
  relatedArticles: {
    title: 'Read next',
    slugs: CARPENTRY_PAGE_RELATED_ARTICLE_SLUGS,
  },
  contactCta: {
    title: 'Not sure which tool suits your joinery business?',
    description:
      'Tell me about your workshop, your jobs and your current tools in a few lines. I reply within 24 hours, and if off-the-shelf software is enough for you, I will tell you.',
    button: 'Discuss my project',
  },
}
