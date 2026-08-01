import type {
  ArticleRecord,
  CreateArticleStoryOptions,
  ProcessQueueResponse,
  PublishToStoryblokParams,
  PublishToStoryblokResult,
  StoryblokArticleInput,
  TriggerRebuildResult,
} from '~~/server/types/dashboard/articles'
import type { StoryblokAssetRef } from '~~/server/utils/uploadImageToStoryblok'
import { markdownToRichtext } from '~~/server/utils/markdownToRichtext'
import { uploadImageToStoryblok } from '~~/server/utils/uploadImageToStoryblok'

const STORYBLOK_MAPI_BASE = 'https://mapi.storyblok.com/v1/spaces'
const GITHUB_API_BASE = 'https://api.github.com'
const DEPLOY_WORKFLOW_FILE = 'deploy-ovh.yml'
const RECORDS_KEY = 'articles:items'
const DATE_PATTERN = /^\d{4}-\d{2}-\d{2}$/

/**
 * Article domain service: local draft/queue persistence, Storyblok publication,
 * site rebuild and the drip queue. Consolidates every server-side action on an article.
 * All methods are static; the fs storage lives in the nitro `data` driver (./.data/kv).
 */
export class ArticleService {
  /**
   * Returns the shared fs-backed storage (nitro `data` driver).
   *
   * @returns The nitro storage instance.
   */
  private static getStore(): ReturnType<typeof useStorage> {
    return useStorage('data')
  }

  /**
   * Reads the full map of persisted article records (keyed by id).
   *
   * @returns A map of id to article record (empty when nothing is stored yet).
   */
  private static async getRecordsMap(): Promise<Record<string, ArticleRecord>> {
    const raw = await this.getStore().getItem<Record<string, ArticleRecord>>(RECORDS_KEY)
    return raw ?? {}
  }

  /**
   * Lists all article records, most recently updated first.
   *
   * @returns An array of article records sorted by descending updatedAt.
   */
  static async listRecords(): Promise<ArticleRecord[]> {
    const records = await this.getRecordsMap()
    return Object.values(records).sort((a, b) => b.updatedAt.localeCompare(a.updatedAt))
  }

  /**
   * Fetches a single article record by id.
   *
   * @param id - The record identifier.
   * @returns The matching record, or null when it does not exist.
   */
  static async getRecord(id: string): Promise<ArticleRecord | null> {
    const records = await this.getRecordsMap()
    return records[id] ?? null
  }

  /**
   * Creates or overwrites an article record.
   *
   * @param record - The record to persist.
   * @returns Nothing.
   */
  static async saveRecord(record: ArticleRecord): Promise<void> {
    const records = await this.getRecordsMap()
    records[record.id] = record
    await this.getStore().setItem(RECORDS_KEY, records)
  }

  /**
   * Deletes an article record by id.
   *
   * @param id - The record identifier.
   * @returns True when a record was removed, false when the id was unknown.
   */
  static async deleteRecord(id: string): Promise<boolean> {
    const records = await this.getRecordsMap()
    if (!records[id]) return false
    delete records[id]
    await this.getStore().setItem(RECORDS_KEY, records)
    return true
  }

  /**
   * Lists scheduled records that are due for publication.
   *
   * @param nowIso - The current time as an ISO string (comparison boundary).
   * @returns Scheduled records whose scheduledAt is at or before nowIso, oldest first.
   */
  static async listDueScheduled(nowIso: string): Promise<ArticleRecord[]> {
    const records = await this.getRecordsMap()
    return Object.values(records)
      .filter(
        (record) =>
          record.status === 'scheduled' && typeof record.scheduledAt === 'string' && record.scheduledAt <= nowIso,
      )
      .sort((a, b) => (a.scheduledAt ?? '').localeCompare(b.scheduledAt ?? ''))
  }

  /**
   * Fetches the blog folder id from the Storyblok Management API.
   *
   * @param spaceId - The Storyblok space id.
   * @param token - The Storyblok management token.
   * @returns The numeric id of the `blog` folder.
   * @throws Error when the API call fails or the folder is missing.
   */
  static async getBlogFolderId(spaceId: string, token: string): Promise<number> {
    const url = `${STORYBLOK_MAPI_BASE}/${spaceId}/stories?per_page=100`
    const res = await fetch(url, {
      headers: { Authorization: token, Accept: 'application/json' },
    })
    if (!res.ok) {
      throw new Error(`Storyblok Management API error: ${res.status}`)
    }
    const data = (await res.json()) as { stories?: Array<{ id: number; slug: string; is_folder: boolean }> }
    const folder = data.stories?.find((s) => s.is_folder && (s.slug === 'blog' || s.slug === 'blog/'))
    if (!folder) {
      throw new Error('Blog folder not found in Storyblok.')
    }
    return folder.id
  }

