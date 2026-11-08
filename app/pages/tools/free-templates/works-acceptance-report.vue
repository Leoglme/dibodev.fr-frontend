<template>
  <DibodevFreeTemplatePageSections
    :page="page"
    :teaser="CARPENTRY_SOFTWARE_TEASER"
    :trackingLocation="FREE_TEMPLATE_PAGE_TRACKING_LOCATION"
  />
</template>

<script lang="ts" setup>
import type { WritableComputedRef } from 'vue'
import type { SupportedLocale } from '~/core/constants/categorySlugs'
import type { DibodevFreeTemplatePageContent } from '~/core/types/DibodevFreeTemplatePage'
import DibodevFreeTemplatePageSections from '~/components/sections/DibodevFreeTemplatePageSections.vue'
import { FREE_TEMPLATE_PAGE_TRACKING_LOCATION } from '~/core/constants/freeTemplates/freeTemplateCatalog'
import { WORKS_ACCEPTANCE_REPORT_TEMPLATE_PAGES } from '~/core/constants/freeTemplates/worksAcceptanceReportPage'
import { CARPENTRY_SOFTWARE_TEASER } from '~/core/constants/tools/toolTeasers'

definePageMeta({
  i18n: {
    paths: {
      fr: '/outils/modeles-gratuits/pv-de-reception-de-travaux',
      en: '/tools/free-templates/works-acceptance-report',
      es: '/herramientas/plantillas-gratuitas/acta-de-recepcion-de-obra',
    },
  },
})

const { locale }: { locale: WritableComputedRef<string> } = useI18n()
const pageLocale: SupportedLocale = (locale.value as SupportedLocale) || 'fr'
const page: DibodevFreeTemplatePageContent =
  WORKS_ACCEPTANCE_REPORT_TEMPLATE_PAGES[pageLocale] ?? WORKS_ACCEPTANCE_REPORT_TEMPLATE_PAGES.fr
</script>
