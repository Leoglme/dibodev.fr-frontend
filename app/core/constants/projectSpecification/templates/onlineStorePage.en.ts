import type { DibodevProjectSpecificationTemplatePageContent } from '~/core/types/DibodevProjectSpecificationPage'

export const PROJECT_SPECIFICATION_ONLINE_STORE_PAGE_EN: DibodevProjectSpecificationTemplatePageContent = {
  projectType: 'onlineStore',
  meta: {
    title: 'Online store project brief: free Word and PDF template',
    description:
      'Online store project brief template in Word, with a filled-in example in PDF: payment, delivery, French legal rules, budget. Free, no email.',
    inLanguage: 'en-US',
    schemaAbout: 'Project brief for an online store (e-commerce)',
  },
  breadcrumbLabel: 'Online store',
  shareImage: {
    titleLines: ['Online store', 'project brief'],
    highlight: 'Online store',
    subtitle: 'Word template and filled-in example in PDF',
    badge: 'Free · no email',
    alt: 'Free project brief template for an online store, in Word, with a filled-in example in PDF',
  },
  hero: {
    titleBefore: '',
    titleHighlight: 'Online store project brief',
    titleAfter: ': free Word and PDF template for an e-commerce website, with a filled-in example',
    reassurances: ['Template + filled-in example', 'Editable Word file', 'No sign-up, no email'],
    aboutTitle: 'About the template',
    description:
      'An online store project brief in nine parts, ready to fill in, and the same document filled in for a fine food shop in Rennes, France. It is meant for shops, craftspeople and producers who want to sell online and get quotes they can compare. The store’s pages, the features sorted by priority, payment, delivery and the terms of sale are already covered. It also states that the store, the customer file and the domain name stay in your name.',
    authorIntro: 'Template prepared by',
    authorBio:
      'independent developer near Rennes, France. These are the questions I ask before pricing an online store.',
  },
  downloads: {
    eyebrow: 'Free download',
    lead: 'For a shop, a craftsperson or a producer preparing their online store. The Word file is yours to fill in and edit, the PDF shows the same document filled in from start to finish.',
    templateLabel: 'Download the Word template',
    templateMeta: 'Word, 9 parts to fill in',
    exampleLabel: 'Download the filled-in example',
    exampleMeta: 'PDF, a fine food shop in Rennes',
    generatorText: 'Faster: answer five questions and the document writes itself, in your name.',
    generatorLinkLabel: 'Fill it in within 5 minutes with the generator',
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
          'About the business and the project, new store or redesign',
          'Goals, each with its measure, and target customers',
          'The nine usual pages of an online store, to cross out or complete',
          'Ten features to sort into essential or nice to have, from card payment to the link with your till',
          'Product descriptions and photos, technical and legal requirements (secure payment, terms of sale, withdrawal)',
          'Budget, timeline, maintenance and what each quote must include',
        ],
      },
      {
        title: 'The filled-in example',
        format: 'PDF, Épicerie fine Lemoine in Rennes (fictional business)',
        items: [
          'A fine food shop of 2 to 10 people creating its online store, for private customers in France',
          'Three goals with their measure: sell every day, sell beyond Rennes, offer in-store pickup',
          'Nine usual pages, including the customer account and the terms of sale',
          'Four essential features (catalogue, card payment, stock, delivery and pickup) and two nice-to-haves (promo codes, customer accounts)',
          'Product descriptions and photos supplied by the shop, laid out by the provider',
          'A budget of €1,500 to €5,000, a launch within six months, maintenance priced separately',
        ],
      },
    ],
  },
  example: {
    eyebrow: 'Project brief example',
    title: 'The filled-in example, to read here',
    intro: 'The online store of a fine food shop in Rennes, as the generator writes it from five answers.',
    expandLabel: 'Read the whole example',
    collapseLabel: 'Collapse the example',
    generatorLinkLabel: 'Make the same one for my business',
    answers: {
      projectType: 'onlineStore',
      kind: 'creation',
      companyName: 'Épicerie fine Lemoine',
      activity: 'fine food shop: Breton products, hampers and gift boxes',
      city: 'Rennes',
      companySize: 'small',
      goals: ['sell', 'reach', 'pickup'],
      audience: 'consumers',
      features: ['catalog', 'cardPayment', 'stock', 'shipping', 'promoCodes', 'customerAccounts'],
      contentSource: 'client',
      budget: 'from1500to5000',
      launchDate: 'sixMonths',
    },
  },
  sitemap: {
    eyebrow: 'Site structure',
    title: 'The pages of an online store',
    intro:
      'This is the part that sets the price. Start from this plan, cross out what does not apply to you, add one page per product category.',
    ariaLabel:
      'Plan of an online store: the home page, then the catalogue with one page per category, gift boxes, the basket and checkout, the customer account and the contact page; in the footer, the terms of sale, delivery and returns, the legal notice, privacy and cookies.',
    rootLabel: 'Home',
    branches: [
      { label: 'Catalogue', children: ['Biscuits and caramels', 'Tinned seafood', 'Ciders and drinks'] },
      { label: 'Gift boxes', children: [] },
      { label: 'Basket and checkout', children: [] },
      { label: 'Customer account', children: [] },
      { label: 'Contact', children: [] },
    ],
    footerNote: 'In the footer: terms of sale, delivery and returns, legal notice, privacy and cookies',
    notes: [
      {
        title: 'One page per category',
        text: 'Each category has its page, each product its own page: a search for “salted butter caramel” finds a page that talks about it.',
      },
      {
        title: 'What reassures before buying',
        text: 'Shipping costs, delivery times, returns and payment methods: customers look for them before paying. Give them a page, linked from the basket.',
      },
      {
        title: 'The rest in the footer',
        text: 'The terms of sale, the legal notice and the privacy policy are mandatory in France. With the delivery and returns page, they go at the bottom of every page, not in the menu.',
      },
    ],
  },
  howToFill: {
    eyebrow: 'How to fill it in',
    title: 'Fill in the template in four steps',
    intro:
      'Replace each grey instruction with your text, and delete what does not apply to you. Keep the order of the parts: it is the order in which a provider reads it.',
    steps: [
      {
        label: 'Step 1',
        title: 'Start with the business and the goals',
        description:
          'Five lines about you and your products, three goals with their measure. The rest of the document follows from them.',
      },
      {
        label: 'Step 2',
        title: 'List the pages, then sort the features',
        description:
          'Keep the usual structure and add one page per product category. Then sort the features: catalogue, payment, stock and delivery first, the rest can wait.',
      },
      {
        label: 'Step 3',
        title: 'Say who prepares the product pages',
        description:
          'Descriptions, photos, prices, weights for shipping costs: who takes care of them, and for how many products.',
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
      'In France, they apply to any online store that sells to private customers, whatever its size. The template already includes them, so that they are priced from the first quote.',
    facts: [
      {
        contextLabel: 'Before the order',
        title: 'Information and terms of sale',
        text: 'Product features, the total price including VAT, the delivery date or time and the terms of sale are on the site before the order. The final button reads “Commande avec obligation de paiement” (order with obligation to pay).',
        sourceName: 'Entreprendre.Service-Public.fr',
        sourceUrl: 'https://entreprendre.service-public.gouv.fr/vosdroits/F23455',
      },
      {
        contextLabel: '14 days',
        title: 'The right of withdrawal',
        text: 'A private customer who buys at a distance has 14 days to withdraw, without giving a reason, and the site must tell them so. A few products are excluded, such as food that perishes quickly.',
        sourceName: 'Service-Public.fr',
        sourceUrl: 'https://www.service-public.gouv.fr/particuliers/vosdroits/F10485',
      },
      {
        contextLabel: 'Private customers',
        title: 'The consumer mediator',
        text: 'If you sell to private customers, the site names the consumer mediator they can turn to in case of a dispute.',
        sourceName: 'economie.gouv.fr',
        sourceUrl: 'https://www.economie.gouv.fr/mediation-conso',
      },
      {
        contextLabel: 'Customer file',
        title: 'Personal data',
        text: 'Addresses, orders, customer accounts: collect only what you need, say what the data is used for and how long you keep it, and protect it.',
        sourceName: 'Entreprendre.Service-Public.fr',
        sourceUrl: 'https://entreprendre.service-public.gouv.fr/vosdroits/F24270',
      },
    ],
  },
  faq: {
    eyebrow: 'Frequently asked questions',
    title: 'Online store project brief: your questions',
    questions: [
      {
        question: 'What goes into an online store project brief?',
        answer:
          'Nine parts: the business, the project, the goals and target customers, the store’s pages, the features, the product descriptions and photos, the technical and legal requirements, the budget and timeline, and what each quote must include. The template follows them in this order, with payment, delivery and the terms of sale already covered.',
      },
      {
        question: 'How many products and which pages should I plan for?',
        answer:
          'Give the number of products at launch, the number of categories, and whether a product comes in several versions (weight, flavour, size): that is what changes the work on the catalogue. For the pages, the template lists the home page, the catalogue with one page per category, the product pages, the basket and checkout, the customer account, delivery and returns, the terms of sale and the contact page, plus the legal notice and the privacy policy in the footer.',
      },
      {
        question: 'How much does an online store cost?',
        answer:
          'At Dibodev, an online store is custom-built, from €1,500. The price depends on your project brief: number of products, payment, delivery, customer accounts. The website price barometer compares the prices published by 20 French providers, from the one-page website to the online store.',
      },
      {
        question: 'Should I choose the platform in the project brief?',
        answer:
          'Not necessarily. Describe what the store must do: Shopify, WooCommerce, PrestaShop or custom development are technical choices that each provider proposes and justifies in their quote. If you already have a platform, or want a particular one, write it in the brief.',
      },
      {
        question: 'Payment, delivery, returns: what should I specify?',
        answer:
          'The payment methods accepted, the delivery options (carrier, in-store pickup), the shipping costs and how a return is handled. The template already includes secure payment through a recognised provider (3-D Secure), a delivery and returns page, and the display of the right of withdrawal.',
      },
      {
        question: 'Is the template really free?',
        answer:
          'Yes. The Word template and the PDF example download with no sign-up and no email, and you can send the document to any provider, not only to me.',
      },
    ],
  },
  otherTemplates: {
    eyebrow: 'The other templates',
    title: 'A project other than an online store?',
    generatorCard: {
      projectType: 'onlineStore',
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
      'Send it to me: I read it myself and reply within 24 hours, with a price or with my questions. If an off-the-shelf solution is enough for you, I will tell you.',
    button: 'Ask for a quote',
    generatorLinkLabel: 'Fill it in with the generator',
  },
  mobileBar: {
    text: 'Free template, no email',
    button: 'Download the Word template',
  },
}
