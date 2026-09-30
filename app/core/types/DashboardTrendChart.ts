import type { SearchPerformanceTrendPoint } from '~~/server/types/dashboard/searchPerformance'

export type DashboardChartMarker = {
  date: string
  count: number
  note: string
}

export type DashboardTrendChartProps = {
  points: SearchPerformanceTrendPoint[]
  weekly: boolean
  markers: DashboardChartMarker[]
}

export type DashboardTrendChartAxisTick = { value: number; y: number; label: string }

export type DashboardTrendChartAxisLabel = {
  index: number
  x: number
  text: string
  anchor: 'start' | 'middle' | 'end'
}

export type DashboardTrendChartClickBar = {
  index: number
  x: number
  y: number
  width: number
  height: number
  value: number
}

export type DashboardTrendChartPlacedMarker = DashboardChartMarker & { x: number }

export type DashboardTrendChartMarkerPill = {
  key: string
  lineXs: number[]
  count: number
  label: string
  pillX: number
  pillWidth: number
}

export type DashboardTrendChartActivePoint = {
  x: number
  y: number
  title: string
  impressions: number
  clicks: number
  ctr: string
  note: string
}
