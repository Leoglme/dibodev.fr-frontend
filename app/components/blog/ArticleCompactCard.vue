<template>
  <article class="hover:border-primary flex gap-3 rounded-xl border border-gray-600 bg-gray-900 p-3 transition-colors">
    <NuxtLink :to="localePath(props.route)" class="flex min-w-0 flex-1 gap-3">
      <div v-if="props.coverImageUrl" class="h-16 w-24 shrink-0 overflow-hidden rounded-lg bg-gray-600">
        <img :src="props.coverImageUrl" :alt="props.title" class="h-full w-full object-cover" loading="lazy" />
      </div>
      <div class="grid min-w-0 flex-1 gap-1">
        <h4 class="line-clamp-2 text-left text-sm font-medium text-gray-100">
          {{ props.title }}
        </h4>
        <time class="text-xs text-gray-300" :datetime="props.date">
          {{ formattedDate }}
        </time>
        <div v-if="props.tags.length > 0" class="flex flex-wrap gap-1">
          <DibodevBadge
            v-for="tag in props.tags.slice(0, 2)"
            :key="tag"
            backgroundColor="#35424d"
            textColor="#f5f4fb"
            size="sm"
          >
            {{ tag }}
          </DibodevBadge>
        </div>
      </div>
    </NuxtLink>
  </article>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import type { ComputedRef } from 'vue'
import type { PropType } from 'vue'
import DibodevBadge from '~/components/ui/DibodevBadge.vue'

const props = defineProps({
  title: { type: String, required: true },
  date: { type: String, required: true },
  coverImageUrl: { type: String, default: '' },
  tags: { type: Array as PropType<string[]>, default: (): string[] => [] },
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
