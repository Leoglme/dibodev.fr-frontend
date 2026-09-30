<template>
  <div
    class="dash-scroll-x -mb-px flex min-w-0 items-stretch gap-6 self-stretch [mask-image:linear-gradient(to_right,#000_calc(100%-24px),transparent)] pr-6"
    role="tablist"
    :aria-label="props.screenReaderLabel"
  >
    <button
      v-for="item in props.items"
      :key="item.value"
      type="button"
      role="tab"
      class="relative inline-flex min-h-[48px] shrink-0 cursor-pointer items-center gap-1.5 text-sm whitespace-nowrap transition-colors duration-150"
      :class="item.value === props.modelValue ? 'font-medium text-gray-100' : 'text-muted hover:text-gray-100'"
      :aria-selected="item.value === props.modelValue"
      @click="emit('update:modelValue', item.value)"
    >
      {{ item.label }}
      <span
        v-if="item.count !== undefined && item.count !== null"
        class="text-[13px] tabular-nums"
        :class="item.value === props.modelValue ? 'text-gray-200' : 'text-(--dash-faint)'"
      >
        {{ item.count }}
      </span>
      <span v-if="item.alert" class="h-1.5 w-1.5 rounded-full bg-(--dash-red)" aria-hidden="true" />
      <span
        v-if="item.value === props.modelValue"
        class="absolute inset-x-0 bottom-0 h-0.5 rounded-t-sm bg-gray-100"
        aria-hidden="true"
      />
    </button>
  </div>
</template>

<script lang="ts" setup>
import type { PropType } from 'vue'
import type { DashboardTabItem } from '~/core/types/Dashboard'
import type { DashboardTabsProps } from '~/core/types/DashboardTabs'

const props: DashboardTabsProps = defineProps({
  modelValue: {
    type: String,
    required: true,
  },
  items: {
    type: Array as PropType<DashboardTabItem[]>,
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
