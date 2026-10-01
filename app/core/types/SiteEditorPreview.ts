import type { HomePageContent } from '~~/server/types/dashboard/homePage'

export type SiteEditorPreviewChannel = 'dibodev-site-editor'

/** Messages exchanged between the site editor and the preview page it frames: draft content one way, readiness and height the other. */
export type SiteEditorPreviewMessage =
  | { channel: SiteEditorPreviewChannel; type: 'content'; homePageContent: HomePageContent }
  | { channel: SiteEditorPreviewChannel; type: 'ready' }
  | { channel: SiteEditorPreviewChannel; type: 'height'; height: number }
