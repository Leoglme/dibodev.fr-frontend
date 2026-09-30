import type { DashboardChartColors, DashboardTone, DashboardToneClasses } from '~/core/types/Dashboard'

/** Violet is reserved for actions: as a tone it only marks the Articles module, never a text that looks clickable. */
export const DASHBOARD_TONES: Record<DashboardTone, DashboardToneClasses> = {
  ink: {
    tile: 'bg-(--dash-ink-tint) text-gray-100',
    badge: 'bg-(--dash-ink-tint) text-gray-100',
    text: 'text-gray-100',
    dot: 'bg-gray-100',
    hex: '#141414',
  },
  neutral: {
    tile: 'bg-gray-600 text-gray-200',
    badge: 'bg-gray-600 text-gray-200',
    text: 'text-gray-200',
    dot: 'bg-(--dash-faint)',
    hex: '#a3a39b',
  },
  violet: {
    tile: 'bg-(--dash-violet-tint) text-primary-dark',
    badge: 'bg-(--dash-violet-tint) text-primary-dark',
    text: 'text-primary-dark',
    dot: 'bg-primary-dark',
    hex: '#5b4bd0',
  },
  cyan: {
    tile: 'bg-(--dash-cyan-tint) text-(--dash-cyan)',
    badge: 'bg-(--dash-cyan-tint) text-(--dash-cyan)',
    text: 'text-(--dash-cyan)',
    dot: 'bg-(--dash-cyan)',
    hex: '#0e7490',
  },
  green: {
    tile: 'bg-(--dash-green-tint) text-(--dash-green)',
    badge: 'bg-(--dash-green-tint) text-(--dash-green)',
    text: 'text-(--dash-green)',
    dot: 'bg-(--dash-green)',
    hex: '#047857',
  },
  pink: {
    tile: 'bg-(--dash-pink-tint) text-(--dash-pink)',
    badge: 'bg-(--dash-pink-tint) text-(--dash-pink)',
    text: 'text-(--dash-pink)',
    dot: 'bg-(--dash-pink)',
    hex: '#be185d',
  },
  amber: {
    tile: 'bg-(--dash-amber-tint) text-(--dash-amber)',
    badge: 'bg-(--dash-amber-tint) text-(--dash-amber)',
    text: 'text-(--dash-amber)',
    dot: 'bg-(--dash-amber)',
    hex: '#b45309',
  },
  red: {
    tile: 'bg-(--dash-red-tint) text-(--dash-red)',
    badge: 'bg-(--dash-red-tint) text-(--dash-red)',
    text: 'text-(--dash-red)',
    dot: 'bg-(--dash-red)',
    hex: '#b42318',
  },
}

export const DASHBOARD_CHART_COLORS: DashboardChartColors = {
  good: '#1f9d63',
  average: '#e2a13b',
  poor: '#d64545',
  empty: '#d6d6cf',
}
