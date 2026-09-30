import type { DashboardTone } from '~/core/types/Dashboard'

export type DashboardOverviewPipelineCell = { tab: string; label: string; count: number; tone: DashboardTone }

export type DashboardOverviewIndexingSegment = { label: string; count: number; color: string }

export type DashboardOverviewTranslationRow = { label: string; done: number; ratio: number }

export type DashboardOverviewScoreRing = { label: string; score: number | null }
