import type { DashboardSitePreviewScreen } from '~/core/types/DashboardSitePreview'
import type { SiteEditorPreviewChannel } from '~/core/types/SiteEditorPreview'

export const SITE_EDITOR_PREVIEW_PATH: string = '/dashboard/site-editor/preview'

export const SITE_EDITOR_PREVIEW_CHANNEL: SiteEditorPreviewChannel = 'dibodev-site-editor'

/** One common viewport width per screen range of the public site, widest first. */
export const DASHBOARD_SITE_PREVIEW_SCREENS: DashboardSitePreviewScreen[] = [
  { device: 'desktop', label: 'Ordinateur', icon: 'monitor', viewportWidth: 1280 },
  { device: 'laptop', label: 'Portable', icon: 'laptop', viewportWidth: 1100 },
  { device: 'tablet', label: 'Tablette', icon: 'tablet', viewportWidth: 820 },
  { device: 'phone', label: 'Téléphone', icon: 'smartphone', viewportWidth: 390 },
]
