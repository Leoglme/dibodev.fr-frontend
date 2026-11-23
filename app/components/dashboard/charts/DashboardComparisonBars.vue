<template>
  <span
    class="flex shrink-0"
    :class="
      isVertical ? 'h-11 items-end gap-1 @2xl/page:h-16 @2xl/page:gap-1.5' : 'w-20 flex-col gap-1 @2xl/page:w-[120px]'
    "
    aria-hidden="true"
  >
    <span
      v-if="props.previousValue !== null"
      class="block"
      :class="isVertical ? VERTICAL_BAR_CLASSES : HORIZONTAL_BAR_CLASSES"
      :style="buildBarStyle(props.previousValue, props.tintColor)"
    />
    <span
      v-if="props.currentValue !== null"
      class="block"
      :class="isVertical ? VERTICAL_BAR_CLASSES : HORIZONTAL_BAR_CLASSES"
      :style="buildBarStyle(props.currentValue, props.color)"
    />
  </span>
</template>

<script lang="ts" setup>
import type { ComputedRef, PropType, StyleValue } from 'vue'
import type {
  DashboardComparisonBarsOrientation,
  DashboardComparisonBarsProps,
} from '~/core/types/DashboardComparisonBars'
import { computed } from 'vue'

/** Two decorative bars: the previous value in the tint, the current one in the full colour (the values are written beside). */
const props: DashboardComparisonBarsProps = defineProps({
  currentValue: {
    type: Number as PropType<number | null>,
    default: null,
  },
  previousValue: {
    type: Number as PropType<number | null>,
    default: null,
  },
  color: {
    type: String,
    required: true,
  },
  tintColor: {
    type: String,
    required: true,
  },
  orientation: {
    type: String as PropType<DashboardComparisonBarsOrientation>,
    default: 'horizontal',
  },
})

const VERTICAL_BAR_CLASSES: string = 'w-3 rounded-t-[4px] rounded-b-[1px] @2xl/page:w-[18px] @2xl/page:rounded-t-[5px]'
const HORIZONTAL_BAR_CLASSES: string = 'h-[7px] rounded'
const SMALLEST_BAR_PERCENT: number = 3

const isVertical: ComputedRef<boolean> = computed((): boolean => props.orientation === 'vertical')

const highestValue: ComputedRef<number> = computed((): number =>
  Math.max(props.currentValue ?? 0, props.previousValue ?? 0),
)

/**
 * Sizes a bar against the higher of the two values and colours it.
 *
 * @param {number} value - Value drawn by the bar.
 * @param {string} barColor - Its colour.
 * @returns {StyleValue} The length along the orientation and the background colour.
 */
function buildBarStyle(value: number, barColor: string): StyleValue {
  const percent: number =
    highestValue.value > 0 ? Math.max(SMALLEST_BAR_PERCENT, (value / highestValue.value) * 100) : SMALLEST_BAR_PERCENT
  const length: string = `${percent}%`

  return isVertical.value ? { height: length, backgroundColor: barColor } : { width: length, backgroundColor: barColor }
}
</script>
