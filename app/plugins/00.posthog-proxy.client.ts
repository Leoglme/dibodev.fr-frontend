import { POSTHOG_CLIENT_CONFIG, type DibodevPostHogClientConfig } from '~/core/constants/posthog'

/**
 * The `@posthog/nuxt` module inits posthog-js with `api_host: host` then spreads `posthogClientConfig`,
 * which is not always serialized to the client. This plugin (enforce: pre) guarantees the first-party
 * proxy path is set before the SDK inits.
 */
export default defineNuxtPlugin({
  name: 'posthog-proxy-config',
  enforce: 'pre',
  /**
   * Force the first-party proxy path into the PostHog client config before the SDK inits.
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
