<template>
  <div v-if="article">
    <article class="relative w-full px-6 pt-[120px] pb-16 sm:px-8 lg:pt-[160px] lg:pb-24">
      <div class="mx-auto grid w-full max-w-6xl items-start gap-12 lg:grid-cols-[minmax(0,1fr)_300px] lg:gap-16">
        <div class="mx-auto w-full max-w-3xl lg:mx-0">
          <header class="mb-8 grid gap-5">
            <DibodevBreadcrumb :items="breadcrumbs" />
            <h1
              class="text-[32px] leading-[1.15] font-medium tracking-[-0.01em] text-gray-100 sm:text-[40px] lg:text-[44px]"
            >
              {{ article.title }}
            </h1>
            <div class="text-muted flex flex-wrap items-center gap-x-4 gap-y-1 text-sm">
              <span>{{ $t('meta.shareLabels.author') }} {{ PERSON_NAME }}</span>
              <time :datetime="article.date">
                {{ formattedDate }}
              </time>
              <span v-if="article.readingTimeMinutes > 0">
                {{ article.readingTimeMinutes }} {{ $t('blog.card.readingTime') }}
              </span>
            </div>
            <div v-if="article.tags.length > 0" class="flex flex-wrap gap-2">
              <DibodevBadge v-for="tag in article.tags" :key="tag" size="sm">
                {{ tag }}
              </DibodevBadge>
            </div>
            <div v-if="article.coverImageUrl" class="mt-2 aspect-video w-full overflow-hidden rounded-lg bg-gray-700">
              <img :src="article.coverImageUrl" :alt="article.title" class="h-full w-full object-cover" />
            </div>
          </header>

          <DibodevToolTeaser
            v-for="toolTeaser in toolTeasers"
            :key="toolTeaser.toolId"
            :teaser="toolTeaser"
            trackingLocation="article"
            class="mb-8"
          />

          <BlogArticleToc v-if="hasTableOfContents" :headings="headings" class="mb-6 lg:hidden" />

          <BlogArticleContent :content="article.content" />

          <DibodevToolTeaser :teaser="BUSINESS_SOFTWARE_PAGE_TEASER" trackingLocation="article_end" class="mt-10" />

          <DibodevAuthorCard variant="inline" class="mt-12" />
        </div>

        <aside class="sticky top-24 hidden lg:block">
          <div class="grid gap-5">
            <BlogArticleToc v-if="hasTableOfContents" :headings="headings" />
            <DibodevContactAsideCard
              :title="$t('blog.sidebarCta.title')"
              :description="$t('blog.sidebarCta.description')"
              :buttonLabel="$t('blog.sidebarCta.button')"
              trackingLocation="article_sidebar"
            />
          </div>
        </aside>
      </div>
    </article>

    <BlogRelatedArticles :title="$t('blog.related.title')" :articles="relatedArticles" />

    <DibodevContactCtaSection />
  </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import type { ComputedRef } from 'vue'
import BlogArticleContent from '~/components/blog/BlogArticleContent.vue'
import BlogArticleToc from '~/components/blog/BlogArticleToc.vue'
import BlogRelatedArticles from '~/components/blog/BlogRelatedArticles.vue'
import DibodevAuthorCard from '~/components/cards/DibodevAuthorCard.vue'
import DibodevBreadcrumb from '~/components/navigations/DibodevBreadcrumb.vue'
import DibodevContactAsideCard from '~/components/cards/DibodevContactAsideCard.vue'
import DibodevContactCtaSection from '~/components/sections/DibodevContactCtaSection.vue'
import DibodevToolTeaser from '~/components/data-displays/DibodevToolTeaser.vue'
import DibodevBadge from '~/components/ui/DibodevBadge.vue'
import type { ArticleTranslationLocale, DibodevArticle, DibodevLocalizedArticle } from '~/core/types/DibodevArticle'
import type { DibodevBreadcrumbItem } from '~/core/types/DibodevBreadcrumb'
import type { HeadAlternateLink } from '~/core/types/HeadAlternateLink'
import type { SupportedLocale } from '~/core/constants/categorySlugs'
import type { SeoMetaTag } from '~/core/types/SeoMetaTag'
import type { SharePreviewDetail } from '~/core/types/SharePreviewDetail'
import type { StoryblokVersion } from '~/services/types/storyblok'
import type { DibodevArticleHeading } from '~/core/utils/articleHeadings'
import type { DibodevToolTeaserContent } from '~/core/types/DibodevToolTeaser'
import { StoryblokArticleService } from '~/services/storyblokArticleService'
import { useArticlesWithTranslations } from '~/composables/useArticlesWithTranslations'
import { useBreadcrumbTrail } from '~/composables/useBreadcrumbTrail'
import { useToolTeasers } from '~/composables/useToolTeasers'
import { TOOL_TEASERS_BY_ARTICLE_SLUG } from '~/core/constants/tools/toolTeasers'
import { BUSINESS_SOFTWARE_PAGE_TEASER } from '~/core/constants/businessSoftwarePageTeaser'
import { buildArticleSchemaJson } from '~/config/articleSchema'
import { buildShareImageMeta } from '~/config/shareImage'
import { buildSharePreviewDetailsMeta } from '~/config/sharePreviewDetails'
import { PERSON_NAME } from '~/config/schema'
import { usePageShareImage } from '~/composables/usePageShareImage'
import { extractArticleHeadings } from '~/core/utils/articleHeadings'
import { StoryblokImageUtils } from '~/core/utils/StoryblokImageUtils'
import { formatArticleDate } from '~/core/utils/formatArticleDate'

