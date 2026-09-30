<template>
  <div ref="container" class="relative w-full select-none" @mouseleave="activeIndex = null">
    <svg
      v-if="width > 0 && props.points.length > 0"
      class="dash-chart block"
      :width="width"
      :height="totalHeight"
      :viewBox="`0 0 ${width} ${totalHeight}`"
      role="img"
      :aria-label="chartScreenReaderSummary"
    >
      <defs>
        <linearGradient :id="gradientId" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" :stop-color="LINE_COLOR" stop-opacity="0.2" />
          <stop offset="100%" :stop-color="LINE_COLOR" stop-opacity="0" />
        </linearGradient>
      </defs>

      <g v-for="tick in yTicks" :key="tick.value">
        <line
          :x1="MARGIN_LEFT"
          :x2="width - MARGIN_RIGHT"
          :y1="tick.y"
          :y2="tick.y"
          :stroke="tick.value === 0 ? 'rgba(20,20,20,0.14)' : 'rgba(20,20,20,0.07)'"
          :stroke-dasharray="tick.value === 0 ? undefined : '3 4'"
        />
        <text :x="MARGIN_LEFT - 10" :y="tick.y + 4" text-anchor="end">{{ tick.label }}</text>
      </g>

      <line
        v-for="marker in placedMarkers"
        :key="marker.date"
        :x1="marker.x"
        :x2="marker.x"
        :y1="MARGIN_TOP - 4"
        :y2="mainBottom"
        stroke="#141414"
        stroke-opacity="0.35"
        stroke-dasharray="2 3"
      />
      <g v-for="pill in markerPills" :key="pill.key" :transform="`translate(${pill.pillX}, ${MARGIN_TOP - 26})`">
        <rect :width="pill.pillWidth" height="18" rx="9" fill="#141414" />
        <text :x="pill.pillWidth / 2" y="12.5" text-anchor="middle" class="!fill-white text-[10.5px] font-medium">
          {{ pill.label }}
        </text>
      </g>

      <path :d="areaPath" :fill="`url(#${gradientId})`" />
      <path
        ref="linePath"
        class="dash-draw-line"
        :d="impressionsPath"
        fill="none"
        :stroke="LINE_COLOR"
        stroke-width="2"
        stroke-linejoin="round"
        stroke-linecap="round"
        :style="{ '--dash-line-length': lineLength }"
      />

      <text :x="MARGIN_LEFT - 10" :y="stripTop + STRIP_HEIGHT / 2 + 4" text-anchor="end">Clics</text>
      <line
        :x1="MARGIN_LEFT"
        :x2="width - MARGIN_RIGHT"
        :y1="stripBottom"
        :y2="stripBottom"
        stroke="rgba(20,20,20,0.14)"
      />
      <g v-for="bar in clickBars" :key="bar.index">
        <rect :x="bar.x" :y="bar.y" :width="bar.width" :height="bar.height" rx="1.5" fill="#141414" />
        <text
          v-if="showBarValues"
          :x="bar.x + bar.width / 2"
          :y="bar.y - 4"
          text-anchor="middle"
          class="!fill-gray-100"
        >
          {{ bar.value }}
        </text>
      </g>

      <text v-for="label in xLabels" :key="label.index" :x="label.x" :y="totalHeight - 6" :text-anchor="label.anchor">
        {{ label.text }}
      </text>

      <g v-if="active">
        <line :x1="active.x" :x2="active.x" :y1="MARGIN_TOP" :y2="stripBottom" stroke="#141414" stroke-opacity="0.22" />
        <circle :cx="active.x" :cy="active.y" r="4.5" fill="#fff" :stroke="LINE_COLOR" stroke-width="2" />
      </g>

      <rect
        :x="MARGIN_LEFT - step / 2"
        :y="MARGIN_TOP"
        :width="plotWidth + step"
        :height="stripBottom - MARGIN_TOP"
        fill="transparent"
        @mousemove="onPointerMove($event.clientX)"
        @touchstart.passive="onTouch"
        @touchmove.passive="onTouch"
      />
    </svg>

    <div
      v-if="active"
      class="pointer-events-none absolute top-6 z-10 min-w-[172px] rounded-lg bg-white px-3 py-2.5 text-[13px] shadow-(--dash-shadow-pop)"
      :style="{ left: `${tooltipLeft}px` }"
      role="status"
    >
      <p class="dash-label mb-2">{{ active.title }}</p>
      <p class="flex items-center justify-between gap-3">
        <span class="inline-flex items-center gap-2 text-gray-200">
          <span class="h-[3px] w-3.5 rounded-full" :style="{ background: LINE_COLOR }" />Impressions
        </span>
        <b class="font-medium tabular-nums">{{ DashboardFormatUtils.formatNumber(active.impressions) }}</b>
      </p>
      <p class="mt-1 flex items-center justify-between gap-3">
        <span class="inline-flex items-center gap-2 text-gray-200">
          <span class="h-2.5 w-2 rounded-sm bg-gray-100" />Clics
        </span>
        <b class="font-medium tabular-nums">{{ active.clicks }}</b>
      </p>
      <p class="mt-1 flex items-center justify-between gap-3">
        <span class="text-gray-200">Taux de clic</span>
        <b class="font-medium tabular-nums">{{ active.ctr }} %</b>
      </p>
      <p v-if="active.note" class="mt-2 border-t border-(--dash-line-soft) pt-2 text-[12.5px] text-gray-200">
        {{ active.note }}
      </p>
    </div>
  </div>
