<template>
  <section :id="props.anchorId" class="px-6 py-20 sm:px-8 lg:py-28" :class="toneClass" data-aos="fade-up">
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
        <DibodevFreeTemplateDownloadLinks :downloads="props.downloads" :trackingLocation="props.trackingLocation" />
        <NuxtLink
          v-if="props.pageLinkLabel && props.pageLinkRouteName"
          :to="localePath({ name: props.pageLinkRouteName })"
          class="text-primary hover:text-primary-dark w-fit text-[15px] leading-6 font-medium transition-colors"
          @click="
            track(TRACKING_EVENTS.toolTeaserClicked, {
              tool: props.pageLinkRouteName,
              location: props.trackingLocation,
            })
          "
        >
          {{ props.pageLinkLabel }}&nbsp;<DibodevIcon
            name="ArrowRight"
            mode="stroke"
            :width="16"
            :height="16"
            class="align-[-3px]"
            aria-hidden="true"
          />
        </NuxtLink>
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
import DibodevFreeTemplateDownloadLinks from '~/components/data-displays/DibodevFreeTemplateDownloadLinks.vue'
import DibodevSectionHeading from '~/components/sections/DibodevSectionHeading.vue'
import DibodevIcon from '~/components/ui/DibodevIcon.vue'
import { useTracking } from '~/composables/useTracking'
import { SECTION_TONE_CARD_CLASSES, SECTION_TONE_CLASSES } from '~/core/constants/sectionTone'
import { TRACKING_EVENTS } from '~/core/constants/trackingEvents'

/**
 * Free documents offered on a trade tool page (quote, repair order, intervention slip…): what they contain,
 * one download button per file, and a link to the page of the template when it has one.
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
  pageLinkLabel: {
    type: String as PropType<string>,
    default: '',
  },
  pageLinkRouteName: {
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

const localePath = useLocalePath()
const { track } = useTracking()

const toneClass: ComputedRef<string> = computed((): string => SECTION_TONE_CLASSES[props.tone])
const cardClass: ComputedRef<string> = computed((): string => SECTION_TONE_CARD_CLASSES[props.tone])
/** The check badges contrast with the band: white on the tinted band, tinted on a white band. */
const checkBadgeClass: ComputedRef<string> = computed((): string =>
  props.tone === 'white' ? 'bg-accent-tint' : 'bg-white',
)
</script>
