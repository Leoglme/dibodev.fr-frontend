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
import { STAFF_REGISTER_TEMPLATE_PAGES } from '~/core/constants/freeTemplates/staffRegisterPage'
import { FREE_TEMPLATE_PAGE_TRACKING_LOCATION } from '~/core/constants/freeTemplates/freeTemplateCatalog'
import { FIELD_SERVICE_SOFTWARE_TEASER } from '~/core/constants/tools/toolTeasers'

definePageMeta({
  i18n: {
    paths: {
      fr: '/outils/modeles-gratuits/registre-unique-du-personnel',
      en: '/tools/free-templates/staff-register',
      es: '/herramientas/plantillas-gratuitas/registro-de-personal',
    },
  },
})

const { locale }: { locale: WritableComputedRef<string> } = useI18n()
const pageLocale: SupportedLocale = (locale.value as SupportedLocale) || 'fr'
const page: DibodevFreeTemplatePageContent =
  STAFF_REGISTER_TEMPLATE_PAGES[pageLocale] ?? STAFF_REGISTER_TEMPLATE_PAGES.fr
</script>
