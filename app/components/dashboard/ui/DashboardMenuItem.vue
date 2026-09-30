<template>
  <component
    :is="props.href ? 'a' : 'button'"
    :href="props.href ?? undefined"
    :target="props.href ? '_blank' : undefined"
    :rel="props.href ? 'noopener noreferrer' : undefined"
    :type="props.href ? undefined : 'button'"
    role="menuitem"
    class="flex min-h-9 w-full cursor-pointer items-center gap-2.5 rounded-lg px-2.5 py-2 text-left text-sm leading-snug transition-colors duration-150"
    :class="
      props.isDanger
        ? 'text-(--dash-red) hover:bg-(--dash-red-tint)'
        : 'text-gray-200 hover:bg-gray-800 hover:text-gray-100'
    "
  >
    <DashboardIcon :name="props.icon" :size="16" class="shrink-0" />
    <span class="min-w-0 flex-1">
      <slot />
    </span>
    <slot name="trailing" />
  </component>
</template>

<script lang="ts" setup>
import type { PropType } from 'vue'
import type { DashboardIconName } from '~/core/constants/dashboardIcons'
import type { DashboardMenuItemProps } from '~/core/types/DashboardMenuItem'
import DashboardIcon from '~/components/dashboard/ui/DashboardIcon.vue'

const props: DashboardMenuItemProps = defineProps({
  icon: {
    type: String as PropType<DashboardIconName>,
    required: true,
  },
  href: {
    type: String as PropType<string | null>,
    default: null,
  },
  isDanger: {
    type: Boolean,
    default: false,
  },
})
</script>