  /**
   * Resolves the story date, defaulting to today when absent or malformed.
   *
   * @param date - The requested date (YYYY-MM-DD) or undefined.
   * @returns A valid YYYY-MM-DD date string.
   */
  private static resolveStoryDate(date?: string): string {
    if (date && DATE_PATTERN.test(date)) return date
    return new Date().toISOString().slice(0, 10)
  }

  /**
   * Creates (and optionally publishes) a blog article story in Storyblok.
   *
   * @param spaceId - The Storyblok space id.
   * @param token - The Storyblok management token.
   * @param parentId - The blog folder id (parent of the story).
   * @param article - The article fields to write.
   * @param options - Date and publish options.
   * @returns The created story id and full slug.
   * @throws Error when the cover upload or the story creation fails.
   */
  static async createStory(
    spaceId: string,
    token: string,
    parentId: number,
    article: StoryblokArticleInput,
    options: CreateArticleStoryOptions = {},
  ): Promise<{ id: number; full_slug: string }> {
    const richtext = markdownToRichtext(article.content)
    const date = this.resolveStoryDate(options.date)
    const shouldPublish = options.publish === false ? 0 : 1
    const tagsValue = article.tags.length > 0 ? article.tags.join(', ') : ''

    let coverAsset: StoryblokAssetRef | null = null
    if (article.coverImageUrl?.trim()) {
      try {
        coverAsset = await uploadImageToStoryblok(spaceId, token, article.coverImageUrl.trim(), article.slug)
      } catch (err) {
        const msg = err instanceof Error ? err.message : 'Upload failed'
        throw new Error(`Cover image upload failed: ${msg}`)
      }
    }

    const content: Record<string, unknown> = {
      component: 'article',
      slug: article.slug,
      title: article.title,
      excerpt: article.excerpt,
      content: richtext,
      date,
      tags: tagsValue,
      metaTitle: article.metaTitle,
      metaDescription: article.metaDescription,
    }
    if (coverAsset) {
      const assetPayload = {
        id: coverAsset.id,
        filename: coverAsset.filename,
        alt: '',
        name: '',
        focus: '',
        title: '',
        source: '',
        copyright: '',
        fieldtype: 'asset',
        meta_data: {},
        is_external_url: false,
      }
      content.coverImage = assetPayload
      content.ogImage = assetPayload
      content.cover_image = assetPayload
      content.og_image = assetPayload
      content.seo = {
        metaTitle: article.metaTitle,
        metaDescription: article.metaDescription,
        ogImage: assetPayload,
        og_image: assetPayload,
      }
    }

    const body = {
      story: {
        name: article.title,
        slug: article.slug,
        parent_id: parentId,
        content,
      },
      publish: shouldPublish,
    }

    const url = `${STORYBLOK_MAPI_BASE}/${spaceId}/stories/`
    const res = await fetch(url, {
      method: 'POST',
      headers: {
        Authorization: token,
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify(body),
    })

    if (!res.ok) {
      const errText = await res.text()
      throw new Error(`Storyblok create story failed: ${res.status} ${errText}`)
    }

    const data = (await res.json()) as { story?: { id: number; full_slug?: string } }
    const story = data.story
    if (!story) {
      throw new Error('Storyblok did not return the created story.')
    }

    return { id: story.id, full_slug: story.full_slug ?? `blog/${article.slug}` }
  }

  /**
   * Dispatches the deploy workflow on the repository's default branch (workflow_dispatch),
   * rebuilding and redeploying the static site.
   *
   * @param token - GitHub token with `actions:write` on the repo.
   * @param repo - Repository in "owner/repo" form.
   * @returns ok on success, otherwise the failing status code and message.
   */
  static async triggerSiteRebuild(token: string, repo: string): Promise<TriggerRebuildResult> {
    const headers: Record<string, string> = {
      Accept: 'application/vnd.github.v3+json',
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    }

    const repoRes = await fetch(`${GITHUB_API_BASE}/repos/${repo}`, { headers })
    if (!repoRes.ok) {
      const text = await repoRes.text()
      return { ok: false, statusCode: repoRes.status, message: text || `GitHub API ${repoRes.status}` }
    }
    const repoData = (await repoRes.json()) as { default_branch?: string }
    const branch = repoData.default_branch ?? 'main'

    const url = `${GITHUB_API_BASE}/repos/${repo}/actions/workflows/${DEPLOY_WORKFLOW_FILE}/dispatches`
    const res = await fetch(url, {
      method: 'POST',
      headers,
      body: JSON.stringify({ ref: branch }),
    })

    if (res.status === 204) {
      return { ok: true }
    }

    const text = await res.text()
    return { ok: false, statusCode: res.status, message: text || `GitHub API ${res.status}` }
  }

  /**
   * Publishes an article to the Storyblok blog folder and, when asked, triggers a site rebuild.
   * A rebuild failure never fails the publish: it is reported via rebuildError instead.
   *
   * @param params - Storyblok credentials, the article, the date and rebuild options.
   * @returns The created story id / full slug and the rebuild outcome.
   * @throws Error when the Storyblok creation itself fails.
   */
  static async publishToStoryblok(params: PublishToStoryblokParams): Promise<PublishToStoryblokResult> {
    const blogFolderId = await this.getBlogFolderId(params.spaceId, params.managementToken)
    const { id: storyId, full_slug: fullSlug } = await this.createStory(
      params.spaceId,
      params.managementToken,
      blogFolderId,
      params.article,
      { date: params.date, publish: true },
    )

    let rebuildTriggered = false
    let rebuildError: string | undefined
    if (params.rebuild) {
      if (params.githubToken && params.githubRepo) {
        const result = await this.triggerSiteRebuild(params.githubToken, params.githubRepo)
        if (result.ok) {
          rebuildTriggered = true
        } else {
          rebuildError = `Rebuild non déclenché (${result.statusCode}) : ${result.message}`
        }
      } else {
        rebuildError = 'Rebuild non déclenché : REPO_ACCESS_TOKEN ou REPO_SLUG manquant.'
      }
    }

    return { storyId, fullSlug, rebuildTriggered, rebuildError }
  }

  /**
   * Publishes every scheduled article whose time has come, then triggers a single site
   * rebuild for the whole batch (instead of one build per article). Each article's
   * lifecycle status is updated in storage; a failure on one does not stop the others.
   *
   * @returns A summary with the processed count and the published/failed ids.
   */
  static async processDueQueue(): Promise<ProcessQueueResponse> {
    const config = useRuntimeConfig()
    const spaceId = config.storyblokSpaceId as string
    const managementToken = config.storyblokManagementToken as string
    const githubToken = config.githubToken as string
    const githubRepo = config.githubRepo as string

    const publishedIds: string[] = []
    const failedIds: string[] = []

    if (!spaceId || !managementToken) {
      return { processed: 0, publishedIds, failedIds, message: 'Storyblok non configuré : file non traitée.' }
    }

    const due = await this.listDueScheduled(new Date().toISOString())
    let wantsRebuild = false

    for (const record of due) {
      await this.saveRecord({ ...record, status: 'publishing', updatedAt: new Date().toISOString() })
      try {
        const result = await this.publishToStoryblok({
          spaceId,
          managementToken,
          article: {
            title: record.title,
            slug: record.slug,
            excerpt: record.excerpt,
            metaTitle: record.metaTitle,
            metaDescription: record.metaDescription,
            tags: record.tags,
            content: record.content,
            coverImageUrl: record.coverImageUrl,
          },
          date: record.publishDate,
          rebuild: false,
        })
        const now = new Date().toISOString()
        const published: ArticleRecord = {
          ...record,
          status: 'published',
          storyblokId: result.storyId,
          fullSlug: result.fullSlug,
          publishedAt: now,
          updatedAt: now,
          error: undefined,
        }
        await this.saveRecord(published)
        publishedIds.push(record.id)
        if (record.autoRebuild) wantsRebuild = true
      } catch (err) {
        const message = err instanceof Error ? err.message : 'Unknown error'
        await this.saveRecord({ ...record, status: 'failed', error: message, updatedAt: new Date().toISOString() })
        failedIds.push(record.id)
      }
    }

    let rebuildNote = ''
    if (wantsRebuild) {
      if (githubToken && githubRepo) {
        const rebuild = await this.triggerSiteRebuild(githubToken, githubRepo)
        rebuildNote = rebuild.ok ? ' Rebuild déclenché.' : ` Rebuild non déclenché (${rebuild.statusCode}).`
      } else {
        rebuildNote = ' Rebuild non déclenché : REPO_ACCESS_TOKEN ou REPO_SLUG manquant.'
      }
    }

    return {
      processed: due.length,
      publishedIds,
      failedIds,
      message: `File traitée : ${publishedIds.length} publié(s), ${failedIds.length} échec(s).${rebuildNote}`,
    }
  }
}
