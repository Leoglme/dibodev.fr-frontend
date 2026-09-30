<template>
  <DibodevContactLandingSection />
  <DibodevContactFormSection />
  <DibodevFaqSection
    :eyebrow="t('contact.faq.eyebrow')"
    :title="t('contact.faq.title')"
    :questions="faqQuestions"
    tone="offWhite"
  />
</template>
<script setup lang="ts">
import { computed } from 'vue'
import type { ComputedRef } from 'vue'
import type { DibodevFaqQuestion } from '~/core/types/DibodevFaqSection'
import DibodevContactLandingSection from '~/components/sections/DibodevContactLandingSection.vue'
import DibodevContactFormSection from '~/components/sections/DibodevContactFormSection.vue'
import DibodevFaqSection from '~/components/sections/DibodevFaqSection.vue'
import { usePageShareImage } from '~/composables/usePageShareImage'

/** The home FAQ questions worth answering before someone writes. */
const CONTACT_FAQ_KEYS: string[] = ['price', 'process', 'area']

const { t } = useI18n()
usePageShareImage('contact')

const faqQuestions: ComputedRef<DibodevFaqQuestion[]> = computed((): DibodevFaqQuestion[] =>
  CONTACT_FAQ_KEYS.map(
    (key: string): DibodevFaqQuestion => ({
      question: t(`home.faq.${key}.question`),
      answer: t(`home.faq.${key}.answer`),
    }),
  ),
)

useHead(() => ({
  title: t('meta.contactPage.title'),
  meta: [
    { name: 'description', content: t('meta.contactPage.description') },
    { property: 'og:title', content: t('meta.contactPage.ogTitle') },
    { property: 'og:description', content: t('meta.contactPage.ogDescription') },
  ],
}))
</script>
