import type { DibodevEInvoicingScopeQuizWording } from '~/core/types/DibodevEInvoicingScopeQuiz'

export const E_INVOICING_SCOPE_QUIZ_WORDING_EN: DibodevEInvoicingScopeQuizWording = {
  quizName: 'French e-invoicing: does it apply to me, and from when?',
  questions: [
    {
      id: 'status',
      title: 'Who are you?',
      helpText: 'The case closest to yours, in France.',
      leadMessageLabel: 'Status',
      display: 'cards',
      selection: 'single',
      maxSelected: null,
      options: [
        { id: 'micro', label: 'Micro-entrepreneur (auto-entrepreneur)', unit: '', icon: 'Laptop' },
        { id: 'company', label: 'Company or sole trader under the real VAT regime', unit: '', icon: 'Store' },
        { id: 'liberal', label: 'Liberal profession (health, law, consulting…)', unit: '', icon: 'ClipboardCheck' },
        { id: 'landlord', label: 'Furnished-rental landlord without services (LMNP, LMP)', unit: '', icon: 'KeyRound' },
        {
          id: 'landlordHotel',
          label: 'Furnished-rental landlord with hotel-type services',
          unit: '',
          icon: 'Armchair',
        },
        { id: 'association', label: 'Non-profit association', unit: '', icon: 'Flag' },
      ],
    },
    {
      id: 'vat',
      title: 'And VAT?',
      helpText: 'Look at one of your invoices or rent receipts if you hesitate.',
      leadMessageLabel: 'VAT',
      display: 'list',
      selection: 'single',
      maxSelected: null,
      options: [
        { id: 'collects', label: 'I charge VAT to my customers', unit: '', icon: null },
        {
          id: 'franchise',
          label: 'I am under the VAT franchise ("TVA non applicable, art. 293 B" on my invoices)',
          unit: '',
          icon: null,
        },
        {
          id: 'exempt',
          label: 'All my operations are VAT-exempt (health, teaching, rental without services…)',
          unit: '',
          icon: null,
        },
        {
          id: 'outOfScope',
          label: 'I have no activity subject to VAT (non-profit activity, outside the scope)',
          unit: '',
          icon: null,
        },
        { id: 'unsure', label: 'I do not know', unit: '', icon: null },
      ],
    },
    {
      id: 'size',
      title: 'The size of your organisation',
      helpText: 'An SME has fewer than 250 employees and at most €50M of turnover or €43M of balance sheet.',
      leadMessageLabel: 'Size',
      display: 'tiles',
      selection: 'single',
      maxSelected: null,
      options: [
        { id: 'small', label: 'Under 250', unit: 'employees, turnover under €50M', icon: null },
        { id: 'large', label: '250 or more', unit: 'employees, or turnover of €50M and above', icon: null },
      ],
    },
    {
      id: 'customers',
      title: 'Who do you sell to?',
      helpText: 'Several answers possible.',
      leadMessageLabel: 'Customers',
      display: 'list',
      selection: 'multiple',
      maxSelected: null,
      options: [
        {
          id: 'businesses',
          label: 'Businesses established in France (companies, freelancers, associations)',
          unit: '',
          icon: null,
        },
        { id: 'consumers', label: 'Private individuals', unit: '', icon: null },
        { id: 'abroad', label: 'Customers established abroad', unit: '', icon: null },
        { id: 'public', label: 'The State, local authorities or hospitals', unit: '', icon: null },
        { id: 'none', label: 'Nobody yet, or I do not issue invoices', unit: '', icon: null },
      ],
    },
    {
      id: 'tool',
      title: 'How do you make your invoices today?',
      helpText: '',
      leadMessageLabel: 'Invoicing tool',
      display: 'cards',
      selection: 'single',
      maxSelected: null,
      options: [
        { id: 'software', label: 'Invoicing or accounting software', unit: '', icon: 'Monitor' },
        { id: 'trade', label: 'Trade software or an in-house tool', unit: '', icon: 'SlidersHorizontal' },
        { id: 'office', label: 'Excel, Word, a PDF template or paper', unit: '', icon: 'FileSpreadsheet' },
        { id: 'none', label: 'I do not make invoices', unit: '', icon: 'XCircle' },
      ],
    },
  ],
  verdicts: {
    outOfScope: {
      title: 'On the face of it, you are not concerned',
      explanation:
        'The reform targets businesses established in France and subject to VAT. An activity entirely outside the scope of VAT (a non-profit association with no commercial activity, for instance) has no e-invoice to receive, none to issue and no e-reporting. Do check that this really is your case: a SIREN number does not make you a VAT taxable person, but the slightest regular economic activity can.',
      headline: 'Not concerned',
      headlineSuffix: 'as long as your whole activity stays outside the scope of VAT',
      receptionValue: 'no',
      issuingValue: 'no',
      reportingValue: 'no',
      platformValue: 'none to appoint',
      issuingDateWords: '',
      ctaLabel: 'Ask my question',
      leadBudget: 'Question about the scope',
    },
    receiveOnly: {
      title: 'Receive, yes; issue, no',
      explanation:
        'Your operations are VAT-exempt, but you remain a taxable person as a recipient: since 1 September 2026, you must be able to receive the e-invoices of your French suppliers through an accredited platform. You have no e-invoice to issue and no e-reporting to send, as long as your activity stays entirely exempt.',
      headline: '1 Sept. 2026',
      headlineSuffix: 'reception already mandatory; nothing to issue',
      receptionValue: 'since Sept. 2026',
      issuingValue: 'no',
      reportingValue: 'no',
      platformValue: 'to appoint',
      issuingDateWords: '',
      ctaLabel: 'Get my situation handled',
      leadBudget: 'Reception only',
    },
    smallBusiness: {
      title: 'Concerned: reception since 2026, issuing in 2027',
      explanation:
        'You are subject to VAT and you belong to the micro-enterprise and SME category. Since 1 September 2026, you must be able to receive the e-invoices of your suppliers through an accredited platform. From 1 September 2027, your invoices to businesses established in France will have to go through one too, and your sales to private individuals or abroad will be reported through e-reporting.',
      headline: '1 Sept. 2027',
      headlineSuffix: 'issuing and e-reporting; reception mandatory since 1 September 2026',
      receptionValue: 'since Sept. 2026',
      issuingValue: 'Sept. 2027',
      reportingValue: 'Sept. 2027',
      platformValue: 'to appoint',
      issuingDateWords: '1 September 2027',
      ctaLabel: 'Get my situation handled',
      leadBudget: 'Small business, issuing in 2027',
    },
    largeBusiness: {
      title: 'Concerned: everything is already in force',
      explanation:
        'With 250 employees or more, or €50M of turnover and above, you are a mid-sized or large company: reception, issuing and e-reporting have been mandatory since 1 September 2026. In 2026, no penalty is applied to a company in real difficulty that has started the process, but this is neither a postponement nor a suspension.',
      headline: 'Already in force',
      headlineSuffix: 'reception, issuing and e-reporting since 1 September 2026',
      receptionValue: 'since Sept. 2026',
      issuingValue: 'since Sept. 2026',
      reportingValue: 'since Sept. 2026',
      platformValue: 'mandatory',
      issuingDateWords: '1 September 2026',
      ctaLabel: 'Get my situation handled',
      leadBudget: 'Mid-sized or large company, already in force',
    },
  },
  cardEyebrow: 'Your deadlines',
  receptionLabel: 'Receive',
  issuingLabel: 'Issue',
  reportingLabel: 'E-reporting',
  platformLabel: 'Accredited platform',
  cardFootnote:
    'Dates set by the French finance law for 2024 and confirmed without postponement. In 2026, no penalty is applied to a business that has started the process.',
  cardFootnoteLinkLabel: 'See the timeline',
  cardFootnoteLinkHref: '#timeline',
  adviceTitle: 'What I would do in your shoes',
  advice: {
    vatUnsure:
      'Check your VAT regime on a recent invoice: a VAT line means you charge it; the words "TVA non applicable, art. 293 B" mean you are under the franchise; neither means you are probably exempt. This result assumes the most common case for your status.',
    outOfScopeDoubt:
      'A business or a freelancer is almost always a VAT taxable person, even without charging VAT. If you sell something regularly, take the test again with your real regime, or ask your accountant.',
    associationActivity:
      'An association is only concerned for its commercial activities subject to VAT (bar, shop, services invoiced to businesses). If you have some, take the test again with that regime.',
    landlordServices:
      'If you offer at least three hotel-type services (breakfast, regular cleaning, linen, reception), your rental becomes taxable: invoices to businesses will go through an accredited platform, from 1 September 2027 for a small structure.',
    exemptMixed:
      'If part of your activity is taxable (product sales, non-exempt training, ancillary services), the invoices of that part follow the issuing timeline: 1 September 2027 for a small structure, already in force for a mid-sized company.',
    businessCustomers:
      'Your invoices to businesses established in France will have to leave through an accredited platform from {issuingDate}: your software must be accredited or connected to a platform.',
    consumerCustomers:
      'No e-invoice for a private individual: those sales will be reported to the tax administration through e-reporting from {issuingDate}, through the same platform.',
    abroadCustomers:
      'Sales to customers established abroad do not give rise to an e-invoice, but to e-reporting from {issuingDate}.',
    publicCustomers:
      'For the State, local authorities and hospitals, Chorus Pro remains the channel; the accredited platform serves your private customers.',
    noInvoices:
      'As long as you issue no invoice, only reception matters: appoint an accredited platform and check your address in the directory.',
    softwareTool:
      'Check that your software is an accredited platform or connected to one (checker under the test), and activate reception with the legal representative’s account.',
    tradeTool:
      'Trade software or an in-house tool does not become a platform: it is connected to an accredited platform that receives and issues on its behalf. That is what I do for my clients, remotely.',
    officeTool:
      'Excel, Word or paper neither make nor receive e-invoices: appoint an accredited platform with a free plan for reception, then a tool that issues before {issuingDate}.',
    officeToolReceive:
      'Excel, Word or paper do not receive e-invoices: appoint an accredited platform with a free plan, that is enough for reception.',
    noTool:
      'Even with no invoice to make, appoint an accredited platform to receive those of your suppliers, and check your address in the directory.',
    directory:
      'Check in the directory that your SIREN has an active reception address, then ask a supplier to send you an invoice through that channel.',
  },
  summaryTemplate: '{status}, {vat}, {size}, customers: {customers}; invoices: {tool}.',
  statusWords: {
    micro: 'Micro-entrepreneur',
    company: 'Company or sole trader',
    liberal: 'Liberal profession',
    landlord: 'Furnished-rental landlord without services',
    landlordHotel: 'Furnished-rental landlord with hotel-type services',
    association: 'Association',
  },
  vatWords: {
    collects: 'charging VAT',
    franchise: 'under the VAT franchise',
    exempt: 'entirely VAT-exempt',
    outOfScope: 'outside the scope of VAT',
    unsure: 'VAT regime to confirm',
  },
  sizeWords: {
    small: 'under 250 employees',
    large: '250 employees or more (or €50M of turnover)',
  },
  customerWords: {
    businesses: 'businesses in France',
    consumers: 'private individuals',
    abroad: 'customers abroad',
    public: 'the public sector',
    none: 'nobody yet',
  },
  customersNoneWord: 'no customer given',
  toolWords: {
    software: 'invoicing software',
    trade: 'trade software or an in-house tool',
    office: 'Excel, Word or paper',
    none: 'no invoices',
  },
  conjunction: 'and',
  disclaimer:
    'Result based on your answers and on the French rules in force on 25 October 2026. It does not replace your accountant’s opinion on your VAT regime.',
  leadFormTitle: 'Tell me where you stand',
  leadFormIntro:
    'Your software, your activity, what is blocking you: I reply within 24 hours with the steps to take, and a quote only if a tool needs to be connected.',
}
