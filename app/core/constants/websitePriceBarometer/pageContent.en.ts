import type { DibodevWebsitePriceBarometerPageContent } from '~/core/types/DibodevWebsitePriceBarometerPage'

/** The figures written in the FAQ and the callouts come from the dataset: update them by hand after each new edition. */
export const WEBSITE_PRICE_BAROMETER_PAGE_CONTENT_EN: DibodevWebsitePriceBarometerPageContent = {
  meta: {
    title: 'Website prices in France in 2026: barometer of 20 sources',
    description:
      'Prices displayed by 20 French freelancers, agencies, website builders and price guides, recorded on 1 November 2026: medians by website size and 3-year cost.',
    datasetName: '2026 barometer of website prices in France',
    datasetDescription:
      'Public website creation prices recorded on 1 November 2026 from 20 French sources (freelancers, agencies, website builders, price guides): one-page site, showcase site, complete site or shop, monthly maintenance and hosting, with or without VAT.',
  },
  breadcrumbLabel: 'Website prices in France',
  numberLocale: 'en-US',
  rangeTemplate: '€{min} to €{max}',
  monthlyRangeTemplate: '€{min} to €{max} per month',
  hero: {
    titlePart1: 'Website prices in France in 2026: what ',
    titleHighlight: '20 sources',
    titlePart2: ' really publish',
    description:
      'Instead of one more range, here are the prices French freelancers, agencies, website builders and price guides publish on their own pages, recorded the same day, with the medians by website size, the maintenance and the three-year cost. Mine are in the table.',
    cta: 'Ask for a quote',
    ctaSecondary: 'See the 20 sources',
    reassurances: [
      'Public prices, linked to their source',
      'Recorded on 1 November 2026',
      'Downloadable data (CSV, CC BY)',
    ],
    statLabels: {
      showcaseRange: 'showcase website, medians',
      sources: 'sources recorded',
      checkedAt: 'recording date',
    },
  },
  categories: {
    eyebrow: 'Key figures',
    title: 'Three website sizes, then the maintenance',
    intro:
      'For each size, the median of the floor prices and the median of the ceiling prices published by the sources that price it. A median is not pulled up by the two or three most expensive agencies, nor down by a teaser price.',
    categoryColumnLabel: 'Website size',
    coverageColumnLabel: 'What it covers',
    priceColumnLabel: 'Published medians',
    items: {
      onePage: {
        name: 'One-page website',
        coverage:
          'A single page presenting the business, its contact details and a form. For a business that is starting out, or a minimal presence.',
      },
      showcase: {
        name: 'Showcase website, 3 to 6 pages',
        coverage:
          'Home, services, about, contact, sometimes one page per service. The website of most tradespeople, shops and independents in France.',
      },
      fullShowcase: {
        name: 'Complete website or shop',
        coverage:
          'Ten pages and more, a blog, or a simple online shop. Each source says in its card which of the two it prices.',
      },
      maintenance: {
        name: 'Maintenance and hosting',
        coverage:
          'Hosting, domain name, updates and small changes, per month, from the freelancers and agencies that display it. The subscriptions of the website builders are in their cards.',
      },
    },
    conditionTemplate:
      '{count} sources: from the lowest floor, €{lowestFloor}, to the highest ceiling, €{highestCeiling}',
    maintenanceConditionTemplate: '{count} sources: from €{lowestFloor} to €{highestCeiling} per month',
    calloutEmphasizedIntro: 'With or without VAT:',
    calloutText:
      'each card repeats what the source says. French freelancers under the VAT exemption display net prices (no VAT applicable, article 293 B of the French tax code), agencies display prices before 20 % VAT, website builders sometimes one, sometimes the other. The medians mix the three, like the quotes you will receive.',
    calloutFootnote: 'Medians computed on the sources that price the website size, Dibodev included.',
  },
  sources: {
    eyebrow: 'The table',
    title: 'The 20 sources, each with its link',
    intro:
      'Each card repeats what the source itself publishes, without rounding, with the date of its page. Nothing was requested through a quote, no judgement on the providers.',
    wording: {
      kindLabels: {
        freelance: 'Freelancer',
        agency: 'Agency',
        builder: 'Website builder',
        guide: 'Price guide',
      },
      rangeLabels: {
        onePage: 'One-page website',
        showcase: 'Showcase website',
        fullShowcase: 'Complete website or shop',
      },
      maintenanceLabel: 'Per month',
      taxLabels: {
        excludingTax: 'prices before VAT',
        includingTax: 'prices including VAT',
        net: 'net prices, no VAT applicable',
        unspecified: 'VAT not specified',
      },
      rangeTemplate: '{label} €{min} to €{max}',
      openRangeTemplate: '{label} from €{min}',
      fixedPriceTemplate: '{label} €{value}',
      publishedTemplate: 'Recorded on {checkedAt}, page dated {publishedAt}.',
      notes: {
        'la-fabrique-du-net':
          'Barometer of 3,226 real budgets: overall median €5,000, showcase website median €3,500; "small business showcase site on Wix or WordPress €2,500 to €4,000", "polished SME showcase site €5,000 to €8,000", online shop €10,000 to €15,000.',
        codeur:
          'Guide titled 2025 (page updated on 18 March 2025): one-page site €300 to €1,500, simple showcase site €500 to €2,000, basic shop €1,000 to €5,000, maintenance €200 to €500 per year brought back to the month.',
        kolonell:
          '"France (EUR)" grid of a publisher based in Dakar: one-page site €400 to €950, 5 to 8-page showcase site €950 to €2,300, complete 10 to 20-page showcase site €1,850 to €4,600, shop €2,300 to €6,900.',
        'independant-io':
          'Website made by a professional "from €1,000 to more than €10,000"; maintenance €50 to €500 per month depending on the workload; hosting €50 to €200 per year.',
        'sk-web':
          'Link-in-bio from €440, Essentiel (1 to 3 pages) from €690, Business (4 to 6 pages) from €1,590, shop on quote, "paid once"; optional care plan after two months, €9, €22 or €32 per month depending on the offer.',
        'lucas-fonseque':
          'One page €800 before VAT, Showcase €1,500, Complete showcase €2,500, Custom (shop or large site) from €5,000 before VAT; maintenance €60 before VAT per month with a twelve-month commitment, hosting and domain name included.',
        'vorlyx-studio':
          'Essentiel €350 to €500 (1 page), Professionnel €700 to €2,000 (up to 5 pages), Premium on quote; hosting €150 to €180 per year, domain included, brought back to the month.',
        adekoite:
          'Standard showcase site €1,500 to €2,500 before VAT (5 to 10 pages), personalised €2,500 to €4,500 (10 to 20 pages), premium €5,000 to €8,000; maintenance from €70 before VAT per month, hosting and domain apart.',
        fsweb:
          'Essentiel showcase site from €990 before VAT (5 pages), Pro €1,990; Starter shop €1,990, Business shop €3,990, before VAT; maintenance €39 before VAT per month for a showcase site, €89 for a shop.',
        'marine-et-mots':
          'Projecteur and Performance offers from €2,000 to €3,500 before VAT depending on the options; "turnkey" template site €549; one-page offer without a displayed price.',
        dibodev:
          'That is me: template website €290 paid once, generated with DevLeadHunter (my product), domain and hosting included; custom showcase website from €1,500; maintenance of custom websites €100 to €300 per month.',
        fenxi: 'Showcase websites from €2,000 before VAT; UX/UI diagnosis €1,300 before VAT, deducted from a redesign.',
        'la-taniere-numerique':
          'Essentiel from €2,500 before VAT (5 pages, one year of hosting included), Business from €4,500 (up to 10 pages, blog), Premium from €7,500.',
        'e-cybercom':
          'WordPress landing page from €1,000 before VAT, 2 to 5-page WordPress showcase site from €2,000, WooCommerce shop from €3,500, redesign from €2,000, all before VAT.',
        simplebo:
          'Website made by Simplébo on subscription: €400 set-up then €60 per month (Site Web), €500 then €120 (Pack Croissance), €800 then €150 (Pack Complet), twelve-month commitment on monthly payment, domain name included.',
        solocal:
          'All-inclusive subscription, no creation price: Initiale from €64 per month (site made on your own), Confort from €114 (site made by their experts), Performance from €209.',
        wix: 'Light €16.80, Essentiel €30, Business €40.80, Business Plus €178.80 per month, prices of the yearly plans paid upfront, domain free for one year; no public price for a site made by an expert.',
        jimdo:
          'Start €12.10, Grow €20.17, Grow Legal €29.25, Unlimited €50.42 per month over twelve months, domain included; no public price for a site made for you.',
        webnode:
          'Limited €3.90, Mini €6.90, Standard €9.90, Pro €17.90 per month on yearly payment, domain free for one year except Limited.',
        ionos:
          'MyWebsite packs €10, €16 and €30 before VAT per month outside promotions (€1 or €6 the first months on offer), domain included the first year; the IONOS design service displays no price in 2026.',
      },
    },
    csvEmphasizedIntro: 'The data is yours too:',
    csvText:
      'the full record can be downloaded under the CC BY 4.0 licence. Cite "Dibodev, 2026 barometer of website prices in France" with a link to this page.',
    csvLinkLabel: 'Download the record (CSV)',
    csvFootnote: 'A source is missing or has changed its prices? Write to me, I correct it and date the correction.',
  },
  threeYears: {
    eyebrow: 'Over three years',
    title: 'Subscription, template website or custom: what it costs over three years',
    intro:
      'A subscription always looks cheaper the first month. Here is the three-year calculation for a showcase website, hosting and maintenance included.',
    criterionLabel: 'Criterion',
    columns: ['Website builder on subscription', 'Dibodev template website', 'Custom showcase website (medians)'],
    rows: [
      {
        label: 'Starting price',
        cells: [
          {
            state: 'yes',
            text: '{builderMonthly}, from the cheapest to the most expensive plan of the six builders recorded',
          },
          { state: 'yes', text: '{templatePrice} paid once, domain name and hosting included' },
          {
            state: 'partial',
            text: '{showcaseRange} at a fixed price (medians of the sources that price the showcase website)',
          },
        ],
      },
      {
        label: 'Three-year cost',
        cells: [
          { state: 'partial', text: '{builderThreeYears}' },
          { state: 'yes', text: '{templatePrice}' },
          { state: 'partial', text: '{customThreeYears}, maintenance of {maintenanceMonthly} included' },
        ],
      },
      {
        label: 'Domain name and hosting',
        cells: [
          { state: 'yes', text: 'Included in the subscription, domain often free the first year' },
          { state: 'yes', text: 'Included' },
          { state: 'partial', text: 'Apart (€10 to €100 per year) or in the maintenance' },
        ],
      },
      {
        label: 'What you own',
        cells: [
          { state: 'partial', text: 'Your texts and photos; the site stays on the platform' },
          { state: 'partial', text: 'Your texts and photos; the site is hosted by Dibodev' },
          { state: 'yes', text: 'The site, its code and its contents' },
        ],
      },
      {
        label: 'Going live',
        cells: [
          { state: 'yes', text: 'A few days, doing it yourself' },
          { state: 'yes', text: 'Within a week' },
          { state: 'partial', text: '3 to 6 weeks' },
        ],
      },
      {
        label: 'When it makes sense',
        cells: [
          { state: 'yes', text: 'A simple need, and time to do it yourself' },
          { state: 'yes', text: 'Being found quickly, without spending time on it or coming back to it' },
          { state: 'yes', text: 'One page per service, local SEO worked on, an image of your own' },
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
        title: 'The number of pages',
        description:
          'One page, five pages or twenty: almost every published grid is cut this way. At SK Web, an extra page costs €100; at Adekoite, going from 10 to 20 pages moves the range from €1,500-2,500 to €2,500-4,500 before VAT.',
      },
      {
        title: 'Template or custom',
        description:
          'A template website reuses a proven structure and design: €290 with me, €549 at Marine & Mots. A design drawn for you is paid apart: €600 to €1,200 before VAT at Adekoite, €1,500 before VAT at Simplébo.',
      },
      {
        title: 'The texts and the photos',
        description:
          'Who writes? If you provide texts and photos, the price goes down. Copywriting is billed €70 per page at SK Web; a copywriter costs €200 to €400 per day according to independant.io.',
      },
      {
        title: 'Search engine optimisation',
        description:
          'An "optimised" showcase site and a site built to rank on "plumber Rennes" do not take the same work. SEO is often an option: €400 then €50 per month at Simplébo, €250 to €700 per day as a service according to independant.io.',
      },
      {
        title: 'The extra features',
        description:
          'Online booking, payment, client area, shop: each feature adds days. Adekoite displays €400 before VAT for a booking feature, €500 for a member area; a shop starts at €1,990 before VAT at FSWeb.',
      },
      {
        title: 'Who answers you',
        description:
          'A freelancer has no salesperson nor project manager to fund: published daily rates go from €280 to €450 for a freelancer according to Codeur.com, while the agencies recorded start their showcase sites at €2,000 or €2,500 before VAT.',
      },
    ],
  },
  method: {
    eyebrow: 'Method',
    title: 'How this barometer is made',
    intro:
      'It does not measure quotes, but what each provider is willing to write publicly. That is its limit and its interest.',
    steps: [
      {
        label: 'Recording',
        title: 'Public pages, the same day',
        description:
          'The prices come from the pricing pages or the price guides of the sources, all read on 1 November 2026, with a link to each. No quote requested, no negotiated price.',
      },
      {
        label: 'Sorting',
        title: 'Three website sizes and the maintenance',
        description:
          'Each price goes into a size (one-page site, 3 to 6-page showcase site, complete site or shop) from the description of the source, and the maintenance or subscription into a per-month column. Yearly prices are brought back to the month.',
      },
      {
        label: 'Computing',
        title: 'Medians, not averages',
        description:
          'For each size, the median of the published floors and the median of the published ceilings. A "from" price counts for the floor only. The maintenance of freelancers and agencies is computed apart from the subscriptions of website builders.',
      },
      {
        label: 'Updating',
        title: 'One edition per year',
        description:
          'Prices rechecked twice a year, edition redone every year. A provider who publishes its prices can ask to be added to the record.',
      },
    ],
  },
  faq: {
    eyebrow: 'Frequently asked questions',
    title: 'Website prices in France: your questions',
    questions: [
      {
        question: 'How much does a website cost in France in 2026?',
        answer:
          'Across the 20 sources recorded on 1 November 2026, the published medians go from €420 to €950 for a one-page site, from €1,000 to €2,000 for a 3 to 6-page showcase site and from €2,500 to €4,600 for a complete site or a simple shop. Website builders on subscription go from €3.90 to €209 per month. La Fabrique du Net, which measures budgets actually committed, finds a median of €3,500 for a showcase website.',
      },
      {
        question: 'How much does a website cost for a tradesperson?',
        answer:
          'A tradesperson needs a 3 to 6-page showcase site: home, services, service area, contact. The published medians go from €1,000 to €2,000, from a €290 floor to a €10,000 ceiling. With me, it is €290 paid once for a template website, domain and hosting included, or from €1,500 for a custom website built to rank on the searches of your trade in your town.',
      },
      {
        question: 'A €290 website or a €1,500 website: what is the difference?',
        answer:
          'The €290 website is generated with DevLeadHunter, my product, from a template made for tradespeople: your texts, your photos, your contact details, your domain name and the hosting, online within a week, paid once. The €1,500 website is designed and written for you: one page per service, local SEO worked on, features of your own (online quotes, booking), and you own the code. The first one is there to exist and be found; the second one to stand out.',
      },
      {
        question: 'What does website maintenance include?',
        answer:
          'Hosting, the domain name, the updates of the CMS and its extensions, backups and a little change time every month. The freelancers and agencies recorded display €9 to €300 per month, with medians of €50 to €60 per month. I bill mine from €100 to €300 per month for a custom website, hosting, backups and small evolutions included; the €290 template website has none.',
      },
      {
        question: 'Is a Wix or Jimdo website cheaper?',
        answer:
          'The first month, yes. Over three years, a Wix plan of €16.80 to €178.80 per month adds up to €605 to €6,437, and the six builders recorded go from €140 to €7,524 over the period, against €290 for a template website paid once or €2,782 to €4,160 for a custom showcase website, maintenance included. The subscription has another cost: the site stays on the platform, and you start from scratch if you leave it.',
      },
      {
        question: 'How much do a domain name and hosting cost?',
        answer:
          'A .fr domain costs €4.99 before VAT the first year then €7.79 before VAT per year at OVHcloud (recorded on 1 November 2026). Shared hosting costs €1.59 before VAT per month the first year then €2.59 at OVHcloud, from €1.86 before VAT per month the first year at o2switch. That is €50 to €100 per year for both, often included in the maintenance or the subscription.',
      },
      {
        question: 'Are the prices with or without VAT?',
        answer:
          'Each card says so. French freelancers under the VAT exemption display net prices, with no VAT to add: that is my case (no VAT applicable, article 293 B of the French tax code). Agencies display prices before VAT, to which 20 % VAT is added, which you recover if you are VAT-registered. Website builders display sometimes prices before VAT (Webnode, IONOS, Simplébo), sometimes prices including VAT (Wix, Jimdo).',
      },
      {
        question: 'Pay once or subscribe?',
        answer:
          'Paying once suits a website that changes little: you own the site, and it then only costs its hosting, or a maintenance plan if you want one. A subscription suits you if you update your site often yourself and accept to stay on the platform. The three-year table of this page does the maths for both.',
      },
      {
        question: 'What is not in this barometer?',
        answer:
          'Quotes, discounts and negotiated prices, which nobody publishes. Complex shops and platforms, which belong to custom software. Providers that display no price, read but left out. And prices outside France.',
      },
      {
        question: 'Can I reuse these figures?',
        answer:
          'Yes. The record can be downloaded as a CSV under the CC BY 4.0 licence: cite "Dibodev, 2026 barometer of website prices in France" with a link to this page. If you spot an error or a price that has changed, write to me, I correct it and date the correction.',
      },
    ],
  },
  relatedArticles: {
    title: 'To go further',
    intro: 'The articles that help choose between a showcase website and a business tool, and fund the project.',
  },
  contactCta: {
    title: 'You want a price for your website, not a range?',
    description:
      'Tell me your trade, your town and what the website must do. I answer within 24 hours with a firm price: €290 for a template website, a fixed-price quote for a custom one. And if a website builder is enough, I tell you.',
    button: 'Ask for my price',
  },
}
