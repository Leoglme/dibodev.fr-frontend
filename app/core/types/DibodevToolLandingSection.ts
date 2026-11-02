import type { DibodevBreadcrumbItem } from '~/core/types/DibodevBreadcrumb'

export type DibodevToolLandingContentWidth = 'default' | 'wide'

/** `authorIntro` comes before the author's linked name ("Test conçu par"), `authorBio` after it, without a leading comma ("développeur…"); `aboutTitle` heads the description ("À propos du test" when empty); `intro` is an optional sentence under the title. */
export type DibodevToolLandingSectionProps = {
  breadcrumbs: DibodevBreadcrumbItem[]
  titleBefore: string
  titleHighlight: string
  titleAfter: string
  intro: string
  contentWidth: DibodevToolLandingContentWidth
  aboutTitle: string
  description: string
  reassurances: string[]
  authorIntro: string
  authorBio: string
  updatedAt: string
}
