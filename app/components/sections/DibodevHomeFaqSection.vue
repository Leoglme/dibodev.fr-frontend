<template>
  <DibodevFaqSection
    :eyebrow="t('home.faq.eyebrow')"
    :title="t('home.faq.title')"
    :questions="faqQuestions"
    tone="offWhite"
  />
</template>

<script setup lang="ts">
import type { ComputedRef } from 'vue'
import type { DibodevFaqQuestion } from '~/core/types/DibodevFaqSection'
import { computed } from 'vue'
import DibodevFaqSection from '~/components/sections/DibodevFaqSection.vue'

const FAQ_QUESTION_KEYS: string[] = ['whoIsDibodev', 'services', 'area', 'price', 'process', 'technologies']

const { t } = useI18n()

const faqQuestions: ComputedRef<DibodevFaqQuestion[]> = computed((): DibodevFaqQuestion[] =>
  FAQ_QUESTION_KEYS.map(
    (key: string): DibodevFaqQuestion => ({
      question: t(`home.faq.${key}.question`),
      answer: t(`home.faq.${key}.answer`),
    }),
  ),
)
</script>
