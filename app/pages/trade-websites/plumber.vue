<template>
  <DibodevTradeWebsitePageSections
    tradeKey="plumber"
    :page="page"
    :updatedAt="PLUMBER_WEBSITE_PAGE_UPDATED_AT"
    :relatedArticleSlugs="PLUMBER_WEBSITE_PAGE_RELATED_ARTICLE_SLUGS"
  />
</template>

<script lang="ts" setup>
import type { WritableComputedRef } from 'vue'
import type { SupportedLocale } from '~/core/constants/categorySlugs'
import type { DibodevTradeWebsitePageContent } from '~/core/types/DibodevTradeWebsitePage'
import DibodevTradeWebsitePageSections from '~/components/sections/DibodevTradeWebsitePageSections.vue'
import {
  PLUMBER_WEBSITE_PAGE_RELATED_ARTICLE_SLUGS,
  PLUMBER_WEBSITE_PAGE_UPDATED_AT,
} from '~/core/constants/tradeWebsites/plumber/pageShared'
import { PLUMBER_WEBSITE_PAGES } from '~/core/constants/tradeWebsites/plumberWebsitePage'

definePageMeta({
  i18n: {
    paths: {
      fr: '/site-internet-plombier',
      en: '/website-for-plumbers',
      es: '/pagina-web-fontanero',
    },
  },
})

const { locale }: { locale: WritableComputedRef<string> } = useI18n()
const pageLocale: SupportedLocale = (locale.value as SupportedLocale) || 'fr'
const page: DibodevTradeWebsitePageContent = PLUMBER_WEBSITE_PAGES[pageLocale] ?? PLUMBER_WEBSITE_PAGES.fr
</script>
