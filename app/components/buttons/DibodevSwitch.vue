<template>
  <button
    :class="[
      'flex h-8 w-14 items-center rounded-full p-1 transition-colors duration-300',
      disabled
        ? value
          ? 'cursor-not-allowed bg-purple-300'
          : 'cursor-not-allowed bg-gray-400'
        : value
          ? isHovered
            ? 'bg-purple-600'
            : 'bg-purple-500'
          : isHovered
            ? 'bg-gray-600'
            : 'bg-gray-700',
    ]"
    :disabled="disabled"
    @click="toggle"
    @mouseenter="isHovered = true"
    @mouseleave="isHovered = false"
  >
    <div
      :class="[
        'h-6 w-6 rounded-full bg-white transition-transform duration-300',
        value ? 'translate-x-6' : 'translate-x-0',
      ]"
    />
  </button>
</template>

<script lang="ts" setup>
import { ref, defineProps, defineEmits, watch } from 'vue'

const props = defineProps<{
  modelValue: boolean
  disabled?: boolean
}>()

const emit = defineEmits<{
  (e: 'update:modelValue', value: boolean): void
}>()

const isHovered = ref(false)

const value = ref(props.modelValue)

watch(
  () => props.modelValue,
  (newVal) => {
    value.value = newVal
  },
)

const toggle = () => {
  if (props.disabled) return
  value.value = !value.value
  emit('update:modelValue', value.value)
}
</script>
