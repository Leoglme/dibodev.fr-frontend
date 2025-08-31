<template>
  <button
    type="button"
    class="flex w-fit cursor-pointer items-center justify-center gap-3 rounded-full border border-gray-100 px-4 py-1 text-center text-sm leading-6 font-normal text-gray-100 select-none"
    :class="props.active ? 'bg-primary' : 'bg-transparent'"
  >
    <slot />
  </button>
</template>

<script lang="ts" setup>
import type { PropType } from 'vue'

const props = defineProps({
  active: {
    type: Boolean as PropType<boolean>,
    default: false,
  },
})
</script>
