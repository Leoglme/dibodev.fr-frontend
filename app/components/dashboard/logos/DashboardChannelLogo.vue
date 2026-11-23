<template>
  <DashboardAiAssistantsLogo v-if="props.channel === 'aiAssistants'" :size="props.size" />
  <span
    v-else
    class="grid shrink-0 place-items-center"
    :class="[
      TILE_SIZE_CLASSES[props.size],
      props.channel === 'site' ? 'bg-(--dash-violet-tint)' : 'border border-gray-300 bg-white',
    ]"
  >
    <DibodevLogo v-if="props.channel === 'site'" :size="LOGO_SIZES[props.size]" />
    <DashboardBrandLogo v-else :name="props.channel" :size="LOGO_SIZES[props.size]" />
  </span>
</template>

<script lang="ts" setup>
import type { PropType } from 'vue'
import type { DashboardChannelLogoProps, DashboardChannelLogoSize } from '~/core/types/DashboardChannelLogo'
import type { DashboardWeeklyChannelKey } from '~/core/types/DashboardWeeklyPoint'
import DibodevLogo from '~/components/branding/DibodevLogo.vue'
import DashboardAiAssistantsLogo from '~/components/dashboard/logos/DashboardAiAssistantsLogo.vue'
import DashboardBrandLogo from '~/components/dashboard/logos/DashboardBrandLogo.vue'

/** Logo of an acquisition channel: a brand, the group of AI assistants, or Dibodev for the site itself. */
const props: DashboardChannelLogoProps = defineProps({
  channel: {
    type: String as PropType<DashboardWeeklyChannelKey>,
    required: true,
  },
  size: {
    type: String as PropType<DashboardChannelLogoSize>,
    default: 'md',
  },
})

const TILE_SIZE_CLASSES: Record<DashboardChannelLogoSize, string> = {
  md: 'h-7 w-7 rounded-lg @2xl/page:h-8 @2xl/page:w-8 @2xl/page:rounded-[9px]',
  lg: 'h-9 w-9 rounded-[10px]',
}

const LOGO_SIZES: Record<DashboardChannelLogoSize, number> = {
  md: 17,
  lg: 20,
}
</script>
