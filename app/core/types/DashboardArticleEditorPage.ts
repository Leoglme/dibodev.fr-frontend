import type { ArticleEditorMode, ArticleRecord } from '~/types/dashboard'

export type DashboardArticleEditorBuffer = {
  mode: ArticleEditorMode
  currentId: string | null
  title: string
  slug: string
  excerpt: string
  metaTitle: string
  metaDescription: string
  tagsInput: string
  content: string
  coverUrl: string | null
  qualityScore: number | null
}

export type DashboardArticleDraftResponse = {
  record: ArticleRecord
}
