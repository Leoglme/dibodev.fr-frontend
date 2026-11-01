import type { DibodevToolTeaserContent } from '~/core/types/DibodevToolTeaser'

/** One of the free templates: its page, its files, and the trade test it belongs to (`teaser` links the trade tool page). */
export type DibodevFreeTemplateCatalogEntry = {
  key: string
  routeName: string
  pdfPath: string
  xlsxPath: string
  icon: string
  teaser: DibodevToolTeaserContent
}
