import type { H3Event } from 'h3'
import { requireDashboardAuth } from '~~/server/utils/dashboardAuth'
import { getRefreshState, setRefreshState } from '~~/server/utils/indexingStorage'
import { runIndexingRefreshJob } from '~~/server/utils/indexingJob'

/**
 * POST /api/indexing-status/refresh
 * Lance le job asynchrone de mise à jour des statuts (sans attendre la fin).
 */
export default defineEventHandler(async (event: H3Event) => {
  requireDashboardAuth(event)
  const current = await getRefreshState()
  if (current.status === 'running') {
    return { ok: true, status: 'running', message: 'Refresh déjà en cours.' }
  }

  await setRefreshState({
    status: 'running',
    startedAt: new Date().toISOString(),
  })

  runIndexingRefreshJob().catch((err) => {
    console.error('[indexing-status] refresh job error', err)
    setRefreshState({ status: 'idle' }).catch(() => {})
  })

  return { ok: true, status: 'running', message: 'Refresh démarré.' }
})
