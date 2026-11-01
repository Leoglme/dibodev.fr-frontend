<template>
  <DibodevFreeTemplatePageSections
    :page="page"
    :teaser="LEISURE_BOOKING_SOFTWARE_TEASER"
    :trackingLocation="FREE_TEMPLATE_PAGE_TRACKING_LOCATION"
  />
</template>

<script lang="ts" setup>
import type { WritableComputedRef } from 'vue'
import type { SupportedLocale } from '~/core/constants/categorySlugs'
import type { DibodevFreeTemplatePageContent } from '~/core/types/DibodevFreeTemplatePage'
import DibodevFreeTemplatePageSections from '~/components/sections/DibodevFreeTemplatePageSections.vue'
import { FREE_TEMPLATE_PAGE_TRACKING_LOCATION } from '~/core/constants/freeTemplates/freeTemplateCatalog'
import { BOOKING_SCHEDULE_TEMPLATE_PAGES } from '~/core/constants/freeTemplates/bookingSchedulePage'
import { LEISURE_BOOKING_SOFTWARE_TEASER } from '~/core/constants/tools/toolTeasers'

definePageMeta({
  i18n: {
    paths: {
      fr: '/outils/modeles-gratuits/planning-de-reservation',
      en: '/tools/free-templates/booking-schedule',
      es: '/herramientas/plantillas-gratuitas/planning-de-reservas',
    },
  },
})

const { locale }: { locale: WritableComputedRef<string> } = useI18n()
const pageLocale: SupportedLocale = (locale.value as SupportedLocale) || 'fr'
const page: DibodevFreeTemplatePageContent =
  BOOKING_SCHEDULE_TEMPLATE_PAGES[pageLocale] ?? BOOKING_SCHEDULE_TEMPLATE_PAGES.fr
</script>
