<template>
  <section :id="props.anchorId" class="scroll-mt-24 px-6 py-20 sm:px-8 lg:py-28" :class="toneClass" data-aos="fade-up">
    <div
      class="max-w-site mx-auto grid w-full items-start gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,26rem)] lg:gap-16"
    >
      <div class="grid gap-6">
        <DibodevSectionHeading :eyebrow="props.eyebrow" :title="props.title" :intro="props.description" align="left" />
        <ul class="grid gap-3">
          <li
            v-for="item in props.items"
            :key="item"
            class="flex items-start gap-3 text-[15px] leading-6 text-gray-200"
          >
            <span
              class="text-primary-dark mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full"
              :class="checkBadgeClass"
              aria-hidden="true"
            >
              <DibodevIcon name="Check" mode="stroke" :width="14" :height="14" />
            </span>
            <span>{{ item }}</span>
          </li>
        </ul>
      </div>

      <div class="grid gap-4 rounded-2xl border border-gray-300 p-6 sm:p-7" :class="cardClass">
        <a
          v-for="(download, index) in props.downloads"
          :key="download.href"
          :href="download.href"
          download
          class="focus-visible:ring-primary flex items-center gap-4 rounded-lg border px-5 py-3.5 transition duration-150 ease-in-out focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
          :class="index === 0 ? PRIMARY_DOWNLOAD_CLASSES : SECONDARY_DOWNLOAD_CLASSES"
          @click="onDownloadClick(download)"
        >
          <DibodevIcon name="Download" mode="stroke" :width="20" :height="20" class="shrink-0" aria-hidden="true" />
          <span class="grid gap-0.5">
            <span class="text-[15px] leading-6 font-medium">{{ download.label }}</span>
            <span class="text-xs leading-5 opacity-80">{{ download.format }}</span>
          </span>
        </a>
        <p class="text-muted text-sm leading-6">{{ props.footnote }}</p>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import type { ComputedRef, PropType } from 'vue'
import type {
  DibodevFreeTemplateDownload,
  DibodevFreeTemplateSectionProps,
} from '~/core/types/DibodevFreeTemplateSection'
import type { DibodevSectionTone } from '~/core/types/DibodevSectionTone'
import { computed } from 'vue'
import DibodevSectionHeading from '~/components/sections/DibodevSectionHeading.vue'
import DibodevIcon from '~/components/ui/DibodevIcon.vue'
import { useTracking } from '~/composables/useTracking'
import { SECTION_TONE_CARD_CLASSES, SECTION_TONE_CLASSES } from '~/core/constants/sectionTone'
import { TRACKING_EVENTS } from '~/core/constants/trackingEvents'

/** The first file is the main one (violet button), the others are outlined. */
const PRIMARY_DOWNLOAD_CLASSES: string = 'bg-primary hover:bg-primary-dark border-transparent text-white'
const SECONDARY_DOWNLOAD_CLASSES: string = 'border-gray-400 bg-transparent text-gray-100 hover:bg-gray-800'

/**
 * Free documents offered on a trade tool page (quote, repair order, intervention slip…): what they contain,
 * and one download button per file, each click sent to PostHog.
 */
const props: DibodevFreeTemplateSectionProps = defineProps({
  anchorId: {
    type: String as PropType<string>,
    default: 'template',
  },
  eyebrow: {
    type: String as PropType<string>,
    default: '',
  },
  title: {
    type: String as PropType<string>,
    required: true,
  },
  description: {
    type: String as PropType<string>,
    default: '',
  },
  items: {
    type: Array as PropType<string[]>,
    required: true,
  },
  downloads: {
    type: Array as PropType<DibodevFreeTemplateDownload[]>,
    required: true,
  },
  footnote: {
    type: String as PropType<string>,
    default: '',
  },
  tone: {
    type: String as PropType<DibodevSectionTone>,
    default: 'tint',
  },
  trackingLocation: {
    type: String as PropType<string>,
    required: true,
  },
})

const { track } = useTracking()

const toneClass: ComputedRef<string> = computed((): string => SECTION_TONE_CLASSES[props.tone])
const cardClass: ComputedRef<string> = computed((): string => SECTION_TONE_CARD_CLASSES[props.tone])
/** The check badges contrast with the band: white on the tinted band, tinted on a white band. */
const checkBadgeClass: ComputedRef<string> = computed((): string =>
  props.tone === 'white' ? 'bg-accent-tint' : 'bg-white',
)

/**
 * Sends the download event of a file of the template.
 * @param {DibodevFreeTemplateDownload} download - The file clicked.
 * @returns {void}
 */
function onDownloadClick(download: DibodevFreeTemplateDownload): void {
  track(TRACKING_EVENTS.fileDownloadClicked, { file: download.href, location: props.trackingLocation })
}
</script>
