<template>
  <section :id="props.anchorId" class="px-6 py-20 sm:px-8 lg:py-28" :class="toneClass" data-aos="fade-up">
    <div class="max-w-site mx-auto grid w-full gap-12 lg:gap-14">
      <DibodevSectionHeading :eyebrow="props.eyebrow" :title="props.title" :intro="props.intro" align="center" />

      <ul class="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
        <li
          v-for="(card, index) in props.cards"
          :key="card.title"
          class="grid content-start gap-3 rounded-xl border border-gray-300 p-6 sm:p-7"
          :class="cardClass"
        >
          <span
            class="flex h-11 w-11 items-center justify-center rounded-xl"
            :style="{ backgroundColor: getAccentPalette(index).background, color: getAccentPalette(index).color }"
            aria-hidden="true"
          >
            <DibodevIcon :name="card.icon" mode="stroke" :width="22" :height="22" />
          </span>
          <h3 class="text-lg leading-snug font-medium text-gray-100"><DibodevHyphenSafeText :text="card.title" /></h3>
          <p class="text-[15px] leading-6 text-gray-200">{{ card.description }}</p>
        </li>
      </ul>
    </div>
  </section>
</template>

<script lang="ts" setup>
import type { ComputedRef, PropType } from 'vue'
import type { DibodevFeatureCard, DibodevFeatureCardsSectionProps } from '~/core/types/DibodevFeatureCardsSection'
import type { DibodevSectionTone } from '~/core/types/DibodevSectionTone'
import { computed } from 'vue'
import DibodevSectionHeading from '~/components/sections/DibodevSectionHeading.vue'
import DibodevHyphenSafeText from '~/components/ui/DibodevHyphenSafeText.vue'
import DibodevIcon from '~/components/ui/DibodevIcon.vue'
import { getAccentPalette } from '~/core/constants/accentPalettes'
import { SECTION_TONE_CARD_CLASSES, SECTION_TONE_CLASSES } from '~/core/constants/sectionTone'

/**
 * Centred heading over a grid of cards, each with an icon on a pastel tile, a title and a sentence.
 */
const props: DibodevFeatureCardsSectionProps = defineProps({
  anchorId: {
    type: String as PropType<string>,
    default: 'features',
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
  cards: {
    type: Array as PropType<DibodevFeatureCard[]>,
    required: true,
  },
  tone: {
    type: String as PropType<DibodevSectionTone>,
    default: 'white',
  },
})

const toneClass: ComputedRef<string> = computed((): string => SECTION_TONE_CLASSES[props.tone])
const cardClass: ComputedRef<string> = computed((): string => SECTION_TONE_CARD_CLASSES[props.tone])
</script>