</template>

<script lang="ts" setup>
import type {
  DashboardTrendChartActivePoint,
  DashboardTrendChartAxisLabel,
  DashboardTrendChartAxisTick,
  DashboardTrendChartClickBar,
  DashboardTrendChartMarkerPill,
  DashboardTrendChartPlacedMarker,
} from '~/core/types/DashboardTrendChart'
import type { ComputedRef, PropType, Ref } from 'vue'
import type { DashboardChartMarker, DashboardTrendChartProps } from '~/core/types/DashboardTrendChart'
import type { SearchPerformanceTrendPoint } from '~~/server/types/dashboard/searchPerformance'
import { computed, nextTick, onBeforeUnmount, onMounted, ref, useId, watch } from 'vue'
import { DashboardChartUtils } from '~/core/utils/DashboardChartUtils'
import { DashboardFormatUtils } from '~/core/utils/DashboardFormatUtils'

const props: DashboardTrendChartProps = defineProps({
  points: {
    type: Array as PropType<SearchPerformanceTrendPoint[]>,
    required: true,
  },
  weekly: {
    type: Boolean,
    default: false,
  },
  markers: {
    type: Array as PropType<DashboardChartMarker[]>,
    default: (): DashboardChartMarker[] => [],
  },
})

const LINE_COLOR: string = '#1f9d63'
const MARGIN_LEFT: number = 46
const MARGIN_RIGHT: number = 12
const MARGIN_TOP: number = 30
const STRIP_HEIGHT: number = 40
const PILL_GAP: number = 6
const STRIP_GAP: number = 18
const X_LABEL_SPACE: number = 24

const gradientId: string = `trend-${useId()}`
const container: Ref<HTMLDivElement | null> = ref(null)
const linePath: Ref<SVGPathElement | null> = ref(null)
const width: Ref<number> = ref(0)
const lineLength: Ref<string> = ref('2000')
const activeIndex: Ref<number | null> = ref(null)
let resizeObserver: ResizeObserver | null = null

