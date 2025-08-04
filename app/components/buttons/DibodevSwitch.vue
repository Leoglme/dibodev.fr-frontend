<template>
  <button
    :class="[
      'flex h-6 w-12 items-center rounded-full p-0.5 transition-colors duration-300',
      props.disabled ? 'cursor-not-allowed' : 'cursor-pointer',
      props.disabled
        ? props.modelValue
          ? 'bg-primary-light opacity-80'
          : 'bg-gray-200'
        : props.modelValue
          ? isHovered
            ? 'bg-primary'
            : 'bg-primary-dark'
          : isHovered
            ? 'bg-gray-600'
            : 'bg-gray-400',
    ]"
    :disabled="props.disabled"
    @click="toggle"
    @mouseenter="isHovered = true"
    @mouseleave="isHovered = false"
  >
    <span
      :class="[
        'h-5 w-5 rounded-full bg-gray-100 transition-transform duration-300',
        props.modelValue ? 'translate-x-6' : 'translate-x-0',
      ]"
    />
  </button>
</template>

<script lang="ts" setup>
import { ref, defineProps, defineEmits, watch } from 'vue'
import type { Ref } from 'vue'
import type { DibodevSwitchProps } from '~/core/types/DibodevSwitch'

const props: DibodevSwitchProps = defineProps<{
  modelValue: boolean
  disabled?: boolean
}>()

const emit = defineEmits<{
  (e: 'update:modelValue', value: boolean): void
}>()

const isHovered: Ref<boolean> = ref(false)
const isChecked: Ref<boolean> = ref(props.modelValue)

watch(
  () => props.modelValue,
  (newVal) => {
    isChecked.value = newVal
  },
)
/**
 * Toggles the switch state and emits the updated value.
 * If the switch is disabled, it does nothing.
 * @returns {void}
 */
const toggle: () => void = (): void => {
  if (props.disabled) return
  isChecked.value = !isChecked.value
  emit('update:modelValue', isChecked.value)
}
</script>
