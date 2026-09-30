<template>
  <div class="flex items-center gap-3">
    <div
      class="bg-accent-tint relative h-2.5 flex-1 rounded-full after:absolute after:inset-x-[18px] after:top-1/2 after:z-[1] after:h-0.5 after:-translate-y-1/2 after:rounded-sm after:bg-[repeating-linear-gradient(90deg,rgba(255,255,255,0.95)_0_9px,transparent_9px_18px)] after:content-['']"
      role="progressbar"
      :aria-label="props.label"
      aria-valuemin="0"
      :aria-valuemax="props.totalSteps"
      :aria-valuenow="props.completedSteps"
    >
      <div
        class="bg-primary absolute inset-y-0 left-0 rounded-full transition-[width] duration-[420ms] ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none"
        :style="{ width: travellerPosition }"
      />
      <span
        class="border-primary text-primary-dark absolute top-1/2 z-[2] -ml-4 grid h-8 w-8 -translate-y-1/2 place-items-center rounded-full border-[1.5px] bg-white shadow-[0_6px_14px_-6px_rgba(91,75,208,0.55)] transition-[left] duration-[420ms] ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none"
        :style="{ left: travellerPosition }"
        aria-hidden="true"
      >
        <DibodevIcon :name="props.travellerIcon" mode="stroke" :width="18" :height="18" />
      </span>
    </div>
    <span
      class="flex shrink-0 transition-colors"
      :class="hasReachedFinishFlag ? 'text-primary-dark' : 'text-muted'"
      aria-hidden="true"
    >
      <DibodevIcon name="Flag" mode="stroke" :width="18" :height="18" />
    </span>
  </div>
</template>

<script lang="ts" setup>
import type { ComputedRef, PropType } from 'vue'
import type { DibodevRoadProgressProps } from '~/core/types/DibodevRoadProgress'
import { computed } from 'vue'
import DibodevIcon from '~/components/ui/DibodevIcon.vue'

const props: DibodevRoadProgressProps = defineProps({
  completedSteps: {
    type: Number as PropType<number>,
    required: true,
  },
  totalSteps: {
    type: Number as PropType<number>,
    required: true,
  },
  travellerIcon: {
    type: String as PropType<string>,
    default: 'Car',
  },
  label: {
    type: String as PropType<string>,
    required: true,
  },
})

const progressRatio: ComputedRef<number> = computed((): number =>
  props.totalSteps > 0 ? Math.min(Math.max(props.completedSteps / props.totalSteps, 0), 1) : 0,
)
/** Half the traveller's width is kept free at each end, so it never overflows the road. */
const travellerPosition: ComputedRef<string> = computed(
  (): string => `calc(16px + (100% - 32px) * ${progressRatio.value.toFixed(4)})`,
)
const hasReachedFinishFlag: ComputedRef<boolean> = computed((): boolean => progressRatio.value >= 1)
</script>
