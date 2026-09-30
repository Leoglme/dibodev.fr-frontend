<template>
  <button
    type="button"
    role="switch"
    class="relative h-6 w-10 shrink-0 cursor-pointer rounded-full border transition-colors duration-200 disabled:cursor-not-allowed disabled:opacity-60"
    :class="props.modelValue ? 'border-primary bg-primary' : 'border-gray-300 bg-gray-700'"
    :aria-checked="props.modelValue"
    :aria-label="props.label"
    :disabled="props.disabled"
    @click="emit('update:modelValue', !props.modelValue)"
  >
    <span
      class="absolute top-[3px] left-[3px] h-4 w-4 rounded-full bg-white shadow-[0_1px_2px_rgba(20,20,20,0.25)] transition-transform duration-200"
      :class="props.modelValue ? 'translate-x-4' : 'translate-x-0'"
      aria-hidden="true"
    />
  </button>
</template>

<script lang="ts" setup>
import type { DashboardSwitchProps } from '~/core/types/DashboardSwitch'

const props: DashboardSwitchProps = defineProps({
  modelValue: {
    type: Boolean,
    required: true,
  },
  label: {
    type: String,
    required: true,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
})

const emit = defineEmits<{
  (e: 'update:modelValue', value: boolean): void
}>()
</script>
