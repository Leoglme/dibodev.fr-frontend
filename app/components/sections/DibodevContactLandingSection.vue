<template>
  <DibodevLandingSection
    :breadcrumbs="breadcrumbs"
    :titlePart1="$t('contact.landing.titlePart1')"
    :titleHighlight1="$t('contact.landing.titleHighlight1')"
    :titlePart2="$t('contact.landing.titlePart2')"
    :description="$t('contact.landing.description')"
    align="center"
  />
</template>

<script setup lang="ts">
import type { ComputedRef } from 'vue'
import type { DibodevBreadcrumbItem } from '~/core/types/DibodevBreadcrumb'
import DibodevLandingSection from '~/components/sections/DibodevLandingSection.vue'
import { useBreadcrumbTrail } from '~/composables/useBreadcrumbTrail'

const { t } = useI18n()

const breadcrumbs: ComputedRef<DibodevBreadcrumbItem[]> = useBreadcrumbTrail((): DibodevBreadcrumbItem[] => [
  { label: t('nav.contact'), to: null },
])
</script>
