<template>
  <DibodevFreeTemplatePageSections
    :page="page"
    :teaser="DRIVING_SCHOOL_SOFTWARE_TEASER"
    :trackingLocation="FREE_TEMPLATE_PAGE_TRACKING_LOCATION"
  />
</template>

<script lang="ts" setup>
import type { WritableComputedRef } from 'vue'
import type { SupportedLocale } from '~/core/constants/categorySlugs'
import type { DibodevFreeTemplatePageContent } from '~/core/types/DibodevFreeTemplatePage'
import DibodevFreeTemplatePageSections from '~/components/sections/DibodevFreeTemplatePageSections.vue'
import { FREE_TEMPLATE_PAGE_TRACKING_LOCATION } from '~/core/constants/freeTemplates/freeTemplateCatalog'
import { DRIVING_SCHOOL_CONTRACT_TEMPLATE_PAGES } from '~/core/constants/freeTemplates/drivingSchoolContractPage'
import { DRIVING_SCHOOL_SOFTWARE_TEASER } from '~/core/constants/tools/toolTeasers'

definePageMeta({
  i18n: {
    paths: {
      fr: '/outils/modeles-gratuits/contrat-de-formation-auto-ecole',
      en: '/tools/free-templates/driving-school-contract',
      es: '/herramientas/plantillas-gratuitas/contrato-de-formacion-autoescuela',
    },
  },
})

const { locale }: { locale: WritableComputedRef<string> } = useI18n()
const pageLocale: SupportedLocale = (locale.value as SupportedLocale) || 'fr'
const page: DibodevFreeTemplatePageContent =
  DRIVING_SCHOOL_CONTRACT_TEMPLATE_PAGES[pageLocale] ?? DRIVING_SCHOOL_CONTRACT_TEMPLATE_PAGES.fr
</script>
