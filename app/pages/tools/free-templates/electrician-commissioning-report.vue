<template>
  <DibodevFreeTemplatePageSections
    :page="page"
    :teaser="ELECTRICIAN_SOFTWARE_TEASER"
    :tradeWebsiteTeaser="ELECTRICIAN_WEBSITE_TEASER"
    :trackingLocation="FREE_TEMPLATE_PAGE_TRACKING_LOCATION"
  />
</template>

<script lang="ts" setup>
import type { WritableComputedRef } from 'vue'
import type { SupportedLocale } from '~/core/constants/categorySlugs'
import type { DibodevFreeTemplatePageContent } from '~/core/types/DibodevFreeTemplatePage'
import DibodevFreeTemplatePageSections from '~/components/sections/DibodevFreeTemplatePageSections.vue'
import { FREE_TEMPLATE_PAGE_TRACKING_LOCATION } from '~/core/constants/freeTemplates/freeTemplateCatalog'
import { ELECTRICIAN_COMMISSIONING_REPORT_TEMPLATE_PAGES } from '~/core/constants/freeTemplates/electricianCommissioningReportPage'
import { ELECTRICIAN_SOFTWARE_TEASER } from '~/core/constants/tools/toolTeasers'
import { ELECTRICIAN_WEBSITE_TEASER } from '~/core/constants/tradeWebsites/tradeWebsiteTeasers'

definePageMeta({
  i18n: {
    paths: {
      fr: '/outils/modeles-gratuits/pv-mise-en-service-electricien',
      en: '/tools/free-templates/electrician-commissioning-report',
      es: '/herramientas/plantillas-gratuitas/acta-puesta-en-servicio-electricista',
    },
  },
})

const { locale }: { locale: WritableComputedRef<string> } = useI18n()
const pageLocale: SupportedLocale = (locale.value as SupportedLocale) || 'fr'
const page: DibodevFreeTemplatePageContent =
  ELECTRICIAN_COMMISSIONING_REPORT_TEMPLATE_PAGES[pageLocale] ?? ELECTRICIAN_COMMISSIONING_REPORT_TEMPLATE_PAGES.fr
</script>
