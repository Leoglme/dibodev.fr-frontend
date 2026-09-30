export type DashboardArticleQualityCheck = {
  label: string
  isPassed: boolean
}

export type DashboardArticleQualityCardProps = {
  tags: string[]
  qualityScore: number | null
  content: string
  metaTitle: string
  metaDescription: string
  coverUrl: string | null
}
