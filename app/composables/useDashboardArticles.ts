import type { ComputedRef, Ref } from 'vue'
import type { DashboardArticleRow, DashboardArticleStatus } from '~/core/types/Dashboard'
import type { ArticleRecord } from '~/types/dashboard'
import { computed } from 'vue'

export type StoryblokArticleSummary = {
  title: string
  slug: string
  fullSlug: string
  url: string
  date?: string
  excerpt?: string
  coverImageUrl?: string
}

export type ArticleCounts = Record<DashboardArticleStatus, number> & { total: number }

export type UseDashboardArticlesReturn = {
  records: Ref<ArticleRecord[]>
  publishedStories: Ref<StoryblokArticleSummary[]>
  loading: Ref<boolean>
  error: Ref<string>
  loadedAt: Ref<string | null>
  rows: ComputedRef<DashboardArticleRow[]>
  counts: ComputedRef<ArticleCounts>
  loadArticles: (force?: boolean) => Promise<void>
  removeRecord: (id: string) => Promise<void>
  processQueue: () => Promise<string>
  upsertRecord: (record: ArticleRecord) => void
}

/**
 * Articles of the back-office: local records (drafts, queue, published) merged with every article already on Storyblok.
 *
 * @returns {UseDashboardArticlesReturn} The records, merged rows, counts and actions.
 */
