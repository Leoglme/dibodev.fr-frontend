<template>
  <DibodevFreeTemplatePageSections
    :page="page"
    :teaser="E_INVOICING_SCOPE_TEASER"
    :trackingLocation="FREE_TEMPLATE_PAGE_TRACKING_LOCATION"
  />
</template>

<script lang="ts" setup>
import type { WritableComputedRef } from 'vue'
import type { SupportedLocale } from '~/core/constants/categorySlugs'
import type { DibodevFreeTemplatePageContent } from '~/core/types/DibodevFreeTemplatePage'
import DibodevFreeTemplatePageSections from '~/components/sections/DibodevFreeTemplatePageSections.vue'
import { FREE_TEMPLATE_PAGE_TRACKING_LOCATION } from '~/core/constants/freeTemplates/freeTemplateCatalog'
import { PAYMENT_RECEIPT_TEMPLATE_PAGES } from '~/core/constants/freeTemplates/paymentReceiptPage'
import { E_INVOICING_SCOPE_TEASER } from '~/core/constants/tools/toolTeasers'

definePageMeta({
  i18n: {
    paths: {
      fr: '/outils/modeles-gratuits/recu-de-paiement',
      en: '/tools/free-templates/payment-receipt',
      es: '/herramientas/plantillas-gratuitas/recibo-de-pago',
    },
  },
})

const { locale }: { locale: WritableComputedRef<string> } = useI18n()
const pageLocale: SupportedLocale = (locale.value as SupportedLocale) || 'fr'
const page: DibodevFreeTemplatePageContent =
  PAYMENT_RECEIPT_TEMPLATE_PAGES[pageLocale] ?? PAYMENT_RECEIPT_TEMPLATE_PAGES.fr
</script>
