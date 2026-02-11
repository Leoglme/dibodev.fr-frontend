<template>
  <section
    id="latest-articles"
    data-aos="fade-up"
    data-aos-duration="600"
    data-aos-offset="300"
    class="relative z-2 flex h-full min-h-screen w-screen max-w-screen items-center justify-center bg-gray-800 px-6 py-36 sm:px-8 sm:py-60"
  >
    <div class="grid w-full max-w-7xl gap-10 sm:gap-12">
      <div class="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div class="grid gap-2">
          <h2 class="text-left text-2xl font-semibold sm:text-[32px]">
            {{ $t('home.latestArticles.title') }}
          </h2>
          <p class="text-left text-sm leading-7 text-gray-200 sm:text-base">
            {{ $t('home.latestArticles.intro') }}
          </p>
        </div>
        <DibodevLink :link="localePath('/blog')" class="shrink-0">
          <span>{{ $t('home.latestArticles.seeAllArticles') }}</span>
          <DibodevIcon name="ArrowRight" mode="stroke" :width="20" :height="20" />
        </DibodevLink>
      </div>

      <div v-if="articles.length === 0" class="flex flex-col items-center gap-6 py-12">
        <p class="text-center text-base text-gray-300">
          {{ $t('blog.list.noArticles') }}
        </p>
        <DibodevLink :link="localePath('/blog')">
          <span>{{ $t('home.latestArticles.seeAllArticles') }}</span>
          <DibodevIcon name="ArrowRight" mode="stroke" :width="20" :height="20" />
        </DibodevLink>
      </div>

      <div v-else class="grid grid-cols-1 gap-8 lg:grid-cols-[1fr_360px] lg:gap-12">
        <ArticleFeaturedCard
          v-if="featuredArticle"
          :title="featuredArticle.title"
          :excerpt="featuredArticle.excerpt"
          :date="featuredArticle.date"
          :cover-image-url="featuredArticle.coverImageUrl"
          :tags="featuredArticle.tags"
          :reading-time-minutes="featuredArticle.readingTimeMinutes"
          :route="featuredArticle.route"
          data-aos="fade-up"
          data-aos-delay="0"
        />
        <div class="grid gap-4">
          <ArticleCompactCard
            v-for="(article, index) in compactArticles"
            :key="article.slug"
            :title="article.title"
            :date="article.date"
            :cover-image-url="article.coverImageUrl"
            :tags="article.tags"
            :route="article.route"
            data-aos="fade-up"
            :data-aos-delay="(index + 1) * 80"
          />
          <ArticlePlaceholderCard v-for="i in placeholderCount" :key="`placeholder-${i}`" />
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
import ArticleFeaturedCard from '~/components/blog/ArticleFeaturedCard.vue'
import ArticleCompactCard from '~/components/blog/ArticleCompactCard.vue'
import ArticlePlaceholderCard from '~/components/blog/ArticlePlaceholderCard.vue'
import type { DibodevArticle } from '~/core/types/DibodevArticle'
import { StoryblokArticleService } from '~/services/storyblokArticleService'
import { mapStoryblokArticleToDibodevArticle } from '~/services/storyblokArticleMapper'

const localePath = useLocalePath()
const storyblokLanguage: ComputedRef<string | undefined> = useStoryblokProjectLanguage()

const ARTICLES_LIMIT: number = 4
const COMPACT_SLOTS: number = 3

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

const articles: ComputedRef<DibodevArticle[]> = computed((): DibodevArticle[] => storyblokArticlesData.value ?? [])

const featuredArticle: ComputedRef<DibodevArticle | null> = computed(
  (): DibodevArticle | null => articles.value[0] ?? null,
)

const compactArticles: ComputedRef<DibodevArticle[]> = computed((): DibodevArticle[] =>
  articles.value.slice(1, 1 + COMPACT_SLOTS),
)

const placeholderCount: ComputedRef<number> = computed((): number => {
  const compact = compactArticles.value.length
  return Math.max(0, COMPACT_SLOTS - compact)
})
</script>
