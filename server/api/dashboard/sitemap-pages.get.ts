import type { H3Event } from 'h3'
import { requireDashboardAuth } from '~~/server/utils/dashboardAuth'
import { getIndexingSources } from '~~/server/utils/indexingSources'
import type { IndexingStatusRow } from '~~/server/types/indexing'

export type SitemapPageItem = {
  url: string
  title: string
  type: IndexingStatusRow['type']
}

type SitemapPagesResponse = {
  items: SitemapPageItem[]
}

/**
 * GET /api/dashboard/sitemap-pages
 * Retourne la liste des URLs du site depuis le sitemap (pour la page Audit SEO).
 */
export default defineEventHandler(async (event: H3Event): Promise<SitemapPagesResponse> => {
  requireDashboardAuth(event)
  const config = useRuntimeConfig(event)
  const siteBaseUrl: string = String(config.indexingSiteUrl ?? 'https://dibodev.fr').replace(/\/$/, '')

  const sources: IndexingStatusRow[] = await getIndexingSources(siteBaseUrl)
  const items: SitemapPageItem[] = sources.map((row: IndexingStatusRow) => ({
    url: row.url,
    title: row.title,
    type: row.type,
  }))

  return { items }
})
