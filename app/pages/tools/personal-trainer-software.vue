<template>
  <DibodevSoftwareToolPageSections :page="page" :quiz="quiz" trackingLocation="personal_trainer_software" />
</template>

<script lang="ts" setup>
import type { SupportedLocale } from '~/core/constants/categorySlugs'
import type { DibodevQuizDefinition } from '~/core/types/DibodevQuiz'
import type { DibodevSoftwareToolPageContent } from '~/core/types/DibodevSoftwareToolPage'
import DibodevSoftwareToolPageSections from '~/components/sections/DibodevSoftwareToolPageSections.vue'
import { PERSONAL_TRAINER_SOFTWARE_PAGES } from '~/core/constants/tools/personalTrainerSoftwarePage'
import { PERSONAL_TRAINER_SOFTWARE_QUIZZES } from '~/core/constants/tools/personalTrainerSoftwareQuiz'

definePageMeta({
  i18n: {
    paths: {
      fr: '/outils/logiciel-coach-sportif',
      en: '/tools/personal-trainer-software',
      es: '/herramientas/software-entrenador-personal',
    },
  },
})

const { locale } = useI18n()
const pageLocale: SupportedLocale = (locale.value as SupportedLocale) || 'fr'
const page: DibodevSoftwareToolPageContent =
  PERSONAL_TRAINER_SOFTWARE_PAGES[pageLocale] ?? PERSONAL_TRAINER_SOFTWARE_PAGES.fr
const quiz: DibodevQuizDefinition =
  PERSONAL_TRAINER_SOFTWARE_QUIZZES[pageLocale] ?? PERSONAL_TRAINER_SOFTWARE_QUIZZES.fr
</script>
