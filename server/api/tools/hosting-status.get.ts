import type { H3Event } from 'h3'
import { createError, getQuery, setResponseHeader } from 'h3'
import type {
  HostingProviderStatus,
  HostingStatusQuery,
  HostingStatusSnapshot,
} from '~~/server/types/tools/hostingStatus'
import { HostingStatusService } from '~~/server/services/HostingStatusService'

/**
 * GET /api/tools/hosting-status[?provider=<key>] : the status of every watched hosting provider, or of one of them.
 * @param {H3Event} event - The request.
 * @returns {Promise<HostingStatusSnapshot | HostingProviderStatus>} The snapshot, or the provider status.
 * @throws {H3Error} 400 for an unknown provider.
 */
export default defineEventHandler(async (event: H3Event): Promise<HostingStatusSnapshot | HostingProviderStatus> => {
  const query: HostingStatusQuery = getQuery(event)
  const provider: string = String(query.provider ?? '')
    .trim()
    .toLowerCase()

  setResponseHeader(event, 'cache-control', 'public, max-age=60')
  if (!provider) {
    return HostingStatusService.getSnapshot()
  }
  if (!HostingStatusService.isProviderKey(provider)) {
    throw createError({ statusCode: 400, statusMessage: 'Unknown hosting provider.' })
  }
  return HostingStatusService.getProvider(provider)
})
