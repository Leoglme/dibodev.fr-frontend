<template>
  <div class="border-t border-gray-300 pt-8 sm:pt-10">
    <ul class="mx-auto flex max-w-3xl divide-x divide-gray-300">
      <li
        v-for="stat in props.stats"
        :key="stat.label"
        class="flex min-w-0 flex-1 flex-col items-center gap-2 px-2 text-center sm:px-6"
      >
        <span
          class="text-[26px] leading-none font-medium tracking-[-0.01em] text-gray-100 tabular-nums sm:text-[34px] lg:text-[40px]"
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

/** Row of two to four key figures, kept on one line down to phone width. */
const props: DibodevStatsBandProps = defineProps({
  stats: {
    type: Array as PropType<DibodevStatItemProps[]>,
    required: true,
  },
})
</script>
