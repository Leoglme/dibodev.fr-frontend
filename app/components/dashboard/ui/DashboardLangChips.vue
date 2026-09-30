<template>
  <span class="inline-flex gap-1" :aria-label="languagesScreenReaderLabel">
    <span
      v-for="lang in languages"
      :key="lang.code"
      class="dash-mono inline-grid h-5 min-w-[26px] place-items-center rounded-[5px] border px-1 text-[10.5px] font-medium tracking-[0.04em]"
      :class="
        lang.available === true
          ? 'border-transparent bg-(--dash-green-tint) text-(--dash-green)'
          : lang.available === false
            ? 'border-dashed border-gray-400 text-(--dash-faint)'
            : 'border-gray-300 text-gray-200'
      "
      aria-hidden="true"
    >
      {{ lang.code }}
    </span>
  </span>
</template>

<script lang="ts" setup>
import type { DashboardLangChip } from '~/core/types/DashboardLangChips'
import type { ComputedRef, PropType } from 'vue'
import type { DashboardLangChipsProps } from '~/core/types/DashboardLangChips'
import { computed } from 'vue'

const props: DashboardLangChipsProps = defineProps({
  english: {
    type: Boolean as PropType<boolean | null>,
    default: null,
  },
  spanish: {
    type: Boolean as PropType<boolean | null>,
    default: null,
  },
})

const languages: ComputedRef<DashboardLangChip[]> = computed((): DashboardLangChip[] => [
  { code: 'FR', available: true },
  { code: 'EN', available: props.english },
  { code: 'ES', available: props.spanish },
])

const languagesScreenReaderLabel: ComputedRef<string> = computed((): string => {
  const available: string[] = languages.value
    .filter((lang: DashboardLangChip): boolean => lang.available === true)
    .map((lang: DashboardLangChip): string => lang.code)
  return `Langues en ligne : ${available.join(', ')}`
})
</script>
