<template>
  <DibodevSoftwareToolPageSections :page="page" :quiz="quiz" trackingLocation="training_center_software" />
</template>

<script lang="ts" setup>
import type { WritableComputedRef } from 'vue'
import type { SupportedLocale } from '~/core/constants/categorySlugs'
import type { DibodevQuizDefinition } from '~/core/types/DibodevQuiz'
import type { DibodevSoftwareToolPageContent } from '~/core/types/DibodevSoftwareToolPage'
import DibodevSoftwareToolPageSections from '~/components/sections/DibodevSoftwareToolPageSections.vue'
import { TRAINING_CENTER_SOFTWARE_PAGES } from '~/core/constants/tools/trainingCenterSoftwarePage'
import { TRAINING_CENTER_SOFTWARE_QUIZZES } from '~/core/constants/tools/trainingCenterSoftwareQuiz'

definePageMeta({
  i18n: {
    paths: {
      fr: '/outils/logiciel-organisme-de-formation',
      en: '/tools/training-center-software',
      es: '/herramientas/software-centro-de-formacion',
    },
  },
})

const { locale }: { locale: WritableComputedRef<string> } = useI18n()
const pageLocale: SupportedLocale = (locale.value as SupportedLocale) || 'fr'
const page: DibodevSoftwareToolPageContent =
  TRAINING_CENTER_SOFTWARE_PAGES[pageLocale] ?? TRAINING_CENTER_SOFTWARE_PAGES.fr
const quiz: DibodevQuizDefinition = TRAINING_CENTER_SOFTWARE_QUIZZES[pageLocale] ?? TRAINING_CENTER_SOFTWARE_QUIZZES.fr
</script>
