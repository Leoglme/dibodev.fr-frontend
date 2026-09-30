<template>
  <div class="border-t border-gray-300 pt-8 sm:pt-10">
    <ul class="mx-auto grid max-w-3xl grid-cols-1 divide-y divide-gray-300 md:flex md:divide-x md:divide-y-0">
      <li
        v-for="stat in props.stats"
        :key="stat.label"
        class="flex min-w-0 flex-1 flex-col items-center gap-2 py-4 text-center first:pt-0 last:pb-0 md:px-4 md:py-0"
      >
        <span
          class="text-[26px] leading-none font-medium tracking-[-0.01em] text-gray-100 tabular-nums md:text-[30px] lg:text-[34px]"
        >
          {{ stat.value }}
        </span>
        <span class="text-muted text-sm leading-5 text-balance">{{ stat.label }}</span>
      </li>
    </ul>
  </div>
</template>

<script lang="ts" setup>
import type { PropType } from 'vue'
import type { DibodevStatItemProps } from '~/core/types/DibodevStat'
import type { DibodevStatsBandProps } from '~/core/types/DibodevStatsBand'

/** Row of two to four key figures, stacked on phones. */
const props: DibodevStatsBandProps = defineProps({
  stats: {
    type: Array as PropType<DibodevStatItemProps[]>,
    required: true,
  },
})
</script>
