import type { H3Event } from 'h3'
import { createError } from 'h3'
import { requireDashboardAuth } from '~~/server/utils/dashboardAuth'
import { getGoogleAuthUrl } from '~~/server/utils/gscAuth'

/**
 * GET /api/dashboard/gsc/auth-url
 * Returns the Google OAuth URL to connect Search Console (readonly). Redirect the user there to obtain a refresh token.
 */
export default defineEventHandler((event: H3Event) => {
  requireDashboardAuth(event)
  const config = useRuntimeConfig()
  const clientId = config.googleClientId as string
  if (!clientId) {
    throw createError({
      statusCode: 500,
      statusMessage: 'GOOGLE_CLIENT_ID not configured.',
    })
  }
  const host = getRequestHeader(event, 'host') || 'localhost:3000'
  const proto = getRequestHeader(event, 'x-forwarded-proto') || 'http'
  const redirectUri = `${proto === 'https' ? 'https' : 'http'}://${host}/api/dashboard/gsc/callback`
  const url = getGoogleAuthUrl(clientId, redirectUri)
  return { url }
})
