<template>
  <span
    class="relative inline-grid shrink-0 place-items-center"
    :style="{ width: `${props.size}px`, height: `${props.size}px` }"
    role="img"
    :aria-label="props.score === null ? 'Pas de score' : `Score ${props.score} sur 100`"
  >
    <svg :width="props.size" :height="props.size" :viewBox="`0 0 ${props.size} ${props.size}`" class="-rotate-90">
      <circle
        :cx="props.size / 2"
        :cy="props.size / 2"
        :r="radius"
        fill="none"
        stroke="#f0f0ee"
        :stroke-width="props.strokeWidth"
      />
      <circle
        v-if="props.score !== null"
        class="transition-[stroke-dashoffset] duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)]"
        :cx="props.size / 2"
        :cy="props.size / 2"
        :r="radius"
        fill="none"
        :stroke="color"
        :stroke-width="props.strokeWidth"
        stroke-linecap="round"
        :stroke-dasharray="circumference"
        :stroke-dashoffset="dashOffset"
      />
    </svg>
    <span
      class="absolute font-medium tracking-[-0.02em] tabular-nums"
      :class="props.score === null ? 'text-(--dash-faint)' : 'text-gray-100'"
      :style="{ fontSize: `${Math.round(props.size * 0.29)}px` }"
    >
      {{ props.score === null ? '—' : props.score }}
    </span>
  </span>
</template>

<script lang="ts" setup>
import type { ComputedRef, PropType, Ref } from 'vue'
import type { DashboardScoreRingProps } from '~/core/types/DashboardScoreRing'
import { computed, onMounted, ref } from 'vue'
import { DASHBOARD_CHART_COLORS } from '~/core/constants/dashboardTones'
import { DashboardFormatUtils } from '~/core/utils/DashboardFormatUtils'

const props: DashboardScoreRingProps = defineProps({
  score: {
    type: Number as PropType<number | null>,
    default: null,
  },
  size: {
    type: Number,
    default: 56,
  },
  strokeWidth: {
    type: Number,
    default: 5,
  },
  goodThreshold: {
    type: Number,
    default: 90,
  },
})

const hasRingAnimationStarted: Ref<boolean> = ref(false)

const radius: ComputedRef<number> = computed((): number => (props.size - props.strokeWidth) / 2)
const circumference: ComputedRef<number> = computed((): number => 2 * Math.PI * radius.value)

const dashOffset: ComputedRef<number> = computed((): number =>
  hasRingAnimationStarted.value && props.score !== null
    ? circumference.value * (1 - props.score / 100)
    : circumference.value,
)

const color: ComputedRef<string> = computed(
  (): string => DASHBOARD_CHART_COLORS[DashboardFormatUtils.scoreLevel(props.score ?? 0, props.goodThreshold)],
)

onMounted((): void => {
  requestAnimationFrame((): void => {
    hasRingAnimationStarted.value = true
  })
})
</script>
