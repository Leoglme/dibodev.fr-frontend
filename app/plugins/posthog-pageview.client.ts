/**
 * Capture PostHog `$pageview` on the initial load and on every SPA navigation.
 * `@posthog/nuxt` does not emit pageviews itself, so we send them explicitly (see `posthog.ts`: capture_pageview is off).
 */
export default defineNuxtPlugin((nuxtApp) => {
  const router = useRouter()

  /**
   * Send a `$pageview` for the given path when PostHog is available.
   * @param {string} path - The route full path.
   * @returns {void}
   */
  function capturePageview(path: string): void {
    usePostHog()?.capture('$pageview', { $current_url: window.location.href, path })
  }

  nuxtApp.hook('app:mounted', (): void => {
    capturePageview(router.currentRoute.value.fullPath)
  })

  router.afterEach((to): void => {
    capturePageview(to.fullPath)
  })
})
