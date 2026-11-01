import type { DibodevSoftwareToolPageContent } from '~/core/types/DibodevSoftwareToolPage'
import {
  ANNUAL_INVENTORY_SOURCE,
  DOCUMENT_RETENTION_SOURCE,
  INVENTORY_MANAGEMENT_PAGE_COMPARISON_ROWS_ON_SMALL_SCREENS,
  INVENTORY_MANAGEMENT_PAGE_PROJECT_SLUG,
  INVENTORY_MANAGEMENT_PAGE_RELATED_ARTICLE_SLUGS,
  INVENTORY_MANAGEMENT_PAGE_SCREENSHOT_URL,
  INVENTORY_MANAGEMENT_PAGE_UPDATED_AT,
  INVENTORY_MANAGEMENT_TEMPLATE_PDF_PATH,
  INVENTORY_MANAGEMENT_TEMPLATE_XLSX_PATH,
  STOCK_VALUATION_SOURCE,
  STOCK_WITHDRAWAL_VAT_SOURCE,
  USE_BY_DATE_SOURCE,
} from '~/core/constants/tools/inventoryManagementSoftware/pageShared'
import { E_INVOICING_SOURCE } from '~/core/constants/tools/officialSources'

export const INVENTORY_MANAGEMENT_PAGE_CONTENT_EN: DibodevSoftwareToolPageContent = {
  meta: {
    title: 'Inventory software in France: 2026 price comparison',
    description:
      'Inventory management software sold in France: 2026 prices (Odoo, Zoho, Monstock, Erplain…), a free 6-question test and a cycle count sheet to download.',
    inLanguage: 'en',
    schemaAbout: 'Inventory and stock management software for small businesses in France',
  },
  breadcrumbLabel: 'Inventory management software',
  shareImage: {
    titleLines: ['Which software for', 'your inventory?'],
    highlight: 'inventory',
    subtitle: 'Six questions, 2026 prices of the inventory software sold in France and a free cycle count sheet',
    badge: 'Free test, in 2 minutes',
    icon: 'clipboard',
    alt: 'Which software to manage your inventory? Free 6-question test, 2026 prices of inventory management software in France and a cycle count sheet to download, on dibodev.fr',
  },
  hero: {
    titleBefore: 'Which software to ',
    titleHighlight: 'manage your inventory',
    titleAfter: '?',
    description:
      'Answer six questions about your team, your storage locations and what you stock. Shop, workshop, rented equipment or goods with a use-by date, based on the French market the test tells you which kind of software to choose for your receipts, issues and stock counts, and how much to budget per month for your team.',
    reassurances: ['2 minutes', 'No sign-up, no email', 'Instant result'],
    authorIntro: 'Test designed by',
    authorBio:
      'a business software developer near Rennes, France. At Kodeva I built StockPME from scratch, inventory management software with QR labels that small and mid-sized companies still use.',
    updatedAt: INVENTORY_MANAGEMENT_PAGE_UPDATED_AT,
  },
  marketSoftware: {
    anchorId: 'software',
    eyebrow: '2026 public prices',
    title: 'Inventory management software sold in France and its prices',
    intro:
      'The prices the publishers show on their websites, from free plans to subscriptions. They mostly depend on the number of users, then on the number of warehouses and orders per month, and on options such as batches or barcodes.',
    productColumnLabel: 'Software',
    coverageColumnLabel: 'What it handles',
    priceColumnLabel: 'Public price',
    products: [
      {
        name: 'Odoo Inventory',
        coverage:
          'Multi-warehouse, barcodes and QR codes, serial numbers and lots, cycle counts, FIFO or average cost valuation, min-max replenishment with purchase orders, offline mode',
        price: '€0, then €19.90 to €24.90 per user per month',
        priceCondition:
          'Free with the Inventory app alone, unlimited users, hosting included; Standard plan from the second app (12-month discount, list prices €24.90 to €31.10), Custom €35.90 to €44.90; implementation and code maintenance not included',
      },
      {
        name: 'Zoho Inventory',
        coverage:
          'Composite items, customer and vendor portals, serial numbers and batches from Professional, barcode generation and stock counting from Premium',
        price: '€0 to €249 per organisation per month',
        priceCondition:
          'Free: 1 user, 2 warehouses, 50 orders per month; Standard €29 (2 users, 2 warehouses, 500 orders), Professional €79 (4 warehouses), Premium €129 (6 warehouses), Enterprise €249 (7 users, 10 warehouses), billed yearly; extra user €7.50 per month; 14-day trial, no card',
      },
      {
        name: 'Dolibarr and DoliCloud',
        coverage:
          'Open-source ERP with a multi-warehouse Stocks module, lots and serial numbers with use-by and best-before dates as standard, Inventory module (counting and validation of corrections), barcode scanner through an external module or an Android app',
        price: '€0 (open source), hosted from €14 excl. VAT per user per month',
        priceCondition:
          'Install it yourself, or DoliCloud Basic €14 per user (4 GB, every official module, ticket support) and Premium €30 per month plus €15 per user; French tax compliance certificate €5 per user on Basic, included on Premium; 30-day trial, no commitment',
      },
      {
        name: 'Monstock',
        coverage: 'Stock and flow management, on desktop and mobile',
        price: '€14.90 to €51.90 excl. VAT per month for the first user',
        priceCondition:
          'Prepaid yearly: Essential €14.90 plus €9.90 per extra user (10 users at most), Professional €24.90 plus €19.90, Enterprise €39.90 plus €29.90; monthly €19.90 plus €12.90, €32.90 plus €25.90, €51.90 plus €38.90; 14-day trial, no card, no commitment; data import €450 excl. VAT, training €950 excl. VAT per day',
      },
      {
        name: 'Stockpit (by Erplain)',
        coverage:
          'Stock levels, adjustments and weighted average, FIFO or LIFO valuation on Power; synchronised sales, purchases, multiple storage locations and delivery notes on Smart; kits, packaging units and lot numbers on Boost; plugs into Pennylane, Sellsy or QuickBooks for invoicing',
        price: '€19 to €59 excl. VAT per user per month',
        priceCondition:
          'With Pennylane: Power €19, Smart €39, Boost €59 (€190, €390 and €590 a year); with Sellsy, Smart and Boost only; with QuickBooks, prices in dollars and a Storage locations plan at $9; 1,000 orders per month on Smart and Boost, then €0.03 per order; optional API at €30 excl. VAT per month; 14-day trial',
      },
      {
        name: 'Erplain',
        coverage:
          'Stock levels, counts, variants, alerts, barcodes, valuation; quotes, orders, delivery notes, French e-invoicing',
        price: '€59 to €308.40 excl. VAT per month',
        priceCondition:
          'Billed yearly with a 12-month commitment: €59 for 1 user and 1,000 orders per month, €14 per extra user, €0.03 per order beyond; tiers at €138 and €257; monthly with no commitment: €70.80, €165.60 and €308.40, €16.80 per extra user; 14-day trial, no card',
      },
      {
        name: 'Axonaut',
        coverage:
          'Sales management with stock included: weighted average cost and real-time stock value, low stock alert, automatic decrement, goods receipt, traceability by lot, serial number, use-by and best-before date',
        price: 'From €58.20 per month',
        priceCondition:
          'Small business plan: €97 per month with 1 user, then €30 per extra user; paid for 1 year €77.60 plus €24 per user, for 2 years €67.90 plus €21, for 3 years €58.20 plus €18; no commitment; 15-day trial',
      },
      {
        name: 'Sortly',
        coverage:
          'Photo-based inventory app, folders and custom fields, QR labels from Advanced, QR and barcodes from Ultra',
        price: '$0 to $149 per month, in US dollars',
        priceCondition:
          'Free: 100 items, 1 user; Advanced $24 (500 items, 2 users), Ultra $74 (2,000 items, 5 users), Premium $149 (5,000 items, 8 users), first-year prices billed yearly; 14-day trial with card, subscription starts unless cancelled',
      },
      {
        name: 'Sage 100 Gestion Commerciale, Hector, Timly',
        coverage:
          'Sales management with stock (Sage); equipment and stock tracking by QR code, loans and returns (Hector, Timly)',
        price: 'On quote or not published',
        priceCondition:
          'Sage: sold through resellers, entry price announced from €64 excl. VAT per month; Hector: plans shown with no readable amount, 15-day trial, no card; Timly: from €195 per month, stock management from €495',
      },
    ],
    calloutEmphasizedIntro: 'Before signing:',
    calloutText:
      'run a real week through the software. A 40-line delivery received against the supplier’s note with two items missing, a box transferred from the storeroom to the van, an item found by its QR label in a basement with no network, a shelf counted on Friday evening with its differences corrected, then the valued stock sent to the accountant, with nothing retyped.',
    calloutFootnote: 'Prices checked on 1 November 2026 on the publishers’ pricing pages. Non-exhaustive list.',
  },
  rules: {
    anchorId: 'rules',
    eyebrow: 'France in 2026',
    title: 'Yearly count, valuation, use-by dates: what your inventory software must track in France in 2026',
    intro:
      'In France, stock is more than a list of quantities. The Commercial Code requires a count every year, the tax authorities a value at year end, VAT a record of goods taken out, the 2027 e-invoicing a delivery date and address, and foodstuffs a lot number and a use-by date. These rules all go through the movements and documents of your tool.',
    facts: [
      {
        contextLabel: 'French Commercial Code, art. L123-12',
        title: 'A stock count at least once every twelve months',
        text: 'Every company that keeps accounts checks the existence and value of its stock by a physical count at least once every twelve months. Cycle counting spreads this count over the year; it does not exempt you from counting every item.',
        sourceName: ANNUAL_INVENTORY_SOURCE.name,
        sourceUrl: ANNUAL_INVENTORY_SOURCE.url,
      },
      {
        contextLabel: '10 years',
        title: 'Purchase orders, delivery notes and invoices kept 10 years',
        text: 'Purchase orders, delivery notes, customer and supplier invoices and the inventory book are kept for 10 years from the end of the financial year (French Commercial Code, art. L123-22). A goods receipt note filed in the tool with its invoice meets this obligation.',
        sourceName: DOCUMENT_RETENTION_SOURCE.name,
        sourceUrl: DOCUMENT_RETENTION_SOURCE.url,
      },
      {
        contextLabel: 'BOFiP, French Tax Code art. 38',
        title: 'Stock valued at cost price, not just counted',
        text: 'At year end, stock is valued at cost price, or at market price when lower. No company is exempt, even with thousands of items: the tool must produce a value (weighted average cost or FIFO), not just quantities.',
        sourceName: STOCK_VALUATION_SOURCE.name,
        sourceUrl: STOCK_VALUATION_SOURCE.url,
      },
      {
        contextLabel: 'VAT, BOFiP',
        title: 'Goods taken for personal use or as gifts are a separate issue',
        text: 'Goods taken out of stock for anything other than the needs of the business (personal use, gift, internal use) are subject to VAT when it was deducted on purchase. Each issue of this kind is recorded with its reason and value, apart from sales and breakage.',
        sourceName: STOCK_WITHDRAWAL_VAT_SOURCE.name,
        sourceUrl: STOCK_WITHDRAWAL_VAT_SOURCE.url,
      },
      {
        contextLabel: 'Foodstuffs',
        title: 'No sale the day after the use-by date',
        text: 'Offering a product for sale after its use-by date (DLC) is forbidden in France: a €1,500 fine per product. A product past its best-before date (DDM) may still be sold. For foodstuffs, the lot (marked “L”) and the date are tracked line by line.',
        sourceName: USE_BY_DATE_SOURCE.name,
        sourceUrl: USE_BY_DATE_SOURCE.url,
      },
      {
        contextLabel: '1 September 2027',
        title: 'E-invoicing, with the delivery date and address',
        text: 'Every French company must be able to receive e-invoices since 1 September 2026; small businesses and micro-enterprises will have to issue them from 1 September 2027. The invoice states the delivery date, and the delivery address when it differs: the tool’s delivery note must provide them.',
        sourceName: E_INVOICING_SOURCE.name,
        sourceUrl: E_INVOICING_SOURCE.url,
      },
    ],
    calloutEmphasizedIntro: 'What a custom tool does not replace:',
    calloutText:
      'your invoicing software nor your accounts. Stock issues feed your quotes, invoices or online shop, the valued stock goes to your accountant at year end, and the tool plugs into your current tools (Pennylane, Sellsy, point of sale, online shop).',
  },
  freeTemplate: {
    anchorId: 'template',
    eyebrow: 'Free template',
    title: 'A cycle count sheet and a supplier goods receipt note ready to fill in',
    description:
      'The count sheet of an area or a warehouse: book stock, counted quantity, difference, value of the difference and likely cause, line by line; the receipt note of a delivery: quantities ordered, delivered and accepted, condition, lot or serial number, use-by date, reservations and matching with the invoice. In French, as a PDF to print or an Excel file with differences, accuracy rate and totals calculated.',
    items: [
      'Cycle count sheet: warehouse or area, ABC class and frequency, item, location, lot, book stock, counted quantity, difference in quantity and value, cause, counted by, approved by',
      'Supplier goods receipt note: order and delivery note numbers, quantities ordered, delivered and accepted, condition, lot or serial number, use-by date, storage location, reservations, invoice matched',
      'Useful benchmarks: every item counted at least once every 12 months (French Commercial Code, art. L123-12); notes and invoices kept 10 years; goods taken for personal use recorded as a separate issue',
    ],
    downloads: [
      {
        label: 'Download the PDF template',
        href: INVENTORY_MANAGEMENT_TEMPLATE_PDF_PATH,
        format: 'PDF, 2 pages, in French',
      },
      {
        label: 'Download the Excel version',
        href: INVENTORY_MANAGEMENT_TEMPLATE_XLSX_PATH,
        format: 'Excel, 2 sheets, calculated differences and totals, in French',
      },
    ],
    footnote: 'Free to use, to adapt to your company and your products.',
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
          { state: 'yes', text: '€0 to €257 per month billed yearly, most often per user' },
          { state: 'partial', text: 'Your subscription, plus €2,500 to €7,000 paid once' },
          { state: 'partial', text: '€5,000 to €25,000 paid once, plus €100 to €300 per month for maintenance' },
        ],
      },
      {
        label: 'Product sheets, receipts, issues, reorder alerts',
        cells: [
          { state: 'yes', text: 'Included everywhere, free plans too (with a limit on users or orders)' },
          { state: 'yes', text: 'Stay in your current software' },
          { state: 'yes', text: 'Designed around your items and your flows' },
        ],
      },
      {
        label: 'Your rules: warehouses and van, lots and use-by dates, returns, serial numbers',
        cells: [
          { state: 'partial', text: 'Often on a higher plan, within the settings the publisher provides' },
          { state: 'yes', text: 'For the points the extension adds' },
          { state: 'yes', text: 'Designed around the way you work' },
        ],
      },
      {
        label: 'QR labels and phone scanning',
        cells: [
          { state: 'partial', text: 'Depending on the plan, sometimes as a paid module' },
          { state: 'yes', text: 'Generated by the extension, read with the phone' },
          { state: 'yes', text: 'Generated by the tool, €0 per label' },
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
    rowsShownOnSmallScreens: INVENTORY_MANAGEMENT_PAGE_COMPARISON_ROWS_ON_SMALL_SCREENS,
  },
  project: {
    slug: INVENTORY_MANAGEMENT_PAGE_PROJECT_SLUG,
    screenshotUrl: INVENTORY_MANAGEMENT_PAGE_SCREENSHOT_URL,
    showBrowserFrame: true,
    eyebrow: 'Already built',
    title: 'Inventory management software with QR labels, already in production',
    description:
      'StockPME is the stock and inventory management software I built from scratch at Kodeva, during my work-study years; Breizhtic distributed it with the hardware. Product sheets, stock levels, receipts, issues, corrections and counts, transfers between locations and warehouses, QR labels generated in the tool: it is still in production in companies of 20 to 200 employees.',
    highlights: [
      'Every movement tracked: receipts, issues, corrections, counts',
      'Transfers between locations and warehouses, stock trend statistics',
      'QR labels generated in the tool, after-sales service tracking',
    ],
    linkLabel: 'See the StockPME project',
    imageAlt: 'StockPME product sheet: movement history with serial number, date, warehouse, quantity and user',
    browserBarCaption: 'StockPME · product sheet, movement history',
  },
  faq: {
    eyebrow: 'Frequently asked questions',
    title: 'Inventory management software: your questions',
    questions: [
      {
        question: 'How much does inventory management software cost for a small team in France?',
        answer:
          'The price comes down to the number of people who handle stock. For 5 people: Monstock Essential €14.90 plus 4 × €9.90, i.e. €54.50 excl. VAT per month prepaid; Stockpit Smart 5 × €39, i.e. €195 excl. VAT per month; Zoho Inventory Standard €29 per month plus 3 extra users at €7.50; DoliCloud Basic 5 × €14, i.e. €70 excl. VAT; Erplain €59 plus 4 × €14, i.e. €115 excl. VAT; Odoo with the Inventory app alone, €0 (prices checked on 1 November 2026). A custom extension costs €2,500 to €7,000 paid once, a complete tool €5,000 to €15,000 most of the time, up to €25,000 with several warehouses and specific flows, then €100 to €300 per month for maintenance.',
      },
      {
        question: 'Is there free inventory management software?',
        answer:
          'Yes, with precise limits. Odoo Inventory is free with unlimited users as long as you use a single Odoo app. Zoho Inventory has a free plan limited to 1 user, 2 warehouses and 50 orders per month. Sortly offers 100 items for 1 user. Dolibarr is open-source software, free if you install and host it yourself. To start without software, the cycle count sheet and goods receipt note on this page (PDF and Excel) keep a small stock up to date.',
      },
      {
        question: 'Do I need a GS1 barcode for my labels?',
        answer:
          'Not for internal tracking. A GS1 code (GTIN) is only needed to sell through retail chains or marketplaces, and GS1 France charges a membership: for a turnover up to €50,000, a yearly fee of €104 excl. VAT plus a joining fee (2026 prices). To find, issue or count your items, QR labels generated by the tool and read with the phone cost €0 per label, as in StockPME. Watch the plans: Sortly charges for QR labels from $24 per month, Zoho only generates barcodes on Premium (€129), Dolibarr needs an external module for the scanner.',
      },
      {
        question: 'Does cycle counting replace the yearly stock count?',
        answer:
          'Not quite. The French Commercial Code (art. L123-12) requires checking the existence and value of stock by a physical count at least once every twelve months. Cycle counting (one area or one class of items counted every week or every month) is accepted when the software keeps a reliable perpetual inventory, provided every item has been counted at least once in the year. The ABC method (A items every month, B every quarter, C every half-year) is common practice, not a rule. The differences found are used first to correct the stock and to find the cause: breakage, theft, an issue or a transfer not recorded.',
      },
      {
        question: 'Does a French micro-entrepreneur have to count stock?',
        answer:
          'A micro-entrepreneur may skip annual accounts (French Commercial Code, art. L123-28), so no accounting stock count is required. If their main activity is selling goods, supplies or foodstuffs, they must however keep a yearly summary register of purchases, kept with the supporting documents for 10 years. Counting stock remains the only way to know what you have and what you have lost; a tool that records every purchase produces this register with nothing retyped.',
      },
      {
        question: 'How do you track the stock in the van?',
        answer:
          'By treating the van as a warehouse in its own right: items are transferred from the storeroom in the morning, what goes out on site or at the customer’s is scanned, and the rest is counted on return. The software then shows what is left in each vehicle and prepares the restock. Check the plan before signing: Zoho Inventory is limited to 2 warehouses up to the Standard plan, Stockpit only handles several storage locations from Smart with Pennylane or Sellsy (a Storage locations plan at $9 exists with QuickBooks), Odoo and Dolibarr handle several warehouses from the start. In StockPME, every transfer between locations or warehouses is tracked.',
      },
      {
        question: 'What should be done with products past their use-by date?',
        answer:
          'Take them off sale the day before: offering a product the day after its use-by date is forbidden in France, with a €1,500 fine per product. A product past its best-before date (DDM) may still be sold. For foodstuffs, the lot mark (preceded by “L”) and the date are tracked line by line, and in a recall the company declares the product on the dedicated government website and keeps a figures-based record of the products withdrawn (French Consumer Code, art. L423-3). Suitable software issues the oldest lots first, blocks the sale at the date limit and records the issue as “expired”, with its value.',
      },
      {
        question: 'What must the delivery note carry for French e-invoicing in 2027?',
        answer:
          'The invoice states the date of the sale, that is the actual day of delivery, the delivery address when it differs from the billing address, the nature of the transaction (supply of goods, service or both) and, for business customers, the customer’s SIREN number. Every French company has received e-invoices since 1 September 2026, small businesses and micro-enterprises will have to issue them from 1 September 2027, with a €50 fine per non-electronic invoice. Your tool’s delivery note must therefore carry the real date and address, and match the invoice, which stays in your invoicing software.',
      },
      {
        question: 'Equipment rental: where do you record periodic inspections (VGP)?',
        answer:
          'Work equipment listed by ministerial order (lifting equipment, machinery, scaffolding…) undergoes general periodic inspections whose results are recorded in the safety register (French Labour Code, art. R4323-23 and R4323-25); for lifting equipment, the interval is 12 months. The INRS institute notes that in practice these inspections are carried out by the rental company, the user checking that the reports are provided. A sheet per piece of equipment with the date of the last inspection, the next due date and the report attached, and a block on issue when the date has passed, keep uninspected equipment from going out.',
      },
      {
        question: 'I sell second-hand goods: which register must I keep?',
        answer:
          'In France, every business that sells second-hand movable goods (consignment, refurbished) keeps a register of movable goods, known as the “livre de police”, one per establishment: on paper, numbered and initialled, or in electronic form compliant with ISO 14641-1 with the data kept for 10 years. It describes each item and its seller, day by day. Keeping no register is punishable by 6 months’ imprisonment and a €30,000 fine. Inventory software that records the origin of each receipt can produce this register, provided it follows the legal format.',
      },
      {
        question: 'Can my Excel file or my current software be imported?',
        answer:
          'Yes. If your file or your software exports your items, quantities per warehouse, suppliers and history to Excel or CSV, I import them into the new tool; it is planned in the quote, and the first count serves as a reliable starting point. Check this export option before signing with a publisher.',
      },
    ],
  },
  relatedArticles: {
    title: 'Read next',
    slugs: INVENTORY_MANAGEMENT_PAGE_RELATED_ARTICLE_SLUGS,
  },
  contactCta: {
    title: 'Not sure which tool suits your inventory?',
    description:
      'Tell me about your warehouses, your team and what you stock in a few lines. I reply within 24 hours, and if off-the-shelf software is enough for you, I will tell you.',
    button: 'Discuss my project',
  },
}
