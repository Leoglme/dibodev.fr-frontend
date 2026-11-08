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
import { BOILER_SERVICE_CERTIFICATE_TEMPLATE_PAGES } from '~/core/constants/freeTemplates/boilerServiceCertificatePage'
import { FREE_TEMPLATE_PAGE_TRACKING_LOCATION } from '~/core/constants/freeTemplates/freeTemplateCatalog'
import { PLUMBING_HEATING_SOFTWARE_TEASER } from '~/core/constants/tools/toolTeasers'
import { PLUMBER_WEBSITE_TEASER } from '~/core/constants/tradeWebsites/tradeWebsiteTeasers'

definePageMeta({
  i18n: {
    paths: {
      fr: '/outils/modeles-gratuits/attestation-entretien-chaudiere',
      en: '/tools/free-templates/boiler-service-certificate',
      es: '/herramientas/plantillas-gratuitas/certificado-de-mantenimiento-de-caldera',
    },
  },
})

const { locale }: { locale: WritableComputedRef<string> } = useI18n()
const pageLocale: SupportedLocale = (locale.value as SupportedLocale) || 'fr'
const page: DibodevFreeTemplatePageContent =
  BOILER_SERVICE_CERTIFICATE_TEMPLATE_PAGES[pageLocale] ?? BOILER_SERVICE_CERTIFICATE_TEMPLATE_PAGES.fr
</script>
