<template>
  <article
    class="flex min-w-0 flex-col gap-3 rounded-xl border border-gray-300 bg-white p-3.5 @2xl/page:gap-[18px] @2xl/page:p-5"
  >
    <div class="flex flex-wrap items-center gap-x-2.5 gap-y-1.5">
      <DashboardChannelLogo :channel="props.channelComparison.channel.key" />
      <h3 class="text-sm font-medium text-gray-100 @2xl/page:text-[15px]">
        {{ props.channelComparison.channel.label }}
      </h3>
    </div>
    <div class="flex items-end gap-2 @2xl/page:gap-3">
      <div class="flex min-w-0 flex-1 flex-col gap-1.5">
        <p
          class="text-[30px] leading-none font-medium tracking-[-0.025em] text-gray-100 tabular-nums @2xl/page:text-[38px]"
        >
          {{ props.channelComparison.headline.currentLabel }}
        </p>
        <p class="text-muted text-[12.5px] @2xl/page:text-[13px]">{{ props.channelComparison.headlineCaption }}</p>
      </div>
      <DashboardComparisonBars
        orientation="vertical"
        :current-value="props.channelComparison.headline.currentValue"
        :previous-value="props.channelComparison.headline.previousValue"
        :color="props.channelComparison.channel.color"
        :tint-color="props.channelComparison.channel.tintColor"
      />
    </div>
    <div
      v-if="props.channelComparison.headline.previousLabel !== null || props.channelComparison.headline.rebuiltNote"
      class="flex flex-wrap items-center gap-x-2.5 gap-y-1"
    >
      <DashboardDeltaBadge
        v-if="props.channelComparison.headline.previousLabel !== null"
        :delta="props.channelComparison.headline.delta"
        :empty-label="WeeklyPointUtils.NO_COMPARISON_LABEL"
      />
      <DashboardRecalculatedMention
        v-if="props.channelComparison.headline.rebuiltNote"
        :note="props.channelComparison.headline.rebuiltNote"
      />
    </div>
  </article>
</template>

<script lang="ts" setup>
import type { PropType } from 'vue'
import type { DashboardChannelSummaryCardProps } from '~/core/types/DashboardChannelSummaryCard'
import type { DashboardWeeklyChannelComparison } from '~/core/types/DashboardWeeklyPointsPage'
import DashboardComparisonBars from '~/components/dashboard/charts/DashboardComparisonBars.vue'
import DashboardChannelLogo from '~/components/dashboard/logos/DashboardChannelLogo.vue'
import DashboardDeltaBadge from '~/components/dashboard/ui/DashboardDeltaBadge.vue'
import DashboardRecalculatedMention from '~/components/dashboard/ui/DashboardRecalculatedMention.vue'
import { WeeklyPointUtils } from '~/core/utils/WeeklyPointUtils'

/** First figure of one acquisition channel: big value, value before, two bars and the evolution. */
const props: DashboardChannelSummaryCardProps = defineProps({
  channelComparison: {
    type: Object as PropType<DashboardWeeklyChannelComparison>,
    required: true,
  },
})
</script>
