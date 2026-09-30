import type { DashboardIndexingState } from '~/core/types/Dashboard'

export type DashboardIndexingFilter = 'all' | DashboardIndexingState

export type DashboardIndexingRefreshProgress = { current: number; total: number; ratio: number; path: string }
