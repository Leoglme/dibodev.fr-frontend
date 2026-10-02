<template>
  <div>
    <DibodevLandingSection
      :breadcrumbs="breadcrumbs"
      :eyebrow="$t('blog.landing.eyebrow')"
      :titlePart1="$t('blog.landing.titlePart1')"
      :titleHighlight1="$t('blog.landing.titleHighlight1')"
      :titlePart2="$t('blog.landing.titlePart2')"
      :description="$t('blog.landing.description')"
      :ctaText="$t('blog.landing.ctaPrimary')"
      ctaTarget="#blog-list"
      :secondaryCta="{ text: $t('blog.landing.ctaSecondary'), target: '#blog-trades' }"
      :stats="heroStats"
      :reassurances="reassurances"
      :decorated="true"
    >
      <template v-if="heroSlides.length > 0" #aside>
        <DibodevPhotoSlideshow
          :slides="heroSlides"
          :accessibleName="$t('blog.landing.trades.label')"
          :captionIntro="$t('blog.landing.trades.intro')"
        />
      </template>
    </DibodevLandingSection>

    <BlogRelatedArticles
      :title="$t('blog.start.title')"
      :eyebrow="$t('blog.start.eyebrow')"
      :intro="$t('blog.start.intro')"
      :articles="startArticles"
      tone="tint"
    />

    <BlogTradeArticlesSection
      :eyebrow="$t('blog.trades.eyebrow')"
      :title="$t('blog.trades.title')"
      :intro="$t('blog.trades.intro')"
      :links="tradeLinks"
      :missingTradeText="$t('blog.trades.missingTrade')"
      :missingTradeLinkLabel="$t('blog.trades.missingTradeLink')"
    />

    <section id="blog-list" class="w-full scroll-mt-24 bg-gray-800 px-6 py-20 sm:px-8 lg:py-28" data-aos="fade-up">
      <div class="max-w-site mx-auto grid w-full gap-12 lg:gap-14">
        <DibodevSectionHeading :eyebrow="$t('blog.list.eyebrow')" :title="$t('blog.list.title')" />

        <div v-if="listedArticles.length === 0" class="grid gap-8 py-16 text-center">
          <p class="text-lg text-gray-200">
            {{ $t('blog.list.noArticles') }}
          </p>
        </div>

        <div v-else class="grid auto-rows-fr gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          <BlogArticleCard
            v-for="article in listedArticles"
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
import DibodevPhotoSlideshow from '~/components/data-displays/DibodevPhotoSlideshow.vue'
import BlogArticleCard from '~/components/blog/BlogArticleCard.vue'
import BlogRelatedArticles from '~/components/blog/BlogRelatedArticles.vue'
import BlogTradeArticlesSection from '~/components/blog/BlogTradeArticlesSection.vue'
import DibodevSectionHeading from '~/components/sections/DibodevSectionHeading.vue'
import DibodevContactCtaSection from '~/components/sections/DibodevContactCtaSection.vue'
import type { DibodevArticle } from '~/core/types/DibodevArticle'
import type { DibodevBlogTradeArticle, DibodevBlogTradeLink } from '~/core/types/DibodevBlogTrade'
import type { DibodevPhotoSlideshowSlide } from '~/core/types/DibodevPhotoSlideshow'
import type { DibodevStatItemProps } from '~/core/types/DibodevStat'
import { BLOG_HERO_TRADE_KEYS, BLOG_TRADE_ARTICLES } from '~/core/constants/blogTrades'
import { StoryblokImageUtils } from '~/core/utils/StoryblokImageUtils'
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
/** Widths of the slideshow photos, cropped to its 12:13 frame. */
const HERO_PHOTO_WIDTHS: number[] = [480, 960]
const HERO_PHOTO_HEIGHT_RATIO: number = 13 / 12
const REASSURANCE_KEYS: string[] = ['plainWords', 'examples', 'byTrade']

type TradeWithArticle = {
  trade: DibodevBlogTradeArticle
  article: DibodevArticle
}

