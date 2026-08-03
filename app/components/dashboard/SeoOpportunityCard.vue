<template>
  <div class="flex flex-col overflow-hidden rounded-2xl border border-gray-600 bg-gray-800">
    <div class="h-1 w-full" :class="accentBarClass" />
    <div class="flex min-h-0 flex-1 flex-col p-4">
      <h3 class="text-sm font-semibold" :class="titleClass">{{ title }}</h3>
      <p class="mt-1 mb-3 text-xs text-gray-300">{{ hint }}</p>
      <ul v-if="items.length > 0" class="flex flex-col gap-2">
        <li v-for="item in items" :key="item.key" class="rounded-lg bg-gray-900/50 px-3 py-2">
          <p class="truncate text-sm font-medium text-gray-100" :title="item.key">{{ item.key }}</p>
          <div class="mt-1.5 flex flex-wrap items-center gap-1.5 text-xs tabular-nums">
            <span class="rounded bg-gray-700 px-1.5 py-0.5 text-gray-200">
              {{ SeoDisplayUtils.formatInteger(item.impressions) }} impr.
            </span>
            <span class="rounded px-1.5 py-0.5" :class="SeoDisplayUtils.positionBadgeClass(item.position)">
              pos {{ item.position.toFixed(1) }}
            </span>
            <span class="rounded bg-gray-700 px-1.5 py-0.5 text-gray-200">{{ (item.ctr * 100).toFixed(1) }}% CTR</span>
            <span v-if="item.clicks > 0" class="bg-primary/25 text-primary-light rounded px-1.5 py-0.5">
              {{ item.clicks }} clic{{ item.clicks > 1 ? 's' : '' }}
            </span>
          </div>
        </li>
      </ul>
      <p v-else class="rounded-lg bg-gray-900/40 px-3 py-4 text-center text-xs text-gray-400">
        Rien à signaler ici sur cette période.
      </p>
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { PropType } from 'vue'
import type { SearchPerformanceEntry } from '~~/server/types/dashboard/searchPerformance'
import { SeoDisplayUtils } from '~/core/utils/SeoDisplayUtils'

defineProps({
  title: {
    type: String,
    required: true,
  },
  titleClass: {
    type: String,
    default: 'text-gray-100',
  },
  accentBarClass: {
    type: String,
    default: 'bg-gray-500',
  },
  hint: {
    type: String,
    default: '',
  },
  items: {
    type: Array as PropType<SearchPerformanceEntry[]>,
    default: (): SearchPerformanceEntry[] => [],
  },
})
</script>
