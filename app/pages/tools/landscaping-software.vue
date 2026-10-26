<template>
  <DibodevSoftwareToolPageSections :page="page" :quiz="quiz" trackingLocation="landscaping_software" />
</template>

<script lang="ts" setup>
import type { WritableComputedRef } from 'vue'
import type { SupportedLocale } from '~/core/constants/categorySlugs'
import type { DibodevQuizDefinition } from '~/core/types/DibodevQuiz'
import type { DibodevSoftwareToolPageContent } from '~/core/types/DibodevSoftwareToolPage'
import DibodevSoftwareToolPageSections from '~/components/sections/DibodevSoftwareToolPageSections.vue'
import { LANDSCAPING_SOFTWARE_PAGES } from '~/core/constants/tools/landscapingSoftwarePage'
import { LANDSCAPING_SOFTWARE_QUIZZES } from '~/core/constants/tools/landscapingSoftwareQuiz'

definePageMeta({
  i18n: {
    paths: {
      fr: '/outils/logiciel-paysagiste',
      en: '/tools/landscaping-software',
      es: '/herramientas/software-paisajismo',
    },
  },
})

const { locale }: { locale: WritableComputedRef<string> } = useI18n()
const pageLocale: SupportedLocale = (locale.value as SupportedLocale) || 'fr'
const page: DibodevSoftwareToolPageContent = LANDSCAPING_SOFTWARE_PAGES[pageLocale] ?? LANDSCAPING_SOFTWARE_PAGES.fr
const quiz: DibodevQuizDefinition = LANDSCAPING_SOFTWARE_QUIZZES[pageLocale] ?? LANDSCAPING_SOFTWARE_QUIZZES.fr
</script>
