<template>
  <DibodevSoftwareToolPageSections :page="page" :quiz="quiz" trackingLocation="inventory_management_software" />
</template>

<script lang="ts" setup>
import type { WritableComputedRef } from 'vue'
import type { SupportedLocale } from '~/core/constants/categorySlugs'
import type { DibodevQuizDefinition } from '~/core/types/DibodevQuiz'
import type { DibodevSoftwareToolPageContent } from '~/core/types/DibodevSoftwareToolPage'
import DibodevSoftwareToolPageSections from '~/components/sections/DibodevSoftwareToolPageSections.vue'
import { INVENTORY_MANAGEMENT_SOFTWARE_PAGES } from '~/core/constants/tools/inventoryManagementSoftwarePage'
import { INVENTORY_MANAGEMENT_SOFTWARE_QUIZZES } from '~/core/constants/tools/inventoryManagementSoftwareQuiz'

definePageMeta({
  i18n: {
    paths: {
      fr: '/outils/logiciel-gestion-de-stock',
      en: '/tools/inventory-management-software',
      es: '/herramientas/software-gestion-de-stock',
    },
  },
})

const { locale }: { locale: WritableComputedRef<string> } = useI18n()
const pageLocale: SupportedLocale = (locale.value as SupportedLocale) || 'fr'
const page: DibodevSoftwareToolPageContent =
  INVENTORY_MANAGEMENT_SOFTWARE_PAGES[pageLocale] ?? INVENTORY_MANAGEMENT_SOFTWARE_PAGES.fr
const quiz: DibodevQuizDefinition =
  INVENTORY_MANAGEMENT_SOFTWARE_QUIZZES[pageLocale] ?? INVENTORY_MANAGEMENT_SOFTWARE_QUIZZES.fr
</script>
