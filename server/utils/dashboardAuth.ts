import type { H3Event } from 'h3'
import { createError, getCookie } from 'h3'

const DASHBOARD_SESSION_COOKIE_NAME = 'dashboard_session' as const

/**
 * Verifies the dashboard session cookie. Throws 401 if missing or invalid.
 * Call this at the start of any dashboard API handler.
 *
 * @param event - The H3 event (request).
 * @throws H3Error 401 when not authenticated.
 */
export function requireDashboardAuth(event: H3Event): void {
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
}
