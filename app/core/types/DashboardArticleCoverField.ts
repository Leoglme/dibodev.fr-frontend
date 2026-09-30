export type DashboardSuggestedCover = {
  url: string
  attribution: string
}

export type DashboardCoverSuggestionResponse = {
  url: string | null
  attribution: string | null
}

export type DashboardArticleCoverFieldProps = {
  modelValue: string | null
  articleTitle: string
  tags: string[]
}
