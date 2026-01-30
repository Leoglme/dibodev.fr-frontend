<template>
  <DibodevLandingSection
    :description="$t('contact.landing.description')"
    :ctaText="$t('contact.landing.cta')"
    ctaTarget="#contact-form"
  />
</template>

<script setup lang="ts">
import DibodevLandingSection from '~/components/sections/DibodevLandingSection.vue'
</script>
