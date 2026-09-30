import type { DashboardIconName } from '~/core/constants/dashboardIcons'
import type { DashboardArticleStatus, DashboardTone } from '~/core/types/Dashboard'
import type { ArticleEditorMode } from '~/types/dashboard'

export type ArticleStatusDisplay = {
  label: string
  tone: DashboardTone
  icon: DashboardIconName
}

/** Label and colour of each article lifecycle status (list, drawer, editor). */
export const DASHBOARD_ARTICLE_STATUSES: Record<DashboardArticleStatus, ArticleStatusDisplay> = {
  draft: { label: 'Brouillon', tone: 'neutral', icon: 'pen-line' },
  scheduled: { label: 'Planifié', tone: 'cyan', icon: 'calendar-clock' },
  publishing: { label: 'Publication…', tone: 'amber', icon: 'loader-circle' },
  published: { label: 'Publié', tone: 'green', icon: 'circle-check' },
  failed: { label: 'Échec', tone: 'red', icon: 'circle-alert' },
}

/** Human label for how an article was written. */
export const ARTICLE_ORIGIN_LABELS: Record<ArticleEditorMode, string> = {
  manual: 'Manuelle',
  ai: 'Avec l’IA',
}
