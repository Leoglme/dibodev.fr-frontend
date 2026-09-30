<template>
  <span
    class="grid shrink-0 place-items-center"
    :class="[
      TILE_SIZE_CLASSES[props.size],
      props.isRound ? 'rounded-full' : TILE_RADIUS_CLASSES[props.size],
      DASHBOARD_TONES[props.tone].tile,
    ]"
  >
    <DashboardIcon :name="props.icon" :size="TILE_ICON_SIZES[props.size]" />
  </span>
</template>

<script lang="ts" setup>
import type { PropType } from 'vue'
import type { DashboardIconName } from '~/core/constants/dashboardIcons'
import type { DashboardTone } from '~/core/types/Dashboard'
import type { DashboardIconTileProps, DashboardIconTileSize } from '~/core/types/DashboardIconTile'
import DashboardIcon from '~/components/dashboard/ui/DashboardIcon.vue'
import { DASHBOARD_TONES } from '~/core/constants/dashboardTones'

const props: DashboardIconTileProps = defineProps({
  icon: {
    type: String as PropType<DashboardIconName>,
    required: true,
  },
  tone: {
    type: String as PropType<DashboardTone>,
    required: true,
  },
  size: {
    type: String as PropType<DashboardIconTileSize>,
    default: 'sm',
  },
  isRound: {
    type: Boolean,
    default: false,
  },
})

const TILE_SIZE_CLASSES: Record<DashboardIconTileSize, string> = {
  xs: 'h-6 w-6',
  sm: 'h-[26px] w-[26px]',
  md: 'h-[30px] w-[30px]',
  lg: 'h-9 w-9',
}

const TILE_RADIUS_CLASSES: Record<DashboardIconTileSize, string> = {
  xs: 'rounded-md',
  sm: 'rounded-[7px]',
  md: 'rounded-lg',
  lg: 'rounded-lg',
}

const TILE_ICON_SIZES: Record<DashboardIconTileSize, number> = {
  xs: 13,
  sm: 15,
  md: 16,
  lg: 16,
}
</script>
