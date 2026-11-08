<template>
  <DibodevFreeTemplatePageSections
    :page="page"
    :teaser="BIKE_SHOP_SOFTWARE_TEASER"
    :trackingLocation="FREE_TEMPLATE_PAGE_TRACKING_LOCATION"
  />
</template>

<script lang="ts" setup>
import type { WritableComputedRef } from 'vue'
import type { SupportedLocale } from '~/core/constants/categorySlugs'
import type { DibodevFreeTemplatePageContent } from '~/core/types/DibodevFreeTemplatePage'
import DibodevFreeTemplatePageSections from '~/components/sections/DibodevFreeTemplatePageSections.vue'
import { BIKE_REPAIR_TICKET_TEMPLATE_PAGES } from '~/core/constants/freeTemplates/bikeRepairTicketPage'
import { FREE_TEMPLATE_PAGE_TRACKING_LOCATION } from '~/core/constants/freeTemplates/freeTemplateCatalog'
import { BIKE_SHOP_SOFTWARE_TEASER } from '~/core/constants/tools/toolTeasers'

definePageMeta({
  i18n: {
    paths: {
      fr: '/outils/modeles-gratuits/fiche-de-reparation-velo',
      en: '/tools/free-templates/bike-repair-ticket',
      es: '/herramientas/plantillas-gratuitas/ficha-de-reparacion-de-bicicleta',
    },
  },
})

const { locale }: { locale: WritableComputedRef<string> } = useI18n()
const pageLocale: SupportedLocale = (locale.value as SupportedLocale) || 'fr'
const page: DibodevFreeTemplatePageContent =
  BIKE_REPAIR_TICKET_TEMPLATE_PAGES[pageLocale] ?? BIKE_REPAIR_TICKET_TEMPLATE_PAGES.fr
</script>
