<template>
  <div class="flex flex-wrap gap-2.5">
    <DibodevTogglePill
      v-for="option in normalizedOptions"
      :key="String(option)"
      @click="onToggle(option.value)"
      :active="isActive(option.value)"
    >
      {{ option.label }}
    </DibodevTogglePill>
  </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import type { PropType, ComputedRef } from 'vue'
import DibodevTogglePill from '~/components/ui/DibodevTogglePill.vue'

export type PillValue = string | number
export type Option = string | { label: string; value: PillValue }
export type NormalizedOption = { label: string; value: PillValue }

const props = defineProps({
  value: {
    type: [String, Number, Array] as PropType<PillValue | PillValue[] | null | undefined>,
    default: undefined,
  },
  options: {
    type: Array as PropType<Option[]>,
    required: true,
  },
  multiple: {
    type: Boolean as PropType<boolean>,
    default: false,
  },
  /**
   * In single selection mode, allow clicking the active pill
   * to clear the selection.
   */
  deselectable: {
    type: Boolean as PropType<boolean>,
    default: false,
  },
})

const emit = defineEmits<{
  (e: 'update:value', value: PillValue | PillValue[] | null | undefined): void
  (e: 'change', value: PillValue | PillValue[] | null | undefined): void
}>()

/**
 * Options normalized to a consistent {label, value} shape.
 */
const normalizedOptions: ComputedRef<NormalizedOption[]> = computed(() =>
  props.options.map((option: Option) => (typeof option === 'string' ? { label: option, value: option } : option)),
)

/**
 * Determine if a given value is currently active/selected.
 * @param value - Value to test.
 */
function isActive(value: PillValue): boolean {
  if (props.multiple) {
    return Array.isArray(props.value) ? (props.value as PillValue[]).includes(value) : false
  }
  return props.value === value
}

/**
 * Toggle selection for the given value.
 * - multiple: add/remove from the array.
 * - single: set the value, or clear if deselectable and already selected.
 * @param value - The pill value that was clicked.
 */
function onToggle(value: PillValue): void {
  if (props.multiple) {
    const currentValues: PillValue[] = Array.isArray(props.value) ? [...(props.value as PillValue[])] : []

    const index: number = currentValues.indexOf(value)
    if (index > -1) currentValues.splice(index, 1)
    else currentValues.push(value)

    emit('update:value', currentValues)
    emit('change', currentValues)
    return
  }

  const nextValue: PillValue | null | undefined = props.value === value && props.deselectable ? null : value

  emit('update:value', nextValue)
  emit('change', nextValue)
}
</script>
