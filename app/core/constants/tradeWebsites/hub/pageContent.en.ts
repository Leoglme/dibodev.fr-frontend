import type { DibodevTradeWebsiteHubPageContent } from '~/core/types/DibodevTradeWebsiteHubPage'
import { TRADE_WEBSITES_HUB_CATALOG_ANCHOR_ID } from '~/core/constants/tradeWebsites/tradeWebsiteCatalog'

export const TRADE_WEBSITES_HUB_PAGE_EN: DibodevTradeWebsiteHubPageContent = {
  meta: {
    title: 'Websites by trade in France: your demo in 2 minutes',
    description:
      'Plumber, garage, restaurant, hair salon… See your website under your name in 2 minutes: €290 paid once, online within 48 hours, custom from €1,500.',
    inLanguage: 'en-US',
  },
  shareImage: {
    titleLines: ['Websites', 'by trade in France'],
    highlight: 'by trade',
    subtitle: 'See yours in 2 minutes, under your name',
    badge: '€290, paid once',
    alt: 'Websites by trade in France: see yours in 2 minutes, €290 paid once',
  },
  hero: {
    titlePart1: 'Websites ',
    titleHighlight1: 'by trade',
    titlePart2: ' in France: see yours in 2 minutes',
    description:
      'Pick your trade, then build your website in the workshop: your name, your town, your colours, your logo and your photos, on a real template. €290, paid once, domain name and hosting included, or custom-made from €1,500.',
    cta: 'Choose my trade',
    reassurances: ['No sign-up', 'Demo under your name within 24 working hours', 'Prices known in advance'],
    tradesCountLabel: 'trades',
    templatesCountLabel: 'website templates',
    priceValue: '€290',
    priceLabel: 'paid once',
  },
  catalog: {
    anchorId: TRADE_WEBSITES_HUB_CATALOG_ANCHOR_ID,
    eyebrow: 'Choose your trade',
    title: 'Eight trades, eleven templates',
    intro:
      'Each page has its workshop: the website takes shape before your eyes on the template of your trade, with the rules it must show in France.',
    cards: [
      {
        key: 'plumber',
        title: 'Website for plumbers',
        description: 'Emergencies, call-out prices, service area: three templates that make the phone ring.',
      },
      {
        key: 'electrician',
        title: 'Website for electricians',
        description: 'Call-outs, upgrades, charging points: two templates, light or electric night.',
      },
      {
        key: 'garage',
        title: 'Website for auto repair shops',
        description: 'Servicing, repairs, appointments: one dark, workshop-style template.',
      },
      {
        key: 'landscaper',
        title: 'Website for landscapers',
        description: 'Garden maintenance, creations, tax credit: one green and bright template.',
      },
      {
        key: 'carpenter',
        title: 'Website for carpenters',
        description: 'Windows, stairs, fittings: one editorial template that shows off your work.',
      },
      {
        key: 'restaurant',
        title: 'Website for restaurants',
        description: 'Menu, opening hours, bookings: one warm template that brings people to the table.',
      },
      {
        key: 'hairSalon',
        title: 'Website for hair salons',
        description: 'Services, prices, appointments: one elegant template for salons and barbers.',
      },
      {
        key: 'dentist',
        title: 'Website for dentists',
        description: 'Treatments, team, access and appointments: one sober, reassuring template for a practice.',
      },
    ],
    stylesCountOne: '1 template',
    stylesCountMany: '{count} templates',
    linkLabel: 'Build my website',
    otherTrade: {
      title: 'Another trade?',
      description:
        'Locksmith, heating engineer, shop, building trade: the Édito template suits every trade, or I build your website from scratch.',
      linkLabel: 'Let’s talk about your website',
    },
  },
  pricing: {
    intro:
      'A price known in advance for the template website, a free quote for the custom one. Either way, you own your website and your domain name.',
    templateOfferDescription:
      'The template of your trade, under your name and in your colour. Domain name and hosting included. Your texts and photos, or we write them together in 30 minutes. Editable from a simple editor.',
    customOfferDescription:
      'Unique design, online booking or quotes linked to your calendar, one page per town for local search, and software behind the website if you need it. Maintenance from €100 to €300 a month.',
  },
  faq: {
    title: 'Websites by trade in France: your questions',
    questions: [
      {
        question: 'How much does a website for a tradesperson or a shop cost?',
        answer:
          '€290, paid once, for a template website, domain name and hosting included, online within 48 hours. A custom website, with online booking or quotes, starts at €1,500. The website price barometer compares 20 French sources.',
      },
      {
        question: 'Why one template per trade?',
        answer:
          'Because customers do not look for the same thing from a plumber and from a hair salon: one wants a number to call right away, the other prices and an appointment. Each template puts forward what makes people call or book in that trade.',
      },
      {
        question: 'How can I see my website before paying?',
        answer:
          'Open the page of your trade and build your website in the workshop, in 2 minutes. Then leave your e-mail: you receive a demo under your name within 24 working hours, free and with no commitment.',
      },
      {
        question: '€290, is that really everything?',
        answer:
          'Yes for going online: the website, your domain name and hosting. You provide your texts and photos, or we write them together during a 30-minute call.',
      },
      {
        question: 'Can I edit my website myself?',
        answer:
          'Yes. You change your texts, photos and prices from a simple editor, with nothing to install. I stay reachable if you get stuck.',
      },
      {
        question: 'My trade is not listed, what can I do?',
        answer:
          'Write to me. The Édito template suits every trade, and a custom website starts from your business. The first call is free.',
      },
    ],
  },
  contactCta: {
    title: 'Your trade is not listed?',
    description:
      'Tell me what you do and for whom: I will tell you which website you need, and what it costs, before any commitment.',
    button: 'Talk about my website',
  },
}