const RELATED_ARTICLES_COUNT: number = 3
const RELATED_ARTICLES_POOL_SIZE: number = 24
const ARTICLE_SCHEMA_FALLBACK_IMAGE_PATH: string = '/images/og/leo-guillaume-portrait.jpg'
/** A table of contents is only useful from this number of sections. */
const MIN_HEADINGS_FOR_TOC: number = 3
const ARTICLE_LOCALES: SupportedLocale[] = ['fr', 'en', 'es']
const HREFLANG_BY_LOCALE: Record<SupportedLocale, string> = { fr: 'fr-FR', en: 'en-US', es: 'es-ES' }

/**
 * Selects up to `limit` related articles ranked by shared tags then recency, excluding the current one.
 *
 * @param {DibodevArticle[]} all - All fetched articles.
 * @param {string} currentSlug - Slug of the current article, excluded from the result.
 * @param {string[]} currentTags - Tags of the current article, used to score relevance.
 * @param {number} limit - Maximum number of related articles to return.
 * @returns {DibodevArticle[]} The related articles, most relevant first.
 */
function selectRelatedArticles(
  all: DibodevArticle[],
  currentSlug: string,
  currentTags: string[],
  limit: number,
): DibodevArticle[] {
  const currentTagSet: Set<string> = new Set(currentTags)
  const sharedTagCount = (candidate: DibodevArticle): number =>
    candidate.tags.filter((tag: string): boolean => currentTagSet.has(tag)).length
  return all
    .filter((candidate: DibodevArticle): boolean => candidate.slug !== currentSlug)
    .sort(
      (first: DibodevArticle, second: DibodevArticle): number =>
        sharedTagCount(second) - sharedTagCount(first) ||
        new Date(second.date).getTime() - new Date(first.date).getTime(),
    )
    .slice(0, limit)
}

const route = useRoute()
const storyblokLanguage = useStoryblokProjectLanguage()
const { t, locale } = useI18n()
const localePath = useLocalePath()

const slug: string = String(route.params.slug ?? '').trim()
const isStoryblokEditor: boolean = typeof route.query._storyblok !== 'undefined'
const storyblokVersion: StoryblokVersion = isStoryblokEditor ? 'draft' : 'published'

if (slug.length === 0) {
  await navigateTo({ path: '/blog', replace: true })
}

// Keep this in useAsyncData: a browser-side Storyblok refetch can fail and replace the article with a 404 page.
const { data: localizedArticle } = await useAsyncData<DibodevLocalizedArticle | null>(
  `blog-article-${locale.value}-${storyblokVersion}-${slug}`,
  (): Promise<DibodevLocalizedArticle | null> =>
    slug.length === 0
      ? Promise.resolve(null)
      : StoryblokArticleService.getLocalizedArticle(
          slug,
          storyblokVersion,
          locale.value as string,
          storyblokLanguage.value,
        ),
)

const article: ComputedRef<DibodevArticle | null> = computed(
  (): DibodevArticle | null => localizedArticle.value?.article ?? null,
)

if (slug.length > 0 && !article.value) {
  throw createError({
    statusCode: 404,
    statusMessage: 'Article non trouvé',
    fatal: true,
  })
}

const localesWithoutTranslation: ArticleTranslationLocale[] = localizedArticle.value?.localesWithoutTranslation ?? []
const availableArticleLocales: SupportedLocale[] = ARTICLE_LOCALES.filter(
  (articleLocale: SupportedLocale): boolean =>
    !localesWithoutTranslation.some(
      (missingLocale: ArticleTranslationLocale): boolean => missingLocale === articleLocale,
    ),
)

// An untranslated article would show French text under /en or /es: the French page is served instead.
if (
  article.value &&
  !isStoryblokEditor &&
  !availableArticleLocales.some((articleLocale: SupportedLocale): boolean => articleLocale === locale.value)
) {
  await navigateTo(localePath(article.value.route, 'fr'), { redirectCode: 302 })
}

