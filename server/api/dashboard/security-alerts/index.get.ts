import type { H3Event } from 'h3'
import type { SecurityAlertDashboardSummary } from '~~/server/types/tools/securityAlerts'
import { SecurityAlertService } from '~~/server/services/SecurityAlertService'
import { requireDashboardAuth } from '~~/server/utils/dashboardAuth'

/**
 * GET /api/dashboard/security-alerts : the alert subscriptions, counted per topic, for the owner.
 * @param {H3Event} event - The request, with the dashboard session cookie.
 * @returns {Promise<SecurityAlertDashboardSummary>} The summary.
 */
export default defineEventHandler(async (event: H3Event): Promise<SecurityAlertDashboardSummary> => {
  requireDashboardAuth(event)
  return SecurityAlertService.summary()
})
