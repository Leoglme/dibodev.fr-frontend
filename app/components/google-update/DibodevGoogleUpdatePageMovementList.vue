<template>
  <div class="grid gap-2">
    <p class="text-xs font-medium tracking-[0.08em] text-white/85 uppercase">{{ props.title }}</p>
    <p v-if="props.movements.length === 0" class="text-sm leading-6 text-white/70">{{ props.emptyText }}</p>
    <ul v-else class="grid gap-1.5" :aria-label="props.title">
      <li
        v-for="movement in props.movements"
        :key="movement.page"
        class="grid grid-cols-[minmax(0,1fr)_auto] items-baseline gap-3 rounded-lg bg-white/10 px-3 py-2"
      >
        <span class="truncate text-sm leading-6" :title="movement.pageLabel">{{ movement.pageLabel }}</span>
        <span class="text-sm leading-6 whitespace-nowrap text-white/85 tabular-nums">
          <span class="sr-only">{{ props.impressionsLabel }}</span>
          {{ formatCount(movement.impressionsPrevious) }}
          <span aria-hidden="true">→</span>
          {{ formatCount(movement.impressionsCurrent) }}
        </span>
      </li>
    </ul>
  </div>
</template>

<script lang="ts" setup>
import type { PropType } from 'vue'
import type { SupportedLocale } from '~/core/constants/categorySlugs'
import type { DibodevGoogleUpdatePageMovement } from '~/core/types/DibodevGoogleUpdateImpact'
import type { DibodevGoogleUpdatePageMovementListProps } from '~/core/types/DibodevGoogleUpdateImpactChecker'
import { GoogleUpdateImpactUtils } from '~/core/utils/GoogleUpdateImpactUtils'

/** One list of pages that moved between the two periods of the export, with their impressions before and after. */
const props: DibodevGoogleUpdatePageMovementListProps = defineProps({
  title: {
    type: String as PropType<string>,
    required: true,
  },
  movements: {
    type: Array as PropType<DibodevGoogleUpdatePageMovement[]>,
    required: true,
  },
  impressionsLabel: {
    type: String as PropType<string>,
    required: true,
  },
  emptyText: {
    type: String as PropType<string>,
    required: true,
  },
})

const { locale } = useI18n()

/**
 * Writes a count with the thousands separator of the page language.
 * @param {number} count - The count.
 * @returns {string} The count in figures.
 */
function formatCount(count: number): string {
  return GoogleUpdateImpactUtils.formatCount(count, (locale.value as SupportedLocale) || 'fr')
}
</script>
