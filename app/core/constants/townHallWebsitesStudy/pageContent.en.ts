import type { DibodevTownHallWebsitesStudyPageContent } from '~/core/types/DibodevTownHallWebsitesStudyPage'
import { JOOMLA_VERSION_SOURCES } from '~/core/constants/joomlaVersionCheck/pageShared'
import { TOWN_HALL_WEBSITES_STUDY_SOURCES } from '~/core/constants/townHallWebsitesStudy/pageShared'

/** Every figure below comes from the stats.md of the 15-16 November 2026 survey: update them by hand after a new survey. */
export const TOWN_HALL_WEBSITES_STUDY_PAGE_CONTENT_EN: DibodevTownHallWebsitesStudyPageContent = {
  meta: {
    title: 'French town hall websites: are they up to date? 2026 study',
    description:
      '19,854 French town hall websites read on 15 and 16 November 2026: WordPress, PHP and Joomla versions, https, by department, method and limits.',
    datasetName: 'French town hall websites, survey of 15 and 16 November 2026',
    datasetDescription:
      'Figures aggregated by French department on the websites that town halls declare in the official French government directory: town halls, town halls without a declared website, websites read, WordPress and Joomla shares, websites that show their PHP version and, among them, those on a version that no longer receives security fixes. No town and no website address.',
  },
  breadcrumbLabel: 'French town hall websites',
  numberLocale: 'en-US',
  percentTemplate: '{value}%',
  hero: {
    titlePart1: 'Are the websites of ',
    titleHighlight: 'French town halls',
    titlePart2: ' up to date?',
    description:
      'On 15 and 16 November 2026, I read the home page of every website of their own that town halls in France declare in the official government directory, once each, like any visitor. 19,854 websites answered. Here is what they show of their software, with the base of every figure. Two things before you read: the PHP version can only be read on one website in four, and no town is named.',
    cta: 'Read the PHP version of a website',
    ctaSecondary: 'See the figures by department',
    reassurances: [
      'Aggregated figures, no town named',
      'Survey of 15 and 16 November 2026',
      'Data by department (CSV, CC BY)',
    ],
    stats: [
      { value: '19,854', label: 'town hall websites read' },
      { value: '48.3%', label: 'run WordPress' },
      { value: '35.6%', label: 'without PHP fixes, of 4,887 sites' },
    ],
  },
  keyFigures: {
    eyebrow: 'Key figures',
    title: 'What French town hall websites let you see',
    intro:
      'Each figure comes with its base, that is the number of websites it is calculated on. A website, here, is a distinct address: a merged commune or a group of communes can carry the website of several town halls.',
    indicatorColumnLabel: 'What is counted',
    basisColumnLabel: 'On what base',
    resultColumnLabel: 'Result',
    items: [
      {
        name: 'Town halls in the official directory',
        coverage:
          'Every “town hall” record of the French government directory, in 101 departments, overseas included (803 of them delegated or annex town halls).',
        price: '35,733',
        priceCondition:
          '13,363 without a declared website, 728 pointing to a Facebook page or a ready-made platform, 21,642 declaring a website of their own',
      },
      {
        name: 'Websites read',
        coverage: 'The 20,865 distinct websites declared by these 21,642 town halls, one read of the home page each.',
        price: '19,854',
        priceCondition:
          '95.2% of the 20,865; 1,011 did not answer properly (error response, domain not found, invalid certificate, timeout)',
      },
      {
        name: 'WordPress',
        coverage: 'The 19,854 websites read.',
        price: '48.3%',
        priceCondition:
          '9,592 websites. Far behind: Joomla 4.0% (798), Drupal 3.4% (670), TYPO3 3.3% (648), SPIP 1.0% (206); 16.6% (3,299) not identified',
      },
      {
        name: 'PHP version visible',
        coverage: 'The 19,854 websites read.',
        price: '24.6%',
        priceCondition: '4,887 websites, one in four. The PHP figures below only apply to them',
      },
      {
        name: 'PHP that no longer receives security fixes',
        coverage: 'The 4,887 websites that show their PHP version. Without fixes: PHP 8.1 and older.',
        price: '35.6%',
        priceCondition: '1,739 websites: PHP 5.x 361, PHP 7.0 to 7.3 384, PHP 7.4 684, PHP 8.0 140, PHP 8.1 170',
      },
      {
        name: 'PHP 8.2',
        coverage: 'The 4,887 websites that show their PHP version.',
        price: '9.3%',
        priceCondition:
          '454 websites, which lose their fixes on 31 December 2026. On 1 January 2027, 44.9% (2,193 of 4,887) will be without fixes if nothing changes',
      },
      {
        name: 'Joomla on a branch without fixes',
        coverage: 'The 580 Joomla websites whose version can be read, out of 798 (72.7%).',
        price: '58.8%',
        priceCondition: '341 websites on Joomla 1.x, 2.5, 3 or 4, including 248 on Joomla 3',
      },
      {
        name: 'WordPress two or more major versions behind',
        coverage:
          'The 5,155 WordPress websites whose version can be read, excluding a shared platform (see the box under the table).',
        price: '27.0%',
        priceCondition: '1,393 websites; 68.9% (3,554) are on the latest major version, 7.1',
      },
      {
        name: 'Without valid https',
        coverage: 'The 19,854 websites read.',
        price: '4.6%',
        priceCondition:
          '913 websites, 682 of them because of an invalid certificate (expired, issued for another name…), the others not answering over https',
      },
    ],
    calloutEmphasizedIntro: 'Read this before quoting a figure:',
    calloutText:
      'the PHP version can only be read on one website in four (4,887 of 19,854), and the 35.6% only applies to those websites. A website behind a firewall, a CDN or a host that hides this information does not show up, and it is mostly older hosting that shows its version: across all websites, the share would probably be lower. This is neither a ranking of towns nor a list of websites: no town is named, on this page or in the file.',
    calloutFootnote:
      'WordPress: 1,059 websites are identical (same version 6.6.1, same server, one shared installation). It is very probably a single shared platform, so a single technical decision: I leave it out to talk about websites managed one by one. Counting it, the share two or more major versions behind would be 39.5% (2,452 of 6,214).',
  },
  departments: {
    eyebrow: 'By department',
    title: 'The 15 French departments where I read the most websites',
    intro:
      'For each share, the count in brackets. The share of PHP without fixes is calculated on the department’s websites that show their version, often a few dozen: a few points between two departments mean nothing. All 101 departments are in the downloadable file.',
    departmentColumnLabel: 'Department',
    countsColumnLabel: 'Town halls and websites read',
    phpColumnLabel: 'PHP without fixes',
    nameTemplate: '{code} · {name}',
    countsTemplate:
      '{townHallCount} town halls in the directory, {withoutDeclaredWebsiteCount} of them without a declared website; {readWebsiteCount} websites read. WordPress: {wordpressShare} ({wordpressCount}), Joomla: {joomlaShare} ({joomlaCount}).',
    phpConditionTemplate: '{phpWithoutSecurityFixesCount} of {phpVisibleWebsiteCount} websites that show their PHP',
    noShareLabel: '–',
    csvEmphasizedIntro: 'All 101 departments, to download:',
    csvText:
      'one row per department, with the town halls in the directory, those without a declared website, the websites read, the WordPress and Joomla shares, the websites that show their PHP and, among them, those without fixes. No town, no website address, no provider in the file. CC BY 4.0 licence: cite “Dibodev, survey of 15 and 16 November 2026” with a link to this page.',
    csvLinkLabel: 'Download the figures by department (CSV)',
    openDataLinkLabel: 'See the record on data.gouv.fr',
    csvFootnote:
      'Small counts: Paris, Hauts-de-Seine, Seine-Saint-Denis and the overseas departments have fewer than 40 websites read. Their shares should not be discussed on their own.',
  },
  limits: {
    eyebrow: 'Limits',
    title: 'What these figures do not say',
    intro: 'I put them here rather than at the bottom of the page, because they change how the figures read.',
    items: [
      {
        icon: 'EyeOff',
        title: 'One website in four shows its PHP',
        description:
          '24.6% of the websites read (4,887 of 19,854). The others sit behind a firewall, a CDN such as Cloudflare or a host that hides the information. Older hosting shows it more often: extended to all websites, the “without fixes” share would probably be overestimated.',
      },
      {
        icon: 'Server',
        title: 'The version announced by the server',
        description:
          'It is the one the server writes in its answer. A host can serve another one without updating that line.',
      },
      {
        icon: 'Copy',
        title: 'Clusters of identical websites',
        description:
          '772 websites from one platform for communes (all on PHP 8.4.27), 1,059 identical WordPress 6.6.1 websites, 449 identical websites made with the same generator: a single technical decision weighs on hundreds of websites. Excluding the platforms for communes, 42.5% of the websites that show their PHP are without fixes (1,708 of 4,016).',
      },
      {
        icon: 'Search',
        title: 'Websites not identified',
        description:
          '16.6% of the websites read (3,299) remain not identified: custom-built website, or a tool that leaves no visible trace. 21 websites read at the start of the survey could not be reclassified after a fix to the detection.',
      },
      {
        icon: 'RotateCcw',
        title: 'A few duplicates',
        description:
          '90 of the 19,854 websites read (0.45%) lead to the same website as another address (with and without “www”, or a redirect to a shared website) and are counted twice. Effect on the shares: less than half a point, not corrected.',
      },
      {
        icon: 'Flag',
        title: 'Gaps in the directory',
        description:
          '13,363 town halls declare no website in it, and some do have one; a town hall can also declare an outdated website. The version can be read on 64.8% of WordPress websites and 72.7% of Joomla websites.',
      },
    ],
  },
  actions: {
    eyebrow: 'What it means for a town hall',
    title: 'What you can do for your town’s website',
    intro:
      'Read the PHP version, read the Joomla version if the website uses it, then plan the update. The first two only need the website’s address, with no access to its administration. The third is decided with the provider or the host.',
    items: {
      phpVersionCheck: {
        title: 'Read the website’s PHP version',
        description:
          'Enter the website’s address: the free tool reads the PHP version when the server shows it. PHP 8.1 and older no longer receive security fixes, PHP 8.2 loses them on 31 December 2026.',
        linkLabel: 'Read the PHP version',
      },
      joomlaVersionCheck: {
        title: 'If the website runs Joomla, read its version',
        description:
          'A second free tool reads the Joomla version from the public file made for that. Joomla 3 and Joomla 4 no longer receive fixes, Joomla 5 receives them until 12 October 2027.',
        linkLabel: 'Read the Joomla version',
      },
      phpUpdate: {
        title: 'Plan the PHP update',
        description:
          'Before 31 December 2026 if the website runs PHP 8.2 or older: update the website, then change the PHP version, after a backup and a test on a copy.',
        linkLabel: 'See the “PHP update” page',
      },
      joomlaUpdate: {
        title: 'For a Joomla website, one version at a time',
        description:
          'The move goes one branch after the other, up to Joomla 6, which receives security fixes until 16 October 2029. Plan it together with the PHP update.',
        linkLabel: 'See the “Joomla update” page',
      },
    },
  },
  sources: {
    eyebrow: 'The dates',
    title: 'End-of-support dates, read at the source',
    intro:
      'A version “without fixes”, here, is a version its project no longer fixes. Each date links to the project’s official page.',
    facts: [
      {
        contextLabel: '31 December 2026',
        title: 'PHP 8.2 loses its security fixes',
        text: 'PHP 8.3, 8.4 and 8.5 receive them until 31 December 2027, 2028 and 2029.',
        sourceName: 'PHP, supported versions',
        sourceUrl: JOOMLA_VERSION_SOURCES.phpSupportedVersions,
      },
      {
        contextLabel: '31 December 2025',
        title: 'PHP 8.1 and older: no fixes at all',
        text: 'PHP 8.1 has been end of life since 31 December 2025, PHP 8.0 since 26 November 2023, PHP 7.4 since 28 November 2022 and PHP 5.6 since 31 December 2018.',
        sourceName: 'PHP, unsupported branches',
        sourceUrl: TOWN_HALL_WEBSITES_STUDY_SOURCES.phpEndOfLife,
      },
      {
        contextLabel: '12 October 2027',
        title: 'Joomla 5, then Joomla 6',
        text: 'Joomla 5 receives security fixes until 12 October 2027, Joomla 6 until 16 October 2029. Latest versions at the time of the survey: 5.4.10 and 6.2.',
        sourceName: 'Joomla, release roadmap',
        sourceUrl: JOOMLA_VERSION_SOURCES.joomlaRoadmap,
      },
      {
        contextLabel: '14 October 2025',
        title: 'Joomla 4 is no longer supported',
        text: 'Joomla 4 has received no fixes at all since 14 October 2025.',
        sourceName: 'Joomla, releases 5.3.4 and 4.4.14',
        sourceUrl: JOOMLA_VERSION_SOURCES.joomla4EndOfSupport,
      },
      {
        contextLabel: '17 August 2023',
        title: 'Joomla 3, discontinued',
        text: 'Official support for Joomla 3 ended on 17 August 2023. The older 1.x and 2.5 branches are also counted as without fixes.',
        sourceName: 'Joomla Magazine, July 2023',
        sourceUrl: JOOMLA_VERSION_SOURCES.joomla3ExtendedSupport,
      },
      {
        contextLabel: 'WordPress 7.1.4',
        title: 'The latest WordPress version',
        text: 'Latest version released at the time of the survey, read on the official wordpress.org interface. The latest major version is therefore 7.1.',
        sourceName: 'WordPress.org, versions',
        sourceUrl: TOWN_HALL_WEBSITES_STUDY_SOURCES.wordpressVersionApi,
      },
      {
        contextLabel: '15 November 2026',
        title: 'The list of town halls',
        text: 'Full export of the French government directory (“api-lannuaire-administration” dataset), filtered on the “town hall” records.',
        sourceName: 'French government directory, service-public.fr',
        sourceUrl: TOWN_HALL_WEBSITES_STUDY_SOURCES.officialDirectory,
      },
    ],
    authorEmphasizedIntro: 'Who made this survey:',
    authorText:
      'me, Léo Guillaume, freelance developer near Rennes, France. I update websites running PHP, WordPress and Joomla for small businesses, freelancers and non-profits, remotely.',
    authorFootnote: 'Does a figure look wrong? Write to me, I fix it and date the fix.',
  },
  method: {
    eyebrow: 'Method',
    title: 'How this survey is made',
    intro:
      'A single read of each website’s home page, like any visitor. No attempt to get into a website, no login page opened.',
    steps: [
      {
        label: 'List',
        title: 'The official directory, town hall by town hall',
        description:
          'Full export of the French government directory, filtered on the “town hall” records, read on 15 November 2026. For each town hall, the first declared website that is neither a ready-made platform nor a social network, then a single row per website address.',
      },
      {
        label: 'Read',
        title: 'One home page, once',
        description:
          'A single request for the home page of each website, over https then http if needed, waiting 12 seconds at most. No page is kept, only the few pieces of information taken from it.',
      },
      {
        label: 'Tool',
        title: 'What the page shows',
        description:
          'The website’s tool is recognised from the traces it leaves in the page (WordPress, Joomla, Drupal, TYPO3 or SPIP folders), from the “generator” tag, then from the platforms for communes. The WordPress version comes from that tag or from the core files.',
      },
      {
        label: 'Versions',
        title: 'PHP and Joomla',
        description:
          'The PHP version comes from the information the server sends with the page. For Joomla, a second request reads the public version file that Joomla installs on every website. Never more than two requests per website.',
      },
      {
        label: 'Check',
        title: 'A count, then a check by hand',
        description:
          'Count per website address, each share with its base. 30 websites drawn at random were read again by hand on 16 November 2026: no difference on the tool, the version or PHP.',
      },
    ],
  },
  faq: {
    eyebrow: 'Frequently asked questions',
    title: 'French town hall websites: your questions',
    questions: [
      {
        question: 'How do I find out which PHP version my town’s website uses?',
        answer:
          'The simplest way: ask the website’s provider or host, who sees it in their customer area. Without access, the free tool on this website reads it when the server shows it, which happens on one town hall website in four (4,887 of 19,854 in this survey). If it does not show it, that says nothing about the version in use.',
      },
      {
        question: 'What happens on 1 January 2027?',
        answer:
          'PHP 8.2 no longer receives security fixes after 31 December 2026. The website keeps working, but a security problem found afterwards will no longer be fixed in that version. Among the French town hall websites that show their PHP, 9.3% run PHP 8.2 (454 of 4,887): if nothing changes, 44.9% (2,193 of 4,887) will be without fixes on 1 January 2027, against 35.6% today.',
      },
      {
        question: 'Why only one website in four?',
        answer:
          'Because most servers do not tell their PHP version: firewall, CDN such as Cloudflare, or a host that hides the information. 24.6% of the websites read show it (4,887 of 19,854). Older hosting shows it more often, so the 35.6% share would probably be lower across all websites. I give it for what it is: a measure on a quarter of the websites.',
      },
      {
        question: 'Why leave out 1,059 WordPress websites?',
        answer:
          'Because they are identical: same version 6.6.1, same server, one shared installation. It is very probably a single shared platform, so a single technical decision, not 1,059 websites managed one by one. Without them, 27.0% of the WordPress websites whose version can be read are two or more major versions behind (1,393 of 5,155); with them, 39.5% (2,452 of 6,214).',
      },
      {
        question: 'Which tools do French town hall websites use?',
        answer:
          'WordPress first: 48.3% of the websites read (9,592 of 19,854). Far behind come Joomla 4.0% (798), Drupal 3.4% (670), TYPO3 3.3% (648) and SPIP 1.0% (206), next to the platforms for communes and the website builders. 16.6% (3,299) remain not identified.',
      },
      {
        question: 'Where do town hall Joomla websites stand?',
        answer:
          'The version can be read on 580 of the 798 Joomla websites (72.7%). 58.8% of them (341 of 580) are on a branch without fixes, and Joomla 3 alone accounts for 248. 20.3% (118) already run Joomla 6. On the PHP side, 52.4% of the Joomla websites that show their version are without fixes (140 of 267).',
      },
      {
        question: 'Is my town’s website on a list?',
        answer:
          'No list is published. The page and the file only give totals, for France and by department: no town, no website address, no provider. For your town’s website, the two free tools on this website answer from its address alone.',
      },
      {
        question: 'Can these figures be reused?',
        answer:
          'Yes. The figures and the file by department are under the CC BY 4.0 licence: cite “Dibodev, survey of 15 and 16 November 2026” with a link to this page. Keep the base of each figure, especially for PHP: 35.6% of the 4,887 websites that show their version, not of the 19,854 websites read. A mistake? Write to me, I fix it and date the fix.',
      },
    ],
  },
  relatedArticles: {
    title: 'Further reading',
    intro: 'The guides to move to a supported PHP version and to Joomla 6.',
  },
  contactCta: {
    title: 'Unsure about your town’s website?',
    description:
      'Send me its address. I tell you in writing within 24 hours which versions it uses and what to plan before 31 December 2026, with no commitment.',
    button: 'Send the website address',
  },
}
