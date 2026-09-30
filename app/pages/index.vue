<template>
  <DibodevHomeLandingSection />
  <DibodevClientLogosSection />
  <DibodevServicesSection />
  <DibodevFavoriteProjectSection />
  <DibodevTestimonialSection
    :eyebrow="t('testimonial.eyebrow')"
    :title="t('testimonial.title')"
    :quote="t('testimonial.quote')"
    :authorName="t('testimonial.authorName')"
    :authorRole="t('testimonial.authorRole')"
    :sourceNote="t('testimonial.sourceNote')"
    :sourceLinkLabel="t('testimonial.sourceLink')"
    :sourceHref="MALT_PROFILE_URL"
    :rating="5"
    :ratingLabel="t('testimonial.ratingLabel')"
    :verifiedLabel="t('testimonial.verifiedLabel')"
  />
  <DibodevMethodSection
    :eyebrow="t('method.eyebrow')"
    :title="t('method.title')"
    :intro="t('method.subtitle')"
    :steps="methodSteps"
  />
  <DibodevFounderSection />
  <DibodevLatestArticlesSection />
  <DibodevHomeFaqSection />
  <DibodevContactCtaSection />
</template>
<script setup lang="ts">
import { computed } from 'vue'
import type { ComputedRef } from 'vue'
import type { DibodevMethodStep } from '~/core/types/DibodevMethodSection'
import DibodevHomeLandingSection from '~/components/sections/DibodevHomeLandingSection.vue'
import DibodevClientLogosSection from '~/components/sections/DibodevClientLogosSection.vue'
import DibodevServicesSection from '~/components/sections/DibodevServicesSection.vue'
import DibodevFavoriteProjectSection from '~/components/sections/DibodevFavoriteProjectSection.vue'
import DibodevTestimonialSection from '~/components/sections/DibodevTestimonialSection.vue'
import DibodevMethodSection from '~/components/sections/DibodevMethodSection.vue'
import DibodevFounderSection from '~/components/sections/DibodevFounderSection.vue'
import DibodevLatestArticlesSection from '~/components/sections/DibodevLatestArticlesSection.vue'
import DibodevHomeFaqSection from '~/components/sections/DibodevHomeFaqSection.vue'
import DibodevContactCtaSection from '~/components/sections/DibodevContactCtaSection.vue'
import { MALT_PROFILE_URL } from '~/config/contact'
import { usePageShareImage } from '~/composables/usePageShareImage'

const METHOD_STEP_KEYS: string[] = ['discovery', 'quote', 'build', 'support']

const { t } = useI18n()
usePageShareImage('home')

const methodSteps: ComputedRef<DibodevMethodStep[]> = computed((): DibodevMethodStep[] =>
  METHOD_STEP_KEYS.map(
    (key: string): DibodevMethodStep => ({
      label: t(`method.${key}.label`),
      title: t(`method.${key}.title`),
      description: t(`method.${key}.description`),
    }),
  ),
)
</script>
