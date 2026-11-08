import type { DibodevWebAccessibilityScopePageContent } from '~/core/types/DibodevWebAccessibilityScopePage'
import {
  WEB_ACCESSIBILITY_ARTICLE_47_1_SOURCE,
  WEB_ACCESSIBILITY_ARTICLE_47_SOURCE,
  WEB_ACCESSIBILITY_DECREE_2019_768_SOURCE,
  WEB_ACCESSIBILITY_DGCCRF_PROFESSIONALS_SOURCE,
  WEB_ACCESSIBILITY_RGAA_HOME_SOURCE,
} from '~/core/constants/webAccessibilityScope/pageShared'

export const WEB_ACCESSIBILITY_SCOPE_PAGE_EN: DibodevWebAccessibilityScopePageContent = {
  meta: {
    title: 'Web accessibility law in France: does it apply to you?',
    description:
      'Free test in 5 questions: RGAA, 2005 law, European Accessibility Act of 28 June 2025. Must your website in France be accessible, since when, what to do?',
    inLanguage: 'en-GB',
    schemaAbout:
      'Digital accessibility obligations of websites in France: RGAA, article 47 of the 2005 law and European Accessibility Act',
  },
  breadcrumbLabel: 'Web accessibility: am I concerned?',
  shareImage: {
    titleLines: ['Web accessibility in France:', 'is my website', 'concerned?'],
    highlight: 'concerned',
    subtitle: 'RGAA, 2005 law, European Accessibility Act of 28 June 2025',
    badge: 'Free · 5 questions · 2 minutes',
    alt: 'Web accessibility in France: is my website concerned? Free test on dibodev.fr',
  },
  hero: {
    titleBefore: 'Web accessibility in France: is your website ',
    titleHighlight: 'concerned',
    titleAfter: ', and since when?',
    reassurances: [
      'Free, 5 questions, 2 minutes',
      'Result without e-mail',
      'Official texts re-read on 8 November 2026',
    ],
    description:
      'Since 28 June 2025, the European Accessibility Act adds to the French RGAA: websites selling online to consumers must also be usable by disabled people. But a local shop, an association, a town hall of 500 inhabitants, a craftsman’s showcase website: who is really targeted? This test crosses your organisation, your size, what your website does and your customers, and tells you what French law asks of you, and since when.',
    authorIntro: 'Test designed by',
    authorBio:
      'freelance developer near Rennes. I build and rebuild websites and business tools for small and mid-sized companies, with accessibility in the specifications from day one.',
  },
  mobileContactBar: {
    text: 'A first opinion on your website?',
    buttonLabel: 'Contact me',
  },
  facts: {
    anchorId: 'rules',
    eyebrow: 'What the texts say',
    title: 'Who must make their website accessible: eight checked points',
    intro:
      'The rules re-read on 8 November 2026 on Légifrance, the RGAA website (DINUM) and the DGCCRF. Two texts coexist in France: article 47 of the 2005 law and the European Accessibility Act.',
    facts: [
      {
        contextLabel: '2005 law, article 47',
        title: 'Public bodies, whatever their size',
        text: 'The websites, intranets, extranets and mobile apps of public-law entities must be accessible to disabled people, as must those of private organisations entrusted with a public service mission. No size threshold applies: a small town is targeted just like a ministry.',
        sourceName: 'Law no. 2005-102 of 11 February 2005, article 47 (version of 8 September 2023)',
        sourceUrl: WEB_ACCESSIBILITY_ARTICLE_47_SOURCE.url,
      },
      {
        contextLabel: 'Above €250M',
        title: 'Large companies, since 2019',
        text: 'Article 47 also targets companies whose turnover in France exceeds €250 million, on average over the last three closed financial years. For them, new websites have been concerned since 1 October 2019, older websites since 1 October 2020, apps since 1 July 2021.',
        sourceName: 'Decree no. 2019-768 of 24 July 2019, articles 2 and 10',
        sourceUrl: WEB_ACCESSIBILITY_DECREE_2019_768_SOURCE.url,
      },
      {
        contextLabel: 'Statement and plan',
        title: 'An accessibility statement and a notice on the home page',
        text: 'The organisations concerned publish an accessibility statement and a multi-year plan of three years at most, broken down into yearly action plans. The home page clearly states whether the website is compliant or not, and every website lets users easily report an accessibility defect.',
        sourceName: 'Law no. 2005-102 of 11 February 2005, article 47, III and IV',
        sourceUrl: WEB_ACCESSIBILITY_ARTICLE_47_SOURCE.url,
      },
      {
        contextLabel: 'Arcom',
        title: 'Up to €50,000, after a public formal notice',
        text: 'Arcom checks, issues a public formal notice, then may fine: up to €50,000 for a public body whose website is not accessible, and up to €25,000 for a failure on the statement, the plan or the notice, the only point checked at large companies. A new fine is possible if the failure still lasts six months later.',
        sourceName: 'Law no. 2005-102 of 11 February 2005, article 47-1 (ordinance no. 2023-859)',
        sourceUrl: WEB_ACCESSIBILITY_ARTICLE_47_1_SOURCE.url,
      },
      {
        contextLabel: 'RGAA 4.1.2',
        title: '106 criteria, and a version 5 announced for the end of 2026',
        text: 'The French general accessibility improvement framework (RGAA), published by the DINUM, has 106 criteria in its version 4.1.2, updated on 18 April 2023. A company may also refer to the international WCAG 2.1 rules, levels A and AA. RGAA 5 is being written: the DINUM asks not to suspend work while waiting for it.',
        sourceName: 'accessibilite.numerique.gouv.fr (DINUM), RGAA home page and scope',
        sourceUrl: WEB_ACCESSIBILITY_RGAA_HOME_SOURCE.url,
      },
      {
        contextLabel: '28 June 2025',
        title: 'The European Accessibility Act targets online sales to consumers',
        text: 'Since 28 June 2025, some services must meet accessibility requirements in France, whatever the status of the company: e-commerce, telephony, access to audiovisual media, passenger transport (websites, apps, tickets, information), consumer banking services, e-books.',
        sourceName:
          'DGCCRF, "Professionnels : vos produits et services doivent être conformes à la directive Accessibilité", 13 November 2025',
        sourceUrl: WEB_ACCESSIBILITY_DGCCRF_PROFESSIONALS_SOURCE.url,
      },
      {
        contextLabel: 'Micro-enterprises',
        title: 'Exempt for services, but an existing website gets no delay',
        text: 'A company with fewer than 10 employees and an annual turnover or balance sheet of €2 million at most has no accessibility obligation for the services it provides. For the others, the DGCCRF states that a website or an app is not a product: an existing online shop has no transition period. Only contracts signed with consumers before 28 June 2025 may run until 28 June 2030 at the latest.',
        sourceName: 'DGCCRF, sheet for professionals, 13 November 2025',
        sourceUrl: WEB_ACCESSIBILITY_DGCCRF_PROFESSIONALS_SOURCE.url,
      },
      {
        contextLabel: 'DGCCRF',
        title: 'Fines of €7,500, cumulative',
        text: 'The DGCCRF has been checking since 28 June 2025, notably after reports, together with Arcom, ARCEP, Banque de France, ACPR and AMF. It may order compliance, with penalty payments and publicity, and offences are 5th-class contraventions: fines of €7,500, cumulative according to the number of offences found.',
        sourceName: 'DGCCRF, sheet for professionals, 13 November 2025',
        sourceUrl: WEB_ACCESSIBILITY_DGCCRF_PROFESSIONALS_SOURCE.url,
      },
    ],
    calloutEmphasizedIntro: 'What I do for you:',
    calloutText:
      'I look at your website, tell you what really blocks, and fix or rebuild what is needed, aiming at RGAA and WCAG 2.1 AA. Remotely, first exchange free.',
  },
  cases: {
    anchorId: 'cases',
    eyebrow: 'Case by case',
    title: 'Public body, e-commerce, association, craftsman: who is concerned',
    intro: 'The six situations that come up most often, with the text that applies in France.',
    items: [
      {
        title: 'Town hall, inter-municipality, school, public body',
        description:
          'Concerned whatever its size, since 2019 or 2020 for websites: RGAA, accessibility statement, multi-year plan and home page notice. Checked by Arcom.',
      },
      {
        title: 'Company above €250M of turnover in France',
        description:
          'Concerned by article 47 since 1 October 2019 or 2020: accessible website, statement, plan and notice. And by the European Accessibility Act if it also sells online to consumers.',
      },
      {
        title: 'Online sales to consumers, except micro-enterprises',
        description:
          'Concerned since 28 June 2025 by the European Accessibility Act: online shop, paid booking, subscription. Accessibility information to publish, checks by the DGCCRF.',
      },
      {
        title: 'Banking, passenger transport, telecoms, video, e-books',
        description:
          'Concerned since 28 June 2025 for some elements: websites, apps, tickets and information. The checking authority depends on the sector: DGCCRF, Arcom, ARCEP, Banque de France.',
      },
      {
        title: 'Micro-enterprise, craftsman, freelancer',
        description:
          'Fewer than 10 employees and €2M at most: no obligation for services, even with online sales. A showcase website is targeted by no text. Recommended, and better for everyone’s reading.',
      },
      {
        title: 'Association',
        description:
          'Outside article 47, unless it has a public service mission, mostly public funding or provides essential services to the public. Targeted by the European Accessibility Act if it sells online to consumers without being a micro-enterprise.',
      },
    ],
  },
  timeline: {
    anchorId: 'dates',
    eyebrow: 'The dates',
    title: 'Three dates to remember',
    intro: 'Set by the decree of 24 July 2019 and by the European Accessibility Act.',
    items: [
      {
        title: '2019-2020: public sector and large companies',
        description:
          'Websites accessible since 23 September 2019 or 2020 for the public sector, 1 October 2019 or 2020 for companies above €250M; mobile apps in 2021.',
      },
      {
        title: '28 June 2025: the European Accessibility Act applies',
        description:
          'Online sales to consumers, banking, transport, telecoms, media, e-books: new services as well as existing websites, except micro-enterprises.',
      },
      {
        title: '28 June 2030: end of the transition period',
        description:
          'Deadline for service contracts concluded with consumers before 28 June 2025, and for products already used to provide the service. A website does not benefit from it.',
      },
    ],
  },
  method: {
    eyebrow: 'Where to start',
    title: '6 steps to do this week',
    intro: 'Without any tool, on your own website. Each one matches an RGAA criterion.',
    steps: [
      {
        label: 'Images',
        title: 'An alternative text for informative images',
        description:
          'A product photo, a diagram, a clickable logo: each has a text saying what it shows. Decorative images stay silent (criterion 1.1).',
      },
      {
        label: 'Language',
        title: 'The language and title of each page',
        description:
          'The page declares its language (lang="en") so that the screen reader pronounces it right, and each tab has a title saying where you are (criteria 8.3 and 8.5).',
      },
      {
        label: 'Headings',
        title: 'Headings in order',
        description:
          'A single main heading, then subheadings that follow each other, without skipping a level for the sake of text size: it is the table of contents of those who cannot see the page (criterion 9.1).',
      },
      {
        label: 'Contrast',
        title: 'Text that reads on its background',
        description:
          'Light grey on white, white on yellow: if you squint to read, others will not manage (criterion 3.2).',
      },
      {
        label: 'Keyboard',
        title: 'The whole website with the Tab key',
        description:
          'Unplug the mouse: every link and button must be reachable in a logical order, with a visible outline around the active element (criteria 7.3, 10.7 and 12.8).',
      },
      {
        label: 'Forms',
        title: 'A label on every field, captions on videos',
        description:
          '"Name", "E-mail" written next to the field, not only in grey inside it; and captions for every video with speech (criteria 11.1 and 4.3).',
      },
    ],
  },
  faq: {
    eyebrow: 'Frequently asked questions',
    title: 'Your website’s accessibility: the questions I get',
    questions: [
      {
        question: 'Must my craftsman’s showcase website be accessible?',
        answer:
          'Not under French law: a showcase website without online sales, published by a private company under €250 million of turnover, is targeted neither by article 47 nor by the European Accessibility Act. It is still recommended: alternative texts, well-structured headings and explicit links also help Google understand your pages. No miracle for SEO, but no downside either.',
      },
      {
        question: 'I sell online: am I concerned?',
        answer:
          'Yes, if you sell to consumers in France and you are not a micro-enterprise (fewer than 10 employees and €2 million at most of turnover or balance sheet). Since 28 June 2025, your shop must meet the accessibility requirements of the French Consumer Code, and you publish information on how it meets them. An existing website gets no delay.',
      },
      {
        question: 'What is the RGAA?',
        answer:
          'The French general accessibility improvement framework, published by the DINUM. Its current version, 4.1.2, has 106 concrete criteria (images, colours, headings, forms, navigation…) with tests for each. It turns the European standard and the WCAG rules into a French method. A version 5 is announced for the end of 2026.',
      },
      {
        question: 'What is an accessibility statement?',
        answer:
          'A page saying, after an audit, whether your website is fully compliant (100% of the RGAA criteria), partially compliant (at least 50%) or not compliant, listing the inaccessible content and giving a way to report a problem, with recourse to the Défenseur des droits. It is mandatory for public bodies and companies above €250 million, and is updated at every redesign.',
      },
      {
        question: 'What is the risk if I do nothing?',
        answer:
          'For a public body, a fine of up to €50,000 imposed by Arcom after a public formal notice, and €25,000 for a missing statement, plan or notice (the only cap that applies to large companies). For an online shop targeted by the European Accessibility Act, fines of €7,500 per offence found by the DGCCRF, cumulative, and an order to comply.',
      },
      {
        question: 'Do WordPress, Shopify or Wix make my website accessible by default?',
        answer:
          'No. The tool may make things easier, but accessibility depends on the chosen theme, the plugins and above all the content you add: image alternative texts, headings, colours, form labels, videos. A theme sold as "accessible" still needs checking once filled.',
      },
      {
        question: 'How much does bringing a website into compliance cost?',
        answer:
          'It depends on the website: number of page templates, forms, checkout, starting theme. You start with an audit of a sample of representative pages, which gives the list of fixes and their order of importance; the quote comes next. On a new website, planning accessibility in the specifications costs far less than fixing it afterwards.',
      },
      {
        question: 'Is our association concerned?',
        answer:
          'Not by article 47, unless it is entrusted with a public service mission, mostly funded or controlled by public bodies, or provides essential services to the public or services for disabled people. By the European Accessibility Act, only if it sells online to consumers without being a micro-enterprise.',
      },
      {
        question: 'Is a town hall of 500 inhabitants concerned?',
        answer:
          'Yes. Article 47 targets all public-law entities, with no size threshold: the town’s website must be accessible, with an accessibility statement, a multi-year plan and the home page notice. A disproportionate burden may be claimed for specific content, with an alternative, but never for the whole website.',
      },
      {
        question: 'Is my mobile app concerned?',
        answer:
          'Under the same rules as the website. For a public body or a company above €250 million, apps have been targeted since 2021. Under the European Accessibility Act, an app that sells to consumers or gives access to a banking, transport or telecoms service has been targeted since 28 June 2025, like the website.',
      },
      {
        question: 'Must I caption my videos?',
        answer:
          'If your website is subject to the RGAA, yes: criterion 4.3 requires synchronised captions for pre-recorded videos with sound. For a public body, videos published before 23 September 2020 and live streams are exempt. For everyone else, it is a good habit: many videos are watched without sound.',
      },
      {
        question: 'Who checks?',
        answer:
          'Arcom for article 47 (public bodies and companies above €250 million), with checks that may be automated. The DGCCRF for the European Accessibility Act, notably after reports on SignalConso, together with Arcom (media, e-books), ARCEP, Banque de France, ACPR and AMF depending on the sector.',
      },
    ],
  },
  relatedArticles: {
    title: 'Read also',
    intro: 'Three articles on the websites and tools of small businesses.',
  },
  contactCta: {
    title: 'Would you like a first opinion on your website?',
    description:
      'Send me its address: I reply within 24 hours with what really blocks and the steps to take, and a quote only if fixes are needed.',
    button: 'Ask for a first opinion',
  },
}
