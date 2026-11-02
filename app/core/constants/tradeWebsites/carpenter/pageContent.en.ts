import type { DibodevTradeWebsitePageContent } from '~/core/types/DibodevTradeWebsitePage'
import { CONSUMER_MEDIATION_SOURCE, HOME_REPAIR_PRICE_DISPLAY_SOURCE } from '~/core/constants/tools/officialSources'
import { DECENNIAL_INSURANCE_SOURCE } from '~/core/constants/tools/plumbingHeatingSoftware/pageShared'
import { RGE_LABEL_CLIENT_INFORMATION_SOURCE } from '~/core/constants/tradeWebsites/carpenter/pageShared'

export const CARPENTER_WEBSITE_PAGE_EN: DibodevTradeWebsitePageContent = {
  meta: {
    title: 'Website for carpenters in France: see yours in 2 minutes',
    description:
      'See your carpentry website under your name in 2 minutes: €290 paid once, domain and hosting included, online within 48 hours. Custom from €1,500.',
    inLanguage: 'en-US',
    serviceName: 'Website design for carpenters and joiners',
    serviceDescription:
      'Carpentry and joinery website on the Édito template, under your name, in your colour and with photos of your work, domain name and hosting included, or a custom website with a project gallery and online quote requests, for businesses in France.',
    serviceType: 'Website design for carpenters',
  },
  breadcrumbLabel: 'Carpenter and joiner',
  shareImage: {
    titleLines: ['Website for', 'carpenters in France'],
    highlight: 'carpenters',
    subtitle: 'See yours in 2 minutes, under your name',
    badge: '€290, paid once',
    alt: 'Website for carpenters in France: see yours in 2 minutes, €290 paid once',
  },
  hero: {
    titleBefore: 'Website for ',
    titleHighlight: 'carpenters',
    titleAfter: ' in France: see yours in 2 minutes',
    intro:
      'Your name, your town, your colour, your logo and your finished work: the website takes shape before your eyes as you answer. €290 paid once on a template, domain and hosting included, or custom-made from €1,500.',
    reassurances: ['2 minutes', 'No sign-up', 'Instant result'],
  },
  summary: {
    text: 'At Dibodev, a website for a carpenter, joiner or window fitter in France costs €290, paid once, domain name and hosting included, on the Édito template on this page, online within 48 hours. A custom website, with a project gallery by type of work and online quote requests, starts at €1,500. Either way, the gallery of your work, the area where you fit, your ten-year liability insurance and the legal notices required in France are planned for.',
    authorBio:
      'independent developer near Rennes, France. I build websites and software for tradespeople, and I designed the Édito template above.',
  },
  atelier: {
    styleIntro:
      'A clean, magazine-style template that puts your work centre stage. Colours, photos and texts are yours.',
    templates: {
      'artisan-edito': {
        name: 'Édito',
        description:
          'Cream paper, large type and a touch of amber, your name as the headline and a box with area, phone and quote: the look of a magazine.',
      },
    },
    mediaIntro:
      'A fitted kitchen, a staircase, a window: your finished work beats any stock photo. Without photos, the website keeps those of the template.',
    serviceOptions: [
      { id: 'custom-joinery', label: 'Bespoke joinery', defaultSelected: true },
      { id: 'windows-doors', label: 'Windows and doors', defaultSelected: true },
      { id: 'staircases', label: 'Staircases', defaultSelected: true },
      { id: 'fitted-wardrobes', label: 'Wardrobes and dressing rooms', defaultSelected: false },
      { id: 'kitchens', label: 'Kitchens', defaultSelected: false },
      { id: 'shutters-gates', label: 'Shutters and gates', defaultSelected: false },
      { id: 'flooring-decking', label: 'Flooring and decking', defaultSelected: false },
    ],
    serviceDescription: 'Measured on site, free quote.',
    requestTitle: 'Your carpentry website, under your name',
  },
  contents: {
    eyebrow: 'What brings in quote requests',
    title: 'What a carpenter’s website should contain',
    intro: 'Six things separate a website that makes people trust you with a job from a simple business card online.',
    cards: [
      {
        icon: 'Image',
        title: 'Your work and your reviews',
        description:
          'Kitchens, staircases, wardrobes, fitted windows: your finished work in photos, sorted by type, with your Google reviews alongside. It is the first thing a customer looks at.',
      },
      {
        icon: 'Armchair',
        title: 'Every skill named',
        description:
          'Made-to-measure work, window fitting, fitted furniture, staircases: each service written out clearly, with the woods and materials you work with. Google reads them too.',
      },
      {
        icon: 'ClipboardCheck',
        title: 'A quote request that prepares the measuring',
        description:
          'Type of work, rough dimensions, photos of the room, town: you arrive at the customer’s home with the essentials.',
      },
      {
        icon: 'MapPin',
        title: 'The workshop and the fitting area',
        description: 'The workshop address, visiting hours and the towns where you fit, in black and white.',
      },
      {
        icon: 'ShieldCheck',
        title: 'Insurance and labels',
        description:
          'Ten-year liability insurance, the French RGE label for windows and front doors: what customers check before signing, and what their aid depends on.',
      },
      {
        icon: 'CalendarCheck',
        title: 'Lead times, stated upfront',
        description:
          'Making time at the workshop, fitting time, busy periods: the customer plans the work and calls you at the right moment.',
      },
    ],
  },
  rules: {
    eyebrow: 'What French law requires',
    title: 'Four rules for your website and your quotes in France',
    intro:
      'Call-out prices, ten-year liability insurance, RGE label, legal notices: what must appear on your website, your quotes and your contracts. Here is what the French texts require, read on 2 November 2026.',
    facts: [
      {
        contextLabel: 'Order of 24 January 2017',
        title: 'Prices online, a quote before the work',
        text: 'Joinery, locksmithing, glazing, garage doors: for a call-out, a repair or servicing, your hourly rate incl. VAT, flat rates and travel costs are easy to find on your website, and a detailed quote comes before the work, however small.',
        sourceName: HOME_REPAIR_PRICE_DISPLAY_SOURCE.name,
        sourceUrl: HOME_REPAIR_PRICE_DISPLAY_SOURCE.url,
      },
      {
        contextLabel: 'With every quote and invoice',
        title: 'The ten-year liability insurance certificate',
        text: 'For fitting windows and doors, whose frames fall under the ten-year guarantee, the certificate of your insurance (garantie décennale) goes with your quotes and invoices. Mentioning it on the website reassures before the first call.',
        sourceName: DECENNIAL_INSURANCE_SOURCE.name,
        sourceUrl: DECENNIAL_INSURANCE_SOURCE.url,
      },
      {
        contextLabel: 'Since 2 July 2025',
        title: 'RGE label: say it before signing',
        text: 'Windows, insulating shutters, front doors: before signing, you state in writing whether you hold the RGE label for this work, with proof, or what its absence changes for the customer’s aid, such as the zero-rate eco-loan. Failing that, the contract is void.',
        sourceName: RGE_LABEL_CLIENT_INFORMATION_SOURCE.name,
        sourceUrl: RGE_LABEL_CLIENT_INFORMATION_SOURCE.url,
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
      'Sources: Légifrance (order of 24 January 2017, articles 1 to 4 and annex 1; French Consumer Code, article L224-114), Entreprendre.Service-Public.fr (ten-year liability insurance, RGE label, mandatory notices on a business website, consumer mediation), Service-Public.fr (zero-rate eco-loan). Read on 2 November 2026.',
  },
  pricing: {
    intro:
      'A price known in advance for the template website, a free quote for the custom one. Either way, you own your website and your domain name.',
    templateOfferDescription:
      'The Édito template, under your name and in your colour. Domain name and hosting included. Your texts and photos of your work, or we write them together in 30 minutes. Editable from a simple editor.',
    customOfferDescription:
      'Unique design, a project gallery by type of work, quote requests with dimensions and photos, one page per town for local search, and software behind the website if you need it. Maintenance from €100 to €300 a month.',
  },
  resources: {
    title: 'Already on dibodev.fr for carpenters',
    toolCard: {
      icon: 'Hammer',
      label: 'Free test, 6 questions',
      title: 'Which software for your joinery business?',
      description:
        'Measured quotes, cutting lists, workshop and fitting schedule: the 2026 prices of the software on the French market, and when custom-made is worth it.',
    },
    freeTemplateCard: {
      icon: 'FileSpreadsheet',
      label: 'Free template',
      title: 'Joinery cutting list: free French Excel template',
      description:
        'Plus a quote with measurements, a cutting plan and a handover report, material cost and totals calculated.',
    },
  },
  faq: {
    title: 'Carpenter website in France: your questions',
    questions: [
      {
        question: 'How much does a website for a carpenter cost?',
        answer:
          '€290, paid once, for a template website, domain name and hosting included. A custom website, with a project gallery and online quote requests, starts at €1,500. The website price barometer, which compares 20 French sources, gives the orders of magnitude of the market.',
      },
      {
        question: '€290, is that really everything?',
        answer:
          'Yes for going online: the website, your domain name and hosting. You provide your texts and photos, or we write them together during a 30-minute call.',
      },
      {
        question: 'Can I edit my website myself?',
        answer:
          'Yes. You add your latest jobs and change your texts and photos from a simple editor, with nothing to install. I stay reachable if you get stuck.',
      },
      {
        question: 'How long until the website is online?',
        answer:
          '48 hours after I receive your texts and photos for a template website. Two to four weeks for a custom website.',
      },
      {
        question: 'Will my website show up on Google?',
        answer:
          'It is built for local search: the area where you fit written out clearly, each service named, Google Business profile linked. To target several towns, the custom option adds one page per town.',
      },
      {
        question: 'Can I see a real website before paying?',
        answer:
          'Yes, that is the idea of this page: you build your website in the workshop, then you receive a demo under your name within 24 working hours, before any decision.',
      },
      {
        question: 'Which mentions are mandatory on a carpenter’s website in France?',
        answer:
          'Your call-out and repair prices (hourly rate incl. VAT, travel costs, flat rates, free or paid quote), the legal notices (name, address, registration number, host) and the details of your consumer mediator. Your ten-year liability insurance and, if you have it, your RGE label reassure too. I set it all up with you before going online.',
      },
      {
        question: 'Do I have to show my prices when everything is made to measure?',
        answer:
          'For made-to-measure work, the price comes from the quote, after measuring. The French order of 24 January 2017 covers call-outs, repairs and servicing at a private home: for those, your hourly rate incl. VAT, flat rates and travel costs must be easy to find on the website.',
      },
    ],
  },
  contactCta: {
    title: 'Your carpentry website, ready to bring in quote requests',
    description:
      'The Édito template, a demo under your name within 24 working hours, and a price known in advance. If a template website is enough for you, I will tell you.',
  },
  mobileBarText: 'A carpentry website under your name, free to see',
}
