import type { DibodevGoogleUpdateImpactPageContent } from '~/core/types/DibodevGoogleUpdateImpactPage'
import { GOOGLE_SEARCH_STATUS_DASHBOARD_URL } from '~/core/constants/googleSearchUpdates'
import {
  GOOGLE_CORE_UPDATES_SOURCE,
  GOOGLE_TRAFFIC_DROPS_SOURCE,
} from '~/core/constants/googleUpdateImpactCheck/pageShared'

export const GOOGLE_UPDATE_IMPACT_PAGE_EN: DibodevGoogleUpdateImpactPageContent = {
  meta: {
    title: 'Google update: is my site affected? Free test',
    description:
      'Google has been rolling out a ranking update since 10 November 2026. Search Console export or 5 questions: is your site affected?',
    inLanguage: 'en-GB',
    schemaAbout: 'Google’s November 2026 core update and its effect on the visibility of a website',
  },
  breadcrumbLabel: 'Google update: is my site affected?',
  shareImage: {
    titleLines: ['Google update:', 'is my site', 'affected?'],
    highlight: 'affected',
    subtitle: 'Search Console export or 5-question test',
    badge: 'Free · no sign-up',
    alt: 'Google update: is my site affected? Free tool on dibodev.fr',
  },
  hero: {
    titleBefore: 'Google update: is my site ',
    titleHighlight: 'affected',
    titleAfter: '?',
    reassurances: ['Free, no sign-up', 'File read in your browser', 'Dates re-read on Google on 16 November 2026'],
    briefTitle: 'In short, as of 16 November 2026',
    brief:
      'On 10 November 2026, Google launched a broad update of its ranking, the “November 2026 core update”, whose rollout may take up to two weeks. It is not a penalty: Google does not target any particular site or page. Before touching your site, wait for the end of the rollout, then one week, and compare with a week before the start.',
    authorIntro: 'Tool designed by',
    authorBio:
      'freelance developer near Rennes, France. I build and take over websites and business tools for small businesses.',
  },
  checker: {
    tabsLabel: 'Choose how to check',
    exportTabLabel: 'I have Search Console',
    exportTabHint: 'I drop my export, verdict with figures',
    quizTabLabel: 'I don’t have Search Console',
    quizTabHint: '5 questions, 1 minute',
    updateSelectLabel: 'Update compared',
    updateOptionTemplate: '{name} ({kind}, since {startDate})',
    updateKindLabels: { core: 'core update', spam: 'spam update' },
    dropZoneTitle: 'Drop your Search Console export',
    dropZoneText:
      'The .zip file downloaded from the Performance report, or its .csv files. You can drop several at once.',
    dropZoneButton: 'Choose a file',
    dropZoneFormats: '.zip or .csv',
    privacyNote: 'Your file is read in your browser. Nothing is sent to my server, nothing is kept.',
    readingLabel: 'Reading the file…',
    exampleButton: 'Try with an example',
    exampleBadge: 'Example: fictitious data',
    resetButton: 'Clear',
    errors: {
      zipUnsupported:
        'Your browser cannot open this .zip. Open it on your computer and drop here the .csv files it contains (Dates.csv and Pages.csv), or try with an up-to-date browser.',
      zipUnreadable: 'This .zip seems damaged. Export it again from Search Console, or drop its .csv files directly.',
      noRecognizedFile:
        'No Search Console file recognised. Drop the .zip of the Performance report, or its Dates.csv and Pages.csv files.',
    },
    exportStepsTitle: 'How to export from Search Console',
    exportSteps: [
      'Open Search Console, then the “Performance” report (left menu, “Search results”).',
      'Choose the “Last 3 months” period, or the “Compare” tab to set two periods side by side: the pages that moved then show up.',
      'Click “Export”, at the top right of the report.',
      'Choose “Download CSV”, then drop here the .zip you get, without opening it.',
    ],
    resultLabel: 'Result',
    idleTitle: 'Your verdict will show here',
    idleText: 'Drop your export, or try with an example to see what the result looks like.',
    verdictTitles: {
      affected: 'Affected, probably',
      stable: 'Not affected, according to your figures',
      winner: 'Rather a winner',
      startedBefore: 'The drop started before the update',
      tooEarly: 'Too early to conclude',
      unreadable: 'Comparison impossible with this file',
    },
    verdictTexts: {
      affected:
        'Since {startDate}, your {metric} are clearly below the same weekdays before, while the previous weeks held steady. The update is the most likely cause. It is not a penalty: don’t rewrite anything in a hurry, first check that the site works, then look at which pages dropped.',
      stable:
        'Since {startDate}, your {metric} stay within 20% of the same weekdays before. Nothing to do because of the update: carry on as before.',
      winner:
        'Since {startDate}, your {metric} are clearly above the same weekdays before. Keep what works, and don’t change everything now.',
      startedBefore:
        'Your {metric} had already dropped by 20% or more in the weeks before {startDate}. The update does not explain everything: look for another cause first (outage, change on the site, page links changed, season).',
      tooEarly:
        'During a rollout, figures move from one day to the next. Google advises waiting at least one week after the end of the rollout before comparing. Come back with a new export then.',
      unreadable: 'Something is missing to compare the days after the start with the days before.',
    },
    rolloutOngoingNote: 'The rollout that started on {startDate} has not been announced as complete.',
    rolloutWaitNote: 'The rollout ended on {endDate}: an export that goes at least to {waitUntil} will give a verdict.',
    provisionalTemplate: 'Provisional trend over {days} days: {trend}.',
    trendLabels: {
      affected: 'clearly down',
      stable: 'stable',
      winner: 'clearly up',
      startedBefore: 'down, but the drop had started before',
    },
    unreadableTexts: {
      noDates: 'The “Dates” file was not found. It is in the .zip exported from the Performance report.',
      noDaysBefore:
        'Your data starts too late: several weeks before {startDate} are needed. Export the “Last 3 months” period.',
      noTrafficBefore: 'No click and no impression before {startDate} in this file: nothing to compare.',
      endsBeforeUpdate: 'Your data stops before {startDate}, when the update started. Export a more recent period.',
    },
    figuresTitle: 'Your figures',
    metricLabels: { clicks: 'clicks', impressions: 'impressions' },
    currentFigureTemplate: '{metric} since {startDate} ({days} days)',
    baselineFigureLabel: 'Same weekdays, just before',
    changeFigureLabel: 'Change',
    changeBeforeFigureLabel: 'Change of the weeks before',
    changeBeforeUnknown: 'not measurable',
    pagesTitle: 'Your pages',
    droppedToZeroTitle: 'Dropped to zero impressions',
    biggestDropsTitle: 'Biggest drops',
    biggestGainsTitle: 'Biggest rises',
    pageImpressionsLabel: 'impressions, before then after',
    pagesEmptyList: 'None.',
    pagesNeedComparison:
      'To see the pages that moved, also export the report in “Compare” mode, for example the last 28 days against the previous 28 days.',
    pagesMissing: 'Add the “Pages” file of an export in “Compare” mode to see the pages that moved.',
    disclaimer: 'Automatic reading of your figures, not an audit. Thresholds and limits in the “Method” section.',
    ctaIntro:
      'A free first opinion on your figures? I take a look, and tell you where to start or whether it is better to wait.',
    idleCtaIntro: 'No time to export? Describe what you see, I give you a free first opinion.',
    ctaLabels: {
      affected: 'Get a first opinion on this drop',
      stable: 'Ask a question',
      winner: 'Ask a question',
      startedBefore: 'Find the cause with me',
      tooEarly: 'Get a free first opinion',
      unreadable: 'Describe what I see',
    },
    idleCtaLabel: 'Get a free first opinion',
  },
  mobileContactBar: {
    text: 'A first opinion on your drop?',
    buttonLabel: 'Contact me',
  },
  definition: {
    anchorId: 'mise-a-jour',
    eyebrow: 'What Google says',
    title: 'What a Google update is',
    intro: 'Six points re-read on 16 November 2026 in Google’s documentation and on its official dashboard.',
    facts: [
      {
        contextLabel: 'Several times a year',
        title: 'A broad update of the ranking',
        text: 'A “core update” is a broad change to the systems that rank Google’s results. Google makes several a year, and announces them on its official dashboard.',
        sourceName: 'Google Search Central, Google Search core updates',
        sourceUrl: GOOGLE_CORE_UPDATES_SOURCE.url,
      },
      {
        contextLabel: 'Not a penalty',
        title: 'It targets no site and no page',
        text: 'Google states that these updates don’t target specific sites or pages. A page that drops does not necessarily have a content problem.',
        sourceName: 'Google Search Central, Google Search core updates',
        sourceUrl: GOOGLE_CORE_UPDATES_SOURCE.url,
      },
      {
        contextLabel: 'Up to 2 weeks',
        title: 'A rollout over several days',
        text: 'The November 2026 update started on 10 November; Google announces a rollout that may take up to two weeks. The March and May 2026 ones lasted 12 days each.',
        sourceName: 'Google Search Status Dashboard',
        sourceUrl: GOOGLE_SEARCH_STATUS_DASHBOARD_URL,
      },
      {
        contextLabel: 'One week after',
        title: 'Wait, then compare',
        text: 'Google advises waiting at least one full week after the rollout ends, then comparing that week with a week before the start. It advises against quick fixes made in the heat of the moment.',
        sourceName: 'Google Search Central, Google Search core updates',
        sourceUrl: GOOGLE_CORE_UPDATES_SOURCE.url,
      },
      {
        contextLabel: 'Other causes',
        title: 'A drop is not always the update',
        text: 'Technical issue (server, robots.txt file, noindex tag), hack, manual action for spam, page links changed during a redesign, season or lower demand: Google also lists these causes in its guide to traffic drops.',
        sourceName: 'Google Search Central, debugging drops in Google Search traffic',
        sourceUrl: GOOGLE_TRAFFIC_DROPS_SOURCE.url,
      },
      {
        contextLabel: 'Recovering',
        title: 'A recovery is possible, with no guaranteed date',
        text: 'According to Google, a page can regain positions between two updates, within a few days or over several months. No one can promise a date.',
        sourceName: 'Google Search Central, Google Search core updates',
        sourceUrl: GOOGLE_CORE_UPDATES_SOURCE.url,
      },
    ],
  },
  calendar: {
    anchorId: 'calendrier',
    eyebrow: 'Calendar',
    title: 'Google’s updates in 2026',
    intro:
      'The core and spam updates read on the official Google Search Status Dashboard on 16 November 2026. Dates in Pacific time.',
    nameColumnLabel: 'Update',
    detailColumnLabel: 'Dates',
    linkColumnLabel: 'Source',
    linkLabel: 'Google’s dashboard',
    finishedTemplate: '{kind}, from {startDate} to {endDate}.',
    ongoingTemplate: '{kind}, since {startDate}. Ongoing on {readAt}.',
    kindLabels: { core: 'Core update', spam: 'Spam update' },
  },
  reading: {
    anchorId: 'lire-le-resultat',
    eyebrow: 'How to read the result',
    title: 'Six verdicts, and what they mean',
    intro:
      'With your export, the tool gives one of these six verdicts. The 5-question test says “update likely”, “another cause likely” or “too early to tell”.',
    items: [
      {
        title: 'Affected, probably',
        description:
          'A drop of 20% or more since the start, while the weeks before held steady. Don’t rewrite in a hurry: check the site, then look at the pages that dropped.',
      },
      {
        title: 'Not affected',
        description: 'Less than 20% of change, either way. The update changes nothing for you.',
      },
      {
        title: 'Rather a winner',
        description: 'A rise of 20% or more since the start. Keep what works.',
      },
      {
        title: 'The drop started before',
        description:
          'The weeks before the start had already lost 20% or more. Look for another cause first: outage, redesign, changed links, season.',
      },
      {
        title: 'Too early to conclude',
        description:
          'Less than 7 days of data, rollout not finished, or less than one week after the end. The provisional trend shows, with this caveat.',
      },
      {
        title: 'Comparison impossible',
        description:
          'No dates file, not enough weeks before the start, or no visits before. The message says what to export.',
      },
    ],
  },
  doAndDont: {
    anchorId: 'que-faire',
    eyebrow: 'What to do, what not to do',
    title: 'Six reflexes during a Google update',
    intro: 'In order. The most useful thing is often not to change anything too fast.',
    pitfallLabel: 'The common mistake',
    items: [
      {
        title: 'First check that the site works',
        text: 'Open your site on a phone and a computer, test the contact form, look at the “Pages” and “Security issues” reports in Search Console. An outage or a hack look like an update.',
        pitfall: 'Blaming Google while the site was down.',
      },
      {
        title: 'Don’t rewrite anything in a panic',
        text: 'Google advises against quick fixes. If you change everything during the rollout, you will no longer know what made the difference.',
        pitfall: 'Deleting pages or rewriting every title during the rollout.',
      },
      {
        title: 'Write down the dates',
        text: 'Write down the day the drop started, and what changed on the site in the weeks before (redesign, host, extension, page links).',
        pitfall: 'Relying on your memory a month later.',
      },
      {
        title: 'Wait for the end, then one week',
        text: 'Google’s dashboard shows when the rollout is complete. One week later, export again and compare with a week before the start.',
        pitfall: 'Concluding on day three, while the figures are still moving.',
      },
      {
        title: 'Look page by page',
        text: 'A drop across the site and a drop on two or three pages are not handled the same way. Search Console’s “Compare” mode shows which ones moved.',
        pitfall: 'Redoing everything when only three pages dropped.',
      },
      {
        title: 'Improve for your customers, not for Google',
        text: 'If a page dropped, ask yourself whether it answers your customers’ question well: up-to-date information, prices, area, lead times, a way to reach you.',
        pitfall: 'Adding keywords everywhere.',
      },
    ],
  },
  ownSite: {
    anchorId: 'mon-site',
    eyebrow: 'First-hand',
    title: 'What I measured on my own site',
    emphasizedIntro: 'Between 27 October and 12 November 2026,',
    text: '23 pages of dibodev.fr, in French, English and Spanish, lost all their impressions overnight, while staying indexed. More than half dropped before 10 November: the update is the likely context, not a proven cause. I decided not to touch any of these pages before the end of the rollout, and to compare one week after.',
    footnote: '',
  },
  method: {
    eyebrow: 'Method',
    title: 'Method and limits',
    intro: 'Simple thresholds, written here so that you can redo the calculation by hand.',
    steps: [
      {
        label: 'Days compared',
        title: 'A Monday against a Monday',
        description:
          'The days since the start of the update, five weeks at most, are compared with the same weekdays just before: we go back a whole number of weeks. The last day of the export is left out: Google has not finished counting it.',
      },
      {
        label: 'Measure',
        title: 'Clicks, or impressions',
        description:
          'Clicks when there are at least 100 of them over the period before, otherwise impressions, more numerous and less sensitive to chance.',
      },
      {
        label: 'Thresholds',
        title: '20%, one way or the other',
        description:
          'A drop of 20% or more: affected. A rise of 20% or more: winner. In between: stable. If the weeks before had already lost 20% or more against the weeks before them, the verdict becomes “the drop started before”.',
      },
      {
        label: 'Caution',
        title: 'Too early, as long as it moves',
        description:
          'Less than 7 days of data, rollout not finished, or less than one week after the end: “too early”, with the provisional trend from 3 days.',
      },
      {
        label: 'Pages',
        title: 'Only in comparison mode',
        description:
          'A page “dropped to zero” had at least 10 impressions over the period before and none after. Ten pages at most per list, sorted by impressions lost or gained.',
      },
      {
        label: 'Limits',
        title: 'A reading, not a diagnosis',
        description:
          'The tool knows neither your sector, nor the season, nor public holidays, nor your outages. The 5-question test gives a trend, never a certainty.',
      },
    ],
  },
  faq: {
    eyebrow: 'Frequently asked questions',
    title: 'Google update: the questions I get asked',
    questions: [
      {
        question: 'How do I know if my site was affected by the Google update?',
        answer:
          'Compare your clicks and impressions since the start of the update with the same weekdays before, in the Performance report of Search Console. The tool on this page does it for you from the export. A drop of 20% or more, which had not started before, makes the update likely. To conclude, wait one week after the end of the rollout.',
      },
      {
        question: 'How long does a Google update last?',
        answer:
          'Google usually announces a rollout that may take up to two weeks. In 2026, the March and May core updates lasted 12 days each, and the September spam update 14 days. The November one started on 10 November 2026: its end date shows on Google’s dashboard.',
      },
      {
        question: 'What is a core update?',
        answer:
          'It is a broad change to the systems that rank Google’s results, made several times a year. It does not target any particular site. Some pages go up, others go down, without the latter necessarily having a flaw.',
      },
      {
        question: 'My site disappeared from Google, is it a penalty?',
        answer:
          'A core update is not a penalty. If your site no longer appears even when you type your business name, look rather for a technical issue (blocked page, site down), a hack or a manual action: the “Manual actions” and “Security issues” reports in Search Console tell you.',
      },
      {
        question: 'Should I change my pages during an update?',
        answer:
          'No. Google advises against quick fixes, and a change during the rollout blurs the comparison. Only fix what is broken (form, page in error, dead link), and keep the rest for later.',
      },
      {
        question: 'When will my site recover?',
        answer:
          'No one can promise that. According to Google, a page can regain positions between two updates, within a few days or over several months, if it becomes more useful to the people who read it. A recovery is not guaranteed.',
      },
      {
        question: 'What is the difference between a core update and a spam update?',
        answer:
          'The core update reviews the ranking of all kinds of pages. The spam update targets sites that do not follow Google’s spam policies. Google’s dashboard lists them separately, with their dates.',
      },
      {
        question: 'How do I export my Search Console data?',
        answer:
          'In the “Performance” report, choose the “Last 3 months” period (or the “Compare” tab), click “Export” at the top right, then “Download CSV”. You get a .zip to drop as it is into the tool.',
      },
      {
        question: 'Is my file sent anywhere?',
        answer:
          'No. The .zip is opened and read by your browser, on your computer. Nothing is sent to my server and nothing is kept: close the page, everything is gone.',
      },
      {
        question: 'I don’t have Search Console, how can I know?',
        answer:
          'Take the 5-question test in the “I don’t have Search Console” tab: it gives a trend (update likely, another cause likely, or too early to tell). For a verdict with figures, Search Console is free: you just need to add your site to it.',
      },
      {
        question: 'My visits are dropping, but not my Google positions: where does it come from?',
        answer:
          'Often from somewhere other than Google: season, lower demand, outage, broken contact form, or traffic from another source (social networks, directory, ads). Compare with the same period last year and check the site.',
      },
    ],
  },
  relatedArticles: {
    title: 'Read also',
    intro: 'Articles on the visibility and security of small business websites.',
  },
  contactCta: {
    title: 'Have your visits from Google fallen?',
    description:
      'Send me your site’s link and what you see: I reply within 24 hours with a free first opinion, and tell you whether it is better to wait.',
    button: 'Ask for a first opinion',
  },
}
