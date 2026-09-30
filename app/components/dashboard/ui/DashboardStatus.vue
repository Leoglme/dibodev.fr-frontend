<template>
  <span
    class="inline-flex items-center gap-2 text-[13px] font-medium whitespace-nowrap"
    :class="props.tone === 'neutral' || props.tone === 'ink' ? 'text-gray-200' : DASHBOARD_TONES[props.tone].text"
  >
    <span class="relative flex h-2 w-2 shrink-0">
      <span
        v-if="props.pulse"
        class="absolute inline-flex h-full w-full animate-ping rounded-full opacity-60"
        :class="DASHBOARD_TONES[props.tone].dot"
      />
      <span class="relative inline-flex h-2 w-2 rounded-full" :class="DASHBOARD_TONES[props.tone].dot" />
    </span>
    {{ props.label }}
  </span>
</template>

<script lang="ts" setup>
import type { PropType } from 'vue'
import type { DashboardTone } from '~/core/types/Dashboard'
import type { DashboardStatusProps } from '~/core/types/DashboardStatus'
import { DASHBOARD_TONES } from '~/core/constants/dashboardTones'

const props: DashboardStatusProps = defineProps({
  tone: {
    type: String as PropType<DashboardTone>,
    required: true,
  },
  label: {
    type: String,
    required: true,
  },
  pulse: {
    type: Boolean,
    default: false,
  },
})
</script>
