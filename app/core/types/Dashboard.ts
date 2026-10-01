import type { DashboardIconName } from '~/core/constants/dashboardIcons'
import type { SearchPerformancePeriod } from '~~/server/types/dashboard/searchPerformance'
import type { ArticleRecord } from '~/types/dashboard'

export type DashboardTone = 'ink' | 'neutral' | 'violet' | 'cyan' | 'green' | 'pink' | 'amber' | 'red'

export type DashboardToneClasses = {
  tile: string
  badge: string
  text: string
  dot: string
  hex: string
}

export type DashboardScoreLevel = 'good' | 'average' | 'poor' | 'empty'

export type DashboardChartColors = Record<DashboardScoreLevel, string>

export type DashboardSectionKey =
  | 'overview'
  | 'articles'
  | 'homePage'
  | 'translations'
  | 'search'
  | 'indexing'
  | 'audit'

export type DashboardNavItem = {
  key: DashboardSectionKey
  label: string
  path: string
  icon: DashboardIconName
  tone: DashboardTone
  matches: string[]
}

export type DashboardNavGroup = {
  label: string
  items: DashboardNavItem[]
}

export type DashboardToast = {
  id: number
  tone: DashboardTone
  icon: DashboardIconName
  title: string
  text: string
  actionLabel: string | null
  actionTo: string | null
  durationMs: number
}

export type DashboardToastInput = Pick<DashboardToast, 'title'> &
  Partial<Pick<DashboardToast, 'tone' | 'icon' | 'text' | 'actionLabel' | 'actionTo' | 'durationMs'>>

export type DashboardConfirmOptions = {
  title: string
  text?: string
  confirmLabel?: string
  danger?: boolean
}

export type DashboardDrawerKind = 'article' | 'publish' | 'indexing' | 'query'

export type DashboardDrawerEntry =
  | { kind: 'article'; articleKey: string; browseKeys: string[] }
  | { kind: 'publish'; articleId: string }
  | { kind: 'indexing'; url: string; browseUrls: string[] }
  | { kind: 'query'; query: string; period: SearchPerformancePeriod }

export type DashboardCommandGroup = 'Pages' | 'Actions' | 'Articles' | 'Pages du site' | 'Requêtes Google'

export type DashboardCommandItem = {
  id: string
  group: DashboardCommandGroup
  label: string
  description: string
  icon: DashboardIconName
  tone: DashboardTone
  keywords: string
  run: () => void
}

export type DashboardSegmentOption = {
  value: string
  label: string
  icon?: DashboardIconName | null
}

export type DashboardTabItem = {
  value: string
  label: string
  count?: number | null
  alert?: boolean
}

export type DashboardFilterChipOption = {
  value: string
  label: string
  count?: number | null
  dotColor?: string | null
}

export type DashboardSelectOption = {
  value: string
  label: string
}

export type DashboardDelta = {
  value: number
  text: string
  favourable: boolean | null
}

export type DashboardKpi = {
  key: string
  label: string
  value: string
  unit?: string
  delta: DashboardDelta | null
  comparisonLabel: string
  spark: number[]
  sparkStyle: 'line' | 'bars'
}

export type DashboardArticleStatus = 'draft' | 'scheduled' | 'publishing' | 'published' | 'failed'

export type DashboardArticleRow = {
  key: string
  recordId: string | null
  title: string
  slug: string
  fullSlug: string | null
  status: DashboardArticleStatus
  origin: 'manual' | 'ai' | null
  coverImageUrl: string | null
  excerpt: string
  dateIso: string | null
  dateKind: 'updated' | 'scheduled' | 'published'
  qualityScore: number | null
  translated: boolean | null
  error: string | null
  record: ArticleRecord | null
}

export type DashboardIndexingState = 'indexed' | 'not-indexed' | 'duplicate' | 'unknown' | 'excluded' | 'error'

export type DashboardTodoItem = {
  key: string
  tone: DashboardTone
  icon: DashboardIconName
  title: string
  text: string
  actionLabel: string
  actionPath: string
  actionQuery: Record<string, string>
}
