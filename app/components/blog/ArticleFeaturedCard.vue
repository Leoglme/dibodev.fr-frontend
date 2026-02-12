<template>
  <article
    class="hover:border-primary flex min-h-0 flex-col gap-4 rounded-2xl border-2 border-gray-600 bg-gray-900 p-4 transition-colors sm:p-5"
  >
    <NuxtLink :to="localePath(props.route)" class="grid shrink-0 gap-3">
      <div class="relative aspect-video w-full overflow-hidden rounded-xl bg-gray-600 lg:aspect-[2/1]">
        <img
          v-if="props.coverImageUrl"
          :src="props.coverImageUrl"
          :alt="props.title"
          class="h-full w-full object-cover"
          loading="eager"
        />
        <div v-else class="flex h-full w-full flex-col justify-center gap-2 p-4" aria-hidden="true">
          <div class="h-3 w-full max-w-[85%] rounded bg-gray-600/80" />
          <div class="h-3 w-full max-w-[70%] rounded bg-gray-600/60" />
          <div class="h-3 w-full max-w-[90%] rounded bg-gray-600/50" />
        </div>
      </div>
      <h3 class="text-left text-xl font-medium text-gray-100 sm:text-2xl">
        {{ props.title }}
      </h3>
      <p class="line-clamp-3 text-left text-sm leading-relaxed text-gray-200">
        {{ props.excerpt }}
      </p>
      <div class="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-gray-300">
        <time :datetime="props.date">{{ formattedDate }}</time>
        <span v-if="props.readingTimeMinutes > 0">
          {{ props.readingTimeMinutes }} {{ $t('blog.card.readingTime') }}
        </span>
      </div>
      <div v-if="props.tags.length > 0" class="flex flex-wrap gap-1">
        <DibodevBadge
          v-for="tag in props.tags.slice(0, 4)"
          :key="tag"
          backgroundColor="#35424d"
          textColor="#f5f4fb"
          size="sm"
        >
          {{ tag }}
        </DibodevBadge>
      </div>
    </NuxtLink>
    <div class="flex min-h-0 flex-1 flex-col justify-end">
      <DibodevButton
        icon="ArrowRight"
        iconPosition="right"
        :to="localePath(props.route)"
        size="sm"
        class="w-full sm:max-w-xs sm:self-end"
      >
        {{ $t('home.latestArticles.readArticle') }}
      </DibodevButton>
    </div>
  </article>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import type { ComputedRef } from 'vue'
import type { PropType } from 'vue'
import DibodevButton from '~/components/core/DibodevButton.vue'
import DibodevBadge from '~/components/ui/DibodevBadge.vue'

const props = defineProps({
  title: { type: String, required: true },
  excerpt: { type: String, required: true },
  date: { type: String, required: true },
  coverImageUrl: { type: String, default: '' },
  tags: { type: Array as PropType<string[]>, default: (): string[] => [] },
  readingTimeMinutes: { type: Number, default: 0 },
  route: { type: String, required: true },
})

const localePath = useLocalePath()

const formattedDate: ComputedRef<string> = computed((): string => {
  try {
    const d: Date = new Date(props.date)
    return new Intl.DateTimeFormat('fr-FR', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    }).format(d)
  } catch {
    return props.date
  }
})
</script>
