<template>
  <div
    class="flex flex-wrap items-center gap-x-3 gap-y-2 border-t border-(--dash-line-soft) px-4 py-3.5 @2xl/page:gap-x-4 @2xl/page:px-[22px] @2xl/page:py-4"
  >
    <p class="min-w-0 flex-[1_1_150px] text-sm text-gray-100">
      {{ props.comparison.channelLabel }}
      <DashboardRecalculatedMention
        v-if="props.comparison.rebuiltNote"
        :note="props.comparison.rebuiltNote"
        class="ml-1"
      />
      <span v-if="props.comparison.hint" class="text-muted block text-[12.5px]">{{ props.comparison.hint }}</span>
    </p>
    <DashboardComparisonBars
      :current-value="props.comparison.currentValue"
      :previous-value="props.comparison.previousValue"
      :color="props.color"
      :tint-color="props.tintColor"
    />
    <p class="ml-auto inline-flex items-baseline justify-end gap-1.5 tabular-nums @2xl/page:min-w-[132px]">
      <template v-if="props.comparison.previousLabel !== null">
        <span class="sr-only">Avant :</span>
        <span class="text-muted text-[13px]">{{ props.comparison.previousLabel }}</span>
        <DashboardIcon name="arrow-right" :size="13" class="text-muted self-center" />
        <span class="sr-only">maintenant :</span>
      </template>
      <span class="text-[19px] font-medium tracking-[-0.01em] text-gray-100">{{ props.comparison.currentLabel }}</span>
    </p>
    <span v-if="props.comparison.previousLabel !== null" class="flex shrink-0 justify-end @2xl/page:min-w-[84px]">
      <DashboardDeltaBadge :delta="props.comparison.delta" :empty-label="WeeklyPointUtils.NO_COMPARISON_LABEL" />
    </span>
  </div>
</template>

<script lang="ts" setup>
import type { PropType } from 'vue'
import type { DashboardMetricComparisonRowProps } from '~/core/types/DashboardMetricComparisonRow'
import type { DashboardWeeklyMetricComparison } from '~/core/types/DashboardWeeklyPointsPage'
import DashboardComparisonBars from '~/components/dashboard/charts/DashboardComparisonBars.vue'
import DashboardDeltaBadge from '~/components/dashboard/ui/DashboardDeltaBadge.vue'
import DashboardIcon from '~/components/dashboard/ui/DashboardIcon.vue'
import DashboardRecalculatedMention from '~/components/dashboard/ui/DashboardRecalculatedMention.vue'
import { WeeklyPointUtils } from '~/core/utils/WeeklyPointUtils'

/** One figure on a line: its name, two bars, the value before and now, and the evolution. */
const props: DashboardMetricComparisonRowProps = defineProps({
  comparison: {
    type: Object as PropType<DashboardWeeklyMetricComparison>,
    required: true,
  },
  color: {
    type: String,
    required: true,
  },
  tintColor: {
    type: String,
    required: true,
  },
})
</script>
