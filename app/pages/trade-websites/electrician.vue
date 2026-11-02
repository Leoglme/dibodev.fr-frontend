<template>
  <DibodevTradeWebsitePageSections
    tradeKey="electrician"
    :page="page"
    :updatedAt="ELECTRICIAN_WEBSITE_PAGE_UPDATED_AT"
    :relatedArticleSlugs="ELECTRICIAN_WEBSITE_PAGE_RELATED_ARTICLE_SLUGS"
  />
</template>

<script lang="ts" setup>
import type { WritableComputedRef } from 'vue'
import type { SupportedLocale } from '~/core/constants/categorySlugs'
import type { DibodevTradeWebsitePageContent } from '~/core/types/DibodevTradeWebsitePage'
import DibodevTradeWebsitePageSections from '~/components/sections/DibodevTradeWebsitePageSections.vue'
import {
  ELECTRICIAN_WEBSITE_PAGE_RELATED_ARTICLE_SLUGS,
  ELECTRICIAN_WEBSITE_PAGE_UPDATED_AT,
} from '~/core/constants/tradeWebsites/electrician/pageShared'
import { ELECTRICIAN_WEBSITE_PAGES } from '~/core/constants/tradeWebsites/electricianWebsitePage'

definePageMeta({
  i18n: {
    paths: {
      fr: '/site-internet-electricien',
      en: '/website-for-electricians',
      es: '/pagina-web-electricista',
    },
  },
})

const { locale }: { locale: WritableComputedRef<string> } = useI18n()
const pageLocale: SupportedLocale = (locale.value as SupportedLocale) || 'fr'
const page: DibodevTradeWebsitePageContent = ELECTRICIAN_WEBSITE_PAGES[pageLocale] ?? ELECTRICIAN_WEBSITE_PAGES.fr
</script>
