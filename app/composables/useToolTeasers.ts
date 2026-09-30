import type { ComputedRef } from 'vue'
import type { SupportedLocale } from '~/core/constants/categorySlugs'
import type { DibodevToolTeaserContent } from '~/core/types/DibodevToolTeaser'
import { computed } from 'vue'

/**
 * Keeps the tool teasers written in the current locale (a tool without a page in that language is not teased).
 * @param {() => DibodevToolTeaserContent[]} teasers - The teasers wanted on the page.
 * @returns {ComputedRef<DibodevToolTeaserContent[]>} The teasers to show.
 */
export function useToolTeasers(teasers: () => DibodevToolTeaserContent[]): ComputedRef<DibodevToolTeaserContent[]> {
  const { locale } = useI18n()

  return computed((): DibodevToolTeaserContent[] =>
    teasers().filter(
      (teaser: DibodevToolTeaserContent): boolean => teaser.wording[locale.value as SupportedLocale] !== undefined,
    ),
  )
}
