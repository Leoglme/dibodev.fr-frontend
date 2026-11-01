<template>
  <DibodevFreeTemplatePageSections
    :page="page"
    :teaser="AUTO_REPAIR_SHOP_SOFTWARE_TEASER"
    :trackingLocation="FREE_TEMPLATE_PAGE_TRACKING_LOCATION"
  />
</template>

<script lang="ts" setup>
import type { WritableComputedRef } from 'vue'
import type { SupportedLocale } from '~/core/constants/categorySlugs'
import type { DibodevFreeTemplatePageContent } from '~/core/types/DibodevFreeTemplatePage'
import DibodevFreeTemplatePageSections from '~/components/sections/DibodevFreeTemplatePageSections.vue'
import { FREE_TEMPLATE_PAGE_TRACKING_LOCATION } from '~/core/constants/freeTemplates/freeTemplateCatalog'
import { GARAGE_REPAIR_ORDER_TEMPLATE_PAGES } from '~/core/constants/freeTemplates/garageRepairOrderPage'
import { AUTO_REPAIR_SHOP_SOFTWARE_TEASER } from '~/core/constants/tools/toolTeasers'

definePageMeta({
  i18n: {
    paths: {
      fr: '/outils/modeles-gratuits/ordre-de-reparation-garage',
      en: '/tools/free-templates/garage-repair-order',
      es: '/herramientas/plantillas-gratuitas/orden-de-reparacion-taller',
    },
  },
})

const { locale }: { locale: WritableComputedRef<string> } = useI18n()
const pageLocale: SupportedLocale = (locale.value as SupportedLocale) || 'fr'
const page: DibodevFreeTemplatePageContent =
  GARAGE_REPAIR_ORDER_TEMPLATE_PAGES[pageLocale] ?? GARAGE_REPAIR_ORDER_TEMPLATE_PAGES.fr
</script>
