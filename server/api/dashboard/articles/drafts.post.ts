import type { H3Event } from 'h3'
import { createError, readBody } from 'h3'
import { randomUUID } from 'node:crypto'
import type {
  ArticleRecord,
  ArticleRecordStatus,
  SaveArticleDraftBody,
  SaveArticleDraftResponse,
} from '~~/server/types/dashboard/articles'
import { requireDashboardAuth } from '~~/server/utils/dashboardAuth'
import { ArticleService } from '~~/server/services/ArticleService'

const MAX_SLUG_LENGTH = 80

/**
 * Converts free text to a URL slug (lowercase, accents stripped, dash-separated).
 * NFD decomposition turns accented letters into base + combining mark; the
 * subsequent [^a-z0-9\s-] filter then drops the combining marks.
 *
 * @param input - The source text (slug or title).
 * @returns A normalized slug capped at MAX_SLUG_LENGTH.
 */
function slugify(input: string): string {
  return input
    .trim()
    .toLowerCase()
    .normalize('NFD')
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '')
    .slice(0, MAX_SLUG_LENGTH)
    .replace(/-+$/g, '')
}

/**
 * Normalizes a tags value (array or comma-separated string) to a clean string array.
 *
 * @param tags - The raw tags value.
 * @returns Trimmed, non-empty tags.
 */
function normalizeTags(tags: unknown): string[] {
  if (Array.isArray(tags)) return tags.map((t) => String(t).trim()).filter(Boolean)
  if (typeof tags === 'string')
    return tags
      .split(',')
      .map((t) => t.trim())
      .filter(Boolean)
  return []
}

/**
 * POST /api/dashboard/articles/drafts
 * Creates (no id) or updates (with id) a draft or scheduled article in local storage.
 * Publishing is handled separately by /api/dashboard/articles/publish.
 */
export default defineEventHandler(async (event: H3Event): Promise<SaveArticleDraftResponse> => {
  requireDashboardAuth(event)
  if (event.method !== 'POST') {
    throw createError({ statusCode: 405, statusMessage: 'Method Not Allowed' })
  }

  const body = (await readBody(event)) as SaveArticleDraftBody
  if (!body || typeof body.title !== 'string' || !body.title.trim()) {
    throw createError({ statusCode: 400, statusMessage: 'title is required.' })
  }

  const existing = body.id ? await ArticleService.getRecord(body.id) : null
  if (body.id && !existing) {
    throw createError({ statusCode: 404, statusMessage: 'Draft not found.' })
  }

  const now = new Date().toISOString()
  // Keep an explicit slug; otherwise preserve the existing one and only derive from the title
  // for a brand-new draft, so a partial update that omits the slug never overwrites a custom one.
  const slug =
    typeof body.slug === 'string' && body.slug.trim() ? slugify(body.slug) : (existing?.slug ?? slugify(body.title))

  const status: ArticleRecordStatus =
    body.status === 'scheduled' ? 'scheduled' : body.status === 'draft' ? 'draft' : (existing?.status ?? 'draft')

  const scheduledAt = body.scheduledAt ?? existing?.scheduledAt
  if (status === 'scheduled' && !scheduledAt) {
    throw createError({ statusCode: 400, statusMessage: 'scheduledAt is required for a scheduled article.' })
  }

  const record: ArticleRecord = {
    id: existing?.id ?? randomUUID(),
    status,
    origin: body.origin ?? existing?.origin ?? 'manual',
    title: body.title.trim(),
    slug,
    excerpt: typeof body.excerpt === 'string' ? body.excerpt : (existing?.excerpt ?? ''),
    metaTitle: typeof body.metaTitle === 'string' ? body.metaTitle : (existing?.metaTitle ?? ''),
    metaDescription:
      typeof body.metaDescription === 'string' ? body.metaDescription : (existing?.metaDescription ?? ''),
    tags: body.tags !== undefined ? normalizeTags(body.tags) : (existing?.tags ?? []),
    content: typeof body.content === 'string' ? body.content : (existing?.content ?? ''),
    coverImageUrl: body.coverImageUrl?.trim() || existing?.coverImageUrl,
    publishDate: body.publishDate || existing?.publishDate,
    scheduledAt: status === 'scheduled' ? scheduledAt : undefined,
    autoTranslate: body.autoTranslate ?? existing?.autoTranslate ?? true,
    autoRebuild: body.autoRebuild ?? existing?.autoRebuild ?? true,
    qualityScore: body.qualityScore ?? existing?.qualityScore,
    storyblokId: existing?.storyblokId,
    fullSlug: existing?.fullSlug,
    publishedAt: existing?.publishedAt,
    error: undefined,
    createdAt: existing?.createdAt ?? now,
    updatedAt: now,
  }

  await ArticleService.saveRecord(record)
  return { record }
})
