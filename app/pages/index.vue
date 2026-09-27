<template>
  <DibodevHomeLandingSection />
  <DibodevServicesSection />
  <DibodevHomeHelpSection />
  <DibodevWhyWorkWithMeSection />
  <DibodevStatsSection />
  <DibodevFavoriteProjectSection />
  <DibodevLatestArticlesSection />
  <DibodevHomeFaqSection />
  <!-- <DibodevPricingSection /> -->
</template>
<script setup lang="ts">
import DibodevHomeLandingSection from '~/components/sections/DibodevHomeLandingSection.vue'
import DibodevServicesSection from '~/components/sections/DibodevServicesSection.vue'
import DibodevStatsSection from '~/components/sections/DibodevStatsSection.vue'
import DibodevFavoriteProjectSection from '~/components/sections/DibodevFavoriteProjectSection.vue'
import DibodevLatestArticlesSection from '~/components/sections/DibodevLatestArticlesSection.vue'
import DibodevHomeHelpSection from '~/components/sections/DibodevHomeHelpSection.vue'
import DibodevWhyWorkWithMeSection from '~/components/sections/DibodevWhyWorkWithMeSection.vue'
import DibodevHomeFaqSection from '~/components/sections/DibodevHomeFaqSection.vue'
import { usePageShareImage } from '~/composables/usePageShareImage'
// import DibodevPricingSection from '~/components/sections/DibodevPricingSection.vue'

usePageShareImage('home')
</script>
