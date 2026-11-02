import type { DibodevTradeWebsitePageContent } from '~/core/types/DibodevTradeWebsitePage'
import { GARAGE_PRICE_DISPLAY_SOURCE } from '~/core/constants/tradeWebsites/garage/pageShared'
import { AUTO_REPAIR_RULES_SOURCE } from '~/core/constants/tools/autoRepairShopSoftware/pageShared'
import { CIRCULAR_ECONOMY_PARTS_SOURCE } from '~/core/constants/tools/bodyShopSoftware/pageShared'
import { CONSUMER_MEDIATION_SOURCE } from '~/core/constants/tools/officialSources'

export const GARAGE_WEBSITE_PAGE_EN: DibodevTradeWebsitePageContent = {
  meta: {
    title: 'Auto repair shop website in France: see yours in 2 minutes',
    description:
      'See your auto repair shop website under your name in 2 minutes: €290 paid once, domain and hosting included, online within 48 hours. Custom from €1,500.',
    inLanguage: 'en-US',
    serviceName: 'Website design for auto repair shops',
    serviceDescription:
      'Auto repair shop website on a template designed for garages, under your name, in your colour and with your photos, domain name and hosting included, or a custom website with online booking and quotes, for businesses in France.',
    serviceType: 'Website design for auto repair shops',
  },
  breadcrumbLabel: 'Auto repair shop',
  shareImage: {
    titleLines: ['Website for', 'auto repair shops'],
    highlight: 'auto repair shops',
    subtitle: 'In France: see yours in 2 minutes, under your name',
    badge: '€290, paid once',
    alt: 'Website for auto repair shops in France: see yours in 2 minutes, €290 paid once',
  },
  hero: {
    titleBefore: 'Website for ',
    titleHighlight: 'auto repair shops',
    titleAfter: ' in France: see yours in 2 minutes',
    intro:
      'Your garage’s name, your town, your colour, your logo and your photos: the website takes shape before your eyes as you answer. €290 paid once on a template, domain and hosting included, or custom-made from €1,500.',
    reassurances: ['2 minutes', 'No sign-up', 'Instant result'],
  },
  summary: {
    text: 'At Dibodev, a website for an auto repair shop or an independent mechanic in France costs €290, paid once, domain name and hosting included, on the template of this page, online within 48 hours. A custom website, with online booking linked to your calendar or online quotes, starts at €1,500. Either way, appointment requests, your prices, the information on circular economy parts and the legal notices required in France are planned for.',
    authorBio:
      'independent developer near Rennes, France. I build websites and software for tradespeople, and I designed the garage template above.',
  },
  atelier: {
    styleIntro: 'A template designed for auto repair shops. Colours, photos and texts are yours.',
    templates: {
      'mechanic-pitlane': {
        name: 'Pitlane',
        description: 'Asphalt black and racing red, a large photo, call and booking buttons at the top of the page.',
      },
    },
    mediaIntro:
      'A photo of your workshop and your team reassures more than any stock photo. Without photos, the website keeps those of the template.',
    serviceOptions: [
      { id: 'servicing', label: 'Servicing and maintenance', defaultSelected: true },
      { id: 'diagnostics', label: 'Electronic diagnostics', defaultSelected: true },
      { id: 'brakes', label: 'Brakes', defaultSelected: true },
      { id: 'tyres', label: 'Tyres and wheel alignment', defaultSelected: false },
      { id: 'timing-belt', label: 'Timing belt and clutch', defaultSelected: false },
      { id: 'air-conditioning', label: 'Air conditioning', defaultSelected: false },
      { id: 'bodywork', label: 'Bodywork', defaultSelected: false },
    ],
    serviceDescription: 'Price given before the job, nothing done without your approval.',
    requestTitle: 'Your auto repair shop website, under your name',
  },
  contents: {
    eyebrow: 'What makes people book',
    title: 'What an auto repair shop’s website should contain',
    intro: 'Six things separate a reassuring website from a simple business card online.',
    cards: [
      {
        icon: 'Phone',
        title: 'One tap to call',
        description:
          'A call button visible on every phone screen: a warning light comes on, the customer calls you without searching.',
      },
      {
        icon: 'CalendarCheck',
        title: 'Appointment requests',
        description:
          'Number plate, model, service and preferred date: you prepare the slot and the parts before the car arrives.',
      },
      {
        icon: 'Euro',
        title: 'Your prices, no surprises',
        description:
          'Hourly rate, oil change or service packages, diagnostic fee: posted at the garage, they reassure online too.',
      },
      {
        icon: 'MapPin',
        title: 'Address, map and opening hours',
        description: 'The address, a map and the opening hours: what people check before dropping off their car.',
      },
      {
        icon: 'ClipboardCheck',
        title: 'Circular economy parts',
        description:
          'Mandatory on the website in France: the option to choose them, the parts concerned and the cases where you need not offer them.',
      },
      {
        icon: 'Star',
        title: 'Reviews and workshop photos',
        description:
          'Your Google reviews, your team and your real workshop: people hand over their car more easily to faces they have already seen.',
      },
    ],
  },
  rules: {
    eyebrow: 'What French law requires',
    title: 'Four rules for your garage and your website in France',
    intro:
      'In 2024, the French consumer authority (DGCCRF) checked more than 1,600 garages, auto centres and dealerships: 4 checks in 10 led to corrective measures or penalties, notably for incomplete or unreadable prices. Here is what the French texts require, read on 2 November 2026.',
    facts: [
      {
        contextLabel: 'Order of 27 March 1987',
        title: 'Prices incl. VAT posted at the garage',
        text: 'Hourly rates and package prices incl. VAT, at the entrance and the reception, with how they are calculated (time spent or the maker’s time scale); the detail of each package on request. The text does not cover the website, but showing them there reassures.',
        sourceName: GARAGE_PRICE_DISPLAY_SOURCE.name,
        sourceUrl: GARAGE_PRICE_DISPLAY_SOURCE.url,
      },
      {
        contextLabel: 'Before any repair',
        title: 'A quote on request, a signed repair order',
        text: 'A quote is not mandatory, but you cannot refuse one to a customer who asks; if it is paid, say so beforehand. The repair order, strongly advised, gives the date, the vehicle and its mileage, the work, its likely cost and how long the car stays in.',
        sourceName: AUTO_REPAIR_RULES_SOURCE.name,
        sourceUrl: AUTO_REPAIR_RULES_SOURCE.url,
      },
      {
        contextLabel: 'French Consumer Code, art. D224-25-2',
        title: 'Parts from the circular economy',
        text: 'Customers may choose parts from the circular economy (removable body parts, lights, non-bonded glass…). This option, the parts concerned and the exceptions are posted at the reception and must also appear on your website.',
        sourceName: CIRCULAR_ECONOMY_PARTS_SOURCE.name,
        sourceUrl: CIRCULAR_ECONOMY_PARTS_SOURCE.url,
      },
      {
        contextLabel: 'On the website itself',
        title: 'Legal notices and mediator',
        text: 'Company name and legal form (or name with the EI mention), address, phone, e-mail, registration number and website host; then the name, address and website of the consumer mediator your customers can turn to.',
        sourceName: CONSUMER_MEDIATION_SOURCE.name,
        sourceUrl: CONSUMER_MEDIATION_SOURCE.url,
      },
    ],
    footnote:
      'Sources: DGCCRF (fact sheet on the repair order, which covers the order of 27 March 1987, and survey published on 4 June 2026), French National Consumer Institute (INC, garages in 20 questions and answers), Légifrance (Consumer Code, articles L224-67 and R224-22 to D224-25-5), Entreprendre.Service-Public.fr (mandatory notices on a business website, consumer mediation). Read on 2 November 2026.',
  },
  pricing: {
    intro:
      'A price known in advance for the template website, a free quote for the custom one. Either way, you own your website and your domain name.',
    templateOfferDescription:
      'The template, under your name and in your colour, with its appointment request form. Domain name and hosting included. Your texts and photos, or we write them together in 30 minutes. Editable from a simple editor.',
    customOfferDescription:
      'Unique design, online booking linked to your calendar, online quotes, one page per service and per town for local search, and software behind the website if you need it. Maintenance from €100 to €300 a month.',
  },
  resources: {
    title: 'Already on dibodev.fr for auto repair shops',
    toolCard: {
      icon: 'Wrench',
      label: 'Free test, 6 questions',
      title: 'Which software for your auto repair shop?',
      description:
        'Quotes, repair orders, invoicing: the 2026 prices of the garage software on the French market, and when custom-made is worth it.',
    },
    freeTemplateCard: {
      icon: 'Download',
      label: 'Free template',
      title: 'Garage repair order: French PDF and Excel template',
      description: 'With the quote, the mileage, the agreement on reused parts and calculated totals.',
    },
  },
  faq: {
    title: 'Auto repair shop website in France: your questions',
    questions: [
      {
        question: 'How much does a website for an auto repair shop cost?',
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
          'Yes. You change your texts, photos, services and prices from a simple editor, with nothing to install. I stay reachable if you get stuck.',
      },
      {
        question: 'How long until the website is online?',
        answer:
          '48 hours after I receive your texts and photos for a template website. Two to four weeks for a custom website.',
      },
      {
        question: 'Can my customers book an appointment on the website?',
        answer:
          'Yes. The template includes an appointment request form: number plate, make and model, services wanted and date, sent to your e-mail address. An online calendar with bookable slots is part of the custom option, from €1,500.',
      },
      {
        question: 'Will my website show up on Google?',
        answer:
          'It is built for local search: your town and address written out clearly, each service named, a map and your Google reviews. To target several towns, the custom option adds one page per town and per service.',
      },
      {
        question: 'Can I see a real website before paying?',
        answer:
          'Yes, that is the idea of this page: you build your website at the top of the page, then you receive a demo under your name within 24 working hours, before any decision.',
      },
      {
        question: 'Which mentions are mandatory on a garage website in France?',
        answer:
          'The information on circular economy parts (the customer’s option, the parts concerned, the exceptions), the legal notices (name, address, registration number, host) and the details of your consumer mediator. Your hourly rates and packages incl. VAT, posted at the garage, also belong on the website. I set everything up with you before going online.',
      },
    ],
  },
  contactCta: {
    title: 'Your auto repair shop website, ready to make the phone ring',
    description:
      'A template designed for garages, a demo under your name within 24 working hours, and a price known in advance. If a template website is enough for you, I will tell you.',
  },
  mobileBarText: 'A garage website under your name, free to see',
}
