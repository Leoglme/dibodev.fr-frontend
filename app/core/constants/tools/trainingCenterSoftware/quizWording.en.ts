import type { DibodevTradeQuizWording } from '~/core/types/DibodevTradeSoftwareQuiz'

export const TRAINING_CENTER_QUIZ_WORDING_EN: DibodevTradeQuizWording = {
  numberLocale: 'en-GB',
  quizName: 'Which software for your training courses and classes?',
  questions: [
    {
      id: 'team',
      title: 'How many people teach the courses or training sessions?',
      helpText: 'Trainers, teachers and regular instructors, you included.',
      leadMessageLabel: 'Teaching team',
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
      title: 'In how many places do you teach?',
      helpText:
        'Centres, rooms or premises where you welcome your students. Remote training counts as one place, home lessons too.',
      leadMessageLabel: 'Teaching places',
      display: 'tiles',
      selection: 'single',
      maxSelected: null,
      options: [
        { id: '1', label: '1', unit: 'place', icon: null },
        { id: '2-3', label: '2 or 3', unit: 'places', icon: null },
        { id: '4+', label: '4+', unit: 'places', icon: null },
      ],
    },
    {
      id: 'scope',
      title: 'Who pays for your courses?',
      helpText: 'That is what decides which French rules apply to you.',
      leadMessageLabel: 'Who pays',
      display: 'cards',
      selection: 'multiple',
      maxSelected: null,
      options: [
        {
          id: 'cpf',
          label: 'The CPF (France’s personal training account), via Mon Compte Formation',
          unit: '',
          icon: 'Laptop',
        },
        {
          id: 'funders',
          label: 'An OPCO (skills operator funding employee training), France Travail or employers',
          unit: '',
          icon: 'ClipboardCheck',
        },
        { id: 'families', label: 'Families, with the French home services tax credit', unit: '', icon: 'Armchair' },
        {
          id: 'members',
          label: 'Students or members with no aid: music, dance, languages',
          unit: '',
          icon: 'Speaker',
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
        { id: 'planning', label: 'Scheduling classes, teachers and rooms', unit: '', icon: null },
        { id: 'attendance', label: 'Collecting attendance signatures and tracking presence', unit: '', icon: null },
        {
          id: 'quality',
          label: 'Gathering evidence for Qualiopi (the quality certification) and the yearly BPF report',
          unit: '',
          icon: null,
        },
        { id: 'agreements', label: 'Writing training agreements and contracts', unit: '', icon: null },
        {
          id: 'invoicing',
          label: 'Invoicing, the immediate tax credit advance and tax certificates',
          unit: '',
          icon: null,
        },
        { id: 'hours', label: 'Tracking each student’s hours and prepaid packages', unit: '', icon: null },
        { id: 'enrolment', label: 'Handling enrolments and re-enrolments', unit: '', icon: null },
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
        { id: 'none', label: 'No, paper, Excel or a shared calendar', unit: '', icon: 'FileSpreadsheet' },
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
        { id: 'simple', label: 'A simple tool for teachers and the front desk', unit: '', icon: 'Smile' },
        {
          id: 'rules',
          label: 'A tool that follows our packages, funders and activities',
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
    '1': 'a single person teaching',
    '2-4': '2 to 4 trainers or teachers',
    '5-10': '5 to 10 trainers or teachers',
    '10+': 'more than 10 trainers or teachers',
  },
  recapSitesWords: { '1': 'a single place', '2-3': '2 or 3 places', '4+': '4 places or more' },
  recapScopeWords: {
    cpf: 'the CPF',
    funders: 'funders (OPCO, France Travail, employers)',
    families: 'families',
    members: 'students or members',
  },
  recapScopeTemplate: 'courses paid by {items}',
  complementPainWords: {
    planning: 'the schedule',
    attendance: 'attendance sheets',
    quality: 'Qualiopi evidence and the BPF',
    agreements: 'agreements and contracts',
    invoicing: 'invoicing',
    hours: 'hours tracking',
    enrolment: 'enrolments',
  },
  features: {
    planning:
      'The class schedule by teacher and by room, with no double booking, and a replacement suggested when a teacher is absent',
    attendance:
      'Attendance for each class or half-day signed online by the student or trainee, with absences and late arrivals recorded',
    quality: 'Qualiopi evidence filed by indicator, and the BPF report pre-filled from the hours actually taught',
    agreements:
      'Training agreements and contracts drawn up from the enrolment, with their mandatory wording and the 10-day withdrawal period for individuals',
    invoicing: 'Invoices prepared from the hours taught, with nothing retyped, and reminders for unpaid ones',
    hours: 'Each student’s package (hours bought, taught and left), with an alert when fewer than 2 hours remain',
    enrolment:
      'Online enrolments and re-enrolments, the waiting list and the documents to provide, such as the medical certificate for dance',
    edof: 'Your CPF files tracked step by step, from enrolment on EDOF (the CPF platform for training providers) to the invoice, next to your other funding',
    fundingProofs:
      'For each OPCO or employer, the session file ready to send: agreement, attendance sheets, certificate of completion and invoice',
    immediateAdvance:
      'The immediate tax credit advance through the Urssaf API, and each family’s yearly tax certificate',
    familyBilling: 'Family rates, quarterly or seasonal invoices and direct debits, from one season to the next',
    multiSite: 'The schedule of each teaching place, and the teachers or trainers who move from one centre to another',
  },
  checks: {
    primary:
      'Does the attendance taken at each class feed the hours, the invoice and, for training, the BPF, with nothing retyped?',
    planning: 'Can you replace an absent teacher while seeing which colleagues and rooms are free?',
    attendance: 'Is attendance signed online, per class or per half-day, with the trainer’s signature?',
    quality: 'Does the software follow the new 33-indicator Qualiopi framework, in force since 1 November 2026?',
    agreements: 'Do agreements and contracts include the mandatory wording, including the 10-day withdrawal period?',
    invoicing: 'Does each invoice carry the right VAT for the activity (exempt training, tutoring at 10%)?',
    hours: 'Can you see each student’s remaining hours, with an alert before the package runs out?',
    enrolment: 'Can students or families enrol and re-enrol online?',
    edof: 'Does the software export to EDOF, or do you need another subscription, such as Wedof (from €49 excl. VAT per month)?',
    fundingProofs:
      'Can you pull, for each funder, a session’s agreement, attendance sheets and certificate of completion?',
    immediateAdvance:
      'Is the software compatible with the Urssaf API Tiers de prestation, for the immediate tax credit advance?',
    familyBilling: 'Does it handle family rates, direct debits and re-enrolment from one season to the next?',
    export: 'Can you export your data (students, sessions, attendance, hours) if you change software?',
  },
  market: {
    eyebrow: 'Budget to plan',
    priceRange: '€39 to €225',
    priceSuffix: 'excl. VAT per month for an entry plan, depending on the publisher',
    priceExamples: [
      { label: 'Digiforma', value: 'from €49/month' },
      { label: 'Dendreo', value: 'from €225/month' },
      { label: 'Platformeasy', value: 'from €39/month' },
      { label: 'MyScol', value: 'from €84/month' },
    ],
    footnote:
      'Digiforma: €49 excl. VAT with a yearly commitment, €59 without. Dendreo adds a set-up fee from €1,490 excl. VAT. hop3team starts at €39 excl. VAT per month paid yearly, Edusign (attendance only) at €29 per month paid yearly, and Kadrella has a free plan. Alcuin, Belami and Ogust (Standard and Entreprise) are on quote.',
    footnoteLink: { label: 'See all prices', href: '#software' },
    adviceTitle: 'Check before choosing',
    disclaimer: 'Public prices checked on 1 November 2026.',
    ctaLabel: 'Ask for free advice',
    leadFormTitle: 'Free advice to choose your software',
    leadFormIntro:
      'I reply within 24 hours to talk it through, by phone or video call. Your test answers are attached to your message.',
    leadBudget: 'Off-the-shelf software, €39 to €225 excl. VAT per month',
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
      title: 'A custom tool for your training courses and classes',
      explanation:
        'At your size, and above all if you straddle two worlds (funded training and tutoring, for example), off-the-shelf software makes you adapt to it, sometimes to pay for two. A tool designed for you follows your packages, funders and places, and it belongs to you. Your accounts stay in your software, connected to the tool.',
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
        'Working alone, a plan from €39 excl. VAT per month covers the essentials: hop3team for training (BPF, quotes, invoices), Platformeasy for tutoring (immediate advance, tax certificates). A custom tool would not pay off.',
      keepCurrentSentence: ' If yours suits you, keep it.',
    },
    market: {
      title: 'Off-the-shelf software is enough for now',
      explanation:
        'At your size, off-the-shelf software covers the essentials: schedule, attendance, invoices, the BPF for training, the immediate advance for tutoring. Pick it from the right world: none of the training software checked mentions the immediate advance, and none of the tutoring software checked mentions the BPF.',
      unfitSentence: ' If yours does not suit you, compare two or three with the points below before changing.',
    },
  },
}
