<template>
  <section class="min-w-0 rounded-xl border border-gray-300 bg-white">
    <header
      v-if="props.title || $slots.actions"
      class="flex flex-wrap items-start gap-3 px-4 pt-4 sm:px-5 sm:pt-[18px]"
      :class="props.divided ? 'border-b border-(--dash-line-soft) pb-3.5' : ''"
    >
      <div v-if="props.title" class="min-w-0 flex-1">
        <h2 class="text-[15.5px] font-medium tracking-[-0.005em] text-gray-100">{{ props.title }}</h2>
        <p v-if="props.description" class="text-muted mt-0.5 text-[13px]">{{ props.description }}</p>
      </div>
      <div v-if="$slots.actions" class="ml-auto flex shrink-0 items-center gap-2">
        <slot name="actions" />
      </div>
    </header>
    <slot />
    <footer
      v-if="$slots.footer"
      class="text-muted flex flex-wrap items-center justify-between gap-3 border-t border-(--dash-line-soft) px-4 py-3 text-[13px] sm:px-5"
    >
      <slot name="footer" />
    </footer>
  </section>
</template>

<script lang="ts" setup>
import type { PropType } from 'vue'
import type { DashboardCardProps } from '~/core/types/DashboardCard'

const props: DashboardCardProps = defineProps({
  title: {
    type: String as PropType<string | null>,
    default: null,
  },
  description: {
    type: String as PropType<string | null>,
    default: null,
  },
  divided: {
    type: Boolean,
    default: false,
  },
})
</script>
