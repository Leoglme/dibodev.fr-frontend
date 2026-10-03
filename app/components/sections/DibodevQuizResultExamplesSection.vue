<template>
  <section
    id="quiz-result-examples"
    class="scroll-mt-24 px-6 py-20 sm:px-8 lg:py-28"
    :class="toneClass"
    data-aos="fade-up"
  >
    <div
      class="max-w-site mx-auto grid w-full items-center gap-12 xl:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] xl:gap-16"
    >
      <div class="grid gap-8">
        <div class="grid gap-4">
          <h2
            class="text-[30px] leading-[1.15] font-medium tracking-[-0.01em] text-balance text-gray-100 sm:text-[36px] lg:text-[40px]"
          >
            {{ props.title }}
          </h2>
          <p v-if="props.intro" class="max-w-xl text-[17px] leading-7 text-pretty text-gray-200">{{ props.intro }}</p>
        </div>
        <ul class="grid gap-3.5">
          <li
            v-for="point in props.points"
            :key="point"
            class="flex items-start gap-3 text-base leading-6 text-gray-100"
          >
            <span
              class="bg-accent-tint text-primary -mt-px grid h-[26px] w-[26px] shrink-0 place-items-center rounded-full"
              aria-hidden="true"
            >
              <DibodevIcon name="Check" mode="stroke" :width="16" :height="16" />
            </span>
            {{ point }}
          </li>
        </ul>
        <div v-if="props.ctaText && props.ctaTo">
          <DibodevButton :to="props.ctaTo" class="w-full sm:w-auto">{{ props.ctaText }}</DibodevButton>
        </div>
      </div>

      <div class="grid items-start gap-4 sm:grid-cols-2">
        <article
          v-for="(example, exampleIndex) in props.examples"
          :key="example.context"
          class="rounded-[20px] border border-gray-300 bg-white p-5 shadow-[0_32px_80px_-44px_rgba(91,75,208,0.45)]"
          :class="exampleIndex % 2 === 1 ? 'sm:mt-14' : ''"
        >
          <p class="text-muted text-[13px] leading-[18px]">{{ example.context }}</p>
          <h3 class="mt-1.5 mb-3.5 text-lg leading-6 font-medium text-gray-100">
            <DibodevHyphenSafeText :text="example.result.title" />
          </h3>
          <DibodevQuizPriceCard :priceCard="example.result.priceCard" size="compact" />
        </article>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import type { ComputedRef, PropType } from 'vue'
import type { DibodevQuizResultExample } from '~/core/types/DibodevQuizResultExample'
import type { DibodevQuizResultExamplesSectionProps } from '~/core/types/DibodevQuizResultExamplesSection'
import type { DibodevSectionTone } from '~/core/types/DibodevSectionTone'
import { computed } from 'vue'
import DibodevButton from '~/components/core/DibodevButton.vue'
import DibodevQuizPriceCard from '~/components/quiz/DibodevQuizPriceCard.vue'
import DibodevHyphenSafeText from '~/components/ui/DibodevHyphenSafeText.vue'
import DibodevIcon from '~/components/ui/DibodevIcon.vue'
import { SECTION_TONE_CLASSES } from '~/core/constants/sectionTone'

/** What a trade test answers, with real results side by side: text and points on the left, the results on the right. */
const props: DibodevQuizResultExamplesSectionProps = defineProps({
  title: {
    type: String as PropType<string>,
    required: true,
  },
  intro: {
    type: String as PropType<string>,
    default: '',
  },
  points: {
    type: Array as PropType<string[]>,
    default: (): string[] => [],
  },
  ctaText: {
    type: String as PropType<string>,
    default: '',
  },
  ctaTo: {
    type: String as PropType<string>,
    default: '',
  },
  examples: {
    type: Array as PropType<DibodevQuizResultExample[]>,
    required: true,
  },
  tone: {
    type: String as PropType<DibodevSectionTone>,
    default: 'white',
  },
})

const toneClass: ComputedRef<string> = computed((): string => SECTION_TONE_CLASSES[props.tone])
</script>
