import type { DibodevTradeWebsitePageContent } from '~/core/types/DibodevTradeWebsitePage'
import { CONSUMER_MEDIATION_SOURCE, HOME_REPAIR_PRICE_DISPLAY_SOURCE } from '~/core/constants/tools/officialSources'
import { DECENNIAL_INSURANCE_SOURCE } from '~/core/constants/tools/plumbingHeatingSoftware/pageShared'
import { CHARGING_POINT_INSTALLER_QUALIFICATION_SOURCE } from '~/core/constants/tradeWebsites/electrician/pageShared'

export const ELECTRICIAN_WEBSITE_PAGE_EN: DibodevTradeWebsitePageContent = {
  meta: {
    title: 'Website for electricians in France: see yours in 2 minutes',
    description:
      'See your electrician website under your name in 2 minutes: €290 paid once, domain and hosting included, online within 48 hours. Custom from €1,500.',
    inLanguage: 'en-US',
    serviceName: 'Website design for electricians',
    serviceDescription:
      'Electrician website on one of two templates, under your name, in your colour and with your photos, domain name and hosting included, or a custom website with online call-out and quote requests, for businesses in France.',
    serviceType: 'Website design for electricians',
  },
  breadcrumbLabel: 'Electrician',
  shareImage: {
    titleLines: ['Website for', 'electricians in France'],
    highlight: 'electricians',
    subtitle: 'See yours in 2 minutes, under your name',
    badge: '€290, paid once',
    alt: 'Website for electricians in France: see yours in 2 minutes, €290 paid once',
  },
  hero: {
    titleBefore: 'Website for ',
    titleHighlight: 'electricians',
    titleAfter: ' in France: see yours in 2 minutes',
    intro:
      'Your name, your town, your colour, your logo and your job photos: your electrician website takes shape before your eyes as you answer. €290 paid once on a template, domain and hosting included, or custom-made from €1,500.',
    reassurances: ['2 minutes', 'No sign-up', 'Instant result'],
  },
  summary: {
    text: 'At Dibodev, a website for an electrician in France costs €290, paid once, domain name and hosting included, on one of the two templates on this page, online within 48 hours. A custom website, with online call-out or quote requests, starts at €1,500. Either way, the call button for emergencies, your prices, your service area, your qualifications and the legal notices required in France are planned for.',
    authorBio:
      'independent developer near Rennes, France. I build websites and software for tradespeople, and I designed the two electrician templates above.',
  },
  atelier: {
    styleIntro: 'Two templates made for electricians. Everything stays editable afterwards.',
    templates: {
      'electrician-eclat': {
        name: 'Éclat',
        description:
          'Clean and sober: white background, night-blue buttons, your town in colour in the title and your Google rating in view.',
      },
      'electrician-lumen': {
        name: 'Lumen',
        description:
          'Night background and high-visibility yellow, big call button, 7-day call-outs and up-to-standard installations in a band.',
      },
    },
    mediaIntro:
      'Your rewired panels and your jobs beat any stock photo. Without photos, the website keeps those of the template.',
    serviceOptions: [
      { id: 'troubleshooting', label: 'Electrical call-outs', defaultSelected: true },
      { id: 'compliance-upgrade', label: 'Upgrades to standard', defaultSelected: true },
      { id: 'electrical-panel', label: 'Electrical panels', defaultSelected: true },
      { id: 'make-safe', label: 'Making safe', defaultSelected: false },
      { id: 'rewiring', label: 'Rewiring', defaultSelected: false },
      { id: 'ev-charging', label: 'EV charging points', defaultSelected: false },
      { id: 'lighting', label: 'Lighting and home automation', defaultSelected: false },
    ],
    serviceDescription: 'Free quote, installation to French standard NF C 15-100.',
    requestTitle: 'Your electrician website, under your name',
  },
  examples: {
    title: 'Two examples of electrician websites',
    imageAlt: 'Example of an electrician website, {name} template',
  },
  contents: {
    eyebrow: 'What makes people call',
    title: 'What an electrician’s website should contain',
    intro: 'Six things separate a reassuring website from a simple business card online.',
    cards: [
      {
        icon: 'Phone',
        title: 'One tap to call',
        description:
          'A power cut gets reported from a phone, sometimes by torchlight: the call button stays at the top of every screen.',
      },
      {
        icon: 'MapPin',
        title: 'The service area',
        description: 'The towns you cover, in black and white. Google reads them too.',
      },
      {
        icon: 'AlertCircle',
        title: 'Call-outs first',
        description:
          'Tripping breaker, power cut, overheating socket: the pages people look for in the evening and at weekends.',
      },
      {
        icon: 'Euro',
        title: 'Call-out prices',
        description: 'Hourly rate, travel costs, flat rates: mandatory in France, and reassuring when they are shown.',
      },
      {
        icon: 'ShieldCheck',
        title: 'Qualifications and insurance',
        description:
          'Qualifelec, IRVE for charging points, ten-year liability insurance: the French credentials that reassure before someone trusts you with a panel or a charging point.',
      },
      {
        icon: 'Camera',
        title: 'Photos, reviews and quote requests',
        description:
          'Your panels before and after, your Google reviews and a quote request form: the customer writes in the evening, you call back in the morning.',
      },
    ],
  },
  rules: {
    eyebrow: 'What French law requires',
    title: 'Four rules to know before your website goes live in France',
    intro:
      'A call-out website that does not show its prices is not compliant, and it reassures less. Here is what the French texts require from an electrician, read on 2 November 2026.',
    facts: [
      {
        contextLabel: 'Order of 24 January 2017',
        title: 'Your prices online, a quote before every call-out',
        text: 'Hourly rate incl. VAT, how time is counted, flat rates, travel costs, free or paid quote: easy to find on your website. Before any call-out, repair or servicing at a private customer’s home, a detailed quote is handed over, whatever the amount.',
        sourceName: HOME_REPAIR_PRICE_DISPLAY_SOURCE.name,
        sourceUrl: HOME_REPAIR_PRICE_DISPLAY_SOURCE.url,
      },
      {
        contextLabel: 'With every quote and invoice',
        title: 'The ten-year liability insurance certificate',
        text: 'Built-in electrical wiring falls under the ten-year liability guarantee (garantie décennale). Your insurance certificate goes with your quotes and invoices, and mentioning it on the website reassures before the first call.',
        sourceName: DECENNIAL_INSURANCE_SOURCE.name,
        sourceUrl: DECENNIAL_INSURANCE_SOURCE.url,
      },
      {
        contextLabel: 'French energy code, article D353-2',
        title: 'A qualification to install charging points',
        text: 'Except for points of 3.7 kW or less in a private home, EV charging points are installed by a professional holding a qualification from an approved body (IRVE). If your website offers charging points, show that qualification.',
        sourceName: CHARGING_POINT_INSTALLER_QUALIFICATION_SOURCE.name,
        sourceUrl: CHARGING_POINT_INSTALLER_QUALIFICATION_SOURCE.url,
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
      'Sources: Légifrance (order of 24 January 2017, articles 2 to 4 and annex 1, which lists electrical work; French energy code, article D353-2, in force since 1 July 2024), Entreprendre.Service-Public.fr (ten-year liability insurance, mandatory notices on a business website, consumer mediation). Read on 2 November 2026.',
  },
  pricing: {
    intro:
      'A price known in advance for the template website, a free quote for the custom one. Either way, you own your website and your domain name.',
    templateOfferDescription:
      'One of the two templates, under your name and in your colour. Domain name and hosting included. Your texts and photos, or we write them together in 30 minutes. Editable from a simple editor.',
    customOfferDescription:
      'Unique design, online call-out or quote requests linked to your calendar, one page per town for local search, and software behind the website if you need it. Maintenance from €100 to €300 a month.',
  },
  resources: {
    title: 'Already on dibodev.fr for electricians',
    toolCard: {
      icon: 'Zap',
      label: 'Free test, 6 questions',
      title: 'Which software for an electrician?',
      description:
        'Quotes, jobs, Consuel certificates: the 2026 prices of the software on the French market, and when custom-made is worth it.',
    },
    freeTemplateCard: {
      icon: 'Download',
      label: 'Free template',
      title: 'Electrician commissioning report: Excel and PDF template',
      description: 'With the quote, the panel and earthing checks, and the follow-up of the Consuel certificate.',
    },
  },
  faq: {
    title: 'Electrician website in France: your questions',
    questions: [
      {
        question: 'How much does a website for an electrician cost?',
        answer:
          '€290, paid once, for a template website, domain name and hosting included. A custom website, with online call-out or quote requests, starts at €1,500. The website price barometer, which compares 20 French sources, gives the orders of magnitude of the market.',
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
        question: 'How long until the website is online?',
        answer:
          '48 hours after I receive your texts and photos for a template website. Two to four weeks for a custom website.',
      },
      {
        question: 'Will my website show up on Google?',
        answer:
          'It is built for local search: service area written out clearly, services named the way your customers search for them, Google Business profile linked. To target several towns, the custom option adds one page per town.',
      },
      {
        question: 'Can I see a real website before paying?',
        answer:
          'Yes, that is the idea of this page: you build your website in the workshop, then you receive a demo under your name within 24 working hours, before any decision.',
      },
      {
        question: 'Which mentions are mandatory on an electrician’s website in France?',
        answer:
          'Your prices (hourly rate incl. VAT, travel costs, flat rates, free or paid quote), the legal notices (name, address, registration number, host) and the details of your consumer mediator. I set them up with you before going online, along with your qualifications and your ten-year liability insurance.',
      },
      {
        question: 'Can my website highlight 7-day call-outs?',
        answer:
          'Yes: the call button stays at the top of every screen, and your call-out days and hours are written out clearly. The Lumen template shows them on the very first screen. If you do not work weekends, we write that too: you avoid calls you cannot take.',
      },
    ],
  },
  contactCta: {
    title: 'Your electrician website, ready to make the phone ring',
    description:
      'Two templates, a demo under your name within 24 working hours, and a price known in advance. If a template website is enough for you, I will tell you.',
  },
  mobileBarText: 'Electrician website under your name, free to see',
}
