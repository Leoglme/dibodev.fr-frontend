import type { DibodevSectionTone } from '~/core/types/DibodevSectionTone'

/** One file of the template: `format` is written under the button ("PDF, 2 pages"). */
export type DibodevFreeTemplateDownload = {
  label: string
  href: string
  format: string
}

/** Texts of the free template offered on a trade tool page, in one language. */
export type DibodevFreeTemplateSectionContent = {
  anchorId: string
  eyebrow: string
  title: string
  description: string
  items: string[]
  downloads: DibodevFreeTemplateDownload[]
  footnote: string
}

export type DibodevFreeTemplateSectionProps = DibodevFreeTemplateSectionContent & {
  tone: DibodevSectionTone
  trackingLocation: string
}
