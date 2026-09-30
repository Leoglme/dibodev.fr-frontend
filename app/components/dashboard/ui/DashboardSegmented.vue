<template>
  <div
    class="inline-flex shrink-0 gap-0.5 rounded-lg border border-(--dash-line-soft) bg-gray-600 p-[3px]"
    role="group"
    :aria-label="props.screenReaderLabel"
  >
    <button
      v-for="option in props.options"
      :key="option.value"
      type="button"
      class="inline-flex h-7 cursor-pointer items-center gap-1.5 rounded-md px-3 text-[13px] font-medium whitespace-nowrap transition-[color,background-color,box-shadow] duration-150"
      :class="
        option.value === props.modelValue
          ? 'bg-white text-gray-100 shadow-[0_1px_3px_rgba(20,20,20,0.1),0_0_0_1px_rgba(20,20,20,0.05)]'
          : 'text-muted hover:text-gray-100'
      "
      :aria-pressed="option.value === props.modelValue"
      :aria-label="option.label"
      @click="emit('update:modelValue', option.value)"
    >
      <DashboardIcon v-if="option.icon" :name="option.icon" :size="14" />
      <span :class="{ 'max-md:sr-only': props.compactOnMobile && option.icon }">{{ option.label }}</span>
    </button>
  </div>
</template>

<script lang="ts" setup>
import type { PropType } from 'vue'
import type { DashboardSegmentOption } from '~/core/types/Dashboard'
import type { DashboardSegmentedProps } from '~/core/types/DashboardSegmented'
import DashboardIcon from '~/components/dashboard/ui/DashboardIcon.vue'

const props: DashboardSegmentedProps = defineProps({
  modelValue: {
    type: String,
    required: true,
  },
  options: {
    type: Array as PropType<DashboardSegmentOption[]>,
    required: true,
  },
  screenReaderLabel: {
    type: String,
    required: true,
  },
  compactOnMobile: {
    type: Boolean,
    default: false,
  },
})

const emit = defineEmits<{
  (e: 'update:modelValue', value: string): void
}>()
</script>
