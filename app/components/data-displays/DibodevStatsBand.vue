<template>
  <ul class="grid gap-8 sm:gap-10 lg:grid-cols-3 lg:gap-5">
    <li v-for="stat in props.stats" :key="stat.label" class="flex min-w-0 flex-col">
      <span class="mb-5 h-0.5 w-8 rounded-full" :style="{ backgroundColor: accentBarColor }" aria-hidden="true" />
      <span
        class="text-[36px] leading-[1.05] font-medium tracking-[-0.025em] text-balance text-gray-100 sm:text-[40px] xl:text-[48px]"
      >
        {{ stat.value }}
      </span>
      <span class="mt-3 max-w-[19rem] text-base leading-6 text-pretty text-gray-200">{{ stat.label }}</span>
    </li>
  </ul>
</template>

<script lang="ts" setup>
import type { ComputedRef, PropType } from 'vue'
import type { DibodevStatItemProps } from '~/core/types/DibodevStat'
import type { DibodevStatsBandProps } from '~/core/types/DibodevStatsBand'
import { computed } from 'vue'

/** Share of the accent colour in the short bar above each figure, the rest being white, so the bar stays light. */
const ACCENT_BAR_COLOR_SHARE: string = '55%'

/** Row of two to four key figures in large type, aligned on the three columns of the section, stacked on phones. */
const props: DibodevStatsBandProps = defineProps({
  stats: {
    type: Array as PropType<DibodevStatItemProps[]>,
    required: true,
  },
  accentColor: {
    type: String as PropType<string>,
    default: '',
  },
})

const accentBarColor: ComputedRef<string> = computed((): string =>
  props.accentColor
    ? `color-mix(in srgb, ${props.accentColor} ${ACCENT_BAR_COLOR_SHARE}, white)`
    : 'var(--color-gray-400)',
)
</script>
