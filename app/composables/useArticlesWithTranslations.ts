/**
 * Liste d'articles avec overlay des traductions EN/ES (depuis GitHub).
 * FR = Storyblok uniquement. EN/ES = Storyblok (FR) + overlay par slug ; pas de traduction = fallback FR.
 */
import type { DibodevArticle } from '~/core/types/DibodevArticle'
import { StoryblokArticleService } from '~/services/storyblokArticleService'
import { mapStoryblokArticleToDibodevArticle } from '~/services/storyblokArticleMapper'

type ArticleTranslation = {
  title: string
  excerpt: string
  metaTitle: string
  metaDescription: string
  tags: string[]
}

function articleKey(article: DibodevArticle): string {
  return article.route.replace(/^\//, '').trim() || article.route
}

export type UseArticlesWithTranslationsParams = {
  page?: number
  perPage?: number
}

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
        let articles: DibodevArticle[] = response.stories.map(mapStoryblokArticleToDibodevArticle)

        const currentLocale: string = locale.value as string
        if (currentLocale === 'en' || currentLocale === 'es') {
          const translations: Record<string, ArticleTranslation> = await $fetch<Record<string, ArticleTranslation>>(
            `/api/translations/articles/${currentLocale}`,
          ).catch(() => ({}))
          articles = articles.map((a: DibodevArticle): DibodevArticle => {
            const key: string = articleKey(a)
            const t: ArticleTranslation | undefined = translations[key]
            if (!t) return a
            return {
              ...a,
              title: t.title,
              excerpt: t.excerpt,
              metaTitle: t.metaTitle,
              metaDescription: t.metaDescription,
              tags: t.tags,
            }
          })
        }

        return articles
      } catch {
        return []
      }
    },
  )
}
