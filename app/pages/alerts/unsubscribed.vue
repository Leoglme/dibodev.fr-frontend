<template>
  <DibodevAlertLandingSection
    icon="Bell"
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
      fr: '/alertes/desinscrite',
      en: '/alerts/unsubscribed',
      es: '/alertas/baja',
    },
  },
})

const { content, detail, toolsPath }: UseSecurityAlertLandingPageReturn = useSecurityAlertLandingPage('unsubscribed')
</script>
