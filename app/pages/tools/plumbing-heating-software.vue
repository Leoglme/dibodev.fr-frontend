<template>
  <DibodevSoftwareToolPageSections :page="page" :quiz="quiz" trackingLocation="plumbing_heating_software" />
</template>

<script lang="ts" setup>
import type { SupportedLocale } from '~/core/constants/categorySlugs'
import type { DibodevQuizDefinition } from '~/core/types/DibodevQuiz'
import type { DibodevSoftwareToolPageContent } from '~/core/types/DibodevSoftwareToolPage'
import DibodevSoftwareToolPageSections from '~/components/sections/DibodevSoftwareToolPageSections.vue'
import { PLUMBING_HEATING_SOFTWARE_PAGES } from '~/core/constants/tools/plumbingHeatingSoftwarePage'
import { PLUMBING_HEATING_SOFTWARE_QUIZZES } from '~/core/constants/tools/plumbingHeatingSoftwareQuiz'

// The English and Spanish pages describe the French market too, and say so (publishers, VAT and boiler rules are French).
definePageMeta({
  i18n: {
    paths: {
      fr: '/outils/logiciel-plombier-chauffagiste',
      en: '/tools/plumbing-heating-software',
      es: '/herramientas/software-fontaneria-calefaccion',
    },
  },
})

const { locale } = useI18n()
const pageLocale: SupportedLocale = (locale.value as SupportedLocale) || 'fr'
const page: DibodevSoftwareToolPageContent =
  PLUMBING_HEATING_SOFTWARE_PAGES[pageLocale] ?? PLUMBING_HEATING_SOFTWARE_PAGES.fr
const quiz: DibodevQuizDefinition =
  PLUMBING_HEATING_SOFTWARE_QUIZZES[pageLocale] ?? PLUMBING_HEATING_SOFTWARE_QUIZZES.fr
</script>
