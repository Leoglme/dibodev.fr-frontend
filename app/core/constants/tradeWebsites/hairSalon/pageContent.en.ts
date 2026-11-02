import type { DibodevTradeWebsitePageContent } from '~/core/types/DibodevTradeWebsitePage'
import { CONSUMER_MEDIATION_SOURCE } from '~/core/constants/tools/officialSources'
import {
  HAIR_SALON_BILL_SOURCE,
  HAIR_SALON_PRICE_DISPLAY_SOURCE,
  HAIR_SALON_QUALIFICATION_SOURCE,
} from '~/core/constants/tradeWebsites/hairSalon/pageShared'

export const HAIR_SALON_WEBSITE_PAGE_EN: DibodevTradeWebsitePageContent = {
  meta: {
    title: 'Website for hair salons in France: see yours in 2 minutes',
    description:
      'See your hair salon website under your name in 2 minutes: €290 paid once, domain and hosting included, online within 48 hours. Custom from €1,500.',
    inLanguage: 'en-US',
    serviceName: 'Website design for hair salons and barbers',
    serviceDescription:
      'Hair salon website on a template, under your name, in your colour and with your photos, domain name and hosting included, or a custom website with online booking, for salons in France.',
    serviceType: 'Website design for hair salons',
  },
  breadcrumbLabel: 'Hair salon',
  shareImage: {
    titleLines: ['Website for', 'hair salons in France'],
    highlight: 'hair salons',
    subtitle: 'See yours in 2 minutes, under your name',
    badge: '€290, paid once',
    alt: 'Website for hair salons in France: see yours in 2 minutes, €290 paid once',
  },
  hero: {
    titleBefore: 'Website for ',
    titleHighlight: 'hair salons',
    titleAfter: ' in France: see yours in 2 minutes',
    intro:
      'Your salon name, your town, your colour, your logo and your photos: the website takes shape before your eyes as you answer. €290 paid once on a template, domain and hosting included, or custom-made from €1,500.',
    reassurances: ['2 minutes', 'No sign-up', 'Instant result'],
  },
  summary: {
    text: 'At Dibodev, a website for a hairdresser or a barber in France costs €290, paid once, domain name and hosting included, on the template on this page, online within 48 hours. A custom website, with online booking, starts at €1,500. Either way, the price list, opening hours, salon address and the legal notices required in France are planned for.',
    authorBio:
      'independent developer near Rennes, France. I build websites and software for tradespeople and local shops, and I developed the salon template above.',
  },
  atelier: {
    styleIntro: 'One template, made for barbers and mixed salons. Colours, photos and services are yours.',
    templates: {
      barber: {
        name: 'Charbon',
        description:
          'Charcoal tones, full-screen photo of the salon, big capital-letter headings and a booking button: the look of a neighbourhood barbershop.',
      },
    },
    mediaIntro:
      'Start with a photo of the salon: the first one is shown large at the top of the website, the second one in the introduction. Without photos, the website keeps those of the template.',
    serviceOptions: [
      { id: 'womens-cut', label: 'Women’s cuts', defaultSelected: true },
      { id: 'mens-cut', label: 'Men’s cuts', defaultSelected: true },
      { id: 'colour', label: 'Colour', defaultSelected: true },
      { id: 'highlights', label: 'Highlights and balayage', defaultSelected: false },
      { id: 'blow-dry', label: 'Blow-dry and treatment', defaultSelected: false },
      { id: 'beard', label: 'Beard', defaultSelected: false },
      { id: 'wedding', label: 'Wedding hair', defaultSelected: false },
    ],
    serviceDescription: 'Personal advice, price given before we start.',
    requestTitle: 'Your hair salon website, under your name',
  },
  contents: {
    eyebrow: 'What makes people book',
    title: 'What a hair salon’s website should contain',
    intro: 'Six things separate a website that gets bookings from a simple business card online.',
    cards: [
      {
        icon: 'CalendarCheck',
        title: 'Booking in one tap',
        description:
          'A booking button on every phone screen: a call, a message, or your online booking calendar if you have one.',
      },
      {
        icon: 'Euro',
        title: 'The price list',
        description:
          'Cuts, colours, packages: the same prices incl. VAT as in your window. Clients know what they will pay before they come.',
      },
      {
        icon: 'MapPin',
        title: 'Address and opening hours',
        description:
          'The address, a map, opening hours and closing days: what people check before coming. Google reads them too.',
      },
      {
        icon: 'Camera',
        title: 'The salon and your work',
        description:
          'Your cuts and colours in photos, with your clients’ consent, and a link to your Instagram: enough to make people walk in.',
      },
      {
        icon: 'Star',
        title: 'Your clients’ reviews',
        description: 'Your Google rating and latest reviews, in plain sight: they reassure before a first visit.',
      },
      {
        icon: 'ShieldCheck',
        title: 'Skills and products',
        description:
          'Your hairdressing diploma (BP), your training and the brands you use: what reassures before a colour or a straightening.',
      },
    ],
  },
  rules: {
    eyebrow: 'What French law requires',
    title: 'Four rules for your salon and your website in France',
    intro:
      'French fraud-control officers regularly inspect hair salons and barbershops to check price display and professional qualifications. Here is what the French texts require, read on 2 November 2026.',
    facts: [
      {
        contextLabel: 'Order of 27 March 1987',
        title: 'Your prices in the window and at the till',
        text: 'In the window, readable from outside: at least 10 prices incl. VAT for the most common services, 20 in a mixed salon, packages detailed. The same list where clients pay, and the full price list at the till, in view of clients.',
        sourceName: HAIR_SALON_PRICE_DISPLAY_SOURCE.name,
        sourceUrl: HAIR_SALON_PRICE_DISPLAY_SOURCE.url,
      },
      {
        contextLabel: 'From €25 incl. VAT',
        title: 'A bill before payment',
        text: 'In two copies, before payment: date, salon name and address, client name, detailed services and products, total excl. and incl. VAT. Below €25, only if the client asks for one. You keep the copy for two years.',
        sourceName: HAIR_SALON_BILL_SOURCE.name,
        sourceUrl: HAIR_SALON_BILL_SOURCE.url,
      },
      {
        contextLabel: 'French crafts code, art. R121-2',
        title: 'A professional diploma to work in a salon',
        text: 'Hairdressing in a salon requires the brevet professionnel, the brevet de maîtrise or a hairdressing diploma of equal or higher level, or the effective and permanent supervision of someone who holds one. Without a diploma: three years in the trade.',
        sourceName: HAIR_SALON_QUALIFICATION_SOURCE.name,
        sourceUrl: HAIR_SALON_QUALIFICATION_SOURCE.url,
      },
      {
        contextLabel: 'On the website itself',
        title: 'Legal notices and mediator',
        text: 'Name or company name (with the EI mention for a sole trader), address, phone, e-mail, registration number and website host; then the name, address and website of the consumer mediator your clients can turn to.',
        sourceName: CONSUMER_MEDIATION_SOURCE.name,
        sourceUrl: CONSUMER_MEDIATION_SOURCE.url,
      },
    ],
    footnote:
      'Sources: Légifrance (order of 27 March 1987 on the advertising of hairdressing prices, articles 1 and 2; order no. 83-50/A of 3 October 1983, articles 1, 3 and 4; French crafts code, articles L121-1 and R121-2 to R121-4), French National Assembly (government answer published on 31 March 2026 to written question no. 12555), Entreprendre.Service-Public.fr (mandatory notices on a business website, consumer mediation). Read on 2 November 2026.',
  },
  pricing: {
    intro:
      'A price known in advance for the template website, a free quote for the custom one. Either way, you own your website and your domain name.',
    templateOfferDescription:
      'The Charbon template, under your name and in your colour. Domain name and hosting included. Your texts, price list and photos, or we write them together in 30 minutes. Editable from a simple editor.',
    customOfferDescription:
      'Unique design, online booking linked to your calendar, one page per service for local search, and software behind the website if you need it. Maintenance from €100 to €300 a month.',
  },
  resources: {
    title: 'Going further on dibodev.fr',
    toolCard: null,
    freeTemplateCard: null,
  },
  faq: {
    title: 'Hair salon website in France: your questions',
    questions: [
      {
        question: 'How much does a website for a hair salon cost?',
        answer:
          '€290, paid once, for a template website, domain name and hosting included. A custom website, with online booking, starts at €1,500. The website price barometer, which compares 20 French sources, gives the orders of magnitude of the market.',
      },
      {
        question: '€290, is that really everything?',
        answer:
          'Yes for going online: the website, your domain name and hosting. You provide your texts, your price list and your photos, or we write them together during a 30-minute call.',
      },
      {
        question: 'Can I change my prices and opening hours myself?',
        answer:
          'Yes. You change your prices, opening hours, texts and photos from a simple editor, with nothing to install. I stay reachable if you get stuck.',
      },
      {
        question: 'How long until the website is online?',
        answer:
          '48 hours after I receive your texts and photos for a template website. Two to four weeks for a custom website.',
      },
      {
        question: 'Will my salon show up on Google?',
        answer:
          'The website is built for local search: address, opening hours and services written out clearly, Google Business profile linked. To target each service (colour, weddings, beard), the custom option adds one page per service.',
      },
      {
        question: 'Can I see a real website before paying?',
        answer:
          'Yes, that is the idea of this page: you build your website in the workshop, then you receive a demo under your name within 24 working hours, before any decision.',
      },
      {
        question: 'Which mentions are mandatory on a hair salon website in France?',
        answer:
          'The legal notices (name or company name, address, registration number, host) and the details of your consumer mediator. Prices are mandatory in the window and at the till: showing them on the website too avoids surprises. I set it all up with you before going online.',
      },
      {
        question: 'Does the template suit a women’s salon?',
        answer:
          'It comes from the barbershop world: dark tones, capital letters, and a welcome headline about cuts and beards. Your colours, photos and services replace those of the demo, and the workshop shows you the result. If your salon has a completely different feel, the custom option starts from yours.',
      },
    ],
  },
  contactCta: {
    title: 'Your hair salon website, ready to fill your chairs',
    description:
      'A ready-made template, a demo under your name within 24 working hours, and a price known in advance. If a template website is enough for you, I will tell you.',
  },
  mobileBarText: 'A hair salon website under your name, free to see',
}
