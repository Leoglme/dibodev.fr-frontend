<template>
  <article
    class="hover:border-primary grid gap-3 rounded-2xl border-2 border-gray-600 bg-gray-800 p-3 transition-colors"
  >
    <NuxtLink :to="localePath(props.route)" class="block">
      <div class="relative aspect-video w-full overflow-hidden rounded-xl bg-gray-600">
        <img
          v-if="props.coverImageUrl"
          :src="props.coverImageUrl"
          :alt="props.title"
          class="h-full w-full object-cover"
          loading="lazy"
        />
        <div v-else class="flex h-full w-full flex-col justify-center gap-2 p-4" aria-hidden="true">
          <div class="h-3 w-full max-w-[85%] rounded bg-gray-600/80" />
          <div class="h-3 w-full max-w-[70%] rounded bg-gray-600/60" />
          <div class="h-3 w-full max-w-[90%] rounded bg-gray-600/50" />
        </div>
      </div>
      <h2 class="mt-2 text-left text-xl font-medium text-gray-100">
        {{ props.title }}
      </h2>
      <p class="line-clamp-3 text-left text-sm leading-relaxed text-gray-200">
        {{ props.excerpt }}
      </p>
      <div class="mt-2 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-gray-300">
        <time :datetime="props.date">
          {{ formattedDate }}
        </time>
        <span v-if="props.readingTimeMinutes > 0"
          >{{ props.readingTimeMinutes }} {{ $t('blog.card.readingTime') }}</span
        >
      </div>
      <div v-if="props.tags.length > 0" class="mt-2 flex flex-wrap gap-1">
        <DibodevBadge
          v-for="tag in props.tags.slice(0, 3)"
          :key="tag"
          backgroundColor="#35424d"
          textColor="#f5f4fb"
          size="sm"
        >
          {{ tag }}
        </DibodevBadge>
      </div>
    </NuxtLink>
    <DibodevButton icon="ArrowRight" iconPosition="right" :to="localePath(props.route)" class="mt-1 w-full">
      {{ $t('blog.card.readMore') }}
    </DibodevButton>
  </article>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import type { ComputedRef, PropType } from 'vue'
import DibodevButton from '~/components/core/DibodevButton.vue'
import DibodevBadge from '~/components/ui/DibodevBadge.vue'

const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  excerpt: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
  coverImageUrl: {
    type: String,
    default: '',
  },
  tags: {
    type: Array as PropType<string[]>,
    default: (): string[] => [],
  },
  readingTimeMinutes: {
    type: Number,
    default: 0,
  },
  route: {
    type: String,
    required: true,
  },
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
