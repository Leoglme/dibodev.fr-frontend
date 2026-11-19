<template>
  <DibodevUpdateServicePageSections
    :page="page"
    :servicePagePath="GMAIL_BUSINESS_EMAIL_SERVICE_PAGE_PATH"
    :serviceTypes="GMAIL_BUSINESS_EMAIL_SERVICE_TYPES"
    :offerPricesInEuros="GMAIL_BUSINESS_EMAIL_SERVICE_OFFER_PRICES_EUR"
    :hasStartingPrices="true"
    :relatedArticleSlugs="GMAIL_BUSINESS_EMAIL_SERVICE_RELATED_ARTICLE_SLUGS"
    :contactQuery="GMAIL_BUSINESS_EMAIL_CONTACT_QUERY"
    :checkerTeaser="GMAIL_SEND_AS_CHECK_TEASER"
    :shouldShowWebsiteRedesignPrompt="false"
    trackingLocation="gmail_business_email_service"
    shareImageIcon="mail"
  />
</template>

<script lang="ts" setup>
import type { WritableComputedRef } from 'vue'
import type { SupportedLocale } from '~/core/constants/categorySlugs'
import type { DibodevUpdateServicePageContent } from '~/core/types/DibodevUpdateServicePage'
import DibodevUpdateServicePageSections from '~/components/sections/DibodevUpdateServicePageSections.vue'
import {
  GMAIL_BUSINESS_EMAIL_CONTACT_QUERY,
  GMAIL_BUSINESS_EMAIL_SERVICE_OFFER_PRICES_EUR,
  GMAIL_BUSINESS_EMAIL_SERVICE_PAGE_PATH,
  GMAIL_BUSINESS_EMAIL_SERVICE_RELATED_ARTICLE_SLUGS,
  GMAIL_BUSINESS_EMAIL_SERVICE_TYPES,
} from '~/core/constants/gmailBusinessEmailService/pageShared'
import { GMAIL_BUSINESS_EMAIL_SERVICE_PAGES } from '~/core/constants/gmailBusinessEmailServicePage'
import { GMAIL_SEND_AS_CHECK_TEASER } from '~/core/constants/gmailSendAsCheck/pageShared'

definePageMeta({
  i18n: {
    paths: {
      fr: '/adresse-mail-professionnelle-gmail',
      en: '/business-email-address-gmail',
      es: '/correo-profesional-gmail',
    },
  },
})

const { locale }: { locale: WritableComputedRef<string> } = useI18n()
const pageLocale: SupportedLocale = (locale.value as SupportedLocale) || 'fr'
const page: DibodevUpdateServicePageContent =
  GMAIL_BUSINESS_EMAIL_SERVICE_PAGES[pageLocale] ?? GMAIL_BUSINESS_EMAIL_SERVICE_PAGES.fr
</script>