export function useDashboardArticles(): UseDashboardArticlesReturn {
  const records: Ref<ArticleRecord[]> = useState('dashboard-article-records', (): ArticleRecord[] => [])
  const publishedStories: Ref<StoryblokArticleSummary[]> = useState(
    'dashboard-article-stories',
    (): StoryblokArticleSummary[] => [],
  )
  const loading: Ref<boolean> = useState('dashboard-articles-loading', (): boolean => false)
  const error: Ref<string> = useState('dashboard-articles-error', (): string => '')
  const loadedAt: Ref<string | null> = useState('dashboard-articles-loaded-at', (): string | null => null)

  const rows: ComputedRef<DashboardArticleRow[]> = computed((): DashboardArticleRow[] => {
    const recordRows: DashboardArticleRow[] = records.value.map(recordToRow)
    const knownSlugs: Set<string> = new Set(
      records.value.flatMap((record: ArticleRecord): string[] =>
        [record.slug, record.fullSlug?.replace(/^blog\//, '') ?? ''].filter((slug: string): boolean => slug !== ''),
      ),
    )
    const storyRows: DashboardArticleRow[] = publishedStories.value
      .filter((story: StoryblokArticleSummary): boolean => !knownSlugs.has(story.slug))
      .map(storyToRow)
    return [...recordRows, ...storyRows].sort(compareRows)
  })

  const counts: ComputedRef<ArticleCounts> = computed((): ArticleCounts => {
    const result: ArticleCounts = { total: 0, draft: 0, scheduled: 0, publishing: 0, published: 0, failed: 0 }
    for (const row of rows.value) {
      result.total += 1
      result[row.status] += 1
    }
    return result
  })

  /**
   * Maps a local record to a list row.
   *
   * @param {ArticleRecord} record - The stored record.
   * @returns {DashboardArticleRow} The row.
   */
  function recordToRow(record: ArticleRecord): DashboardArticleRow {
    const dateKind: DashboardArticleRow['dateKind'] =
      record.status === 'scheduled' ? 'scheduled' : record.status === 'published' ? 'published' : 'updated'
    const dateIso: string | null =
      dateKind === 'scheduled'
        ? (record.scheduledAt ?? null)
        : dateKind === 'published'
          ? (record.publishedAt ?? record.publishDate ?? null)
          : record.updatedAt
    return {
      key: record.id,
      recordId: record.id,
      title: record.title || 'Sans titre',
      slug: record.slug,
      fullSlug: record.fullSlug ?? null,
      status: record.status,
      origin: record.origin,
      coverImageUrl: record.coverImageUrl ?? null,
      excerpt: record.excerpt,
      dateIso,
      dateKind,
      qualityScore: record.qualityScore ?? null,
      translated: null,
      error: record.error ?? null,
      record,
    }
  }

  /**
   * Maps a Storyblok-only article to a list row.
   *
   * @param {StoryblokArticleSummary} story - The published article.
   * @returns {DashboardArticleRow} The row.
   */
  function storyToRow(story: StoryblokArticleSummary): DashboardArticleRow {
    return {
      key: `story:${story.fullSlug}`,
      recordId: null,
      title: story.title,
      slug: story.slug,
      fullSlug: story.fullSlug,
      status: 'published',
      origin: null,
      coverImageUrl: story.coverImageUrl ?? null,
      excerpt: story.excerpt ?? '',
      dateIso: story.date ?? null,
      dateKind: 'published',
      qualityScore: null,
      translated: null,
      error: null,
      record: null,
    }
  }

  /**
   * Sort order: failures, drafts, queue first, then everything else by most recent date.
   *
   * @param {DashboardArticleRow} a - First row.
   * @param {DashboardArticleRow} b - Second row.
   * @returns {number} Negative when a comes first.
   */
  function compareRows(a: DashboardArticleRow, b: DashboardArticleRow): number {
    const rank: Record<DashboardArticleStatus, number> = {
      failed: 0,
      draft: 1,
      publishing: 2,
      scheduled: 3,
      published: 4,
    }
    if (rank[a.status] !== rank[b.status]) return rank[a.status] - rank[b.status]
    return (b.dateIso ?? '').localeCompare(a.dateIso ?? '')
  }

  /**
   * Loads the local records and the published Storyblok articles; the local records still show when Storyblok fails.
   *
   * @param {boolean} force - Reload even when data is already in memory.
   * @returns {Promise<void>}
   */
  async function loadArticles(force: boolean = false): Promise<void> {
    if (!force && loadedAt.value) return
    loading.value = true
    error.value = ''
    const [recordsResult, storiesResult] = await Promise.allSettled([
      $fetch<{ records: ArticleRecord[] }>('/api/dashboard/articles/drafts'),
      $fetch<{ articles: StoryblokArticleSummary[] }>('/api/dashboard/articles/list'),
    ])
    if (recordsResult.status === 'fulfilled') records.value = recordsResult.value.records
    else error.value = 'Impossible de charger les brouillons.'
    if (storiesResult.status === 'fulfilled') publishedStories.value = storiesResult.value.articles
    loadedAt.value = new Date().toISOString()
    loading.value = false
  }

  /**
   * Deletes a local record.
   *
   * @param {string} id - The record id.
   * @returns {Promise<void>}
   */
  async function removeRecord(id: string): Promise<void> {
    await $fetch(`/api/dashboard/articles/drafts/${id}`, { method: 'DELETE' })
    records.value = records.value.filter((record: ArticleRecord): boolean => record.id !== id)
  }

  /**
   * Publishes now every scheduled article whose time has come, then reloads the list.
   *
   * @returns {Promise<string>} The server message.
   */
  async function processQueue(): Promise<string> {
    const data: { message: string } = await $fetch<{ message: string }>('/api/dashboard/articles/process-queue', {
      method: 'POST',
    })
    await loadArticles(true)
    return data.message
  }

  /**
   * Inserts or replaces a record after an edit, without reloading the list.
   *
   * @param {ArticleRecord} record - The saved record.
   * @returns {void}
   */
  function upsertRecord(record: ArticleRecord): void {
    const exists: boolean = records.value.some((item: ArticleRecord): boolean => item.id === record.id)
    records.value = exists
      ? records.value.map((item: ArticleRecord): ArticleRecord => (item.id === record.id ? record : item))
      : [record, ...records.value]
  }

  return {
    records,
    publishedStories,
    loading,
    error,
    loadedAt,
    rows,
    counts,
    loadArticles,
    removeRecord,
    processQueue,
    upsertRecord,
  }
}
