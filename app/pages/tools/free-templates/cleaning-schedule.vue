<template>
  <DibodevFreeTemplatePageSections
    :page="page"
    :teaser="CLEANING_BUSINESS_SOFTWARE_TEASER"
    :trackingLocation="FREE_TEMPLATE_PAGE_TRACKING_LOCATION"
  />
</template>

<script lang="ts" setup>
import type { WritableComputedRef } from 'vue'
import type { SupportedLocale } from '~/core/constants/categorySlugs'
import type { DibodevFreeTemplatePageContent } from '~/core/types/DibodevFreeTemplatePage'
import DibodevFreeTemplatePageSections from '~/components/sections/DibodevFreeTemplatePageSections.vue'
import { FREE_TEMPLATE_PAGE_TRACKING_LOCATION } from '~/core/constants/freeTemplates/freeTemplateCatalog'
import { CLEANING_SCHEDULE_TEMPLATE_PAGES } from '~/core/constants/freeTemplates/cleaningSchedulePage'
import { CLEANING_BUSINESS_SOFTWARE_TEASER } from '~/core/constants/tools/toolTeasers'

definePageMeta({
  i18n: {
    paths: {
      fr: '/outils/modeles-gratuits/planning-nettoyage',
      en: '/tools/free-templates/cleaning-schedule',
      es: '/herramientas/plantillas-gratuitas/planning-limpieza',
    },
  },
})

const { locale }: { locale: WritableComputedRef<string> } = useI18n()
const pageLocale: SupportedLocale = (locale.value as SupportedLocale) || 'fr'
const page: DibodevFreeTemplatePageContent =
  CLEANING_SCHEDULE_TEMPLATE_PAGES[pageLocale] ?? CLEANING_SCHEDULE_TEMPLATE_PAGES.fr
</script>
