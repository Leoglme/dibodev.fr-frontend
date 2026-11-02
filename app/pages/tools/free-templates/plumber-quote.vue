<template>
  <DibodevFreeTemplatePageSections
    :page="page"
    :teaser="PLUMBING_HEATING_SOFTWARE_TEASER"
    :tradeWebsiteTeaser="PLUMBER_WEBSITE_TEASER"
    :trackingLocation="FREE_TEMPLATE_PAGE_TRACKING_LOCATION"
  />
</template>

<script lang="ts" setup>
import type { WritableComputedRef } from 'vue'
import type { SupportedLocale } from '~/core/constants/categorySlugs'
import type { DibodevFreeTemplatePageContent } from '~/core/types/DibodevFreeTemplatePage'
import DibodevFreeTemplatePageSections from '~/components/sections/DibodevFreeTemplatePageSections.vue'
import { FREE_TEMPLATE_PAGE_TRACKING_LOCATION } from '~/core/constants/freeTemplates/freeTemplateCatalog'
import { PLUMBER_QUOTE_TEMPLATE_PAGES } from '~/core/constants/freeTemplates/plumberQuotePage'
import { PLUMBING_HEATING_SOFTWARE_TEASER } from '~/core/constants/tools/toolTeasers'
import { PLUMBER_WEBSITE_TEASER } from '~/core/constants/tradeWebsites/tradeWebsiteTeasers'

definePageMeta({
  i18n: {
    paths: {
      fr: '/outils/modeles-gratuits/devis-plombier',
      en: '/tools/free-templates/plumber-quote',
      es: '/herramientas/plantillas-gratuitas/presupuesto-fontanero',
    },
  },
})

const { locale }: { locale: WritableComputedRef<string> } = useI18n()
const pageLocale: SupportedLocale = (locale.value as SupportedLocale) || 'fr'
const page: DibodevFreeTemplatePageContent = PLUMBER_QUOTE_TEMPLATE_PAGES[pageLocale] ?? PLUMBER_QUOTE_TEMPLATE_PAGES.fr
</script>
