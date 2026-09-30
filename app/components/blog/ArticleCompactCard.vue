<template>
  <article class="article-card group flex h-full flex-col overflow-hidden rounded-xl border border-gray-300 bg-white">
    <NuxtLink
      :to="localePath(props.route)"
      class="flex h-full flex-col"
      @click="track(TRACKING_EVENTS.articleCardClicked, { article: props.route })"
    >
      <div class="relative aspect-video w-full overflow-hidden bg-gray-700">
        <img
          v-if="props.coverImageUrl"
          :src="props.coverImageUrl"
          :alt="props.title"
          class="h-full w-full object-cover"
          loading="lazy"
        />
        <div v-else class="h-full w-full" aria-hidden="true" />
      </div>
      <div class="flex flex-1 flex-col gap-2 p-5">
        <h4
          class="group-hover:text-primary line-clamp-2 text-base leading-snug font-medium text-gray-100 transition-colors"
        >
          {{ props.title }}
        </h4>
        <p class="line-clamp-2 text-sm leading-6 text-gray-200 sm:hidden">
          {{ props.excerpt }}
        </p>
        <div class="text-muted mt-auto flex flex-wrap items-center gap-x-3 pt-1 text-sm">
          <time :datetime="props.date">{{ formattedDate }}</time>
          <span v-if="props.readingTimeMinutes > 0">
            {{ props.readingTimeMinutes }} {{ $t('blog.card.readingTime') }}
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
import { formatArticleDate } from '~/core/utils/formatArticleDate'
import { useTracking } from '~/composables/useTracking'
import { TRACKING_EVENTS } from '~/core/constants/trackingEvents'

/**
 * Small article card (cover, title, date) listed next to the featured article on the home page.
 */
const props: DibodevArticleCardProps = defineProps({
  title: { type: String as PropType<string>, required: true },
  excerpt: { type: String as PropType<string>, default: '' },
  date: { type: String as PropType<string>, required: true },
  coverImageUrl: { type: String as PropType<string>, default: '' },
  tags: { type: Array as PropType<string[]>, default: (): string[] => [] },
  readingTimeMinutes: { type: Number as PropType<number>, default: 0 },
  route: { type: String as PropType<string>, required: true },
})

const localePath = useLocalePath()
const { locale } = useI18n()
const { track } = useTracking()

const formattedDate: ComputedRef<string> = computed((): string =>
  formatArticleDate(props.date, locale.value as string, 'short'),
)
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
