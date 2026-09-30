<template>
  <span
    class="text-xs font-medium tabular-nums"
    :class="{
      'text-(--dash-red)': props.length > props.max,
      'text-(--dash-green)': props.length >= props.min && props.length <= props.max,
      'text-muted': props.length < props.min,
    }"
    :title="`Recommandé : ${props.min} à ${props.max} caractères`"
  >
    {{ props.length }} / {{ props.max }}
  </span>
</template>

<script lang="ts" setup>
import type { DashboardCounterProps } from '~/core/types/DashboardCounter'

const props: DashboardCounterProps = defineProps({
  length: {
    type: Number,
    required: true,
  },
  min: {
    type: Number,
    required: true,
  },
  max: {
    type: Number,
    required: true,
  },
})
</script>
