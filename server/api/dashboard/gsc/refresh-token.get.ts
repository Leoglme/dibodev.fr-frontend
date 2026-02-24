import type { H3Event } from 'h3'
import { createError } from 'h3'
import { getCookie, deleteCookie } from 'h3'
import { requireDashboardAuth } from '~~/server/utils/dashboardAuth'

const COOKIE_NAME = 'gsc_refresh_token'

/**
 * GET /api/dashboard/gsc/refresh-token
 * After OAuth callback, the refresh token is stored in a cookie. This endpoint returns it once so the user can copy it to .env as GSC_REFRESH_TOKEN, then clears the cookie.
 */
export default defineEventHandler((event: H3Event) => {
  requireDashboardAuth(event)
  const token = getCookie(event, COOKIE_NAME)
  if (token) {
    deleteCookie(event, COOKIE_NAME, { path: '/' })
    return { refreshToken: token }
  }
  throw createError({
    statusCode: 404,
    statusMessage: 'No refresh token in cookie. Connect Google Search Console first.',
  })
})
