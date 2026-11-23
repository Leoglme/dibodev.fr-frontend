import type { DashboardTabItem } from '~/core/types/Dashboard'
import type { DashboardWeeklyMetricKey } from '~/core/types/DashboardWeeklyPoint'
import type {
  DashboardWeeklyChannelDefinition,
  DashboardWeeklyDoneKindDefinition,
  DashboardWeeklyMetricDefinition,
  DashboardWeeklyTabKey,
} from '~/core/types/DashboardWeeklyPointsPage'

/** Figures small enough to compare by their difference ("+1") instead of a percentage. */
export const DASHBOARD_WEEKLY_DIFFERENCE_METRICS: DashboardWeeklyMetricKey[] = ['aiTestCitations', 'contactRequests']

/** Number of answers checked by the monthly AI test: `aiTestCitations` reads "19 sur 20". */
export const DASHBOARD_WEEKLY_AI_TEST_ANSWER_COUNT: number = 20

/** Share of a goal from which its ring turns green; it stays orange down to 50 %. */
export const DASHBOARD_WEEKLY_GOAL_REACHED_PERCENT: number = 80

/** Labels of every followed figure: `label` stands alone, `channelLabel` reads under its channel name. */
export const DASHBOARD_WEEKLY_METRICS: Record<DashboardWeeklyMetricKey, DashboardWeeklyMetricDefinition> = {
  googleClicks: { label: 'Clics Google', channelLabel: 'Clics', hint: null },
  googleImpressions: { label: 'Impressions Google', channelLabel: 'Impressions', hint: null },
  googleClicksExcludingSecurity: {
    label: 'Clics Google hors pages sécurité',
    channelLabel: 'Clics hors pages sécurité',
    hint: null,
  },
  googleImpressionsExcludingSecurity: {
    label: 'Impressions Google hors pages sécurité',
    channelLabel: 'Impressions hors pages sécurité',
    hint: null,
  },
  bingClicks: { label: 'Clics Bing', channelLabel: 'Clics', hint: null },
  bingImpressions: { label: 'Impressions Bing', channelLabel: 'Impressions', hint: null },
  aiVisits: { label: 'Visites venues d’une IA', channelLabel: 'Visites venues d’une IA', hint: null },
  chatgptVisits: { label: 'Visites venues de ChatGPT', channelLabel: 'Visites venues de ChatGPT', hint: null },
  copilotCitations: { label: 'Citations dans Copilot', channelLabel: 'Citations dans Copilot', hint: null },
  aiTestCitations: {
    label: 'Réponses d’IA qui citent Dibodev',
    channelLabel: 'Réponses qui citent Dibodev',
    hint: 'Test mensuel',
  },
  siteVisits: { label: 'Visites du site', channelLabel: 'Visites', hint: null },
  templateDownloads: {
    label: 'Téléchargements de modèles',
    channelLabel: 'Téléchargements de modèles',
    hint: null,
  },
  contactRequests: {
    label: 'Demandes sérieuses',
    channelLabel: 'Demandes sérieuses',
    hint: 'formulaires triés à la main à chaque point',
  },
}

/** The four acquisition channels, in display order, with their colour and the figure shown first. */
export const DASHBOARD_WEEKLY_CHANNELS: DashboardWeeklyChannelDefinition[] = [
  {
    key: 'google',
    label: 'Google',
    sourceLabel: 'Search Console',
    color: '#4285f4',
    tintColor: '#cfe0fc',
    headlineMetric: 'googleClicks',
    headlineUnitSingular: 'clic',
    headlineUnitPlural: 'clics',
    metrics: [
      'googleClicks',
      'googleImpressions',
      'googleClicksExcludingSecurity',
      'googleImpressionsExcludingSecurity',
    ],
  },
  {
    key: 'bing',
    label: 'Bing',
    sourceLabel: 'Bing Webmaster Tools',
    color: '#0c8484',
    tintColor: '#c5e6e6',
    headlineMetric: 'bingClicks',
    headlineUnitSingular: 'clic',
    headlineUnitPlural: 'clics',
    metrics: ['bingClicks', 'bingImpressions'],
  },
  {
    key: 'aiAssistants',
    label: 'Assistants IA',
    sourceLabel: 'ChatGPT, Gemini, Copilot, Perplexity',
    color: '#be185d',
    tintColor: '#f6cfe2',
    headlineMetric: 'aiVisits',
    headlineUnitSingular: 'visite',
    headlineUnitPlural: 'visites',
    metrics: ['aiVisits', 'chatgptVisits', 'copilotCitations', 'aiTestCitations'],
  },
  {
    key: 'site',
    label: 'Sur le site',
    sourceLabel: 'PostHog',
    color: '#d98a1f',
    tintColor: '#f6dfb6',
    headlineMetric: 'templateDownloads',
    headlineUnitSingular: 'téléchargement',
    headlineUnitPlural: 'téléchargements',
    metrics: ['siteVisits', 'templateDownloads', 'contactRequests'],
  },
]

/** Every followed figure, channel after channel: order of the "De point en point" menu. */
export const DASHBOARD_WEEKLY_METRIC_KEYS: DashboardWeeklyMetricKey[] = DASHBOARD_WEEKLY_CHANNELS.flatMap(
  (channel: DashboardWeeklyChannelDefinition): DashboardWeeklyMetricKey[] => channel.metrics,
)

/** Groups of the "Ce qui a été fait" tab, in display order. */
export const DASHBOARD_WEEKLY_DONE_KINDS: DashboardWeeklyDoneKindDefinition[] = [
  { kind: 'page', label: 'Nouvelles pages', icon: 'panels-top-left', tone: 'cyan' },
  { kind: 'article', label: 'Articles', icon: 'file-text', tone: 'green' },
  { kind: 'update', label: 'Mises à jour', icon: 'refresh-cw', tone: 'pink' },
  { kind: 'action', label: 'Démarches', icon: 'send', tone: 'amber' },
]

export const DASHBOARD_WEEKLY_DEFAULT_TAB: DashboardWeeklyTabKey = 'resume'

/** Tabs of a weekly point, without their counters (added by the page). */
export const DASHBOARD_WEEKLY_TABS: Array<DashboardTabItem & { value: DashboardWeeklyTabKey }> = [
  { value: 'resume', label: 'Résumé' },
  { value: 'canaux', label: 'Canaux' },
  { value: 'fait', label: 'Ce qui a été fait' },
  { value: 'tests', label: 'Tests en cours' },
  { value: 'compte-rendu', label: 'Compte rendu' },
]
