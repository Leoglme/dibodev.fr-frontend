import type { DibodevProjectSpecificationGeneratorPageContent } from '~/core/types/DibodevProjectSpecificationPage'

export const PROJECT_SPECIFICATION_GENERATOR_PAGE_EN: DibodevProjectSpecificationGeneratorPageContent = {
  meta: {
    title: 'Project brief generator: free Word and PDF templates',
    description:
      'Answer 5 questions and your project brief writes itself: showcase website, online store, business software or mobile app. Free, no sign-up, Word or PDF.',
    inLanguage: 'en-US',
    schemaAbout: 'Project brief for a website, an online store or an app',
  },
  applicationName: 'Project brief generator',
  breadcrumbLabel: 'Project brief',
  shareImage: {
    titleLines: ['Project brief', 'in 5 minutes'],
    highlight: 'Project brief',
    subtitle: 'Showcase website, online store, business software or mobile app',
    badge: 'Free · Word and PDF',
    alt: 'Free project brief generator on dibodev.fr: showcase website, online store, business software or mobile app',
  },
  hero: {
    titleBefore: '',
    titleHighlight: 'Project brief',
    titleAfter: ' in 5 minutes: showcase website, online store, business software or mobile app',
    reassurances: ['5 questions, 5 minutes', 'No sign-up, no email', 'Word and PDF'],
    aboutTitle: 'In short',
    description:
      'A project brief fits on four to eight pages: the business, the project, the goals and target audience, the pages or screens, the features, the content, the requirements, the budget and the timeline. This generator writes it in five minutes from your answers, for a showcase website, an online store (e-commerce), business software or a mobile app. It is free, with no sign-up, in Word or PDF, and the document stays neutral: you can send it to any provider.',
    authorIntro: 'Tool built by',
    authorBio:
      'freelance developer near Rennes, France. The generator asks the questions I ask myself before pricing a website or an app.',
  },
  guide: {
    eyebrow: 'What the document contains',
    title: 'The nine parts of a good project brief',
    intro:
      'The generator fills them in for you. If you write it by hand, keep this order: it is the order in which a provider reads it.',
    pitfallLabel: 'The common mistake',
    items: [
      {
        title: 'About the business',
        text: 'Who you are, what you sell, to whom, and where. Five lines are enough.',
        pitfall: 'Telling the story of the business over a whole page.',
      },
      {
        title: 'The project',
        text: 'New project or redesign, what exists today (website, files, tools) and why change now.',
        pitfall: 'Forgetting the address of the website or the name of the current software.',
      },
      {
        title: 'Goals and target audience',
        text: 'Three goals at most, each with its measure, and the target customers or users.',
        pitfall: '“Be visible”, without saying to whom.',
      },
      {
        title: 'The pages or screens',
        text: 'The list of the website pages, or of the app screens, and what each one contains. This is the part that sets the price.',
        pitfall: 'Adding pages as the project goes along.',
      },
      {
        title: 'The features',
        text: 'Form, booking, payment, customer area, offline mode, sorted into essential and nice to have.',
        pitfall: 'Marking everything as essential.',
      },
      {
        title: 'Content and identity',
        text: 'Who writes the texts, where the photos come from, the logo, the colours, or the data to import for software or an app.',
        pitfall: 'Finding out at the end that nobody wrote the texts.',
      },
      {
        title: 'Technical and legal requirements',
        text: 'Phone display, security, search ranking, legal notice, cookies, ownership of the domain name and the code.',
        pitfall: 'Leaving the domain name or the code in the provider’s name.',
      },
      {
        title: 'Budget, timeline and maintenance',
        text: 'A range, a launch date, and maintenance priced separately.',
        pitfall: 'Hiding your budget “to see the prices”.',
      },
      {
        title: 'What each quote must include',
        text: 'A detailed quote, a schedule, examples, the maintenance and the ownership of the website or app.',
        pitfall: 'Comparing quotes that do not price the same thing.',
      },
    ],
  },
  templates: {
    eyebrow: 'Free templates',
    title: 'Four templates to download, each with a filled-in example',
    intro:
      'Prefer to fill in a Word document? Each template follows the nine parts, adapted to the type of project, with a complete example that shows the level of detail expected.',
    linkLabel: 'See the template',
    cards: [
      {
        projectType: 'showcaseWebsite',
        eyebrow: 'Word + PDF example',
        title: 'Showcase website project brief',
        text: 'Home, services, past work, contact: the template for tradespeople, shops and the self-employed.',
        note: 'Filled-in example: a plumber in Bruz',
      },
      {
        projectType: 'onlineStore',
        eyebrow: 'Word + PDF example',
        title: 'Online store project brief',
        text: 'Catalogue, payment, delivery, returns and terms of sale: what to decide before the first quote.',
        note: 'Filled-in example: a fine food shop in Rennes',
      },
      {
        projectType: 'businessSoftware',
        eyebrow: 'Word + PDF example',
        title: 'Business software project brief',
        text: 'The screens, the roles, the data to import and the Excel files to replace.',
        note: 'Filled-in example: a cleaning company',
      },
      {
        projectType: 'mobileApp',
        eyebrow: 'Word + PDF example',
        title: 'Mobile app project brief',
        text: 'iPhone and Android, accounts, notifications, offline mode and publication on the stores.',
        note: 'Filled-in example: a gym',
      },
    ],
  },
  pitfalls: {
    eyebrow: 'Seen from the provider’s side',
    title: 'Three mistakes that make quotes impossible to compare',
    intro: 'I often see them in quote requests. The generator’s questions help you avoid them.',
    cards: [
      {
        key: 'competitor-reference',
        icon: 'Eye',
        iconTone: 'amber',
        eyebrow: '',
        title: '“A website like my competitor’s”',
        text: 'A reference without a list of pages gets you quotes that do not describe the same project. Keep the example, and add the pages and features you really want.',
        note: '',
        link: null,
      },
      {
        key: 'everything-essential',
        icon: 'ClipboardCheck',
        iconTone: 'cyan',
        eyebrow: '',
        title: 'Everything marked “essential”',
        text: 'If everything is a priority, the provider prices everything at full cost. Separate what must be there on launch day from what can wait three months.',
        note: '',
        link: null,
      },
      {
        key: 'hidden-budget',
        icon: 'SlidersHorizontal',
        iconTone: 'green',
        eyebrow: '',
        title: 'No budget “to see the prices”',
        text: 'Without a range, each provider prices the version they imagine. An honest range gets you quotes that fit your size, and options when the budget is tight.',
        note: '',
        link: null,
      },
    ],
  },
  pricing: {
    eyebrow: 'Prices',
    title: 'How much does the project you describe cost?',
    intro:
      'The generator does not price anything: your document stays the same for every provider. Here are my public prices, and the market prices collected in 2026.',
    offers: [
      {
        title: 'Template website',
        price: '€290, paid once',
        description:
          'Domain name and hosting included. For this website, you do not need a project brief: a 30-minute call is enough.',
        isHighlighted: false,
      },
      {
        title: 'Custom website',
        price: 'From €1,500',
        description: 'Unique design, online booking, quotes or online store: the price follows your project brief.',
        isHighlighted: true,
      },
      {
        title: 'AI and automation',
        price: 'From €2,500',
        description:
          'A repetitive task handed over to AI: sorting requests, a document that fills itself in, an assistant.',
        isHighlighted: false,
      },
      {
        title: 'Business software',
        price: '€5,000 to €15,000',
        description:
          'At a fixed price, after a free first conversation. A mobile app is priced on quote, based on your project brief.',
        isHighlighted: false,
      },
    ],
    notes: [
      'Maintenance from €100 to €300 per month, if you want it.',
      'Net prices: VAT not applicable (article 293 B of the French tax code).',
      'You own the website, the code and the domain name.',
    ],
    ctaLabel: 'Ask for a quote',
    secondaryLinkLabel: 'Website prices in France in 2026',
  },
  faq: {
    eyebrow: 'Frequently asked questions',
    title: 'Project brief: your questions',
    questions: [
      {
        question: 'What is a project brief?',
        answer:
          'A project brief, also called a requirements document, describes your project before you ask for quotes: your business, your goals, the pages or screens, the features, the content, the budget and the timeline. It gets you quotes you can compare, then serves as the reference for the whole project, whether it is a showcase website, an online store or an app.',
      },
      {
        question: 'How long should a project brief be?',
        answer:
          'Four to eight pages for a showcase website or an online store, more for business software or a mobile app. Beyond that, it is rarely read in full: a clear list of pages and features is worth more than a long text.',
      },
      {
        question: 'Do I need a project brief for a small showcase website?',
        answer:
          'For a €290 template website, no: a 30-minute call is enough. As soon as you ask for several quotes or for a custom website, yes: it is the only way to compare prices on the same basis.',
      },
      {
        question: 'Functional or technical specification: what is the difference?',
        answer:
          'The functional specification says what the website or app must do, in your own words. The technical specification says how to build it (programming language, hosting, security): the provider often writes it. The generator writes the functional part, with the technical requirements that concern you.',
      },
      {
        question: 'Why not have ChatGPT write it?',
        answer:
          'You can. An AI writes fast, but it fills the gaps with generalities and does not ask for your budget or who will own the domain name and the code. The generator asks those questions. The two work well together: download the Word file, then have it reworded if you wish.',
      },
      {
        question: 'Are my answers saved?',
        answer:
          'No. The document is built in your browser. Nothing leaves it until you click “Ask Léo for a quote”, and then only the document and your contact details are sent to me.',
      },
      {
        question: 'Who should I send my project brief to?',
        answer:
          'To two or three providers, for example an agency, a freelancer and, if your project is simple, a web designer. Give each of them the same document and the same reply date.',
      },
      {
        question: 'How much does it cost to build a website or an app?',
        answer:
          'At Dibodev, €290 paid once for a template website, domain name and hosting included, from €1,500 for a custom website and from €5,000 to €15,000 for business software. The website price and custom software price barometers compare the prices published by other French providers.',
      },
    ],
  },
  related: {
    linkLabel: 'Open the page',
    eyebrow: 'Go further',
    title: 'Before you ask for quotes',
    links: [
      {
        key: 'website-price-barometer',
        routeName: 'website-price-barometer',
        icon: 'FileSpreadsheet',
        eyebrow: '2026 barometer',
        title: 'Website prices in France',
        text: 'The prices published by 20 French providers, from the one-page website to the online store.',
      },
      {
        key: 'custom-software-price-barometer',
        routeName: 'custom-software-price-barometer',
        icon: 'SlidersHorizontal',
        eyebrow: '2026 barometer',
        title: 'Custom software prices',
        text: 'Simple tool, business software or platform: the price ranges of 14 French providers.',
      },
      {
        key: 'website-health-check',
        routeName: 'tools-website-health-check',
        icon: 'ShieldCheck',
        eyebrow: 'Free tool',
        title: 'Test my current website',
        text: 'For a redesign: eight checks in ten seconds, to attach to your project brief.',
      },
    ],
  },
  contactCta: {
    title: 'Is your project brief ready? Send it to me',
    description:
      'I read it myself and reply within 24 hours, with a price or with my questions. If an off-the-shelf tool is enough for you, I will tell you.',
    button: 'Ask for a quote',
  },
  mobileBar: {
    text: 'Project brief ready? I reply within 24 hours',
    button: 'Ask for a quote',
  },
}
