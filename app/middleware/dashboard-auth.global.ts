/**
 * Global middleware that protects dashboard routes (except login).
 * Verifies the session cookie via /api/auth/me and redirects to dashboard login when unauthorized.
 * Uses (to, from) arguments instead of useRoute() to avoid misleading route in middleware.
 */
export default defineNuxtRouteMiddleware(async (to): Promise<void> => {
  const localePath = useLocalePath()
  const path: string = to.path

  const isDashboardRoute: boolean =
    path.includes('/dashboard') && !path.includes('/dashboard/login')

  if (!isDashboardRoute) {
    return
  }

  try {
    await $fetch<{ ok: true }>('/api/auth/me', { method: 'GET' })
  } catch {
    return navigateTo(localePath('/dashboard/login'))
  }
})
