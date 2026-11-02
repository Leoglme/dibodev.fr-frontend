<template>
  <DibodevTradeWebsitePageSections
    tradeKey="restaurant"
    :page="page"
    :updatedAt="RESTAURANT_WEBSITE_PAGE_UPDATED_AT"
    :relatedArticleSlugs="RESTAURANT_WEBSITE_PAGE_RELATED_ARTICLE_SLUGS"
  />
</template>

<script lang="ts" setup>
import type { WritableComputedRef } from 'vue'
import type { SupportedLocale } from '~/core/constants/categorySlugs'
import type { DibodevTradeWebsitePageContent } from '~/core/types/DibodevTradeWebsitePage'
import DibodevTradeWebsitePageSections from '~/components/sections/DibodevTradeWebsitePageSections.vue'
import {
  RESTAURANT_WEBSITE_PAGE_RELATED_ARTICLE_SLUGS,
  RESTAURANT_WEBSITE_PAGE_UPDATED_AT,
} from '~/core/constants/tradeWebsites/restaurant/pageShared'
import { RESTAURANT_WEBSITE_PAGES } from '~/core/constants/tradeWebsites/restaurantWebsitePage'

definePageMeta({
  i18n: {
    paths: {
      fr: '/site-internet-restaurant',
      en: '/website-for-restaurants',
      es: '/pagina-web-restaurante',
    },
  },
})

const { locale }: { locale: WritableComputedRef<string> } = useI18n()
const pageLocale: SupportedLocale = (locale.value as SupportedLocale) || 'fr'
const page: DibodevTradeWebsitePageContent = RESTAURANT_WEBSITE_PAGES[pageLocale] ?? RESTAURANT_WEBSITE_PAGES.fr
</script>
