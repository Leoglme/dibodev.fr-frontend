<template>
  <section id="method" class="scroll-mt-24 px-6 py-20 sm:px-8 lg:py-28" :class="toneClass" data-aos="fade-up">
    <div class="max-w-site mx-auto grid w-full gap-12 lg:gap-16">
      <DibodevSectionHeading :eyebrow="props.eyebrow" :title="props.title" :intro="props.intro" />

      <ol class="method-steps grid gap-13 pt-5.5 md:grid-cols-2 md:gap-6 md:pt-0 xl:grid-cols-4">
        <li
          v-for="(step, index) in props.steps"
          :key="step.title"
          class="method-step relative md:grid md:grid-cols-1 md:grid-rows-[auto_minmax(0,1fr)] md:content-start md:gap-x-5 md:gap-y-4"
        >
          <span
            class="method-step__number absolute -top-5.5 left-5 z-20 flex h-11 w-11 items-center justify-center rounded-full text-base font-medium ring-4 ring-white md:relative md:top-auto md:left-auto md:z-10 md:h-14 md:w-14 md:text-lg"
            :style="{
              backgroundColor: getStepPalette(index).background,
              color: getStepPalette(index).color,
            }"
            aria-hidden="true"
          >
            {{ formatStepNumber(index + 1) }}
          </span>
          <div
            class="relative z-1 grid content-start gap-3 rounded-xl border border-gray-300 px-5 pt-8.5 pb-5 md:p-6"
            :class="cardClass"
          >
            <span
              class="text-xs font-medium tracking-[0.08em] uppercase"
              :style="{ color: getStepPalette(index).color }"
            >
              {{ step.label }}
            </span>
            <h3 class="text-lg leading-snug font-medium text-gray-100">{{ step.title }}</h3>
            <p class="text-base leading-[26px] text-gray-200 md:text-[15px] md:leading-6">{{ step.description }}</p>
          </div>
        </li>
      </ol>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import type { ComputedRef, PropType } from 'vue'
import type { DibodevAccentPalette } from '~/core/types/DibodevAccentPalette'
import type { DibodevMethodSectionProps, DibodevMethodStep } from '~/core/types/DibodevMethodSection'
import type { DibodevSectionTone } from '~/core/types/DibodevSectionTone'
import DibodevSectionHeading from '~/components/sections/DibodevSectionHeading.vue'
import { getAccentPalette } from '~/core/constants/accentPalettes'
import { SECTION_TONE_CARD_CLASSES, SECTION_TONE_CLASSES } from '~/core/constants/sectionTone'

/**
 * Timeline of the working method (call, quote, build, support): numbered coloured circles linked by a line,
 * horizontal on large screens and vertical on small ones. Reused on the home and business software pages.
 */
const props: DibodevMethodSectionProps = defineProps({
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
  steps: {
    type: Array as PropType<DibodevMethodStep[]>,
    required: true,
  },
  tone: {
    type: String as PropType<DibodevSectionTone>,
    default: 'white',
  },
})

/* COMPUTED */
const toneClass: ComputedRef<string> = computed((): string => SECTION_TONE_CLASSES[props.tone])
const cardClass: ComputedRef<string> = computed((): string =>
  props.tone === 'white' ? 'bg-white' : SECTION_TONE_CARD_CLASSES[props.tone],
)

/* METHODS */
/**
 * Formats a step number on two digits ("01", "02"…).
 * @param {number} stepNumber - The 1-based step number.
 * @returns {string} The zero-padded number.
 */
function formatStepNumber(stepNumber: number): string {
  return stepNumber < 10 ? `0${stepNumber}` : String(stepNumber)
}

/**
 * Accent palette of a step (violet, cyan, green, pink in order).
 * @param {number} index - Zero-based step index.
 * @returns {DibodevAccentPalette} The palette.
 */
function getStepPalette(index: number): DibodevAccentPalette {
  return getAccentPalette(index)
}
</script>

<style scoped>
/* Vertical connector on phones: from each number to the next one, passing behind the cards. */
.method-step:not(:last-child)::before {
  content: '';
  position: absolute;
  z-index: 0;
  top: 0;
  bottom: -3.25rem;
  left: calc(1.25rem + 1.375rem - 1px);
  width: 2px;
  background-color: var(--color-gray-400);
}

/* Two columns on tablets: no connector, the numbers alone carry the order. */
@media (min-width: 48rem) {
  .method-step:not(:last-child)::before {
    display: none;
  }
}

/* Horizontal connector across the numbered circles (four columns on wide screens). */
@media (min-width: 80rem) {
  .method-step:not(:last-child)::before {
    display: block;
    z-index: auto;
    top: calc(1.75rem - 1px);
    bottom: auto;
    left: 3.5rem;
    right: -1.5rem;
    width: auto;
    height: 2px;
    background-color: var(--color-gray-300);
  }
}
</style>
