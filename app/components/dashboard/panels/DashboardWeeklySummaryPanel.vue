<template>
  <div class="flex flex-col gap-5 @2xl/page:gap-7">
    <section class="flex flex-col gap-2">
      <p class="dash-label">{{ pointLabel }}</p>
      <h2
        class="max-w-[760px] text-[25px] leading-[1.18] font-medium tracking-[-0.02em] text-balance text-gray-100 @2xl/page:text-[32px] @2xl/page:leading-[1.15]"
      >
        {{ props.openedPoint.headline }}
      </h2>
    </section>

    <section class="grid grid-cols-2 gap-2.5 @2xl/page:gap-4 @4xl/page:grid-cols-4" aria-label="Les quatre canaux">
      <DashboardChannelSummaryCard
        v-for="channelComparison in props.channelComparisons"
        :key="channelComparison.channel.key"
        :channel-comparison="channelComparison"
      />
    </section>

    <div class="grid grid-cols-1 gap-4">
      <DashboardCard title="De point en point">
        <template #actions>
          <DashboardSelect
            id="weekly-points-history-metric"
            :model-value="historyMetricKey"
            :options="HISTORY_METRIC_OPTIONS"
            screen-reader-label="Chiffre suivi de point en point"
            @update:model-value="onSelectHistoryMetric"
          />
        </template>
        <DashboardPointBarChart :bars="historyBars" :description="historyDescription" />
      </DashboardCard>

      <DashboardCard title="Objectifs du prochain point" :description="targetsDescription">
        <ul
          v-if="targetProgresses.length > 0"
          class="grid grid-cols-1 gap-x-6 gap-y-4 px-4 pt-4 pb-5 sm:grid-cols-2 sm:px-5 @2xl/page:gap-y-5 @5xl/page:grid-cols-3"
        >
          <li v-for="(target, targetIndex) in targetProgresses" :key="targetIndex" class="flex items-center gap-3.5">
            <DashboardScoreRing
              v-if="target.percent !== null"
              :score="Math.min(100, target.percent)"
              :size="52"
              :stroke-width="6"
              :good-threshold="DASHBOARD_WEEKLY_GOAL_REACHED_PERCENT"
            />
            <span
              v-else
              class="grid h-[52px] w-[52px] shrink-0 place-items-center rounded-full bg-gray-600 text-gray-200"
            >
              <DashboardIcon name="target" :size="20" />
            </span>
            <div class="min-w-0">
              <p class="text-sm font-medium text-gray-100">{{ target.label }}</p>
              <p
                class="text-[13px] tabular-nums"
                :class="
                  target.percent !== null && target.percent < LOW_PROGRESS_PERCENT ? 'text-(--dash-red)' : 'text-muted'
                "
              >
                {{ target.progressLabel }}
              </p>
            </div>
          </li>
        </ul>
        <p v-else class="text-muted px-4 pt-3 pb-5 text-[13px] sm:px-5">Aucun objectif fixé lors de ce point.</p>
      </DashboardCard>
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { ComputedRef, PropType, Ref } from 'vue'
import type { DashboardSelectOption } from '~/core/types/Dashboard'
import type {
  DashboardWeeklyMetricKey,
  DashboardWeeklyPoint,
  DashboardWeeklyTarget,
} from '~/core/types/DashboardWeeklyPoint'
import type {
  DashboardWeeklyChannelComparison,
  DashboardWeeklyHistoryBar,
  DashboardWeeklyTargetProgress,
} from '~/core/types/DashboardWeeklyPointsPage'
import type { DashboardWeeklySummaryPanelProps } from '~/core/types/DashboardWeeklySummaryPanel'
import { computed, ref } from 'vue'
import DashboardChannelSummaryCard from '~/components/dashboard/cards/DashboardChannelSummaryCard.vue'
import DashboardPointBarChart from '~/components/dashboard/charts/DashboardPointBarChart.vue'
import DashboardCard from '~/components/dashboard/ui/DashboardCard.vue'
import DashboardIcon from '~/components/dashboard/ui/DashboardIcon.vue'
import DashboardScoreRing from '~/components/dashboard/ui/DashboardScoreRing.vue'
import DashboardSelect from '~/components/dashboard/ui/DashboardSelect.vue'
import {
  DASHBOARD_WEEKLY_GOAL_REACHED_PERCENT,
  DASHBOARD_WEEKLY_METRIC_KEYS,
  DASHBOARD_WEEKLY_METRICS,
} from '~/core/constants/dashboardWeeklyPoints'
import { WeeklyPointUtils } from '~/core/utils/WeeklyPointUtils'

/** Summary of a weekly point: its headline, the four channels, one figure across every point and the goals for the next one. */
const props: DashboardWeeklySummaryPanelProps = defineProps({
  sortedPoints: {
    type: Array as PropType<DashboardWeeklyPoint[]>,
    required: true,
  },
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

const LOW_PROGRESS_PERCENT: number = 50

const HISTORY_METRIC_OPTIONS: DashboardSelectOption[] = DASHBOARD_WEEKLY_METRIC_KEYS.map(
  (metricKey: DashboardWeeklyMetricKey): DashboardSelectOption => ({
    value: metricKey,
    label: DASHBOARD_WEEKLY_METRICS[metricKey].label,
  }),
)

const historyMetricKey: Ref<DashboardWeeklyMetricKey> = ref('googleImpressions')

const pointLabel: ComputedRef<string> = computed((): string =>
  [
    `Point ${props.openedPoint.id}`,
    WeeklyPointUtils.formatLongDay(props.openedPoint.date, false),
    props.comparedPoint ? `comparé au point ${props.comparedPoint.id}` : '',
  ]
    .filter((part: string): boolean => part.length > 0)
    .join(' · '),
)

const historyBars: ComputedRef<DashboardWeeklyHistoryBar[]> = computed((): DashboardWeeklyHistoryBar[] =>
  WeeklyPointUtils.buildMetricHistory(
    props.sortedPoints,
    historyMetricKey.value,
    props.openedPoint.id,
    props.comparedPoint?.id ?? null,
  ),
)

const historyDescription: ComputedRef<string> = computed((): string =>
  WeeklyPointUtils.describeMetricHistory(props.sortedPoints, historyMetricKey.value),
)

const targetProgresses: ComputedRef<DashboardWeeklyTargetProgress[]> = computed((): DashboardWeeklyTargetProgress[] =>
  props.openedPoint.nextTargets.map(
    (target: DashboardWeeklyTarget): DashboardWeeklyTargetProgress =>
      WeeklyPointUtils.buildTargetProgress(target, props.openedPoint),
  ),
)

const targetsDescription: ComputedRef<string> = computed((): string => {
  const nextPointDay: string = WeeklyPointUtils.findNextPointDay(props.sortedPoints, props.openedPoint)
  return nextPointDay ? `Où on en est avant le ${WeeklyPointUtils.formatLongDay(nextPointDay, false)}.` : ''
})

/**
 * Changes the figure drawn in the "De point en point" chart.
 *
 * @param {string} selectedValue - Value picked in the menu.
 * @returns {void}
 */
function onSelectHistoryMetric(selectedValue: string): void {
  const selectedMetricKey: DashboardWeeklyMetricKey | undefined = DASHBOARD_WEEKLY_METRIC_KEYS.find(
    (metricKey: DashboardWeeklyMetricKey): boolean => metricKey === selectedValue,
  )

  if (selectedMetricKey) {
    historyMetricKey.value = selectedMetricKey
  }
}
</script>
