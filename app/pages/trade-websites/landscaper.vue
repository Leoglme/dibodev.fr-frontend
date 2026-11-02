<template>
  <DibodevTradeWebsitePageSections
    tradeKey="landscaper"
    :page="page"
    :updatedAt="LANDSCAPER_WEBSITE_PAGE_UPDATED_AT"
    :relatedArticleSlugs="LANDSCAPER_WEBSITE_PAGE_RELATED_ARTICLE_SLUGS"
  />
</template>

<script lang="ts" setup>
import type { WritableComputedRef } from 'vue'
import type { SupportedLocale } from '~/core/constants/categorySlugs'
import type { DibodevTradeWebsitePageContent } from '~/core/types/DibodevTradeWebsitePage'
import DibodevTradeWebsitePageSections from '~/components/sections/DibodevTradeWebsitePageSections.vue'
import {
  LANDSCAPER_WEBSITE_PAGE_RELATED_ARTICLE_SLUGS,
  LANDSCAPER_WEBSITE_PAGE_UPDATED_AT,
} from '~/core/constants/tradeWebsites/landscaper/pageShared'
import { LANDSCAPER_WEBSITE_PAGES } from '~/core/constants/tradeWebsites/landscaperWebsitePage'

definePageMeta({
  i18n: {
    paths: {
      fr: '/site-internet-paysagiste',
      en: '/website-for-landscapers',
      es: '/pagina-web-paisajista',
    },
  },
})

const { locale }: { locale: WritableComputedRef<string> } = useI18n()
const pageLocale: SupportedLocale = (locale.value as SupportedLocale) || 'fr'
const page: DibodevTradeWebsitePageContent = LANDSCAPER_WEBSITE_PAGES[pageLocale] ?? LANDSCAPER_WEBSITE_PAGES.fr
</script>
