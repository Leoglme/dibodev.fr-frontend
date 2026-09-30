<template>
  <div class="flex flex-col items-center gap-2 px-6 py-12 text-center">
    <span class="bg-surface-tint text-primary-dark mb-1 grid h-11 w-11 place-items-center rounded-full">
      <DashboardIcon :name="props.icon" :size="20" />
    </span>
    <p class="text-[15px] font-medium text-gray-100">{{ props.title }}</p>
    <p class="text-muted max-w-sm text-sm">{{ props.text }}</p>
    <div v-if="$slots.default" class="mt-3">
      <slot />
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { PropType } from 'vue'
import type { DashboardIconName } from '~/core/constants/dashboardIcons'
import type { DashboardEmptyStateProps } from '~/core/types/DashboardEmptyState'
import DashboardIcon from '~/components/dashboard/ui/DashboardIcon.vue'

const props: DashboardEmptyStateProps = defineProps({
  icon: {
    type: String as PropType<DashboardIconName>,
    default: 'circle-check',
  },
  title: {
    type: String,
    required: true,
  },
  text: {
    type: String,
    default: '',
  },
})
</script>
