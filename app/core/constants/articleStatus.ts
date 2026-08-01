import type { ArticleEditorMode, ArticleRecordStatus, ArticleStatusBadge } from '~/types/dashboard'

/** Badge label + colors for each article lifecycle status (shared by the editor and the list). */
export const ARTICLE_STATUS_BADGES: Record<ArticleRecordStatus, ArticleStatusBadge> = {
  draft: { label: 'Brouillon', backgroundColor: '#35424d', textColor: '#f5f4fb' },
  scheduled: { label: 'Planifié', backgroundColor: '#3b3170', textColor: '#c9beff' },
  publishing: { label: 'Publication…', backgroundColor: '#4d3f1f', textColor: '#f5d98a' },
  published: { label: 'Publié', backgroundColor: '#1f4d3a', textColor: '#8af5c0' },
  failed: { label: 'Échec', backgroundColor: '#4d1f26', textColor: '#f58a9a' },
}

/** Human label for how an article was produced. */
export const ARTICLE_ORIGIN_LABELS: Record<ArticleEditorMode, string> = {
  manual: 'Manuel',
  ai: 'IA',
}
