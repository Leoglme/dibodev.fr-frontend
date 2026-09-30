import type { DashboardArticleStatus } from '~/core/types/Dashboard'
import type { DashboardIconName } from '~/core/constants/dashboardIcons'

export type DashboardArticlesTab = 'all' | Exclude<DashboardArticleStatus, 'publishing'>

export type DashboardArticleLanguages = { english: boolean | null; spanish: boolean | null }

export type DashboardArticlesEmptyContent = { icon: DashboardIconName; title: string; text: string }
