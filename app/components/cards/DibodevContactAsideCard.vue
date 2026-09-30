<template>
  <div class="bg-accent-tint grid gap-4 rounded-lg p-6">
    <h3 class="text-lg leading-snug font-medium text-gray-100">{{ props.title }}</h3>
    <p class="text-[15px] leading-6 text-gray-200">{{ props.description }}</p>
    <DibodevButton
      :to="localePath('/contact')"
      class="w-full"
      @click="track(TRACKING_EVENTS.ctaProjectDiscussion, { location: props.trackingLocation })"
    >
      {{ props.buttonLabel }}
    </DibodevButton>
  </div>
</template>

<script setup lang="ts">
import type { PropType } from 'vue'
import type { DibodevContactAsideCardProps } from '~/core/types/DibodevContactAsideCard'
import DibodevButton from '~/components/core/DibodevButton.vue'
import { useTracking } from '~/composables/useTracking'
import { TRACKING_EVENTS } from '~/core/constants/trackingEvents'

/**
 * Small lavender call-to-action card placed in a sidebar (project page, article, listing intro).
 */
const props: DibodevContactAsideCardProps = defineProps({
  title: {
    type: String as PropType<string>,
    required: true,
  },
  description: {
    type: String as PropType<string>,
    required: true,
  },
  buttonLabel: {
    type: String as PropType<string>,
    required: true,
  },
  trackingLocation: {
    type: String as PropType<string>,
    required: true,
  },
})

const localePath = useLocalePath()
const { track } = useTracking()
</script>
