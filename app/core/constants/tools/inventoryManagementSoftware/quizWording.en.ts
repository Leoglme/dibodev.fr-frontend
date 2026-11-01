import type { DibodevTradeQuizWording } from '~/core/types/DibodevTradeSoftwareQuiz'

export const INVENTORY_MANAGEMENT_QUIZ_WORDING_EN: DibodevTradeQuizWording = {
  numberLocale: 'en-GB',
  quizName: 'Which software to manage your inventory?',
  questions: [
    {
      id: 'team',
      title: 'How many people handle the stock?',
      helpText: 'Those who receive, issue, count or order items, you included.',
      leadMessageLabel: 'Team',
      display: 'tiles',
      selection: 'single',
      maxSelected: null,
      options: [
        { id: '1', label: '1', unit: 'person', icon: null },
        { id: '2-4', label: '2 to 4', unit: 'people', icon: null },
        { id: '5-10', label: '5 to 10', unit: 'people', icon: null },
        { id: '10+', label: '10+', unit: 'people', icon: null },
      ],
    },
    {
      id: 'sites',
      title: 'In how many storage locations?',
      helpText: 'Storeroom, workshop, shop, warehouse, van: every place where stock sits.',
      leadMessageLabel: 'Locations',
      display: 'tiles',
      selection: 'single',
      maxSelected: null,
      options: [
        { id: '1', label: '1', unit: 'location', icon: null },
        { id: '2-3', label: '2 or 3', unit: 'locations', icon: null },
        { id: '4+', label: '4+', unit: 'locations', icon: null },
      ],
    },
    {
      id: 'scope',
      title: 'What do you stock?',
      helpText: '',
      leadMessageLabel: 'What is stocked',
      display: 'cards',
      selection: 'multiple',
      maxSelected: null,
      options: [
        { id: 'goods', label: 'Goods for resale (shop, trading)', unit: '', icon: 'Store' },
        { id: 'parts', label: 'Parts and consumables (workshop, job sites)', unit: '', icon: 'Wrench' },
        { id: 'rental', label: 'Rented or loaned equipment that comes back', unit: '', icon: 'Truck' },
        { id: 'perishable', label: 'Products with a use-by date or in lots', unit: '', icon: 'Snowflake' },
        { id: 'serialized', label: 'Equipment with serial numbers', unit: '', icon: 'Laptop' },
      ],
    },
    {
      id: 'pains',
      title: 'What takes up most of your time?',
      helpText: '',
      leadMessageLabel: 'Time-consuming tasks',
      display: 'list',
      selection: 'multiple',
      maxSelected: 3,
      options: [
        { id: 'counting', label: 'Counting and recounting: the stock count never adds up', unit: '', icon: null },
        { id: 'receiving', label: 'Receiving deliveries and matching notes with invoices', unit: '', icon: null },
        { id: 'alerts', label: 'Spotting stock-outs and overstock in time', unit: '', icon: null },
        { id: 'transfers', label: 'Knowing what is in each location or in the van', unit: '', icon: null },
        { id: 'labels', label: 'Finding an item (labels, references, location)', unit: '', icon: null },
        { id: 'valuation', label: 'Producing the valued stock for the year-end accounts', unit: '', icon: null },
        { id: 'retyping', label: 'Retyping issues into quotes, invoices or the online shop', unit: '', icon: null },
        { id: 'traceability', label: 'Knowing who took what out, and when', unit: '', icon: null },
      ],
    },
    {
      id: 'current',
      title: 'Do you already use inventory software?',
      helpText: '',
      leadMessageLabel: 'Current software',
      display: 'cards',
      selection: 'single',
      maxSelected: null,
      options: [
        { id: 'none', label: 'No, paper, Excel or memory', unit: '', icon: 'FileSpreadsheet' },
        { id: 'unfit', label: 'Yes, but it does not fit the way we work', unit: '', icon: 'AlertCircle' },
        { id: 'fit', label: 'Yes, and it suits us', unit: '', icon: 'CheckCircle' },
      ],
    },
    {
      id: 'priority',
      title: 'What matters most to you?',
      helpText: '',
      leadMessageLabel: 'Priority',
      display: 'cards',
      selection: 'single',
      maxSelected: null,
      options: [
        { id: 'budget', label: 'Starting fast, on a small budget', unit: '', icon: 'Zap' },
        { id: 'simple', label: 'A simple tool, on the phone, for the whole team', unit: '', icon: 'Smartphone' },
        {
          id: 'rules',
          label: 'A tool that follows our locations, lots and issues',
          unit: '',
          icon: 'SlidersHorizontal',
        },
        {
          id: 'ownership',
          label: 'No more paying per user, and keeping our data',
          unit: '',
          icon: 'KeyRound',
        },
      ],
    },
  ],
  conjunction: 'and',
  priceRangeTemplate: '€{min} to €{max}',
  weeksRangeTemplate: '{min} to {max} weeks',
  recapTeamWords: {
    '1': 'a single person',
    '2-4': '2 to 4 people',
    '5-10': '5 to 10 people',
    '10+': 'more than 10 people',
  },
  recapSitesWords: { '1': 'a single location', '2-3': '2 or 3 locations', '4+': '4 locations or more' },
  recapScopeWords: {
    goods: 'goods for resale',
    parts: 'parts and consumables',
    rental: 'rented equipment',
    perishable: 'products with a use-by date',
    serialized: 'serialised equipment',
  },
  recapScopeTemplate: '{items}',
  complementPainWords: {
    counting: 'stock counts',
    receiving: 'goods receipts',
    alerts: 'stock-out alerts',
    transfers: 'stock per location',
    labels: 'labels and scanning',
    valuation: 'stock valuation',
    retyping: 'retyping issues',
    traceability: 'movement traceability',
  },
  features: {
    counting:
      'Cycle counting by area or by location: part of the stock counted every week on the phone, the difference corrected and tracked, every item counted at least once a year',
    receiving:
      'Goods receipt from the purchase order: quantities received, differences and disputes, lot or serial number, storage location, then matching with the invoice',
    alerts: 'A reorder level per item and per location, and a restock list ready to send to the supplier',
    transfers:
      'A view per location and per bin: what is in the storeroom, the workshop and the van, up to date after every movement',
    labels:
      'QR labels generated by the tool, read with the phone to issue, transfer or count an item, even with no network',
    valuation: 'Stock valued at weighted average cost or FIFO at any date, ready for year end',
    retyping:
      'Issues linked to your quotes, invoices or online shop: a sale or a job takes items out of stock with nothing retyped',
    traceability:
      'Every receipt, issue, correction and transfer with its author, date, location and reason (sale, breakage, personal use, internal use)',
    sales: 'Stock decremented by every sale, in the shop or online, and the value of goods in stock at any time',
    jobs: 'Issues allocated to a job site or a repair order, to re-invoice them without forgetting anything',
    returns:
      'Issues with returns: who has which equipment and until when, its condition on return with a photo, and the next inspection (VGP) date of each piece of equipment',
    lots: 'The lot and the use-by date on every stock line, the oldest issued first and a block once the date has passed',
    serials: 'Every unit tracked by its serial number, from receipt to after-sales service',
    multiSite: 'Transfers from one location to another tracked, and the van restock prepared from the storeroom',
  },
  checks: {
    primary:
      'Is the price per user? Work out the total for your whole team: every person who handles stock needs their own account, otherwise you lose the author of the movement',
    counting:
      'Can you count one area at a time (cycle counting) and correct the difference without freezing the rest of the stock?',
    receiving: 'Can a delivery be received from the purchase order, with differences and disputes?',
    alerts: 'Can reorder levels be set per item and per location?',
    transfers: 'Can you track several locations, including a van, on the plan you choose?',
    labels: 'Does the tool generate QR labels or barcodes and read a scan with the phone, without a paid module?',
    valuation: 'Does it produce the valued stock (weighted average or FIFO) at the year-end date?',
    retyping:
      'Does it connect to your invoicing or your online shop, so that every sale takes items out of stock with nothing retyped?',
    traceability: 'Does every movement keep its author, date and location, with no shared account?',
    sales: 'Does a sale at the till or online decrement the stock on its own?',
    jobs: 'Can an issue be allocated to a job site or a repair order, to re-invoice it?',
    returns:
      'Does it handle issues with returns (rental, loan), the condition on return and the equipment’s inspection date?',
    lots: 'Does it handle lots and use-by dates per stock line, issuing the oldest first?',
    serials: 'Does it track every unit by serial number, from receipt to after-sales service?',
    export: 'Can you export your data (items, stock per location, movements) to Excel or CSV if you change software?',
  },
  market: {
    eyebrow: 'Budget to plan',
    priceRange: '€0 to €257',
    priceSuffix: 'per month billed yearly, depending on the number of users and locations',
    priceExamples: [
      { label: 'Odoo Inventory', value: '€0 for a single app' },
      { label: 'Zoho Inventory', value: '€0 to €249/month' },
      { label: 'Monstock', value: 'from €14.90/month' },
      { label: 'Erplain', value: '€59 to €257/month' },
    ],
    footnote:
      'Monstock adds €9.90 to €38.90 excl. VAT per extra user, Stockpit costs €19 to €59 excl. VAT per user, DoliCloud €14 excl. VAT per user (Dolibarr is open source), Erplain €14 per extra user. Axonaut starts at €58.20 per month paid for 3 years (€97 monthly), Sortly is priced in US dollars. Sage 100 and Hector are on quote or have no published price.',
    footnoteLink: { label: 'See all prices', href: '#software' },
    adviceTitle: 'Check before choosing',
    disclaimer: 'Public prices checked on 1 November 2026.',
    ctaLabel: 'Ask for free advice',
    leadFormTitle: 'Free advice to choose your software',
    leadFormIntro:
      'I reply within 24 hours to talk it through, by phone or video call. Your test answers are attached to your message.',
    leadBudget: 'Off-the-shelf software, €0 to €257 per month',
  },
  project: {
    eyebrow: 'Price range, fixed price',
    durationLabel: 'Timeline',
    maintenanceLabel: 'Maintenance',
    maintenanceValue: '€100 to €300/month',
    complementFootnote: 'Paid once, on top of your current subscription.',
    customFootnote: 'Paid once: the tool and its code belong to you.',
    adviceTitle: 'To plan first',
    disclaimer: 'Indicative result. The final price is set in the quote.',
    ctaLabel: 'Get my estimate',
    leadFormTitle: 'Get my detailed estimate',
    leadFormIntro:
      'I reply within 24 hours with first ideas and a more precise budget. Your test answers are attached to your message.',
    leadBudgetTemplate: '{range} ({kind})',
    complementKind: 'custom extension',
    customKind: 'custom tool',
  },
  results: {
    custom: {
      title: 'A custom tool to manage your inventory',
      explanation:
        'At your size and with your own rules (locations and van, lots, returns, serial numbers), off-the-shelf software charges you for every user and makes you adapt to it. A tool designed for you follows your flows and belongs to you. Your invoicing and accounts stay in your software, connected to the tool.',
    },
    complement: {
      title: 'Keep your software, add a custom extension',
      explanation:
        'Your software does the basic work, no need to change it. A small tool plugged into it can fix what still takes up your time{pains}.',
      painsTemplate: ': {list}',
    },
    solo: {
      title: 'Off-the-shelf software is enough for you',
      explanation:
        'Working alone, free inventory software or a plan under €30 per month covers the essentials: product sheets, receipts and issues, reorder alerts, stock counts. A custom tool would not pay off.',
      keepCurrentSentence: ' If yours suits you, keep it.',
    },
    market: {
      title: 'Off-the-shelf software is enough for now',
      explanation:
        'At your size, off-the-shelf inventory software covers the essentials: product sheets, movements, reorder alerts, stock counts, and several locations on the mid-range plans. A custom tool would cost you more than it would earn you today.',
      unfitSentence: ' If yours does not suit you, compare two or three with the points below before changing.',
    },
  },
}
