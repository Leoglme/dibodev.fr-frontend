import type { DashboardDelta } from '~/core/types/Dashboard'

export type DashboardDeltaBadgeProps = {
  delta: DashboardDelta | null
  emptyLabel: string
}
