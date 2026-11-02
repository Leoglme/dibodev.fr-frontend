<template>
  <DibodevFreeTemplatePageSections
    :page="page"
    :teaser="LANDSCAPING_SOFTWARE_TEASER"
    :tradeWebsiteTeaser="LANDSCAPER_WEBSITE_TEASER"
    :trackingLocation="FREE_TEMPLATE_PAGE_TRACKING_LOCATION"
  />
</template>

<script lang="ts" setup>
import type { WritableComputedRef } from 'vue'
import type { SupportedLocale } from '~/core/constants/categorySlugs'
import type { DibodevFreeTemplatePageContent } from '~/core/types/DibodevFreeTemplatePage'
import DibodevFreeTemplatePageSections from '~/components/sections/DibodevFreeTemplatePageSections.vue'
import { FREE_TEMPLATE_PAGE_TRACKING_LOCATION } from '~/core/constants/freeTemplates/freeTemplateCatalog'
import { LANDSCAPER_MAINTENANCE_CONTRACT_TEMPLATE_PAGES } from '~/core/constants/freeTemplates/landscaperMaintenanceContractPage'
import { LANDSCAPING_SOFTWARE_TEASER } from '~/core/constants/tools/toolTeasers'
import { LANDSCAPER_WEBSITE_TEASER } from '~/core/constants/tradeWebsites/tradeWebsiteTeasers'

definePageMeta({
  i18n: {
    paths: {
      fr: '/outils/modeles-gratuits/contrat-entretien-espaces-verts',
      en: '/tools/free-templates/landscaping-maintenance-contract',
      es: '/herramientas/plantillas-gratuitas/contrato-mantenimiento-espacios-verdes',
    },
  },
})

const { locale }: { locale: WritableComputedRef<string> } = useI18n()
const pageLocale: SupportedLocale = (locale.value as SupportedLocale) || 'fr'
const page: DibodevFreeTemplatePageContent =
  LANDSCAPER_MAINTENANCE_CONTRACT_TEMPLATE_PAGES[pageLocale] ?? LANDSCAPER_MAINTENANCE_CONTRACT_TEMPLATE_PAGES.fr
</script>
