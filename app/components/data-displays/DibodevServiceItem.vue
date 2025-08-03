<template>
  <div class="grid gap-6">
    <div class="flex h-20 w-20 items-center justify-center rounded-2xl p-4" :style="{ backgroundColor: props.color }">
      <slot name="icon" />
    </div>

    <div class="grid gap-4">
      <h4 class="text-center text-base font-medium text-gray-100">
        {{ props.title }}
      </h4>

      <p class="text-center text-sm font-normal text-gray-200">
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
