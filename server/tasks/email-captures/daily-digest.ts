import type { TaskEvent } from 'nitropack/types'
import type { EmailCaptureDigestRunResult } from '~~/server/types/mail/emailCaptureDigest'
import { EmailCaptureDigestService } from '~~/server/services/EmailCaptureDigestService'
import { SecurityAlertService } from '~~/server/services/SecurityAlertService'

/**
 * Scheduled nitro task (hourly, see nitro.scheduledTasks): erases the expired addresses, then sends the daily recap.
 */
export default defineTask({
  meta: {
    name: 'email-captures:daily-digest',
    description:
      'Efface les adresses arrivées au bout de leur délai, puis envoie le récap quotidien des formulaires du site.',
  },
  async run({ payload }: TaskEvent): Promise<{ result: EmailCaptureDigestRunResult }> {
    const isManualRun: boolean = payload.force === true || payload.force === 'true'

    await SecurityAlertService.eraseExpiredSubscriptions()
    return { result: await EmailCaptureDigestService.runDailyDigest(isManualRun) }
  },
})
