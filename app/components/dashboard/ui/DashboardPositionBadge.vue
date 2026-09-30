<template>
  <span
    class="inline-grid h-6 min-w-11 place-items-center rounded-md px-[7px] text-[12.5px] font-medium tabular-nums"
    :class="tone === 'neutral' ? 'text-gray-200' : DASHBOARD_TONES[tone].badge"
    :title="title"
  >
    {{ DashboardFormatUtils.formatNumber(props.position, 1) }}
  </span>
</template>

<script lang="ts" setup>
import type { ComputedRef } from 'vue'
import type { DashboardTone } from '~/core/types/Dashboard'
import type { DashboardPositionBadgeProps } from '~/core/types/DashboardPositionBadge'
import { computed } from 'vue'
import { DASHBOARD_TONES } from '~/core/constants/dashboardTones'
import { DashboardFormatUtils } from '~/core/utils/DashboardFormatUtils'

const props: DashboardPositionBadgeProps = defineProps({
  position: {
    type: Number,
    required: true,
  },
})

const tone: ComputedRef<DashboardTone> = computed(
  (): DashboardTone => DashboardFormatUtils.positionTone(props.position),
)

const title: ComputedRef<string> = computed((): string => {
  if (props.position <= 3) return 'Dans le top 3'
  if (props.position <= 10) return 'En première page'
  if (props.position <= 20) return 'En deuxième page'
  return 'Au-delà de la deuxième page'
})
</script>
