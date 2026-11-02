<template>
  <DibodevTradeWebsitePageSections
    tradeKey="carpenter"
    :page="page"
    :updatedAt="CARPENTER_WEBSITE_PAGE_UPDATED_AT"
    :relatedArticleSlugs="CARPENTER_WEBSITE_PAGE_RELATED_ARTICLE_SLUGS"
  />
</template>

<script lang="ts" setup>
import type { WritableComputedRef } from 'vue'
import type { SupportedLocale } from '~/core/constants/categorySlugs'
import type { DibodevTradeWebsitePageContent } from '~/core/types/DibodevTradeWebsitePage'
import DibodevTradeWebsitePageSections from '~/components/sections/DibodevTradeWebsitePageSections.vue'
import {
  CARPENTER_WEBSITE_PAGE_RELATED_ARTICLE_SLUGS,
  CARPENTER_WEBSITE_PAGE_UPDATED_AT,
} from '~/core/constants/tradeWebsites/carpenter/pageShared'
import { CARPENTER_WEBSITE_PAGES } from '~/core/constants/tradeWebsites/carpenterWebsitePage'

definePageMeta({
  i18n: {
    paths: {
      fr: '/site-internet-menuisier',
      en: '/website-for-carpenters',
      es: '/pagina-web-carpintero',
    },
  },
})

const { locale }: { locale: WritableComputedRef<string> } = useI18n()
const pageLocale: SupportedLocale = (locale.value as SupportedLocale) || 'fr'
const page: DibodevTradeWebsitePageContent = CARPENTER_WEBSITE_PAGES[pageLocale] ?? CARPENTER_WEBSITE_PAGES.fr
</script>
