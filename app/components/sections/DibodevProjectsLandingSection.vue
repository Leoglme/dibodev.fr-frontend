<template>
  <DibodevLandingSection
    :title="$t('projects.landing.title')"
    :description="$t('projects.landing.description')"
    :ctaText="$t('projects.landing.cta')"
    ctaTarget="#projects"
  />
</template>

<script setup lang="ts">
import DibodevLandingSection from '~/components/sections/DibodevLandingSection.vue'
</script>
