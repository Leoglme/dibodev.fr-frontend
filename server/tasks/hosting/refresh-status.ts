import type { HostingStatusSnapshot } from '~~/server/types/tools/hostingStatus'
import { HostingStatusService } from '~~/server/services/HostingStatusService'

/**
 * Scheduled nitro task (nitro.scheduledTasks in nuxt.config): reads the watched hosting providers and stores the snapshot.
 */
export default defineTask({
  meta: {
    name: 'hosting:refresh-status',
    description: 'Lit les pages de statut des hébergeurs suivis et enregistre les changements.',
  },
  async run(): Promise<{ result: { checkedAt: string } }> {
    const snapshot: HostingStatusSnapshot = await HostingStatusService.refreshAll()

    return { result: { checkedAt: snapshot.checkedAt } }
  },
})
