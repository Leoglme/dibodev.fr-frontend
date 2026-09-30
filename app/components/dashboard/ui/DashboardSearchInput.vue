<template>
  <label class="relative flex min-w-0 items-center" :for="props.id">
    <DashboardIcon name="search" :size="15" class="text-muted pointer-events-none absolute left-3" />
    <span class="sr-only">{{ props.screenReaderLabel }}</span>
    <input
      :id="props.id"
      :value="props.modelValue"
      type="search"
      :placeholder="props.placeholder"
      autocomplete="off"
      enterkeyhint="search"
      class="focus:border-primary h-[34px] w-full min-w-0 rounded-lg border border-gray-300 bg-white pr-3 pl-[34px] text-[13.5px] text-gray-100 transition-colors duration-150 outline-none placeholder:text-(--dash-faint) hover:border-(--dash-faint)"
      @input="emit('update:modelValue', ($event.target as HTMLInputElement).value)"
    />
  </label>
</template>

<script lang="ts" setup>
import type { DashboardSearchInputProps } from '~/core/types/DashboardSearchInput'
import DashboardIcon from '~/components/dashboard/ui/DashboardIcon.vue'

const props: DashboardSearchInputProps = defineProps({
  modelValue: {
    type: String,
    required: true,
  },
  id: {
    type: String,
    required: true,
  },
  placeholder: {
    type: String,
    default: 'Rechercher…',
  },
  screenReaderLabel: {
    type: String,
    default: 'Rechercher',
  },
})

const emit = defineEmits<{
  (e: 'update:modelValue', value: string): void
}>()
</script>
