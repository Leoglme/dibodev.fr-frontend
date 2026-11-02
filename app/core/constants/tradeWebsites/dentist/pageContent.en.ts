import type { DibodevTradeWebsitePageContent } from '~/core/types/DibodevTradeWebsitePage'
import {
  DENTIST_COMMUNICATION_GUIDANCE_SOURCE,
  DENTIST_COMMUNICATION_SOURCE,
  DENTIST_FEES_ON_WEBSITE_SOURCE,
  DENTIST_QUOTE_RULES_SOURCE,
} from '~/core/constants/tradeWebsites/dentist/pageShared'

export const DENTIST_WEBSITE_PAGE_EN: DibodevTradeWebsitePageContent = {
  meta: {
    title: 'Website for dentists in France: see yours in 2 minutes',
    description:
      'See your dental practice website under your name in 2 minutes: €290 paid once, domain and hosting included, online within 48 hours. Custom from €1,500.',
    inLanguage: 'en-US',
    serviceName: 'Website design for dental practices',
    serviceDescription:
      'Dental practice website on a template, under your name, in your colour and with your photos, domain name and hosting included, or a custom website with online booking, within the French code of ethics for dentists.',
    serviceType: 'Website design for dentists',
  },
  breadcrumbLabel: 'Dentist',
  shareImage: {
    titleLines: ['Website for', 'dentists in France'],
    highlight: 'dentists',
    subtitle: 'See yours in 2 minutes, under your name',
    badge: '€290, paid once',
    alt: 'Website for dentists in France: see yours in 2 minutes, €290 paid once',
  },
  hero: {
    titleBefore: 'Website for ',
    titleHighlight: 'dentists',
    titleAfter: ' in France: see yours in 2 minutes',
    intro:
      'Your practice name, your town, your colour, your logo and your photos: the website takes shape before your eyes as you answer. €290 paid once on a template, domain and hosting included, or custom-made from €1,500.',
    reassurances: ['2 minutes', 'No sign-up', 'Instant result'],
  },
  summary: {
    text: 'At Dibodev, a website for a dental practice in France costs €290, paid once, domain name and hosting included, on the template on this page, online within 48 hours. A custom website, with online booking, starts at €1,500. Either way, the fees page, emergencies and the legal notices required in France are planned for, within the French code of ethics for dentists.',
    authorBio:
      'independent developer near Rennes, France. I build websites and software for independent professionals and small businesses, and I designed the dental practice template above.',
  },
  atelier: {
    styleIntro: 'A template designed for dental practices. Colours, photos and texts are yours.',
    templates: {
      dental: {
        name: 'Family Care',
        description:
          'White background and large, elegant headings, opening hours and phone number in the header, a big appointment button.',
      },
    },
    mediaIntro:
      'Your practice, your treatment room, your team: real photos reassure before the first appointment. Never a recognisable patient. Without photos, the website keeps those of the template.',
    serviceOptions: [
      { id: 'dental-care', label: 'Check-ups and scaling', defaultSelected: true },
      { id: 'prosthetics', label: 'Crowns and dentures', defaultSelected: true },
      { id: 'dental-emergencies', label: 'Dental emergencies', defaultSelected: true },
      { id: 'implants', label: 'Implants', defaultSelected: false },
      { id: 'orthodontics', label: 'Orthodontics', defaultSelected: false },
      { id: 'teeth-whitening', label: 'Teeth whitening', defaultSelected: false },
      { id: 'children-dentistry', label: 'Children’s dentistry', defaultSelected: false },
    ],
    serviceDescription: 'Clear explanations and fees given before treatment.',
    requestTitle: 'Your dental practice website, under your name',
  },
  contents: {
    eyebrow: 'What patients look for',
    title: 'What a dentist’s website should contain',
    intro: 'Six things separate a website that informs and reassures from a simple business card online.',
    cards: [
      {
        icon: 'CalendarCheck',
        title: 'Booking in one tap',
        description: 'A call button and an appointment link, visible on every phone screen, without searching.',
      },
      {
        icon: 'AlertCircle',
        title: 'Emergencies, made clear',
        description:
          'Pain, a broken tooth, an abscess: how to reach you urgently, and what to do on a Sunday or a public holiday.',
      },
      {
        icon: 'Euro',
        title: 'Your fees and payment methods',
        description:
          'The fees of your 5 to 10 most common treatments, as the French dental council recommends, and the payment methods you accept.',
      },
      {
        icon: 'Info',
        title: 'Treatments, simply explained',
        description:
          'One page per treatment: scaling, implants, orthodontics, children’s care. Clear explanations, no promise of results.',
      },
      {
        icon: 'ShieldCheck',
        title: 'Who treats patients',
        description:
          'Each practitioner with a photo, recognised diplomas and RPPS number, the French register of health professionals: details patients can check.',
      },
      {
        icon: 'MapPin',
        title: 'Access, hours, accessibility',
        description:
          'Address, public transport, parking, opening hours and wheelchair access: everything people look for before coming.',
      },
    ],
  },
  rules: {
    eyebrow: 'What French law requires',
    title: 'Four rules for your website and your quotes in France',
    intro:
      'Since the decree of 22 December 2020, a dentist in France can present their practice on a website, within a precise framework. Here is what the French texts and the French dental council require, read on 2 November 2026.',
    facts: [
      {
        contextLabel: 'Article R. 4127-215-1',
        title: 'Inform, without testimonials or comparisons',
        text: 'Your skills, career, treatments and working conditions, yes. But fair and honest information: no patient testimonials, no comparison with other dentists, nothing that pushes patients towards unnecessary care.',
        sourceName: DENTIST_COMMUNICATION_SOURCE.name,
        sourceUrl: DENTIST_COMMUNICATION_SOURCE.url,
      },
      {
        contextLabel: 'Council guidance of 19 June 2026',
        title: 'No reviews, no before-and-after, no priority on Google',
        text: 'For the French dental council (Ordre des chirurgiens-dentistes), patient ratings and reviews do not belong on the website, and before-and-after photos may suggest a sure result. Any method, paid or not, to rank first on Google or in a directory is banned.',
        sourceName: DENTIST_COMMUNICATION_GUIDANCE_SOURCE.name,
        sourceUrl: DENTIST_COMMUNICATION_GUIDANCE_SOURCE.url,
      },
      {
        contextLabel: 'Article R. 4127-240',
        title: 'Your fees, on the website',
        text: 'A website presenting your practice shows your fees, the payment methods you accept and the rules on access to care without discrimination, on top of the notice at the practice. The information is clear, honest, precise and non-comparative.',
        sourceName: DENTIST_FEES_ON_WEBSITE_SOURCE.name,
        sourceUrl: DENTIST_FEES_ON_WEBSITE_SOURCE.url,
      },
      {
        contextLabel: 'Order of 30 May 2018',
        title: 'A quote before any prosthesis',
        text: 'Crown, bridge, denture: a standard quote comes before treatment, and a written quote once extra fees above the Social Security rate reach €70. For a prosthesis, it states where it is made and, barring exceptions, offers an option from the 100% Santé scheme.',
        sourceName: DENTIST_QUOTE_RULES_SOURCE.name,
        sourceUrl: DENTIST_QUOTE_RULES_SOURCE.url,
      },
    ],
    footnote:
      'Sources: Légifrance (French Public Health Code, articles R. 4127-215-1, R. 4127-217 and R. 4127-240, from decree no. 2020-1658 of 22 December 2020), guidance of the French dental council on professional communication (version of 19 June 2026), DGCCRF (dental care and quotes, based on the order of 30 May 2018), Entreprendre.Service-Public.fr (mandatory notices on a business website, consumer mediation). Read on 2 November 2026.',
  },
  pricing: {
    intro:
      'A price known in advance for the template website, a free quote for the custom one. Either way, you own your website and your domain name.',
    templateOfferDescription:
      'The dental practice template, under your name and in your colour. Domain name and hosting included. Your texts and photos, or we write them together in 30 minutes. Editable from a simple editor.',
    customOfferDescription:
      'Unique design, online booking linked to your calendar, one page per treatment and per practitioner, the website in several languages, and software behind the website if you need it. Maintenance from €100 to €300 a month.',
  },
  resources: {
    title: 'Going further on dibodev.fr',
    toolCard: null,
    freeTemplateCard: null,
  },
  faq: {
    title: 'Dentist website in France: your questions',
    questions: [
      {
        question: 'How much does a website for a dentist cost?',
        answer:
          '€290, paid once, for a template website, domain name and hosting included. A custom website, with online booking, starts at €1,500. The website price barometer, which compares 20 French sources, gives the orders of magnitude of the market.',
      },
      {
        question: '€290, is that really everything?',
        answer:
          'Yes for going online: the website, your domain name and hosting. You provide your texts and photos, or we write them together during a 30-minute call.',
      },
      {
        question: 'Is a dentist in France allowed to have a website?',
        answer:
          'Yes. The French code of ethics for dentists, relaxed by the decree of 22 December 2020, lets a dentist present their skills, career and working conditions on a website. The website stays informative: no patient testimonials or ratings, no comparison with other dentists.',
      },
      {
        question: 'Can I edit my website myself?',
        answer:
          'Yes. You change your texts, photos and fees from a simple editor, with nothing to install. I stay reachable if you get stuck.',
      },
      {
        question: 'How long until the website is online?',
        answer:
          '48 hours after I receive your texts and photos for a template website. Two to four weeks for a custom website.',
      },
      {
        question: 'Will my website show up on Google?',
        answer:
          'It is built to be found: practice name, address, treatments and opening hours written out clearly, readable by Google. However, no paid ads and no tricks to rank above other dentists: the French code of ethics bans any priority listing for dentists.',
      },
      {
        question: 'Can I see a real website before paying?',
        answer:
          'Yes, that is the idea of this page: you build your website in the workshop, then you receive a demo under your name within 24 working hours, before any decision.',
      },
      {
        question: 'Which mentions are mandatory on a dentist’s website in France?',
        answer:
          'Your fees and the payment methods you accept, the legal notices (identity, address, contact details, registration number, host), your title of dental surgeon, the dental council you are registered with and the professional rules that apply. No consumer mediator: healthcare is excluded from consumer mediation. I set everything up with you before going online.',
      },
    ],
  },
  contactCta: {
    title: 'Your dental practice website, ready for patients to book',
    description:
      'A template designed for dental practices, a demo under your name within 24 working hours, and a price known in advance. If a template website is enough for you, I will tell you.',
  },
  mobileBarText: 'A dentist website under your name, free to see',
}
