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
import { TIME_CLOCK_SHEET_TEMPLATE_PAGES } from '~/core/constants/freeTemplates/timeClockSheetPage'
import { CLEANING_BUSINESS_SOFTWARE_TEASER } from '~/core/constants/tools/toolTeasers'

definePageMeta({
  i18n: {
    paths: {
      fr: '/outils/modeles-gratuits/fiche-de-pointage',
      en: '/tools/free-templates/timesheet',
      es: '/herramientas/plantillas-gratuitas/hoja-de-fichaje',
    },
  },
})

const { locale }: { locale: WritableComputedRef<string> } = useI18n()
const pageLocale: SupportedLocale = (locale.value as SupportedLocale) || 'fr'
const page: DibodevFreeTemplatePageContent =
  TIME_CLOCK_SHEET_TEMPLATE_PAGES[pageLocale] ?? TIME_CLOCK_SHEET_TEMPLATE_PAGES.fr
</script>
