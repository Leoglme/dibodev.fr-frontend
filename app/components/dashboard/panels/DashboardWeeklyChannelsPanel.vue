<template>
  <div class="flex flex-col gap-5 @2xl/page:gap-6">
    <div class="flex flex-wrap items-end gap-x-6 gap-y-3">
      <div class="flex-[1_1_320px]">
        <p class="dash-label">{{ pointLabel }}</p>
        <h2 class="mt-1.5 text-[22px] font-medium tracking-[-0.02em] text-gray-100 @2xl/page:text-2xl">
          D’où viennent les visiteurs
        </h2>
      </div>
      <p v-if="props.comparedPoint" class="flex flex-wrap items-center gap-x-4 gap-y-1 text-[13px] text-gray-200">
        <span class="inline-flex items-center gap-[7px]">
          <span class="h-[7px] w-[22px] rounded bg-(--dash-chart-empty)" aria-hidden="true" />
          Barre claire : {{ buildWeekLabel(props.comparedPoint) }}
        </span>
        <span class="inline-flex items-center gap-[7px]">
          <span class="bg-muted h-[7px] w-[22px] rounded" aria-hidden="true" />
          Barre foncée : {{ buildWeekLabel(props.openedPoint) }}
        </span>
      </p>
    </div>

    <div v-if="measuredChannelComparisons.length > 0" class="grid grid-cols-1 items-start gap-4 @5xl/page:grid-cols-2">
      <DashboardChannelMetricsCard
        v-for="channelComparison in measuredChannelComparisons"
        :key="channelComparison.channel.key"
        :channel-comparison="channelComparison"
      />
    </div>
    <DashboardEmptyState
      v-else
      icon="trending-up"
      title="Aucun chiffre relevé pour ce point"
      text="Les chiffres par canal apparaîtront ici dès qu’ils seront enregistrés."
    />
  </div>
</template>

<script lang="ts" setup>
import type { ComputedRef, PropType } from 'vue'
import type { DashboardWeeklyChannelsPanelProps } from '~/core/types/DashboardWeeklyChannelsPanel'
import type { DashboardWeeklyPoint } from '~/core/types/DashboardWeeklyPoint'
import type { DashboardWeeklyChannelComparison } from '~/core/types/DashboardWeeklyPointsPage'
import { computed } from 'vue'
import DashboardChannelMetricsCard from '~/components/dashboard/cards/DashboardChannelMetricsCard.vue'
import DashboardEmptyState from '~/components/dashboard/ui/DashboardEmptyState.vue'
import { WeeklyPointUtils } from '~/core/utils/WeeklyPointUtils'

/** Every figure of a weekly point, one card per acquisition channel. */
const props: DashboardWeeklyChannelsPanelProps = defineProps({
  openedPoint: {
    type: Object as PropType<DashboardWeeklyPoint>,
    required: true,
  },
  comparedPoint: {
    type: Object as PropType<DashboardWeeklyPoint | null>,
    default: null,
  },
  channelComparisons: {
    type: Array as PropType<DashboardWeeklyChannelComparison[]>,
    required: true,
  },
})

const pointLabel: ComputedRef<string> = computed((): string =>
  props.comparedPoint
    ? `Point ${props.openedPoint.id} comparé au point ${props.comparedPoint.id}`
    : `Point ${props.openedPoint.id}`,
)

const measuredChannelComparisons: ComputedRef<DashboardWeeklyChannelComparison[]> = computed(
  (): DashboardWeeklyChannelComparison[] =>
    props.channelComparisons.filter(
      (channelComparison: DashboardWeeklyChannelComparison): boolean => channelComparison.metrics.length > 0,
    ),
)

/**
 * Names a point with the week it measures ("S13, du 15 au 21 novembre").
 *
 * @param {DashboardWeeklyPoint} point - The point.
 * @returns {string} Its id, followed by its week when the dates are valid.
 */
function buildWeekLabel(point: DashboardWeeklyPoint): string {
  const weekRange: string = WeeklyPointUtils.formatWeekRange(point.weekStart, point.weekEnd)
  return weekRange ? `${point.id}, ${weekRange}` : point.id
}
</script>
