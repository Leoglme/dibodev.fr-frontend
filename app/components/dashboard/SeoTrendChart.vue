<template>
  <div class="relative w-full">
    <div v-if="points.length === 0" class="py-12 text-center text-sm text-gray-400">Pas de données sur la période.</div>
    <template v-else>
      <div class="mb-3 flex flex-wrap items-center gap-4 text-xs">
        <span class="inline-flex items-center gap-1.5 text-gray-200">
          <span class="inline-block h-2.5 w-2.5 rounded-full" style="background-color: #8472f3" />
          Clics
        </span>
        <span class="inline-flex items-center gap-1.5 text-gray-200">
          <span class="inline-block h-2.5 w-2.5 rounded-full" style="background-color: #94a3b8" />
          Impressions
        </span>
      </div>

      <svg
        ref="svgRef"
        :viewBox="`0 0 ${WIDTH} ${HEIGHT}`"
        class="w-full"
        :style="{ height: 'auto' }"
        preserveAspectRatio="none"
        @mousemove="onMove"
        @mouseleave="hoveredIndex = null"
      >
        <line
          v-for="tick in yTicks"
          :key="`grid-${tick.y}`"
          :x1="PADDING_LEFT"
          :x2="WIDTH - PADDING_RIGHT"
          :y1="tick.y"
          :y2="tick.y"
          stroke="#374151"
          stroke-width="1"
          stroke-dasharray="2 4"
        />
        <path :d="impressionsAreaPath" fill="rgba(148,163,184,0.14)" stroke="none" />
        <path :d="impressionsLinePath" fill="none" stroke="#94a3b8" stroke-width="1.5" />
        <path :d="clicksLinePath" fill="none" stroke="#8472f3" stroke-width="2.5" />
        <template v-if="hoveredIndex !== null">
          <line
            :x1="pointX(hoveredIndex)"
            :x2="pointX(hoveredIndex)"
            :y1="PADDING_TOP"
            :y2="HEIGHT - PADDING_BOTTOM"
            stroke="#8472f3"
            stroke-width="1"
            stroke-dasharray="3 3"
          />
          <circle :cx="pointX(hoveredIndex)" :cy="clicksY(points[hoveredIndex].clicks)" r="4" fill="#8472f3" />
          <circle
            :cx="pointX(hoveredIndex)"
            :cy="impressionsY(points[hoveredIndex].impressions)"
            r="3.5"
            fill="#94a3b8"
          />
        </template>
      </svg>

      <div class="mt-1 flex justify-between text-[11px] text-gray-400">
        <span>{{ formatDayLabel(points[0].date) }}</span>
        <span>{{ formatDayLabel(points[points.length - 1].date) }}</span>
      </div>

      <div
        v-if="hoveredIndex !== null"
        class="pointer-events-none absolute top-8 z-10 -translate-x-1/2 rounded-lg border border-gray-600 bg-gray-900 px-3 py-2 text-xs shadow-xl"
        :style="{ left: `${tooltipLeftPercent}%` }"
      >
        <p class="mb-1 font-medium text-gray-100">{{ formatFullDayLabel(points[hoveredIndex].date) }}</p>
        <p class="text-gray-200"><span style="color: #8472f3">●</span> {{ points[hoveredIndex].clicks }} clics</p>
        <p class="text-gray-200">
          <span style="color: #94a3b8">●</span> {{ points[hoveredIndex].impressions }} impressions
        </p>
      </div>
    </template>
  </div>
</template>

<script lang="ts" setup>
import { ref, computed } from 'vue'
import type { ComputedRef, PropType, Ref } from 'vue'
import type { SearchPerformanceTrendPoint } from '~~/server/types/dashboard/searchPerformance'

const props = defineProps({
  points: {
    type: Array as PropType<SearchPerformanceTrendPoint[]>,
    default: (): SearchPerformanceTrendPoint[] => [],
  },
})

const WIDTH: number = 800
const HEIGHT: number = 240
const PADDING_LEFT: number = 8
const PADDING_RIGHT: number = 8
const PADDING_TOP: number = 12
const PADDING_BOTTOM: number = 12

const svgRef: Ref<SVGSVGElement | null> = ref(null)
const hoveredIndex: Ref<number | null> = ref(null)

/** Highest clicks value on the period, at least 1 to avoid dividing by zero. */
const maxClicks: ComputedRef<number> = computed((): number =>
  Math.max(1, ...props.points.map((point: SearchPerformanceTrendPoint): number => point.clicks)),
)

/** Highest impressions value on the period, at least 1 to avoid dividing by zero. */
const maxImpressions: ComputedRef<number> = computed((): number =>
  Math.max(1, ...props.points.map((point: SearchPerformanceTrendPoint): number => point.impressions)),
)

/**
 * X coordinate (viewBox units) of the point at the given index.
 *
 * @param {number} index - The point index.
 * @returns {number} The X coordinate.
 */
