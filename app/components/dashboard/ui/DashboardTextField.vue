<template>
  <textarea
    v-if="props.multiline"
    :value="props.modelValue"
    :rows="props.rows"
    class="focus:border-primary w-full min-w-0 resize-y rounded-lg border bg-white px-3 text-gray-100 transition-colors duration-150 outline-none placeholder:text-(--dash-faint)"
    :class="[TEXTAREA_SIZE_CLASSES[props.size], borderClasses]"
    @input="emit('update:modelValue', ($event.target as HTMLTextAreaElement).value)"
  />
  <input
    v-else
    :value="props.modelValue"
    class="focus:border-primary w-full min-w-0 border bg-white text-gray-100 transition-colors duration-150 outline-none placeholder:text-(--dash-faint)"
    :class="[INPUT_SIZE_CLASSES[props.size], borderClasses]"
    @input="emit('update:modelValue', ($event.target as HTMLInputElement).value)"
  />
</template>

<script lang="ts" setup>
import type { ComputedRef, PropType } from 'vue'
import type { DashboardTextFieldProps, DashboardTextFieldSize } from '~/core/types/DashboardTextField'
import { computed } from 'vue'

const props: DashboardTextFieldProps = defineProps({
  modelValue: {
    type: String,
    required: true,
  },
  multiline: {
    type: Boolean,
    default: false,
  },
  rows: {
    type: Number,
    default: 3,
  },
  size: {
    type: String as PropType<DashboardTextFieldSize>,
    default: 'md',
  },
  isInvalid: {
    type: Boolean,
    default: false,
  },
})

const emit = defineEmits<{
  (e: 'update:modelValue', value: string): void
}>()

const INPUT_SIZE_CLASSES: Record<DashboardTextFieldSize, string> = {
  sm: 'h-9 rounded-lg px-3 text-[13.5px]',
  md: 'h-10 rounded-lg px-3 text-sm',
  lg: 'h-12 rounded-xl px-4 text-base',
}

const TEXTAREA_SIZE_CLASSES: Record<DashboardTextFieldSize, string> = {
  sm: 'py-1.5 text-[13.5px]',
  md: 'py-2 text-sm',
  lg: 'py-2.5 text-[15px] leading-relaxed',
}

const borderClasses: ComputedRef<string> = computed((): string =>
  props.isInvalid ? 'border-(--dash-red)' : 'border-gray-400 hover:border-gray-100',
)
</script>