const { data: articlesPool } = await useArticlesWithTranslations({ perPage: RELATED_ARTICLES_POOL_SIZE })

const relatedArticles: ComputedRef<DibodevArticle[]> = computed((): DibodevArticle[] =>
  article.value
    ? selectRelatedArticles(articlesPool.value ?? [], slug, article.value.tags, RELATED_ARTICLES_COUNT)
    : [],
)

const formattedDate: ComputedRef<string> = computed((): string =>
  article.value ? formatArticleDate(article.value.date, locale.value as string) : '',
)

const headings: ComputedRef<DibodevArticleHeading[]> = computed((): DibodevArticleHeading[] =>
  article.value ? extractArticleHeadings(article.value.content) : [],
)

const hasTableOfContents: ComputedRef<boolean> = computed((): boolean => headings.value.length >= MIN_HEADINGS_FOR_TOC)
const toolTeasers: ComputedRef<DibodevToolTeaserContent[]> = useToolTeasers((): DibodevToolTeaserContent[] =>
  TOOL_TEASERS_BY_ARTICLE_SLUG[slug] ? [TOOL_TEASERS_BY_ARTICLE_SLUG[slug]] : [],
)

const breadcrumbs: ComputedRef<DibodevBreadcrumbItem[]> = useBreadcrumbTrail((): DibodevBreadcrumbItem[] => [
  { label: t('nav.blog'), to: localePath('/blog') },
  { label: article.value?.title ?? '', to: null },
])

const siteUrl: string = 'https://dibodev.fr'
const articleShareImageUrl: string = StoryblokImageUtils.getShareImageUrl(article.value?.ogImageUrl)

// Articles without a usable cover (missing, GIF or SVG) use the blog page image.
if (!articleShareImageUrl) {
  usePageShareImage('blog')
}

useHead((): Record<string, unknown> => {
  if (!article.value) return {}

  const canonicalPath: string = localePath(article.value.route)
  const canonicalUrl: string = `${siteUrl}${canonicalPath}`
  const articleRoute: string = article.value.route
  // Only the locales with a real text are declared, so hreflang never points to a redirected page.
  const alternateLinks: HeadAlternateLink[] = [
    ...availableArticleLocales.map(
      (articleLocale: SupportedLocale): HeadAlternateLink => ({
        rel: 'alternate',
        hreflang: HREFLANG_BY_LOCALE[articleLocale],
        href: `${siteUrl}${localePath(articleRoute, articleLocale)}`,
        key: `i18n-alternate-${HREFLANG_BY_LOCALE[articleLocale]}`,
      }),
    ),
    {
      rel: 'alternate',
      hreflang: 'x-default',
      href: `${siteUrl}${localePath(articleRoute, 'fr')}`,
      key: 'i18n-alternate-x-default',
    },
  ]
  const shareImageMeta: SeoMetaTag[] = articleShareImageUrl
    ? buildShareImageMeta(articleShareImageUrl, article.value.metaTitle)
    : []
  const schemaImageUrl: string = article.value.ogImageUrl || `${siteUrl}${ARTICLE_SCHEMA_FALLBACK_IMAGE_PATH}`
  const readingTimeMinutes: number = article.value.readingTimeMinutes
  const articleDetails: SharePreviewDetail[] = [
    { label: t('meta.shareLabels.author'), value: PERSON_NAME },
    {
      label: t('meta.shareLabels.readingTime'),
      value: readingTimeMinutes > 0 ? t('meta.shareLabels.readingTimeValue', { minutes: readingTimeMinutes }) : '',
    },
  ]

  return {
    title: article.value.metaTitle,
    meta: [
      { name: 'description', content: article.value.metaDescription },
      { property: 'og:title', content: article.value.metaTitle },
      { property: 'og:description', content: article.value.metaDescription },
      { property: 'og:type', content: 'article' },
      { property: 'og:url', content: canonicalUrl },
      { property: 'og:locale', content: locale.value === 'fr' ? 'fr_FR' : locale.value === 'es' ? 'es_ES' : 'en_US' },
      { property: 'article:published_time', content: article.value.date },
      { property: 'article:author', content: `${siteUrl}${localePath('about')}` },
      ...article.value.tags.map((tag: string): SeoMetaTag => ({ property: 'article:tag', content: tag })),
      { name: 'twitter:title', content: article.value.metaTitle },
      { name: 'twitter:description', content: article.value.metaDescription },
      ...buildSharePreviewDetailsMeta(articleDetails),
      ...shareImageMeta,
    ],
    link: [{ rel: 'canonical', href: canonicalUrl }, ...alternateLinks],
    script: [
      {
        type: 'application/ld+json',
        innerHTML: buildArticleSchemaJson(article.value, canonicalUrl, schemaImageUrl, locale.value),
      },
    ],
  }
})
</script>
