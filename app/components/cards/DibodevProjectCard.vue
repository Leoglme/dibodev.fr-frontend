<template>
  <div class="grid gap-2 rounded-2xl bg-gray-400 p-3">
    <div class="flex items-center justify-center rounded-xl" :style="{ backgroundColor: props.secondaryColor }">
      <img class="h-48 w-full rounded-xl object-none" :src="props.logo" :alt="`${props.name} logo`" />
    </div>

    <h6 class="text-left text-xl font-medium">
      {{ props.name }}
    </h6>

    <span v-if="props.createdAt" class="text-left text-[10px] font-normal text-gray-200">
      {{ props.createdAt }}
    </span>

    <p class="text-left text-[10px] font-normal">
      {{ props.description }}
    </p>

    <DibodevButton icon="ArrowRight" iconPosition="right" :backgroundColor="props.primaryColor" class="w-full">
      En savoir plus
    </DibodevButton>
  </div>
</template>

<script lang="ts" setup>
import type { DibodevProjectCardProps } from '~/core/types/DibodevProjectCard'
import DibodevButton from '~/components/core/DibodevButton.vue'

const props: DibodevProjectCardProps = defineProps({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  createdAt: {
    type: String,
    default: null,
  },
  logo: {
    type: String,
    required: true,
  },
  primaryColor: {
    type: String,
    default: '#8472F3',
  },
  secondaryColor: {
    type: String,
    default: '#101623',
  },
})
</script>
