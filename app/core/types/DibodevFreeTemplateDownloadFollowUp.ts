import type { DibodevToolTeaserContent } from '~/core/types/DibodevToolTeaser'

/** How many of the document the visitor fills in each month: decides the next step offered after a download. */
export type DibodevFreeTemplateMonthlyVolume = 'low' | 'medium' | 'high'

export type DibodevFreeTemplateVolumeAdvice = {
  title: string
  text: string
}

export type DibodevFreeTemplateDownloadFollowUpWording = {
  title: string
  question: string
  hint: string
  volumeLabels: Record<DibodevFreeTemplateMonthlyVolume, string>
  advices: Record<DibodevFreeTemplateMonthlyVolume, DibodevFreeTemplateVolumeAdvice>
  otherTemplatesLinkLabel: string
  contactButtonLabel: string
}

export type DibodevFreeTemplateDownloadFollowUpProps = {
  teaser: DibodevToolTeaserContent
  downloadedFile: string
}
