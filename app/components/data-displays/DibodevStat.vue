<template>
  <div class="grid gap-3 text-gray-100">
    <h5 class="text-center text-[56px] font-medium">
      {{ props.value }}
    </h5>
    <p class="text-center text-base font-normal">
      {{ props.label }}
    </p>
  </div>
</template>

<script lang="ts" setup>
import type { DibodevStatItemProps } from '~/core/types/DibodevStat'

const props: DibodevStatItemProps = defineProps({
  value: {
    type: String,
    required: true,
  },
  label: {
    type: String,
    required: true,
  },
})
</script>
