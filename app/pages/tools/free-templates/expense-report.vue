<template>
  <DibodevFreeTemplatePageSections
    :page="page"
    :teaser="FIELD_SERVICE_SOFTWARE_TEASER"
    :trackingLocation="FREE_TEMPLATE_PAGE_TRACKING_LOCATION"
  />
</template>

<script lang="ts" setup>
import type { WritableComputedRef } from 'vue'
import type { SupportedLocale } from '~/core/constants/categorySlugs'
import type { DibodevFreeTemplatePageContent } from '~/core/types/DibodevFreeTemplatePage'
import DibodevFreeTemplatePageSections from '~/components/sections/DibodevFreeTemplatePageSections.vue'
import { EXPENSE_REPORT_TEMPLATE_PAGES } from '~/core/constants/freeTemplates/expenseReportPage'
import { FREE_TEMPLATE_PAGE_TRACKING_LOCATION } from '~/core/constants/freeTemplates/freeTemplateCatalog'
import { FIELD_SERVICE_SOFTWARE_TEASER } from '~/core/constants/tools/toolTeasers'

definePageMeta({
  i18n: {
    paths: {
      fr: '/outils/modeles-gratuits/note-de-frais',
      en: '/tools/free-templates/expense-report',
      es: '/herramientas/plantillas-gratuitas/nota-de-gastos',
    },
  },
})

const { locale }: { locale: WritableComputedRef<string> } = useI18n()
const pageLocale: SupportedLocale = (locale.value as SupportedLocale) || 'fr'
const page: DibodevFreeTemplatePageContent =
  EXPENSE_REPORT_TEMPLATE_PAGES[pageLocale] ?? EXPENSE_REPORT_TEMPLATE_PAGES.fr
</script>
