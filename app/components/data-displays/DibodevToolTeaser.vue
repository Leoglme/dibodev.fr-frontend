<template>
  <DibodevCallout
    :icon="props.teaser.icon"
    :emphasizedIntro="wording.emphasizedIntro"
    :text="wording.text"
    :tone="props.tone"
  >
    <NuxtLink
      :to="localePath({ name: props.teaser.routeName })"
      class="text-primary hover:text-primary-dark w-fit text-[15px] leading-6 font-medium transition-colors"
      @click="track(TRACKING_EVENTS.toolTeaserClicked, { tool: props.teaser.toolId, location: props.trackingLocation })"
    >
      {{ wording.linkLabel }}
      <DibodevIcon
        name="ArrowRight"
        mode="stroke"
        :width="16"
        :height="16"
        class="ml-1 align-[-3px]"
        aria-hidden="true"
      />
    </NuxtLink>
  </DibodevCallout>
</template>

<script lang="ts" setup>
import type { ComputedRef, PropType } from 'vue'
import type { SupportedLocale } from '~/core/constants/categorySlugs'
import type { DibodevCalloutTone } from '~/core/types/DibodevCallout'
import type {
  DibodevToolTeaserContent,
  DibodevToolTeaserProps,
  DibodevToolTeaserWording,
} from '~/core/types/DibodevToolTeaser'
import { computed } from 'vue'
import DibodevCallout from '~/components/data-displays/DibodevCallout.vue'
import DibodevIcon from '~/components/ui/DibodevIcon.vue'
import { useTracking } from '~/composables/useTracking'
import { TRACKING_EVENTS } from '~/core/constants/trackingEvents'

const props: DibodevToolTeaserProps = defineProps({
  teaser: {
    type: Object as PropType<DibodevToolTeaserContent>,
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

const { locale } = useI18n()
const localePath = useLocalePath()
const { track } = useTracking()

/** Texts in the current language; pages only pass teasers written in it (`useToolTeasers`), French is a safety net. */
const wording: ComputedRef<DibodevToolTeaserWording> = computed(
  (): DibodevToolTeaserWording =>
    props.teaser.wording[locale.value as SupportedLocale] ??
    props.teaser.wording.fr ?? { emphasizedIntro: '', text: '', linkLabel: '', listLabel: '' },
)
</script>
