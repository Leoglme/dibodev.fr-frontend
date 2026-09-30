import type { DashboardIconName } from '~/core/constants/dashboardIcons'

export type DashboardEditorContentView = 'write' | 'preview'

export type DashboardMarkdownTool = {
  label: string
  icon: DashboardIconName
  prefix: string
  suffix: string
  placeholder: string
}

export type DashboardArticlePreviewRichtext = {
  type: string
  content?: unknown[]
}

export type DashboardArticlePreviewResponse = {
  contentRichtext: DashboardArticlePreviewRichtext
}

export type DashboardArticleContentEditorProps = {
  modelValue: string
  contentView: DashboardEditorContentView
  qualityScore: number | null
}
