import type { DashboardIconName } from '~/core/constants/dashboardIcons'
import type { DibodevProject } from '~/core/types/DibodevProject'
import type { HomeFeaturedProjectsDevice } from '~/core/types/HomeFeaturedProjects'

export type DashboardFeaturedProjectsPreviewCardProps = {
  projects: DibodevProject[]
}

/** Screen simulated by the preview; gridWidth and gridGap are in pixels, maximumScale keeps tall stacks compact. */
export type DashboardFeaturedProjectsPreviewScreen = {
  device: HomeFeaturedProjectsDevice
  label: string
  icon: DashboardIconName
  gridWidth: number
  gridGap: number
  maximumScale: number
}
