import type { DibodevColdCallingCheckQuizWording } from '~/core/types/DibodevColdCallingCheckQuiz'

export const COLD_CALLING_CHECK_QUIZ_WORDING_EN: DibodevColdCallingCheckQuizWording = {
  quizName: 'Cold calling ban in France: can I still call?',
  questions: [
    {
      id: 'targets',
      title: 'Who do you call to sell?',
      helpText: 'Calls to offer your services or products, in France.',
      leadMessageLabel: 'People called',
      display: 'cards',
      selection: 'single',
      maxSelected: null,
      options: [
        { id: 'consumers', label: 'Private individuals', unit: '', icon: 'Smile' },
        { id: 'businesses', label: 'Companies and professionals', unit: '', icon: 'Store' },
        { id: 'both', label: 'Both', unit: '', icon: 'Phone' },
      ],
    },
    {
      id: 'sector',
      title: 'What do you offer them?',
      helpText: 'Three sectors have separate, stricter rules.',
      leadMessageLabel: 'Activity',
      display: 'cards',
      selection: 'single',
      maxSelected: null,
      options: [
        {
          id: 'housingWorks',
          label: 'Energy renovation (insulation, heat pump, solar…) or adapting homes to old age or disability',
          unit: '',
          icon: 'KeyRound',
        },
        {
          id: 'cpfTraining',
          label: 'Training funded by the CPF (French personal training account)',
          unit: '',
          icon: 'ClipboardCheck',
        },
        { id: 'other', label: 'Something else: works, services, products, subscriptions…', unit: '', icon: 'Wrench' },
      ],
    },
    {
      id: 'relationship',
      title: 'Are these people already your customers?',
      helpText: 'The most frequent case among the people you call.',
      leadMessageLabel: 'Relationship with these people',
      display: 'list',
      selection: 'single',
      maxSelected: null,
      options: [
        {
          id: 'activeContract',
          label: 'Yes, with a contract in progress (subscription, maintenance contract, commercial warranty)',
          unit: '',
          icon: null,
        },
        {
          id: 'formerContract',
          label: 'Yes, but the contract has ended (work finished and paid, only the legal warranty left)',
          unit: '',
          icon: null,
        },
        { id: 'notCustomers', label: 'No, not yet', unit: '', icon: null },
      ],
    },
    {
      id: 'consent',
      title: 'Did they agree to be called by you, before the call?',
      helpText: 'Agreement given in writing or by a clear action, never by silence or a pre-ticked box.',
      leadMessageLabel: 'Prior consent',
      display: 'list',
      selection: 'single',
      maxSelected: null,
      options: [
        {
          id: 'documented',
          label: 'Yes, less than a year ago, and I keep the proof (box not pre-ticked, date and time)',
          unit: '',
          icon: null,
        },
        { id: 'notDocumented', label: 'Yes, but without proof, or more than a year ago', unit: '', icon: null },
        { id: 'none', label: 'No', unit: '', icon: null },
        { id: 'unsure', label: 'I do not know', unit: '', icon: null },
      ],
    },
    {
      id: 'numberSources',
      title: 'Where do you find the numbers?',
      helpText: '',
      leadMessageLabel: 'Source of the numbers',
      display: 'cards',
      selection: 'multiple',
      maxSelected: null,
      options: [
        { id: 'purchasedList', label: 'A bought or rented list', unit: '', icon: 'FileSpreadsheet' },
        { id: 'inboundRequests', label: 'People who wrote to me or asked for a quote', unit: '', icon: 'Mail' },
        { id: 'directories', label: 'Directories, Google Maps or listings', unit: '', icon: 'Search' },
        { id: 'other', label: 'My customers, word of mouth or other', unit: '', icon: 'MessageCircle' },
      ],
    },
  ],
  verdicts: {
    sectorBanned: {
      title: 'In your sector, it is banned, even with consent',
      explanation:
        'In France, for energy renovation, adapting homes to old age or disability, and training funded by the CPF, cold calling a private individual is banned, even if they agree, outside a contract in progress. This rule is specific to these sectors and stricter than the consent rule that applies to everyone since 11 August 2026.',
      headline: 'Banned',
      headlineSuffix: 'even with the person’s consent, outside a contract in progress',
      details: [
        { label: 'Calls', value: 'banned' },
        { label: 'With consent', value: 'banned too' },
        { label: 'Contract in progress', value: 'allowed' },
      ],
      cardFootnote: 'A ban specific to your sector, on top of the consent rule of 11 August 2026.',
      ctaLabel: 'Get customers to call you',
      leadBudget: 'Sector banned from cold calling',
    },
    consentRequired: {
      title: 'Without proven consent, you can no longer call them',
      explanation:
        'Since 11 August 2026, in France, calling a private individual to sell them something requires their prior consent, and the burden of proof is on you. Without a contract in progress with them and without that consent, the call is banned, whether you call yourself or through a provider, and a contract obtained that way is void.',
      headline: 'Banned without consent',
      headlineSuffix: 'prior and proven, since 11 August 2026',
      details: [
        { label: 'Calls', value: 'banned without consent' },
        { label: 'Consent', value: 'valid 1 year at most' },
        { label: 'Contract obtained', value: 'void' },
        { label: 'Fine', value: '€75,000 / €375,000' },
      ],
      cardFootnote: 'Fine of up to €75,000 for a sole trader and €375,000 for a company, published at their expense.',
      ctaLabel: 'Get customers to call you',
      leadBudget: 'Private individuals: consent to collect',
    },
    allowedWithRules: {
      title: 'You can call, following the rules',
      explanation:
        'With a contract in progress, you can call your customers about that contract and what complements it; with proven consent less than a year old, about what it covers. Calls remain regulated in France: days, hours, number of calls, visible number, introduction at the start of the call. And the person is only bound after signing a written confirmation.',
      headline: 'Allowed, regulated',
      headlineSuffix: 'for a contract in progress or with proven consent',
      details: [
        { label: 'Days', value: 'Monday to Friday' },
        { label: 'Hours', value: '10am-1pm, 2pm-8pm' },
        { label: 'Calls', value: '4 at most in 30 days' },
        { label: 'Number', value: 'never hidden' },
      ],
      cardFootnote:
        'Except public holidays. A date and time chosen by the person are an exception to the days and hours, not to the number of calls.',
      ctaLabel: 'Get more customers to call you',
      leadBudget: 'Calls allowed, rules to follow',
    },
    businessAllowed: {
      title: 'Between businesses, calling is still allowed',
      explanation:
        'The 2025 French law protects consumers: it does not cover your calls to businesses, nor do the rules on days and hours. The CNIL, the French data protection authority, accepts a call to a professional if your offer relates to their job, if you introduce yourself and if they can refuse simply and free of charge.',
      headline: 'Allowed',
      headlineSuffix: 'if your offer relates to their job',
      details: [
        { label: 'Calls', value: 'allowed' },
        { label: 'Offer', value: 'related to their job' },
        { label: 'Refusal', value: 'simple and free' },
        { label: 'Days and hours', value: 'not regulated' },
      ],
      cardFootnote: 'CNIL rules on prospecting professionals; the law of 30 June 2025 covers consumers.',
      ctaLabel: 'Get customers to call you',
      leadBudget: 'Business-to-business calls',
    },
  },
  cardEyebrow: 'The rule for you',
  cardFootnoteLinkLabel: 'See the rules',
  cardFootnoteLinkHref: '#rules',
  adviceTitle: 'What I would do in your shoes',
  advice: {
    housingCallback:
      'Only exception: calling back a person who asked you for information, within 5 working days, only about what they asked, keeping proof of their request for three years.',
    housingMessages:
      'No detour through text messages, e-mail or social networks: for these works, prospecting there is banned too, outside a contract in progress.',
    cpfNoCallback:
      'For CPF training, the 5-day callback exception set by the decree does not apply: it only covers energy renovation and home adaptation.',
    consentUnsure:
      'Without dated proof (box ticked by the person, date, time), assume you do not have their consent: the burden of proof is on you.',
    consentNotProven:
      'Consent without proof, or more than a year old, does not count: it lasts one year at most, with no tacit renewal, and its proof is kept for three years.',
    formerCustomers:
      'An ended contract (work finished and paid, only the legal warranty left) is no longer "in progress": to call these former customers, you need their consent.',
    collectConsent:
      'Collect consent without phoning: a box that is not pre-ticked on your form or quote, in your shop or at the time of a purchase, with your name, what you offer and a duration of one year at most. Keep the proof for three years.',
    quoteRequests:
      'People who ask you for a quote: no text clearly says yet whether you can call them back without their consent. Add an "I agree to be called back" box to your form, it is the safest way.',
    purchasedList:
      'A bought list is not enough: each person must have agreed to be called by you, for what you sell, and the burden of proof is on you, even if a provider calls for you.',
    directoryNumbers:
      'A number found in a directory, on Google Maps or in a listing is not consent: for a private individual, you need their prior consent.',
    contractScope:
      'Stay within the contract: the call must relate to it. What complements it or improves its performance is allowed, an unrelated offer is not.',
    sectorContractOnly:
      'In your sector, the call must stay linked to the contract in progress: outside it, the ban applies even with consent.',
    consentLimits:
      'Your consent covers what it names, for one year at most: note its end date, and stop as soon as the person withdraws it, even orally.',
    duringTheCall:
      'At the start of the call, say who you are, on whose behalf you call and that the call is commercial. If the person refuses, the call ends and you do not call back.',
    sectorConsumersOnly:
      'The bans of your sector protect private individuals: as soon as you reach someone about their own home or their own training, they apply, even with consent.',
    businessRelevance:
      'Call with an offer related to the person’s job, introduce yourself on every call, and record any refusal so as not to call them again.',
    personalPhoneGreyArea:
      'Be careful with a tradesperson or a micro-entrepreneur reached on their personal mobile: no text settles whether they should then be treated as a private individual. When in doubt, ask for their consent in writing.',
    businessEmail:
      'By e-mail, no prior consent is needed for an offer related to their activity, with a simple link to refuse; a generic address (contact@…) is not subject to these rules.',
    businessCallsAlso:
      'For your calls to professionals, the 2025 law does not apply: the CNIL accepts the call if your offer relates to their job, if you introduce yourself and if they can refuse simply.',
    attractRequests:
      'Bring the requests in instead of calling: a website that receives requests, a Google Business Profile with your service area, a form with the consent box. That is what I set up for my clients.',
  },
  summaryTemplate: '{targets}, {sector}, {relationship}, {consent}; numbers: {numberSources}.',
  targetWords: {
    consumers: 'Calls to private individuals',
    businesses: 'Calls to professionals',
    both: 'Calls to private individuals and professionals',
  },
  sectorWords: {
    housingWorks: 'energy renovation or home adaptation',
    cpfTraining: 'CPF-funded training',
    other: 'other activity',
  },
  relationshipWords: {
    activeContract: 'customers with a contract in progress',
    formerContract: 'former customers',
    notCustomers: 'not customers yet',
  },
  consentWords: {
    documented: 'proven consent',
    notDocumented: 'consent without proof or too old',
    none: 'no consent',
    unsure: 'consent uncertain',
  },
  numberSourceWords: {
    purchasedList: 'a bought list',
    inboundRequests: 'requests received',
    directories: 'directories or listings',
    other: 'customers or word of mouth',
  },
  numberSourcesNoneWord: 'not given',
  conjunction: 'and',
  disclaimer:
    'Result based on your answers and on the French rules in force on 26 October 2026. It does not replace a lawyer’s opinion on your case.',
  leadFormTitle: 'Tell me how you find your customers',
  leadFormIntro:
    'I help you bring the requests in instead of calling: website, Google Business Profile, form with consent. Tell me your trade and your area, I reply within 24 hours.',
}
