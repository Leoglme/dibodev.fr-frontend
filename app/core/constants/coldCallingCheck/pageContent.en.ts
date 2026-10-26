import type { DibodevColdCallingCheckPageContent } from '~/core/types/DibodevColdCallingCheckPage'
import { COLD_CALLING_CHECK_SOURCES } from '~/core/constants/coldCallingCheck/pageShared'

export const COLD_CALLING_CHECK_PAGE_EN: DibodevColdCallingCheckPageContent = {
  meta: {
    title: 'Cold calling ban in France: can I still call prospects?',
    description:
      'Since 11 August 2026, calling a private individual in France requires their consent. 5 questions to see who you can still call, and how to find customers.',
    inLanguage: 'en-GB',
    schemaAbout: 'Ban on cold calling without consent in France since 11 August 2026: who can still call, and how',
  },
  breadcrumbLabel: 'Cold calling ban: can I still call?',
  shareImage: {
    titleLines: ['Cold calling ban', 'in France: can I', 'still call?'],
    highlight: 'still call',
    subtitle: 'Tradespeople, small businesses, freelancers: what is still allowed',
    badge: 'Free · 5 questions · 1 minute',
    alt: 'Cold calling ban in France: can I still call prospects? Free test on dibodev.fr',
  },
  hero: {
    titleBefore: 'Cold calling ban in France: can you still ',
    titleHighlight: 'call your prospects',
    titleAfter: '?',
    reassurances: ['Free, 5 questions, 1 minute', 'Result without e-mail', 'Official texts re-read on 26 October 2026'],
    description:
      'Since 11 August 2026, in France, calling a private individual to sell them something is banned unless they agreed beforehand. Bloctel is gone, and many tradespeople, freelancers and small businesses no longer know who they are allowed to call: a customer, a former customer, someone who asked for a quote, a company. This test crosses who you call, your sector, your relationship with these people and their consent, and tells you what is allowed.',
    authorIntro: 'Test designed by',
    authorBio:
      'freelance developer near Rennes. I build websites that bring in requests, with a contact form, a Google Business Profile and contact follow-up, for tradespeople, freelancers and small businesses.',
  },
  mobileContactBar: {
    text: 'Find customers without calling?',
    buttonLabel: 'Let’s talk',
  },
  facts: {
    anchorId: 'rules',
    eyebrow: 'What the texts say',
    title: 'Cold calling in France: six checked rules',
    intro:
      'The rules re-read on 26 October 2026 on Légifrance, the website of the DGCCRF (the French consumer protection authority), the CNIL and Service-Public.',
    facts: [
      {
        contextLabel: 'Law of 30 June 2025 · since 11 August 2026',
        title: 'No more sales calls to a private individual without their prior consent',
        text: 'A business can no longer cold call a consumer, itself or through a third party, if that consumer did not agree before the call. This consent must be free, specific, informed, unambiguous and revocable, given by a clear positive action: silence or a pre-ticked box count for nothing. The burden of proof is on the business, whoever benefits from the calls is presumed responsible, and any contract signed after a banned call is void.',
        sourceName: 'Légifrance, article L.223-1 of the French Consumer Code',
        sourceUrl: COLD_CALLING_CHECK_SOURCES.consumerCodeConsentArticle,
      },
      {
        contextLabel: 'Decree of 23 July 2026',
        title: 'Consent lasts one year at most, and you keep its proof for three years',
        text: 'The consent request states who you are, what you offer and how long it lasts, one year at most, with no tacit renewal. You keep the proof for three years (date, time, information given) and provide it free of charge to the person who asks for it. They can withdraw their consent at any time, even orally, as simply as they gave it.',
        sourceName: 'Légifrance, decree no. 2026-662 of 23 July 2026',
        sourceUrl: COLD_CALLING_CHECK_SOURCES.consentDecree,
      },
      {
        contextLabel: 'DGCCRF guidance of 27 July 2026',
        title: 'Energy renovation, home adaptation, CPF: banned even with consent',
        text: 'In three sectors, cold calling a private individual remains banned even if they agree: energy renovation (since July 2020), adapting homes to old age or disability (added by the 2025 law) and training funded by the CPF. For these works, prospecting by text message, e-mail and social networks is banned too, and the only call still allowed is calling back a person who asked for it, within 5 working days.',
        sourceName: 'DGCCRF, practical guidance on the rules of cold calling',
        sourceUrl: COLD_CALLING_CHECK_SOURCES.dgccrfBusinessRules,
      },
      {
        contextLabel: '11 August 2026',
        title: 'Bloctel no longer exists: only the person’s consent counts',
        text: 'The Bloctel opt-out list disappeared on the day the law came into force. Checking that a number is not on it is now pointless: the logic is reversed, and it is the person’s prior consent that allows you to call them, except for a contract in progress.',
        sourceName: 'Entreprendre.Service-Public.gouv.fr, news item updated on 11 August 2026',
        sourceUrl: COLD_CALLING_CHECK_SOURCES.servicePublicNews,
      },
      {
        contextLabel: 'Article L.242-16 of the French Consumer Code',
        title: 'Fines of up to €75,000, €375,000 for a company',
        text: 'A banned call can lead to an administrative fine of up to €75,000 for a natural person and €375,000 for a legal entity, published at the expense of the sanctioned party. The DGCCRF carries out checks, in particular from the reports private individuals file on SignalConso.',
        sourceName: 'Légifrance, article L.242-16 of the French Consumer Code',
        sourceUrl: COLD_CALLING_CHECK_SOURCES.consumerCodePenaltyArticle,
      },
      {
        contextLabel: 'CNIL · calls to professionals',
        title: 'Calling a company is still possible, if the offer relates to its trade',
        text: 'The 2025 law protects consumers. For a professional, the CNIL, the French data protection authority, accepts telephone prospecting without prior consent when the offer relates to their profession, such as software offered to a company’s IT director. They must be informed, be able to object simply and free of charge, and know on every call who is calling.',
        sourceName: 'CNIL, rules on telephone prospecting',
        sourceUrl: COLD_CALLING_CHECK_SOURCES.cnilPhoneProspecting,
      },
    ],
    calloutEmphasizedIntro: 'What is still allowed without consent:',
    calloutText:
      'calling a customer within a contract in progress (subscription, contract not terminated, commercial warranty), about that contract and what complements it; offering a newspaper or magazine subscription; making a call that is not commercial, such as those of associations or polling institutes.',
  },
  cases: {
    anchorId: 'cases',
    eyebrow: 'Case by case',
    title: 'Tradesperson, shopkeeper, estate agency, driving school: who can call whom',
    intro: 'Six common situations, with the rule that applies. The cases the texts do not settle are flagged as such.',
    items: [
      {
        title: 'Building tradesperson',
        description:
          'Calling a private individual to offer them works requires their prior, proven consent. Energy renovation or home adaptation: banned even with consent, outside a contract in progress; the only call still allowed is the callback they asked for, within 5 working days.',
      },
      {
        title: 'Business with maintenance contracts or subscriptions',
        description:
          'A customer whose contract is still running can be called about that contract, and about what complements or improves it. A former customer, with the work finished and paid or only the legal warranty left, cannot: you need their consent.',
      },
      {
        title: 'Shopkeeper',
        description:
          'The DGCCRF mentions the shop and the time of purchase as moments to collect consent, with dated proof. Without it, no sales call to a private customer. An e-mail to a customer about similar products remains possible without prior consent, if they can object simply.',
      },
      {
        title: 'Estate agency',
        description:
          'Calling an owner seen in a listing to offer them a mandate means canvassing a private individual: you need their prior consent, and a published number is not consent. A client whose mandate is still running can be called about that mandate.',
      },
      {
        title: 'Driving school',
        description:
          'A student whose training is in progress can be called about their training and what complements it. A former student, with the training finished and paid, cannot: you need their consent. Training funded by the CPF cannot be sold by cold calling, even with consent.',
      },
      {
        title: 'Freelancer or business selling to professionals',
        description:
          'The 2025 law does not cover you as long as you call professionals with an offer related to their trade, introducing yourself and letting them refuse simply. Grey area: a tradesperson reached on their personal mobile; no text settles it, so stay careful.',
      },
    ],
  },
  timeline: {
    anchorId: 'timeline',
    eyebrow: 'The timeline',
    title: 'Six dates, from 2020 to today',
    intro: 'The rules became stricter step by step. What applies today is the sum of these dates.',
    items: [
      {
        title: 'July 2020: energy renovation closed to cold calling',
        description:
          'Since 26 July 2020, calling a private individual about energy renovation works has been banned, even with their consent, outside a contract in progress.',
      },
      {
        title: '1 March 2023: days, hours and frequency regulated',
        description:
          'Monday to Friday except public holidays, from 10am to 1pm and from 2pm to 8pm, and 4 calls at most per person over 30 days.',
      },
      {
        title: '30 June 2025: the law against fraud involving public aid',
        description:
          'It sets prior consent for 11 August 2026, adds home adaptation to the banned sectors and, for these works, also bans prospecting by text message, e-mail and social networks.',
      },
      {
        title: '23 July 2026: the decree on consent',
        description:
          'It sets how long consent lasts, one year at most, the proof to keep for three years and the right to withdraw at any time, even orally.',
      },
      {
        title: '11 August 2026: prior consent required, end of Bloctel',
        description:
          'Without a contract in progress or proven consent, no more sales calls to private individuals. The Bloctel list disappears the same day.',
      },
      {
        title: 'Since then: checks and fines',
        description:
          'The DGCCRF announces fines calculated per call and their systematic publication; private individuals report abuses on SignalConso.',
      },
    ],
  },
  findingClientsWithoutCalling: {
    anchorId: 'without-calling',
    eyebrow: 'Finding customers without calling',
    title: 'Bring the requests in, within the rules',
    intro: 'The allowed ways to find customers without cold calling them, in France, with the source of each rule.',
    ways: [
      {
        contextLabel: 'Contact or quote form',
        title: 'An "I agree to be called back" box, not pre-ticked',
        text: 'A dedicated box, ticked by the person themselves, stating who you are, what you offer and for how long, one year at most. Keep the date and time: it is your proof of consent to call back, to be kept for three years.',
        sourceName: 'CNIL, rules on telephone prospecting',
        sourceUrl: COLD_CALLING_CHECK_SOURCES.cnilPhoneProspecting,
      },
      {
        contextLabel: 'Google Business Profile',
        title: 'Your service area, your opening hours and your reviews',
        text: 'A complete profile, with your service area, your opening hours, photos and customer reviews, helps local people find you and call you themselves. It is advice from a chamber of commerce, not an obligation.',
        sourceName: 'CCI Savoie, the Google business listing',
        sourceUrl: COLD_CALLING_CHECK_SOURCES.cciGoogleListing,
      },
      {
        contextLabel: 'E-mail to professionals',
        title: 'A message related to their activity, with a link to refuse',
        text: 'To sell to businesses, an e-mail related to their activity does not need prior consent, if it says who you are and lets them refuse simply and free of charge. To a private individual, you need their consent, except for an existing customer and similar products.',
        sourceName: 'CNIL, rules on prospecting by e-mail and text message',
        sourceUrl: COLD_CALLING_CHECK_SOURCES.cnilEmailProspecting,
      },
    ],
    calloutEmphasizedIntro: 'The simplest way: a website that receives requests.',
    calloutText:
      'One page per service and per area, a short form with the consent box, linked to your Google Business Profile: customers come to you, in writing. That is what I do for tradespeople, freelancers and small businesses, near Rennes and remotely.',
    calloutFootnote: 'Showcase website from €1,500, first call free.',
    freelanceRennesLinkLabel: 'See my web developer offers in Rennes',
    homeLinkLabel: 'Discover Dibodev',
  },
  faq: {
    eyebrow: 'Frequently asked questions',
    title: 'Cold calling in France: the questions I am asked',
    questions: [
      {
        question: 'Does Bloctel still exist?',
        answer:
          'No. Bloctel was abolished on 11 August 2026. Checking that a number is not on it is therefore pointless: since that date, the logic is reversed, and you need the person’s prior consent to call them, unless you have a contract in progress with them.',
      },
      {
        question: 'Can I call a customer who asked me for a quote?',
        answer:
          'No text or official guidance clearly settles it to date: the question was asked during a CNIL and DGCCRF webinar, with no written answer. The safest way: add to your quote form a box that is not pre-ticked, "I agree to be called back by phone about my request", and keep the date and time. For energy renovation and home adaptation, the decree only allows you to call the person back within 5 working days of their request, about what they asked for, if you can prove that request.',
      },
      {
        question: 'Can I call my former customers back?',
        answer:
          'Only with their consent, unless the contract is still in progress. A contract is in progress as long as a subscription, a contract not terminated, a fixed-term contract or a commercial warranty is still running. When the work is finished and paid, or only covered by the legal warranty, it no longer is: you need the person’s prior consent.',
      },
      {
        question: 'How do I collect valid consent?',
        answer:
          'Never by phone: you cannot call someone to ask whether they agree to be called. It takes a clear action on their part, for example a dedicated box that is not pre-ticked on your form, your quote or in your shop, stating your name, what you offer and a duration of one year at most, with no tacit renewal. Keep the proof for three years (date, time, information given) and let the person withdraw their consent just as simply, even orally.',
      },
      {
        question: 'Can I use a bought list of numbers?',
        answer:
          'For private individuals, only if each person agreed to be called by your business, for what you sell, and if you can prove it. Cold calling done by a provider on your behalf is covered too, and whoever benefits from the calls is presumed responsible. A number found in a directory or a listing is not consent. For professionals, the CNIL rules apply.',
      },
      {
        question: 'What about text messages and e-mails?',
        answer:
          'They follow the CNIL rules. To a private individual: prior consent, except for an existing customer and similar products or services. To a professional: no prior consent if the message relates to their activity, provided you inform them and let them refuse simply; generic addresses (contact@…) are not subject to these rules. For energy renovation and home adaptation, prospecting by text message, e-mail and social networks is banned, outside a contract in progress.',
      },
      {
        question: 'On which days and at what times can you still call?',
        answer:
          'When the call is allowed (contract in progress or proven consent): Monday to Friday except public holidays, from 10am to 1pm and from 2pm to 8pm, and 4 calls or attempts at most per person over 30 days. A date and time chosen by the person are an exception to the days and hours, not to the number of calls. Your number must not be hidden, you say who you are and that the call is commercial, and if the person refuses, the call ends and you do not call back. They are only bound after signing a written confirmation.',
      },
      {
        question: 'What are the risks?',
        answer:
          'An administrative fine of up to €75,000 for a natural person and €375,000 for a company, published at the expense of the sanctioned party; the DGCCRF announces fines calculated per call. Any contract obtained through a banned call is void. And abuse of weakness committed through cold calling is punishable by 5 years in prison and a €500,000 fine.',
      },
      {
        question: 'Does it apply to B2B?',
        answer:
          'Not the 2025 law, which protects consumers, nor the rules on days, hours and frequency. To call a professional, the CNIL asks that the offer relates to their trade (software offered to an IT director, for example), that you introduce yourself on every call and that they can refuse simply and free of charge. Grey area: a tradesperson or a micro-entrepreneur reached on their personal mobile. No text settles it; when in doubt, treat them as a private individual.',
      },
      {
        question: 'Is the consent I collected before 11 August 2026 still valid?',
        answer:
          'No text clearly settles it to date. The most careful approach: keep only the consents that already meet the rules of the decree (clear action, your name, what you offer, one year at most, dated proof), and ask again for the others, in writing, never by phone.',
      },
    ],
  },
  relatedArticles: {
    title: 'Read next',
    intro: 'Three articles on bringing customers to you.',
  },
  contactCta: {
    title: 'What if customers called you?',
    description:
      'I help you bring the requests in instead of calling: website, Google Business Profile, form with consent. Describe your business, I reply within 24 hours.',
    button: 'Get customers to call you',
  },
}
