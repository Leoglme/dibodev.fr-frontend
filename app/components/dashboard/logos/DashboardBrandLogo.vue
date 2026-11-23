<template>
  <svg
    class="shrink-0"
    :width="props.size"
    :height="props.size"
    :viewBox="brandLogo.viewBox"
    :role="props.isDecorative ? undefined : 'img'"
    :aria-label="props.isDecorative ? undefined : brandLogo.label"
    :aria-hidden="props.isDecorative ? 'true' : undefined"
    focusable="false"
    v-html="brandLogo.markup"
  />
</template>

<script lang="ts" setup>
import type { ComputedRef, PropType } from 'vue'
import type { DashboardBrandLogoDefinition, DashboardBrandLogoName } from '~/core/constants/dashboardBrandLogos'
import type { DashboardBrandLogoProps } from '~/core/types/DashboardBrandLogo'
import { computed } from 'vue'
import { DASHBOARD_BRAND_LOGOS } from '~/core/constants/dashboardBrandLogos'

/** Renders static markup from dashboardBrandLogos.ts only: never pass user content. */
const props: DashboardBrandLogoProps = defineProps({
  name: {
    type: String as PropType<DashboardBrandLogoName>,
    required: true,
  },
  size: {
    type: Number,
    default: 18,
  },
  isDecorative: {
    type: Boolean,
    default: false,
  },
})

const brandLogo: ComputedRef<DashboardBrandLogoDefinition> = computed(
  (): DashboardBrandLogoDefinition => DASHBOARD_BRAND_LOGOS[props.name],
)
</script>
