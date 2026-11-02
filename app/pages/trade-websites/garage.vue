<template>
  <DibodevTradeWebsitePageSections
    tradeKey="garage"
    :page="page"
    :updatedAt="GARAGE_WEBSITE_PAGE_UPDATED_AT"
    :relatedArticleSlugs="GARAGE_WEBSITE_PAGE_RELATED_ARTICLE_SLUGS"
  />
</template>

<script lang="ts" setup>
import type { WritableComputedRef } from 'vue'
import type { SupportedLocale } from '~/core/constants/categorySlugs'
import type { DibodevTradeWebsitePageContent } from '~/core/types/DibodevTradeWebsitePage'
import DibodevTradeWebsitePageSections from '~/components/sections/DibodevTradeWebsitePageSections.vue'
import {
  GARAGE_WEBSITE_PAGE_RELATED_ARTICLE_SLUGS,
  GARAGE_WEBSITE_PAGE_UPDATED_AT,
} from '~/core/constants/tradeWebsites/garage/pageShared'
import { GARAGE_WEBSITE_PAGES } from '~/core/constants/tradeWebsites/garageWebsitePage'

definePageMeta({
  i18n: {
    paths: {
      fr: '/site-internet-garage',
      en: '/website-for-auto-repair-shops',
      es: '/pagina-web-taller-mecanico',
    },
  },
})

const { locale }: { locale: WritableComputedRef<string> } = useI18n()
const pageLocale: SupportedLocale = (locale.value as SupportedLocale) || 'fr'
const page: DibodevTradeWebsitePageContent = GARAGE_WEBSITE_PAGES[pageLocale] ?? GARAGE_WEBSITE_PAGES.fr
</script>