const mainHeight: ComputedRef<number> = computed((): number => (width.value < 520 ? 170 : 220))
const mainBottom: ComputedRef<number> = computed((): number => MARGIN_TOP + mainHeight.value)
const stripTop: ComputedRef<number> = computed((): number => mainBottom.value + STRIP_GAP)
const stripBottom: ComputedRef<number> = computed((): number => stripTop.value + STRIP_HEIGHT)
const totalHeight: ComputedRef<number> = computed((): number => stripBottom.value + X_LABEL_SPACE)
const plotWidth: ComputedRef<number> = computed((): number => Math.max(1, width.value - MARGIN_LEFT - MARGIN_RIGHT))
const step: ComputedRef<number> = computed((): number => plotWidth.value / Math.max(1, props.points.length - 1))

const yMax: ComputedRef<number> = computed((): number =>
  DashboardChartUtils.niceMax(
    Math.max(1, ...props.points.map((point: SearchPerformanceTrendPoint): number => point.impressions)) * 1.08,
  ),
)
const clickMax: ComputedRef<number> = computed((): number =>
  Math.max(2, ...props.points.map((point: SearchPerformanceTrendPoint): number => point.clicks)),
)

const yTicks: ComputedRef<DashboardTrendChartAxisTick[]> = computed((): DashboardTrendChartAxisTick[] =>
  [0, 0.25, 0.5, 0.75, 1].map(
    (ratio: number): DashboardTrendChartAxisTick => ({
      value: ratio * yMax.value,
      y: yFor(ratio * yMax.value),
      label: DashboardFormatUtils.formatNumber(ratio * yMax.value),
    }),
  ),
)

const pixelPoints: ComputedRef<Array<[number, number]>> = computed(
  (): Array<[number, number]> =>
    props.points.map((point: SearchPerformanceTrendPoint, index: number): [number, number] => [
      xFor(index),
      yFor(point.impressions),
    ]),
)

const impressionsPath: ComputedRef<string> = computed((): string => DashboardChartUtils.smoothPath(pixelPoints.value))

const areaPath: ComputedRef<string> = computed((): string => {
  if (pixelPoints.value.length < 2) return ''
  return `${impressionsPath.value} L ${xFor(props.points.length - 1)} ${mainBottom.value} L ${xFor(0)} ${mainBottom.value} Z`
})

const clickBars: ComputedRef<DashboardTrendChartClickBar[]> = computed((): DashboardTrendChartClickBar[] => {
  const barWidth: number = Math.max(3, Math.min(8, step.value * 0.4))
  return props.points.flatMap((point: SearchPerformanceTrendPoint, index: number): DashboardTrendChartClickBar[] => {
    if (point.clicks <= 0) return []
    const height: number = Math.max(4, (point.clicks / clickMax.value) * (STRIP_HEIGHT - 12))
    return [
      {
        index,
        x: xFor(index) - barWidth / 2,
        y: stripBottom.value - height,
        width: barWidth,
        height,
        value: point.clicks,
      },
    ]
  })
})

const showBarValues: ComputedRef<boolean> = computed((): boolean => clickBars.value.length <= 30 && step.value >= 12)

const xLabels: ComputedRef<DashboardTrendChartAxisLabel[]> = computed((): DashboardTrendChartAxisLabel[] => {
  const count: number = props.points.length
  if (count === 0) return []
  const maxLabels: number = Math.max(2, Math.floor(plotWidth.value / 84))
  const every: number = Math.max(1, Math.ceil(count / maxLabels))
  const labels: DashboardTrendChartAxisLabel[] = []
  for (let index: number = 0; index < count; index += every) {
    labels.push({
      index,
      x: xFor(index),
      text: shortDate(props.points[index]!.date),
      anchor: index === 0 ? 'start' : 'middle',
    })
  }
  const lastIndex: number = count - 1
  const lastLabel: DashboardTrendChartAxisLabel | undefined = labels[labels.length - 1]
  if (lastLabel && lastLabel.index !== lastIndex) {
    if (xFor(lastIndex) - lastLabel.x < 60) labels.pop()
    labels.push({ index: lastIndex, x: xFor(lastIndex), text: shortDate(props.points[lastIndex]!.date), anchor: 'end' })
  } else if (lastLabel && labels.length > 1) {
    lastLabel.anchor = 'end'
  }
  return labels
})