const { data: articlesData } = await useArticlesWithTranslations({ page: 1, perPage: PER_PAGE })
const articles: ComputedRef<DibodevArticle[]> = computed((): DibodevArticle[] => articlesData.value ?? [])
/** The pillar articles that exist, in the configured order. */
const startArticles: ComputedRef<DibodevArticle[]> = computed((): DibodevArticle[] =>
  START_ARTICLE_SLUGS.map((slug: string): DibodevArticle | undefined =>
    articles.value.find((article: DibodevArticle): boolean => article.slug === slug),
  ).filter((article: DibodevArticle | undefined): article is DibodevArticle => article !== undefined),
)

/** Articles of the full list: the pillar articles are already shown just above. */
const listedArticles: ComputedRef<DibodevArticle[]> = computed((): DibodevArticle[] =>
  articles.value.filter((article: DibodevArticle): boolean => !START_ARTICLE_SLUGS.includes(article.slug)),
)

const { t } = useI18n()
usePageShareImage('blog')

/** Trades whose article exists in the current language. */
const tradesWithArticle: ComputedRef<TradeWithArticle[]> = computed((): TradeWithArticle[] =>
  BLOG_TRADE_ARTICLES.flatMap((trade: DibodevBlogTradeArticle): TradeWithArticle[] => {
    const article: DibodevArticle | undefined = articles.value.find(
      (candidate: DibodevArticle): boolean => candidate.slug === trade.articleSlug,
    )
    return article ? [{ trade, article }] : []
  }),
)

const tradeLinks: ComputedRef<DibodevBlogTradeLink[]> = computed((): DibodevBlogTradeLink[] =>
  tradesWithArticle.value.map(
    ({ trade, article }: TradeWithArticle): DibodevBlogTradeLink => ({
      key: trade.key,
      label: t(`blog.trades.items.${trade.key}`),
      route: article.route,
    }),
  ),
)

/** Slideshow next to the title: the cover photo of a few trade articles. */
const heroSlides: ComputedRef<DibodevPhotoSlideshowSlide[]> = computed((): DibodevPhotoSlideshowSlide[] =>
  BLOG_HERO_TRADE_KEYS.flatMap((tradeKey: string): DibodevPhotoSlideshowSlide[] => {
    const coverImageUrl: string | undefined = tradesWithArticle.value.find(
      ({ trade }: TradeWithArticle): boolean => trade.key === tradeKey,
    )?.article.coverImageUrl
    if (!coverImageUrl) return []
    return [
      {
        id: tradeKey,
        imageUrl: buildHeroPhotoUrl(coverImageUrl, HERO_PHOTO_WIDTHS[0]!),
        imageSrcset: HERO_PHOTO_WIDTHS.map(
          (width: number): string => `${buildHeroPhotoUrl(coverImageUrl, width)} ${width}w`,
        ).join(', '),
        imageAlt: t(`blog.landing.trades.items.${tradeKey}.alt`),
        title: t(`blog.landing.trades.items.${tradeKey}.name`),
        subtitle: t(`blog.landing.trades.items.${tradeKey}.topic`),
      },
    ]
  }),
)

const heroStats: ComputedRef<DibodevStatItemProps[]> = computed((): DibodevStatItemProps[] => [
  { value: String(articles.value.length), label: t('blog.landing.stats.articlesLabel') },
  { value: String(tradeLinks.value.length), label: t('blog.landing.stats.tradesLabel') },
])

const reassurances: ComputedRef<string[]> = computed((): string[] =>
  REASSURANCE_KEYS.map((key: string): string => t(`blog.landing.reassurance.${key}`)),
)

/**
 * Builds the URL of an article cover cropped to the slideshow frame at a given width.
 * @param {string} coverImageUrl - Storyblok URL of the cover.
 * @param {number} width - Width of the photo in pixels.
 * @returns {string} The URL of the cropped photo.
 */
function buildHeroPhotoUrl(coverImageUrl: string, width: number): string {
  return StoryblokImageUtils.getCroppedUrl(coverImageUrl, width, Math.round(width * HERO_PHOTO_HEIGHT_RATIO))
}
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
