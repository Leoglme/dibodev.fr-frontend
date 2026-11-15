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
import { PURCHASE_ORDER_TEMPLATE_PAGES } from '~/core/constants/freeTemplates/purchaseOrderPage'
import { INVENTORY_MANAGEMENT_SOFTWARE_TEASER } from '~/core/constants/tools/toolTeasers'

definePageMeta({
  i18n: {
    paths: {
      fr: '/outils/modeles-gratuits/bon-de-commande',
      en: '/tools/free-templates/purchase-order',
      es: '/herramientas/plantillas-gratuitas/hoja-de-pedido',
    },
  },
})

const { locale }: { locale: WritableComputedRef<string> } = useI18n()
const pageLocale: SupportedLocale = (locale.value as SupportedLocale) || 'fr'
const page: DibodevFreeTemplatePageContent =
  PURCHASE_ORDER_TEMPLATE_PAGES[pageLocale] ?? PURCHASE_ORDER_TEMPLATE_PAGES.fr
</script>
