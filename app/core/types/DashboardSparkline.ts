export type DashboardSparklineProps = {
  values: number[]
  variant: 'line' | 'bars'
  color: string
}

export type DashboardSparklineBar = { x: number; y: number; width: number; height: number }
