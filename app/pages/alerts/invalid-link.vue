<template>
  <DibodevAlertLandingSection
    icon="AlertCircle"
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
      fr: '/alertes/lien-invalide',
      en: '/alerts/invalid-link',
      es: '/alertas/enlace-no-valido',
    },
  },
})

const { content, detail, toolsPath }: UseSecurityAlertLandingPageReturn = useSecurityAlertLandingPage('invalid')
</script>
