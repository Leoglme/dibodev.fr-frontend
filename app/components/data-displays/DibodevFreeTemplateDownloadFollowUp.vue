<template>
  <div class="grid gap-4 border-t border-gray-300 pt-5">
    <div class="grid gap-1" role="status">
      <p class="text-[15px] leading-6 font-medium text-gray-100">{{ wording.title }}</p>
      <p class="text-[15px] leading-6 text-gray-200">{{ wording.question }}</p>
    </div>
    <div class="flex flex-wrap gap-2">
      <button
        v-for="volume in FREE_TEMPLATE_MONTHLY_VOLUMES"
        :key="volume"
        type="button"
        class="focus-visible:ring-primary min-h-11 rounded-lg border px-4 py-2 text-[15px] leading-6 font-medium transition duration-150 ease-in-out focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
        :class="volume === selectedVolume ? SELECTED_VOLUME_CLASSES : UNSELECTED_VOLUME_CLASSES"
        :aria-pressed="volume === selectedVolume"
        @click="onVolumeSelected(volume)"
      >
        {{ wording.volumeLabels[volume] }}
      </button>
    </div>
    <div v-if="selectedAdvice" class="grid gap-3" aria-live="polite">
      <p class="text-[15px] leading-6 text-gray-200">
        <span class="font-medium text-gray-100">{{ selectedAdvice.title }}</span> {{ selectedAdvice.text }}
      </p>
      <NuxtLink
        v-if="selectedVolume === 'low'"
        :to="localePath({ name: FREE_TEMPLATES_HUB_ROUTE_NAME })"
        class="text-primary hover:text-primary-dark w-fit text-[15px] leading-6 font-medium transition-colors"
        @click="
          track(TRACKING_EVENTS.toolTeaserClicked, {
            tool: FREE_TEMPLATES_HUB_ROUTE_NAME,
            location: FREE_TEMPLATE_DOWNLOAD_FOLLOW_UP_TRACKING_LOCATION,
          })
        "
      >
        {{ wording.otherTemplatesLinkLabel }}&nbsp;<DibodevIcon
          name="ArrowRight"
          mode="stroke"
          :width="16"
          :height="16"
          class="align-[-3px]"
          aria-hidden="true"
        />
      </NuxtLink>
      <DibodevButton
        v-if="selectedVolume === 'high'"
        :to="localePath('/contact')"
        class="w-full text-center whitespace-normal! sm:w-fit"
        @click="
          track(TRACKING_EVENTS.ctaProjectDiscussion, { location: FREE_TEMPLATE_DOWNLOAD_FOLLOW_UP_TRACKING_LOCATION })
        "
      >
        {{ wording.contactButtonLabel }}
      </DibodevButton>
      <DibodevToolTeaser
        v-if="selectedVolume === 'medium' || selectedVolume === 'high'"
        :teaser="props.teaser"
        :trackingLocation="FREE_TEMPLATE_DOWNLOAD_FOLLOW_UP_TRACKING_LOCATION"
        tone="tint"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { ComputedRef, PropType, Ref } from 'vue'
import type { SupportedLocale } from '~/core/constants/categorySlugs'
import type {
  DibodevFreeTemplateDownloadFollowUpProps,
  DibodevFreeTemplateDownloadFollowUpWording,
  DibodevFreeTemplateMonthlyVolume,
  DibodevFreeTemplateVolumeAdvice,
} from '~/core/types/DibodevFreeTemplateDownloadFollowUp'
import type { DibodevToolTeaserContent } from '~/core/types/DibodevToolTeaser'
import { computed, onMounted, ref } from 'vue'
import DibodevButton from '~/components/core/DibodevButton.vue'
import DibodevToolTeaser from '~/components/data-displays/DibodevToolTeaser.vue'
import DibodevIcon from '~/components/ui/DibodevIcon.vue'
import { useTracking } from '~/composables/useTracking'
import {
  FREE_TEMPLATE_DOWNLOAD_FOLLOW_UP_TRACKING_LOCATION,
  FREE_TEMPLATE_DOWNLOAD_FOLLOW_UP_WORDING,
  FREE_TEMPLATE_MONTHLY_VOLUMES,
} from '~/core/constants/freeTemplates/downloadFollowUpWording'
import { FREE_TEMPLATES_HUB_ROUTE_NAME } from '~/core/constants/freeTemplates/freeTemplateCatalog'
import { TRACKING_EVENTS } from '~/core/constants/trackingEvents'

const SELECTED_VOLUME_CLASSES: string = 'border-primary bg-primary text-white'
const UNSELECTED_VOLUME_CLASSES: string = 'border-gray-400 bg-transparent text-gray-100 hover:bg-gray-800'

/** Question asked once a template file has been downloaded: the monthly volume answered decides the next step offered. */
const props: DibodevFreeTemplateDownloadFollowUpProps = defineProps({
  teaser: {
    type: Object as PropType<DibodevToolTeaserContent>,
    required: true,
  },
  downloadedFile: {
    type: String as PropType<string>,
    required: true,
  },
})

const { locale } = useI18n()
const localePath = useLocalePath()
const { track } = useTracking()

const selectedVolume: Ref<DibodevFreeTemplateMonthlyVolume | null> = ref(null)

const wording: ComputedRef<DibodevFreeTemplateDownloadFollowUpWording> = computed(
  (): DibodevFreeTemplateDownloadFollowUpWording =>
    FREE_TEMPLATE_DOWNLOAD_FOLLOW_UP_WORDING[locale.value as SupportedLocale] ??
    FREE_TEMPLATE_DOWNLOAD_FOLLOW_UP_WORDING.fr,
)

const selectedAdvice: ComputedRef<DibodevFreeTemplateVolumeAdvice | null> = computed(
  (): DibodevFreeTemplateVolumeAdvice | null =>
    selectedVolume.value ? wording.value.advices[selectedVolume.value] : null,
)

/**
 * Keeps the answer of the visitor and sends it to PostHog with the file downloaded.
 * @param {DibodevFreeTemplateMonthlyVolume} volume - The monthly volume chosen.
 * @returns {void}
 */
function onVolumeSelected(volume: DibodevFreeTemplateMonthlyVolume): void {
  if (volume === selectedVolume.value) {
    return
  }
  selectedVolume.value = volume
  track(TRACKING_EVENTS.freeTemplateFollowUpAnswered, { volume, file: props.downloadedFile })
}

onMounted((): void => {
  track(TRACKING_EVENTS.freeTemplateFollowUpShown, { file: props.downloadedFile })
})
</script>
