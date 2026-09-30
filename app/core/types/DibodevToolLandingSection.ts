import type { DibodevBreadcrumbItem } from '~/core/types/DibodevBreadcrumb'

/** `authorIntro` and `authorBio` surround the author's linked name ("Test conçu par" … ", développeur…"). */
export type DibodevToolLandingSectionProps = {
  breadcrumbs: DibodevBreadcrumbItem[]
  titleBefore: string
  titleHighlight: string
  titleAfter: string
  description: string
  reassurances: string[]
  authorIntro: string
  authorBio: string
  updatedAt: string
}
