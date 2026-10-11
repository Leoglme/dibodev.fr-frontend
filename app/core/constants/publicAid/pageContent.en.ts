import type { DibodevPublicAidPageContent } from '~/core/types/DibodevPublicAidPage'

const RENNES_SOURCE: string = 'https://les-aides.fr/aide/doU_3w/rennes-metropole/le-pass-commerce-et-artisanat.html'
const REGION_SOURCE: string = 'https://les-aides.fr/aide/UIEv3w/region-bretagne/pass-commerce-et-artisanat.html'
const PORTE_DE_LOIRE_SOURCE: string =
  'https://entreprendre.bretagneportedeloire.fr/pass-commerce-artisanat-volet-numerique/'

export const PUBLIC_AID_PAGE_EN: DibodevPublicAidPageContent = {
  meta: {
    title: 'Public aid for your website or software in Brittany: the simulator by commune',
    description:
      'In Brittany, your local authority can fund 30 to 50% of a website or software. The simulator applies the rules of the 18 intercommunalités of Ille-et-Vilaine, checked in October 2026.',
    inLanguage: 'en-GB',
    schemaAbout: 'Public grants for the website or software of a small French business',
  },
  breadcrumbLabel: 'Aid for your website or software',
  numberLocale: 'en-GB',
  hero: {
    titleBefore: 'Which ',
    titleHighlight: 'public aid',
    titleAfter: ' can fund your website or software?',
    reassurances: [
      'Free, no sign-up',
      '18 intercommunalités of Ille-et-Vilaine checked',
      'Rules read on 11 October 2026',
    ],
    description:
      'In Brittany (France), the Pass Commerce et Artisanat refunds 30 to 50% of a website, an online sales module and sometimes a piece of software, but every intercommunalité sets its own floor, ceiling and list. This simulator applies the rules published by the 18 intercommunalités of Ille-et-Vilaine, the regional frame elsewhere in Brittany, and says what really exists at the national level. It gives the aid, what is left to pay, the points to confirm and who to call.',
    authorIntro: 'Simulator built by',
    authorBio:
      'freelance web developer near Rennes. I prepare the digital part of my clients’ files: compliant quotes, letter of intent before any order, documents for the chamber of commerce or crafts.',
  },
  simulator: {
    communeLabel: 'Your commune',
    communePlaceholder: 'Saint-Erblon or 35230',
    communeHint:
      'Name or postcode, anywhere in France: in Brittany, the simulator finds your intercommunalité and applies its rules.',
    noMatch: 'No commune matches. Check the spelling or try the postcode.',
    searchingLabel: 'Searching the communes of France…',
    searchErrorLabel: 'The commune directory is not responding. Try again in a moment.',
    outsideBrittanyTag: 'outside Brittany',
    selectedTemplate: '{commune} ({postcode}) · {epci} · {population} inhabitants',
    selectedOutsideTemplate: '{commune} ({postcode}) · outside Brittany',
    changeCommune: 'Change',
    projectLabel: 'Your project',
    projectOptions: {
      website: 'Website (new or redesign)',
      onlineSales: 'Online sales or orders',
      software: 'Management software or app',
    },
    amountLabel: 'Project amount, excluding VAT',
    amountHint: 'The provider’s quote, without hosting or maintenance, which are never funded.',
    employeesLabel: 'Permanent employees, excluding the owner',
    employeesHint: 'Full-time equivalent. Most intercommunalités stop at 7, Rennes Métropole at 10.',
    turnoverLabel: 'Is your turnover under €1 million excluding VAT?',
    businessLabel: 'Are you an independent shop or craft business serving mostly private customers?',
    businessHint:
      'Local shops, cafés, restaurants, hairdressers, building trades, garages, workshops… Liberal professions, medical activities, estate agencies and wholesale are excluded.',
    yes: 'Yes',
    no: 'No',
    resultLabel: 'Your result',
    statusTitles: {
      incomplete: 'Choose your commune',
      eligible: 'Your project fits the scheme',
      check: 'Eligible, subject to a few points',
      notEligible: 'Your project does not fit the scheme',
      frame: 'Estimate on the regional frame',
      national: 'No national grant, but some leads',
    },
    statusTexts: {
      incomplete:
        'Type the name or postcode of your commune. The result shows here, with the aid and what is left to pay.',
      eligible: 'In {territory}, the Pass Commerce et Artisanat funds {rate}% of your project, up to {maxAid}.',
      check:
        'In {territory}, the Pass Commerce et Artisanat funds {rate}% of your project, up to {maxAid}, once the points below are confirmed.',
      notEligible:
        'With your answers, the Pass Commerce et Artisanat of {territory} does not apply. Here is why, and what remains possible.',
      frame:
        'I have not read the rules of {territory} yet. The regional frame provides {rate}% of your project, up to {maxAid}; your intercommunalité sets the floor and the list of expenses.',
      national:
        'Your commune is outside Brittany. In 2026, no national grant funds a website or software in France. The France Num voucher ended in 2021 and the Digital Transformation Loan at the end of 2023. Local aid, loans and a tax credit reserved for new products remain.',
    },
    aidLabel: 'Estimated aid',
    remainingLabel: 'Left to pay',
    rateTemplate: '{rate}% of {amount} excl. VAT, capped at {maxAid}',
    reasonsTitle: 'What blocks',
    reasons: {
      businessType:
        'The Pass targets independent shops and craft businesses whose customers are mostly private individuals.',
      employees: 'You exceed the number of employees allowed by this intercommunalité.',
      turnover: 'Turnover must stay under €1 million excluding VAT.',
      belowFloor:
        'The file must reach {floor} excl. VAT of investment. Add another eligible investment (equipment, works, a tool) or group your projects.',
      communeTooLarge:
        'In Rennes Métropole, only communes under 5,000 inhabitants and the priority districts of Rennes are covered.',
      projectExcluded:
        'This intercommunalité does not list this kind of project in its digital strand: only the website, its redesign, the e-commerce module and SEO set-up are funded.',
    },
    checksTitle: 'To confirm before you commit',
    checks: {
      qpvOnly:
        'In Rennes, only the priority districts are covered: Villejean, Le Blosne, Cleunay, Clôteaux–Champs Manceaux and Maurepas, within their official perimeters.',
      centralityForShops:
        'A shop or a craft business with a storefront must sit in the town centre defined by the local plan. A production craft business has no such constraint.',
      centrality:
        'Above 5,000 inhabitants, the project must be inside the town-centre perimeter agreed with the intercommunalité, or in a priority district.',
      outsideBusinessPark: 'Between 2,000 and 5,000 inhabitants, the project must be outside a business park.',
      projectUnclear:
        'The rules do not mention this kind of project. Management software sometimes passes as a “customer relationship tool” or “till software”: ask your adviser for a written answer before signing.',
      floorUnknown:
        'This intercommunalité does not publish its investment floor. The most common one is €6,000 excl. VAT.',
      belowAssumedFloor:
        'This intercommunalité does not publish its floor. The most common one is €6,000 excl. VAT, which your project does not reach: ask before building a file.',
      zonesOnly: 'In Brest métropole, the scheme only covers the Haut de Jaurès, Recouvrance and Kerinou districts.',
    },
    notes: {
      rseInvestment:
        'The file must include the CSR self-assessment and at least one investment that reduces the environmental impact.',
      subscriptionsExcluded: 'Subscriptions, hosting, maintenance and paid search are not funded.',
      validUntil2028: 'Scheme open until 31 March 2028.',
      digitalListedWithoutDetail: 'The page mentions “digitisation” without detail: have the quote validated.',
      noRecentRulesPublished:
        'No recent rules are published online: the figures come from the regional frame and older documents.',
      floorUnknown: 'Investment floor not published.',
      agreementUntil2026: 'The agreement with the Région covers 2024-2026: check its renewal.',
      energyInterviewRequired:
        'The file includes the report of a free interview with an adviser of the local energy and climate agency.',
      rulesInPdfNotRead: 'The rules are in a PDF sheet dated 4 February 2026 that I could not read.',
      digitalStrandOnly:
        'Separate digital strand, combinable with the works and equipment Pass up to €7,500 over two years.',
      cumulTwoYears: '€7,500 of aid at most over two years, all strands combined.',
      twelveMonthsToInvest: 'Twelve months after the decision to invest, then six months for the supporting documents.',
      threeYearsBetweenRequests: 'Three years at least between two requests.',
      listingNotOfficial: 'Figures taken from an aid directory, not from the intercommunalité’s site: to confirm.',
      creditsConsumed2025: 'The 2025 budget was used up: ask whether the 2026 envelope is open.',
      endDateToConfirm: 'The 2026 rules gave an end date of 14 September 2026: ask whether the scheme was renewed.',
      brestZonesOnly: 'Aid capped at €5,000 for at least €6,000 excl. VAT of investment.',
    },
    nationalPoints: [
      'Your intercommunalité or region may have its own aid: search your commune on the official aides-entreprises.fr database, used by France Num.',
      'Bpifrance offers the Prêt Boost Transformation numérique, an unsecured loan of €5,000 to €100,000 for companies older than three years, not a grant.',
      'The innovation tax credit returns 20% of the cost of a prototype of a new product, with an approved provider: it does not cover an internal tool.',
      'In every case, file the request before signing a quote.',
    ],
    stepsTitle: 'The steps',
    steps: [
      'Call the chamber of commerce (CCI) or of crafts (CMA) of your department to present the project.',
      'File the letter of intent on the regional platform before any signed quote.',
      'Build the file with the adviser within six months, quotes dated after the letter.',
      'Carry out the project, send the paid invoices, the aid is paid afterwards.',
    ],
    contactTitle: 'Who to call',
    contactFallback: 'Your intercommunalité, or the CCI and CMA of your department, which build the files.',
    sourceTemplate: 'Rules read on 11 October 2026 on {source}',
    cta: 'Get my project priced',
    ctaNational: 'Discuss my project',
    disclaimer:
      'Indicative simulation, from the published rules. Only the intercommunalité decides, after reviewing the file.',
  },
  rules: {
    anchorId: 'rules',
    eyebrow: 'Before signing',
    title: 'The rules that win or lose the aid',
    intro: 'Refused files are almost always a matter of timing or floor, not of project. Here is what the rules say.',
    facts: [
      {
        contextLabel: 'Before any signed quote',
        title: 'The letter of intent comes first',
        text: 'In Rennes Métropole as elsewhere in Brittany, the acknowledgement of the letter of intent filed on the regional platform marks the start of eligible expenses. A quote signed before is not funded, even if the project was eligible.',
        sourceName: 'les-aides.fr, Rennes Métropole',
        sourceUrl: RENNES_SOURCE,
      },
      {
        contextLabel: '€6,000 excl. VAT',
        title: 'An investment floor',
        text: 'Rennes Métropole, Saint-Malo, Liffré-Cormier, Côte d’Émeraude, Bretagne Romantique and Pays de Dol require at least €6,000 excl. VAT of investment per file. A showcase website alone rarely passes; a website with a tool or equipment does. Bretagne Porte de Loire and Roche aux Fées start at €2,000 on their digital strand.',
        sourceName: 'les-aides.fr, Rennes Métropole',
        sourceUrl: RENNES_SOURCE,
      },
      {
        contextLabel: '30% to 50%',
        title: 'A rate and a ceiling set by the intercommunalité',
        text: 'The regional frame provides 30% of €25,000 excl. VAT at most, i.e. €7,500 of aid. Rennes Métropole stops at €20,000 excl. VAT (€6,000 of aid), Pays de Dol at €16,666 (€5,000), and Bretagne Porte de Loire or Roche aux Fées go up to 50% on their digital strand.',
        sourceName: 'les-aides.fr, Région Bretagne',
        sourceUrl: REGION_SOURCE,
      },
      {
        contextLabel: 'Never funded',
        title: 'Subscriptions, hosting, maintenance',
        text: 'The rules fund the creation or redesign of a website, an online sales module, training on the tool, sometimes till software or a customer relationship tool. Never a monthly subscription, hosting, maintenance, advertising or paid search.',
        sourceName: 'Bretagne Porte de Loire Communauté',
        sourceUrl: PORTE_DE_LOIRE_SOURCE,
      },
    ],
    calloutEmphasizedIntro: 'What I do in your file:',
    calloutText:
      'a quote dated after your letter of intent, itemised as the chamber asks, with no subscription mixed into the development, and the technical answers to your adviser. You keep control of the filing and the administrative documents.',
  },
  territories: {
    anchorId: 'intercommunalites',
    eyebrow: 'Ille-et-Vilaine, rule by rule',
    title: 'The Pass Commerce et Artisanat in the 18 intercommunalités of Ille-et-Vilaine',
    intro:
      'Same scheme, 18 sets of rules. Rate, ceiling, floor and admitted digital projects, as published by each intercommunalité and re-read on 11 October 2026.',
    territoryColumnLabel: 'Intercommunalité',
    coverageColumnLabel: 'Digital projects admitted',
    aidColumnLabel: 'Aid',
    coverageTemplate: 'Website: {website} · Online sales: {onlineSales} · Software: {software}',
    eligibilityLabels: {
      eligible: 'yes',
      unclear: 'to confirm',
      excluded: 'no',
    },
    aidTemplate: '{rate}%, up to {maxAid}',
    conditionTemplate: 'From {floor} excl. VAT of investment',
    floorUnknownCondition: 'Floor not published, often €6,000 excl. VAT',
    partialSuffix: ' (partial rules)',
    calloutEmphasizedIntro: '“To confirm” means:',
    calloutText:
      'the published rules do not mention this kind of project. It is not a refusal. Ask your CCI or CMA adviser for a written answer before signing, and attach the quote.',
    calloutFootnote:
      'Sources: pages and sheets of the intercommunalités, the Région Bretagne sheet on les-aides.fr, the Rennes Métropole notice. Non-exhaustive list of conditions: each intercommunalité decides file by file.',
  },
  beyond: {
    anchorId: 'elsewhere',
    eyebrow: 'Outside Ille-et-Vilaine',
    title: 'Elsewhere in Brittany, and at the national level',
    intro:
      'The simulator covers every commune of Brittany. Outside Ille-et-Vilaine, it applies the regional frame until each set of rules is read.',
    items: [
      {
        title: 'Rest of Brittany: the regional frame',
        description:
          '30% of expenses, €25,000 excl. VAT at most, €7,500 of aid maximum, co-funded by the Région and the intercommunalité. Each of the 59 intercommunalités sets its floor and its list of digital expenses: the simulator points you to yours.',
      },
      {
        title: 'National: no grant in 2026',
        description:
          'The €500 France Num voucher ended in 2021 and the Digital Transformation Loan at the end of 2023, even if many sites still quote them. What remains: the Bpifrance Prêt Boost (a loan), the innovation tax credit (20%, new products only) and the local aid listed on aides-entreprises.fr.',
      },
      {
        title: 'Production SMEs: the PASS Transitions',
        description:
          'The Région Bretagne refunds 50% of a consulting service of at least €6,000 (aid of €3,000 to €10,000) to SMEs under 50 employees in production or services to production, for their transitions, including digital. Local shops and craft businesses are not eligible.',
      },
    ],
  },
  method: {
    eyebrow: 'In order',
    title: 'How to get the aid, in four steps',
    intro: 'The same path across Brittany, on the Région’s platform. The chamber supports you at every step.',
    steps: [
      {
        label: 'Check',
        title: 'Simulate, then call the CCI or the CMA',
        description:
          'The simulator gives the amount and the points to confirm. The CCI or CMA adviser checks the eligibility of your premises and project, and often organises a visit.',
      },
      {
        label: 'Letter of intent',
        title: 'File the letter before any quote',
        description:
          'You create your account on the regional platform and file a letter of intent: project, types of expenses, estimated amount. The acknowledgement allows the expenses, without guaranteeing the aid.',
      },
      {
        label: 'File',
        title: 'Build the file within six months',
        description:
          'Quotes dated after the letter, company registration extract, bank details, accountant’s certificate, financing plan, de minimis statement. In Rennes Métropole, the CSR self-assessment and a responsible investment.',
      },
      {
        label: 'Payment',
        title: 'Carry out, justify, get refunded',
        description:
          'The community board decides, then you carry out the project. The aid is paid on paid invoices, in proportion to the expenses actually made. Plan the cash flow in the meantime.',
      },
    ],
  },
  faq: {
    eyebrow: 'Frequently asked questions',
    title: 'Your questions about aid for websites and software',
    questions: [
      {
        question: 'My shop is in the centre of Rennes: am I entitled to the Pass Commerce et Artisanat?',
        answer:
          'No, except in one of the five priority districts (Villejean, Le Blosne, Cleunay, Clôteaux–Champs Manceaux, Maurepas). In Rennes Métropole, the scheme targets the 23 communes under 5,000 inhabitants and these districts. Cesson-Sévigné, Bruz or Saint-Jacques-de-la-Lande are not covered either.',
      },
      {
        question: 'Is a €1,500 showcase website funded?',
        answer:
          'Rarely on its own: most intercommunalités require €6,000 excl. VAT of investment per file. A website can be part of a larger file (equipment, works, a management tool), or benefit from the digital strands that start at €2,000, as in Bretagne Porte de Loire or Roche aux Fées.',
      },
      {
        question: 'Is custom management software eligible?',
        answer:
          'It depends on the intercommunalité. Rennes Métropole lists customer relationship tools and till software, Montfort Communauté till software, Bretagne Porte de Loire only the website and online sales. When the rules do not settle it, the simulator shows “to confirm”: ask for a written answer before signing.',
      },
      {
        question: 'Can I combine the Pass with another aid?',
        answer:
          'Total public aid on the same expenses cannot exceed 50%, and the aid counts towards the de minimis ceiling. Some intercommunalités also require three years between two requests. Your adviser checks the combination.',
      },
      {
        question: 'How long does a file take?',
        answer:
          'Count one to three months of review after the complete file is filed, which itself must arrive within six months of the letter of intent. The investments are then made, often within twelve months, and the aid is paid on paid invoices.',
      },
      {
        question: 'Do I have to go through the CCI or the CMA?',
        answer:
          'Yes. The rules provide that the chamber helps build the file and gives a reasoned opinion. It is also the person who knows the edge cases of your territory. The call is free.',
      },
      {
        question: 'What if my business is outside Brittany?',
        answer:
          'There is no national grant for a website or software in 2026, but many regions and intercommunalités have their own aid (Grand Est, Hauts-de-France, Nouvelle-Aquitaine…). Search your commune on aides-entreprises.fr, the database used by France Num, and file the request before signing a quote.',
      },
    ],
  },
  relatedArticles: {
    title: 'To go further',
    intro: 'The guide to the Pass Commerce et Artisanat in Rennes Métropole, and what custom software really costs.',
  },
  contactCta: {
    title: 'A project to get funded?',
    description:
      'Describe it in a few lines with your commune. Within 24 hours I tell you what can be funded, and I prepare a quote that fits the file.',
    button: 'Discuss my project',
  },
}
