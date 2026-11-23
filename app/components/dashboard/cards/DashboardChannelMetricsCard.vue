<template>
  <DashboardCard>
    <div class="flex items-center gap-3 px-4 py-4 @2xl/page:px-[22px] @2xl/page:py-[18px]">
      <DashboardChannelLogo :channel="props.channelComparison.channel.key" size="lg" />
      <div class="min-w-0 flex-1">
        <h3 class="text-base font-medium text-gray-100">{{ props.channelComparison.channel.label }}</h3>
        <p class="text-muted mt-px text-[13px]">{{ props.channelComparison.channel.sourceLabel }}</p>
      </div>
    </div>
    <DashboardMetricComparisonRow
      v-for="comparison in props.channelComparison.metrics"
      :key="comparison.metricKey"
      :comparison="comparison"
      :color="props.channelComparison.channel.color"
      :tint-color="props.channelComparison.channel.tintColor"
    />
  </DashboardCard>
</template>

<script lang="ts" setup>
import type { PropType } from 'vue'
import type { DashboardChannelMetricsCardProps } from '~/core/types/DashboardChannelMetricsCard'
import type { DashboardWeeklyChannelComparison } from '~/core/types/DashboardWeeklyPointsPage'
import DashboardChannelLogo from '~/components/dashboard/logos/DashboardChannelLogo.vue'
import DashboardCard from '~/components/dashboard/ui/DashboardCard.vue'
import DashboardMetricComparisonRow from '~/components/dashboard/ui/DashboardMetricComparisonRow.vue'

/** Every figure of one acquisition channel, each compared between two points. */
const props: DashboardChannelMetricsCardProps = defineProps({
  channelComparison: {
    type: Object as PropType<DashboardWeeklyChannelComparison>,
    required: true,
  },
})
</script>
