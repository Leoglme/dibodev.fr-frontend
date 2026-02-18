<template>
  <article class="hover:border-primary grid gap-2 rounded-xl border border-gray-600 bg-gray-900 p-3 transition-colors">
    <NuxtLink :to="localePath(props.route)" class="grid gap-2">
      <div class="relative aspect-video w-full overflow-hidden rounded-lg bg-gray-600">
        <img
          v-if="props.coverImageUrl"
          :src="props.coverImageUrl"
          :alt="props.title"
          class="h-full w-full object-cover"
          loading="lazy"
        />
        <div v-else class="h-full w-full bg-gray-600/80" aria-hidden="true" />
      </div>
      <h4 class="line-clamp-2 text-left text-sm leading-snug font-medium text-gray-100">
        {{ props.title }}
      </h4>
      <p class="line-clamp-2 text-left text-xs leading-relaxed text-gray-200 sm:hidden">
        {{ props.excerpt }}
      </p>
      <div class="flex flex-wrap items-center gap-x-2 gap-y-0.5 text-xs text-gray-300">
        <time :datetime="props.date">{{ formattedDate }}</time>
        <span v-if="props.readingTimeMinutes > 0">
          {{ props.readingTimeMinutes }} {{ $t('blog.card.readingTime') }}
        </span>
      </div>
      <div v-if="props.tags.length > 0" class="flex flex-wrap gap-1">
        <DibodevBadge
          v-for="tag in props.tags.slice(0, 3)"
          :key="tag"
          backgroundColor="#35424d"
          textColor="#f5f4fb"
          size="xs"
        >
          {{ tag }}
        </DibodevBadge>
      </div>
    </NuxtLink>
    <DibodevButton icon="ArrowRight" iconPosition="right" :to="localePath(props.route)" size="sm" class="mt-2 w-full">
      {{ $t('home.latestArticles.readArticle') }}
    </DibodevButton>
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
  excerpt: { type: String, default: '' },
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
      month: 'short',
      year: 'numeric',
    }).format(d)
  } catch {
    return props.date
  }
})
</script>
