import type { DibodevPriceBarometerPageContent } from '~/core/types/DibodevPriceBarometerPage'

// The figures written in the FAQ and the callouts come from the dataset: update them by hand after each new edition.

export const PRICE_BAROMETER_PAGE_CONTENT_EN: DibodevPriceBarometerPageContent = {
  meta: {
    title: 'Custom software prices in France, 2026 barometer | Dibodev',
    description:
      'The prices published by 14 French agencies, freelancers and platforms, compiled and dated: medians by project size, daily rates and five-year cost.',
    datasetName: '2026 barometer of custom software prices in France',
    datasetDescription:
      'Price ranges published by 14 French agencies, freelancers and platforms for custom software, recorded on 11 October 2026: simple tool, business application, platform, daily rates and maintenance.',
  },
  breadcrumbLabel: 'Custom software prices',
  numberLocale: 'en-US',
  rangeTemplate: '€{min} to €{max}',
  hero: {
    titlePart1: 'Custom software prices in France in 2026: what ',
    titleHighlight: '14 providers',
    titlePart2: ' really publish',
    description:
      'Instead of one more range, here are the ones French agencies, freelancers and platforms publish on their own pages, recorded the same day, with the medians by project size and the five-year cost. Mine is in the table.',
    cta: 'Estimate my project',
    ctaSecondary: 'See the 14 sources',
    reassurances: [
      'Public prices, linked to their source',
      'Recorded on 11 October 2026',
      'Downloadable data (CSV, CC BY)',
    ],
    statLabels: {
      businessAppRange: 'business application, medians',
      sources: 'sources recorded',
      checkedAt: 'recording date',
    },
  },
  tiers: {
    eyebrow: 'Key figures',
    title: 'Three project sizes, three ranges',
    intro:
      'For each size, the median of the floor prices and the median of the ceiling prices published by the sources that price it. A median is not pulled up by the two or three most expensive agencies.',
    tierColumnLabel: 'Project size',
    coverageColumnLabel: 'What it covers',
    priceColumnLabel: 'Published medians',
    items: {
      simpleTool: {
        name: 'Simple tool or MVP',
        coverage:
          'One precise need: a schedule, a case tracker, an automation, a client portal. One kind of user, few integrations.',
      },
      businessApp: {
        name: 'Complete business application',
        coverage:
          'Several roles, a dashboard, quotes or invoices, one or two integrations (accounting, payment, emails). Most tools of small businesses.',
      },
      platform: {
        name: 'Platform or SaaS',
        coverage: 'Client area, payments, scaling, multiple integrations, sometimes a mobile app. Delivered in stages.',
      },
    },
    conditionTemplate:
      '{count} sources: from the lowest floor, €{lowestFloor}, to the highest ceiling, €{highestCeiling}',
    calloutEmphasizedIntro: 'Why such a gap:',
    calloutText:
      'a twenty-person Paris agency and an independent developer do not sell the same scope nor the same structure. La Fabrique du Net, which measures budgets actually committed, finds a median of €50,000 in the Paris region against €15,000 in the rest of France.',
    calloutFootnote: 'Medians computed on the sources that price the project size, Dibodev included.',
  },
  sources: {
    eyebrow: 'The table',
    title: 'The 14 sources, each with its link',
    intro:
      'Each card repeats what the source itself publishes, without rounding, with the date of its page. Nothing was requested through a quote.',
    wording: {
      kindLabels: {
        agency: 'Agency',
        freelance: 'Freelancer',
        platform: 'Platform',
        media: 'Media',
        directory: 'Directory',
      },
      rangeLabels: {
        simpleTool: 'Simple tool',
        businessApp: 'Business application',
        platform: 'Platform',
        overall: 'Overall range',
      },
      rangeTemplate: '{label} €{min} to €{max}',
      openRangeTemplate: '{label} from €{min}',
      fixedPriceTemplate: '{label} €{value}',
      dayRateTemplate: 'daily rate €{min} to €{max}',
      singleDayRateTemplate: 'daily rate €{value}',
      maintenanceTemplate: 'maintenance {min} to {max}% per year',
      publishedTemplate: 'Recorded on {checkedAt}, page dated {publishedAt}.',
      notes: {
        'la-fabrique-du-net': 'Medians of 184 real budgets (overall median €30,000, business application €20,000).',
        velyria:
          'Subscription: €890 then €119 per month over 24 months for the tool, €2,990 then €199 per month for the full software, converted to the 24-month total.',
        codeur: 'Average hourly rates of €27 to €39 converted to 7-hour days.',
        malt: 'Experienced developers active on Malt, from €317 (0 to 2 years) to €672 (15 years and more); €576 on average.',
        dibodev: 'That is me: fixed prices published on this site, maintenance €100 to €300 per month.',
        sokeo: 'Tiers given for applications, including mobile ones.',
        digitiz:
          'Study by a media outlet with the prices of one agency, real cases from €3,100 to €36,000 excluding VAT.',
        appminds: 'Per delivered module, hosting €30 to €150 per month on top.',
        'nocode-factory': 'No-code and low-code tools, maintenance €500 to €5,000 per month depending on size.',
      },
    },
    csvEmphasizedIntro: 'The data is yours too:',
    csvText:
      'the full record can be downloaded under a CC BY 4.0 licence. Cite "Dibodev, 2026 barometer of custom software prices" with a link to this page.',
    csvLinkLabel: 'Download the record (CSV)',
    csvFootnote: 'A source is missing or has changed its prices? Write to me, I correct it and date the correction.',
  },
  fiveYears: {
    eyebrow: 'Over five years',
    title: 'Trade subscription, freelancer or agency: what it costs over five years',
    intro:
      'A subscription always looks cheaper in the first year. Here is the five-year calculation for a business application, maintenance included.',
    criterionLabel: 'Criterion',
    columns: ['Trade software subscription', 'Custom by Dibodev', 'Custom by an agency (medians)'],
    rows: [
      {
        label: 'Starting price',
        cells: [
          { state: 'yes', text: '€9 to €249 per month (2026 prices of the software on the four trade tests)' },
          { state: 'partial', text: '€5,000 to €15,000 at a fixed price' },
          { state: 'partial', text: '{agencyRange} (medians of the sources that price this tier)' },
        ],
      },
      {
        label: 'Five-year cost',
        cells: [
          { state: 'yes', text: '{subscriptionFiveYears}' },
          { state: 'partial', text: '{dibodevFiveYears}, maintenance of €100 to €300 per month included' },
          { state: 'no', text: '{agencyFiveYears}, with maintenance at 15 to 25% per year' },
        ],
      },
      {
        label: 'Your business rules',
        cells: [
          { state: 'partial', text: 'Those planned by the vendor' },
          { state: 'yes', text: 'Designed around your organisation' },
          { state: 'yes', text: 'Designed around your organisation' },
        ],
      },
      {
        label: 'Your data and the code',
        cells: [
          { state: 'partial', text: 'At the vendor, export depending on the software' },
          { state: 'yes', text: 'Yours, code included' },
          { state: 'yes', text: 'Yours in most contracts, to be checked' },
        ],
      },
      {
        label: 'Getting started',
        cells: [
          { state: 'yes', text: 'A few days' },
          { state: 'partial', text: '5 to 20 weeks, in stages' },
          { state: 'partial', text: '3 to 12 months according to La Fabrique du Net' },
        ],
      },
      {
        label: 'When it makes sense',
        cells: [
          { state: 'yes', text: 'A standard need, a small team' },
          { state: 'yes', text: 'A precise trade, rules of your own, 1 to 50 users' },
          { state: 'partial', text: 'Several teams, an information system to connect' },
        ],
      },
    ],
    rowsShownOnSmallScreens: 2,
  },
  factors: {
    eyebrow: 'What makes the price vary',
    title: 'Six factors that explain the gap between two quotes',
    intro: 'The sources agree on these factors. What changes is their weight in each quote.',
    items: [
      {
        title: 'The functional scope',
        description:
          'A tool that handles one thing costs far less than a platform linking quotes, invoicing, stock and customers. Every "and also" adds days.',
      },
      {
        title: 'Users and roles',
        description:
          'A tool for three people is simple. As soon as there are roles, permissions and many people at the same time, the architecture weighs in: Nocode Factory counts 10 to 50% more beyond a hundred users.',
      },
      {
        title: 'Integrations',
        description:
          'Accounting, payment, external API: every connection is a project of its own, especially when the other system is temperamental. A simple integration is priced €2,000 to €5,000 by the agencies that detail it.',
      },
      {
        title: 'Finish and tests',
        description:
          'La Fabrique du Net measures the gap: a €25,000 median for pure development, €50,000 when tests are explicitly planned.',
      },
      {
        title: 'Who answers you',
        description:
          'An independent developer has no salesperson nor project manager to fund: published daily rates go from €400 as a freelancer to €800 or €1,000 in an agency.',
      },
      {
        title: 'The region',
        description:
          'A €50,000 median in the Paris region against €15,000 elsewhere, according to La Fabrique du Net. Development happens remotely: nothing forces you to pay the Paris premium.',
      },
    ],
  },
  method: {
    eyebrow: 'Method',
    title: 'How this barometer is made',
    intro:
      'It does not measure quotes, but what each provider dares to write publicly. That is its limit and its interest.',
    steps: [
      {
        label: 'Recording',
        title: 'Public pages, the same day',
        description:
          'The ranges come from the providers’ price pages or price guides, all read on 11 October 2026, with a link to each. No quote requested, no negotiated price.',
      },
      {
        label: 'Sorting',
        title: 'Three project sizes',
        description:
          'Each range is filed under a size (simple tool, business application, platform) from the source’s own description. A source that only gives one overall figure stays in the overall range and does not enter the medians.',
      },
      {
        label: 'Calculation',
        title: 'Medians, not averages',
        description:
          'For each size, the median of the published floors and the median of the published ceilings. Subscriptions are converted to the total over the commitment period, hourly rates to days.',
      },
      {
        label: 'Update',
        title: 'One edition per year',
        description:
          'Prices checked twice a year, edition redone every year. A provider that publishes its prices can ask to be added.',
      },
    ],
  },
  faq: {
    eyebrow: 'Frequently asked questions',
    title: 'Custom software prices: your questions',
    questions: [
      {
        question: 'How much does custom software cost in 2026?',
        answer:
          'It depends on the project size and on who answers you. Across the 14 recorded sources, the published medians go from €5,000 to €12,500 for a simple tool, from €13,500 to €50,000 for a complete business application and from €50,000 to €150,000 for a platform. La Fabrique du Net, which measures budgets actually committed, finds a €30,000 median across all projects and €20,000 for a business application.',
      },
      {
        question: 'Why do prices go from €2,500 to €300,000?',
        answer:
          'Because "custom software" covers a schedule for three people as well as a platform for ten thousand users, and because an independent developer and a twenty-person agency do not sell the same structure. The widest ranges come from agencies that also serve large accounts.',
      },
      {
        question: 'Is a freelancer cheaper than an agency?',
        answer:
          'For the same scope, usually yes. Published daily rates go from €400 as a freelancer to €500 to €700 for an agency according to Lonestone, and up to €800 to €1,000 at Sokeo. A freelancer has no salesperson nor project manager to fund. In exchange, check that they have already delivered comparable projects and that the code will be handed over to you.',
      },
      {
        question: 'How much does maintaining custom software cost?',
        answer:
          'The agencies in the record announce 10 to 25% of the initial price per year, that is €5,000 to €12,500 per year for a €50,000 tool. I charge mine at a fixed price, €100 to €300 per month, hosting, backups and small changes included.',
      },
      {
        question: 'Is a subscription to off-the-shelf software not cheaper?',
        answer:
          'Over one year, almost always. Over five years, a subscription of €9 to €249 per month amounts to €540 to €14,940, against €11,000 to €33,000 for a custom business application with me, maintenance included. The real question lies elsewhere: if the off-the-shelf software fits the way you work, take it. My trade tests tell you in six questions.',
      },
      {
        question: 'What is not in this barometer?',
        answer:
          'Quotes, discounts and negotiated prices, which nobody publishes. Providers that give no public figure (KC Web or Scale-me, for example) were read but do not enter the medians. And prices outside France.',
      },
      {
        question: 'How do I estimate my own project?',
        answer:
          'With the three-question estimator of the business software page, which gives a range for your project size. Then through a free thirty-minute call, to turn the range into a fixed-price quote.',
      },
      {
        question: 'Can I reuse these figures?',
        answer:
          'Yes. The record can be downloaded as a CSV under a CC BY 4.0 licence: cite "Dibodev, 2026 barometer of custom software prices" with a link to this page. If you spot a mistake, write to me, I correct it and date the correction.',
      },
    ],
  },
  relatedArticles: {
    title: 'Further reading',
    intro:
      'The articles that detail the price of a custom tool and the choice between off-the-shelf and custom software.',
  },
  contactCta: {
    title: 'You want a figure for your project, not a range?',
    description:
      'Describe your activity and what the tool must do. I reply within 24 hours with an order of magnitude, then a fixed-price quote if you want to go further. And if off-the-shelf software is enough, I tell you.',
    button: 'Discuss my project',
  },
}
