import type { H3Event } from 'h3'
import { createError } from 'h3'
import { readBody } from 'h3'
import { requireDashboardAuth } from '~~/server/utils/dashboardAuth'
import { getGscAccessToken } from '~~/server/utils/gscAuth'
import { inspectUrl } from '~~/server/utils/gscInspect'
import { getIndexingRows, setIndexingRow } from '~~/server/utils/indexingStorage'
import { getIndexingSources } from '~~/server/utils/indexingSources'
import type { IndexingStatusRow } from '~~/server/types/indexing'

/**
 * POST /api/indexing-status/refresh-url
 * Body: { url: string }
 * Inspecte une seule URL via GSC URL Inspection API, met à jour le cache et retourne la ligne.
 */
export default defineEventHandler(async (event: H3Event) => {
  requireDashboardAuth(event)
  const body: { url?: string } = await readBody<{ url?: string }>(event).catch(
    () => ({} as { url?: string }),
  )
  const url: string | undefined = body.url?.trim()
  if (!url) {
    throw createError({ statusCode: 400, statusMessage: 'Body must contain url.' })
  }
  if (!url.startsWith('https://dibodev.fr/') && url !== 'https://dibodev.fr') {
    throw createError({ statusCode: 400, statusMessage: 'URL must be on dibodev.fr.' })
  }

  const config = useRuntimeConfig()
  const deliveryToken: string = String(config.storyblokDeliveryApiToken || '')
  if (!deliveryToken) {
    throw createError({ statusCode: 503, statusMessage: 'Storyblok not configured.' })
  }

  const sources: IndexingStatusRow[] = await getIndexingSources(deliveryToken)
  const source = sources.find((s) => s.url === url)
  if (!source) {
    throw createError({ statusCode: 404, statusMessage: 'URL not in indexing sources.' })
  }

  let accessToken: string
  try {
    accessToken = await getGscAccessToken({
      gscServiceAccountJson: config.gscServiceAccountJson as string,
      googleClientId: config.googleClientId as string,
      googleClientSecret: config.googleClientSecret as string,
      gscRefreshToken: config.gscRefreshToken as string,
    })
  } catch (e) {
    const msg = e instanceof Error ? e.message : 'GSC not configured or token invalid.'
    console.error('[refresh-url] GSC auth error:', msg)
    throw createError({
      statusCode: 503,
      statusMessage: 'GSC non configuré ou token expiré. Utilise le bouton Actualiser global ou reconnecte GSC.',
    })
  }

  const quotaProjectId: string = (config.gscQuotaProjectId as string | undefined)?.trim() ?? ''
  let result
  try {
    result = await inspectUrl(url, accessToken, quotaProjectId)
  } catch (e) {
    const msg = e instanceof Error ? e.message : 'Erreur lors de l\'inspection de l\'URL.'
    console.error('[refresh-url] Inspect error:', msg)
    throw createError({
      statusCode: 500,
      statusMessage: 'Erreur lors de l\'inspection de l\'URL. Réessaie plus tard.',
    })
  }

  const rows = await getIndexingRows()
  const existing: IndexingStatusRow | undefined = rows[url]
  const row: IndexingStatusRow = {
    ...source,
    ...existing,
    url: source.url,
    title: source.title,
    type: source.type,
    verdict: result.verdict,
    coverageState: result.coverageState,
    lastCrawlTime: result.lastCrawlTime,
    inspectionResultLink: result.inspectionResultLink,
    googleCanonical: result.googleCanonical,
    checkedAt: new Date().toISOString(),
  }
  await setIndexingRow(row)

  return { ok: true, item: row }
})
