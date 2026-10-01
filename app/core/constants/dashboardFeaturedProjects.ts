import type { DashboardFeaturedProjectsPreviewScreen } from '~/core/types/DashboardFeaturedProjectsPreviewCard'

/** Grid widths are those of the public grid at 1440, 1180, 820 and 390 px viewports. */
export const DASHBOARD_FEATURED_PROJECTS_PREVIEW_SCREENS: DashboardFeaturedProjectsPreviewScreen[] = [
  { device: 'desktop', label: 'Ordinateur', icon: 'monitor', gridWidth: 1280, gridGap: 24, maximumScale: 1 },
  { device: 'laptop', label: 'Portable', icon: 'laptop', gridWidth: 1116, gridGap: 24, maximumScale: 1 },
  { device: 'tablet', label: 'Tablette', icon: 'tablet', gridWidth: 756, gridGap: 20, maximumScale: 1 },
  { device: 'phone', label: 'Téléphone', icon: 'smartphone', gridWidth: 342, gridGap: 20, maximumScale: 0.8 },
]
