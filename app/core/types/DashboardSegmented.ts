import type { DashboardSegmentOption } from '~/core/types/Dashboard'

export type DashboardSegmentedProps = {
  modelValue: string
  options: DashboardSegmentOption[]
  screenReaderLabel: string
  compactOnMobile: boolean
}
