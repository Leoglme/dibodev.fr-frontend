import type { DashboardIconName } from '~/core/constants/dashboardIcons'

export type DashboardButtonVariant = 'primary' | 'outline' | 'ghost' | 'danger'

export type DashboardButtonSize = 'sm' | 'md' | 'lg'

export type DashboardButtonProps = {
  variant: DashboardButtonVariant
  size: DashboardButtonSize
  icon: DashboardIconName | null
  trailingIcon: DashboardIconName | null
  square: boolean
  loading: boolean
  disabled: boolean
  block: boolean
  hasAccentIcon: boolean
  to: string | null
  href: string | null
  type: 'button' | 'submit'
}
