<template>
  <section id="pricing" class="scroll-mt-24 px-6 py-20 sm:px-8 lg:py-28" :class="toneClass" data-aos="fade-up">
    <div class="max-w-site mx-auto grid w-full gap-12 lg:gap-14">
      <DibodevSectionHeading :eyebrow="props.eyebrow" :title="props.title" :intro="props.intro" align="center" />

      <ul class="grid gap-5 lg:gap-6" :class="offersGridClass">
        <li
          v-for="offer in props.offers"
          :key="offer.title"
          class="relative grid content-start gap-3 rounded-xl border bg-white p-6 sm:p-7"
          :class="offer.isHighlighted ? 'border-primary shadow-[0_18px_40px_rgba(111,95,224,0.12)]' : 'border-gray-300'"
        >
          <span
            v-if="offer.isHighlighted && props.highlightLabel"
            class="bg-primary w-fit rounded-md px-2.5 py-1 text-xs font-medium text-white"
          >
            {{ props.highlightLabel }}
          </span>
          <h3 class="text-base font-medium text-gray-200">{{ offer.title }}</h3>
          <p class="text-2xl font-medium text-gray-100 sm:text-[26px]">{{ offer.price }}</p>
          <p class="text-[15px] leading-6 text-gray-200">{{ offer.description }}</p>
        </li>
      </ul>

      <ul
        v-if="props.notes.length > 0"
        class="grid gap-5 rounded-xl px-6 py-6 sm:grid-cols-[repeat(auto-fit,minmax(16rem,1fr))] sm:gap-8 sm:px-8"
        :class="notesClass"
      >
        <li v-for="note in props.notes" :key="note" class="flex items-start gap-3">
          <DibodevIcon
            name="CheckCircle"
            mode="stroke"
            :width="20"
            :height="20"
            class="text-primary mt-0.5 shrink-0"
            aria-hidden="true"
          />
          <p class="text-[15px] leading-6 text-gray-200">{{ note }}</p>
        </li>
      </ul>

      <div v-if="props.ctaLabel" class="flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-6">
        <DibodevButton
          :to="localePath('/contact')"
          size="lg"
          class="w-full sm:w-auto"
          @click="track(TRACKING_EVENTS.ctaProjectDiscussion, { location: props.ctaLocation })"
        >
          {{ props.ctaLabel }}
        </DibodevButton>
        <DibodevLink v-if="props.secondaryLink && props.secondaryLink.to" :link="props.secondaryLink.to">
          <span>{{ props.secondaryLink.text }}</span>
          <DibodevIcon name="ArrowRight" mode="stroke" :width="18" :height="18" aria-hidden="true" />
        </DibodevLink>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import type { ComputedRef, PropType } from 'vue'
import type { DibodevLandingSecondaryCta } from '~/core/types/DibodevLandingSection'
import type { DibodevPricingOffer, DibodevPricingSectionProps } from '~/core/types/DibodevPricingSection'
import type { DibodevSectionTone } from '~/core/types/DibodevSectionTone'
import DibodevSectionHeading from '~/components/sections/DibodevSectionHeading.vue'
import DibodevButton from '~/components/core/DibodevButton.vue'
import DibodevLink from '~/components/core/DibodevLink.vue'
import DibodevIcon from '~/components/ui/DibodevIcon.vue'
import { SECTION_TONE_CLASSES } from '~/core/constants/sectionTone'
import { useTracking } from '~/composables/useTracking'
import { TRACKING_EVENTS } from '~/core/constants/trackingEvents'

/** Responsive grid per number of offers (Tailwind needs the full class names). */
const OFFERS_GRID_CLASSES: Record<number, string> = {
  2: 'sm:grid-cols-2',
  3: 'sm:grid-cols-2 lg:grid-cols-3',
  4: 'sm:grid-cols-2 xl:grid-cols-4',
}

/**
 * Pricing cards, a full-width row of small print with check marks and a centred call to action.
 */
const props: DibodevPricingSectionProps = defineProps({
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
  offers: {
    type: Array as PropType<DibodevPricingOffer[]>,
    required: true,
  },
  notes: {
    type: Array as PropType<string[]>,
    default: (): string[] => [],
  },
  ctaLabel: {
    type: String as PropType<string>,
    default: '',
  },
  ctaLocation: {
    type: String as PropType<string>,
    default: 'pricing',
  },
  highlightLabel: {
    type: String as PropType<string>,
    default: '',
  },
  tone: {
    type: String as PropType<DibodevSectionTone>,
    default: 'white',
  },
  secondaryLink: {
    type: Object as PropType<DibodevLandingSecondaryCta | null>,
    default: null,
  },
})

const localePath = useLocalePath()
const { track } = useTracking()

const offersGridClass: ComputedRef<string> = computed(
  (): string => OFFERS_GRID_CLASSES[props.offers.length] ?? OFFERS_GRID_CLASSES[4] ?? '',
)
const toneClass: ComputedRef<string> = computed((): string => SECTION_TONE_CLASSES[props.tone])
/** The notes row contrasts with the band: tinted on white, white on a tinted or grey band. */
const notesClass: ComputedRef<string> = computed((): string =>
  props.tone === 'white' ? 'bg-surface-tint' : 'border border-gray-300 bg-white',
)
</script>
