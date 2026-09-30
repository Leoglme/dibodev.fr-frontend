import type { DibodevSectionTone } from '~/core/types/DibodevSectionTone'

export type DibodevProjectSpotlightSectionProps = {
  eyebrow: string
  title: string
  description: string
  highlights: string[]
  linkLabel: string
  linkTo: string
  imageUrl: string
  imageSrcset: string
  imageAlt: string
  browserBarCaption: string
  showBrowserFrame: boolean
  tone: DibodevSectionTone
}
