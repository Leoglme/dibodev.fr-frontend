import type { H3Event } from 'h3'
import { createError, getCookie } from 'h3'

const DASHBOARD_SESSION_COOKIE_NAME = 'dashboard_session' as const

/**
 * Handles GET requests to verify the current dashboard session.
 * Returns { ok: true } if the session cookie matches DASHBOARD_SESSION_TOKEN.
 *
 * @param event - The H3 event object.
 * @returns { ok: true } when authenticated.
 * @throws H3Error 401 when not authenticated.
 */
export default defineEventHandler(async (event: H3Event): Promise<{ ok: true }> => {
  const config = useRuntimeConfig(event)
  const sessionToken: string = config.dashboardSessionToken as string

  if (!sessionToken) {
    throw createError({
      statusCode: 500,
      statusMessage: 'Dashboard auth is not configured.',
    })
  }

  const cookieValue: string | undefined = getCookie(event, DASHBOARD_SESSION_COOKIE_NAME)

  if (cookieValue !== sessionToken) {
    throw createError({
      statusCode: 401,
      statusMessage: 'Unauthorized.',
    })
  }

  return { ok: true }
})
