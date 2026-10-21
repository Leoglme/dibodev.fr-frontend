<template>
  <DibodevCallout :icon="props.icon" :emphasizedIntro="props.emphasizedIntro" :text="props.text" :tone="props.tone">
    <NuxtLink
      :to="props.to"
      class="text-primary hover:text-primary-dark w-fit text-[15px] leading-6 font-medium transition-colors"
      @click="track(TRACKING_EVENTS.ctaProjectDiscussion, { location: props.trackingLocation })"
    >
      {{ props.linkLabel }}&nbsp;<DibodevIcon
        name="ArrowRight"
        mode="stroke"
        :width="16"
        :height="16"
        class="align-[-3px]"
        aria-hidden="true"
      />
    </NuxtLink>
  </DibodevCallout>
</template>

<script lang="ts" setup>
import type { PropType } from 'vue'
import type { RouteLocationRaw } from 'vue-router'
import type { DibodevCalloutTone } from '~/core/types/DibodevCallout'
import type { DibodevContactPromptProps } from '~/core/types/DibodevContactPrompt'
import DibodevCallout from '~/components/data-displays/DibodevCallout.vue'
import DibodevIcon from '~/components/ui/DibodevIcon.vue'
import { useTracking } from '~/composables/useTracking'
import { TRACKING_EVENTS } from '~/core/constants/trackingEvents'

/** A callout inviting the reader to write, placed inside an article after its introduction. */
const props: DibodevContactPromptProps = defineProps({
  icon: {
    type: String as PropType<string>,
    default: 'MessageCircle',
  },
  emphasizedIntro: {
    type: String as PropType<string>,
    required: true,
  },
  text: {
    type: String as PropType<string>,
    required: true,
  },
  linkLabel: {
    type: String as PropType<string>,
    required: true,
  },
  to: {
    type: [String, Object] as PropType<RouteLocationRaw>,
    required: true,
  },
  trackingLocation: {
    type: String as PropType<string>,
    required: true,
  },
  tone: {
    type: String as PropType<DibodevCalloutTone>,
    default: 'tint',
  },
})

const { track } = useTracking()
</script>
