import type { DibodevWebAccessibilityScopeQuizWording } from '~/core/types/DibodevWebAccessibilityScopeQuiz'

export const WEB_ACCESSIBILITY_SCOPE_QUIZ_WORDING_EN: DibodevWebAccessibilityScopeQuizWording = {
  quizName: 'Web accessibility in France: is my website concerned?',
  questions: [
    {
      id: 'organization',
      title: 'Who are you?',
      helpText: 'The organisation that publishes the website.',
      leadMessageLabel: 'Organisation',
      display: 'cards',
      selection: 'single',
      maxSelected: null,
      options: [
        {
          id: 'public',
          label: 'Public body, or organisation entrusted with a public service mission',
          unit: '',
          icon: 'Flag',
        },
        { id: 'company', label: 'Company (shop, SME…)', unit: '', icon: 'Store' },
        { id: 'association', label: 'Association (non-profit)', unit: '', icon: 'Smile' },
        { id: 'freelance', label: 'Freelancer or micro-entrepreneur', unit: '', icon: 'Laptop' },
      ],
    },
    {
      id: 'size',
      title: 'The size of your organisation',
      helpText: 'A micro-enterprise has fewer than 10 employees and at most €2M of annual turnover or balance sheet.',
      leadMessageLabel: 'Size',
      display: 'tiles',
      selection: 'single',
      maxSelected: null,
      options: [
        { id: 'micro', label: 'Fewer than 10', unit: 'employees, €2M of turnover at most', icon: null },
        { id: 'small', label: '10 or more', unit: 'employees, or more than €2M of turnover', icon: null },
        { id: 'large250', label: 'Over €250M', unit: 'of turnover in France', icon: null },
      ],
    },
    {
      id: 'website',
      title: 'What does your website do?',
      helpText: 'Its main use.',
      leadMessageLabel: 'Website use',
      display: 'cards',
      selection: 'single',
      maxSelected: null,
      options: [
        { id: 'showcase', label: 'Showcase website, no online sales', unit: '', icon: 'Monitor' },
        {
          id: 'ecommerce',
          label: 'Online sale of products or services (shop, paid booking)',
          unit: '',
          icon: 'Euro',
        },
        {
          id: 'regulated',
          label: 'Banking, passenger transport, telecoms, video or e-books',
          unit: '',
          icon: 'ShieldCheck',
        },
        { id: 'service', label: 'Customer area or app for your customers', unit: '', icon: 'KeyRound' },
        { id: 'internal', label: 'Intranet or internal tool', unit: '', icon: 'Server' },
      ],
    },
    {
      id: 'customers',
      title: 'Who is it for?',
      helpText: '',
      leadMessageLabel: 'Customers',
      display: 'list',
      selection: 'single',
      maxSelected: null,
      options: [
        { id: 'consumers', label: 'Consumers', unit: '', icon: null },
        { id: 'businesses', label: 'Professionals only', unit: '', icon: null },
        { id: 'both', label: 'Both', unit: '', icon: null },
      ],
    },
    {
      id: 'timing',
      title: 'And the website itself?',
      helpText: '',
      leadMessageLabel: 'Website',
      display: 'list',
      selection: 'single',
      maxSelected: null,
      options: [
        { id: 'existing', label: 'Online before 28 June 2025', unit: '', icon: null },
        { id: 'new', label: 'Created or rebuilt since 28 June 2025', unit: '', icon: null },
        { id: 'planned', label: 'Still a project', unit: '', icon: null },
      ],
    },
  ],
  verdicts: {
    publicSector: {
      title: 'Concerned: the obligation already applies',
      explanation:
        'Based on your answers, you fall under article 47 of the French law of 11 February 2005, whatever your size: your websites, intranets and apps must be accessible. You also publish an accessibility statement, a multi-year plan of three years at most with its yearly action plan, and a clear notice on the home page. The deadlines have passed: 2019 or 2020 for websites, 2021 for apps.',
      headline: 'Already in force',
      headlineSuffix: 'since 2019-2020 for websites, 2021 for mobile apps',
      lawValue: '2005 law, art. 47',
      standardValue: 'RGAA 4.1.2',
      publicationValue: 'statement, plan, notice',
      controlValue: 'Arcom, up to €50,000',
      ctaLabel: 'Review my website',
      leadBudget: 'Public body (art. 47)',
    },
    largeCompany: {
      title: 'Concerned: article 47, since 2019-2020',
      explanation:
        'Above €250 million of turnover in France (average of the last three financial years), a company falls under article 47 of the 2005 law. Its websites must be accessible since 1 October 2019 or 2020, its apps since 1 July 2021. It publishes an accessibility statement, a multi-year plan and a notice on the home page: that is what Arcom checks.',
      headline: 'Already in force',
      headlineSuffix: 'since 1 October 2019 or 2020 for websites, July 2021 for apps',
      lawValue: '2005 law, art. 47',
      standardValue: 'RGAA 4.1.2 or WCAG 2.1 AA',
      publicationValue: 'statement, plan, notice',
      controlValue: 'Arcom, up to €25,000',
      ctaLabel: 'Review my website',
      leadBudget: 'Company above €250M (art. 47)',
    },
    eaaInScope: {
      title: 'Concerned: European Accessibility Act, since 28 June 2025',
      explanation:
        'Based on your answers, your website sells to consumers and you are not a micro-enterprise: since 28 June 2025, your e-commerce service must meet the accessibility requirements of the French Consumer Code (transposition of European directive 2019/882). You also publish information explaining how the service meets them. The DGCCRF checks, notably after reports.',
      headline: '28 June 2025',
      headlineSuffix: 'obligation already in force, no grace period for a website',
      lawValue: 'Consumer Code',
      standardValue: 'order of 9 Oct. 2023',
      publicationValue: 'accessibility information',
      controlValue: 'DGCCRF',
      ctaLabel: 'Review my website',
      leadBudget: 'Online sales to consumers (European Accessibility Act)',
    },
    recommended: {
      title: 'No legal obligation identified',
      explanation:
        'Based on your answers, neither article 47 of the 2005 law nor the European Accessibility Act applies to your website. Making it accessible is still recommended: it helps visually impaired visitors, those who browse with a keyboard, and everyone reading on a small screen. The WCAG 2.1 level AA rules are a good benchmark. If your situation changes (size, sales to consumers), take the test again.',
      headline: 'No obligation',
      headlineSuffix: 'identified from your answers, but recommended',
      lawValue: 'no text identified',
      standardValue: 'WCAG 2.1 AA, as a benchmark',
      publicationValue: 'optional',
      controlValue: 'none',
      ctaLabel: 'Get a first opinion',
      leadBudget: 'No obligation identified',
    },
    checkNeeded: {
      title: 'To check: your case depends on a detail',
      explanation:
        'Your situation sits at the edge of two texts: article 47 of the 2005 law and the European Accessibility Act, in force since 28 June 2025. The test cannot settle it alone: the point to check is just below. In the meantime, the basic steps cost nothing and help in every case.',
      headline: 'To check',
      headlineSuffix: 'a detail of your activity decides whether an obligation applies',
      lawValue: 'art. 47 or Consumer Code',
      standardValue: 'RGAA 4.1.2 if concerned',
      publicationValue: 'depends on the text',
      controlValue: 'Arcom or DGCCRF',
      ctaLabel: 'Describe my case',
      leadBudget: 'Case to check',
    },
  },
  cardEyebrow: 'Your obligations',
  lawLabel: 'Text',
  standardLabel: 'Standard',
  publicationLabel: 'To publish',
  controlLabel: 'Checked by',
  cardFootnote:
    'Law of 11 February 2005 (art. 47 and 47-1) and French Consumer Code, re-read on 8 November 2026. RGAA 5 is announced for the end of 2026.',
  cardFootnoteLinkLabel: 'See the dates',
  cardFootnoteLinkHref: '#dates',
  adviceTitle: 'What I would do in your place',
  advice: {
    publicDeclaration:
      'Publish an "Accessibility" page reachable from every page, with the statement in the DINUM format, the multi-year plan and the action plan of the year, and show "Accessibility: fully, partially or not compliant" on the home page.',
    largeCompanyDeclaration:
      'The accessibility statement, the multi-year plan and the home page notice are what Arcom checks at a company: start with them, even before the fixes are finished.',
    rgaaAudit:
      'Have a sample of representative pages audited against the 106 criteria of RGAA 4.1.2: the rate gives the compliance status (100% fully, at least 50% partially) and the list of fixes, by order of importance.',
    accessibilityInformation:
      'Add to your terms and conditions (or to a dedicated page) the information explaining how your service meets the accessibility requirements, in a format that is itself accessible: it is an obligation in its own right.',
    noTransitionForWebsites:
      'No delay for an existing website: the DGCCRF states that a website or an app is not a "product" and does not benefit from the transition period to 2030. Only contracts signed before 28 June 2025 may run until their end.',
    contractsTransition:
      'Service contracts concluded with consumers before 28 June 2025 may apply unchanged until their end, and at the latest until 28 June 2030. New contracts already follow the rules.',
    disproportionateBurden:
      'If part of the website cannot be made accessible without a disproportionate burden, document it (cost, resources, benefit for users) and provide an alternative: lack of time or priority is not an accepted reason.',
    alsoEuropeanLaw:
      'You also sell to consumers: since 28 June 2025, the European Accessibility Act adds to article 47, with accessibility information to publish and checks by the DGCCRF.',
    subtitles:
      'Caption videos with sound (RGAA criterion 4.3) and add a transcript to audio content: it is often the most visible defect, and the easiest to fix on new videos.',
    microExemption:
      'A micro-enterprise (fewer than 10 employees and at most €2M of turnover or balance sheet) providing services is exempt from the European Accessibility Act. If you go over these thresholds, the obligation will apply: better prepare now.',
    businessCustomersOnly:
      'The European Accessibility Act targets online sales to consumers. If you open your website to consumers (shop, booking, subscription), take the test again: the answer will change.',
    showcaseRecommended:
      'A showcase website has no legal obligation, but an accessible website reads better for everyone, Google included: image alternative texts, structured headings and explicit links also help SEO.',
    internalTools:
      'The intranet of a private company is not targeted, but a disabled employee’s request for workplace adjustment may require it: a tool usable with a keyboard and readable by a screen reader avoids rebuilding everything that day.',
    associationEssentialServices:
      'An association is outside article 47, unless it provides essential services to the public or services for disabled people, or is entrusted with a public service mission or mostly publicly funded. In that case, take the test again and choose "Public body".',
    regulatedSector:
      'Consumer banking, passenger transport, telephony, access to video and e-books are covered by the European Accessibility Act, but only for some elements (website, app, tickets, information). Check which ones with your sector’s authority (DGCCRF, Arcom, ARCEP, Banque de France).',
    customerAreaCommerce:
      'If your consumer customers can buy, book or subscribe from this area, it is e-commerce under the European Accessibility Act: take the test again and choose "Online sale". A simple order or file tracking is not covered.',
    accessibleFromSpecification:
      'The website is new or planned: write "compliant with RGAA 4.1.2 / WCAG 2.1 AA" in the specifications or the quote, with an audit before going live. Planned from the start, it costs far less than a fix afterwards.',
    sixGestures:
      'Do the six steps of the method below: alternative texts, page language, headings, contrast, keyboard, form labels. They can be checked without any tool and catch the most frequent defects.',
  },
  summaryTemplate: '{organization}, {size}, {website}, for {customers}; {timing}.',
  organizationWords: {
    public: 'Public body or public service mission',
    company: 'Company',
    association: 'Association',
    freelance: 'Freelancer or micro-entrepreneur',
  },
  sizeWords: {
    micro: 'fewer than 10 employees and €2M at most',
    small: '10 employees or more, or over €2M',
    large250: 'over €250M of turnover in France',
  },
  websiteWords: {
    showcase: 'showcase website',
    ecommerce: 'online sales',
    regulated: 'banking, transport, telecoms, video or e-books',
    service: 'customer area or app',
    internal: 'intranet or internal tool',
  },
  customerWords: {
    consumers: 'consumers',
    businesses: 'professionals',
    both: 'consumers and professionals',
  },
  timingWords: {
    existing: 'website online before 28 June 2025',
    new: 'website created or rebuilt since 28 June 2025',
    planned: 'website still a project',
  },
  disclaimer:
    'Result based on your answers and the French texts in force on 8 November 2026. This test does not replace legal advice.',
  leadFormTitle: 'Tell me where your website stands',
  leadFormIntro:
    'The website address, what it does, what worries you: I reply within 24 hours with a first opinion and the steps to take, and a quote only if fixes are needed.',
}
