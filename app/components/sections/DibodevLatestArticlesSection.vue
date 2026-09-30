<template>
  <section id="latest-articles" class="px-6 py-20 sm:px-8 lg:py-28" data-aos="fade-up">
    <div class="max-w-site mx-auto grid w-full gap-12 lg:gap-14">
      <DibodevSectionHeading
        :eyebrow="$t('home.latestArticles.eyebrow')"
        :title="$t('home.latestArticles.title')"
        :intro="$t('home.latestArticles.intro')"
      >
        <template #action>
          <DibodevLink :link="localePath('/blog')">
            <span>{{ $t('home.latestArticles.seeAllArticles') }}</span>
            <DibodevIcon name="ArrowRight" mode="stroke" :width="18" :height="18" aria-hidden="true" />
          </DibodevLink>
        </template>
      </DibodevSectionHeading>

      <div v-if="articles.length === 0" class="flex flex-col items-center gap-6 py-12">
        <p class="text-muted text-center text-base">
          {{ $t('blog.list.noArticles') }}
        </p>
      </div>

      <div v-else class="grid grid-cols-1 gap-5 lg:grid-cols-[1fr_360px]">
        <ArticleFeaturedCard
          v-if="featuredArticle"
          :title="featuredArticle.title"
          :excerpt="featuredArticle.excerpt"
          :date="featuredArticle.date"
          :cover-image-url="featuredArticle.coverImageUrl"
          :tags="featuredArticle.tags"
          :reading-time-minutes="featuredArticle.readingTimeMinutes"
          :route="featuredArticle.route"
        />
        <div class="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-1">
          <ArticleCompactCard
            v-for="article in compactArticles"
            :key="article.slug"
            :title="article.title"
            :excerpt="article.excerpt"
            :date="article.date"
            :cover-image-url="article.coverImageUrl"
            :tags="article.tags"
            :reading-time-minutes="article.readingTimeMinutes"
            :route="article.route"
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
import DibodevSectionHeading from '~/components/sections/DibodevSectionHeading.vue'
import DibodevLink from '~/components/core/DibodevLink.vue'
import DibodevIcon from '~/components/ui/DibodevIcon.vue'
import ArticleFeaturedCard from '~/components/blog/ArticleFeaturedCard.vue'
import ArticleCompactCard from '~/components/blog/ArticleCompactCard.vue'
import ArticlePlaceholderCard from '~/components/blog/ArticlePlaceholderCard.vue'
import type { DibodevArticle } from '~/core/types/DibodevArticle'
import { useArticlesWithTranslations } from '~/composables/useArticlesWithTranslations'

const localePath = useLocalePath()

const ARTICLES_LIMIT: number = 3
const COMPACT_SLOTS: number = 2

const { data: storyblokArticlesData } = await useArticlesWithTranslations({ page: 1, perPage: ARTICLES_LIMIT })

const articles: ComputedRef<DibodevArticle[]> = computed((): DibodevArticle[] => storyblokArticlesData.value ?? [])

const featuredArticle: ComputedRef<DibodevArticle | null> = computed(
  (): DibodevArticle | null => articles.value[0] ?? null,
)

const compactArticles: ComputedRef<DibodevArticle[]> = computed((): DibodevArticle[] =>
  articles.value.slice(1, 1 + COMPACT_SLOTS),
)

const placeholderCount: ComputedRef<number> = computed((): number => {
  const compact: number = compactArticles.value.length
  return Math.max(0, COMPACT_SLOTS - compact)
})
</script>
