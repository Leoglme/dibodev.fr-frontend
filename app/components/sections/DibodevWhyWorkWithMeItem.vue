<template>
  <div
    class="flex flex-row gap-6"
    data-aos="fade-up"
    :data-aos-delay="props.index * 80"
  >
    <div
      class="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl text-sm font-medium"
      :style="{ backgroundColor: badgeBgColor, color: accentColor }"
    >
      {{ badgeText }}
    </div>
    <div class="grid gap-2 self-baseline">
      <span class="text-xs font-medium uppercase tracking-wide text-gray-200/70">
        {{ props.label }}
      </span>
      <h3 class="text-left text-base font-medium text-gray-100 sm:text-lg">
        {{ props.title }}
      </h3>
      <p class="text-left text-sm leading-7 font-normal text-gray-200">
        {{ props.description }}
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

export type WhyWorkWithMeNumber = 1 | 2 | 3 | 4

const props = defineProps<{
  number: WhyWorkWithMeNumber
  label: string
  title: string
  description: string
  index: number
}>()

const ACCENT_COLORS: Record<WhyWorkWithMeNumber, string> = {
  1: '#8472f3', /* primary */
  2: '#22d3ee', /* cyan */
  3: '#34d399', /* green */
  4: '#f472b6', /* pink */
} as const

const BADGE_BG_COLORS: Record<WhyWorkWithMeNumber, string> = {
  1: '#EFEAFF', /* primary light */
  2: '#E2F3FF', /* cyan light */
  3: '#ECFFDA', /* green light */
  4: '#FFE7FB', /* pink light */
} as const

const accentColor = computed(() => ACCENT_COLORS[props.number])
const badgeBgColor = computed(() => BADGE_BG_COLORS[props.number])

const badgeText = computed(() => {
  const n = props.number
  return n < 10 ? `0${n}` : String(n)
})
</script>
