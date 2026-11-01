import type { DibodevTradeQuizWording } from '~/core/types/DibodevTradeSoftwareQuiz'

export const BODY_SHOP_QUIZ_WORDING_EN: DibodevTradeQuizWording = {
  numberLocale: 'en-GB',
  quizName: 'Which software for your body shop?',
  questions: [
    {
      id: 'team',
      title: 'How many people work in the body shop?',
      helpText: 'Body technicians, painters, service advisor, office staff and you included.',
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
      title: 'Across how many workshops?',
      helpText: 'Each site with its own reception, workshop or paint booth.',
      leadMessageLabel: 'Workshops',
      display: 'tiles',
      selection: 'single',
      maxSelected: null,
      options: [
        { id: '1', label: '1', unit: 'workshop', icon: null },
        { id: '2-3', label: '2 or 3', unit: 'workshops', icon: null },
        { id: '4+', label: '4+', unit: 'workshops', icon: null },
      ],
    },
    {
      id: 'scope',
      title: 'Where do your jobs come from?',
      helpText: '',
      leadMessageLabel: 'Jobs',
      display: 'cards',
      selection: 'multiple',
      maxSelected: null,
      options: [
        { id: 'insurance', label: 'Claims covered by an insurer, with an appraiser', unit: '', icon: 'ShieldCheck' },
        { id: 'direct', label: 'Customers paying themselves, outside insurance', unit: '', icon: 'Car' },
        { id: 'fleet', label: 'Fleets, rental companies, dealerships and businesses', unit: '', icon: 'Truck' },
        { id: 'glass', label: 'Glass breakage and glazing', unit: '', icon: 'Star' },
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
        {
          id: 'estimates',
          label: 'Estimating, then retyping the estimate into the quote and repair order',
          unit: '',
          icon: null,
        },
        { id: 'experts', label: 'Chasing appraisers and waiting for the insurer’s approval', unit: '', icon: null },
        { id: 'photos', label: 'Check-in photos, damage survey and remote appraisal', unit: '', icon: null },
        { id: 'parts', label: 'Parts on back order and vehicles stuck in the shop', unit: '', icon: null },
        { id: 'booth', label: 'Scheduling the workshop and the paint booth', unit: '', icon: null },
        { id: 'loanCars', label: 'Courtesy cars: contracts, condition reports, availability', unit: '', icon: null },
        {
          id: 'invoicing',
          label: 'Invoicing the insurer and the customer (excess, assignment of claim) and chasing payment',
          unit: '',
          icon: null,
        },
        {
          id: 'history',
          label: 'Recording the choice of reused parts and finding a job’s history',
          unit: '',
          icon: null,
        },
      ],
    },
    {
      id: 'current',
      title: 'Do you already use workshop software?',
      helpText: '',
      leadMessageLabel: 'Current software',
      display: 'cards',
      selection: 'single',
      maxSelected: null,
      options: [
        { id: 'none', label: 'No: paper, Excel, or the estimating tool alone', unit: '', icon: 'FileSpreadsheet' },
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
        { id: 'simple', label: 'A simple tool for the workshop and the front desk', unit: '', icon: 'Smile' },
        {
          id: 'rules',
          label: 'A tool that follows our jobs, our insurers and our paint booth',
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
  recapSitesWords: { '1': 'a single workshop', '2-3': '2 or 3 workshops', '4+': '4 workshops or more' },
  recapScopeWords: {
    insurance: 'insurance claims',
    direct: 'customers outside insurance',
    fleet: 'fleets and businesses',
    glass: 'glass breakage',
  },
  recapScopeTemplate: '{items}',
  complementPainWords: {
    estimates: 'estimating',
    experts: 'following up appraisers',
    photos: 'photos and remote appraisal',
    parts: 'parts on back order',
    booth: 'the paint booth schedule',
    loanCars: 'courtesy cars',
    invoicing: 'insurer and customer invoicing',
    history: 'job history',
  },
  features: {
    estimates:
      'The estimate imported from your estimating tool (Sidexa, GT Estimate, DAT) into the quote and the repair order, with nothing retyped, using the workshop’s panel and paint rates',
    experts:
      'A dashboard of every job: estimate sent, appraiser’s approval, amount approved and the gap, with a reminder scheduled when the approval is late',
    photos:
      'Time-stamped photos of the vehicle at check-in, attached to the job and ready to go to the appraiser for a remote appraisal',
    parts:
      'Parts ordered, received or missing for each job, and an alert on every vehicle stuck in the shop beyond the delay you set',
    booth:
      'The workshop and paint booth schedule by slot (primer, base, clear coat), grouping booth runs and showing the week’s workload',
    loanCars:
      'The courtesy car register: contract, condition reports at hand-over and return, mileage, availability and the customer informed about the insurance',
    invoicing:
      'The invoice split between the insurer’s share and the customer’s (excess, depreciation), the assignment of claim attached, receivables per insurer and reminders',
    history:
      'The customer’s choice on reused parts kept with each quote (2 years in France), and a job’s whole history found by number plate',
    claimFlow:
      'The claim circuit in steps (declaration, photos, estimate, approval, repairs, return, payment) and the free choice of repairer stated on the quote',
    directQuotes:
      'The quote outside insurance with deposit, online signature and estimated time off the road, for customers paying themselves',
    fleetBilling:
      'Fleet and rental accounts: several vehicles per customer, purchase orders, monthly invoicing and a contact person per company',
    glassClaims:
      'Glass breakage jobs kept separate: glazing free of design rights, cover with or without excess, invoice to the insurer',
    multiSite:
      'Tracking per workshop, and vehicles or jobs moved from one workshop to another according to the paint booth workload',
  },
  checks: {
    primary:
      'Does the estimate flow from the estimating tool into the quote, repair order and invoice with nothing retyped, and does the appraiser’s approval come back into the job?',
    estimates: 'Does the software connect to your estimating tool (Sidexa, GT Estimate, DAT), and at what price?',
    experts: 'Can you see at a glance the jobs waiting for approval, and for how many days?',
    photos: 'Are check-in photos time-stamped and attached to the job?',
    parts: 'Can you track ordered and missing parts per job, with the announced date?',
    booth: 'Does the schedule show the paint booth by slot, with the vehicles waiting for parts?',
    loanCars: 'Does the software handle courtesy cars (contract, condition report, availability)?',
    invoicing:
      'Can you invoice the insurer’s share and the customer’s share separately, and track each insurer’s receivables?',
    history: 'Is the customer’s choice on reused parts kept with the quote?',
    claimFlow: 'Is the software a Darva partner, and is the Darva subscription included in the price?',
    directQuotes: 'Can the quote be signed online with a deposit, outside insurance?',
    fleetBilling: 'Can you manage several vehicles and monthly invoicing for one fleet customer?',
    glassClaims: 'Do glass breakage jobs have their own invoicing circuit to the insurer?',
    export: 'Can you export your data (customers, vehicles, jobs, invoices) if you change software?',
  },
  market: {
    eyebrow: 'Budget to plan',
    priceRange: '€18 to €499',
    priceSuffix:
      'per month for the workshop software, depending on the plan and users; estimating tool and Darva extra, on quote',
    priceExamples: [
      { label: 'Gest’Garage', value: '€19 incl. VAT/month' },
      { label: 'TDV Agent', value: '€19.90 to €79 incl. VAT/month' },
      { label: 'AutoProGestion', value: '€29 or €59 excl. VAT/month' },
      { label: 'WinMotor Next', value: 'from €68 excl. VAT/month' },
    ],
    footnote:
      'Kwixéo costs €22 to €89 excl. VAT per month (€18.33 to €74.17 in the first year paid yearly), ProGarage €99 to €499 excl. VAT per month. EBP MéCa PRO with its body shop module, Fiducial, Repair Soft, Cilea and 3Dsoft are on quote, as are the estimating tools Sidexa, GT Estimate and DAT; Darva access is subscribed separately.',
    footnoteLink: { label: 'See all prices', href: '#software' },
    adviceTitle: 'Check before choosing',
    disclaimer: 'Public prices checked on 1 November 2026.',
    ctaLabel: 'Ask for free advice',
    leadFormTitle: 'Free advice to choose your software',
    leadFormIntro:
      'I reply within 24 hours to talk it through, by phone or video call. Your test answers are attached to your message.',
    leadBudget: 'Off-the-shelf software, €18 to €499 per month',
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
      title: 'A custom tool for your body shop',
      explanation:
        'At your size and with your own circuit (insurers, appraisers, paint booth, courtesy cars, several workshops), off-the-shelf software makes you adapt to it. A tool designed for you follows each job from check-in to the insurer’s payment, and belongs to you. Your estimating tool, Darva and your accounts stay in place, connected to the tool.',
    },
    complement: {
      title: 'Keep your software, add a custom extension',
      explanation:
        'Your workshop software and your estimating tool do the basic work, no need to change them. A small tool plugged into them can fix what still takes up your time{pains}.',
      painsTemplate: ': {list}',
    },
    solo: {
      title: 'Off-the-shelf software is enough for you',
      explanation:
        'Working alone, workshop software at around €20 to €60 per month covers the essentials: quotes, repair orders, photos and invoices. If your jobs go through insurers, add an estimating tool. A custom tool would not pay off.',
      keepCurrentSentence: ' If yours suits you, keep it.',
    },
    market: {
      title: 'Off-the-shelf software is enough for now',
      explanation:
        'At your size, workshop software and, if your jobs go through insurers, a dealer management system with a body shop module connected to Darva cover the essentials: estimating, photos, appraiser’s approval, insurer and customer invoices. A custom tool would cost you more than it would earn you today.',
      unfitSentence: ' If yours does not suit you, compare two or three with the points below before changing.',
    },
  },
}
