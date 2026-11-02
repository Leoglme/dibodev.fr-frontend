import type { H3Event } from 'h3'
import type { SiteAtelierDemoRequest, SiteAtelierDemoRequestResponse } from '~~/server/types/tools/siteAtelier'
import { createError, getRequestIP, readBody, setResponseHeader } from 'h3'
import { SiteAtelierDemoRequestService } from '~~/server/services/SiteAtelierDemoRequestService'

/**
 * POST /api/site-atelier/demo-request : keeps a demo request, mails it to the owner with its pictures and confirms it to the visitor.
 * @param {H3Event} event - The request, with the workshop answers, the visitor's e-mail and up to three pictures as body.
 * @returns {Promise<SiteAtelierDemoRequestResponse>} `sent`, or `ignored` when the honeypot was filled.
 * @throws {H3Error} 400 for an unusable request, 429 when the visitor asks too often, 500 when the e-mail cannot be sent.
 */
export default defineEventHandler(async (event: H3Event): Promise<SiteAtelierDemoRequestResponse> => {
  setResponseHeader(event, 'cache-control', 'no-store')
  SiteAtelierDemoRequestService.assertRateLimit(getRequestIP(event, { xForwardedFor: true }) ?? '')
  const body: unknown = await readBody<unknown>(event)
  if (typeof body !== 'object' || body === null || Array.isArray(body)) {
    throw createError({ statusCode: 400, statusMessage: 'Invalid payload.' })
  }
  const fields: Record<string, unknown> = body as Record<string, unknown>
  if (SiteAtelierDemoRequestService.isRobot(fields)) {
    return { outcome: 'ignored' }
  }
  const request: SiteAtelierDemoRequest = SiteAtelierDemoRequestService.parse(fields)
  await SiteAtelierDemoRequestService.submit(request)
  return { outcome: 'sent' }
})
