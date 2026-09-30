<template>
  <div>
    <DibodevLandingSection
      :breadcrumbs="breadcrumbs"
      :titlePart1="$t('blog.landing.titlePart1')"
      :titleHighlight1="$t('blog.landing.titleHighlight1')"
      :titlePart2="$t('blog.landing.titlePart2')"
      :description="$t('blog.landing.description')"
    >
      <template v-if="featuredArticle" #aside>
        <div class="grid gap-3">
          <p class="text-primary text-xs font-medium tracking-[0.08em] uppercase">
            {{ $t('blog.landing.featuredEyebrow') }}
          </p>
          <ArticleFeaturedCard
            :title="featuredArticle.title"
            :excerpt="featuredArticle.excerpt"
            :date="featuredArticle.date"
            :cover-image-url="featuredArticle.coverImageUrl"
            :tags="featuredArticle.tags"
            :reading-time-minutes="featuredArticle.readingTimeMinutes"
            :route="featuredArticle.route"
          />
        </div>
      </template>
    </DibodevLandingSection>

    <BlogRelatedArticles
      :title="$t('blog.start.title')"
      :eyebrow="$t('blog.start.eyebrow')"
      :intro="$t('blog.start.intro')"
      :articles="startArticles"
      tone="tint"
    />

    <section id="blog-list" class="w-full scroll-mt-24 bg-gray-800 px-6 py-20 sm:px-8 lg:py-28" data-aos="fade-up">
      <div class="max-w-site mx-auto grid w-full gap-12 lg:gap-14">
        <DibodevSectionHeading :eyebrow="$t('blog.list.eyebrow')" :title="$t('blog.list.title')" />

        <div v-if="articles.length === 0" class="grid gap-8 py-16 text-center">
          <p class="text-lg text-gray-200">
            {{ $t('blog.list.noArticles') }}
          </p>
        </div>

        <div v-else class="grid auto-rows-fr gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
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

    <DibodevContactCtaSection />
  </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import type { ComputedRef } from 'vue'
import DibodevLandingSection from '~/components/sections/DibodevLandingSection.vue'
import BlogArticleCard from '~/components/blog/BlogArticleCard.vue'
import ArticleFeaturedCard from '~/components/blog/ArticleFeaturedCard.vue'
import BlogRelatedArticles from '~/components/blog/BlogRelatedArticles.vue'
import DibodevSectionHeading from '~/components/sections/DibodevSectionHeading.vue'
import DibodevContactCtaSection from '~/components/sections/DibodevContactCtaSection.vue'
import type { DibodevArticle } from '~/core/types/DibodevArticle'
import { useArticlesWithTranslations } from '~/composables/useArticlesWithTranslations'
import { usePageShareImage } from '~/composables/usePageShareImage'
import { useBreadcrumbTrail } from '~/composables/useBreadcrumbTrail'
import type { DibodevBreadcrumbItem } from '~/core/types/DibodevBreadcrumb'

// No pagination UI: list every published article (Storyblok max page size) so none ends up unlinked.
const PER_PAGE: number = 100
/** Pillar articles suggested to newcomers, in reading order. */
const START_ARTICLE_SLUGS: string[] = [
  'developpement-logiciel-b2b-sur-mesure-prix',
  'freelance-ou-agence-rennes-outil-metier-sur-mesure',
  'developpeur-application-metier-rennes-freelance-local',
]

const { data: articlesData } = await useArticlesWithTranslations({ page: 1, perPage: PER_PAGE })
const articles: ComputedRef<DibodevArticle[]> = computed((): DibodevArticle[] => articlesData.value ?? [])
/** Most recent article, shown next to the page title. */
const featuredArticle: ComputedRef<DibodevArticle | null> = computed(
  (): DibodevArticle | null => articles.value[0] ?? null,
)
/** The pillar articles that exist, in the configured order. */
const startArticles: ComputedRef<DibodevArticle[]> = computed((): DibodevArticle[] =>
  START_ARTICLE_SLUGS.map((slug: string): DibodevArticle | undefined =>
    articles.value.find((article: DibodevArticle): boolean => article.slug === slug),
  ).filter((article: DibodevArticle | undefined): article is DibodevArticle => article !== undefined),
)

const { t } = useI18n()
usePageShareImage('blog')
const breadcrumbs: ComputedRef<DibodevBreadcrumbItem[]> = useBreadcrumbTrail((): DibodevBreadcrumbItem[] => [
  { label: t('nav.blog'), to: null },
])

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