const placedMarkers: ComputedRef<DashboardTrendChartPlacedMarker[]> = computed((): DashboardTrendChartPlacedMarker[] =>
  props.markers
    .flatMap((marker: DashboardChartMarker): DashboardTrendChartPlacedMarker[] => {
      const index: number = markerIndex(marker.date)
      return index < 0 ? [] : [{ ...marker, x: xFor(index) }]
    })
    .sort((a: DashboardTrendChartPlacedMarker, b: DashboardTrendChartPlacedMarker): number => a.x - b.x),
)

const markerPills: ComputedRef<DashboardTrendChartMarkerPill[]> = computed((): DashboardTrendChartMarkerPill[] =>
  placedMarkers.value.reduce(
    (
      pills: DashboardTrendChartMarkerPill[],
      marker: DashboardTrendChartPlacedMarker,
    ): DashboardTrendChartMarkerPill[] => {
      const previous: DashboardTrendChartMarkerPill | undefined = pills[pills.length - 1]
      const alone: DashboardTrendChartMarkerPill = buildMarkerPill(marker.date, [marker.x], marker.count)
      if (previous && alone.pillX < previous.pillX + previous.pillWidth + PILL_GAP) {
        pills[pills.length - 1] = buildMarkerPill(
          previous.key,
          [...previous.lineXs, marker.x],
          previous.count + marker.count,
        )
      } else {
        pills.push(alone)
      }
      return pills
    },
    [],
  ),
)

const active: ComputedRef<DashboardTrendChartActivePoint | null> = computed(
  (): DashboardTrendChartActivePoint | null => {
    if (activeIndex.value === null) return null
    const point: SearchPerformanceTrendPoint | undefined = props.points[activeIndex.value]
    if (!point) return null
    const marker: DashboardTrendChartPlacedMarker | undefined = placedMarkers.value.find(
      (item: DashboardTrendChartPlacedMarker): boolean => markerIndex(item.date) === activeIndex.value,
    )
    return {
      x: xFor(activeIndex.value),
      y: yFor(point.impressions),
      title: props.weekly ? `Semaine du ${shortDate(point.date)}` : longDay(point.date),
      impressions: point.impressions,
      clicks: point.clicks,
      ctr: point.impressions > 0 ? DashboardFormatUtils.formatPercent(point.clicks / point.impressions, 1) : '0',
      note: marker?.note ?? '',
    }
  },
)

const tooltipLeft: ComputedRef<number> = computed((): number => {
  if (!active.value) return 0
  const tooltipWidth: number = 184
  const right: number = active.value.x + 16
  return right + tooltipWidth > width.value ? Math.max(0, active.value.x - tooltipWidth - 16) : right
})

const chartScreenReaderSummary: ComputedRef<string> = computed((): string => {
  const total: number = props.points.reduce(
    (sum: number, point: SearchPerformanceTrendPoint): number => sum + point.impressions,
    0,
  )
  const clicks: number = props.points.reduce(
    (sum: number, point: SearchPerformanceTrendPoint): number => sum + point.clicks,
    0,
  )
  return `Impressions et clics : ${DashboardFormatUtils.formatNumber(total)} impressions et ${clicks} clics sur la période.`
})

/**
 * X position of a point.
 *
 * @param {number} index - Point index.
 * @returns {number} The x coordinate.
 */
function xFor(index: number): number {
  return props.points.length <= 1 ? MARGIN_LEFT + plotWidth.value / 2 : MARGIN_LEFT + index * step.value
}

/**
 * Y position of an impressions value.
 *
 * @param {number} value - Impressions.
 * @returns {number} The y coordinate.
 */
