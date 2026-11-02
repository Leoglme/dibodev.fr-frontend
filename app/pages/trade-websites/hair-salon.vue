<template>
  <DibodevTradeWebsitePageSections
    tradeKey="hairSalon"
    :page="page"
    :updatedAt="HAIR_SALON_WEBSITE_PAGE_UPDATED_AT"
    :relatedArticleSlugs="HAIR_SALON_WEBSITE_PAGE_RELATED_ARTICLE_SLUGS"
  />
</template>

<script lang="ts" setup>
import type { WritableComputedRef } from 'vue'
import type { SupportedLocale } from '~/core/constants/categorySlugs'
import type { DibodevTradeWebsitePageContent } from '~/core/types/DibodevTradeWebsitePage'
import DibodevTradeWebsitePageSections from '~/components/sections/DibodevTradeWebsitePageSections.vue'
import {
  HAIR_SALON_WEBSITE_PAGE_RELATED_ARTICLE_SLUGS,
  HAIR_SALON_WEBSITE_PAGE_UPDATED_AT,
} from '~/core/constants/tradeWebsites/hairSalon/pageShared'
import { HAIR_SALON_WEBSITE_PAGES } from '~/core/constants/tradeWebsites/hairSalonWebsitePage'

definePageMeta({
  i18n: {
    paths: {
      fr: '/site-internet-coiffeur',
      en: '/website-for-hair-salons',
      es: '/pagina-web-peluqueria',
    },
  },
})

const { locale }: { locale: WritableComputedRef<string> } = useI18n()
const pageLocale: SupportedLocale = (locale.value as SupportedLocale) || 'fr'
const page: DibodevTradeWebsitePageContent = HAIR_SALON_WEBSITE_PAGES[pageLocale] ?? HAIR_SALON_WEBSITE_PAGES.fr
</script>
