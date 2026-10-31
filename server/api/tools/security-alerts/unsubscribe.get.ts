import type { H3Event } from 'h3'
import { getQuery, sendRedirect } from 'h3'
import type { SecurityAlertSubscription } from '~~/server/types/tools/securityAlerts'
import { SecurityAlertService } from '~~/server/services/SecurityAlertService'
import { SECURITY_ALERT_LANDING_PATHS } from '~~/server/services/mail/securityAlertMailTexts'

/**
 * GET /api/tools/security-alerts/unsubscribe?token= : ends an alert and sends the visitor to the goodbye page.
 * @param {H3Event} event - The request.
 * @returns {Promise<void>} A redirect to the page in the subscriber's language, or to the invalid-link page.
 */
export default defineEventHandler(async (event: H3Event): Promise<void> => {
  const token: string = String(getQuery(event).token ?? '').trim()
  const subscription: SecurityAlertSubscription | null = token ? await SecurityAlertService.unsubscribe(token) : null

  if (!subscription) {
    return sendRedirect(event, SECURITY_ALERT_LANDING_PATHS.fr.invalid, 302)
  }
  return sendRedirect(event, SECURITY_ALERT_LANDING_PATHS[subscription.locale].unsubscribed, 302)
})
