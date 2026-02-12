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

    <div id="blog-cta" class="bg-gray-700 py-32 sm:py-40">
      <BlogCta />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import type { Ref } from 'vue'
import DibodevLandingSection from '~/components/sections/DibodevLandingSection.vue'
import BlogArticleCard from '~/components/blog/BlogArticleCard.vue'
import BlogCta from '~/components/blog/BlogCta.vue'
import type { DibodevArticle } from '~/core/types/DibodevArticle'
import { StoryblokArticleService } from '~/services/storyblokArticleService'
import { mapStoryblokArticleToDibodevArticle } from '~/services/storyblokArticleMapper'

const PER_PAGE: number = 12

const articles: Ref<DibodevArticle[]> = ref([])

const storyblokLanguage = useStoryblokProjectLanguage()

async function fetchPage(page: number): Promise<DibodevArticle[]> {
  const response = await StoryblokArticleService.getArticles({
    page,
    perPage: PER_PAGE,
    language: storyblokLanguage.value,
  })

  return response.stories.map(mapStoryblokArticleToDibodevArticle)
}

const { data: initialData } = await useAsyncData<DibodevArticle[]>(
  () => `blog-list-page-1-${storyblokLanguage.value}`,
  async (): Promise<DibodevArticle[]> => fetchPage(1),
)

articles.value = initialData.value ?? []

const { t } = useI18n()

useHead(
  (): Record<string, unknown> => ({
    title: t('meta.blog.title'),
    meta: [
      { name: 'description', content: t('meta.blog.description') },
      { property: 'og:title', content: t('meta.blog.title') },
      { property: 'og:description', content: t('meta.blog.description') },
      { property: 'og:type', content: 'website' },
    ],
  }),
)
</script>
