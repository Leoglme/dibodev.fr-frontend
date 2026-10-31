<template>
  <DibodevAlertLandingSection
    icon="CheckCircle"
    :title="content.title"
    :text="content.text"
    :detail="detail"
    :linkLabel="content.linkLabel"
    :linkTo="toolsPath"
  />
</template>

<script lang="ts" setup>
import type { UseSecurityAlertLandingPageReturn } from '~/composables/useSecurityAlertLandingPage'
import DibodevAlertLandingSection from '~/components/sections/DibodevAlertLandingSection.vue'
import { useSecurityAlertLandingPage } from '~/composables/useSecurityAlertLandingPage'

definePageMeta({
  i18n: {
    paths: {
      fr: '/alertes/confirmee',
      en: '/alerts/confirmed',
      es: '/alertas/confirmada',
    },
  },
})

const { content, detail, toolsPath }: UseSecurityAlertLandingPageReturn = useSecurityAlertLandingPage('confirmed')
</script>