function pointX(index: number): number {
  const count: number = props.points.length
  const plotWidth: number = WIDTH - PADDING_LEFT - PADDING_RIGHT
  if (count <= 1) return PADDING_LEFT + plotWidth / 2
  return PADDING_LEFT + (index / (count - 1)) * plotWidth
}

/**
 * Y coordinate (viewBox units) for a clicks value.
 *
 * @param {number} value - The clicks value.
 * @returns {number} The Y coordinate.
 */
function clicksY(value: number): number {
  const plotHeight: number = HEIGHT - PADDING_TOP - PADDING_BOTTOM
  return HEIGHT - PADDING_BOTTOM - (value / maxClicks.value) * plotHeight
}

/**
 * Y coordinate (viewBox units) for an impressions value.
 *
 * @param {number} value - The impressions value.
 * @returns {number} The Y coordinate.
 */
function impressionsY(value: number): number {
  const plotHeight: number = HEIGHT - PADDING_TOP - PADDING_BOTTOM
  return HEIGHT - PADDING_BOTTOM - (value / maxImpressions.value) * plotHeight
}

/**
 * Builds an SVG path from the points using the given Y mapping.
 *
 * @param {(value: number) => number} valueAt - Maps a point to its metric value.
 * @param {(value: number) => number} yFor - Maps a metric value to a Y coordinate.
 * @returns {string} The SVG path `d` attribute.
 */
function linePath(valueAt: (point: SearchPerformanceTrendPoint) => number, yFor: (value: number) => number): string {
  return props.points
    .map(
      (point: SearchPerformanceTrendPoint, index: number): string =>
        `${index === 0 ? 'M' : 'L'} ${pointX(index).toFixed(1)} ${yFor(valueAt(point)).toFixed(1)}`,
    )
    .join(' ')
}

const clicksLinePath: ComputedRef<string> = computed((): string =>
  linePath((point: SearchPerformanceTrendPoint): number => point.clicks, clicksY),
)

const impressionsLinePath: ComputedRef<string> = computed((): string =>
  linePath((point: SearchPerformanceTrendPoint): number => point.impressions, impressionsY),
)

const impressionsAreaPath: ComputedRef<string> = computed((): string => {
  if (props.points.length === 0) return ''
  const bottom: number = HEIGHT - PADDING_BOTTOM
  const lastX: number = pointX(props.points.length - 1)
  const firstX: number = pointX(0)
  return `${impressionsLinePath.value} L ${lastX.toFixed(1)} ${bottom} L ${firstX.toFixed(1)} ${bottom} Z`
})

/** Four evenly spaced horizontal gridlines across the plot area. */
const yTicks: ComputedRef<{ y: number }[]> = computed((): { y: number }[] => {
  const plotHeight: number = HEIGHT - PADDING_TOP - PADDING_BOTTOM
  return [0, 0.25, 0.5, 0.75, 1].map((ratio: number): { y: number } => ({
    y: PADDING_TOP + ratio * plotHeight,
  }))
})

/** Horizontal position (percent of chart width) of the hovered point, for the tooltip. */
const tooltipLeftPercent: ComputedRef<number> = computed((): number => {
  if (hoveredIndex.value === null) return 50
  return (pointX(hoveredIndex.value) / WIDTH) * 100
})

/**
 * Updates the hovered point index from a mouse position over the chart.
 *
 * @param {MouseEvent} event - The mousemove event.
 * @returns {void}
 */
function onMove(event: MouseEvent): void {
  const svg: SVGSVGElement | null = svgRef.value
  const count: number = props.points.length
  if (!svg || count === 0) return
  const rect: DOMRect = svg.getBoundingClientRect()
  const ratio: number = (event.clientX - rect.left) / rect.width
  const plotStart: number = PADDING_LEFT / WIDTH
  const plotSpan: number = (WIDTH - PADDING_LEFT - PADDING_RIGHT) / WIDTH
  const local: number = (ratio - plotStart) / plotSpan
  const index: number = Math.round(local * (count - 1))
  hoveredIndex.value = Math.min(count - 1, Math.max(0, index))
}

/**
 * Formats an ISO date as a short day/month label (e.g. "3 août").
 *
 * @param {string} isoDate - The YYYY-MM-DD date.
 * @returns {string} The short label.
 */
function formatDayLabel(isoDate: string): string {
  try {
    return new Date(isoDate).toLocaleDateString('fr-FR', { day: 'numeric', month: 'short' })
  } catch {
    return isoDate
  }
}

/**
 * Formats an ISO date as a full weekday label for the tooltip.
 *
 * @param {string} isoDate - The YYYY-MM-DD date.
 * @returns {string} The full label.
 */
function formatFullDayLabel(isoDate: string): string {
  try {
    return new Date(isoDate).toLocaleDateString('fr-FR', { weekday: 'short', day: 'numeric', month: 'long' })
  } catch {
    return isoDate
  }
}
</script>
