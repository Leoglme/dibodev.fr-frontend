<template>
  <span
    v-if="props.delta && props.delta.favourable !== null"
    class="inline-flex h-[22px] items-center gap-0.5 rounded-full pr-[7px] pl-[5px] text-xs font-medium tabular-nums"
    :class="
      props.delta.favourable ? 'bg-(--dash-green-tint) text-(--dash-green)' : 'bg-(--dash-red-tint) text-(--dash-red)'
    "
  >
    <DashboardIcon :name="props.delta.value > 0 ? 'arrow-up' : 'arrow-down'" :size="13" :stroke-width="2.2" />
    {{ props.delta.text }}
  </span>
  <span v-else class="text-muted inline-flex items-center gap-1 text-xs font-medium">
    <DashboardIcon name="minus" :size="13" :stroke-width="2.2" />
    {{ props.delta ? 'Stable' : props.emptyLabel }}
  </span>
</template>

<script lang="ts" setup>
import type { PropType } from 'vue'
import type { DashboardDelta } from '~/core/types/Dashboard'
import type { DashboardDeltaBadgeProps } from '~/core/types/DashboardDeltaBadge'
import DashboardIcon from '~/components/dashboard/ui/DashboardIcon.vue'

const props: DashboardDeltaBadgeProps = defineProps({
  delta: {
    type: Object as PropType<DashboardDelta | null>,
    default: null,
  },
  emptyLabel: {
    type: String,
    default: 'Aucune comparaison',
  },
})
</script>
