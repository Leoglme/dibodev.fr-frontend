import type { CaptureResult } from 'posthog-js'

const TYPED_VALUE_QUERY_PARAMETER_REGEX: RegExp = /([?&](?:site|domain|email)=)[^&#\s"';]*/gi
const MASKED_VALUE: string = 'masque'

/** Keeps what visitors type in the checkers (a domain, an e-mail address) out of the analytics events. */
export class AnalyticsPrivacyUtils {
  /**
   * Masks the value of the site, domain and email query parameters wherever they appear in a text.
   * @param {string} text - A URL, a path or any other text sent with an event.
   * @returns {string} The text with those values replaced by "masque".
   */
  public static maskTypedValues(text: string): string {
    return text.replace(TYPED_VALUE_QUERY_PARAMETER_REGEX, `$1${MASKED_VALUE}`)
  }

  /**
   * Masks the typed values in the properties and person properties of an event, just before PostHog sends it.
   * @param {CaptureResult | null} event - The event about to be sent, or null when an earlier hook dropped it.
   * @returns {CaptureResult | null} The same event, masked.
   */
  public static maskCapturedEvent(event: CaptureResult | null): CaptureResult | null {
    if (!event) {
      return null
    }
    event.properties = AnalyticsPrivacyUtils.maskProperties(event.properties)
    if (event.$set) {
      event.$set = AnalyticsPrivacyUtils.maskProperties(event.$set)
    }
    if (event.$set_once) {
      event.$set_once = AnalyticsPrivacyUtils.maskProperties(event.$set_once)
    }
    return event
  }

  /**
   * Masks the typed values in every property of a set.
   * @param {Record<string, unknown>} properties - The properties.
   * @returns {Record<string, unknown>} A copy of the properties, masked.
   */
  private static maskProperties(properties: Record<string, unknown>): Record<string, unknown> {
    return Object.fromEntries(
      Object.entries(properties).map(([key, value]: [string, unknown]): [string, unknown] => [
        key,
        AnalyticsPrivacyUtils.maskValue(value),
      ]),
    )
  }

  /**
   * Masks the typed values in a text, or in every text nested in a list or an object.
   * @param {unknown} value - A property value.
   * @returns {unknown} The value, masked.
   */
  private static maskValue(value: unknown): unknown {
    if (typeof value === 'string') {
      return AnalyticsPrivacyUtils.maskTypedValues(value)
    }
    if (Array.isArray(value)) {
      return value.map((item: unknown): unknown => AnalyticsPrivacyUtils.maskValue(item))
    }
    if (value !== null && typeof value === 'object') {
      return AnalyticsPrivacyUtils.maskProperties(value as Record<string, unknown>)
    }
    return value
  }
}
