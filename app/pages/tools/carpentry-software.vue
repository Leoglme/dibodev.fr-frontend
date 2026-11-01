<template>
  <DibodevSoftwareToolPageSections :page="page" :quiz="quiz" trackingLocation="carpentry_software" />
</template>

<script lang="ts" setup>
import type { WritableComputedRef } from 'vue'
import type { SupportedLocale } from '~/core/constants/categorySlugs'
import type { DibodevQuizDefinition } from '~/core/types/DibodevQuiz'
import type { DibodevSoftwareToolPageContent } from '~/core/types/DibodevSoftwareToolPage'
import DibodevSoftwareToolPageSections from '~/components/sections/DibodevSoftwareToolPageSections.vue'
import { CARPENTRY_SOFTWARE_PAGES } from '~/core/constants/tools/carpentrySoftwarePage'
import { CARPENTRY_SOFTWARE_QUIZZES } from '~/core/constants/tools/carpentrySoftwareQuiz'

definePageMeta({
  i18n: {
    paths: {
      fr: '/outils/logiciel-menuisier',
      en: '/tools/carpentry-software',
      es: '/herramientas/software-carpinteria',
    },
  },
})

const { locale }: { locale: WritableComputedRef<string> } = useI18n()
const pageLocale: SupportedLocale = (locale.value as SupportedLocale) || 'fr'
const page: DibodevSoftwareToolPageContent = CARPENTRY_SOFTWARE_PAGES[pageLocale] ?? CARPENTRY_SOFTWARE_PAGES.fr
const quiz: DibodevQuizDefinition = CARPENTRY_SOFTWARE_QUIZZES[pageLocale] ?? CARPENTRY_SOFTWARE_QUIZZES.fr
</script>
