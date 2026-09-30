import type { ArticleEditorMode } from '~/types/dashboard'

export type DashboardExistingSubjectsResponse = {
  existingSubjects: string[]
}

export type DashboardArticleAssistantCardProps = {
  isExpanded: boolean
  writingMode: ArticleEditorMode
  subjectIdea: string
}
