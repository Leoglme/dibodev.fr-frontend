<template>
  <article class="article-card group flex h-full flex-col overflow-hidden rounded-xl border border-gray-300 bg-white">
    <NuxtLink
      :to="localePath(props.route)"
      class="flex h-full flex-col"
      @click="track(TRACKING_EVENTS.articleCardClicked, { article: props.route })"
    >
      <div class="relative aspect-video w-full overflow-hidden bg-gray-700 lg:aspect-[2/1]">
        <img
          v-if="props.coverImageUrl"
          :src="props.coverImageUrl"
          :alt="props.title"
          class="h-full w-full object-cover"
          loading="eager"
        />
        <div v-else class="flex h-full w-full flex-col justify-center gap-2 p-6" aria-hidden="true">
          <div class="h-3 w-full max-w-[85%] rounded bg-gray-400/40" />
          <div class="h-3 w-full max-w-[70%] rounded bg-gray-400/30" />
          <div class="h-3 w-full max-w-[90%] rounded bg-gray-400/20" />
        </div>
      </div>

      <div class="flex flex-1 flex-col gap-3 p-6 sm:p-7">
        <div v-if="props.tags.length > 0" class="hidden flex-wrap gap-1.5 sm:flex">
          <DibodevBadge v-for="tag in props.tags.slice(0, 4)" :key="tag" size="sm">
            {{ tag }}
          </DibodevBadge>
        </div>
        <h3
          class="group-hover:text-primary text-xl leading-snug font-medium text-gray-100 transition-colors sm:text-[26px]"
        >
          {{ props.title }}
        </h3>
        <p class="line-clamp-3 text-[15px] leading-6 text-gray-200">
          {{ props.excerpt }}
        </p>
        <div class="mt-auto flex flex-wrap items-center justify-between gap-x-4 gap-y-2 pt-3 text-sm">
          <div class="text-muted flex flex-wrap items-center gap-x-3">
            <time :datetime="props.date">{{ formattedDate }}</time>
            <span v-if="props.readingTimeMinutes > 0">
              {{ props.readingTimeMinutes }} {{ $t('blog.card.readingTime') }}
            </span>
          </div>
          <span class="text-primary inline-flex items-center gap-1.5 font-medium group-hover:underline">
            {{ $t('home.latestArticles.readArticle') }}
            <DibodevIcon name="ArrowRight" mode="stroke" :width="16" :height="16" aria-hidden="true" />
          </span>
        </div>
      </div>
    </NuxtLink>
  </article>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import type { ComputedRef, PropType } from 'vue'
import type { DibodevArticleCardProps } from '~/core/types/DibodevArticleCard'
import DibodevBadge from '~/components/ui/DibodevBadge.vue'
import DibodevIcon from '~/components/ui/DibodevIcon.vue'
import { formatArticleDate } from '~/core/utils/formatArticleDate'
import { useTracking } from '~/composables/useTracking'
import { TRACKING_EVENTS } from '~/core/constants/trackingEvents'

/**
 * Large article card (cover, tags, title, excerpt, date) used for the most recent article on the home page.
 */
const props: DibodevArticleCardProps = defineProps({
  title: { type: String as PropType<string>, required: true },
  excerpt: { type: String as PropType<string>, required: true },
  date: { type: String as PropType<string>, required: true },
  coverImageUrl: { type: String as PropType<string>, default: '' },
  tags: { type: Array as PropType<string[]>, default: (): string[] => [] },
  readingTimeMinutes: { type: Number as PropType<number>, default: 0 },
  route: { type: String as PropType<string>, required: true },
})

const localePath = useLocalePath()
const { locale } = useI18n()
const { track } = useTracking()

const formattedDate: ComputedRef<string> = computed((): string => formatArticleDate(props.date, locale.value as string))
</script>

<style scoped>
.article-card {
  transition:
    border-color 0.2s ease,
    box-shadow 0.2s ease,
    transform 0.2s ease;
}

.article-card:hover {
  border-color: rgba(111, 95, 224, 0.45);
  box-shadow: 0 14px 36px rgba(111, 95, 224, 0.1);
  transform: translateY(-2px);
}

@media (prefers-reduced-motion: reduce) {
  .article-card {
    transition: none;
  }

  .article-card:hover {
    transform: none;
  }
}
</style>
