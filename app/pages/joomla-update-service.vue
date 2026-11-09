<template>
  <DibodevUpdateServicePageSections
    :page="page"
    :servicePagePath="JOOMLA_UPDATE_SERVICE_PAGE_PATH"
    :serviceTypes="JOOMLA_UPDATE_SERVICE_TYPES"
    :offerPricesInEuros="JOOMLA_UPDATE_SERVICE_OFFER_PRICES_EUR"
    :relatedArticleSlugs="JOOMLA_UPDATE_SERVICE_RELATED_ARTICLE_SLUGS"
    :contactQuery="JOOMLA_UPDATE_CONTACT_QUERY"
    :checkerTeaser="PHP_VULNERABILITY_CHECK_TEASER"
    trackingLocation="joomla_update_service"
    shareImageIcon="wrench"
  />
</template>

<script lang="ts" setup>
import type { WritableComputedRef } from 'vue'
import type { SupportedLocale } from '~/core/constants/categorySlugs'
import type { DibodevUpdateServicePageContent } from '~/core/types/DibodevUpdateServicePage'
import DibodevUpdateServicePageSections from '~/components/sections/DibodevUpdateServicePageSections.vue'
import {
  JOOMLA_UPDATE_CONTACT_QUERY,
  JOOMLA_UPDATE_SERVICE_OFFER_PRICES_EUR,
  JOOMLA_UPDATE_SERVICE_PAGE_PATH,
  JOOMLA_UPDATE_SERVICE_RELATED_ARTICLE_SLUGS,
  JOOMLA_UPDATE_SERVICE_TYPES,
} from '~/core/constants/joomlaUpdateService/pageShared'
import { JOOMLA_UPDATE_SERVICE_PAGES } from '~/core/constants/joomlaUpdateServicePage'
import { PHP_VULNERABILITY_CHECK_TEASER } from '~/core/constants/tools/toolTeasers'

definePageMeta({
  i18n: {
    paths: {
      fr: '/mise-a-jour-site-joomla',
      en: '/joomla-website-update',
      es: '/actualizacion-web-joomla',
    },
  },
})

const { locale }: { locale: WritableComputedRef<string> } = useI18n()
const pageLocale: SupportedLocale = (locale.value as SupportedLocale) || 'fr'
const page: DibodevUpdateServicePageContent = JOOMLA_UPDATE_SERVICE_PAGES[pageLocale] ?? JOOMLA_UPDATE_SERVICE_PAGES.fr
</script>
