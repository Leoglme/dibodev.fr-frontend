<template>
  <DibodevFreeTemplatePageSections
    :page="page"
    :teaser="INVENTORY_MANAGEMENT_SOFTWARE_TEASER"
    :trackingLocation="FREE_TEMPLATE_PAGE_TRACKING_LOCATION"
  />
</template>

<script lang="ts" setup>
import type { WritableComputedRef } from 'vue'
import type { SupportedLocale } from '~/core/constants/categorySlugs'
import type { DibodevFreeTemplatePageContent } from '~/core/types/DibodevFreeTemplatePage'
import DibodevFreeTemplatePageSections from '~/components/sections/DibodevFreeTemplatePageSections.vue'
import { FREE_TEMPLATE_PAGE_TRACKING_LOCATION } from '~/core/constants/freeTemplates/freeTemplateCatalog'
import { INVENTORY_SHEET_TEMPLATE_PAGES } from '~/core/constants/freeTemplates/inventorySheetPage'
import { INVENTORY_MANAGEMENT_SOFTWARE_TEASER } from '~/core/constants/tools/toolTeasers'

definePageMeta({
  i18n: {
    paths: {
      fr: '/outils/modeles-gratuits/fiche-d-inventaire',
      en: '/tools/free-templates/inventory-sheet',
      es: '/herramientas/plantillas-gratuitas/hoja-de-inventario',
    },
  },
})

const { locale }: { locale: WritableComputedRef<string> } = useI18n()
const pageLocale: SupportedLocale = (locale.value as SupportedLocale) || 'fr'
const page: DibodevFreeTemplatePageContent =
  INVENTORY_SHEET_TEMPLATE_PAGES[pageLocale] ?? INVENTORY_SHEET_TEMPLATE_PAGES.fr
</script>
