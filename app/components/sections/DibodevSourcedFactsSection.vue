<template>
  <section :id="props.anchorId" class="scroll-mt-24 px-6 py-20 sm:px-8 lg:py-28" :class="toneClass" data-aos="fade-up">
    <div class="max-w-site mx-auto grid w-full gap-10 lg:gap-12">
      <DibodevSectionHeading :eyebrow="props.eyebrow" :title="props.title" :intro="props.intro" align="center" />

      <div class="grid gap-4 md:grid-cols-2 lg:gap-5" :class="factsGridClass">
        <article
          v-for="fact in props.facts"
          :key="fact.title"
          class="grid content-start gap-3 rounded-2xl border border-gray-300 p-6"
          :class="cardClass"
        >
          <p class="text-muted text-sm tabular-nums">{{ fact.contextLabel }}</p>
          <h3 class="text-lg leading-snug font-medium text-gray-100"><DibodevHyphenSafeText :text="fact.title" /></h3>
          <p class="text-[15px] leading-6 text-gray-200">{{ fact.text }}</p>
          <a
            :href="fact.sourceUrl"
            target="_blank"
            rel="noopener"
            class="text-muted w-fit text-sm underline underline-offset-2 transition-colors hover:text-gray-100"
          >
            {{ t('sourcedFacts.source', { name: fact.sourceName }) }}
          </a>
        </article>
      </div>

      <slot name="footer" />
    </div>
  </section>
</template>

<script lang="ts" setup>
import type { ComputedRef, PropType } from 'vue'
import type { DibodevSectionTone } from '~/core/types/DibodevSectionTone'
import type { DibodevSourcedFact, DibodevSourcedFactsSectionProps } from '~/core/types/DibodevSourcedFactsSection'
import { computed } from 'vue'
import DibodevSectionHeading from '~/components/sections/DibodevSectionHeading.vue'
import DibodevHyphenSafeText from '~/components/ui/DibodevHyphenSafeText.vue'
import { SECTION_TONE_CARD_CLASSES, SECTION_TONE_CLASSES } from '~/core/constants/sectionTone'

const props: DibodevSourcedFactsSectionProps = defineProps({
  anchorId: {
    type: String as PropType<string>,
    default: 'facts',
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
  facts: {
    type: Array as PropType<DibodevSourcedFact[]>,
    required: true,
  },
  tone: {
    type: String as PropType<DibodevSectionTone>,
    default: 'white',
  },
})

const { t } = useI18n()

const toneClass: ComputedRef<string> = computed((): string => SECTION_TONE_CLASSES[props.tone])
const cardClass: ComputedRef<string> = computed((): string => SECTION_TONE_CARD_CLASSES[props.tone])
/** Four facts sit two by two rather than three plus one left alone. */
const factsGridClass: ComputedRef<string> = computed((): string =>
  props.facts.length === 4 ? 'mx-auto w-full max-w-5xl' : 'lg:grid-cols-3',
)
</script>
