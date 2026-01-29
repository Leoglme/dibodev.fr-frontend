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

const props: DibodevSquareButtonProps = defineProps({
  backgroundColor: {
    type: String,
    default: '#8472F3',
  },
  backgroundHoverColor: {
    type: String,
    default: '#6B59D9',
  },
  textColor: {
    type: String,
    default: '#F5F4FB',
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
  () => `
  inline-flex items-center justify-center
  font-semibold select-none
  leading-6 rounded-md cursor-pointer
  focus:outline-none focus:shadow-outline transition duration-150 ease-in-out
  ${props.disabled ? 'opacity-70 cursor-not-allowed' : ''}
`,
)
</script>

<style>
:root {
  --background-color: #8472f3;
  --background-hover-color: #6b59d9;
}

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
