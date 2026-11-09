<template>
  <DibodevUpdateServicePageSections
    :page="page"
    :servicePagePath="PHP_UPDATE_SERVICE_PAGE_PATH"
    :serviceTypes="PHP_UPDATE_SERVICE_TYPES"
    :offerPricesInEuros="PHP_UPDATE_SERVICE_OFFER_PRICES_EUR"
    :relatedArticleSlugs="PHP_UPDATE_SERVICE_RELATED_ARTICLE_SLUGS"
    :contactQuery="PHP_UPDATE_CONTACT_QUERY"
    :checkerTeaser="PHP_VULNERABILITY_CHECK_TEASER"
    trackingLocation="php_update_service"
    shareImageIcon="shield"
  />
</template>

<script lang="ts" setup>
import type { WritableComputedRef } from 'vue'
import type { SupportedLocale } from '~/core/constants/categorySlugs'
import type { DibodevUpdateServicePageContent } from '~/core/types/DibodevUpdateServicePage'
import DibodevUpdateServicePageSections from '~/components/sections/DibodevUpdateServicePageSections.vue'
import {
  PHP_UPDATE_CONTACT_QUERY,
  PHP_UPDATE_SERVICE_OFFER_PRICES_EUR,
  PHP_UPDATE_SERVICE_PAGE_PATH,
  PHP_UPDATE_SERVICE_RELATED_ARTICLE_SLUGS,
  PHP_UPDATE_SERVICE_TYPES,
} from '~/core/constants/phpUpdateService/pageShared'
import { PHP_UPDATE_SERVICE_PAGES } from '~/core/constants/phpUpdateServicePage'
import { PHP_VULNERABILITY_CHECK_TEASER } from '~/core/constants/tools/toolTeasers'

definePageMeta({
  i18n: {
    paths: {
      fr: '/mise-a-jour-php-site-logiciel',
      en: '/php-update-website-software',
      es: '/actualizacion-php-web-software',
    },
  },
})

const { locale }: { locale: WritableComputedRef<string> } = useI18n()
const pageLocale: SupportedLocale = (locale.value as SupportedLocale) || 'fr'
const page: DibodevUpdateServicePageContent = PHP_UPDATE_SERVICE_PAGES[pageLocale] ?? PHP_UPDATE_SERVICE_PAGES.fr
</script>
