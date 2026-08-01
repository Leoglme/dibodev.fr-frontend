import type { TrackingEventName } from '~/core/constants/trackingEvents'
import type { TrackingEventPayloads } from '~/core/types/Tracking'

/** Public API of the tracking composable. */
export type UseTrackingReturn = {
  track: <E extends TrackingEventName>(event: E, properties?: TrackingEventPayloads[E]) => void
}

/**
 * Product analytics (PostHog via @posthog/nuxt); `track` no-ops when PostHog is unavailable (SSR, dev, or missing key).
 * @returns {UseTrackingReturn} The `track` function used to send catalog events.
 */
export function useTracking(): UseTrackingReturn {
  /**
   * Send a typed PostHog event when PostHog is available.
   * @param {E} event - Event name from the `TRACKING_EVENTS` catalog.
   * @param {TrackingEventPayloads[E]} [properties] - Typed payload for this event.
   * @returns {void}
   */
  function track<E extends TrackingEventName>(event: E, properties?: TrackingEventPayloads[E]): void {
    usePostHog()?.capture(event, properties)
  }

  return { track }
}
