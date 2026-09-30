<template>
  <svg
    class="shrink-0"
    :width="props.size"
    :height="props.size"
    viewBox="0 0 24 24"
    :stroke-width="props.strokeWidth"
    aria-hidden="true"
    focusable="false"
    v-html="markup"
  />
</template>

<script lang="ts" setup>
import type { ComputedRef, PropType } from 'vue'
import type { DashboardIconName } from '~/core/constants/dashboardIcons'
import type { DashboardIconProps } from '~/core/types/DashboardIcon'
import { computed } from 'vue'
import { DASHBOARD_ICONS } from '~/core/constants/dashboardIcons'

/** Renders static markup from dashboardIcons.ts only: never pass user content. */
const props: DashboardIconProps = defineProps({
  name: {
    type: String as PropType<DashboardIconName>,
    required: true,
  },
  size: {
    type: Number,
    default: 16,
  },
  strokeWidth: {
    type: Number,
    default: 1.75,
  },
})

const markup: ComputedRef<string> = computed((): string => DASHBOARD_ICONS[props.name])
</script>
