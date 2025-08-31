<template>
  <label :for="props.id" class="text-base font-medium text-gray-100">
    <slot />
  </label>
</template>

<script lang="ts" setup>
import type { DibodevLabelProps } from '~/core/types/DibodevLabel'
import { defineProps } from '@vue/runtime-core'

/**
 * Type definitions for the DibodevLabel component props
 * @type {DibodevLabelProps}
 * @property {string} id - The id of the label
 */
const props: DibodevLabelProps = defineProps({
  id: {
    type: String,
    required: true,
  },
})
</script>
