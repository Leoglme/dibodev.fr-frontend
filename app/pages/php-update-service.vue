<template>
  <DibodevLandingSection
    :breadcrumbs="breadcrumbs"
    :titlePart1="page.hero.titlePart1"
    :titleHighlight1="page.hero.titleHighlight1"
    :titlePart2="page.hero.titlePart2"
    :description="page.hero.description"
    :ctaText="page.hero.ctaText"
    :ctaPrimaryTo="contactRoute"
    :secondaryCta="{ text: page.hero.secondaryCtaText, target: '#pricing' }"
    :reassurances="page.hero.reassurances"
    :compactTitle="true"
    :decorated="true"
  />

  <DibodevPricingSection
    :eyebrow="page.offers.eyebrow"
    :title="page.offers.title"
    :intro="page.offers.intro"
    :offers="page.offers.cards"
    :notes="page.offers.notes"
    :ctaLabel="page.offers.ctaLabel"
    :ctaTo="contactRoute"
    :ctaLocation="`${TRACKING_LOCATION}_pricing`"
    :highlightLabel="page.offers.highlightLabel"
    :secondaryLink="{ text: page.offers.toolLinkText, to: toolRoute, trackedToolId: PHP_VULNERABILITY_CHECK_TOOL_ID }"
    tone="white"
  />

  <DibodevGuaranteesSection
    :anchorId="page.included.anchorId"
    :eyebrow="page.included.eyebrow"
    :title="page.included.title"
    :intro="page.included.intro"
    :guarantees="page.included.items"
    :columns="3"
    tone="offWhite"
  />

  <DibodevGuaranteesSection
    :anchorId="page.audiences.anchorId"
    :eyebrow="page.audiences.eyebrow"
    :title="page.audiences.title"
    :intro="page.audiences.intro"
    :guarantees="page.audiences.items"
    :columns="2"
    tone="tint"
  />

  <DibodevMethodSection
    :eyebrow="page.method.eyebrow"
    :title="page.method.title"
    :intro="page.method.intro"
    :steps="page.method.steps"
    tone="white"
  />

  <DibodevFaqSection :eyebrow="page.faq.eyebrow" :title="page.faq.title" :questions="page.faq.questions" />

  <BlogRelatedArticles
    :title="page.relatedArticles.title"
    :intro="page.relatedArticles.intro"
    :articles="relatedArticles"
    source="php_update_service_related"
  />

  <DibodevContactCtaSection
    :title="page.contactCta.title"
    :description="page.contactCta.description"
    :ctaText="page.contactCta.button"
    :ctaTo="contactRoute"
  />

  <DibodevMobileContactBar
    :text="page.mobileContactBar.text"
    :buttonLabel="page.mobileContactBar.buttonLabel"
    :to="contactRoute"
    :hiddenWhileVisibleId="LANDING_SECTION_ID"
    :trackingLocation="`${TRACKING_LOCATION}_mobile_bar`"
  />
</template>

<script lang="ts" setup>
import type { ComputedRef } from 'vue'
import type { SchemaServiceOfferDefinition } from '~/config/serviceSchema'
import type { SupportedLocale } from '~/core/constants/categorySlugs'
import type { DibodevArticle } from '~/core/types/DibodevArticle'
import type { DibodevBreadcrumbItem } from '~/core/types/DibodevBreadcrumb'
import type { DibodevPhpUpdateServicePageContent } from '~/core/types/DibodevPhpUpdateServicePage'
import type { DibodevPricingOffer } from '~/core/types/DibodevPricingSection'
import { computed } from 'vue'
import BlogRelatedArticles from '~/components/blog/BlogRelatedArticles.vue'
import DibodevMobileContactBar from '~/components/data-displays/DibodevMobileContactBar.vue'
import DibodevContactCtaSection from '~/components/sections/DibodevContactCtaSection.vue'
import DibodevFaqSection from '~/components/sections/DibodevFaqSection.vue'
import DibodevGuaranteesSection from '~/components/sections/DibodevGuaranteesSection.vue'
import DibodevLandingSection from '~/components/sections/DibodevLandingSection.vue'
import DibodevMethodSection from '~/components/sections/DibodevMethodSection.vue'
import DibodevPricingSection from '~/components/sections/DibodevPricingSection.vue'
import { useArticlesWithTranslations } from '~/composables/useArticlesWithTranslations'
import { useBreadcrumbTrail } from '~/composables/useBreadcrumbTrail'
import { buildServiceSchemaJson } from '~/config/serviceSchema'
import {
  PHP_UPDATE_SERVICE_OFFER_PRICES_EUR,
  PHP_UPDATE_SERVICE_PAGE_PATH,
  PHP_UPDATE_SERVICE_RELATED_ARTICLE_SLUGS,
  PHP_UPDATE_SERVICE_TYPES,
} from '~/core/constants/phpUpdateService/pageShared'
import { PHP_UPDATE_SERVICE_PAGES } from '~/core/constants/phpUpdateServicePage'
import { ArticleSelectionUtils } from '~/core/utils/ArticleSelectionUtils'
import { PhpVulnerabilityContactUtils } from '~/core/utils/PhpVulnerabilityContactUtils'

