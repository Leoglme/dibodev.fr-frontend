import type { DibodevTradeWebsitePageContent } from '~/core/types/DibodevTradeWebsitePage'
import {
  HOMEMADE_DISH_MENTION_SOURCE,
  RESTAURANT_ALLERGENS_SOURCE,
  RESTAURANT_MEAT_ORIGIN_SOURCE,
  RESTAURANT_PRICE_DISPLAY_SOURCE,
} from '~/core/constants/tradeWebsites/restaurant/pageShared'

export const RESTAURANT_WEBSITE_PAGE_EN: DibodevTradeWebsitePageContent = {
  meta: {
    title: 'Website for restaurants in France: see yours in 2 minutes',
    description:
      'See your restaurant website under your name in 2 minutes: €290 paid once, domain and hosting included, online within 48 hours. Custom from €1,500.',
    inLanguage: 'en-US',
    serviceName: 'Website design for restaurants',
    serviceDescription:
      'Restaurant website on a template, under your name, in your colour and with your photos, domain name and hosting included, or a custom website with table booking and online ordering, for restaurants in France.',
    serviceType: 'Website design for restaurants',
  },
  breadcrumbLabel: 'Restaurant',
  shareImage: {
    titleLines: ['Website for', 'restaurants in France'],
    highlight: 'restaurants',
    subtitle: 'See yours in 2 minutes, under your name',
    badge: '€290, paid once',
    alt: 'Website for restaurants in France: see yours in 2 minutes, €290 paid once',
  },
  hero: {
    titleBefore: 'Website for ',
    titleHighlight: 'restaurants',
    titleAfter: ' in France: see yours in 2 minutes',
    intro:
      'Your restaurant’s name, your town, your colour, your logo and your dishes: the website takes shape before your eyes as you answer. €290 paid once on a template, domain and hosting included, or custom-made from €1,500.',
    reassurances: ['2 minutes', 'No sign-up', 'Instant result'],
  },
  summary: {
    text: 'At Dibodev, a website for a restaurant, bistro or food truck in France costs €290, paid once, domain name and hosting included, on the template on this page, online within 48 hours. A custom website, with table booking or online ordering, starts at €1,500. Either way, the menu, opening hours, directions and the notices required in France are planned for.',
    authorBio:
      'independent developer near Rennes, France. I build websites and software for tradespeople and shopkeepers, and I developed the restaurant template above.',
  },
  atelier: {
    styleIntro: 'One template made for restaurants, from bistros to food trucks. Colours, photos and texts are yours.',
    templates: {
      food: {
        name: 'Arche',
        description:
          'Cream background, large forest-green title, arched photo and a menu button at the top of the page.',
      },
    },
    mediaIntro:
      'Your plates, your dining room and your shopfront beat any stock photo. Without photos, the website keeps those of the template.',
    serviceOptions: [
      { id: 'daily-menu', label: 'Daily menu', defaultSelected: true },
      { id: 'table-booking', label: 'Table booking', defaultSelected: true },
      { id: 'takeaway', label: 'Takeaway', defaultSelected: true },
      { id: 'delivery', label: 'Delivery', defaultSelected: false },
      { id: 'private-hire', label: 'Private hire', defaultSelected: false },
      { id: 'catering', label: 'Catering', defaultSelected: false },
      { id: 'terrace', label: 'Terrace', defaultSelected: false },
    ],
    serviceDescription: 'Information and bookings by phone.',
    requestTitle: 'Your restaurant website, under your name',
  },
  examples: {
    title: 'An example of a restaurant website',
    imageAlt: 'Example of a restaurant website, {name} template',
  },
  contents: {
    eyebrow: 'What makes people book',
    title: 'What a restaurant’s website should contain',
    intro: 'Six things make the difference between a website people scroll through and a table booked.',
    cards: [
      {
        icon: 'Utensils',
        title: 'The menu and its prices, up to date',
        description:
          'The menu and the daily specials as real text, not a PDF or a blurry photo: readable on a phone, and Google reads them too.',
      },
      {
        icon: 'CalendarCheck',
        title: 'Booking without searching',
        description:
          'A booking button on every screen, and the phone number right next to it for those who prefer to call.',
      },
      {
        icon: 'MapPin',
        title: 'Opening hours and directions',
        description:
          'Lunch and dinner services, closing days, address and parking: the same as on your Google Business profile.',
      },
      {
        icon: 'Camera',
        title: 'Your dishes in pictures',
        description:
          'Your real plates and your dining room, even taken with a phone, look more appetising than stock photos.',
      },
      {
        icon: 'Star',
        title: 'Reviews in plain sight',
        description:
          'Your Google rating and a few recent reviews: often what tips the choice between two nearby restaurants.',
      },
      {
        icon: 'Bike',
        title: 'Takeaway, delivery, private hire',
        description:
          'Takeaway, delivery, groups and catering: each service shown with its conditions and a direct contact.',
      },
    ],
  },
  rules: {
    eyebrow: 'What French law requires',
    title: 'Four rules for your menu and your website in France',
    intro:
      'Prices, allergens, meat origin, homemade dishes: a restaurant menu is tightly regulated in France, and your website shows it. Here is what the French texts require, read on 2 November 2026.',
    facts: [
      {
        contextLabel: 'Order of 27 March 1987',
        title: 'Prices posted outside, service included',
        text: 'Set menus or the day’s menu and the prices of at least five wines, readable from outside during service, at least from 11:30 am for lunch and 6 pm for dinner. Prices include taxes and service, drink included or not. A QR code alone is not enough.',
        sourceName: RESTAURANT_PRICE_DISPLAY_SOURCE.name,
        sourceUrl: RESTAURANT_PRICE_DISPLAY_SOURCE.url,
      },
      {
        contextLabel: 'Since 1 July 2015',
        title: 'The 14 allergens, in writing',
        text: 'Gluten, milk, eggs, nuts…: the 14 regulated allergens present in each dish are given in writing, on display in the dining room or in a document anyone can consult freely. For an online order, this comes before the order is confirmed.',
        sourceName: RESTAURANT_ALLERGENS_SOURCE.name,
        sourceUrl: RESTAURANT_ALLERGENS_SOURCE.url,
      },
      {
        contextLabel: 'Since 19 February 2025',
        title: 'Where each meat comes from',
        text: 'Pork, lamb, mutton and poultry join beef: for meat bought raw, the country of origin, or the countries of rearing and slaughter, on the menu or a display. Restaurants with no dining room: the origin is shown before the order, online included.',
        sourceName: RESTAURANT_MEAT_ORIGIN_SOURCE.name,
        sourceUrl: RESTAURANT_MEAT_ORIGIN_SOURCE.url,
      },
      {
        contextLabel: 'On the menu and online',
        title: 'The “fait maison” (homemade) mention, dish by dish',
        text: 'A “fait maison” dish is cooked on site from raw products. The mention or its logo goes with each dish concerned, on the menu as on your website, or appears only once if the whole menu is homemade.',
        sourceName: HOMEMADE_DISH_MENTION_SOURCE.name,
        sourceUrl: HOMEMADE_DISH_MENTION_SOURCE.url,
      },
    ],
    footnote:
      'Sources: DGCCRF (practical sheet on restaurants, 10 February 2025), Légifrance (order of 27 March 1987, articles 1, 4 and 5; French consumer code, articles R. 412-12 to R. 412-14 and D. 122-1 to D. 122-3; decree no. 2002-1465 as amended on 13 February 2025; decree no. 2023-492), EUR-Lex (EU regulation no. 1169/2011, articles 14 and 44, annex II). Read on 2 November 2026.',
  },
  pricing: {
    intro:
      'A price known in advance for the template website, a free quote for the custom one. Either way, you own your website and your domain name.',
    templateOfferDescription:
      'The template on this page, under your name and in your colour. Domain name and hosting included. Your menu, texts and photos, or we write them together in 30 minutes. Editable from a simple editor.',
    customOfferDescription:
      'Unique design, online table booking with your time slots, takeaway or delivery ordering, a menu in several languages, and software behind the website if you need it. Maintenance from €100 to €300 a month.',
  },
  resources: {
    title: 'Going further on dibodev.fr',
    toolCard: null,
    freeTemplateCard: null,
  },
  faq: {
    title: 'Restaurant website in France: your questions',
    questions: [
      {
        question: 'How much does a website for a restaurant cost?',
        answer:
          '€290, paid once, for a template website, domain name and hosting included. A custom website, with online booking or ordering, starts at €1,500. The website price barometer, which compares 20 French sources, gives the orders of magnitude of the market.',
      },
      {
        question: '€290, is that really everything?',
        answer:
          'Yes for going online: the website, your domain name and hosting, with a booking request form. You provide your menu, texts and photos, or we write them together during a 30-minute call.',
      },
      {
        question: 'Can I edit my menu myself?',
        answer:
          'Yes. You change your dishes, texts, opening hours and photos from a simple editor, with nothing to install. I stay reachable if you get stuck.',
      },
      {
        question: 'How long until the website is online?',
        answer:
          '48 hours after I receive your texts and photos for a template website. Two to four weeks for a custom website.',
      },
      {
        question: 'Will my restaurant show up on Google?',
        answer:
          'The website is built for local search: address, opening hours and menu written as text, Google Business profile linked. When people search for “restaurant” and your town, your Google profile often shows first: the website completes it with your menu and photos.',
      },
      {
        question: 'Can I see a real website before paying?',
        answer:
          'Yes, that is the idea of this page: you build your website in the workshop, then you receive a demo under your name within 24 working hours, before any decision.',
      },
      {
        question: 'Which mentions are mandatory on a restaurant’s website in France?',
        answer:
          'The legal notices (name, address, registration number, host) and the details of your consumer mediator. On the online menu, the “fait maison” (homemade) mention goes with the dishes concerned, and if you take orders, allergens are shown before the order is confirmed. I set them up with you before going online.',
      },
      {
        question: 'Can a QR code to my website replace the posted menu?',
        answer:
          'No. The DGCCRF, the French consumer protection authority, says so: a QR code alone is not enough for mandatory displays, such as menus and prices visible from outside. The website comes on top: it shows your menu before the visit, and the QR code on the table can lead to it.',
      },
    ],
  },
  contactCta: {
    title: 'Your restaurant website, ready to take bookings',
    description:
      'One template made for restaurants, a demo under your name within 24 working hours, and a price known in advance. If a template website is enough for you, I will tell you.',
  },
  mobileBarText: 'A restaurant website under your name, free to see',
}
