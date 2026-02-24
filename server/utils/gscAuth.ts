const TOKEN_REQUEST_TIMEOUT_MS = 10_000

/**
 * Google Search Console API: get access token from refresh token.
 * @see https://developers.google.com/identity/protocols/oauth2/web-server#offline
 */
export async function getAccessTokenFromRefreshToken(
  clientId: string,
  clientSecret: string,
  refreshToken: string,
): Promise<string> {
  const controller = new AbortController()
  const timeoutId = setTimeout(() => controller.abort(), TOKEN_REQUEST_TIMEOUT_MS)
  let res: Response
  try {
    res = await fetch('https://oauth2.googleapis.com/token', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams({
        client_id: clientId,
        client_secret: clientSecret,
        refresh_token: refreshToken,
        grant_type: 'refresh_token',
      }),
      signal: controller.signal,
    })
  } finally {
    clearTimeout(timeoutId)
  }
  if (!res.ok) {
    const err = await res.text()
    throw new Error(`Google token refresh failed: ${res.status} ${err}`)
  }
  const data = (await res.json()) as { access_token?: string }
  if (!data.access_token) {
    throw new Error('Google token response missing access_token')
  }
  return data.access_token
}

const GSC_SCOPE = 'https://www.googleapis.com/auth/webmasters.readonly'

/**
 * Build the Google OAuth 2.0 authorization URL for Search Console readonly.
 */
export function getGoogleAuthUrl(clientId: string, redirectUri: string): string {
  const params = new URLSearchParams({
    client_id: clientId,
    redirect_uri: redirectUri,
    response_type: 'code',
    scope: GSC_SCOPE,
    access_type: 'offline',
    prompt: 'consent',
  })
  return `https://accounts.google.com/o/oauth2/v2/auth?${params.toString()}`
}