function yFor(value: number): number {
  return mainBottom.value - (value / yMax.value) * mainHeight.value
}

/**
 * Pill centred above one or several marker lines, kept inside the plot.
 *
 * @param {string} key - Stable key (date of the first marker).
 * @param {number[]} lineXs - X positions of the marker lines under the pill.
 * @param {number} count - Articles behind the pill.
 * @returns {DashboardTrendChartMarkerPill} The pill.
 */
function buildMarkerPill(key: string, lineXs: number[], count: number): DashboardTrendChartMarkerPill {
  const label: string = DashboardFormatUtils.plural(count, 'article')
  const pillWidth: number = label.length * 6.2 + 18
  const centerX: number = (Math.min(...lineXs) + Math.max(...lineXs)) / 2
  const pillX: number = Math.min(Math.max(MARGIN_LEFT, centerX - pillWidth / 2), width.value - MARGIN_RIGHT - pillWidth)
  return { key, lineXs, count, label, pillX, pillWidth }
}

/**
 * Index of the point matching a marker date (weekly points cover seven days).
 *
 * @param {string} date - Marker date (YYYY-MM-DD).
 * @returns {number} The point index, -1 when outside the period.
 */
function markerIndex(date: string): number {
  if (!props.weekly) {
    return props.points.findIndex((point: SearchPerformanceTrendPoint): boolean => point.date === date)
  }
  const target: number = new Date(date).getTime()
  return props.points.findIndex((point: SearchPerformanceTrendPoint): boolean => {
    const start: number = new Date(point.date).getTime()
    return target >= start && target < start + 7 * 86_400_000
  })
}

/**
 * « 3 sept. » style label.
 *
 * @param {string} date - A YYYY-MM-DD date.
 * @returns {string} The short label.
 */
function shortDate(date: string): string {
  return new Date(`${date}T12:00:00`).toLocaleDateString('fr-FR', { day: 'numeric', month: 'short' })
}

/**
 * « jeu. 10 sept. » style label.
 *
 * @param {string} date - A YYYY-MM-DD date.
 * @returns {string} The long label.
 */
function longDay(date: string): string {
  return new Date(`${date}T12:00:00`).toLocaleDateString('fr-FR', { weekday: 'short', day: 'numeric', month: 'short' })
}

/**
 * Selects the point closest to the pointer.
 *
 * @param {number} clientX - Pointer x in the viewport.
 * @returns {void}
 */
function onPointerMove(clientX: number): void {
  const rect: DOMRect | undefined = container.value?.getBoundingClientRect()
  if (!rect || props.points.length === 0) return
  const index: number = Math.round((clientX - rect.left - MARGIN_LEFT) / step.value)
  activeIndex.value = Math.max(0, Math.min(props.points.length - 1, index))
}

/**
 * Touch support (iPhone / iPad): the finger position selects the day.
 *
 * @param {TouchEvent} event - The touch event.
 * @returns {void}
 */
function onTouch(event: TouchEvent): void {
  const touch: Touch | undefined = event.touches[0]
  if (touch) onPointerMove(touch.clientX)
}

/**
 * Measures the drawn line so its entrance animation draws exactly its length.
 *
 * @returns {Promise<void>}
 */
async function measureLine(): Promise<void> {
  await nextTick()
  if (linePath.value) lineLength.value = `${Math.ceil(linePath.value.getTotalLength())}`
}

watch(
  (): SearchPerformanceTrendPoint[] => props.points,
  (): void => {
    activeIndex.value = null
    measureLine().catch((): void => undefined)
  },
)

onMounted((): void => {
  if (!container.value) return
  width.value = container.value.clientWidth
  measureLine().catch((): void => undefined)
  resizeObserver = new ResizeObserver((): void => {
    width.value = container.value?.clientWidth ?? 0
  })
  resizeObserver.observe(container.value)
})

onBeforeUnmount((): void => {
  resizeObserver?.disconnect()
})
</script>
