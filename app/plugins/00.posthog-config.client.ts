import { POSTHOG_CLIENT_CONFIG, type DibodevPostHogClientConfig } from '~/core/constants/posthog'

/**
 * Ensures the cookieless client config (memory persistence, autocapture, no session recording) reaches
 * the SDK before init — `@posthog/nuxt` does not always serialize `posthogClientConfig` to the client.
 */
export default defineNuxtPlugin({
  name: 'posthog-config',
  enforce: 'pre',
  /**
   * Force the PostHog client config into the public runtime config before the SDK inits.
   * @returns {void}
   */
  setup(): void {
    const config: ReturnType<typeof useRuntimeConfig> = useRuntimeConfig()
    const existing: Partial<DibodevPostHogClientConfig> =
      (config.public.posthogClientConfig as Partial<DibodevPostHogClientConfig> | undefined) ?? {}

    config.public.posthogClientConfig = {
      ...existing,
      ...POSTHOG_CLIENT_CONFIG,
    }
  },
})
