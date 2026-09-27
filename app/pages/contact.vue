<template>
  <DibodevContactLandingSection />
  <DibodevContactFormSection />
</template>
<script setup lang="ts">
import DibodevContactLandingSection from '~/components/sections/DibodevContactLandingSection.vue'
import DibodevContactFormSection from '~/components/sections/DibodevContactFormSection.vue'
import { usePageShareImage } from '~/composables/usePageShareImage'

const { t } = useI18n()
usePageShareImage('contact')

useHead(() => ({
  title: t('meta.contactPage.title'),
  meta: [
    { name: 'description', content: t('meta.contactPage.description') },
    { property: 'og:title', content: t('meta.contactPage.ogTitle') },
    { property: 'og:description', content: t('meta.contactPage.ogDescription') },
  ],
}))
</script>
