import { AnalyticsPrivacyUtils } from '~/core/utils/AnalyticsPrivacyUtils'

/**
 * Masks what visitors type in the checkers (domains, e-mail addresses) in every PostHog event before it is sent.
 */
export default defineNuxtPlugin({
  name: 'posthog-privacy',
  dependsOn: ['posthog-client'],
  /**
   * Hands the masking function to PostHog once the SDK is loaded.
   * @returns {void}
   */
  setup(): void {
    const posthog: ReturnType<typeof usePostHog> = usePostHog()

    if (posthog?.__loaded) {
      posthog.set_config({ before_send: AnalyticsPrivacyUtils.maskCapturedEvent })
    }
  },
})
