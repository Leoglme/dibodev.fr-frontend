import type { H3Event } from 'h3'
import type { SiteCheckReportRequest, SiteCheckReportResponse } from '~~/server/types/tools/siteCheckReport'
import { createError, getRequestIP, readBody, setResponseHeader } from 'h3'
import { SiteCheckReportService } from '~~/server/services/SiteCheckReportService'

/**
 * POST /api/tools/site-check-report : e-mails the result of a free check, and the contact to the owner when accepted.
 * @param {H3Event} event - The request, with `{ tool, site, email, locale, contactConsent, pagePath, website }` as body.
 * @returns {Promise<SiteCheckReportResponse>} `sent`, or `ignored` when the honeypot was filled.
 * @throws {H3Error} 400 for an unusable request, 429 when asked too often, 502 for an unreadable site, 500 on mail failure.
 */
export default defineEventHandler(async (event: H3Event): Promise<SiteCheckReportResponse> => {
  setResponseHeader(event, 'cache-control', 'no-store')
  const body: unknown = await readBody<unknown>(event)
  if (typeof body !== 'object' || body === null || Array.isArray(body)) {
    throw createError({ statusCode: 400, statusMessage: 'Invalid payload.' })
  }
  const fields: Record<string, unknown> = body as Record<string, unknown>
  if (SiteCheckReportService.isRobot(fields)) {
    return { outcome: 'ignored' }
  }
  const request: SiteCheckReportRequest = SiteCheckReportService.parse(fields)
  SiteCheckReportService.assertRateLimit(getRequestIP(event, { xForwardedFor: true }) ?? '', request.email)
  await SiteCheckReportService.submit(request)
  return { outcome: 'sent' }
})