definePageMeta({
  i18n: {
    paths: {
      fr: '/mise-a-jour-php-site-logiciel',
      en: '/php-update-website-software',
      es: '/actualizacion-php-web-software',
    },
  },
})

const ARTICLES_POOL_SIZE: number = 100
const TRACKING_LOCATION: string = 'php_update_service'
const PHP_VULNERABILITY_CHECK_TOOL_ID: string = 'php-vulnerability-check'
/** Id of the landing section root: the contact bar of small screens waits until its buttons leave the screen. */
const LANDING_SECTION_ID: string = 'landing'

const { locale } = useI18n()
const localePath = useLocalePath()

const pageLocale: SupportedLocale = (locale.value as SupportedLocale) || 'fr'
const page: DibodevPhpUpdateServicePageContent = PHP_UPDATE_SERVICE_PAGES[pageLocale] ?? PHP_UPDATE_SERVICE_PAGES.fr
/** The contact page with the "update my site" message already written. */
const contactRoute: string = localePath({
  path: '/contact',
  query: PhpVulnerabilityContactUtils.buildUpdateContactQuery(),
})
const toolRoute: string = localePath({ name: 'tools-php-vulnerability-check' })

defineOgImageComponent(
  'DibodevToolShareImage',
  {
    titleLines: page.shareImage.titleLines,
    highlight: page.shareImage.highlight,
    subtitle: page.shareImage.subtitle,
    badge: page.shareImage.badge,
    icon: 'shield',
  },
  { alt: page.shareImage.alt },
)
const { data: articlesPool } = await useArticlesWithTranslations({ perPage: ARTICLES_POOL_SIZE })

const breadcrumbs: ComputedRef<DibodevBreadcrumbItem[]> = useBreadcrumbTrail((): DibodevBreadcrumbItem[] => [
  { label: page.breadcrumbLabel, to: null },
])

const relatedArticles: ComputedRef<DibodevArticle[]> = computed((): DibodevArticle[] =>
  ArticleSelectionUtils.selectBySlugs(articlesPool.value ?? [], PHP_UPDATE_SERVICE_RELATED_ARTICLE_SLUGS),
)

/** The priced offers of the JSON-LD, one per card, in the page language. */
const schemaOffers: SchemaServiceOfferDefinition[] = page.offers.cards.map(
  (card: DibodevPricingOffer, index: number): SchemaServiceOfferDefinition => ({
    name: card.title,
    price: PHP_UPDATE_SERVICE_OFFER_PRICES_EUR[index] ?? 0,
  }),
)

useHead({
  title: page.meta.title,
  meta: [
    { name: 'description', content: page.meta.description },
    { property: 'og:title', content: page.meta.title },
    { property: 'og:description', content: page.meta.description },
  ],
  script: [
    {
      type: 'application/ld+json',
      key: 'schema-php-update-service',
      innerHTML: buildServiceSchemaJson({
        pagePath: PHP_UPDATE_SERVICE_PAGE_PATH,
        name: page.meta.serviceName,
        description: page.meta.description,
        serviceType: PHP_UPDATE_SERVICE_TYPES,
        offers: schemaOffers,
      }),
    },
  ],
})
</script>
