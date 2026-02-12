import type { H3Event } from 'h3'
import { deleteCookie } from 'h3'

const DASHBOARD_SESSION_COOKIE_NAME = 'dashboard_session' as const

/**
 * POST /api/auth/logout
 * Removes the dashboard session cookie.
 */
export default defineEventHandler((event: H3Event): { ok: true } => {
  deleteCookie(event, DASHBOARD_SESSION_COOKIE_NAME, { path: '/' })
  return { ok: true }
})
