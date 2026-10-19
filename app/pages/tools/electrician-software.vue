<template>
  <DibodevSoftwareToolPageSections :page="page" :quiz="quiz" trackingLocation="electrician_software" />
</template>

<script lang="ts" setup>
import type { SupportedLocale } from '~/core/constants/categorySlugs'
import type { DibodevQuizDefinition } from '~/core/types/DibodevQuiz'
import type { DibodevSoftwareToolPageContent } from '~/core/types/DibodevSoftwareToolPage'
import DibodevSoftwareToolPageSections from '~/components/sections/DibodevSoftwareToolPageSections.vue'
import { ELECTRICIAN_SOFTWARE_PAGES } from '~/core/constants/tools/electricianSoftwarePage'
import { ELECTRICIAN_SOFTWARE_QUIZZES } from '~/core/constants/tools/electricianSoftwareQuiz'

definePageMeta({
  i18n: {
    paths: {
      fr: '/outils/logiciel-electricien',
      en: '/tools/electrician-software',
      es: '/herramientas/software-electricista',
    },
  },
})

const { locale } = useI18n()
const pageLocale: SupportedLocale = (locale.value as SupportedLocale) || 'fr'
const page: DibodevSoftwareToolPageContent = ELECTRICIAN_SOFTWARE_PAGES[pageLocale] ?? ELECTRICIAN_SOFTWARE_PAGES.fr
const quiz: DibodevQuizDefinition = ELECTRICIAN_SOFTWARE_QUIZZES[pageLocale] ?? ELECTRICIAN_SOFTWARE_QUIZZES.fr
</script>
