<template>
  <div ref="container" class="h-11 w-full">
    <svg
      v-if="width > 0 && props.values.length > 1"
      :width="width"
      :height="HEIGHT"
      :viewBox="`0 0 ${width} ${HEIGHT}`"
    >
      <template v-if="props.variant === 'bars'">
        <line :x1="PAD" :x2="width - PAD" :y1="HEIGHT - 2.5" :y2="HEIGHT - 2.5" stroke="rgba(20,20,20,0.1)" />
        <rect
          v-for="bar in bars"
          :key="bar.x"
          :x="bar.x"
          :y="bar.y"
          :width="bar.width"
          :height="bar.height"
          rx="1.5"
          fill="#141414"
        />
      </template>
      <template v-else>
        <defs>
          <linearGradient :id="gradientId" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" :stop-color="props.color" stop-opacity="0.16" />
            <stop offset="100%" :stop-color="props.color" stop-opacity="0" />
          </linearGradient>
        </defs>
        <path :d="areaPath" :fill="`url(#${gradientId})`" />
        <path :d="linePath" fill="none" :stroke="props.color" stroke-width="1.6" stroke-linejoin="round" />
        <circle
          v-if="lastPoint"
          :cx="lastPoint[0]"
          :cy="lastPoint[1]"
          r="3"
          fill="#fff"
          :stroke="props.color"
          stroke-width="1.6"
        />
      </template>
    </svg>
  </div>
</template>

<script lang="ts" setup>
import type { DashboardSparklineBar } from '~/core/types/DashboardSparkline'
import type { ComputedRef, PropType, Ref } from 'vue'
import type { DashboardSparklineProps } from '~/core/types/DashboardSparkline'
import { computed, onBeforeUnmount, onMounted, ref, useId } from 'vue'
import { DashboardChartUtils } from '~/core/utils/DashboardChartUtils'

const props: DashboardSparklineProps = defineProps({
  values: {
    type: Array as PropType<number[]>,
    required: true,
  },
  variant: {
    type: String as PropType<'line' | 'bars'>,
    default: 'line',
  },
  color: {
    type: String,
    default: '#1f9d63',
  },
})

const HEIGHT: number = 44
const PAD: number = 12

const gradientId: string = `spark-${useId()}`
const container: Ref<HTMLDivElement | null> = ref(null)
const width: Ref<number> = ref(0)
let resizeObserver: ResizeObserver | null = null

const points: ComputedRef<Array<[number, number]>> = computed((): Array<[number, number]> => {
  const values: number[] = props.values
  const min: number = Math.min(...values)
  const span: number = Math.max(...values) - min || 1
  return values.map((value: number, index: number): [number, number] => [
    PAD + (index / Math.max(1, values.length - 1)) * (width.value - PAD * 2),
    HEIGHT - 6 - ((value - min) / span) * (HEIGHT - 14),
  ])
})

const linePath: ComputedRef<string> = computed((): string => DashboardChartUtils.smoothPath(points.value))

const areaPath: ComputedRef<string> = computed((): string => {
  const first: [number, number] | undefined = points.value[0]
  const last: [number, number] | undefined = points.value[points.value.length - 1]
  if (!first || !last) return ''
  return `${linePath.value} L ${last[0]} ${HEIGHT} L ${first[0]} ${HEIGHT} Z`
})

const lastPoint: ComputedRef<[number, number] | null> = computed(
  (): [number, number] | null => points.value[points.value.length - 1] ?? null,
)

const bars: ComputedRef<DashboardSparklineBar[]> = computed((): DashboardSparklineBar[] => {
  const values: number[] = props.values
  const max: number = Math.max(1, ...values)
  const slot: number = (width.value - PAD * 2) / Math.max(1, values.length)
  const barWidth: number = Math.max(2, Math.min(6, slot * 0.5))
  return values.flatMap((value: number, index: number): DashboardSparklineBar[] => {
    if (value <= 0) return []
    const height: number = 6 + (value / max) * (HEIGHT - 14)
    return [{ x: PAD + slot * index + slot / 2 - barWidth / 2, y: HEIGHT - 3 - height, width: barWidth, height }]
  })
})

onMounted((): void => {
  if (!container.value) return
  width.value = container.value.clientWidth
  resizeObserver = new ResizeObserver((): void => {
    width.value = container.value?.clientWidth ?? 0
  })
  resizeObserver.observe(container.value)
})

onBeforeUnmount((): void => {
  resizeObserver?.disconnect()
})
</script>
