<template>
  <div
    class="relative flex w-full items-center before:flex-1 before:border-t before:content-[''] after:flex-1 after:border-t after:content-['']"
    :class="[
      props.text ? 'before:mr-4 after:ml-4' : 'justify-center',
      props.dark ? 'before:border-gray-600 after:border-gray-600' : 'before:border-gray-300 after:border-gray-300',
    ]"
    aria-label="divider"
  >
    <span v-if="props.text" class="mx-4 font-semibold text-gray-100">
      {{ props.text }}
    </span>
  </div>
</template>

<script lang="ts" setup>
import type { DibodevDividerProps } from '~/core/types/DibodevDivider'

/**
 * Type definitions for the DibodevDivider component props
 * @type {DibodevDividerProps}
 * @property {string | null} text - The text to display in the divider
 */
const props: DibodevDividerProps = defineProps({
  text: {
    type: String,
    default: null,
  },
  dark: {
    type: Boolean,
    default: false,
  },
})
</script>
