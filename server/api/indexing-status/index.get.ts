import type { H3Event } from 'h3'
import { requireDashboardAuth } from '~~/server/utils/dashboardAuth'
import { getIndexingRows, getRefreshState } from '~~/server/utils/indexingStorage'
import { getIndexingSources } from '~~/server/utils/indexingSources'
import type { IndexingRefreshState, IndexingStatusRow } from '~~/server/types/indexing'

type IndexingStatusResponse = {
  items: IndexingStatusRow[]
  refresh: IndexingRefreshState
  gscConnected: boolean
}

/**
 * GET /api/indexing-status
 * Retourne la liste depuis le cache (DB/storage) + fusion avec les sources pour avoir toutes les URLs.
 * Rapide : pas d’appel à Google.
 */
export default defineEventHandler(async (event: H3Event): Promise<IndexingStatusResponse> => {
  requireDashboardAuth(event)
  const config = useRuntimeConfig()
  const deliveryToken: string = String(config.storyblokDeliveryApiToken || '')
  if (!deliveryToken) {
    return {
      items: [] as IndexingStatusRow[],
      refresh: { status: 'idle' },
      gscConnected: false,
    }
  }

  const [sources, rows, refresh]: [
    IndexingStatusRow[],
    Record<string, IndexingStatusRow>,
    IndexingRefreshState,
  ] = await Promise.all([
    getIndexingSources(deliveryToken),
    getIndexingRows(),
    getRefreshState(),
  ])

  const items: IndexingStatusRow[] = sources.map((source: IndexingStatusRow) => {
    const cached: IndexingStatusRow | undefined = rows[source.url]
    return {
      ...source,
      ...cached,
      url: source.url,
      title: source.title,
      type: source.type,
    }
  })

  let gscConnected: boolean = false
  try {
    const { getGscAccessToken } = await import('~~/server/utils/gscAuth')
    await getGscAccessToken({
      gscServiceAccountJson: config.gscServiceAccountJson as string,
      googleClientId: config.googleClientId as string,
      googleClientSecret: config.googleClientSecret as string,
      gscRefreshToken: config.gscRefreshToken as string,
    })
    gscConnected = true
  } catch {
    // GSC non configuré
  }

  return {
    items,
    refresh: { status: refresh.status, startedAt: refresh.startedAt, finishedAt: refresh.finishedAt },
    gscConnected,
  }
})
