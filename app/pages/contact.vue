<template>
  <DibodevContactLandingSection />
  <DibodevContactFormSection />
</template>
<script setup lang="ts">
import DibodevContactLandingSection from '~/components/sections/DibodevContactLandingSection.vue'
import DibodevContactFormSection from '~/components/sections/DibodevContactFormSection.vue'

const { t } = useI18n()

useHead(() => ({
  title: t('meta.contact.title'),
  meta: [{ name: 'description', content: t('meta.contact.description') }],
}))
</script>
