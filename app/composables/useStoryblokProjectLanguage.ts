import { computed } from 'vue'
import type { ComputedRef } from 'vue'

/**
 * Returns the Storyblok language parameter for project content based on the current locale.
 * - fr: default (French) → undefined (Storyblok returns default language)
 * - en, es: → 'en-us' (English content; ES visitors see English for projects)
 *
 * Returns a ComputedRef so it stays reactive when locale changes (e.g. on refetch).
 */
export function useStoryblokProjectLanguage(): ComputedRef<string | undefined> {
  const { locale } = useI18n()
  return computed(() => (locale.value === 'fr' ? undefined : 'en-us'))
}
