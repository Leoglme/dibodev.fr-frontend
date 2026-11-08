import type { DibodevLegalNoticePageContent } from '~/core/types/DibodevLegalNoticePage'
import { GDPR_CNIL_RECOMMENDATION_SOURCE, GDPR_LEGAL_NOTICE_SOURCE } from '~/core/constants/gdprCookieCheck/pageShared'
import { LEGAL_NOTICE_GENERATOR_WORDING_EN } from '~/core/constants/legalNotice/generatorWording.en'
import {
  LEGAL_NOTICE_CNIL_COMMERCIAL_SOURCE,
  LEGAL_NOTICE_LCEN_ECOMMERCE_SOURCE,
  LEGAL_NOTICE_LCEN_PUBLISHER_SOURCE,
  LEGAL_NOTICE_LCEN_SANCTIONS_SOURCE,
  LEGAL_NOTICE_STATUS_ICONS,
} from '~/core/constants/legalNotice/pageShared'
import { CONSUMER_MEDIATION_SOURCE } from '~/core/constants/tools/officialSources'

export const LEGAL_NOTICE_GENERATOR_PAGE_EN: DibodevLegalNoticePageContent = {
  meta: {
    title: 'Free legal notice generator for a website in France',
    description:
      'Free, no e-mail: legal notice + privacy policy for a website in France, by status, hosting provider prefilled, in Word or to copy.',
    inLanguage: 'en-GB',
    schemaAbout:
      'Legal notice (mentions légales) and privacy policy of a website in France (French digital economy law, GDPR)',
  },
  applicationName: 'Legal notice and privacy policy generator for a website in France',
  breadcrumbLabel: 'Legal notice generator',
  shareImage: {
    titleLines: ['Legal notice', 'and privacy policy'],
    highlight: 'Legal notice',
    subtitle: 'For a website run in France, written in French',
    badge: 'Free · no e-mail · Word',
    alt: 'Free legal notice and privacy policy generator for a website in France, by dibodev.fr',
  },
  hero: {
    titleBefore: '',
    titleHighlight: 'Legal notice',
    titleAfter: ' and privacy policy generator for a website in France',
    reassurances: ['Free, no e-mail', 'Nothing is saved', 'Word and copy in one click'],
    aboutTitle: 'In short',
    description:
      'Every business website in France, sole traders included, must say who publishes it, how to reach them, where they are registered and who hosts the site. As soon as it collects data, it also needs a privacy policy. This generator writes both live from your answers, for your status: sole trader, company, association, regulated profession or private individual. The addresses of common hosting providers (OVHcloud, o2switch, IONOS, Wix, Shopify…) are already filled in, the retention periods come from CNIL texts, and anything missing stays marked “to complete”. The documents are in French, for a website run in France, to copy or in Word.',
    authorIntro: 'Tool made by',
    authorBio:
      'freelance developer near Rennes, France. I build and tidy up websites for small businesses, and I keep finding the same forgotten legal pages: I wrote the generator I would have liked to hand them.',
  },
  generator: LEGAL_NOTICE_GENERATOR_WORDING_EN,
  rules: {
    anchorId: 'what-the-law-says',
    eyebrow: 'What French law says',
    title: 'Legal notice and GDPR in France in 2026, text by text',
    intro:
      'The rules the generator applies, re-read on 8 November 2026 on Légifrance, Service-public.fr and the CNIL website.',
    facts: [
      {
        contextLabel: 'French digital economy law, article 1-1',
        title: 'Who publishes the website, and how to reach them',
        text: 'A natural person shows their full name, address, phone number and, when registered, their number at the trade or crafts register. A company shows its name, registered office, phone number, registration number and share capital. In both cases, the website names its publication director.',
        sourceName: LEGAL_NOTICE_LCEN_PUBLISHER_SOURCE.name,
        sourceUrl: LEGAL_NOTICE_LCEN_PUBLISHER_SOURCE.url,
      },
      {
        contextLabel: 'Same law, article 1-1, 4° and II',
        title: 'The hosting provider, and the private individual’s anonymity',
        text: 'The website gives the name, address and phone number of its hosting provider. A private individual publishing on a non-professional basis may stay anonymous: they show only the host’s name and address, provided they gave the host their identity.',
        sourceName: LEGAL_NOTICE_LCEN_PUBLISHER_SOURCE.name,
        sourceUrl: LEGAL_NOTICE_LCEN_PUBLISHER_SOURCE.url,
      },
      {
        contextLabel: 'Same law, article 19',
        title: 'E-mail, VAT and regulated professions',
        text: 'A business selling online adds its e-mail address and VAT number. A regulated profession also gives its professional rules, its title, the State that granted it and the order or body it is registered with.',
        sourceName: LEGAL_NOTICE_LCEN_ECOMMERCE_SOURCE.name,
        sourceUrl: LEGAL_NOTICE_LCEN_ECOMMERCE_SOURCE.url,
      },
      {
        contextLabel: 'Same law, article 1-2',
        title: 'Up to one year in prison and €75,000',
        text: 'That is the penalty when this information is missing, for a natural person or a company manager. For the company itself, the fine is the one of article 131-38 of the French criminal code, that is €375,000 according to Service-public.fr.',
        sourceName: LEGAL_NOTICE_LCEN_SANCTIONS_SOURCE.name,
        sourceUrl: LEGAL_NOTICE_LCEN_SANCTIONS_SOURCE.url,
      },
      {
        contextLabel: 'Service-public.fr, checked on 13 October 2026',
        title: 'A privacy policy, linked from every page',
        text: 'As soon as it collects data, the website says who is responsible, which data, why, on which legal basis, who receives it, how long it is kept, what your rights are and how to complain to the CNIL. The link must be visible on every page, separate from the terms of sale. Failure to inform: a €1,500 fine.',
        sourceName: GDPR_LEGAL_NOTICE_SOURCE.name,
        sourceUrl: GDPR_LEGAL_NOTICE_SOURCE.url,
      },
      {
        contextLabel: 'CNIL reference framework, 23 September 2021',
        title: '3 years for a contact who does not buy',
        text: 'The data of a prospect who did not become a customer is kept 3 years from its collection or their last contact. Customer data is kept for the relationship, then archived within the limitation period.',
        sourceName: LEGAL_NOTICE_CNIL_COMMERCIAL_SOURCE.name,
        sourceUrl: LEGAL_NOTICE_CNIL_COMMERCIAL_SOURCE.url,
      },
      {
        contextLabel: 'CNIL recommendation, 17 September 2020',
        title: 'Cookies: consent first, choice kept 6 months',
        text: 'Trackers that are not essential wait for the visitor’s consent, and refusing must be as easy as accepting. The CNIL considers keeping the choice, consent or refusal, for 6 months a good practice. Exempted audience measurement keeps its trackers 13 months and its data 25 months at most.',
        sourceName: GDPR_CNIL_RECOMMENDATION_SOURCE.name,
        sourceUrl: GDPR_CNIL_RECOMMENDATION_SOURCE.url,
      },
      {
        contextLabel: 'French consumer code, articles L612-1 and L616-1',
        title: 'Selling to consumers? A mediator',
        text: 'Every business selling to consumers, whatever its size, offers a consumer mediator and shows its details on its website. Without this information: up to €3,000 for a sole trader, €15,000 for a company.',
        sourceName: CONSUMER_MEDIATION_SOURCE.name,
        sourceUrl: CONSUMER_MEDIATION_SOURCE.url,
      },
    ],
    calloutEmphasizedIntro: 'This generator writes a template, not legal advice:',
    calloutText:
      'it covers a showcase website or a small online shop. It writes neither terms of sale nor terms of use. For a website handling health data, running targeted advertising or selling abroad, have the result reviewed by a lawyer.',
  },
  statuses: {
    anchorId: 'status-by-status',
    eyebrow: 'By status',
    title: 'What your legal notice must contain, status by status',
    intro:
      'The base is the same for everyone: who publishes, how to reach them, who hosts. What changes is the registration.',
    cards: [
      {
        key: 'micro',
        icon: LEGAL_NOTICE_STATUS_ICONS.micro,
        iconTone: 'violet',
        eyebrow: 'Micro-business, sole trader',
        title: 'Your name, followed by “EI”',
        text: 'Full name with “entrepreneur individuel” or “EI”, address, phone number, e-mail, SIREN, registration (RCS or RNE), and VAT number or the exemption line “TVA non applicable, article 293 B du CGI”.',
        note: 'You are also the publication director.',
        link: null,
      },
      {
        key: 'company',
        icon: LEGAL_NOTICE_STATUS_ICONS.company,
        iconTone: 'cyan',
        eyebrow: 'SARL, EURL, SAS, SASU, SA',
        title: 'Company name, form and capital',
        text: 'Name, legal form and share capital, registered office, phone number, e-mail, RCS number with the city of the register, EU VAT number, and the name of the publication director, usually the manager or the chair.',
        note: '',
        link: null,
      },
      {
        key: 'association',
        icon: LEGAL_NOTICE_STATUS_ICONS.association,
        iconTone: 'green',
        eyebrow: '1901-law association',
        title: 'The same rules as any legal person',
        text: 'Name of the association, registered office, phone number, and the publication director, often the chair. The RNA number is not required by law, but it helps identify the association: the generator adds it if you give it.',
        note: '',
        link: null,
      },
      {
        key: 'liberal',
        icon: LEGAL_NOTICE_STATUS_ICONS.liberal,
        iconTone: 'amber',
        eyebrow: 'Regulated profession',
        title: 'Your title and your order',
        text: 'On top of the mentions of your status: the professional title, the State that granted it, the order or body you are registered with, and your professional rules, with where to read them.',
        note: 'Lawyer, architect, chartered accountant, health professions…',
        link: null,
      },
    ],
  },
  privacyGuide: {
    anchorId: 'privacy-policy',
    eyebrow: 'Privacy policy',
    title: 'What your privacy policy must contain',
    intro:
      'Article 13 of the GDPR sets the list. The generator follows this order, which is also the order in which a visitor looks for an answer.',
    pitfallLabel: 'The usual mistake',
    items: [
      {
        title: 'Who is responsible for the data',
        text: 'The name of the business or association, its address and an e-mail for any question. The data protection officer, if there is one.',
        pitfall: 'A “noreply” address, or the one of the agency that built the website.',
      },
      {
        title: 'Which data, why, on which legal basis',
        text: 'One line per use: contact form, booking, newsletter, customer account, payment, analytics. For each, the legal basis: contract, legitimate interest, legal obligation or consent.',
        pitfall: 'Writing “we collect your data to improve our services” without saying which.',
      },
      {
        title: 'Who receives it',
        text: 'You, and the providers that process it on your behalf: hosting provider, e-mail tool, payment provider, analytics tool.',
        pitfall: 'Forgetting the newsletter tool, which holds the whole subscriber list.',
      },
      {
        title: 'Transfers outside the European Union',
        text: 'Google, Meta and many payment providers may send data to the United States. The policy says so, with the safeguard that frames the transfer.',
        pitfall: 'Promising that “the data never leaves France” with Google Analytics installed.',
      },
      {
        title: 'How long you keep it',
        text: 'One period per use: 3 years after the last contact for a prospect, the relationship then the limitation period for a customer, 10 years for invoices.',
        pitfall: '“As long as necessary”, which says nothing.',
      },
      {
        title: 'The visitor’s rights, and the CNIL',
        text: 'Access, rectification, erasure, restriction, objection, portability, withdrawal of consent, the address to write to, and the right to complain to the CNIL.',
        pitfall: 'Pointing to a contact form that no longer works.',
      },
      {
        title: 'Cookies and the banner',
        text: 'Which trackers need consent, which tool collects it, and the “Manage my cookies” link to change one’s mind.',
        pitfall: 'Describing a banner the website does not have, or no longer has.',
      },
    ],
  },
  mistakes: {
    anchorId: 'common-mistakes',
    eyebrow: 'In the field',
    title: 'The mistakes seen on small business websites',
    intro: 'What I find most often when I open the legal notice page of a small business website.',
    cards: [
      {
        key: 'host',
        icon: 'Server',
        iconTone: 'violet',
        eyebrow: 'Hosting provider',
        title: 'No host, or the wrong one',
        text: 'No hosting provider at all, or the domain registrar instead of the website’s host. A website built on Wix or Shopify is hosted by Wix or Shopify, even if the domain was bought elsewhere.',
        note: '',
        link: null,
      },
      {
        key: 'registration',
        icon: 'ClipboardCheck',
        iconTone: 'cyan',
        eyebrow: 'Registration',
        title: 'No SIREN, no RCS',
        text: 'A trading name and an address, but no number. Yet that is what lets a customer check the business exists.',
        note: '',
        link: null,
      },
      {
        key: 'copied',
        icon: 'Copy',
        iconTone: 'amber',
        eyebrow: 'Copy and paste',
        title: 'A policy copied from another website',
        text: 'It shows another company’s name, an online shop the website does not have, or tools it does not use. The visitor no longer knows what is true.',
        note: '',
        link: null,
      },
      {
        key: 'cookies',
        icon: 'Eye',
        iconTone: 'pink',
        eyebrow: 'Cookies',
        title: 'A banner that blocks nothing',
        text: 'The banner shows, but Google Analytics or the YouTube video are already loaded before any click. The text says one thing, the website does another.',
        note: '',
        link: null,
      },
      {
        key: 'webmaster',
        icon: 'Mail',
        iconTone: 'green',
        eyebrow: 'Contact',
        title: 'The webmaster’s e-mail from five years ago',
        text: 'The contact address for data is the one of the agency or the nephew who built the website, and nobody reads it any more. A data access request goes unanswered.',
        note: '',
        link: null,
      },
      {
        key: 'outdated',
        icon: 'CalendarCheck',
        iconTone: 'violet',
        eyebrow: 'Outdated texts',
        title: 'References from another era',
        text: '“Under article 6-III of the LCEN…”: since May 2024, the publisher’s mentions fall under article 1-1 of the law. A legal page still quoting the old article has often not been re-read for years.',
        note: '',
        link: null,
      },
    ],
  },
  faq: {
    eyebrow: 'Frequently asked questions',
    title: 'Legal notice and privacy policy in France: your questions',
    questions: [
      {
        question: 'Is a legal notice mandatory for a sole trader in France?',
        answer:
          'Yes. A micro-entrepreneur shows their name followed by “EI”, their address, phone number, e-mail, registration number and, if they have one, VAT number, plus the hosting provider. Without it, French law provides up to one year in prison and a €75,000 fine for a natural person.',
      },
      {
        question: 'Can I stay anonymous on my website?',
        answer:
          'Only if you publish on a non-professional basis, as a private individual. The law then lets you show only your host’s name and address, provided you gave it your identity. As soon as there is a business activity, even a micro-business, anonymity is not possible.',
      },
      {
        question: 'What is the difference between legal notice, terms of sale, terms of use and privacy policy?',
        answer:
          'The legal notice says who publishes the website and who hosts it. Terms of sale set the conditions of sale: they are mandatory when you sell to consumers. Terms of use set the rules of a service, useful when the website has accounts or content posted by visitors. The privacy policy explains what you do with personal data, and must stay separate from the terms. This generator writes the first and the last.',
      },
      {
        question: 'Do I need a data protection officer (DPO)?',
        answer:
          'The GDPR requires one in three cases: a public body, an activity that monitors people regularly and on a large scale, or that processes sensitive or criminal data on a large scale. A craftsperson, a shop or a practice with a showcase website usually does not need one. If you appointed one, their details go in the privacy policy.',
      },
      {
        question: 'What is the risk if the legal notice is missing?',
        answer:
          'Up to one year in prison and a €75,000 fine for a natural person or a manager, and €375,000 for a company. Failure to inform about personal data is punished by €1,500, and a missing consumer mediator by €3,000 (sole trader) or €15,000 (company). The most common risk is simpler: a customer or a competitor reporting it, and a website that inspires less trust.',
      },
      {
        question: 'Where should the legal notice link go?',
        answer:
          'At the bottom of every page, in the footer: the law asks for easy, direct and permanent access. Put the privacy policy link next to it, visible on every page, and, if you have a cookie banner, a “Manage my cookies” link to change one’s mind at any time.',
      },
      {
        question: 'Does an association need a legal notice?',
        answer:
          'Yes, like any legal person publishing a website: its name, registered office, a phone number, the name of the publication director (often the chair) and the host. The RNA number is not required by law, but it reassures. If the association collects memberships or donations online, it also needs a privacy policy.',
      },
      {
        question: 'Do I also need the legal notice in English?',
        answer:
          'The generator writes in French, for a website run in France. If your website has an English version, you can add a translation of both pages there, keeping the French version. The English and Spanish interfaces of this tool produce the same documents in French.',
      },
      {
        question: 'How much does a lawyer charge for a legal notice?',
        answer:
          'It depends on the status, on what the website does (online sales, customer accounts, advertising) and on the review time: I give no figure, ask a lawyer for a quote. For a simple showcase website, this template covers the essentials. For an online shop, health data or targeted advertising, a legal professional’s opinion is worth the cost.',
      },
      {
        question: 'Is this generator enough?',
        answer:
          'No. It writes a template from your answers, with the rules of the law and the CNIL periods, but it is not legal advice. Read every line, fill in what is marked “to complete”, and check that the text describes what your website really does: a cookie banner described but missing is worse than no text.',
      },
      {
        question: 'My website is on Wix or Shopify: who is the hosting provider?',
        answer:
          'The platform. For Wix, the French contract names Wix.com Ltd., in Tel Aviv; for Shopify, Shopify International Limited, in Dublin; for WordPress.com, Automattic Inc., in San Francisco. The registrar of your domain name (OVHcloud, Gandi, IONOS…) is not the host if it only handles the domain. The generator prefills these addresses.',
      },
      {
        question: 'Do I have to show my home address?',
        answer:
          'A business must give its address: if your registered office is at home, that is your address, unless you use a domiciliation company or premises. A private individual publishing without business activity may show nothing but their host. The generator offers that option only for the “private individual” status.',
      },
    ],
  },
  contactCta: {
    title: 'Would you like me to check your website?',
    description:
      'Send me the address. I read your legal pages, look at what the website loads before the cookie banner, and tell you what is missing, within 24 hours.',
    button: 'Send my website',
    gdprCheckLabel: 'Check my website’s cookies',
  },
  mobileBar: {
    text: 'A question about your legal notice?',
    button: 'Contact me',
  },
}
