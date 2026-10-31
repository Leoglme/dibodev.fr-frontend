import type { H3Event } from 'h3'
import { createError, readBody } from 'h3'
import type {
  SecurityAlertBroadcastPayload,
  SecurityAlertBroadcastResult,
  SecurityAlertTopic,
} from '~~/server/types/tools/securityAlerts'
import { SecurityAlertService } from '~~/server/services/SecurityAlertService'
import { requireDashboardAuth } from '~~/server/utils/dashboardAuth'

/**
 * POST /api/dashboard/security-alerts/send : sends an alert written by the owner to the confirmed subscribers of a topic.
 * @param {H3Event} event - The request, with `{ topic, texts: { fr, en?, es? }, dryRun? }` as body.
 * @returns {Promise<SecurityAlertBroadcastResult>} How many mails went out.
 * @throws {H3Error} 401 without the dashboard session, 400 for an unknown topic or missing French texts.
 */
export default defineEventHandler(async (event: H3Event): Promise<SecurityAlertBroadcastResult> => {
  requireDashboardAuth(event)
  const body: SecurityAlertBroadcastPayload = (await readBody<SecurityAlertBroadcastPayload>(event)) ?? {}
  const topic: SecurityAlertTopic | null = SecurityAlertService.parseTopic(body.topic)

  if (!topic) {
    throw createError({ statusCode: 400, statusMessage: 'Unknown alert topic.' })
  }
  return SecurityAlertService.broadcast(topic, body.texts ?? {}, body.dryRun === true)
})
