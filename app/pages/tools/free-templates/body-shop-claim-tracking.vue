<template>
  <DibodevFreeTemplatePageSections
    :page="page"
    :teaser="BODY_SHOP_SOFTWARE_TEASER"
    :trackingLocation="FREE_TEMPLATE_PAGE_TRACKING_LOCATION"
  />
</template>

<script lang="ts" setup>
import type { WritableComputedRef } from 'vue'
import type { SupportedLocale } from '~/core/constants/categorySlugs'
import type { DibodevFreeTemplatePageContent } from '~/core/types/DibodevFreeTemplatePage'
import DibodevFreeTemplatePageSections from '~/components/sections/DibodevFreeTemplatePageSections.vue'
import { FREE_TEMPLATE_PAGE_TRACKING_LOCATION } from '~/core/constants/freeTemplates/freeTemplateCatalog'
import { BODY_SHOP_CLAIM_TRACKING_TEMPLATE_PAGES } from '~/core/constants/freeTemplates/bodyShopClaimTrackingPage'
import { BODY_SHOP_SOFTWARE_TEASER } from '~/core/constants/tools/toolTeasers'

definePageMeta({
  i18n: {
    paths: {
      fr: '/outils/modeles-gratuits/suivi-sinistre-carrosserie',
      en: '/tools/free-templates/body-shop-claim-tracking',
      es: '/herramientas/plantillas-gratuitas/seguimiento-siniestro-carroceria',
    },
  },
})

const { locale }: { locale: WritableComputedRef<string> } = useI18n()
const pageLocale: SupportedLocale = (locale.value as SupportedLocale) || 'fr'
const page: DibodevFreeTemplatePageContent =
  BODY_SHOP_CLAIM_TRACKING_TEMPLATE_PAGES[pageLocale] ?? BODY_SHOP_CLAIM_TRACKING_TEMPLATE_PAGES.fr
</script>
