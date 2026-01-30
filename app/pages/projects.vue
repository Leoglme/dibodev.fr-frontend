<template>
  <DibodevProjectsLandingSection />
  <DibodevProjectsSection />
  <DibodevPricingSection />
</template>
<script setup lang="ts">
import DibodevProjectsLandingSection from '~/components/sections/DibodevProjectsLandingSection.vue'
import DibodevProjectsSection from '~/components/sections/DibodevProjectsSection.vue'
import DibodevPricingSection from '~/components/sections/DibodevPricingSection.vue'

const { t } = useI18n()

useHead(() => ({
  title: t('meta.projects.title'),
  meta: [{ name: 'description', content: t('meta.projects.description') }],
}))
</script>
