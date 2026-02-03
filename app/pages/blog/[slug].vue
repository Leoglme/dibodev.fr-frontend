<template>
  <div v-if="article">
    <article class="relative z-2 bg-gray-800 px-6 pt-28 pb-12 sm:px-8 sm:pt-36 sm:pb-20">
      <div class="mx-auto max-w-3xl">
        <header class="mb-8 grid gap-4">
          <h1 class="text-3xl font-semibold text-gray-100 sm:text-4xl">
            {{ article.title }}
          </h1>
          <div class="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-gray-300">
            <time :datetime="article.date">
              {{ formattedDate }}
            </time>
            <span v-if="article.readingTimeMinutes > 0">
              {{ article.readingTimeMinutes }} {{ $t('blog.card.readingTime') }}
            </span>
          </div>
          <div v-if="article.tags.length > 0" class="flex flex-wrap gap-2">
            <DibodevBadge
              v-for="tag in article.tags"
              :key="tag"
              backgroundColor="#35424d"
              textColor="#f5f4fb"
              size="sm"
            >
              {{ tag }}
            </DibodevBadge>
          </div>
          <div v-if="article.coverImageUrl" class="aspect-video w-full overflow-hidden rounded-xl bg-gray-600">
            <img :src="article.coverImageUrl" :alt="article.title" class="h-full w-full object-cover" />
          </div>
        </header>

        <BlogArticleContent :content="article.content" />
      </div>
    </article>

    <div class="py-32 sm:py-40">
      <BlogCta />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import type { ComputedRef } from 'vue'
import BlogArticleContent from '~/components/blog/BlogArticleContent.vue'
import BlogCta from '~/components/blog/BlogCta.vue'
import DibodevBadge from '~/components/ui/DibodevBadge.vue'
import type { DibodevArticle } from '~/core/types/DibodevArticle'
import { StoryblokArticleService } from '~/services/storyblokArticleService'
import { mapStoryblokArticleToDibodevArticle } from '~/services/storyblokArticleMapper'
const route = useRoute()
const router = useRouter()
const storyblokLanguage = useStoryblokProjectLanguage()

const slug: string = String(route.params.slug ?? '').trim()
const isStoryblokEditor: boolean = typeof route.query._storyblok !== 'undefined'

const article: Ref<DibodevArticle | null> = ref<DibodevArticle | null>(null)

if (slug.length === 0) {
  await navigateTo({ path: '/blog', replace: true })
} else {
  try {
    const storyResponse = await StoryblokArticleService.getArticleBySlug(
      slug,
      isStoryblokEditor ? 'draft' : 'published',
      storyblokLanguage.value,
    )

    article.value = mapStoryblokArticleToDibodevArticle(storyResponse.story)
  } catch {
    throw createError({
      statusCode: 404,
      statusMessage: 'Article non trouvé',
      fatal: true,
    })
  }
}

const formattedDate: ComputedRef<string> = computed((): string => {
  if (!article.value) return ''
  try {
    const d: Date = new Date(article.value.date)
    return new Intl.DateTimeFormat('fr-FR', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    }).format(d)
  } catch {
    return article.value.date
  }
})

const siteUrl: string = 'https://dibodev.fr'
const { locale } = useI18n()
const localePath = useLocalePath()

useHead((): Record<string, unknown> => {
  if (!article.value) return {}

  const canonicalPath: string = localePath(article.value.route)
  const canonicalUrl: string = `${siteUrl}${canonicalPath}`
  const ogImageUrl: string = article.value.ogImageUrl || `${siteUrl}/android-chrome-512x512.png`

  return {
    title: article.value.metaTitle,
    meta: [
      { name: 'description', content: article.value.metaDescription },
      { property: 'og:title', content: article.value.metaTitle },
      { property: 'og:description', content: article.value.metaDescription },
      { property: 'og:image', content: ogImageUrl },
      { property: 'og:type', content: 'article' },
      { property: 'og:url', content: canonicalUrl },
      { property: 'og:locale', content: locale.value === 'fr' ? 'fr_FR' : locale.value === 'es' ? 'es_ES' : 'en_US' },
      { property: 'article:published_time', content: article.value.date },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: article.value.metaTitle },
      { name: 'twitter:description', content: article.value.metaDescription },
      { name: 'twitter:image', content: ogImageUrl },
    ],
    link: [{ rel: 'canonical', href: canonicalUrl }],
  }
})
</script>
