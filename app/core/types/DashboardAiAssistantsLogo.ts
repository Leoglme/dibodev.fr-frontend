import type { DashboardBrandLogoName } from '~/core/constants/dashboardBrandLogos'

export type DashboardAiAssistantsLogoSize = 'md' | 'lg'

/** One assistant of the group: its brand logo, or null when no free logo of the brand exists. */
export type DashboardAiAssistantBrand = {
  label: string
  logoName: DashboardBrandLogoName | null
}

export type DashboardAiAssistantsLogoProps = {
  size: DashboardAiAssistantsLogoSize
}
