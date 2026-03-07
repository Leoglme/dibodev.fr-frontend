import { computed } from 'vue'
import type { ComputedRef } from 'vue'

/**
 * Returns the Storyblok language parameter. Always undefined so Storyblok returns FR (default).
 * EN/ES content is provided by i18n JSON files (dashboard translations), overlaid on the client.
 */
export function useStoryblokProjectLanguage(): ComputedRef<string | undefined> {
  return computed((): undefined => undefined)
}
