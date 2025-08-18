<template>
  <div class="flex flex-row gap-6">
    <div class="flex h-20 w-20 items-center justify-center rounded-2xl p-6" :style="{ backgroundColor: props.color }">
      <slot name="icon" />
    </div>

    <div class="grid gap-3 self-baseline">
      <h4 class="text-left text-base font-medium text-gray-100">
        {{ props.title }}
      </h4>

      <p class="text-left text-sm leading-7 font-normal text-gray-200">
        {{ props.description }}
      </p>
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { DibodevServiceItemProps } from '~/core/types/DibodevServiceItem'

const props: DibodevServiceItemProps = defineProps({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  color: {
    type: String,
    default: '#F1E8FF',
  },
})
</script>
