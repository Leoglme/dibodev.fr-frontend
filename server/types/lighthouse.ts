/**
 * Types pour la réponse simplifiée du rapport Lighthouse (PageSpeed Insights API v5).
 */

export type LighthouseCategoryId = 'performance' | 'accessibility' | 'best-practices' | 'seo'

export type LighthouseCategoryScore = {
  id: LighthouseCategoryId
  title: string
  score: number | null
}

export type LighthouseAuditItem = {
  id: string
  title: string
  description?: string
  score: number | null
  displayValue?: string
}

/** Rapport pour une stratégie (mobile ou desktop). */
export type LighthouseStrategyReport = {
  fetchTime: string
  categories: LighthouseCategoryScore[]
  audits: LighthouseAuditItem[]
  screenshotDataUrl: string | null
  runtimeError: string | null
}

export type LighthouseReportResponse = {
  requestedUrl: string
  finalUrl: string
  mobile: LighthouseStrategyReport
  desktop: LighthouseStrategyReport
}

export type LighthouseKeyMetric = {
  id: string
  label: string
}

export type LighthouseMetric = {
  id: string
  label: string
  displayValue: string
  score: number | null
}

export type LighthouseStrategySummary = {
  fetchTime: string
  scores: Record<LighthouseCategoryId, number | null>
  metrics: LighthouseMetric[]
  runtimeError: string | null
}

export type LighthouseSummary = {
  url: string
  auditedAt: string
  mobile: LighthouseStrategySummary
  desktop: LighthouseStrategySummary
}

export type LighthouseHistoryResponse = {
  summaries: LighthouseSummary[]
}
