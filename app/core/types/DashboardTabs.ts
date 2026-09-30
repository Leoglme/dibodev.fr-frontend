import type { DashboardTabItem } from '~/core/types/Dashboard'

export type DashboardTabsProps = {
  modelValue: string
  items: DashboardTabItem[]
  screenReaderLabel: string
}
