/** Blog article lists with EN/ES metadata overlaid; untranslated articles are left out of EN/ES unless the translations cannot be read. */
import type { DibodevArticle, DibodevArticleTranslation } from '~/core/types/DibodevArticle'
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
export function useArticlesWithTranslations(params: UseArticlesWithTranslationsParams = {}) {
  const { page = 1, perPage = 12 } = params
  const { locale } = useI18n()
  const storyblokLanguage: ComputedRef<string | undefined> = useStoryblokProjectLanguage()

  return useAsyncData<DibodevArticle[]>(
    () => `articles-with-translations-${locale.value}-${page}-${perPage}`,
    async (): Promise<DibodevArticle[]> => {
      try {
        const response = await StoryblokArticleService.getArticles({
          page,
          perPage,
          language: storyblokLanguage.value,
        })
        let articles: DibodevArticle[] = response.stories.map(mapStoryblokArticleToDibodevArticle).map(withoutContent)

        const currentLocale: string = locale.value as string
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
    },
  )
}
