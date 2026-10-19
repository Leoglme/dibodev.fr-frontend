<template>
  <DibodevSoftwareToolPageSections :page="page" :quiz="quiz" trackingLocation="field_service_software" />
</template>

<script lang="ts" setup>
import type { SupportedLocale } from '~/core/constants/categorySlugs'
import type { DibodevQuizDefinition } from '~/core/types/DibodevQuiz'
import type { DibodevSoftwareToolPageContent } from '~/core/types/DibodevSoftwareToolPage'
import DibodevSoftwareToolPageSections from '~/components/sections/DibodevSoftwareToolPageSections.vue'
import { FIELD_SERVICE_SOFTWARE_PAGES } from '~/core/constants/tools/fieldServiceSoftwarePage'
import { FIELD_SERVICE_SOFTWARE_QUIZZES } from '~/core/constants/tools/fieldServiceSoftwareQuiz'

// The English and Spanish pages describe the French market too, and say so (publishers, working-time and invoicing rules are French).
definePageMeta({
  i18n: {
    paths: {
      fr: '/outils/logiciel-gestion-interventions',
      en: '/tools/field-service-software',
      es: '/herramientas/software-gestion-intervenciones',
    },
  },
})

const { locale } = useI18n()
const pageLocale: SupportedLocale = (locale.value as SupportedLocale) || 'fr'
const page: DibodevSoftwareToolPageContent = FIELD_SERVICE_SOFTWARE_PAGES[pageLocale] ?? FIELD_SERVICE_SOFTWARE_PAGES.fr
const quiz: DibodevQuizDefinition = FIELD_SERVICE_SOFTWARE_QUIZZES[pageLocale] ?? FIELD_SERVICE_SOFTWARE_QUIZZES.fr
</script>
