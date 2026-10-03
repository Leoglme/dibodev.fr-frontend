<template>
  <ul class="flex flex-wrap items-center gap-x-4 gap-y-3.5 text-[15px] leading-[22px] text-gray-200 sm:gap-y-2">
    <li
      v-for="(figure, figureIndex) in props.figures"
      :key="figure.label"
      class="flex items-center gap-2 whitespace-nowrap"
    >
      <span v-if="figureIndex > 0" class="hidden size-1 rounded-full bg-gray-400 sm:block" aria-hidden="true" />
      <span v-if="figure.hasStarRating" class="flex gap-0.5 text-amber-500" aria-hidden="true">
        <DibodevIcon v-for="starNumber in STAR_COUNT" :key="starNumber" name="Star" :width="16" :height="16" />
      </span>
      <span>
        <strong class="font-medium text-gray-100">{{ figure.value }}</strong>
        {{ figure.label }}
      </span>
    </li>
  </ul>
</template>

<script lang="ts" setup>
import type { PropType } from 'vue'
import type { DibodevStatItemProps } from '~/core/types/DibodevStat'
import type { DibodevKeyFiguresLineProps } from '~/core/types/DibodevKeyFiguresLine'
import DibodevIcon from '~/components/ui/DibodevIcon.vue'

/** Key figures on one line, wrapping on phones. */
const props: DibodevKeyFiguresLineProps = defineProps({
  figures: {
    type: Array as PropType<DibodevStatItemProps[]>,
    required: true,
  },
})

const STAR_COUNT: number = 5
</script>
