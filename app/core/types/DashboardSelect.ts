import type { DashboardSelectOption } from '~/core/types/Dashboard'

export type DashboardSelectProps = {
  modelValue: string
  options: DashboardSelectOption[]
  id: string
  screenReaderLabel: string
}
