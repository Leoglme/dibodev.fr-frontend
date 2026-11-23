<template>
  <span
    class="text-muted cursor-help text-xs font-normal underline decoration-dotted underline-offset-2"
    tabindex="0"
    :data-tip="props.note"
  >
    recalculé<span class="sr-only"> : {{ props.note }}</span>
  </span>
</template>

<script lang="ts" setup>
import type { DashboardRecalculatedMentionProps } from '~/core/types/DashboardRecalculatedMention'

/** Discreet mark next to a figure recomputed after the review; the reason shows in a tooltip. */
const props: DashboardRecalculatedMentionProps = defineProps({
  note: {
    type: String,
    required: true,
  },
})
</script>
