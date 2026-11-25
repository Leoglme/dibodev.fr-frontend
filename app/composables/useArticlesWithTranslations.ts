/** Blog article lists with EN/ES metadata overlaid; untranslated articles are left out of EN/ES unless the translations cannot be read. */
import type { AsyncData, NuxtError } from '#app'
import type { DibodevArticle, DibodevArticleTranslation } from '~/core/types/DibodevArticle'
import type { StoryblokArticleContent } from '~/services/types/storyblokArticle'
import type { StoryblokStory } from '~/services/types/storyblok'
import { StoryblokArticleService } from '~/services/storyblokArticleService'
import { mapStoryblokArticleToDibodevArticle } from '~/services/storyblokArticleMapper'

function articleKey(article: DibodevArticle): string {
  return article.route.replace(/^\//, '').trim() || article.route
}

/**
 * Removes the richtext body from an article list item.
 *
 * @param {DibodevArticle} article - Mapped article.
 * @returns {DibodevArticle} The same article with its content set to null.
 */
function withoutContent(article: DibodevArticle): DibodevArticle {
  return { ...article, content: null }
}

/**
 * Loads article stories and turns them into cards for a locale: no bodies, EN/ES metadata overlaid, untranslated articles left out of EN/ES.
 *
 * @param {() => Promise<Array<StoryblokStory<StoryblokArticleContent>>>} fetchStories - Storyblok request returning the article stories.
 * @param {string} currentLocale - Locale of the rendered page.
 * @returns {Promise<DibodevArticle[]>} The cards in the order of the stories, or an empty list when Storyblok fails.
 */
async function loadLocalizedArticleCards(
  fetchStories: () => Promise<Array<StoryblokStory<StoryblokArticleContent>>>,
  currentLocale: string,
): Promise<DibodevArticle[]> {
  try {
    const stories: Array<StoryblokStory<StoryblokArticleContent>> = await fetchStories()
    let articles: DibodevArticle[] = stories.map(mapStoryblokArticleToDibodevArticle).map(withoutContent)

    if (currentLocale === 'en' || currentLocale === 'es') {
      const translations: Record<string, DibodevArticleTranslation> | null =
        await StoryblokArticleService.getArticleTranslations(currentLocale)
      // An untranslated article redirects to its French page, so it leaves the EN/ES lists (French cards stay when the translations are unreadable).
      if (translations) {
        articles = articles.flatMap((a: DibodevArticle): DibodevArticle[] => {
          const t: DibodevArticleTranslation | undefined = translations[articleKey(a)]
          if (!t) return []
          return [
            {
              ...a,
              title: t.title,
              excerpt: t.excerpt,
              metaTitle: t.metaTitle,
              metaDescription: t.metaDescription,
              tags: t.tags,
            },
          ]
        })
      }
    }

    return articles
  } catch (error) {
    // A silent empty list would hide a Storyblok outage in the prerendered pages: make it visible in the logs.
    console.error('[articles] Storyblok fetch failed, rendering an empty article list', error)
    return []
  }
}

export type UseArticlesWithTranslationsParams = {
  page?: number
  perPage?: number
}

/**
 * Loads a page of blog articles for cards, with EN/ES metadata overlaid and without the article bodies.
 *
 * @param {UseArticlesWithTranslationsParams} params - Page number and page size.
 * @returns {AsyncData<DibodevArticle[] | undefined, NuxtError | undefined>} Async data holding the articles.
 */
export function useArticlesWithTranslations(
  params: UseArticlesWithTranslationsParams = {},
): AsyncData<DibodevArticle[] | undefined, NuxtError | undefined> {
  const { page = 1, perPage = 12 } = params
  const { locale } = useI18n()
  const storyblokLanguage: ComputedRef<string | undefined> = useStoryblokProjectLanguage()

  return useAsyncData<DibodevArticle[]>(
    () => `articles-with-translations-${locale.value}-${page}-${perPage}`,
    (): Promise<DibodevArticle[]> =>
      loadLocalizedArticleCards(
        async (): Promise<Array<StoryblokStory<StoryblokArticleContent>>> =>
          (await StoryblokArticleService.getArticles({ page, perPage, language: storyblokLanguage.value })).stories,
        locale.value as string,
      ),
  )
}

/**
 * Loads every published blog article for cards (all Storyblok pages, newest first), with EN/ES metadata overlaid and without the bodies.
 *
 * @returns {AsyncData<DibodevArticle[] | undefined, NuxtError | undefined>} Async data holding every article.
 */
export function useAllArticlesWithTranslations(): AsyncData<DibodevArticle[] | undefined, NuxtError | undefined> {
  const { locale } = useI18n()
  const storyblokLanguage: ComputedRef<string | undefined> = useStoryblokProjectLanguage()

  return useAsyncData<DibodevArticle[]>(
    () => `all-articles-with-translations-${locale.value}`,
    (): Promise<DibodevArticle[]> =>
      loadLocalizedArticleCards(
        (): Promise<Array<StoryblokStory<StoryblokArticleContent>>> =>
          StoryblokArticleService.getAllArticles(storyblokLanguage.value),
        locale.value as string,
      ),
  )
}
