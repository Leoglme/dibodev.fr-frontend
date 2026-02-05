<template>
  <DibodevLandingSection
    :description="$t('home.hero.description')"
    :ctaText="$t('home.hero.cta')"
    ctaTarget="#services"
    ctaPrimaryTo="/contact"
    :secondaryCta="{
      text: $t('home.hero.ctaSecondary'),
      target: '#services',
    }"
  />
</template>

<script setup lang="ts">
import DibodevLandingSection from '~/components/sections/DibodevLandingSection.vue'
</script>
