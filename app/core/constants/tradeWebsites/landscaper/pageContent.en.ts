import type { DibodevTradeWebsitePageContent } from '~/core/types/DibodevTradeWebsitePage'
import { CONSUMER_MEDIATION_SOURCE } from '~/core/constants/tools/officialSources'
import {
  HOME_SERVICES_TAX_CREDIT_SOURCE,
  PESTICIDE_BAN_SOURCE,
} from '~/core/constants/tools/landscapingSoftware/pageShared'
import { HOME_SERVICES_PRICE_INFORMATION_SOURCE } from '~/core/constants/tradeWebsites/landscaper/pageShared'

export const LANDSCAPER_WEBSITE_PAGE_EN: DibodevTradeWebsitePageContent = {
  meta: {
    title: 'Website for landscapers in France: see yours in 2 minutes',
    description:
      'See your landscaper website under your name in 2 minutes: €290 paid once, domain and hosting included, online within 48 hours. Custom from €1,500.',
    inLanguage: 'en-US',
    serviceName: 'Website design for landscapers',
    serviceDescription:
      'Landscaper website on a template made for the trade, under your name, in your colour and with your photos, domain name and hosting included, or a custom website with online quote requests, for businesses in France.',
    serviceType: 'Website design for landscapers',
  },
  breadcrumbLabel: 'Landscaper',
  shareImage: {
    titleLines: ['Website for', 'landscapers in France'],
    highlight: 'landscapers',
    subtitle: 'See yours in 2 minutes, under your name',
    badge: '€290, paid once',
    alt: 'Website for landscapers in France: see yours in 2 minutes, €290 paid once',
  },
  hero: {
    titleBefore: 'Website for ',
    titleHighlight: 'landscapers',
    titleAfter: ' in France: see yours in 2 minutes',
    intro:
      'Your name, your town, your colour, your logo and the photos of your gardens: the website takes shape before your eyes as you answer. €290 paid once on a template, domain and hosting included, or custom-made from €1,500.',
    reassurances: ['2 minutes', 'No sign-up', 'Instant result'],
  },
  summary: {
    text: 'At Dibodev, a website for a landscaper in France costs €290, paid once, domain name and hosting included, on the Verdure template of this page, online within 48 hours. A custom website, with online quote requests and one page per town, starts at €1,500. Either way, your services, your service area and the legal notices required in France are planned for, with the tax credit box if you are registered for home services.',
    authorBio:
      'independent developer near Rennes, France. I build websites and software for tradespeople, and I designed the landscaper template above.',
  },
  atelier: {
    styleIntro: 'One template made for landscapers. Colours, photos and texts are yours.',
    templates: {
      'landscaper-verdure': {
        name: 'Verdure',
        description:
          'Cream background with soft mint halos, large forest-green headline, lime button and a wide garden photo.',
      },
    },
    mediaIntro:
      'A flowerbed, a patio, a neatly trimmed hedge: your own gardens beat any stock photo. Without photos, the website keeps those of the template.',
    serviceOptions: [
      { id: 'garden-design', label: 'Garden design and build', defaultSelected: true },
      { id: 'garden-maintenance', label: 'Upkeep and mowing', defaultSelected: true },
      { id: 'patios-paths', label: 'Patios and paths', defaultSelected: true },
      { id: 'hedge-trimming', label: 'Hedge trimming', defaultSelected: false },
      { id: 'tree-work', label: 'Tree surgery and felling', defaultSelected: false },
      { id: 'fences-gates', label: 'Fences and gates', defaultSelected: false },
      { id: 'irrigation', label: 'Automatic watering', defaultSelected: false },
    ],
    serviceDescription: 'Site visit and detailed quote before the work.',
    requestTitle: 'Your landscaper website, under your name',
  },
  examples: {
    title: 'An example of a landscaper website',
    imageAlt: 'Example of a landscaper website, {name} template',
  },
  contents: {
    eyebrow: 'What brings in quote requests',
    title: 'What a landscaper’s website should contain',
    intro:
      'Six things separate a website that makes people trust you with their garden from a simple business card online.',
    cards: [
      {
        icon: 'Camera',
        title: 'Your gardens in photos',
        description:
          'Before and after, season after season: people choose a landscaper from photos far more than from text.',
      },
      {
        icon: 'Sprout',
        title: 'Design and upkeep, kept apart',
        description:
          'One part to create or redo a garden, another for year-round upkeep: they are not the same customers.',
      },
      {
        icon: 'MapPin',
        title: 'The service area',
        description: 'The towns you cover, in black and white. Google reads them too.',
      },
      {
        icon: 'CalendarCheck',
        title: 'Maintenance contracts',
        description: 'Mowing, pruning, leaf clearing, number of visits a year: a clear package makes signing easy.',
      },
      {
        icon: 'Euro',
        title: 'The tax credit, if you qualify',
        description:
          'Registered for home services in France? Advertise the 50% tax credit on small gardening jobs, apart from the price and in smaller type.',
      },
      {
        icon: 'MessageCircle',
        title: 'Reviews and quote requests',
        description:
          'Your Google reviews and a form where customers describe their garden and plans: you arrive at the visit knowing what to offer.',
      },
    ],
  },
  rules: {
    eyebrow: 'What French law requires',
    title: 'Four rules for your website and your quotes in France',
    intro:
      'A landscaper website that advertises the tax credit without being registered, or promises chemical weeding at private homes, is not compliant. Here is what the French texts require, read on 2 November 2026.',
    facts: [
      {
        contextLabel: '50%, up to €5,000 a year',
        title: 'Your customers’ tax credit, if you are registered',
        text: 'Small gardening jobs at a private home (upkeep, hedge and tree trimming, clearing) give the customer a 50% tax credit, on up to €5,000 of spending a year, if your business is registered for home services (services à la personne).',
        sourceName: HOME_SERVICES_TAX_CREDIT_SOURCE.name,
        sourceUrl: HOME_SERVICES_TAX_CREDIT_SOURCE.url,
      },
      {
        contextLabel: 'Order of 17 March 2015',
        title: 'Services, prices and free quote, shown online',
        text: 'Small gardening jobs at private homes: the website lists your services and how each is provided, gives any price excl. and incl. VAT with its extra fees, keeps the tax credit apart in smaller type, and announces the free quote from €100 incl. VAT a month.',
        sourceName: HOME_SERVICES_PRICE_INFORMATION_SOURCE.name,
        sourceUrl: HOME_SERVICES_PRICE_INFORMATION_SOURCE.url,
      },
      {
        contextLabel: 'Since 1 July 2022',
        title: 'No more pesticides at private homes',
        text: 'Plant protection products are banned in private homes, gardens included, except biocontrol, low-risk or organic products. Where they are allowed, applying them for a customer generally requires a company approval (agrément) and the Certiphyto.',
        sourceName: PESTICIDE_BAN_SOURCE.name,
        sourceUrl: PESTICIDE_BAN_SOURCE.url,
      },
      {
        contextLabel: 'On the website itself',
        title: 'Legal notices and mediator',
        text: 'Name with the EI mention, address, phone, e-mail, registration number and website host; then the name, address and website of the consumer mediator your customers can turn to.',
        sourceName: CONSUMER_MEDIATION_SOURCE.name,
        sourceUrl: CONSUMER_MEDIATION_SOURCE.url,
      },
    ],
    footnote:
      'Sources: Service-Public.fr and servicesalapersonne.gouv.fr (tax credit, small gardening jobs), Légifrance (order of 17 March 2015, articles 2 to 6; order of 15 January 2021 and article 14-3 of the order of 4 May 2017; rural code, article L254-1), Entreprendre.Service-Public.fr (Certiphyto, mandatory notices on a business website, consumer mediation). Read on 2 November 2026.',
  },
  pricing: {
    intro:
      'A price known in advance for the template website, a free quote for the custom one. Either way, you own your website and your domain name.',
    templateOfferDescription:
      'The Verdure template, under your name and in your colour. Domain name and hosting included. Your texts and photos, or we write them together in 30 minutes. Editable from a simple editor.',
    customOfferDescription:
      'Unique design, quote requests with photos of the garden, one page per town for local search, and software behind the website for your maintenance contracts if you need it. Maintenance from €100 to €300 a month.',
  },
  resources: {
    title: 'Already on dibodev.fr for landscapers',
    toolCard: {
      icon: 'Laptop',
      label: 'Free test, 6 questions',
      title: 'Which software for your landscaping business?',
      description:
        'Quotes, maintenance contracts, invoices: the 2026 prices of the software on the French market, and when custom-made is worth it.',
    },
    freeTemplateCard: {
      icon: 'Download',
      label: 'Free template',
      title: 'Garden maintenance contract: Excel and PDF template',
      description: 'In French, with the landscaping quote, 10 or 20% VAT line by line and calculated totals.',
    },
  },
  faq: {
    title: 'Landscaper website in France: your questions',
    questions: [
      {
        question: 'How much does a website for a landscaper cost?',
        answer:
          '€290, paid once, for a template website, domain name and hosting included. A custom website, with online quote requests or one page per town, starts at €1,500. The website price barometer, which compares 20 French sources, gives the orders of magnitude of the market.',
      },
      {
        question: '€290, is that really everything?',
        answer:
          'Yes for going online: the website, your domain name and hosting. You provide your texts and photos, or we write them together during a 30-minute call.',
      },
      {
        question: 'Can I edit my website myself?',
        answer:
          'Yes. You change your texts, the photos of your jobs and your services from a simple editor, with nothing to install. I stay reachable if you get stuck.',
      },
      {
        question: 'How long until the website is online?',
        answer:
          '48 hours after I receive your texts and photos for a template website. Two to four weeks for a custom website.',
      },
      {
        question: 'Will my website show up on Google?',
        answer:
          'It is built for local search: service area written out clearly, each service described, Google Business profile linked. To target several towns, the custom option adds one page per town.',
      },
      {
        question: 'Can I see a real website before paying?',
        answer:
          'Yes, that is the idea of this page: you build your website in the workshop, then you receive a demo under your name within 24 working hours, before any decision.',
      },
      {
        question: 'Which mentions are mandatory on a landscaper’s website in France?',
        answer:
          'The legal notices (name, address, registration number, host) and the details of your consumer mediator. For small gardening jobs at private homes, add the list of your services and how they are provided, the set sentence on the free quote, and prices excl. and incl. VAT when you show them. I set them up with you before going online.',
      },
      {
        question: 'Can I advertise the 50% tax credit on my website?',
        answer:
          'Yes, if your business is registered for home services (services à la personne), and only for small gardening jobs at private homes: upkeep, mowing, hedge and tree trimming, clearing. Garden design and build, tree surgery and earthworks do not qualify. The mention sits apart from the price, in smaller type, and the Verdure template has a box for it.',
      },
    ],
  },
  contactCta: {
    title: 'Your landscaper website, ready to bring in quote requests',
    description:
      'One template made for the trade, a demo under your name within 24 working hours, and a price known in advance. If a template website is enough for you, I will tell you.',
  },
  mobileBarText: 'A landscaper website under your name, free to see',
}
