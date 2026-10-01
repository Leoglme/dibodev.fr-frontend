import type { DashboardIconName } from '~/core/constants/dashboardIcons'
import type { HomeFeaturedProjectsDevice } from '~/core/types/HomeFeaturedProjects'
import type { HomePageContent } from '~~/server/types/dashboard/homePage'

export type DashboardSitePreviewProps = {
  homePageContent: HomePageContent
}

export type DashboardSitePreviewScreen = {
  device: HomeFeaturedProjectsDevice
  label: string
  icon: DashboardIconName
  viewportWidth: number
}
