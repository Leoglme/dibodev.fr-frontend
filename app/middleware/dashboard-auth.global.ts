import type { UseDashboardSessionReturn } from '~/composables/useDashboardSession'
import { useDashboardSession } from '~/composables/useDashboardSession'

const SESSION_RECHECK_MS: number = 10 * 60 * 1000

/**
 * Global middleware that protects dashboard routes (except login).
 * Verifies the session cookie via /api/auth/me and redirects to dashboard login when unauthorized.
 * Uses (to, from) arguments instead of useRoute() to avoid misleading route in middleware.
 *
 * Auth check runs only on the client so that prerendered dashboard pages are not 302 redirects.
 * On refresh in prod, the client runs this and calls /me with the cookie; redirect only on 401.
 * Uses useRequestFetch() so that cookies are sent on the client request.
 * Once the session is confirmed, pages open at once and the check runs again in the background every 10 minutes.
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

  const nuxtApp: ReturnType<typeof useNuxtApp> = useNuxtApp()
  const requestFetch = useRequestFetch()
  const { sessionVerifiedAt, markSessionVerified, forgetSession }: UseDashboardSessionReturn = useDashboardSession()
  const loginPath: string = localePath({ path: '/dashboard/login', query: { redirect: to.fullPath } })

  if (sessionVerifiedAt.value > 0) {
    if (Date.now() - sessionVerifiedAt.value > SESSION_RECHECK_MS) {
      requestFetch<{ ok: true }>('/api/auth/me', { method: 'GET' })
        .then((): void => markSessionVerified())
        .catch(async (): Promise<void> => {
          forgetSession()
          await navigateTo(loginPath)
        })
        .catch((): void => undefined)
    }
    return
  }

  try {
    await requestFetch<{ ok: true }>('/api/auth/me', { method: 'GET' })
    markSessionVerified()
  } catch {
    // The HTML being hydrated is the requested dashboard page: a router redirect would mount the login page inside the dashboard layout.
    if (nuxtApp.isHydrating) {
      window.location.replace(loginPath)
      return new Promise<void>((): void => {})
    }
    return navigateTo(loginPath)
  }
})
