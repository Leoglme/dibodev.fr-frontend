import type { DibodevFreeTemplateDocument } from '~/core/types/DibodevFreeTemplatePage'
import type { DibodevSectionTone } from '~/core/types/DibodevSectionTone'

export type DibodevFreeTemplateDocumentsSectionProps = {
  anchorId: string
  eyebrow: string
  title: string
  intro: string
  documents: DibodevFreeTemplateDocument[]
  tone: DibodevSectionTone
}
