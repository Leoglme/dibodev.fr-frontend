<template>
  <div ref="followUpElement" class="border-accent-tint bg-surface-tint grid gap-5 rounded-xl border p-5 sm:p-6">
    <div class="grid gap-3" role="status">
      <p class="text-primary-dark flex items-center gap-2 text-sm leading-5 font-medium">
        <span class="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-white" aria-hidden="true">
          <DibodevIcon name="Check" mode="stroke" :width="16" :height="16" />
        </span>
        {{ wording.title }}
      </p>
      <div class="grid gap-1">
        <p class="text-lg leading-7 font-medium text-gray-100 sm:text-xl">{{ wording.question }}</p>
        <p class="text-[15px] leading-6 text-gray-200">{{ wording.hint }}</p>
      </div>
    </div>
    <div class="grid gap-2 sm:grid-cols-3">
      <button
        v-for="volume in FREE_TEMPLATE_MONTHLY_VOLUMES"
        :key="volume"
        type="button"
        class="focus-visible:ring-primary min-h-12 cursor-pointer rounded-lg border px-4 py-3 text-base leading-6 font-medium transition duration-150 ease-in-out focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
        :class="volume === selectedVolume ? SELECTED_VOLUME_CLASSES : UNSELECTED_VOLUME_CLASSES"
        :aria-pressed="volume === selectedVolume"
        @click="onVolumeSelected(volume)"
      >
        {{ wording.volumeLabels[volume] }}
      </button>
    </div>
    <div v-if="selectedAdvice" class="grid gap-4 rounded-lg bg-white p-4 sm:p-5" aria-live="polite">
      <div class="grid gap-1">
        <p class="text-base leading-6 font-medium text-gray-100">{{ selectedAdvice.title }}</p>
        <p class="text-[15px] leading-6 text-gray-200">{{ selectedAdvice.text }}</p>
      </div>
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
const UNSELECTED_VOLUME_CLASSES: string = 'border-gray-400 bg-white text-gray-100 hover:border-primary'

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

const followUpElement: Ref<HTMLElement | null> = ref(null)
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
  followUpElement.value?.scrollIntoView({ behavior: 'smooth', block: 'center' })
  track(TRACKING_EVENTS.freeTemplateFollowUpShown, { file: props.downloadedFile })
})
</script>
