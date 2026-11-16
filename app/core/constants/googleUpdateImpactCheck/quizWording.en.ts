import type { DibodevGoogleUpdateQuizWording } from '~/core/types/DibodevGoogleUpdateImpactQuiz'

export const GOOGLE_UPDATE_QUIZ_WORDING_EN: DibodevGoogleUpdateQuizWording = {
  quizName: 'Google update: is my site affected?',
  questions: [
    {
      id: 'timing',
      title: 'When did your visits from Google start to drop?',
      helpText: 'The Google update started on {startDate}.',
      leadMessageLabel: 'Start of the drop',
      display: 'list',
      selection: 'single',
      maxSelected: null,
      options: [
        { id: 'sinceStart', label: 'On {startDate}, or in the days after', unit: '', icon: null },
        { id: 'beforeStart', label: 'Before {startDate}', unit: '', icon: null },
        { id: 'fewDays', label: 'Only two or three days ago', unit: '', icon: null },
        { id: 'unknown', label: 'I don’t know', unit: '', icon: null },
      ],
    },
    {
      id: 'changes',
      title: 'What changed on your site in the month before?',
      helpText: 'A redesign or an outage makes visits drop just like an update.',
      leadMessageLabel: 'Recent change',
      display: 'cards',
      selection: 'single',
      maxSelected: null,
      options: [
        { id: 'nothing', label: 'Nothing, as far as I know', unit: '', icon: 'Check' },
        { id: 'redesign', label: 'Redesign, new theme or new host', unit: '', icon: 'Monitor' },
        { id: 'links', label: 'Page links changed, or pages deleted', unit: '', icon: 'Globe' },
        { id: 'outage', label: 'An outage, a slow or unreachable site', unit: '', icon: 'AlertCircle' },
      ],
    },
    {
      id: 'brand',
      title: 'If you type your business name into Google, does your site come up?',
      helpText: 'Try it now, in a private browsing window.',
      leadMessageLabel: 'Search on the name',
      display: 'list',
      selection: 'single',
      maxSelected: null,
      options: [
        { id: 'first', label: 'Yes, first', unit: '', icon: null },
        { id: 'lower', label: 'Yes, but lower than before', unit: '', icon: null },
        { id: 'missing', label: 'No, it no longer appears', unit: '', icon: null },
        { id: 'unchecked', label: 'I haven’t checked', unit: '', icon: null },
      ],
    },
    {
      id: 'scope',
      title: 'The drop affects…',
      helpText: '',
      leadMessageLabel: 'Extent',
      display: 'list',
      selection: 'single',
      maxSelected: null,
      options: [
        { id: 'allPages', label: 'The whole site', unit: '', icon: null },
        { id: 'somePages', label: 'A few pages', unit: '', icon: null },
        { id: 'unknown', label: 'I don’t know', unit: '', icon: null },
      ],
    },
    {
      id: 'impact',
      title: 'What is dropping?',
      helpText: '',
      leadMessageLabel: 'What drops',
      display: 'list',
      selection: 'single',
      maxSelected: null,
      options: [
        { id: 'visits', label: 'Visits', unit: '', icon: null },
        { id: 'requests', label: 'Requests (calls, quotes, forms), not visits', unit: '', icon: null },
        { id: 'both', label: 'Both', unit: '', icon: null },
        { id: 'unsure', label: 'I don’t know', unit: '', icon: null },
      ],
    },
  ],
  verdicts: {
    updateLikely: {
      title: 'Update likely',
      explanation:
        'From your answers, the drop started with the update of {startDate}, with no other known change on your site. It is likely, not certain: a Google update is not a penalty, it re-ranks pages. The right reflex: change nothing, wait for the end of the rollout, then one week, and compare.',
      headline: 'Update likely',
      headlineSuffix: 'change nothing during the rollout',
      nextStepValue: 'wait, then compare',
      ctaLabel: 'Get a free first opinion',
      leadBudget: 'Google update likely',
    },
    otherCauseLikely: {
      title: 'Another cause likely',
      explanation:
        'From your answers, the update does not explain everything: a change on the site, an outage, a blocked page or the season are more likely. Check this first, because it can be fixed, unlike a Google re-ranking.',
      headline: 'Another cause likely',
      headlineSuffix: 'to check before blaming Google',
      nextStepValue: 'check the site',
      ctaLabel: 'Find the cause with me',
      leadBudget: 'Another cause likely than the update',
    },
    tooEarlyToTell: {
      title: 'Too early to tell',
      explanation:
        'A drop of a few days, or one whose start you don’t know, can be a simple dip. During a rollout, positions move from one day to the next. Note the dates, touch nothing, and take the test again in a week.',
      headline: 'Too early to tell',
      headlineSuffix: 'the figures are still moving',
      nextStepValue: 'note the dates, wait',
      ctaLabel: 'Get a free first opinion',
      leadBudget: 'Too early to tell',
    },
  },
  cardEyebrow: 'The Google update',
  startLabel: 'Start',
  rolloutLabel: 'Rollout',
  rolloutOngoingValue: 'ongoing on {readAt}',
  rolloutFinishedTemplate: 'finished on {endDate}',
  reliableFromLabel: 'Reliable comparison',
  reliableFromOngoingValue: 'one week after the end',
  reliableFromTemplate: 'from {waitUntil}',
  nextStepLabel: 'To do',
  cardFootnote: 'Dates read on the official Google Search Status Dashboard on {readAt}.',
  cardFootnoteLinkLabel: 'See the calendar',
  cardFootnoteLinkHref: '#calendrier',
  adviceTitle: 'What I would do in your place',
  advice: {
    dontTouch:
      'Don’t rewrite your pages during the rollout: Google advises against quick fixes, and you would no longer know what made the difference.',
    waitWeekAfterEnd:
      'Keep an eye on Google’s dashboard: once the rollout is announced as complete, wait one more week before judging.',
    compareWithExport:
      'If you have access to Search Console, drop its export in the “I have Search Console” tab: the verdict will be backed by figures.',
    checkTechnical:
      'Run your site through the free “Test my website” tool (Tools menu): HTTPS, PHP version, WordPress, phone display. An outage or a hack makes visits fall just like an update.',
    checkRecentChanges:
      'A redesign or a change of host can break page links without redirects, or block Google by mistake (noindex tag, robots.txt file). Look at the “Pages” report in Search Console, or have it checked.',
    checkContactForm:
      'If visits hold but requests drop, Google has nothing to do with it: send yourself a message through your form and check that it arrives, spam folder included.',
    brandMissing:
      'A site that no longer shows up on its own name often has a technical issue (blocked page, site down) or a manual action. Look at the “Manual actions” and “Security issues” reports in Search Console.',
    season: 'Compare with the same period last year: a seasonal drop has nothing to do with Google.',
    somePagesOnly:
      'If only a few pages dropped, note which ones: that is where to work once the rollout is over, not on the whole site.',
    noteDates:
      'Write down today the day the drop started and what changed on the site: in a month, these dates will make the difference.',
  },
  summaryTemplate:
    'Drop: {timing}; recent change: {change}; business name: {brand}; extent: {scope}; what drops: {impact}.',
  timingWords: {
    sinceStart: 'since {startDate}',
    beforeStart: 'before {startDate}',
    fewDays: 'for two or three days',
    unknown: 'unknown date',
  },
  changeWords: {
    nothing: 'none',
    redesign: 'redesign or host',
    links: 'page links',
    outage: 'outage',
  },
  brandWords: {
    first: 'found first',
    lower: 'found, lower',
    missing: 'not found',
    unchecked: 'not checked',
  },
  scopeWords: {
    allPages: 'whole site',
    somePages: 'a few pages',
    unknown: 'unknown',
  },
  impactWords: {
    visits: 'visits',
    requests: 'requests',
    both: 'visits and requests',
    unsure: 'unknown',
  },
  disclaimer: 'Trend based on your answers, without your figures. This test does not replace a check of the site.',
  leadFormTitle: 'Tell me what you see',
  leadFormIntro:
    'Your site’s link, since when it has been dropping, what changed: I reply within 24 hours with a free first opinion.',
}
