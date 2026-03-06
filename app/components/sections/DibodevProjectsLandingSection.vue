<template>
  <DibodevLandingSection
    :titlePart1="$t('projects.landing.titlePart1')"
    :titleHighlight1="$t('projects.landing.titleHighlight1')"
    :titlePart2="$t('projects.landing.titlePart2')"
    :titleHighlight2="$t('projects.landing.titleHighlight2')"
    :titlePart3="$t('projects.landing.titlePart3')"
    :description="$t('projects.landing.description')"
    :ctaText="$t('projects.landing.cta')"
    ctaTarget="#projects"
  />
</template>

<script setup lang="ts">
import DibodevLandingSection from '~/components/sections/DibodevLandingSection.vue'
</script>
