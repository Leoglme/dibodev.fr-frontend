import type { DibodevProjectSpecificationTemplatePageContent } from '~/core/types/DibodevProjectSpecificationPage'

export const PROJECT_SPECIFICATION_SHOWCASE_WEBSITE_PAGE_EN: DibodevProjectSpecificationTemplatePageContent = {
  projectType: 'showcaseWebsite',
  meta: {
    title: 'Showcase website project brief: free Word and PDF template',
    description:
      'Showcase website project brief template in Word, with a filled-in example in PDF: pages, features, budget, legal requirements. Free, no email.',
    inLanguage: 'en-US',
    schemaAbout: 'Project brief for a showcase website',
  },
  breadcrumbLabel: 'Showcase website',
  shareImage: {
    titleLines: ['Showcase website', 'project brief'],
    highlight: 'Showcase website',
    subtitle: 'Word template and filled-in example in PDF',
    badge: 'Free · no email',
    alt: 'Free project brief template for a showcase website, in Word, with a filled-in example in PDF',
  },
  hero: {
    titleBefore: '',
    titleHighlight: 'Showcase website project brief',
    titleAfter: ': free Word and PDF template, with a filled-in example',
    reassurances: ['Template + filled-in example', 'Editable Word file', 'No sign-up, no email'],
    aboutTitle: 'About the template',
    description:
      'A showcase website project brief in nine parts, ready to fill in, and the same document filled in for a plumber and heating engineer in Bruz, France. It fits on a few pages: enough to get quotes you can compare, short enough to be read in full. The website pages, the features sorted by priority, the budget and the ownership of the domain name are already covered.',
    authorIntro: 'Template prepared by',
    authorBio:
      'freelance developer near Rennes, France. These are the questions I ask before pricing a showcase website.',
  },
  downloads: {
    eyebrow: 'Free download',
    lead: 'For a tradesperson, a shop or a freelancer preparing their website. The Word file is yours to fill in and edit. The PDF shows the same document filled in from start to finish.',
    templateLabel: 'Download the Word template',
    templateMeta: 'Word, 9 parts to fill in',
    exampleLabel: 'Download the filled-in example',
    exampleMeta: 'PDF, a plumber in Bruz',
    generatorText: 'Faster: answer five questions and the document writes itself, in your name.',
    generatorLinkLabel: 'Write yours in 5 minutes with the generator',
    footnote: 'Free to use, to adapt to your project and to send to any provider.',
  },
  contents: {
    anchorId: 'contents',
    eyebrow: 'What the template contains',
    title: 'A template to fill in and a complete example',
    intro:
      'The Word file follows the nine parts, with a grey instruction under each heading to replace with your text. The PDF is the same document filled in, to show the level of detail expected.',
    documents: [
      {
        title: 'The template to fill in',
        format: 'Word, editable in Word, LibreOffice, Google Docs or Pages',
        items: [
          'About the business and the project, new or redesign',
          'Goals, each with its measure, and target customers',
          'The usual pages of a showcase website, to cross out or complete',
          'Ten features to sort into essential or nice to have',
          'Content and visual identity, technical and legal requirements',
          'Budget, timeline, maintenance and what each quote must include',
        ],
      },
      {
        title: 'The filled-in example',
        format: 'PDF, Plomberie Martin in Bruz (fictional business)',
        items: [
          'A business of 2 to 10 people, with no website today, that wants calls and quote requests',
          'Three goals, each with the way to measure it',
          'Eight pages, including one page per service',
          'Seven features sorted into essential and nice to have',
          'A budget of €1,500 to €5,000, a launch within three months, maintenance priced separately',
          'The list of what each quote must include to be compared with the others',
        ],
      },
    ],
  },
  example: {
    eyebrow: 'Project brief example',
    title: 'Read the filled-in example here',
    intro:
      'The showcase website of a plumber and heating engineer in Bruz, as the generator writes it from five answers.',
    expandLabel: 'Read the whole example',
    collapseLabel: 'Collapse the example',
    generatorLinkLabel: 'Make the same one for my business',
    answers: {
      projectType: 'showcaseWebsite',
      kind: 'creation',
      companyName: 'Plomberie Martin',
      activity: 'plumber and heating engineer: emergency repairs, boilers and bathrooms',
      city: 'Bruz',
      companySize: 'small',
      goals: ['google', 'quotes', 'calls'],
      audience: 'consumers',
      features: ['contactForm', 'callButton', 'servicePages', 'gallery', 'reviews', 'booking', 'photoQuote'],
      contentSource: 'together',
      budget: 'from1500to5000',
      launchDate: 'threeMonths',
    },
  },
  sitemap: {
    eyebrow: 'Site structure',
    title: 'The pages of a showcase website',
    intro:
      'This is the part that sets the price. Start from this plan, cross out what does not apply to you, add one page per service.',
    ariaLabel:
      'Plan of a showcase website: the home page, then the services with one page per service, past work, customer reviews, the about page and the contact page; in the footer, the legal notice and the privacy policy.',
    rootLabel: 'Home',
    branches: [
      { label: 'Services', children: ['Emergency repairs and leaks', 'Boilers and heating', 'Bathrooms'] },
      { label: 'Our work', children: [] },
      { label: 'Customer reviews', children: [] },
      { label: 'About', children: [] },
      { label: 'Contact', children: [] },
    ],
    footerNote: 'In the footer: legal notice, privacy and cookies',
    notes: [
      {
        title: 'One page per service',
        text: 'This is what Google reads first: “boiler repair Bruz” finds a page that talks about it.',
      },
      {
        title: 'Six to ten pages are enough',
        text: 'That is the size of most tradespeople’s websites. A blog is planned separately, if someone is there to write it.',
      },
      {
        title: 'Legal pages at the bottom',
        text: 'The legal notice and the privacy policy are mandatory, but they have no place in the menu.',
      },
    ],
  },
  howToFill: {
    eyebrow: 'How to fill it in',
    title: 'Fill in the template in four steps',
    intro:
      'Allow an hour by hand. Replace each grey instruction with your text, and delete what does not apply to you.',
    steps: [
      {
        label: 'Step 1',
        title: 'Start with the business and the goals',
        description:
          'Five lines about you, three goals with their measure. The rest of the document follows from them.',
      },
      {
        label: 'Step 2',
        title: 'List the pages, then sort the features',
        description:
          'Keep the usual structure, cross out what does not apply to you, add one page per service. Then sort each feature: essential on launch day, or nice to have later.',
      },
      {
        label: 'Step 3',
        title: 'Say who provides what',
        description: 'Texts, photos, logo, access to the domain name: who takes care of them, and by when.',
      },
      {
        label: 'Step 4',
        title: 'Give a budget and a date',
        description: 'A range and a launch date, then the same document to two or three providers.',
      },
    ],
  },
  rules: {
    anchorId: 'rules',
    eyebrow: 'What French law requires',
    title: 'Four obligations to write into the project brief',
    intro:
      'In France, they apply to every business website, even a one-page one. The template includes them in the “requirements” part, so that they are priced from the first quote.',
    facts: [
      {
        contextLabel: 'Every business website',
        title: 'The legal notice',
        text: 'Name or company name, address, SIREN or SIRET number, a way to contact you and the website host, on a page reachable from every other page.',
        sourceName: 'Entreprendre.Service-Public.fr',
        sourceUrl: 'https://entreprendre.service-public.gouv.fr/vosdroits/F37351',
      },
      {
        contextLabel: 'Before any tracker',
        title: 'Cookies',
        text: 'No advertising tracker without the visitor’s consent, and refusing must be as simple as accepting. Some audience measurement tools are exempt.',
        sourceName: 'Entreprendre.Service-Public.fr',
        sourceUrl: 'https://entreprendre.service-public.gouv.fr/vosdroits/F31228',
      },
      {
        contextLabel: 'Contact form',
        title: 'Personal data',
        text: 'Say what the data sent is used for, how long you keep it, and link to your privacy policy.',
        sourceName: 'CNIL',
        sourceUrl: 'https://www.cnil.fr/fr/conformite-rgpd-information-des-personnes-et-transparence',
      },
      {
        contextLabel: 'Private customers',
        title: 'The consumer mediator',
        text: 'If you work for private customers, the website names the mediator they can turn to in case of a dispute.',
        sourceName: 'economie.gouv.fr',
        sourceUrl: 'https://www.economie.gouv.fr/mediation-conso',
      },
    ],
  },
  faq: {
    eyebrow: 'Frequently asked questions',
    title: 'Showcase website project brief: your questions',
    questions: [
      {
        question: 'What goes into a showcase website project brief?',
        answer:
          'Nine parts: the business, the project, the goals and target audience, the pages, the features, the content, the technical and legal requirements, the budget and timeline, and what each quote must include. The template follows them in this order.',
      },
      {
        question: 'How many pages does a showcase website need?',
        answer:
          'Six to ten pages in general: the home page, one page per service, past work, the about page and the contact page, plus the legal notice and the privacy policy in the footer.',
      },
      {
        question: 'How much does a showcase website cost?',
        answer:
          'At Dibodev, €290 paid once for a template website, domain name and hosting included, or from €1,500 for a custom website. The website price barometer compares the prices published by 20 French providers.',
      },
      {
        question: 'Is a project brief useful for a €290 website?',
        answer:
          'No. For a template website, a 30-minute call is enough. A project brief is useful when you ask for several quotes or for a custom website.',
      },
      {
        question: 'Word or PDF?',
        answer:
          'The Word file can be filled in and edited in Word, LibreOffice, Google Docs or Pages. The PDF is the filled-in example, to read or print.',
      },
      {
        question: 'Is the template really free?',
        answer: 'Yes, with no sign-up and no email. You can send it to any provider, not only to me.',
      },
    ],
  },
  otherTemplates: {
    eyebrow: 'Other templates',
    title: 'A project other than a showcase website?',
    generatorCard: {
      projectType: 'showcaseWebsite',
      eyebrow: 'Free generator',
      title: 'Yours in 5 minutes',
      text: 'Five questions, and the document writes itself in your name as you answer. Word or PDF, no email.',
      note: 'Showcase website, online store, business software or mobile app',
    },
    generatorLinkLabel: 'Open the generator',
  },
  contactCta: {
    title: 'Is your project brief filled in?',
    description:
      'Send it to me: I reply within 24 hours, with a price or with my questions. If a €290 template website is enough for you, I will tell you.',
    button: 'Ask for a quote',
    generatorLinkLabel: 'Fill it in with the generator',
  },
  mobileBar: {
    text: 'Free template, no email',
    button: 'Download the Word template',
  },
}
