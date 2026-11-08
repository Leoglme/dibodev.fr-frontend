<template>
  <DibodevFreeTemplatePageSections
    :page="page"
    :teaser="EVENT_RENTAL_SOFTWARE_TEASER"
    :trackingLocation="FREE_TEMPLATE_PAGE_TRACKING_LOCATION"
  />
</template>

<script lang="ts" setup>
import type { WritableComputedRef } from 'vue'
import type { SupportedLocale } from '~/core/constants/categorySlugs'
import type { DibodevFreeTemplatePageContent } from '~/core/types/DibodevFreeTemplatePage'
import DibodevFreeTemplatePageSections from '~/components/sections/DibodevFreeTemplatePageSections.vue'
import { FREE_TEMPLATE_PAGE_TRACKING_LOCATION } from '~/core/constants/freeTemplates/freeTemplateCatalog'
import { EQUIPMENT_RENTAL_AGREEMENT_TEMPLATE_PAGES } from '~/core/constants/freeTemplates/equipmentRentalAgreementPage'
import { EVENT_RENTAL_SOFTWARE_TEASER } from '~/core/constants/tools/toolTeasers'

definePageMeta({
  i18n: {
    paths: {
      fr: '/outils/modeles-gratuits/contrat-de-location-de-materiel',
      en: '/tools/free-templates/equipment-rental-agreement',
      es: '/herramientas/plantillas-gratuitas/contrato-de-alquiler-de-material',
    },
  },
})

const { locale }: { locale: WritableComputedRef<string> } = useI18n()
const pageLocale: SupportedLocale = (locale.value as SupportedLocale) || 'fr'
const page: DibodevFreeTemplatePageContent =
  EQUIPMENT_RENTAL_AGREEMENT_TEMPLATE_PAGES[pageLocale] ?? EQUIPMENT_RENTAL_AGREEMENT_TEMPLATE_PAGES.fr
</script>
