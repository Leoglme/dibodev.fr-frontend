<template>
  <DibodevSoftwareToolPageSections :page="page" :quiz="quiz" trackingLocation="auto_repair_shop_software" />
</template>

<script lang="ts" setup>
import type { SupportedLocale } from '~/core/constants/categorySlugs'
import type { DibodevQuizDefinition } from '~/core/types/DibodevQuiz'
import type { DibodevSoftwareToolPageContent } from '~/core/types/DibodevSoftwareToolPage'
import DibodevSoftwareToolPageSections from '~/components/sections/DibodevSoftwareToolPageSections.vue'
import { AUTO_REPAIR_SHOP_SOFTWARE_PAGES } from '~/core/constants/tools/autoRepairShopSoftwarePage'
import { AUTO_REPAIR_SHOP_SOFTWARE_QUIZZES } from '~/core/constants/tools/autoRepairShopSoftwareQuiz'

// The English and Spanish pages describe the French market too, and say so (publishers and garage rules are French).
definePageMeta({
  i18n: {
    paths: {
      fr: '/outils/logiciel-garage-automobile',
      en: '/tools/auto-repair-shop-software',
      es: '/herramientas/software-taller-mecanico',
    },
  },
})

const { locale } = useI18n()
const pageLocale: SupportedLocale = (locale.value as SupportedLocale) || 'fr'
const page: DibodevSoftwareToolPageContent =
  AUTO_REPAIR_SHOP_SOFTWARE_PAGES[pageLocale] ?? AUTO_REPAIR_SHOP_SOFTWARE_PAGES.fr
const quiz: DibodevQuizDefinition =
  AUTO_REPAIR_SHOP_SOFTWARE_QUIZZES[pageLocale] ?? AUTO_REPAIR_SHOP_SOFTWARE_QUIZZES.fr
</script>
