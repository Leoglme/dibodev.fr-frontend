<template>
  <DibodevCallout
    icon="CheckCircle"
    :emphasizedIntro="$t('toolTeaserList.emphasizedIntro')"
    :text="$t('toolTeaserList.text')"
    :tone="props.tone"
  >
    <ul class="grid gap-3 sm:gap-1.5">
      <li v-for="teaser in props.teasers" :key="teaser.toolId">
        <NuxtLink
          :to="localePath({ name: teaser.routeName })"
          class="text-primary hover:text-primary-dark inline-flex items-start gap-2 text-[15px] leading-6 font-medium transition-colors"
          @click="track(TRACKING_EVENTS.toolTeaserClicked, { tool: teaser.toolId, location: props.trackingLocation })"
        >
          <DibodevIcon
            :name="teaser.icon"
            mode="stroke"
            :width="16"
            :height="16"
            class="mt-1 shrink-0"
            aria-hidden="true"
          />
          {{ listLabelOf(teaser) }}
        </NuxtLink>
      </li>
    </ul>
  </DibodevCallout>
</template>

<script lang="ts" setup>
import type { PropType } from 'vue'
import type { SupportedLocale } from '~/core/constants/categorySlugs'
import type { DibodevCalloutTone } from '~/core/types/DibodevCallout'
import type { DibodevToolTeaserContent } from '~/core/types/DibodevToolTeaser'
import type { DibodevToolTeaserListProps } from '~/core/types/DibodevToolTeaserList'
import DibodevCallout from '~/components/data-displays/DibodevCallout.vue'
import DibodevIcon from '~/components/ui/DibodevIcon.vue'
import { useTracking } from '~/composables/useTracking'
import { TRACKING_EVENTS } from '~/core/constants/trackingEvents'

const props: DibodevToolTeaserListProps = defineProps({
  teasers: {
    type: Array as PropType<DibodevToolTeaserContent[]>,
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

/**
 * Short link text of a test in the current language; pages only pass teasers written in it (`useToolTeasers`).
 * @param {DibodevToolTeaserContent} teaser - The test.
 * @returns {string} The link text.
 */
function listLabelOf(teaser: DibodevToolTeaserContent): string {
  return teaser.wording[locale.value as SupportedLocale]?.listLabel ?? teaser.wording.fr?.listLabel ?? ''
}
</script>
