<template>
  <DibodevSoftwareToolPageSections :page="page" :quiz="quiz" trackingLocation="event_rental_software" />
</template>

<script lang="ts" setup>
import type { SupportedLocale } from '~/core/constants/categorySlugs'
import type { DibodevQuizDefinition } from '~/core/types/DibodevQuiz'
import type { DibodevSoftwareToolPageContent } from '~/core/types/DibodevSoftwareToolPage'
import DibodevSoftwareToolPageSections from '~/components/sections/DibodevSoftwareToolPageSections.vue'
import { EVENT_RENTAL_SOFTWARE_PAGES } from '~/core/constants/tools/eventRentalSoftwarePage'
import { EVENT_RENTAL_SOFTWARE_QUIZZES } from '~/core/constants/tools/eventRentalSoftwareQuiz'

// The English and Spanish pages describe the French market too, and say so (publishers and marquee rules are French).
definePageMeta({
  i18n: {
    paths: {
      fr: '/outils/logiciel-location-materiel-evenementiel',
      en: '/tools/event-rental-software',
      es: '/herramientas/software-alquiler-material-eventos',
    },
  },
})

const { locale } = useI18n()
const pageLocale: SupportedLocale = (locale.value as SupportedLocale) || 'fr'
const page: DibodevSoftwareToolPageContent = EVENT_RENTAL_SOFTWARE_PAGES[pageLocale] ?? EVENT_RENTAL_SOFTWARE_PAGES.fr
const quiz: DibodevQuizDefinition = EVENT_RENTAL_SOFTWARE_QUIZZES[pageLocale] ?? EVENT_RENTAL_SOFTWARE_QUIZZES.fr
</script>
