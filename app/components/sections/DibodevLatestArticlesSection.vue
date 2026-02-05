<template>
  <section
    id="latest-articles"
    data-aos="fade-up"
    data-aos-duration="600"
    data-aos-offset="300"
    class="relative z-2 flex h-full min-h-screen w-screen max-w-screen items-center justify-center bg-gray-700 px-6 py-36 sm:px-8 sm:py-60"
  >
    <div class="grid gap-14 sm:gap-12">
      <div class="justify-left flex items-center gap-4 sm:justify-center">
        <h2 class="text-left text-2xl font-semibold sm:text-center sm:text-[32px]">
          {{ $t('home.latestArticles.title') }}
        </h2>
      </div>
      <div v-if="articles.length === 0" class="flex w-full max-w-7xl flex-col items-center gap-6 py-12">
        <p class="text-center text-base text-gray-300">
          {{ $t('blog.list.noArticles') }}
        </p>
        <DibodevLink :link="localePath('/blog')">
          <span>{{ $t('home.latestArticles.seeAllArticles') }}</span>
          <DibodevIcon name="ArrowRight" mode="stroke" :width="20" :height="20" />
        </DibodevLink>
      </div>
      <div v-else class="flex w-full max-w-7xl flex-col-reverse gap-10 sm:grid sm:gap-8">
        <div class="flex w-full items-center justify-end">
          <DibodevLink :link="localePath('/blog')">
            <span>{{ $t('home.latestArticles.seeAllArticles') }}</span>
            <DibodevIcon name="ArrowRight" mode="stroke" :width="20" :height="20" />
          </DibodevLink>
        </div>

        <div class="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3">
          <BlogArticleCard
            v-for="(article, index) in articles"
            :key="article.slug"
            :title="article.title"
            :excerpt="article.excerpt"
            :date="article.date"
            :cover-image-url="article.coverImageUrl"
            :tags="article.tags"
            :reading-time-minutes="article.readingTimeMinutes"
            :route="article.route"
            data-aos="zoom-in"
            :data-aos-delay="index * 100"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import type { ComputedRef } from 'vue'
import DibodevLink from '~/components/core/DibodevLink.vue'
import DibodevIcon from '~/components/ui/DibodevIcon.vue'
import BlogArticleCard from '~/components/blog/BlogArticleCard.vue'
import type { DibodevArticle } from '~/core/types/DibodevArticle'
import { StoryblokArticleService } from '~/services/storyblokArticleService'
import { mapStoryblokArticleToDibodevArticle } from '~/services/storyblokArticleMapper'

const localePath = useLocalePath()
const storyblokLanguage: ComputedRef<string | undefined> = useStoryblokProjectLanguage()

const ARTICLES_LIMIT: number = 3

const { data: storyblokArticlesData } = await useAsyncData<DibodevArticle[]>(
  () => `home-latest-articles-${storyblokLanguage.value}`,
  async (): Promise<DibodevArticle[]> => {
    try {
      const response = await StoryblokArticleService.getArticles({
        page: 1,
        perPage: ARTICLES_LIMIT,
        language: storyblokLanguage.value,
      })
      return response.stories.map(mapStoryblokArticleToDibodevArticle)
    } catch {
      return []
    }
  },
)

/**
 * Latest articles from Storyblok for the home page.
 */
const articles: ComputedRef<DibodevArticle[]> = computed((): DibodevArticle[] => {
  return storyblokArticlesData.value ?? []
})
</script>
