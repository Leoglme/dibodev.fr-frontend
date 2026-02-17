/**
 * Global middleware that protects dashboard routes (except login).
 * Verifies the session cookie via /api/auth/me and redirects to dashboard login when unauthorized.
 * Uses (to, from) arguments instead of useRoute() to avoid misleading route in middleware.
 *
 * Uses useRequestFetch() instead of $fetch so that cookies are forwarded during SSR.
 * Direct $fetch does NOT forward cookies on internal API calls during SSR.
 */
export default defineNuxtRouteMiddleware(async (to): Promise<void> => {
  const localePath = useLocalePath()
  const path: string = to.path

  const isDashboardRoute: boolean = path.includes('/dashboard') && !path.includes('/dashboard/login')

  if (!isDashboardRoute) {
    return
  }

  const requestFetch = useRequestFetch()
  try {
    await requestFetch<{ ok: true }>('/api/auth/me', { method: 'GET' })
  } catch {
    return navigateTo(localePath('/dashboard/login'))
  }
})
