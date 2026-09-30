<template>
  <span class="block h-1.5 w-24 shrink-0 overflow-hidden rounded-full bg-gray-600" aria-hidden="true">
    <span class="block h-full rounded-full bg-gray-100/25" :style="{ width: `${ratio}%` }" />
  </span>
</template>

<script lang="ts" setup>
import type { ComputedRef } from 'vue'
import type { DashboardMeterProps } from '~/core/types/DashboardMeter'
import { computed } from 'vue'

const props: DashboardMeterProps = defineProps({
  value: {
    type: Number,
    required: true,
  },
  max: {
    type: Number,
    required: true,
  },
})

const ratio: ComputedRef<number> = computed((): number =>
  props.max > 0 ? Math.max(3, Math.min(100, (props.value / props.max) * 100)) : 0,
)
</script>
