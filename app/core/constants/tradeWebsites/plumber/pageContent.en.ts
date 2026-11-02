import type { DibodevTradeWebsitePageContent } from '~/core/types/DibodevTradeWebsitePage'
import {
  CONSUMER_MEDIATION_SOURCE,
  HOME_REPAIR_PRICE_DISPLAY_SOURCE,
  HOME_REPAIR_QUOTE_RULES_SOURCE,
} from '~/core/constants/tools/officialSources'
import { DECENNIAL_INSURANCE_SOURCE } from '~/core/constants/tools/plumbingHeatingSoftware/pageShared'

export const PLUMBER_WEBSITE_PAGE_EN: DibodevTradeWebsitePageContent = {
  meta: {
    title: 'Website for plumbers in France: see yours in 2 minutes',
    description:
      'See your plumber website under your name in 2 minutes: €290 paid once, domain and hosting included, online within 48 hours. Custom from €1,500.',
    inLanguage: 'en-US',
    serviceName: 'Website design for plumbers and heating engineers',
    serviceDescription:
      'Plumber website on one of three templates, under your name, in your colour and with your photos, domain name and hosting included, or a custom website with online booking and quotes, for businesses in France.',
    serviceType: 'Website design for plumbers',
  },
  breadcrumbLabel: 'Plumber and heating engineer',
  shareImage: {
    titleLines: ['Website for', 'plumbers in France'],
    highlight: 'plumbers',
    subtitle: 'See yours in 2 minutes, under your name',
    badge: '€290, paid once',
    alt: 'Website for plumbers in France: see yours in 2 minutes, €290 paid once',
  },
  hero: {
    titleBefore: 'Website for ',
    titleHighlight: 'plumbers',
    titleAfter: ' in France: see yours in 2 minutes',
    intro:
      'Your name, your town, your colour, your logo and your photos: the website takes shape before your eyes as you answer. €290 paid once on a template, domain and hosting included, or custom-made from €1,500.',
    reassurances: ['2 minutes', 'No sign-up', 'Instant result'],
  },
  summary: {
    text: 'At Dibodev, a website for a plumber or heating engineer in France costs €290, paid once, domain name and hosting included, on one of the three templates on this page, online within 48 hours. A custom website, with online booking or quotes, starts at €1,500. Either way, I set up with you the call-out prices, the service area and the legal notices required in France.',
    authorBio:
      'independent developer near Rennes, France. I build websites and software for tradespeople, and I designed the three plumber templates above.',
  },
  atelier: {
    styleIntro: 'Three templates made for plumbers. Everything stays editable afterwards.',
    templates: {
      'plumber-signature': {
        name: 'Signature',
        description: 'Emergency banner at the top, big call button, project gallery with before and after.',
      },
      'plumber-atelier': {
        name: 'Atelier',
        description: 'Warm paper and fine typography, call-out sheet up front: the style of an established tradesman.',
      },
      'plumber-cuivre': {
        name: 'Source',
        description:
          'Water blue and white, your name in large letters, emergency box: clear and reassuring, even without photos.',
      },
    },
    mediaIntro:
      'Your before-and-after jobs beat any stock photo. Without photos, the website keeps those of the template.',
    serviceOptions: [
      { id: 'leaks', label: 'Call-outs and leaks', defaultSelected: true },
      { id: 'heating', label: 'Boilers and heating', defaultSelected: true },
      { id: 'bathroom', label: 'Bathrooms', defaultSelected: true },
      { id: 'heat-pump', label: 'Heat pumps', defaultSelected: false },
      { id: 'unblocking', label: 'Drain unblocking', defaultSelected: false },
      { id: 'boiler-servicing', label: 'Annual servicing', defaultSelected: false },
      { id: 'water-softener', label: 'Water softeners', defaultSelected: false },
    ],
    serviceDescription: 'Free quote, prices given before the job.',
    requestTitle: 'Your plumber website, under your name',
  },
  contents: {
    eyebrow: 'What makes people call',
    title: 'What a plumber’s website should contain',
    intro: 'Six things separate a reassuring website from a simple business card online.',
    cards: [
      {
        icon: 'Phone',
        title: 'One tap to call',
        description: 'A call button visible on every phone screen, at the top, without searching.',
      },
      {
        icon: 'MapPin',
        title: 'The service area',
        description: 'The towns you cover, in black and white. Google reads them too.',
      },
      {
        icon: 'Flame',
        title: 'Emergencies first',
        description: 'Leaks, broken boilers, blocked toilets: the three pages people look for at 10 pm.',
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
          'PG, RGE, ten-year liability insurance: the French labels that matter for a gas installation or a heat pump.',
      },
      {
        icon: 'Camera',
        title: 'Photos, reviews and quote requests',
        description:
          'Your before-and-after jobs, your Google reviews and a quote request form: the customer writes at 10 pm, you call back in the morning.',
      },
    ],
  },
  rules: {
    eyebrow: 'What French law requires',
    title: 'Four rules for your website and your quotes in France',
    intro:
      'A call-out website that does not show its prices is not compliant, and it reassures less. Here is what the French texts require, read on 2 November 2026.',
    facts: [
      {
        contextLabel: 'Order of 24 January 2017',
        title: 'Your prices, easy to find online',
        text: 'Hourly rate incl. VAT, how time is counted, flat-rate prices, travel costs, free or paid quote: posted at your premises, they must also be easy to find on your website.',
        sourceName: HOME_REPAIR_PRICE_DISPLAY_SOURCE.name,
        sourceUrl: HOME_REPAIR_PRICE_DISPLAY_SOURCE.url,
      },
      {
        contextLabel: 'Since 1 April 2017',
        title: 'A detailed quote before any job',
        text: 'Whatever the amount: the €150 threshold that exempted small call-outs is gone. The quote details the work, the hourly rate, the travel costs and how long it is valid.',
        sourceName: HOME_REPAIR_QUOTE_RULES_SOURCE.name,
        sourceUrl: HOME_REPAIR_QUOTE_RULES_SOURCE.url,
      },
      {
        contextLabel: 'With every quote and invoice',
        title: 'The ten-year liability insurance certificate',
        text: 'The certificate of your ten-year liability insurance (garantie décennale) goes with your quotes and invoices. Mentioning it on the website reassures before the first call.',
        sourceName: DECENNIAL_INSURANCE_SOURCE.name,
        sourceUrl: DECENNIAL_INSURANCE_SOURCE.url,
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
      'Sources: Légifrance (order of 24 January 2017, articles 2 to 4), French National Consumer Institute (INC), Entreprendre.Service-Public.fr (ten-year liability insurance, mandatory notices on a business website, consumer mediation). Read on 2 November 2026.',
  },
  pricing: {
    intro:
      'A price known in advance for the template website, a free quote for the custom one. Either way, you own your website and your domain name.',
    templateOfferDescription:
      'One of the three templates, under your name and in your colour. Domain name and hosting included. Your texts and photos, or we write them together in 30 minutes. Editable from a simple editor.',
    customOfferDescription:
      'Unique design, online booking or quotes linked to your calendar, one page per town for local search, and software behind the website if you need it. Maintenance from €100 to €300 a month.',
  },
  resources: {
    title: 'Already on dibodev.fr for plumbers',
    toolCard: {
      icon: 'Flame',
      label: 'Free test, 6 questions',
      title: 'Which software for a plumber and heating engineer?',
      description:
        'Quotes, call-outs, maintenance contracts: the 2026 prices of the software on the French market, and when custom-made is worth it.',
    },
    freeTemplateCard: {
      icon: 'Download',
      label: 'Free template',
      title: 'Plumber quote: Excel and PDF template',
      description: 'With the intervention slip, the mandatory French mentions and calculated totals.',
    },
  },
  faq: {
    title: 'Plumber website in France: your questions',
    questions: [
      {
        question: 'How much does a website for a plumber cost?',
        answer:
          '€290, paid once, for a template website, domain name and hosting included. A custom website, with online booking or quotes, starts at €1,500. The website price barometer, which compares 20 French sources, gives the orders of magnitude of the market.',
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
          'It is built for local search: service area written out clearly, each service named, Google Business profile linked. To target several towns, the custom option adds one page per town.',
      },
      {
        question: 'Can I see a real website before paying?',
        answer:
          'Yes, that is the idea of this page: you build your website in the workshop, then you receive a demo under your name within 24 working hours, before any decision.',
      },
      {
        question: 'Which mentions are mandatory on a plumber’s website in France?',
        answer:
          'Your prices (hourly rate incl. VAT, travel costs, flat rates, free or paid quote), the legal notices (name, address, registration number, host) and the details of your consumer mediator. I set them up with you before going online.',
      },
      {
        question: 'What if I have neither a logo nor photos?',
        answer:
          'No problem: without a logo, your name is shown as the title, and the website keeps the photos of the template until you send yours. Photos of your real jobs reassure more, even taken with a phone.',
      },
    ],
  },
  contactCta: {
    title: 'Your plumber website, ready to make the phone ring',
    description:
      'Three templates, a demo under your name within 24 working hours, and a price known in advance. If a template website is enough for you, I will tell you.',
  },
  mobileBarText: 'A plumber website under your name, free to see',
}
