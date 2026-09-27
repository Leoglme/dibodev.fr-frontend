<template>
  <DibodevContactLandingSection />
  <DibodevContactFormSection />
</template>
<script setup lang="ts">
import DibodevContactLandingSection from '~/components/sections/DibodevContactLandingSection.vue'
import DibodevContactFormSection from '~/components/sections/DibodevContactFormSection.vue'
import { usePageShareImageMeta } from '~/composables/usePageShareImageMeta'

const { t } = useI18n()
const buildPageShareImageMeta = usePageShareImageMeta()

useHead(() => ({
  title: t('meta.contactPage.title'),
  meta: [
    { name: 'description', content: t('meta.contactPage.description') },
    { property: 'og:title', content: t('meta.contactPage.ogTitle') },
    { property: 'og:description', content: t('meta.contactPage.ogDescription') },
    ...buildPageShareImageMeta('contact'),
  ],
}))
</script>
