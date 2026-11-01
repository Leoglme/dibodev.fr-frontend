<template>
  <DibodevSoftwareToolPageSections :page="page" :quiz="quiz" trackingLocation="body_shop_software" />
</template>

<script lang="ts" setup>
import type { WritableComputedRef } from 'vue'
import type { SupportedLocale } from '~/core/constants/categorySlugs'
import type { DibodevQuizDefinition } from '~/core/types/DibodevQuiz'
import type { DibodevSoftwareToolPageContent } from '~/core/types/DibodevSoftwareToolPage'
import DibodevSoftwareToolPageSections from '~/components/sections/DibodevSoftwareToolPageSections.vue'
import { BODY_SHOP_SOFTWARE_PAGES } from '~/core/constants/tools/bodyShopSoftwarePage'
import { BODY_SHOP_SOFTWARE_QUIZZES } from '~/core/constants/tools/bodyShopSoftwareQuiz'

definePageMeta({
  i18n: {
    paths: {
      fr: '/outils/logiciel-carrosserie',
      en: '/tools/auto-body-shop-software',
      es: '/herramientas/software-taller-carroceria',
    },
  },
})

const { locale }: { locale: WritableComputedRef<string> } = useI18n()
const pageLocale: SupportedLocale = (locale.value as SupportedLocale) || 'fr'
const page: DibodevSoftwareToolPageContent = BODY_SHOP_SOFTWARE_PAGES[pageLocale] ?? BODY_SHOP_SOFTWARE_PAGES.fr
const quiz: DibodevQuizDefinition = BODY_SHOP_SOFTWARE_QUIZZES[pageLocale] ?? BODY_SHOP_SOFTWARE_QUIZZES.fr
</script>
