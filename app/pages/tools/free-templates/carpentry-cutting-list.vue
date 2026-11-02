<template>
  <DibodevFreeTemplatePageSections
    :page="page"
    :teaser="CARPENTRY_SOFTWARE_TEASER"
    :tradeWebsiteTeaser="CARPENTER_WEBSITE_TEASER"
    :trackingLocation="FREE_TEMPLATE_PAGE_TRACKING_LOCATION"
  />
</template>

<script lang="ts" setup>
import type { WritableComputedRef } from 'vue'
import type { SupportedLocale } from '~/core/constants/categorySlugs'
import type { DibodevFreeTemplatePageContent } from '~/core/types/DibodevFreeTemplatePage'
import DibodevFreeTemplatePageSections from '~/components/sections/DibodevFreeTemplatePageSections.vue'
import { FREE_TEMPLATE_PAGE_TRACKING_LOCATION } from '~/core/constants/freeTemplates/freeTemplateCatalog'
import { CARPENTRY_CUTTING_LIST_TEMPLATE_PAGES } from '~/core/constants/freeTemplates/carpentryCuttingListPage'
import { CARPENTRY_SOFTWARE_TEASER } from '~/core/constants/tools/toolTeasers'
import { CARPENTER_WEBSITE_TEASER } from '~/core/constants/tradeWebsites/tradeWebsiteTeasers'

definePageMeta({
  i18n: {
    paths: {
      fr: '/outils/modeles-gratuits/fiche-de-debit-menuiserie',
      en: '/tools/free-templates/joinery-cutting-list',
      es: '/herramientas/plantillas-gratuitas/lista-de-corte-carpinteria',
    },
  },
})

const { locale }: { locale: WritableComputedRef<string> } = useI18n()
const pageLocale: SupportedLocale = (locale.value as SupportedLocale) || 'fr'
const page: DibodevFreeTemplatePageContent =
  CARPENTRY_CUTTING_LIST_TEMPLATE_PAGES[pageLocale] ?? CARPENTRY_CUTTING_LIST_TEMPLATE_PAGES.fr
</script>
