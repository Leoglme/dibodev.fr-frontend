<template>
  <section :id="props.anchorId" class="scroll-mt-24 px-6 py-20 sm:px-8 lg:py-28" :class="toneClass" data-aos="fade-up">
    <div class="max-w-site mx-auto grid w-full gap-12 lg:gap-14">
      <DibodevSectionHeading :eyebrow="props.eyebrow" :title="props.title" :intro="props.intro" />

      <ul
        class="grid gap-5 lg:gap-6"
        :class="{ 'sm:grid-cols-2': props.examples.length > 1, 'lg:grid-cols-3': props.examples.length > 2 }"
      >
        <li
          v-for="example in props.examples"
          :key="example.key"
          class="group hover:border-primary/45 focus-within:border-primary/45 flex h-full flex-col overflow-hidden rounded-xl border border-gray-300 transition-[border-color,box-shadow] duration-200 focus-within:shadow-[0_14px_36px_rgba(111,95,224,0.1)] hover:shadow-[0_14px_36px_rgba(111,95,224,0.1)]"
          :class="[cardClass, { 'md:flex-row': isSingleExample }]"
        >
          <a
            :href="example.liveUrl"
            target="_blank"
            rel="noopener"
            class="block overflow-hidden border-b border-gray-300 bg-white"
            :class="{ 'md:w-3/5 md:shrink-0 md:border-r md:border-b-0': isSingleExample }"
            tabindex="-1"
            aria-hidden="true"
            @click="trackExampleOpened(example.key)"
          >
            <img
              :src="example.imageSrc"
              :alt="example.imageAlt"
              width="1200"
              height="750"
              loading="lazy"
              decoding="async"
              class="aspect-[16/10] w-full object-cover object-top transition-transform duration-300 group-hover:scale-[1.02] motion-reduce:transition-none"
            />
          </a>
          <div class="flex flex-1 flex-col gap-3 p-6 sm:p-7" :class="{ 'md:justify-center': isSingleExample }">
            <h3
              class="leading-snug font-medium text-gray-100"
              :class="isSingleExample ? 'text-xl sm:text-2xl' : 'text-lg'"
            >
              {{ example.name }}
            </h3>
            <p class="text-[15px] leading-6 text-gray-200">{{ example.description }}</p>
            <a
              :href="example.liveUrl"
              target="_blank"
              rel="noopener"
              class="text-primary hover:text-primary-dark tap-area inline-flex w-fit items-center gap-1.5 pt-1 text-[15px] font-medium transition-colors"
              :class="{ 'mt-auto': !isSingleExample }"
              @click="trackExampleOpened(example.key)"
            >
              {{ props.liveLinkLabel }}
              <DibodevIcon name="ExternalLink" mode="stroke" :width="16" :height="16" aria-hidden="true" />
            </a>
            <DibodevButton
              v-if="isSingleExample"
              :to="props.ctaTo"
              size="lg"
              class="mt-3 w-full sm:w-fit"
              @click="trackCtaClicked"
            >
              {{ props.ctaLabel }}
            </DibodevButton>
          </div>
        </li>
      </ul>

      <div v-if="!isSingleExample" class="flex justify-center">
        <DibodevButton :to="props.ctaTo" size="lg" class="w-full sm:w-auto" @click="trackCtaClicked">
          {{ props.ctaLabel }}
        </DibodevButton>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import type { ComputedRef, PropType } from 'vue'
import type { DibodevSectionTone } from '~/core/types/DibodevSectionTone'
import type {
  DibodevWebsiteExample,
  DibodevWebsiteExamplesSectionProps,
} from '~/core/types/DibodevWebsiteExamplesSection'
import { computed } from 'vue'
import DibodevButton from '~/components/core/DibodevButton.vue'
import DibodevSectionHeading from '~/components/sections/DibodevSectionHeading.vue'
import DibodevIcon from '~/components/ui/DibodevIcon.vue'
import { useTracking } from '~/composables/useTracking'
import { SECTION_TONE_CARD_CLASSES, SECTION_TONE_CLASSES } from '~/core/constants/sectionTone'
import { TRACKING_EVENTS } from '~/core/constants/trackingEvents'

/**
 * Example websites shown as captures, each opening where it runs, and a button towards the page's own tool (inside the card when there is one example).
 */
const props: DibodevWebsiteExamplesSectionProps = defineProps({
  anchorId: {
    type: String as PropType<string>,
    default: 'examples',
  },
  eyebrow: {
    type: String as PropType<string>,
    default: '',
  },
  title: {
    type: String as PropType<string>,
    required: true,
  },
  intro: {
    type: String as PropType<string>,
    default: '',
  },
  examples: {
    type: Array as PropType<DibodevWebsiteExample[]>,
    required: true,
  },
  liveLinkLabel: {
    type: String as PropType<string>,
    required: true,
  },
  ctaLabel: {
    type: String as PropType<string>,
    required: true,
  },
  ctaTo: {
    type: String as PropType<string>,
    required: true,
  },
  tone: {
    type: String as PropType<DibodevSectionTone>,
    default: 'offWhite',
  },
  trackingLocation: {
    type: String as PropType<string>,
    required: true,
  },
})

const { track } = useTracking()

/* COMPUTED */
const toneClass: ComputedRef<string> = computed((): string => SECTION_TONE_CLASSES[props.tone])
const cardClass: ComputedRef<string> = computed((): string => SECTION_TONE_CARD_CLASSES[props.tone])
const isSingleExample: ComputedRef<boolean> = computed((): boolean => props.examples.length === 1)

/* METHODS */
/**
 * Sends the click on the button towards the page's own tool.
 * @returns {void}
 */
function trackCtaClicked(): void {
  track(TRACKING_EVENTS.ctaProjectDiscussion, { location: props.trackingLocation })
}

/**
 * Sends the opening of an example in a new tab.
 * @param {string} exampleKey - The key of the example opened.
 * @returns {void}
 */
function trackExampleOpened(exampleKey: string): void {
  track(TRACKING_EVENTS.siteExampleOpened, { example: exampleKey, location: props.trackingLocation })
}
</script>
