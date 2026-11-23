export type DashboardComparisonBarsOrientation = 'horizontal' | 'vertical'

export type DashboardComparisonBarsProps = {
  currentValue: number | null
  previousValue: number | null
  color: string
  tintColor: string
  orientation: DashboardComparisonBarsOrientation
}
