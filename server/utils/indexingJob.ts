import type { IndexingStatusRow } from '~~/server/types/indexing'
import { getGscAccessToken } from '~~/server/utils/gscAuth'
import { inspectUrl } from '~~/server/utils/gscInspect'
import { getIndexingRows, setIndexingRows, setRefreshState } from '~~/server/utils/indexingStorage'
import { getIndexingSources } from '~~/server/utils/indexingSources'

const DELAY_BETWEEN_REQUESTS_MS = 1500

function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

/**
 * Job asynchrone : met à jour le cache d’indexation pour toutes les URLs (rate limit).
 * À lancer sans await depuis POST /api/indexing-status/refresh.
 */
export async function runIndexingRefreshJob(): Promise<void> {
  const config = useRuntimeConfig()
  const deliveryToken: string = String(config.storyblokDeliveryApiToken || '')
  if (!deliveryToken) {
    await setRefreshState({ status: 'idle' })
    return
  }

  let accessToken: string
  try {
    accessToken = await getGscAccessToken({
      gscServiceAccountJson: config.gscServiceAccountJson as string,
      googleClientId: config.googleClientId as string,
      googleClientSecret: config.googleClientSecret as string,
      gscRefreshToken: config.gscRefreshToken as string,
    })
  } catch {
    await setRefreshState({ status: 'idle' })
    return
  }

  const quotaProjectId: string = (config.gscQuotaProjectId as string | undefined)?.trim() ?? ''
  const sources: IndexingStatusRow[] = await getIndexingSources(deliveryToken)
  const rows: Record<string, IndexingStatusRow> = await getIndexingRows()

  for (const [index, source] of sources.entries()) {
    const existing: IndexingStatusRow | undefined = rows[source.url]
    const row: IndexingStatusRow = {
      ...source,
      ...existing,
      url: source.url,
      title: source.title,
      type: source.type,
    }
    try {
      const result = await inspectUrl(source.url, accessToken, quotaProjectId)
      row.verdict = result.verdict
      row.coverageState = result.coverageState
      row.lastCrawlTime = result.lastCrawlTime
      row.inspectionResultLink = result.inspectionResultLink
      row.googleCanonical = result.googleCanonical
      row.checkedAt = new Date().toISOString()
    } catch (err) {
      console.error('[indexing-job]', source.url, err)
      row.checkedAt = existing?.checkedAt
    }
    rows[source.url] = row
    await setIndexingRows(rows)

    if (index < sources.length - 1) {
      await sleep(DELAY_BETWEEN_REQUESTS_MS)
    }
  }

  await setRefreshState({
    status: 'idle',
    finishedAt: new Date().toISOString(),
  })
}
