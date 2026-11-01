<template>
  <DibodevSoftwareToolPageSections :page="page" :quiz="quiz" trackingLocation="leisure_booking_software" />
</template>

<script lang="ts" setup>
import type { WritableComputedRef } from 'vue'
import type { SupportedLocale } from '~/core/constants/categorySlugs'
import type { DibodevQuizDefinition } from '~/core/types/DibodevQuiz'
import type { DibodevSoftwareToolPageContent } from '~/core/types/DibodevSoftwareToolPage'
import DibodevSoftwareToolPageSections from '~/components/sections/DibodevSoftwareToolPageSections.vue'
import { LEISURE_BOOKING_SOFTWARE_PAGES } from '~/core/constants/tools/leisureBookingSoftwarePage'
import { LEISURE_BOOKING_SOFTWARE_QUIZZES } from '~/core/constants/tools/leisureBookingSoftwareQuiz'

definePageMeta({
  i18n: {
    paths: {
      fr: '/outils/logiciel-reservation-activites-loisirs',
      en: '/tools/leisure-activity-booking-software',
      es: '/herramientas/software-reservas-actividades-ocio',
    },
  },
})

const { locale }: { locale: WritableComputedRef<string> } = useI18n()
const pageLocale: SupportedLocale = (locale.value as SupportedLocale) || 'fr'
const page: DibodevSoftwareToolPageContent =
  LEISURE_BOOKING_SOFTWARE_PAGES[pageLocale] ?? LEISURE_BOOKING_SOFTWARE_PAGES.fr
const quiz: DibodevQuizDefinition = LEISURE_BOOKING_SOFTWARE_QUIZZES[pageLocale] ?? LEISURE_BOOKING_SOFTWARE_QUIZZES.fr
</script>
