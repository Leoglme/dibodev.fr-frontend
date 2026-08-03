<template>
  <div class="rounded-2xl border border-gray-600 bg-gray-800 p-4 sm:p-5">
    <span class="text-xs font-medium tracking-wide text-gray-300 uppercase">{{ label }}</span>
    <p class="mt-2 text-2xl font-semibold text-gray-100 tabular-nums sm:text-3xl">{{ value }}</p>
    <div class="mt-1 text-sm">
      <span v-if="delta !== null" :class="deltaClass" class="font-medium tabular-nums">{{ deltaText }}</span>
      <span v-else class="text-gray-400">pas de comparaison</span>
      <span v-if="delta !== null" class="ml-1 hidden text-gray-300 sm:inline">vs période précédente</span>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import type { ComputedRef, PropType } from 'vue'

const props = defineProps({
  label: {
    type: String,
    required: true,
  },
  value: {
    type: String,
    required: true,
  },
  delta: {
    type: Number as PropType<number | null>,
    default: null,
  },
  deltaSuffix: {
    type: String,
    default: '%',
  },
  positiveIsGood: {
    type: Boolean,
    default: true,
  },
})

/** Whether the delta direction is favourable, or null when there is no meaningful change. */
const isFavourable: ComputedRef<boolean | null> = computed((): boolean | null => {
  if (props.delta === null || props.delta === 0) return null
  return props.positiveIsGood ? props.delta > 0 : props.delta < 0
})

/** Tailwind text-color class reflecting whether the delta is good, bad or neutral. */
const deltaClass: ComputedRef<string> = computed((): string => {
  if (isFavourable.value === null) return 'text-gray-400'
  return isFavourable.value ? 'text-emerald-400' : 'text-red-400'
})

/** Human-readable delta with an arrow and its unit (e.g. "↑ 12%", "↓ 1.4 pts"). */
const deltaText: ComputedRef<string> = computed((): string => {
  if (props.delta === null) return ''
  const arrow: string = props.delta > 0 ? '↑' : props.delta < 0 ? '↓' : '→'
  const absValue: number = Math.abs(props.delta)
  const formatted: string = props.deltaSuffix === '%' ? Math.round(absValue).toString() : absValue.toFixed(1)
  return `${arrow} ${formatted}${props.deltaSuffix}`
})
</script>
