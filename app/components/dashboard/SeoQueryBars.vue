<template>
  <div class="w-full">
    <div v-if="rows.length === 0" class="py-8 text-center text-sm text-gray-400">
      Pas encore de requêtes sur la période.
    </div>
    <ul v-else class="flex flex-col gap-2.5">
      <li v-for="row in rows" :key="row.key" class="flex items-center gap-2 sm:gap-3">
        <div class="w-24 shrink-0 truncate text-xs text-gray-100 sm:w-52 sm:text-sm" :title="row.key">
          {{ row.key }}
        </div>
        <div class="relative h-6 min-w-0 flex-1 overflow-hidden rounded bg-gray-700/40">
          <div
            class="h-full rounded transition-all"
            :style="{ width: barWidth(row.impressions), backgroundColor: SeoDisplayUtils.ctrColor(row.ctr) }"
          />
        </div>
        <div class="w-14 shrink-0 text-right text-xs text-gray-300 tabular-nums sm:w-44">
          <span class="font-medium text-gray-100">{{ SeoDisplayUtils.formatInteger(row.impressions) }}</span>
          <span class="hidden sm:inline"> impr · pos {{ row.position.toFixed(1) }}</span>
        </div>
      </li>
    </ul>
  </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import type { ComputedRef, PropType } from 'vue'
import type { SearchPerformanceEntry } from '~~/server/types/dashboard/searchPerformance'
import { SeoDisplayUtils } from '~/core/utils/SeoDisplayUtils'

const props = defineProps({
  entries: {
    type: Array as PropType<SearchPerformanceEntry[]>,
    default: (): SearchPerformanceEntry[] => [],
  },
  limit: {
    type: Number,
    default: 12,
  },
})

/** Top queries by impressions, capped to `limit`. */
const rows: ComputedRef<SearchPerformanceEntry[]> = computed((): SearchPerformanceEntry[] =>
  [...props.entries]
    .sort((a: SearchPerformanceEntry, b: SearchPerformanceEntry): number => b.impressions - a.impressions)
    .slice(0, props.limit),
)

/** Highest impressions among the displayed rows, at least 1 to avoid dividing by zero. */
const maxImpressions: ComputedRef<number> = computed((): number =>
  Math.max(1, ...rows.value.map((row: SearchPerformanceEntry): number => row.impressions)),
)

/**
 * Returns the CSS width of an impressions bar relative to the largest one.
 *
 * @param {number} impressions - The row's impressions.
 * @returns {string} A CSS width percentage (with a small floor so tiny bars stay visible).
 */
function barWidth(impressions: number): string {
  const ratio: number = impressions / maxImpressions.value
  return `${Math.max(3, ratio * 100)}%`
}
</script>
