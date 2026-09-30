<template>
  <span
    class="inline-flex items-center gap-1.5 rounded-full border py-0.5 pr-2.5 pl-2 text-xs font-medium whitespace-nowrap"
    :class="
      props.tone === 'neutral'
        ? 'border-gray-300 bg-white text-gray-200'
        : ['border-transparent', DASHBOARD_TONES[props.tone].badge]
    "
  >
    <DashboardIcon v-if="props.icon" :name="props.icon" :size="13" :class="{ 'dash-spin': props.isSpinning }" />
    <slot />
  </span>
</template>

<script lang="ts" setup>
import type { PropType } from 'vue'
import type { DashboardIconName } from '~/core/constants/dashboardIcons'
import type { DashboardTone } from '~/core/types/Dashboard'
import type { DashboardBadgeProps } from '~/core/types/DashboardBadge'
import DashboardIcon from '~/components/dashboard/ui/DashboardIcon.vue'
import { DASHBOARD_TONES } from '~/core/constants/dashboardTones'

const props: DashboardBadgeProps = defineProps({
  tone: {
    type: String as PropType<DashboardTone>,
    required: true,
  },
  icon: {
    type: String as PropType<DashboardIconName | null>,
    default: null,
  },
  isSpinning: {
    type: Boolean,
    default: false,
  },
})
</script>
