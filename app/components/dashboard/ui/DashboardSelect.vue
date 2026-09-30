<template>
  <label class="relative inline-flex min-w-0" :for="props.id">
    <span class="sr-only">{{ props.screenReaderLabel }}</span>
    <select
      :id="props.id"
      :value="props.modelValue"
      class="focus:border-primary h-8 w-full min-w-0 cursor-pointer appearance-none rounded-lg border border-gray-400 bg-white pr-8 pl-2.5 text-[13px] text-gray-100 outline-none hover:border-(--dash-faint) max-md:h-10"
      @change="emit('update:modelValue', ($event.target as HTMLSelectElement).value)"
    >
      <option v-for="option in props.options" :key="option.value" :value="option.value">{{ option.label }}</option>
    </select>
    <DashboardIcon
      name="chevron-down"
      :size="15"
      class="text-muted pointer-events-none absolute top-1/2 right-2.5 -translate-y-1/2"
    />
  </label>
</template>

<script lang="ts" setup>
import type { PropType } from 'vue'
import type { DashboardSelectOption } from '~/core/types/Dashboard'
import type { DashboardSelectProps } from '~/core/types/DashboardSelect'
import DashboardIcon from '~/components/dashboard/ui/DashboardIcon.vue'

const props: DashboardSelectProps = defineProps({
  modelValue: {
    type: String,
    required: true,
  },
  options: {
    type: Array as PropType<DashboardSelectOption[]>,
    required: true,
  },
  id: {
    type: String,
    required: true,
  },
  screenReaderLabel: {
    type: String,
    required: true,
  },
})

const emit = defineEmits<{
  (e: 'update:modelValue', value: string): void
}>()
</script>
