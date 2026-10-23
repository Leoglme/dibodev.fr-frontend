import type { DibodevEInvoicingCheckPageContent } from '~/core/types/DibodevEInvoicingCheckPage'
import { E_INVOICING_SOURCES } from '~/core/constants/eInvoicingCheck/pageShared'

export const E_INVOICING_CHECK_PAGE_EN: DibodevEInvoicingCheckPageContent = {
  meta: {
    title: 'French e-invoicing: is your software accredited?',
    description:
      'Type the name of your invoicing software: accredited platform, connected, or nothing yet. Official DGFiP list of 13 October 2026, 24 tools re-read. Free.',
    inLanguage: 'en-GB',
    schemaAbout: 'The French e-invoicing reform: accredited platforms and compatible solutions',
  },
  breadcrumbLabel: 'E-invoicing: my software',
  shareImage: {
    titleLines: ['French e-invoicing:', 'is your software', 'accredited?'],
    highlight: 'accredited',
    subtitle: 'Official DGFiP list of 13 October 2026, common tools re-read',
    badge: 'Free · instant result',
    alt: 'French e-invoicing: is your software accredited? Free checker on dibodev.fr',
  },
  hero: {
    titleBefore: 'French e-invoicing: is your software ',
    titleHighlight: 'accredited or connected',
    titleAfter: '?',
    reassurances: ['Free, no sign-up', 'Official DGFiP list of 13 October 2026', 'Sources re-read on 23 October 2026'],
    description:
      'Since 1 September 2026, every business in France must be able to receive its invoices through an accredited platform; small businesses will also have to issue them that way from 1 September 2027. The DGFiP registers the platforms, but most invoicing tools are not one: they go through a partner, named or not. This tool crosses the official list with the publishers’ pages and tells you where you stand.',
    authorIntro: 'Tool built by',
    authorBio:
      'freelance developer near Rennes. I connect business software and in-house tools to accredited platforms, and automate quotes and invoices for small businesses, remotely.',
  },
  checker: {
    softwareLabel: 'Your invoicing software',
    softwarePlaceholder: 'E.g. EBP, Henrri, Pennylane, Excel…',
    softwareHint:
      'Type the name of the tool that makes your invoices. Nothing is sent: the list is read inside the page.',
    submit: 'Check my software',
    suggestionsLabel: 'You may mean',
    suggestionPlatformDetail: 'accredited platform',
    suggestionPendingDetail: 'file pending',
    resultLabel: 'Result',
    idleTitle: 'Is your software ready for French e-invoicing?',
    idleText:
      'Enter its name: you will know whether it is an accredited platform, connected to one, or whether something is missing before 1 September 2027.',
    verdictTitles: {
      accredited: '{name} is an accredited platform',
      pending: '{name} is waiting for its final registration',
      connected: '{name} is connected to {platform}',
      compatibleUnnamed: '{name} says it is compatible, without naming its platform',
      announced: '{name} is not on the official list',
      none: 'You are missing an accredited platform',
      publicSector: 'Chorus Pro only serves the public sector',
      ppf: 'The public portal no longer carries invoices',
      unknown: '“{query}” is on neither the official list nor my survey',
    },
    verdictTexts: {
      accredited:
        '{name} is on the list of accredited platforms published by the DGFiP (list of {listDate}). You can receive, and issue when your turn comes, with no other tool: what remains is to switch e-invoicing on in the software and to check your address in the directory.',
      pending:
        '{name} has filed a complete, compliant application but has not yet passed the interoperability tests that condition the final registration (DGFiP list of {listDate}). Ask the publisher for a date, and keep a fallback platform for reception.',
      connected:
        '{name} is not an accredited platform: it is a compatible solution that goes through {platform}, an accredited platform on the official list. This is a normal setup, provided for by the reform. Check that the connection is active in your account, and at what price.',
      compatibleUnnamed:
        '{name} announces that it goes through an accredited platform, but does not say which one on its page. Not necessarily a problem: ask for the platform’s name in writing, then check it in the official list (field above).',
      announced:
        '{name} announces it is coming, but the name appears neither among the {registeredCount} registered platforms nor among the {pendingCount} pending files of the list of {listDate}. Until it does, you have no platform to receive your invoices.',
      none: 'Excel, Word, a PDF template or paper do not make electronic invoices. To receive your suppliers’ invoices, mandatory since 1 September 2026, you need an accredited platform: several have a free plan. To issue, you have until 1 September 2027.',
      publicSector:
        'Chorus Pro remains the mandatory channel to invoice the French State, local authorities and hospitals. For your private customers, you need an accredited platform or a tool connected to one.',
      ppf: 'The public invoicing portal no longer issues or receives invoices: it keeps the business directory and passes data to the tax administration. There is no free public option; pick an accredited platform.',
      unknown:
        'I found “{query}” neither among the {registeredCount} registered platforms of the DGFiP list of {listDate}, nor among the pending files, nor among the {softwareCount} tools whose page I re-read. Either the publisher goes through a partner platform without saying so, or it is not ready.',
    },
    detailsTitle: 'What you should know',
    registrationDateLine: 'Registration number issued by the DGFiP on {date}.',
    registrationDateUnknownLine: 'Registered by the DGFiP (date not readable in the official list).',
    pendingLine: 'Complete, compliant file, waiting for the final registration.',
    partnerPlatformLine: 'Partner accredited platform: {platform}, registered on {platformDate}.',
    partnerPlatformDateUnknownLine: 'Partner accredited platform: {platform}, on the official list.',
    includedLine: 'E-invoicing is announced as included in the subscription.',
    notIncludedLine: 'All or part of the service is sold separately: check your plan.',
    publisherSourceLabel: 'Publisher’s page, read on {readAt}',
    publisherSourceDatedLabel: 'Publisher’s page dated {sourceDate}, read on {readAt}',
    officialSourceLabel: 'Official list of accredited platforms, DGFiP, {listDate}',
    stepsTitle: 'What I would do in your place',
    steps: {
      accredited: [
        'Switch e-invoicing on in the software settings, with the legal representative’s account.',
        'Check in the directory that your SIREN has an active reception address.',
        'Tell your main suppliers which channel to use, and test one received invoice.',
      ],
      pending: [
        'Ask the publisher for a date for the final registration, in writing.',
        'Meanwhile designate an accredited platform for reception, even if you change later.',
        'Keep the publisher’s answer: it is what proves a serious effort in case of an audit.',
      ],
      connected: [
        'In your account, check that the connection to the platform is active and that the directory registration is done.',
        'Read what your plan includes: some publishers charge the synchronisation separately.',
        'Test one invoice received from a supplier before the end of the year.',
      ],
      compatibleUnnamed: [
        'Write to the publisher: “Which accredited platform do you use for my invoices, and since when?”',
        'Check the name you get in the field above, or in the official list.',
        'Without a clear answer within two weeks, designate an accredited platform for reception yourself.',
      ],
      announced: [
        'Do not rely on an announcement: designate an accredited platform now to receive your invoices.',
        'Ask the publisher for a written timeline and what happens to your invoices meanwhile.',
        'Check the name again in the official list at each update.',
      ],
      none: [
        'Pick an accredited platform with a free plan for reception (list further down this page).',
        'Register your business in the directory with the legal representative’s account.',
        'By September 2027, move your quotes and invoices to a tool that issues the electronic format.',
      ],
      publicSector: [
        'Keep Chorus Pro for your public-sector customers.',
        'Pick an accredited platform, or a connected tool, for your private customers.',
        'Check that both addresses appear in the directory.',
      ],
      ppf: [
        'Pick an accredited platform from the official list; several are free for reception.',
        'Register your business in the directory through that platform.',
        'If you already issue, check that your software is connected to that platform or another.',
      ],
      unknown: [
        'Ask the publisher, in writing: “Are you an accredited platform, or connected to which one?”',
        'Check the name you get in the field above.',
        'Meanwhile, designate an accredited platform for reception: mandatory since 1 September 2026.',
      ],
    },
    disclaimer:
      'Verdict based on the official DGFiP list of 13 October 2026 and the publishers’ pages re-read on 23 October 2026. A publisher may change partner or obtain its registration after that date: the official list prevails.',
    idleCtaIntro:
      'Your invoices come out of an in-house tool, business software or a spreadsheet, and you do not know how to connect it? Describe your case, I answer within 24 hours.',
    idleCtaLabel: 'Describe my case',
    ctaIntro:
      'Want someone to handle it? I check your situation, connect your tool and automate the sending. First call free, answer within 24 hours.',
    ctaLabels: {
      accredited: 'Have my setup checked',
      pending: 'Get advice on a platform',
      connected: 'Have my connection checked',
      compatibleUnnamed: 'Get help to see clearly',
      announced: 'Get advice on a platform',
      none: 'Get equipped before 2027',
      publicSector: 'Get advice on a platform',
      ppf: 'Get advice on a platform',
      unknown: 'Get help to see clearly',
    },
    serviceLinkLabel: 'Connecting business software or an in-house tool: how I work',
  },
  mobileContactBar: {
    text: 'A doubt about your software or your in-house tool?',
    buttonLabel: 'Describe my case',
  },
  facts: {
    anchorId: 'reform',
    eyebrow: 'What is true today',
    title: 'French e-invoicing, in six checked facts',
    intro:
      'The calendar was set, then confirmed: no postponement. Here is what the official sources say, re-read on 23 October 2026.',
    facts: [
      {
        contextLabel: '1 September 2026',
        title: 'Receiving electronic invoices is mandatory for every business',
        text: 'Since 1 September 2026, every business established in France and subject to VAT, micro-businesses included, must be able to receive electronic invoices through an accredited platform. Issuing is mandatory from the same date for large and mid-sized companies, and from 1 September 2027 for SMEs, small businesses and micro-businesses.',
        sourceName: 'Entreprendre.Service-Public.gouv.fr, news of 1 September 2026',
        sourceUrl: E_INVOICING_SOURCES.servicePublicNews,
      },
      {
        contextLabel: 'Communiqué of 1 September 2026',
        title: 'No penalty in 2026, but neither postponement nor suspension',
        text: 'The government announced that no penalty would be applied in 2026 to businesses facing a real, documented difficulty followed by corrective actions. The DGFiP starter guide (July 2026) spells it out: this tolerance “is neither a postponement nor a suspension of the obligation”. A business that has started nothing is not covered.',
        sourceName: 'Compta Online, 5 October 2026, from the communiqué and the DGFiP guide',
        sourceUrl: E_INVOICING_SOURCES.comptaOnlineTolerance,
      },
      {
        contextLabel: '142 registered, 14 pending',
        title: 'The official list, and it alone, is authoritative',
        text: 'The DGFiP publishes the list of accredited platforms on impots.gouv.fr: as of 13 October 2026, 142 operators meet every condition, interoperability tests included, and 14 have filed a complete application pending final registration. An “accredited platform” logo on a publisher’s site proves nothing; tools that are not a platform themselves carry the “compatible solution” label and go through a partner.',
        sourceName: 'impots.gouv.fr, “Je consulte la liste des plateformes agréées”, updated 13 October 2026',
        sourceUrl: E_INVOICING_SOURCES.officialList,
      },
      {
        contextLabel: 'Directory',
        title: 'Your reception address must exist in the directory',
        text: 'Opened in September 2025, the e-invoicing directory lists the businesses subject to the reform and, for each, its accredited platform and invoicing addresses. Without a designated platform you have no active address: your suppliers cannot send you an electronic invoice, and the administration recommends starting the process without delay.',
        sourceName: 'economie.gouv.fr, “Qu’est-ce que l’annuaire de la facturation électronique ?”',
        sourceUrl: E_INVOICING_SOURCES.economieGouvDirectory,
      },
      {
        contextLabel: 'Public portal',
        title: 'The public portal no longer carries invoices',
        text: 'The public invoicing portal no longer issues or receives invoices: it keeps the directory and gathers data for the administration. There is therefore no free public option to issue. Several accredited platforms, however, announce a free plan, including Abby, Indy, Tiime and Dougs for small businesses.',
        sourceName: 'Compta Online, 5 October 2026; free plans from the publishers’ pages, survey of 20 October 2026',
        sourceUrl: E_INVOICING_SOURCES.comptaOnlineTolerance,
      },
      {
        contextLabel: 'Fines provided for',
        title: 'Capped fines, suspended in 2026',
        text: 'Failure to issue an electronic invoice: €50 per invoice, capped at €15,000 a year. Reception outside an accredited platform: formal notice, then €500, then €1,000 per further three-month period. Transaction and payment data not sent: €500, capped at €15,000 a year. None of these penalties is applied in 2026.',
        sourceName: 'Entreprendre.Service-Public.gouv.fr, news of 1 September 2026',
        sourceUrl: E_INVOICING_SOURCES.servicePublicNews,
      },
    ],
    calloutEmphasizedIntro: 'What I do for you:',
    calloutText:
      'I check your situation (software, directory, plan), I connect your business software or in-house tool to an accredited platform, and I automate the output of quotes and invoices. Remotely, first call free.',
  },
  timeline: {
    anchorId: 'calendar',
    eyebrow: 'The calendar',
    title: 'From the directory to the last deadline, the dates that matter',
    intro: 'Six dates, from the opening of the directory to the obligation to issue for the smallest businesses.',
    items: [
      {
        title: 'September 2025: the directory opens',
        description: 'Businesses can declare their accredited platform and their invoicing addresses.',
      },
      {
        title: 'December 2025: first registrations',
        description:
          'Pennylane on the 11th, Qonto, Tiime and Cegid on the 18th, Sage on the 22nd, Sellsy on 24 December get their number (DGFiP list).',
      },
      {
        title: 'Summer 2026: “PDPs” become “accredited platforms”',
        description:
          'New name, same obligations; the DGFiP publishes the “accredited platform” and “compatible solution” logos.',
      },
      {
        title: '1 September 2026: reception for all, issuing for large companies',
        description: 'Every business subject to VAT must be able to receive; large and mid-sized companies issue.',
      },
      {
        title: 'Until the end of 2026: tolerance on penalties',
        description: 'No penalty for a business in real difficulty and engaged in a serious effort.',
      },
      {
        title: '1 September 2027: issuing and e-reporting for SMEs, small and micro-businesses',
        description: 'Every invoice to a business customer goes through a platform; sales to consumers are reported.',
      },
    ],
  },
  concerned: {
    anchorId: 'who',
    eyebrow: 'Who is concerned',
    title: 'Tradespeople, shops, micro-businesses, associations: who has to act',
    intro:
      'The reform targets businesses subject to VAT established in France, whatever their size. Three cases come back in the questions I get.',
    items: [
      {
        title: 'Tradespeople, shops, freelancers',
        description:
          'Receive through an accredited platform since 1 September 2026; issue your invoices to business customers through a platform from 1 September 2027.',
      },
      {
        title: 'Micro-businesses under the VAT exemption',
        description:
          'Concerned too: the exemption spares you from charging VAT, not from e-invoicing. Reception since 2026, issuing in 2027 for your business customers.',
      },
      {
        title: 'Sales to consumers and public customers',
        description:
          'No electronic invoice for a consumer: an e-reporting of sales from 2027. For the State and local authorities, Chorus Pro remains the channel.',
      },
    ],
  },
  softwareTable: {
    anchorId: 'software',
    eyebrow: 'Tool by tool',
    title: 'Common invoicing tools and their status',
    intro:
      'Twenty-four tools used by small businesses and tradespeople in France, with what the official list says or, failing that, the publisher’s page. Status re-read on 23 October 2026.',
    softwareColumnLabel: 'Software',
    statusColumnLabel: 'Status',
    platformColumnLabel: 'Accredited platform',
    statusLabels: {
      accredited: 'Accredited platform',
      connected: 'Compatible solution, connected',
      compatibleUnnamed: 'Compatible solution, platform not named',
      announced: 'Announced, not on the list',
      none: 'Not an e-invoicing tool',
      publicSector: 'Public sector only',
      ppf: 'Public portal',
    },
    noPlatformLabel: 'not stated',
    officialSourceTemplate: 'DGFiP list of {listDate}',
    publisherSourceTemplate: 'publisher’s page, {sourceDate}',
    calloutEmphasizedIntro: 'Your software is not in the list?',
    calloutText:
      'Type its name in the checker at the top of the page: it also searches the 142 registered platforms. If it does not find it, ask the publisher in writing, and check the answer here.',
  },
  guides: {
    anchorId: 'guides',
    eyebrow: 'What to do, by software',
    title: 'The step by step, tool by tool',
    intro:
      'What the publisher itself says, and what is left for you to do. Compatible solutions first, because that is where there is something to check.',
    accreditedTemplate:
      '{name} has been an accredited platform since {date}: switch e-invoicing on in the software with the legal representative’s account, check your address in the directory, and there is nothing else to buy.',
    accreditedDateUnknownTemplate:
      '{name} is on the official list of accredited platforms: switch e-invoicing on in the software, check your address in the directory, and there is nothing else to buy.',
    connectedPlatformTemplate: ' Accredited platform: {platform}, registered on {platformDate}.',
  },
  freePlatforms: {
    anchorId: 'free',
    eyebrow: 'No software today',
    title: 'Accredited platforms that announce a free plan',
    intro:
      'If you invoice on Excel or on paper, here are the platforms of the official list that target small businesses and announce a free plan (publishers’ pages, survey of 20 October 2026). Check it when you sign up: a free plan can change.',
    itemTemplate: 'Registered on {date}. Free plan announced by the publisher.',
    itemDateUnknownTemplate: 'On the official list. Free plan announced by the publisher.',
  },
  method: {
    eyebrow: 'My method',
    title: 'Four steps to comply without spending your evenings on it',
    intro:
      'The same sequence as for my clients, on your own if your software is accredited, with me if a tool has to be connected.',
    steps: [
      {
        label: 'Check',
        title: 'The name, in the official list',
        description:
          'The checker at the top of the page, or the DGFiP list. A logo on a commercial site is not enough.',
      },
      {
        label: 'Designate',
        title: 'A platform to receive',
        description:
          'Activation in the software, or sign-up on a free platform. Always with the legal representative’s account.',
      },
      {
        label: 'Control',
        title: 'The directory and a first invoice',
        description:
          'Your SIREN must have an active address; ask a supplier to send you an invoice through that channel.',
      },
      {
        label: 'Connect',
        title: 'Your in-house quotes and invoices',
        description:
          'If your invoices come out of business software or a custom tool, I connect it to an accredited platform and automate the sending.',
      },
    ],
  },
  faq: {
    eyebrow: 'Frequently asked questions',
    title: 'Your questions on French e-invoicing and your software',
    questions: [
      {
        question: 'I am a micro-entrepreneur under the VAT exemption: am I concerned?',
        answer:
          'Yes. The reform applies to businesses subject to VAT established in France, and the exemption does not remove that status: it only spares you from charging the tax. You must be able to receive electronic invoices since 1 September 2026 and issue those of your business customers through an accredited platform from 1 September 2027. Your sales to consumers do not give rise to an electronic invoice, but to an e-reporting from 2027.',
      },
      {
        question: 'I make my invoices on Excel, Word or a PDF template: what should I do?',
        answer:
          'For reception, nothing waits for 2027: pick an accredited platform, several are free (Abby, Indy, Tiime and Dougs announce a plan without subscription), sign up with the legal representative’s account, and your SIREN will have an address in the directory. For issuing, you have until 1 September 2027 to move your quotes and invoices to a tool that produces the electronic format. An Excel file or a PDF sent by e-mail will no longer be a valid invoice between businesses.',
      },
      {
        question: 'What is the difference between an accredited platform and a compatible solution?',
        answer:
          'The accredited platform is registered by the DGFiP: it carries the invoices and the data to the administration, and it appears in the official list. The compatible solution is a tool that prepares invoices in the right format and hands them to a partner accredited platform; it is not registered but may carry an official label. EBP, Evoliz, Henrri, Tolteck, Obat or Batappli are in that case. Both setups comply; what matters is knowing which accredited platform sits behind.',
      },
      {
        question: 'Is there a free accredited platform?',
        answer:
          'Yes, several platforms of the official list announce a free plan, generally for reception and a limited volume of issuing: Abby, Indy, Tiime, Dougs (free invoicing), Macompta.fr, and more technical players such as B2BRouter or Super PDP. The list on this page gathers them. Read carefully what is included: issuing beyond a number of invoices, archiving or accounting are often paid.',
      },
      {
        question: 'I only issue in September 2027: do I still have to pick a platform now?',
        answer:
          'Yes, for reception, mandatory since 1 September 2026. Without a designated platform, your business has no active address in the directory, and your suppliers, including the large companies already required to issue, cannot send you their invoices through the official circuit. The 2026 tolerance protects businesses engaged in an effort, not those that have done nothing.',
      },
      {
        question: 'My software says “compatible” but is not on the list: is that a problem?',
        answer:
          'No, if the publisher names the accredited platform it uses and that name is on the official list: that is the case of Evoliz (Chaintrust), Obat (Iopole), Batappli (Cecurity) or EBP (Shine). Yes, if nobody can tell you which one. Ask in writing, check the name in the checker, and keep the answer.',
      },
      {
        question: 'Can I use two platforms, one to receive and one to issue?',
        answer:
          'Yes. The directory lets you declare one platform for reception and another for issuing, and the supplier and the customer may be on different platforms: they are required to interoperate. It is convenient when your quoting software issues through a partner and you prefer to receive on a free platform.',
      },
      {
        question: 'What does a business that has done nothing risk?',
        answer:
          'In 2026, nothing: the government announced that no penalty would be applied to businesses in real difficulty and engaged in an effort. Afterwards, the law provides €50 per invoice not issued in the electronic format (capped at €15,000 a year), a formal notice then €500 and €1,000 per three-month period for reception outside a platform, and €500 per e-reporting failure. The most concrete risk remains commercial: customers who can no longer pay you on a non-compliant invoice.',
      },
      {
        question: 'What is the directory, and how do I check my address?',
        answer:
          'It is the central register, kept by the administration, that gives for each business subject to the reform its accredited platform and its invoicing addresses. Your platform registers you there when you activate the service; most then show your address in the settings. The simplest test: ask a supplier already equipped to send you an invoice through the official circuit.',
      },
      {
        question: 'My invoices come out of custom business software or an in-house tool: how do I connect it?',
        answer:
          'That is my job. An in-house tool does not need to become an accredited platform: it must produce invoices in one of the expected formats (Factur-X, UBL or CII) and hand them to an accredited platform through its API, which handles the transmission, the directory and the e-reporting. I start with an audit of what your tool does, then I plug in the platform best suited to your volume, and I automate the sending and the status tracking. Describe your case, I answer within 24 hours.',
      },
      {
        question: 'Is Chorus Pro enough?',
        answer:
          'No. Chorus Pro is the portal for invoices sent to the French State, local authorities and public bodies, and it stays so. For your private customers, you need an accredited platform or a tool connected to one. Both channels coexist.',
      },
      {
        question: 'Why was the official list read from an archived copy?',
        answer:
          'Because impots.gouv.fr has shown a maintenance page since 21 October 2026, following the PHP vulnerability fixed that day (see my PHP vulnerability checker). The list on this page is the one the DGFiP updated on 13 October, read on 23 October in the copy of 16 October kept by the Internet Archive. As soon as the site is back, I re-read the list and re-date this page.',
      },
      {
        question: 'What exactly does this tool do, and what does it not see?',
        answer:
          'It looks for the name you type in the official list of accredited platforms (142 registered and 14 pending files as of 13 October 2026) and in my survey of 24 common tools, whose e-invoicing page I read on 23 October 2026. It connects to nothing, keeps nothing and does not send what you type. It does not see your subscription plan, the real state of your connection or your directory registration: only your account, or the publisher, can tell.',
      },
    ],
  },
  relatedArticles: {
    title: 'To go further',
    intro: 'Three reads on e-invoicing and on quoting and invoicing tools.',
  },
  contactCta: {
    title: 'Your tool makes your invoices, and you do not know whether it will pass in 2027?',
    description:
      'Describe it to me in three lines: off-the-shelf software, in-house tool, spreadsheet. Within 24 hours I tell you what to do, and what I can connect or automate.',
    button: 'Describe my case',
  },
}
