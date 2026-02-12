import type { H3Event } from 'h3'
import { createError, setCookie } from 'h3'

const DASHBOARD_SESSION_COOKIE_NAME = 'dashboard_session' as const
const SESSION_MAX_AGE_SECONDS = 60 * 60 * 24 * 7 // 7 days

export type LoginRequestBody = {
  password: string
}

/**
 * Handles POST requests for dashboard login.
 * Compares the provided password with DASHBOARD_PASSWORD from env and sets a session cookie on success.
 *
 * @param event - The H3 event object.
 * @returns { ok: true } on success.
 * @throws H3Error 400 if password is missing or invalid, 405 if method is not POST.
 */
export default defineEventHandler(async (event: H3Event): Promise<{ ok: true }> => {
  if (event.method !== 'POST') {
    throw createError({
      statusCode: 405,
      statusMessage: 'Method Not Allowed.',
    })
  }

  const config = useRuntimeConfig(event)
  const expectedPassword: string = config.dashboardPassword as string
  const sessionToken: string = config.dashboardSessionToken as string

  if (!expectedPassword || !sessionToken) {
    throw createError({
      statusCode: 500,
      statusMessage: 'Dashboard auth is not configured.',
    })
  }

  const body = await readBody<LoginRequestBody>(event)

  if (!body || typeof body.password !== 'string' || body.password.trim() === '') {
    throw createError({
      statusCode: 400,
      statusMessage: 'Password is required.',
    })
  }

  if (body.password !== expectedPassword) {
    throw createError({
      statusCode: 401,
      statusMessage: 'Invalid password.',
    })
  }

  setCookie(event, DASHBOARD_SESSION_COOKIE_NAME, sessionToken, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    path: '/',
    maxAge: SESSION_MAX_AGE_SECONDS,
  })

  return { ok: true }
})
