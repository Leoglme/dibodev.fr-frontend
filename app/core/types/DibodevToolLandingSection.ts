import type { DibodevBreadcrumbItem } from '~/core/types/DibodevBreadcrumb'

/** `authorIntro` comes before the author's linked name ("Test conçu par"), `authorBio` after it, without a leading comma ("développeur…"). */
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
