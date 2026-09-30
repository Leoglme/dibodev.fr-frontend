import type { ComputedRef, Ref } from 'vue'
import type {
  ListTranslatablesResponse,
  TranslatableItem,
  TranslateBody,
  TranslateResponse,
} from '~/types/dashboard/translations'
import { computed } from 'vue'

export type TranslationCoverage = {
  total: number
  english: number
  spanish: number
  missing: TranslatableItem[]
}

export type UseDashboardTranslationsReturn = {
  lists: Ref<ListTranslatablesResponse | null>
  loading: Ref<boolean>
  error: Ref<string>
  translatingSlugs: Ref<string[]>
  coverage: ComputedRef<TranslationCoverage>
  loadTranslations: (force?: boolean) => Promise<void>
  translateItem: (item: TranslatableItem) => Promise<TranslateResponse>
}

/**
 * English and Spanish translation status of projects, articles, sectors and categories.
 *
 * @returns {UseDashboardTranslationsReturn} The lists, coverage and actions.
 */
export function useDashboardTranslations(): UseDashboardTranslationsReturn {
  const lists: Ref<ListTranslatablesResponse | null> = useState(
    'dashboard-translations',
    (): ListTranslatablesResponse | null => null,
  )
  const loading: Ref<boolean> = useState('dashboard-translations-loading', (): boolean => false)
  const error: Ref<string> = useState('dashboard-translations-error', (): string => '')
  const translatingSlugs: Ref<string[]> = useState('dashboard-translations-running', (): string[] => [])

  const coverage: ComputedRef<TranslationCoverage> = computed((): TranslationCoverage => {
    const data: ListTranslatablesResponse | null = lists.value
    const items: TranslatableItem[] = data
      ? [...data.projects, ...data.articles, ...data.sectors, ...data.categories]
      : []
    return {
      total: items.length,
      english: items.filter((item: TranslatableItem): boolean => item.hasEn).length,
      spanish: items.filter((item: TranslatableItem): boolean => item.hasEs).length,
      missing: items.filter((item: TranslatableItem): boolean => !item.hasEn || !item.hasEs),
    }
  })

  /**
   * Loads the translation lists (Storyblok content + translation files on GitHub).
   *
   * @param {boolean} force - Reload even when data is already in memory.
   * @returns {Promise<void>}
   */
  async function loadTranslations(force: boolean = false): Promise<void> {
    if (!force && lists.value) return
    loading.value = true
    error.value = ''
    try {
      lists.value = await $fetch<ListTranslatablesResponse>('/api/dashboard/translations/list')
    } catch (e: unknown) {
      error.value = e instanceof Error ? e.message : 'Impossible de charger les traductions.'
    } finally {
      loading.value = false
    }
  }

  /**
   * Translates an item into English and Spanish in one commit (one deployment), then reloads the lists.
   *
   * @param {TranslatableItem} item - The item to translate.
   * @returns {Promise<TranslateResponse>} The server answer.
   */
  async function translateItem(item: TranslatableItem): Promise<TranslateResponse> {
    translatingSlugs.value = [...translatingSlugs.value, item.fullSlug]
    try {
      const body: TranslateBody = { entityType: item.type, slug: item.fullSlug, targetLocales: ['en', 'es'] }
      const response: TranslateResponse = await $fetch<TranslateResponse>('/api/dashboard/translations/translate', {
        method: 'POST',
        body,
      })
      if (response.ok) await loadTranslations(true)
      return response
    } finally {
      translatingSlugs.value = translatingSlugs.value.filter((slug: string): boolean => slug !== item.fullSlug)
    }
  }

  return { lists, loading, error, translatingSlugs, coverage, loadTranslations, translateItem }
}
