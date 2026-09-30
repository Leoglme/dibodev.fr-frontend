<template>
  <button
    type="button"
    class="flex w-fit cursor-pointer items-center justify-center gap-3 rounded-full border px-4 py-1.5 text-center text-sm leading-6 font-medium transition-colors select-none"
    :class="
      props.active
        ? 'border-primary bg-primary text-white'
        : 'hover:border-primary hover:text-primary border-gray-400 bg-white text-gray-100'
    "
    :aria-pressed="props.active"
  >
    <slot />
  </button>
</template>

<script lang="ts" setup>
import type { PropType } from 'vue'
import type { DibodevTogglePillProps } from '~/core/types/DibodevTogglePill'

/**
 * Selectable pill: filled with the brand colour when active, outlined otherwise.
 */
const props: DibodevTogglePillProps = defineProps({
  active: {
    type: Boolean as PropType<boolean>,
    default: false,
  },
})
</script>
