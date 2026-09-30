<template>
  <li class="border-b border-(--dash-line-soft) last:border-b-0">
    <button
      type="button"
      class="flex w-full cursor-pointer items-center gap-3 px-4 py-3 text-left transition-colors duration-150 hover:bg-(--dash-row-hover)"
      :class="{ 'bg-(--dash-row-hover) shadow-[inset_2px_0_0_var(--color-primary)]': props.isSelected }"
      :aria-current="props.isSelected ? 'true' : undefined"
      @click="emit('select')"
    >
      <slot />
    </button>
  </li>
</template>

<script lang="ts" setup>
import type { DashboardListRowProps } from '~/core/types/DashboardListRow'

const props: DashboardListRowProps = defineProps({
  isSelected: {
    type: Boolean,
    default: false,
  },
})

const emit = defineEmits<{
  (e: 'select'): void
}>()
</script>
