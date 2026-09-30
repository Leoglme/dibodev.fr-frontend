<template>
  <section id="faq" class="scroll-mt-24 px-6 py-20 sm:px-8 lg:py-28" :class="toneClass" data-aos="fade-up">
    <div class="mx-auto grid w-full max-w-3xl gap-10 lg:gap-12">
      <DibodevSectionHeading :eyebrow="props.eyebrow" :title="props.title" align="center" />

      <div class="grid gap-4">
        <details
          v-for="faqQuestion in props.questions"
          :key="faqQuestion.question"
          class="faq-card group rounded-2xl border border-gray-300 px-6 py-5"
          :class="cardClass"
        >
          <summary
            class="flex cursor-pointer list-none items-center justify-between gap-4 [&::-webkit-details-marker]:hidden"
          >
            <h3 class="text-left text-base font-medium text-gray-100 sm:text-lg">
              <DibodevHyphenSafeText :text="faqQuestion.question" />
            </h3>
            <span
              class="bg-accent-tint text-primary flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-transform duration-200 group-open:rotate-180"
              aria-hidden="true"
            >
              <DibodevIcon name="ChevronDown" mode="stroke" :width="18" :height="18" />
            </span>
          </summary>
          <p class="mt-4 text-left text-[15px] leading-7 text-gray-200 sm:text-base">
            {{ faqQuestion.answer }}
          </p>
        </details>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import type { ComputedRef, PropType } from 'vue'
import type { DibodevFaqQuestion, DibodevFaqSectionProps } from '~/core/types/DibodevFaqSection'
import type { DibodevSectionTone } from '~/core/types/DibodevSectionTone'
import DibodevSectionHeading from '~/components/sections/DibodevSectionHeading.vue'
import DibodevIcon from '~/components/ui/DibodevIcon.vue'
import DibodevHyphenSafeText from '~/components/ui/DibodevHyphenSafeText.vue'
import { SECTION_TONE_CARD_CLASSES, SECTION_TONE_CLASSES } from '~/core/constants/sectionTone'
import { buildFaqSchemaJson } from '~/config/faqSchema'

/**
 * Centred accordion of question cards, also published as FAQPage JSON-LD.
 */
const props: DibodevFaqSectionProps = defineProps({
  eyebrow: {
    type: String as PropType<string>,
    default: '',
  },
  title: {
    type: String as PropType<string>,
    required: true,
  },
  questions: {
    type: Array as PropType<DibodevFaqQuestion[]>,
    required: true,
  },
  tone: {
    type: String as PropType<DibodevSectionTone>,
    default: 'white',
  },
})

const toneClass: ComputedRef<string> = computed((): string => SECTION_TONE_CLASSES[props.tone])
const cardClass: ComputedRef<string> = computed((): string => SECTION_TONE_CARD_CLASSES[props.tone])

useHead(() => ({
  script: [{ type: 'application/ld+json', key: 'schema-faq', innerHTML: buildFaqSchemaJson(props.questions) }],
}))
</script>

<style scoped>
.faq-card {
  transition: border-color 0.2s ease;
}

.faq-card:hover,
.faq-card[open] {
  border-color: rgba(111, 95, 224, 0.45);
}
</style>
