import type { H3Event } from 'h3'
import { requireDashboardAuth } from '~~/server/utils/dashboardAuth'
import { getRefreshState, setRefreshState } from '~~/server/utils/indexingStorage'
import type { IndexingRefreshState } from '~~/server/types/indexing'

/**
 * POST /api/indexing-status/refresh-cancel
 * Demande l’annulation du job d’actualisation globale (prise en compte à la prochaine URL).
 */
export default defineEventHandler(async (event: H3Event) => {
  requireDashboardAuth(event)
  const current: IndexingRefreshState = await getRefreshState()
  if (current.status !== 'running') {
    return { ok: true, status: current.status, message: 'Aucune actualisation en cours.' }
  }
  await setRefreshState({ ...current, cancelled: true })
  return { ok: true, status: 'running', message: 'Annulation demandée.' }
})
