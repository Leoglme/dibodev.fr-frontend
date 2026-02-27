/**
 * Global middleware that protects dashboard routes (except login).
 * Verifies the session cookie via /api/auth/me and redirects to dashboard login when unauthorized.
 * Uses (to, from) arguments instead of useRoute() to avoid misleading route in middleware.
 *
 * Auth check runs only on the client so that prerendered dashboard pages are not 302 redirects.
 * On refresh in prod, the client runs this and calls /me with the cookie; redirect only on 401.
 * Uses useRequestFetch() so that cookies are sent on the client request.
 */
export default defineNuxtRouteMiddleware(async (to) => {
  const localePath = useLocalePath()
  const path: string = to.path

  const isDashboardRoute: boolean = path.includes('/dashboard') && !path.includes('/dashboard/login')

  if (!isDashboardRoute) {
    return
  }

  if (import.meta.server) {
    return
  }

  const requestFetch = useRequestFetch()
  try {
    await requestFetch<{ ok: true }>('/api/auth/me', { method: 'GET' })
  } catch {
    return navigateTo(localePath('/dashboard/login'))
  }
})
