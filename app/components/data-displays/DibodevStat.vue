<template>
  <div class="grid gap-2 text-gray-100 sm:gap-3">
    <h5 class="text-center text-[40px] font-medium sm:text-[56px]">
      {{ props.value }}
    </h5>
    <p class="text-center text-sm font-normal sm:text-base">
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
