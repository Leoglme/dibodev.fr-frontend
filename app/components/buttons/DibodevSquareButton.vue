<template>
  <button
    class="dibodev-button border-1 border-gray-300"
    :disabled="props.disabled"
    :class="computedClass"
    :style="{
      '--background-color': backgroundColor,
      '--background-hover-color': backgroundHoverColor,
      width: `${props.size}px`,
      height: `${props.size}px`,
      color: textColor,
    }"
  >
    <span class="flex items-center justify-center">
      <slot />
    </span>
  </button>
</template>

<script lang="ts" setup>
import type { DibodevSquareButtonProps } from '~/core/types/DibodevSquareButton'
import { computed } from 'vue'
import type { ComputedRef } from 'vue'

/**
 * Square icon button: off-white surface with an ink icon by default.
 */
const props: DibodevSquareButtonProps = defineProps({
  backgroundColor: {
    type: String,
    default: '#f6f6f3',
  },
  backgroundHoverColor: {
    type: String,
    default: '#ebebe7',
  },
  textColor: {
    type: String,
    default: '#141414',
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  size: {
    type: Number,
    default: 40,
  },
})

const computedClass: ComputedRef<string> = computed(
  (): string => `
  inline-flex items-center justify-center
  font-semibold select-none
  leading-6 rounded-lg cursor-pointer
  focus:outline-none focus-visible:ring-2 focus-visible:ring-primary transition duration-150 ease-in-out
  ${props.disabled ? 'opacity-70 cursor-not-allowed' : ''}
`,
)
</script>

<style>
.dibodev-button,
.dibodev-button:active,
.dibodev-button:hover:active {
  background-color: var(--background-color);
}

.dibodev-button:hover {
  background-color: var(--background-hover-color);
}

.dibodev-button:disabled,
.dibodev-button:disabled:hover,
.dibodev-button:disabled:active {
  background-color: var(--background-color);
}
</style>
