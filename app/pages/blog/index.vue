<template>
  <div>
    <DibodevLandingSection
      :title="$t('blog.landing.title')"
      :description="$t('blog.landing.description')"
      :ctaText="$t('blog.landing.cta')"
      ctaTarget="#blog-list"
    />

    <section
      id="blog-list"
      data-aos="fade-up"
      data-aos-duration="600"
      class="relative z-2 flex min-h-screen w-full max-w-screen justify-center px-6 py-24 sm:px-8 sm:py-32"
    >
      <div class="w-full max-w-7xl">
        <div v-if="articles.length === 0" class="grid gap-8 py-16 text-center">
          <p class="text-lg text-gray-200">
            {{ $t('blog.list.noArticles') }}
          </p>
        </div>

        <div v-else class="grid auto-rows-fr gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <BlogArticleCard
            v-for="article in articles"
            :key="article.slug"
            :title="article.title"
            :excerpt="article.excerpt"
            :date="article.date"
            :cover-image-url="article.coverImageUrl"
            :tags="article.tags"
            :reading-time-minutes="article.readingTimeMinutes"
            :route="article.route"
          />
        </div>
      </div>
    </section>

    <div id="blog-cta" class="bg-gray-700">
      <DibodevContactCtaSection />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import DibodevLandingSection from '~/components/sections/DibodevLandingSection.vue'
import BlogArticleCard from '~/components/blog/BlogArticleCard.vue'
import DibodevContactCtaSection from '~/components/sections/DibodevContactCtaSection.vue'
import type { DibodevArticle } from '~/core/types/DibodevArticle'
import { useArticlesWithTranslations } from '~/composables/useArticlesWithTranslations'

const SITE_URL: string = 'https://dibodev.fr'
const DEFAULT_OG_IMAGE_URL: string = `${SITE_URL}/android-chrome-512x512.png`

const PER_PAGE: number = 12

const { data: articlesData } = await useArticlesWithTranslations({ page: 1, perPage: PER_PAGE })
const articles = computed((): DibodevArticle[] => articlesData.value ?? [])

const { t } = useI18n()

useHead(
  (): Record<string, unknown> => ({
    title: t('meta.blog.title'),
    meta: [
      { name: 'description', content: t('meta.blog.description') },
      { property: 'og:title', content: t('meta.blog.title') },
      { property: 'og:description', content: t('meta.blog.description') },
      { property: 'og:image', content: DEFAULT_OG_IMAGE_URL },
      { property: 'og:type', content: 'website' },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:image', content: DEFAULT_OG_IMAGE_URL },
    ],
  }),
)
</script>
