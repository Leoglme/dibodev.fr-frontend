<template>
  <section :id="props.anchorId" class="scroll-mt-24 px-6 py-20 sm:px-8 lg:py-28" :class="toneClass" data-aos="fade-up">
    <div class="max-w-site mx-auto grid w-full gap-12 lg:gap-14">
      <DibodevSectionHeading :eyebrow="props.eyebrow" :title="props.title" :intro="props.intro" align="center" />
      <div class="mx-auto w-full max-w-5xl">
        <DibodevQuizTunnel :quiz="props.quiz" />
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import type { ComputedRef, PropType } from 'vue'
import type { DibodevQuizDefinition } from '~/core/types/DibodevQuiz'
import type { DibodevQuizSectionProps } from '~/core/types/DibodevQuizSection'
import type { DibodevSectionTone } from '~/core/types/DibodevSectionTone'
import { computed } from 'vue'
import DibodevQuizTunnel from '~/components/quiz/DibodevQuizTunnel.vue'
import DibodevSectionHeading from '~/components/sections/DibodevSectionHeading.vue'
import { SECTION_TONE_CLASSES } from '~/core/constants/sectionTone'

/** A test placed in the middle of a page (the tool pages put theirs in the header instead), with a centred heading. */
const props: DibodevQuizSectionProps = defineProps({
  anchorId: {
    type: String as PropType<string>,
    default: 'test',
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
  quiz: {
    type: Object as PropType<DibodevQuizDefinition>,
    required: true,
  },
  tone: {
    type: String as PropType<DibodevSectionTone>,
    default: 'offWhite',
  },
})

/* COMPUTED */
const toneClass: ComputedRef<string> = computed((): string => SECTION_TONE_CLASSES[props.tone])
</script>
