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
import { FREE_TEMPLATE_PAGE_TRACKING_LOCATION } from '~/core/constants/freeTemplates/freeTemplateCatalog'
import { INTERVENTION_SLIP_TEMPLATE_PAGES } from '~/core/constants/freeTemplates/interventionSlipPage'
import { FIELD_SERVICE_SOFTWARE_TEASER } from '~/core/constants/tools/toolTeasers'

definePageMeta({
  i18n: {
    paths: {
      fr: '/outils/modeles-gratuits/bon-d-intervention',
      en: '/tools/free-templates/intervention-slip',
      es: '/herramientas/plantillas-gratuitas/parte-de-intervencion',
    },
  },
})

const { locale }: { locale: WritableComputedRef<string> } = useI18n()
const pageLocale: SupportedLocale = (locale.value as SupportedLocale) || 'fr'
const page: DibodevFreeTemplatePageContent =
  INTERVENTION_SLIP_TEMPLATE_PAGES[pageLocale] ?? INTERVENTION_SLIP_TEMPLATE_PAGES.fr
</script>
