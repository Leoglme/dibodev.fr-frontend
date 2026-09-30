export type DashboardTextFieldSize = 'sm' | 'md' | 'lg'

export type DashboardTextFieldProps = {
  modelValue: string
  multiline: boolean
  rows: number
  size: DashboardTextFieldSize
  isInvalid: boolean
}
