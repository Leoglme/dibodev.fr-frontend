import type { DibodevProjectSpecificationTemplatePageContent } from '~/core/types/DibodevProjectSpecificationPage'

export const PROJECT_SPECIFICATION_MOBILE_APP_PAGE_EN: DibodevProjectSpecificationTemplatePageContent = {
  projectType: 'mobileApp',
  meta: {
    title: 'Mobile app project brief: free Word template and example',
    description:
      'Mobile app project brief template in Word for iPhone and Android, with a filled-in PDF example: screens, features, budget. Free, no email.',
    inLanguage: 'en-US',
    schemaAbout: 'Project brief for a mobile app',
  },
  breadcrumbLabel: 'Mobile app',
  shareImage: {
    titleLines: ['Mobile app', 'project brief'],
    highlight: 'Mobile app',
    subtitle: 'Word template and filled-in PDF example',
    badge: 'Free · no email',
    alt: 'Free project brief template for an iPhone and Android mobile app, in Word, with a filled-in PDF example',
  },
  hero: {
    titleBefore: '',
    titleHighlight: 'Mobile app project brief',
    titleAfter: ': free Word and PDF template, with a filled-in example',
    reassurances: ['Template + filled-in example', 'Editable Word file', 'No sign-up, no email'],
    aboutTitle: 'About the template',
    description:
      'A mobile app project brief in nine parts, ready to fill in, and the same document filled in for a gym in Rennes, France. It is meant for a business that wants an iPhone and Android app for its customers or its teams, and is asking for quotes. The screens, the features sorted by priority, the budget and the timeline are already planned, as are publishing on the stores and deleting the account from within the app.',
    authorIntro: 'Template prepared by',
    authorBio: 'independent developer near Rennes, France. These are the questions I ask before pricing a mobile app.',
  },
  downloads: {
    eyebrow: 'Free download',
    lead: 'For a business preparing an app for its customers or its teams. The Word file is ready to fill in and edit; the PDF shows the same document filled in from start to finish.',
    templateLabel: 'Download the Word template',
    templateMeta: 'Word, 9 parts to fill in',
    exampleLabel: 'Download the filled-in example',
    exampleMeta: 'PDF, a gym in Rennes',
    generatorText: 'Faster: answer five questions and the document writes itself, under your name.',
    generatorLinkLabel: 'Complete it in 5 minutes with the generator',
    footnote: 'Free to use: adapt it to your project and send it to any provider.',
  },
  contents: {
    anchorId: 'contents',
    eyebrow: 'What the template contains',
    title: 'A template to fill in and a complete example',
    intro:
      'The Word file holds the nine parts with, under each heading, an instruction in grey to replace with your own text. The PDF is the same document filled in, to show the level of detail expected.',
    documents: [
      {
        title: 'The template to fill in',
        format: 'Word, editable in Word, LibreOffice, Google Docs or Pages',
        items: [
          'Company and project presentation, new app or redesign',
          'Goals, each with its measure, and target users',
          'The usual screens of a mobile app, to strike out or complete',
          'Ten features to sort into essential or nice to have',
          'Content and visual identity, App Store, Google Play and GDPR requirements',
          'Budget, timeline, maintenance and what each quote must include',
        ],
      },
      {
        title: 'The filled-in example',
        format: 'PDF, Fitness Moreau in Rennes (fictional company)',
        items: [
          'A gym in Rennes with a team of 2 to 10 people, creating its app for its customers',
          'Three goals, each with its measure: bring customers back, take bookings from a phone, send notifications to customers',
          'Six screens: home, login and sign-up, list and detail page, booking, profile, admin on a computer',
          'Six features sorted into essential and nice to have, including slot booking and in-app payment',
          'A budget to be agreed with the provider, who proposes a core version and its options, a launch within six months and maintenance priced separately',
          'The list of what each quote must include, down to the ownership of the code and the store accounts',
        ],
      },
    ],
  },
  example: {
    eyebrow: 'Project brief example',
    title: 'The filled-in example, to read here',
    intro: 'The app of a gym in Rennes, France, as the generator describes it from five answers.',
    expandLabel: 'Read the whole example',
    collapseLabel: 'Collapse the example',
    generatorLinkLabel: 'Make one under my name',
    answers: {
      projectType: 'mobileApp',
      kind: 'creation',
      companyName: 'Fitness Moreau',
      activity: 'gym: group classes, personal training and memberships',
      city: 'Rennes',
      companySize: 'small',
      goals: ['booking', 'loyalty', 'notify'],
      audience: 'customers',
      features: ['iosAndroid', 'accounts', 'notifications', 'admin', 'booking', 'inAppPayment'],
      contentSource: 'together',
      budget: 'unknown',
      launchDate: 'sixMonths',
    },
  },
  sitemap: {
    eyebrow: 'Screen map',
    title: 'The screens of a mobile app',
    intro:
      'This is the part that sets the price. Here are the screens of a gym app: start from this plan, strike out what does not apply, add what is missing.',
    ariaLabel:
      'Plan of a gym mobile app: the home screen, then the class schedule with booking a class and my bookings, the membership and its payment, notifications, the profile with account deletion, and admin on a computer; from the profile, privacy and terms of use.',
    rootLabel: 'Home',
    branches: [
      { label: 'Class schedule', children: ['Book a class', 'My bookings'] },
      { label: 'Membership', children: ['Payment'] },
      { label: 'Notifications', children: [] },
      { label: 'Profile', children: ['Delete my account'] },
      { label: 'Admin on a computer', children: [] },
    ],
    footerNote: 'From the profile: privacy policy and terms of use',
    notes: [
      {
        title: 'The account, from sign-up to deletion',
        text: 'Sign-up, login and deletion: plan all three screens. The App Store and Google Play both require account deletion from within the app.',
      },
      {
        title: 'Admin on a computer',
        text: 'Who adds the classes and sends the notifications? Usually the team, from a web browser. That tool is part of the project: describe it like the rest.',
      },
      {
        title: 'Start with the essentials',
        text: 'Every screen is designed and tested on iPhone as well as on Android. Keep what is not essential on launch day for a later update.',
      },
    ],
  },
  howToFill: {
    eyebrow: 'How to fill it in',
    title: 'Fill in the template in four steps',
    intro:
      'Replace each grey instruction with your own text, and delete what does not apply. Keep the order of the parts: it is the order in which a provider reads it.',
    steps: [
      {
        label: 'Step 1',
        title: 'Start with the business and the goals',
        description:
          'Five lines about you, three goals with their measure, and who will use the app: your customers, your teams or both.',
      },
      {
        label: 'Step 2',
        title: 'List the screens, then sort the features',
        description:
          'Keep the usual screens and say in one line what each one shows. Then sort each feature: essential on launch day, or nice to have for a later update.',
      },
      {
        label: 'Step 3',
        title: 'Say who provides what',
        description: 'Texts, images, logo, app icon: who takes care of them, and by when.',
      },
      {
        label: 'Step 4',
        title: 'Give a budget and a date',
        description:
          'A range and a launch date. Without a range, ask for a core version and its options. Then send the same document to two or three providers.',
      },
    ],
  },
  rules: {
    anchorId: 'rules',
    eyebrow: 'What the stores and French law ask for',
    title: 'Four points to write into the project brief',
    intro:
      'They apply to any app that creates accounts. The template already lists account deletion and the GDPR among its technical and legal requirements, so that they are priced from the first quote.',
    facts: [
      {
        contextLabel: 'App Store, guideline 5.1.1 (v)',
        title: 'Deleting the account from within the app',
        text: 'An app that lets users create an account must also let them delete it, from within the app itself. Planning it in the brief avoids discovering it at publication time.',
        sourceName: 'Apple, App Review Guidelines',
        sourceUrl: 'https://developer.apple.com/app-store/review/guidelines/',
      },
      {
        contextLabel: 'Google Play',
        title: 'The same requirement on Android',
        text: 'Google Play has its own account deletion requirements: an app that lets users create an account must also let them request its deletion.',
        sourceName: 'Google Play, account deletion requirements',
        sourceUrl: 'https://support.google.com/googleplay/android-developer/answer/13327111',
      },
      {
        contextLabel: 'Before the design stage',
        title: 'The CNIL’s recommendations',
        text: 'The CNIL, the French data protection authority, publishes recommendations specific to mobile apps, on their users’ personal data. Attach them to the project brief, so that the provider takes them into account from the design stage.',
        sourceName: 'CNIL',
        sourceUrl: 'https://www.cnil.fr/fr/recommandations-applications-mobiles',
      },
      {
        contextLabel: 'From the first account',
        title: 'GDPR obligations in France',
        text: 'Name, email, bookings: an app with accounts collects personal data, and the business that publishes it must meet the obligations of the GDPR.',
        sourceName: 'Entreprendre.Service-Public.fr',
        sourceUrl: 'https://entreprendre.service-public.gouv.fr/vosdroits/F24270',
      },
    ],
  },
  faq: {
    eyebrow: 'Frequently asked questions',
    title: 'Mobile app project brief: your questions',
    questions: [
      {
        question: 'What should a mobile app project brief contain?',
        answer:
          'Nine parts: the business, the project, the goals and the users, the screens, the features, the content, the technical and legal requirements, the budget and the timeline, and what each quote must include. The template follows that order. For an app, the requirements add publishing on the App Store and Google Play under the business’s name, account deletion from within the app and ownership of the source code.',
      },
      {
        question: 'An app for iPhone and Android: do you need two apps?',
        answer:
          'Not necessarily. A single codebase can serve both: the app is written once, then published on the App Store and on Google Play. There are still two publications, one per store, but only one codebase to maintain. The template states it in its requirements: a single app for iPhone and Android.',
      },
      {
        question: 'Mobile app or mobile-friendly website: which one?',
        answer:
          'A mobile-friendly website is enough to present your business, be found on Google and receive enquiries. An app makes sense when your customers or your teams open it often: booking a class, receiving a notification, working without a network, paying a membership. If use stays occasional, start with the website.',
      },
      {
        question: 'How much does a mobile app cost?',
        answer:
          'At Dibodev, a mobile app is priced on a quote, based on your project brief. The price depends mainly on the number of screens, the features (accounts, booking, payment, offline mode) and the admin tools needed. Without a set budget, the generator asks the provider for a core version and its options.',
      },
      {
        question: 'Who publishes the app on the stores, and under which name?',
        answer:
          'The app is published under your business’s name, on its own App Store and Google Play accounts. The provider can handle the publication, but the accounts and the source code remain yours: the template asks every quote to confirm it.',
      },
      {
        question: 'Is the template really free?',
        answer: 'Yes, with no sign-up and no email. You can send it to any provider, not just to me.',
      },
    ],
  },
  otherTemplates: {
    eyebrow: 'The other templates',
    title: 'A project other than a mobile app?',
    generatorCard: {
      projectType: 'mobileApp',
      eyebrow: 'Free generator',
      title: 'Yours in 5 minutes',
      text: 'Five questions, and the document writes itself under your name as you answer. Word or PDF, no email.',
      note: 'Showcase website, online store, business software or mobile app',
    },
    generatorLinkLabel: 'Open the generator',
  },
  contactCta: {
    title: 'Is your project brief filled in?',
    description:
      'Send it to me: I reply within 24 hours, with a price or with my questions. If a mobile-friendly website meets your needs, I will tell you.',
    button: 'Ask for a quote',
    generatorLinkLabel: 'Fill it in with the generator',
  },
  mobileBar: {
    text: 'Free template, no email',
    button: 'Download the Word template',
  },
}
