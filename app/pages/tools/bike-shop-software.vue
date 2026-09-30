<template>
  <DibodevSoftwareToolPageSections :page="page" :quiz="quiz" trackingLocation="bike_shop_software" />
</template>

<script lang="ts" setup>
import type { SupportedLocale } from '~/core/constants/categorySlugs'
import type { DibodevQuizDefinition } from '~/core/types/DibodevQuiz'
import type { DibodevSoftwareToolPageContent } from '~/core/types/DibodevSoftwareToolPage'
import DibodevSoftwareToolPageSections from '~/components/sections/DibodevSoftwareToolPageSections.vue'
import { BIKE_SHOP_SOFTWARE_PAGES } from '~/core/constants/tools/bikeShopSoftwarePage'
import { BIKE_SHOP_SOFTWARE_QUIZZES } from '~/core/constants/tools/bikeShopSoftwareQuiz'

// The English and Spanish pages describe the French market too, and say so (publishers, bike marking and repair bonus are French).
definePageMeta({
  i18n: {
    paths: {
      fr: '/outils/logiciel-atelier-velo',
      en: '/tools/bike-shop-software',
      es: '/herramientas/software-taller-bicicletas',
    },
  },
})

const { locale } = useI18n()
const pageLocale: SupportedLocale = (locale.value as SupportedLocale) || 'fr'
const page: DibodevSoftwareToolPageContent = BIKE_SHOP_SOFTWARE_PAGES[pageLocale] ?? BIKE_SHOP_SOFTWARE_PAGES.fr
const quiz: DibodevQuizDefinition = BIKE_SHOP_SOFTWARE_QUIZZES[pageLocale] ?? BIKE_SHOP_SOFTWARE_QUIZZES.fr
</script>
