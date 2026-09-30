import type { DashboardKpi } from '~/core/types/Dashboard'

export type DashboardKpiBandProps = {
  kpis: DashboardKpi[]
  loading: boolean
  sparkColor: string
}
