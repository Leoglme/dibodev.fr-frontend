<template>
  <DibodevTradeWebsitePageSections
    tradeKey="dentist"
    :page="page"
    :updatedAt="DENTIST_WEBSITE_PAGE_UPDATED_AT"
    :relatedArticleSlugs="DENTIST_WEBSITE_PAGE_RELATED_ARTICLE_SLUGS"
  />
</template>

<script lang="ts" setup>
import type { WritableComputedRef } from 'vue'
import type { SupportedLocale } from '~/core/constants/categorySlugs'
import type { DibodevTradeWebsitePageContent } from '~/core/types/DibodevTradeWebsitePage'
import DibodevTradeWebsitePageSections from '~/components/sections/DibodevTradeWebsitePageSections.vue'
import {
  DENTIST_WEBSITE_PAGE_RELATED_ARTICLE_SLUGS,
  DENTIST_WEBSITE_PAGE_UPDATED_AT,
} from '~/core/constants/tradeWebsites/dentist/pageShared'
import { DENTIST_WEBSITE_PAGES } from '~/core/constants/tradeWebsites/dentistWebsitePage'

definePageMeta({
  i18n: {
    paths: {
      fr: '/site-internet-dentiste',
      en: '/website-for-dentists',
      es: '/pagina-web-dentista',
    },
  },
})

const { locale }: { locale: WritableComputedRef<string> } = useI18n()
const pageLocale: SupportedLocale = (locale.value as SupportedLocale) || 'fr'
const page: DibodevTradeWebsitePageContent = DENTIST_WEBSITE_PAGES[pageLocale] ?? DENTIST_WEBSITE_PAGES.fr
</script>
