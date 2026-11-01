<template>
  <DibodevFreeTemplatePageSections
    :page="page"
    :teaser="PERSONAL_TRAINER_SOFTWARE_TEASER"
    :trackingLocation="FREE_TEMPLATE_PAGE_TRACKING_LOCATION"
  />
</template>

<script lang="ts" setup>
import type { WritableComputedRef } from 'vue'
import type { SupportedLocale } from '~/core/constants/categorySlugs'
import type { DibodevFreeTemplatePageContent } from '~/core/types/DibodevFreeTemplatePage'
import DibodevFreeTemplatePageSections from '~/components/sections/DibodevFreeTemplatePageSections.vue'
import { FREE_TEMPLATE_PAGE_TRACKING_LOCATION } from '~/core/constants/freeTemplates/freeTemplateCatalog'
import { PERSONAL_TRAINER_CLIENT_REVIEW_TEMPLATE_PAGES } from '~/core/constants/freeTemplates/personalTrainerClientReviewPage'
import { PERSONAL_TRAINER_SOFTWARE_TEASER } from '~/core/constants/tools/toolTeasers'

definePageMeta({
  i18n: {
    paths: {
      fr: '/outils/modeles-gratuits/bilan-client-coach-sportif',
      en: '/tools/free-templates/personal-trainer-client-assessment',
      es: '/herramientas/plantillas-gratuitas/evaluacion-cliente-entrenador-personal',
    },
  },
})

const { locale }: { locale: WritableComputedRef<string> } = useI18n()
const pageLocale: SupportedLocale = (locale.value as SupportedLocale) || 'fr'
const page: DibodevFreeTemplatePageContent =
  PERSONAL_TRAINER_CLIENT_REVIEW_TEMPLATE_PAGES[pageLocale] ?? PERSONAL_TRAINER_CLIENT_REVIEW_TEMPLATE_PAGES.fr
</script>
