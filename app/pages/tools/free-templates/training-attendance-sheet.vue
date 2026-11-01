<template>
  <DibodevFreeTemplatePageSections
    :page="page"
    :teaser="TRAINING_CENTER_SOFTWARE_TEASER"
    :trackingLocation="FREE_TEMPLATE_PAGE_TRACKING_LOCATION"
  />
</template>

<script lang="ts" setup>
import type { WritableComputedRef } from 'vue'
import type { SupportedLocale } from '~/core/constants/categorySlugs'
import type { DibodevFreeTemplatePageContent } from '~/core/types/DibodevFreeTemplatePage'
import DibodevFreeTemplatePageSections from '~/components/sections/DibodevFreeTemplatePageSections.vue'
import { FREE_TEMPLATE_PAGE_TRACKING_LOCATION } from '~/core/constants/freeTemplates/freeTemplateCatalog'
import { TRAINING_ATTENDANCE_SHEET_TEMPLATE_PAGES } from '~/core/constants/freeTemplates/trainingAttendanceSheetPage'
import { TRAINING_CENTER_SOFTWARE_TEASER } from '~/core/constants/tools/toolTeasers'

definePageMeta({
  i18n: {
    paths: {
      fr: '/outils/modeles-gratuits/feuille-d-emargement-formation',
      en: '/tools/free-templates/training-attendance-sheet',
      es: '/herramientas/plantillas-gratuitas/hoja-de-firmas-formacion',
    },
  },
})

const { locale }: { locale: WritableComputedRef<string> } = useI18n()
const pageLocale: SupportedLocale = (locale.value as SupportedLocale) || 'fr'
const page: DibodevFreeTemplatePageContent =
  TRAINING_ATTENDANCE_SHEET_TEMPLATE_PAGES[pageLocale] ?? TRAINING_ATTENDANCE_SHEET_TEMPLATE_PAGES.fr
</script>
