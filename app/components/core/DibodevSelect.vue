<template>
  <div class="relative flex w-full min-w-max flex-col gap-2">
    <DibodevLabel v-if="props.label" :id="props.id">
      {{ props.label }}
      <span v-if="required" class="ml-1 text-red-400"> * </span>
    </DibodevLabel>
    <div class="relative w-full">
      <select
        :id="id"
        class="h-12 w-full cursor-pointer appearance-none rounded-md border-2 bg-gray-600 pr-10 pl-3 text-base text-gray-100 placeholder:text-gray-200 focus:border-gray-300"
        :class="required && !selectedItem ? 'border-[#EC364B]' : 'border-transparent hover:border-gray-300'"
        :value="selectedItem?.value"
        @change="onChange($event)"
      >
        <option v-for="option in options" :value="option.value" :key="option.value">
          {{ option.label }}
        </option>
      </select>

      <div class="pointer-events-none absolute inset-y-0 right-3 flex items-center">
        <DibodevIcon name="ChevronDown" mode="stroke" />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { PropType, ComputedRef } from 'vue'
import { computed } from 'vue'
import { defineProps } from '@vue/runtime-core'
import DibodevLabel from '~/components/core/DibodevLabel.vue'
import type { DibodevSelectProps, DibodevSelectOption } from '~/core/types/DibodevSelect'
import DibodevIcon from '~/components/ui/DibodevIcon.vue'

/* PROPS */
const props: DibodevSelectProps = defineProps({
  options: {
    type: Array as PropType<DibodevSelectOption[]>,
    required: true,
  },
  modelValue: {
    type: Object as PropType<DibodevSelectOption>,
    required: true,
  },
  id: { type: String, default: 'field' },
  label: { type: String, default: null },
  required: { type: Boolean, default: false },
})

/* Computed */
const selectedItem: ComputedRef<DibodevSelectOption> = computed({
  /**
   * Get the selected item
   * @returns {DibodevSelectOption} - The selected item
   */
  get: (): DibodevSelectOption => props.modelValue || props.options[0],
  /**
   * Set the selected item
   * @param {DibodevSelectOption} newValue - The newly selected item
   * @returns {void}
   */
  set: (newValue: DibodevSelectOption): void => {
    emit('update:modelValue', newValue)
  },
})

/* EMIT */
const emit: (event: 'update:modelValue', value: DibodevSelectOption) => void = defineEmits<{
  (event: 'update:modelValue', value: DibodevSelectOption): void
}>()

/* METHODS */
/**
 * Method to handle the change event of the select input
 * @param {Event} event - The change event
 * @returns {void}
 */
const onChange: (event: Event) => void = (event: Event): void => {
  const selectElement: HTMLSelectElement = event.target as HTMLSelectElement
  const selectedOptionValue: string = selectElement.value

  // Find the selected option from the option array
  const selectedOption: DibodevSelectOption | undefined = props.options.find(
    (option: DibodevSelectOption) => option.value.toString() === selectedOptionValue,
  )

  if (selectedOption) {
    emit('update:modelValue', selectedOption)
  }
}
</script>
