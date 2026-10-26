<template>
  <DibodevSoftwareToolPageSections :page="page" :quiz="quiz" trackingLocation="cleaning_business_software" />
</template>

<script lang="ts" setup>
import type { WritableComputedRef } from 'vue'
import type { SupportedLocale } from '~/core/constants/categorySlugs'
import type { DibodevQuizDefinition } from '~/core/types/DibodevQuiz'
import type { DibodevSoftwareToolPageContent } from '~/core/types/DibodevSoftwareToolPage'
import DibodevSoftwareToolPageSections from '~/components/sections/DibodevSoftwareToolPageSections.vue'
import { CLEANING_BUSINESS_SOFTWARE_PAGES } from '~/core/constants/tools/cleaningBusinessSoftwarePage'
import { CLEANING_BUSINESS_SOFTWARE_QUIZZES } from '~/core/constants/tools/cleaningBusinessSoftwareQuiz'

definePageMeta({
  i18n: {
    paths: {
      fr: '/outils/logiciel-entreprise-de-nettoyage',
      en: '/tools/cleaning-business-software',
      es: '/herramientas/software-empresa-limpieza',
    },
  },
})

const { locale }: { locale: WritableComputedRef<string> } = useI18n()
const pageLocale: SupportedLocale = (locale.value as SupportedLocale) || 'fr'
const page: DibodevSoftwareToolPageContent =
  CLEANING_BUSINESS_SOFTWARE_PAGES[pageLocale] ?? CLEANING_BUSINESS_SOFTWARE_PAGES.fr
const quiz: DibodevQuizDefinition =
  CLEANING_BUSINESS_SOFTWARE_QUIZZES[pageLocale] ?? CLEANING_BUSINESS_SOFTWARE_QUIZZES.fr
</script>
