import type { DibodevSectionTone } from '~/core/types/DibodevSectionTone'

/** One file of the template: `format` is written under the button ("PDF, 2 pages"). */
export type DibodevFreeTemplateDownload = {
  label: string
  href: string
  format: string
}

/** Texts of the free template offered on a trade tool page, in one language; `pageLink*` point to the page of the template when it has one. */
export type DibodevFreeTemplateSectionContent = {
  anchorId: string
  eyebrow: string
  title: string
  description: string
  items: string[]
  downloads: DibodevFreeTemplateDownload[]
  footnote: string
  pageLinkLabel?: string
  pageLinkRouteName?: string
}

export type DibodevFreeTemplateSectionProps = {
  anchorId: string
  eyebrow: string
  title: string
  description: string
  items: string[]
  downloads: DibodevFreeTemplateDownload[]
  footnote: string
  pageLinkLabel: string
  pageLinkRouteName: string
  tone: DibodevSectionTone
  trackingLocation: string
}

/** Download buttons of a free template: the first file is the main one, every click is sent to PostHog with `trackingLocation`. */
export type DibodevFreeTemplateDownloadLinksProps = {
  downloads: DibodevFreeTemplateDownload[]
  trackingLocation: string
}
