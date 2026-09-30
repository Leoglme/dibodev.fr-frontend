<template>
  <DibodevSoftwareToolPageSections :page="page" :quiz="quiz" trackingLocation="driving_school_software" />
</template>

<script lang="ts" setup>
import type { SupportedLocale } from '~/core/constants/categorySlugs'
import type { DibodevQuizDefinition } from '~/core/types/DibodevQuiz'
import type { DibodevSoftwareToolPageContent } from '~/core/types/DibodevSoftwareToolPage'
import DibodevSoftwareToolPageSections from '~/components/sections/DibodevSoftwareToolPageSections.vue'
import { DRIVING_SCHOOL_SOFTWARE_PAGES } from '~/core/constants/tools/drivingSchoolSoftwarePage'
import { DRIVING_SCHOOL_SOFTWARE_QUIZZES } from '~/core/constants/tools/drivingSchoolSoftwareQuiz'

// The English and Spanish pages describe the French market too, and say so (publishers, ANTS, RdvPermis and CPF are French).
definePageMeta({
  i18n: {
    paths: {
      fr: '/outils/logiciel-auto-ecole',
      en: '/tools/driving-school-software',
      es: '/herramientas/software-autoescuela',
    },
  },
})

const { locale } = useI18n()
const pageLocale: SupportedLocale = (locale.value as SupportedLocale) || 'fr'
const page: DibodevSoftwareToolPageContent =
  DRIVING_SCHOOL_SOFTWARE_PAGES[pageLocale] ?? DRIVING_SCHOOL_SOFTWARE_PAGES.fr
const quiz: DibodevQuizDefinition = DRIVING_SCHOOL_SOFTWARE_QUIZZES[pageLocale] ?? DRIVING_SCHOOL_SOFTWARE_QUIZZES.fr
</script>
