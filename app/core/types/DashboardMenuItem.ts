import type { DashboardIconName } from '~/core/constants/dashboardIcons'

export type DashboardMenuItemProps = {
  icon: DashboardIconName
  href: string | null
  isDanger: boolean
}
