import type { DashboardScoreLevel } from '~/core/types/Dashboard'
import type { LighthouseCategoryId, LighthouseMetric } from '~~/server/types/lighthouse'

export type DashboardAuditCategory = { id: LighthouseCategoryId; label: string; hint: string; score: number | null }

export type DashboardAuditCategoryLabel = {
  label: string
  hint: string
}

export type DashboardAuditMetric = LighthouseMetric & {
  level: DashboardScoreLevel
}
