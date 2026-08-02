<template>
  <section
    v-if="articles.length > 0"
    class="relative z-2 border-t border-gray-700 bg-gray-800 px-6 py-12 sm:px-8 sm:py-16"
  >
    <div class="mx-auto max-w-7xl">
      <h2 class="mb-8 text-2xl font-semibold text-gray-100 sm:text-3xl">
        {{ $t('blog.related.title') }}
      </h2>
      <div class="grid auto-rows-fr gap-6 sm:grid-cols-2 lg:grid-cols-3">
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
          source="related"
        />
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import type { PropType } from 'vue'
import type { DibodevArticle } from '~/core/types/DibodevArticle'
import BlogArticleCard from '~/components/blog/BlogArticleCard.vue'

defineProps({
  articles: {
    type: Array as PropType<DibodevArticle[]>,
    default: (): DibodevArticle[] => [],
  },
})
</script>
