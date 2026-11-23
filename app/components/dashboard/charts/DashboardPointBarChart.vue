<template>
  <div ref="scrollContainer" class="dash-scroll-x relative">
    <div
      class="flex h-[210px] items-stretch gap-2.5 px-4 pt-4 pb-4 @2xl/page:h-[270px] @2xl/page:gap-3.5 @2xl/page:px-[26px] @2xl/page:pt-6 @2xl/page:pb-5"
      role="img"
      :aria-label="props.description"
    >
      <div
        v-for="bar in props.bars"
        :key="bar.pointId"
        class="flex min-w-10 flex-1 flex-col items-center gap-1.5 @2xl/page:gap-2"
        :data-opened-point="bar.isOpenedPoint ? 'true' : undefined"
      >
        <span class="flex min-h-0 w-full flex-1 flex-col items-center justify-end gap-1.5 @2xl/page:gap-2">
          <template v-if="bar.value !== null">
            <span class="text-[12.5px] font-medium whitespace-nowrap text-gray-100 tabular-nums @2xl/page:text-[13px]">
              {{ bar.valueLabel }}
            </span>
            <span
              class="w-full max-w-[34px] rounded-t-md rounded-b-[1px] @2xl/page:max-w-[52px] @2xl/page:rounded-t-lg @2xl/page:rounded-b-[2px]"
              :class="{
                'bg-(--dash-chart-good)': bar.isOpenedPoint,
                'bg-(--dash-chart-good)/30': !bar.isOpenedPoint,
                'outline-[1.5px] -outline-offset-[1.5px] outline-(--dash-chart-good) outline-dashed':
                  bar.isComparedPoint,
              }"
              :style="{ height: `${bar.heightPercent}%` }"
            />
          </template>
          <span v-else class="h-1.5 w-full max-w-[34px] rounded-[3px] bg-(--dash-ink-tint) @2xl/page:max-w-[52px]" />
        </span>
        <span
          class="text-xs whitespace-nowrap @2xl/page:text-[12.5px]"
          :class="bar.isOpenedPoint || bar.isComparedPoint ? 'font-medium text-gray-100' : 'text-muted'"
        >
          {{ bar.pointId }}
        </span>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { PropType, Ref } from 'vue'
import type { DashboardPointBarChartProps } from '~/core/types/DashboardPointBarChart'
import type { DashboardWeeklyHistoryBar } from '~/core/types/DashboardWeeklyPointsPage'
import { nextTick, onMounted, ref, watch } from 'vue'

/** One bar per point for a single figure: the opened point in full green, the compared one outlined, a grey dash when there is no value. */
const props: DashboardPointBarChartProps = defineProps({
  bars: {
    type: Array as PropType<DashboardWeeklyHistoryBar[]>,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
})

const scrollContainer: Ref<HTMLDivElement | null> = ref(null)

/**
 * Centres the bar of the opened point when the chart is wider than its card.
 *
 * @returns {Promise<void>}
 */
async function scrollToOpenedPoint(): Promise<void> {
  await nextTick()
  const container: HTMLDivElement | null = scrollContainer.value
  const openedColumn: HTMLElement | null = container?.querySelector<HTMLElement>('[data-opened-point]') ?? null

  if (!container || !openedColumn) {
    return
  }
  container.scrollLeft = openedColumn.offsetLeft - (container.clientWidth - openedColumn.offsetWidth) / 2
}

watch(
  (): DashboardWeeklyHistoryBar[] => props.bars,
  (): void => {
    scrollToOpenedPoint().catch((): void => undefined)
  },
)

onMounted((): void => {
  scrollToOpenedPoint().catch((): void => undefined)
})
</script>
