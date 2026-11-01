import type { DibodevTradeQuizWording } from '~/core/types/DibodevTradeSoftwareQuiz'

export const CARPENTRY_QUIZ_WORDING_EN: DibodevTradeQuizWording = {
  numberLocale: 'en-GB',
  quizName: 'Which software for your joinery business?',
  questions: [
    {
      id: 'team',
      title: 'How many of you are there, workshop and fitters included?',
      helpText: 'Workshop joiners, fitters, office staff and you included.',
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
      title: 'How many workshops, depots or branches?',
      helpText: 'Each address your teams leave from, not counting your job sites.',
      leadMessageLabel: 'Workshops and branches',
      display: 'tiles',
      selection: 'single',
      maxSelected: null,
      options: [
        { id: '1', label: '1', unit: 'address', icon: null },
        { id: '2-3', label: '2 or 3', unit: 'addresses', icon: null },
        { id: '4+', label: '4+', unit: 'addresses', icon: null },
      ],
    },
    {
      id: 'scope',
      title: 'What do you do?',
      helpText: '',
      leadMessageLabel: 'Trades',
      display: 'cards',
      selection: 'multiple',
      maxSelected: null,
      options: [
        { id: 'windows', label: 'Window, door and shutter fitting', unit: '', icon: 'Truck' },
        { id: 'fittings', label: 'Shopfitting and made-to-measure furniture', unit: '', icon: 'Armchair' },
        { id: 'kitchens', label: 'Kitchens, as an independent kitchen fitter', unit: '', icon: 'Flame' },
        {
          id: 'joinery',
          label: 'Woodwork, stairs and cabinetmaking, made in the workshop',
          unit: '',
          icon: 'Wrench',
        },
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
        { id: 'quotes', label: 'Writing quotes and pricing variants', unit: '', icon: null },
        { id: 'measurements', label: 'Taking measurements and copying them into the quote', unit: '', icon: null },
        {
          id: 'suppliers',
          label: 'Finding manufacturers’ prices and placing orders',
          unit: '',
          icon: null,
        },
        { id: 'cuttingLists', label: 'Preparing cutting lists and cutting plans', unit: '', icon: null },
        { id: 'planning', label: 'Scheduling the workshop and the fittings', unit: '', icon: null },
        { id: 'jobCosting', label: 'Knowing whether a job made money', unit: '', icon: null },
        { id: 'invoices', label: 'Invoicing deposits and progress payments, chasing payments', unit: '', icon: null },
        { id: 'snags', label: 'Following up snags after fitting', unit: '', icon: null },
      ],
    },
    {
      id: 'current',
      title: 'Do you already use management software?',
      helpText: '',
      leadMessageLabel: 'Current software',
      display: 'cards',
      selection: 'single',
      maxSelected: null,
      options: [
        { id: 'none', label: 'No, paper, Excel and the measurement notebook', unit: '', icon: 'FileSpreadsheet' },
        {
          id: 'unfit',
          label: 'Yes, but it fits our trade poorly, or our tools do not talk to each other',
          unit: '',
          icon: 'AlertCircle',
        },
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
        { id: 'simple', label: 'A simple tool, for the workshop and the fitters alike', unit: '', icon: 'Smile' },
        {
          id: 'rules',
          label: 'A tool that links our quotes, cutting lists and hours',
          unit: '',
          icon: 'SlidersHorizontal',
        },
        {
          id: 'ownership',
          label: 'No more subscription, and keeping our data',
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
  recapSitesWords: {
    '1': 'a single workshop or depot',
    '2-3': '2 or 3 workshops or depots',
    '4+': 'at least 4 workshops or depots',
  },
  recapScopeWords: {
    windows: 'window fitting',
    fittings: 'shopfitting',
    kitchens: 'kitchens',
    joinery: 'workshop joinery',
  },
  recapScopeTemplate: '{items}',
  complementPainWords: {
    quotes: 'quotes',
    measurements: 'measurements',
    suppliers: 'supplier prices and orders',
    cuttingLists: 'cutting lists',
    planning: 'the workshop and fitting schedule',
    jobCosting: 'the margin of each job',
    invoices: 'invoices and payment reminders',
    snags: 'snags after fitting',
  },
  features: {
    quotes:
      'Quotes in a few clicks from the measurements, with your work items, your variants, your workshop and fitting hourly rates, and the customer’s VAT statement',
    measurements: 'Measurements taken on site, entered on the phone, that fill in the quote directly',
    suppliers: 'Your manufacturers’ and suppliers’ prices used in the quotes, and each order tracked until delivery',
    cuttingLists:
      'The cutting list and cutting plan drawn from the accepted quote, with allowances, waste and reusable offcuts',
    planning: 'The workshop and fitting schedule, visible to every joiner and fitter on their phone',
    jobCosting: 'The margin of each job: materials bought and workshop and fitting hours, compared with the quote',
    invoices:
      'Deposit, progress and final invoices drawn from the quote, with payment reminders and ready for French e-invoicing',
    snags:
      'The handover report signed on site, snags followed up until they are cleared, and the start date of the warranties',
    withdrawal:
      'Contracts signed at the customer’s home tracked day by day: 14-day withdrawal period, and no deposit requested before the first 7 days are over',
    cadLink:
      'The cutting list exported by your design software, reused in the quote, the workshop sheet and the panel order',
    variants: 'Quotes with variants (fronts, worktop, appliances), then the order of each item tracked until fitting',
    machineRates: 'An hourly rate per machine and the workshop time of each part, for the most accurate cost price',
    multiSite: 'The schedule and orders of each workshop or depot, and teams lent from one to another',
  },
  checks: {
    primary:
      'Does the accepted quote become a cutting list, an order, a fitting schedule and then an invoice, with nothing retyped?',
    quotes: 'Can you price a variant (wood, PVC, aluminium) in the same quote, with the customer’s VAT statement?',
    measurements: 'Can you enter measurements on site, on a phone or tablet, even with no network?',
    suppliers: 'Can your manufacturers’ price lists be imported, and how often are they updated?',
    cuttingLists: 'Does the software produce a cutting list, or export it to your cutting optimiser?',
    planning: 'Can you see the workshop load and each team’s fittings on the same schedule?',
    jobCosting: 'Can you compare, job by job, the quote with purchases and the hours actually worked?',
    invoices: 'Does it handle deposits, progress invoices and French e-invoicing (Factur-X)?',
    snags: 'Can you get the handover report signed on site and track the clearance of snags?',
    withdrawal:
      'Does the quote signed off premises provide for the 14-day withdrawal, and does the deposit wait until the first 7 days are over?',
    cadLink:
      'Does the software reuse the cutting list of your CAD (SketchUp, PolyBoard, Aléker…) with nothing retyped?',
    variants: 'Can you show the customer several variants, then order the chosen version from each supplier?',
    machineRates: 'Can you set an hourly rate per machine and track workshop time per part?',
    export: 'Can you export your data (customers, work items, jobs, invoices) if you change software?',
  },
  market: {
    eyebrow: 'Budget to plan',
    priceRange: '€14 to €129',
    priceSuffix: 'per month, depending on the publisher and the number of users',
    priceExamples: [
      { label: 'Obat', value: '€39 to €129 excl. VAT/month' },
      { label: 'Batappli', value: '€39 or €79 excl. VAT/month' },
      { label: 'ProDevis START', value: '€75 excl. VAT/month' },
      { label: 'Anodos', value: '€14 to €73/month' },
    ],
    footnote:
      'Prices excl. VAT, except at Anodos (excl. or incl. VAT not stated). Sage Batigest Connect costs €36.08 to €122.25 excl. VAT per month, the Aléker CAD a €3,590 excl. VAT licence plus €79 to €169 excl. VAT per month. EBP Bâtiment, HerculePro, Cabinet Vision and Codial are on quote.',
    footnoteLink: { label: 'See all prices', href: '#software' },
    adviceTitle: 'Check before choosing',
    disclaimer: 'Public prices checked on 1 November 2026.',
    ctaLabel: 'Ask for free advice',
    leadFormTitle: 'Free advice to choose your software',
    leadFormIntro:
      'I reply within 24 hours to talk it through, by phone or video call. Your test answers are attached to your message.',
    leadBudget: 'Off-the-shelf software, €14 to €129 per month',
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
      title: 'A custom tool for your joinery business',
      explanation:
        'At your size, with your work items, your variants and your fittings, off-the-shelf software makes you juggle between CAD, quoting software and the hours spreadsheet. A tool designed for you links the measurements, the quote, the cutting list, workshop and fitting hours and the margin of each job, and it belongs to you. Your CAD, your manufacturers’ catalogues and your accounts stay in place, connected to the tool.',
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
        'Working alone, construction quoting software under €40 excl. VAT per month covers the essentials: quotes, work item library, deposits and invoices. If your quotes start from manufacturers’ price lists, look at pricing software instead; if you draw your furniture, CAD with cutting lists. A custom tool would not pay off.',
      keepCurrentSentence: ' If yours suits you, keep it.',
    },
    market: {
      title: 'Off-the-shelf software is enough for now',
      explanation:
        'At your size, construction and joinery software covers the essentials: quotes, orders, fitting schedule and invoices. Choose it according to where your quotes start (manufacturers’ price lists, site measurements or a 3D drawing). A custom tool would cost you more than it would earn you today.',
      unfitSentence: ' If yours does not suit you, compare two or three with the points below before changing.',
    },
  },
}
