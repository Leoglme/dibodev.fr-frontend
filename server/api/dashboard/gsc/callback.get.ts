import type { H3Event } from 'h3'
import { createError, sendRedirect, setCookie } from 'h3'
import { requireDashboardAuth } from '~~/server/utils/dashboardAuth'

const COOKIE_NAME = 'gsc_refresh_token'
const COOKIE_MAX_AGE = 600 // 10 minutes

/**
 * GET /api/dashboard/gsc/callback?code=...
 * OAuth callback: exchange code for tokens, store refresh_token in cookie, redirect to dashboard/indexing.
 * The indexing page will call /api/dashboard/gsc/refresh-token to retrieve the token for the user to copy to .env.
 */
export default defineEventHandler(async (event: H3Event) => {
  requireDashboardAuth(event)
  const config = useRuntimeConfig()
  const clientId = config.googleClientId as string
  const clientSecret = config.googleClientSecret as string
  if (!clientId || !clientSecret) {
    throw createError({
      statusCode: 500,
      statusMessage: 'GOOGLE_CLIENT_ID or GOOGLE_CLIENT_SECRET not configured.',
    })
  }

  const code = getQuery(event).code as string | undefined
  if (!code) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Missing code parameter.',
    })
  }

  const host = getRequestHeader(event, 'host') || 'localhost:3000'
  const proto = getRequestHeader(event, 'x-forwarded-proto') || 'http'
  const redirectUri = `${proto === 'https' ? 'https' : 'http'}://${host}/api/dashboard/gsc/callback`

  const res = await fetch('https://oauth2.googleapis.com/token', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams({
      client_id: clientId,
      client_secret: clientSecret,
      code,
      grant_type: 'authorization_code',
      redirect_uri: redirectUri,
    }),
  })

  if (!res.ok) {
    const err = await res.text()
    throw createError({
      statusCode: 502,
      statusMessage: `Google OAuth token exchange failed: ${res.status} ${err}`,
    })
  }

  const data = (await res.json()) as { refresh_token?: string }
  const refreshToken = data.refresh_token
  if (!refreshToken) {
    throw createError({
      statusCode: 502,
      statusMessage: 'Google did not return a refresh_token. Try again with prompt=consent.',
    })
  }

  setCookie(event, COOKIE_NAME, refreshToken, {
    httpOnly: true,
    secure: proto === 'https',
    sameSite: 'lax',
    maxAge: COOKIE_MAX_AGE,
    path: '/',
  })

  const origin = `${proto === 'https' ? 'https' : 'http'}://${host}`
  const redirectTo = `${origin}/dashboard/indexing?gsc_connected=1`
  return sendRedirect(event, redirectTo, 302)
})
