<template>
  <DibodevLandingSection
    :breadcrumbs="breadcrumbs"
    :titlePart1="page.hero.titlePart1"
    :titleHighlight1="page.hero.titleHighlight1"
    :titlePart2="page.hero.titlePart2"
    :description="page.hero.description"
    :ctaText="page.hero.cta"
    :ctaTarget="`#${page.catalog.anchorId}`"
    :stats="heroStats"
    :reassurances="page.hero.reassurances"
    :decorated="true"
    align="center"
  />
  <DibodevTradeWebsiteCatalogSection
    :anchorId="page.catalog.anchorId"
    :eyebrow="page.catalog.eyebrow"
    :title="page.catalog.title"
    :intro="page.catalog.intro"
    :cards="catalogCards"
    :linkLabel="page.catalog.linkLabel"
    :otherTradeTitle="page.catalog.otherTrade.title"
    :otherTradeDescription="page.catalog.otherTrade.description"
    :otherTradeLinkLabel="page.catalog.otherTrade.linkLabel"
    tone="tint"
    :trackingLocation="TRADE_WEBSITES_HUB_TRACKING_LOCATION"
  />
  <DibodevPricingSection
    :eyebrow="sharedWording.pricing.eyebrow"
    :title="sharedWording.pricing.title"
    :intro="page.pricing.intro"
    :offers="pricingOffers"
    :highlightLabel="sharedWording.pricing.highlightLabel"
    :notes="sharedWording.pricing.notes"
    :ctaLabel="page.hero.cta"
    :ctaTo="`#${page.catalog.anchorId}`"
    :ctaLocation="`${TRADE_WEBSITES_HUB_TRACKING_LOCATION}_pricing`"
    :secondaryLink="quoteLink"
    tone="white"
  />
  <DibodevFaqSection
    :eyebrow="sharedWording.faqEyebrow"
    :title="page.faq.title"
    :questions="page.faq.questions"
    tone="offWhite"
  />
  <DibodevContactCtaSection
    :title="page.contactCta.title"
    :description="page.contactCta.description"
    :ctaText="page.contactCta.button"
    :trackingLocation="`${TRADE_WEBSITES_HUB_TRACKING_LOCATION}_contact_cta`"
  />
</template>

<script lang="ts" setup>
import type { ComputedRef, WritableComputedRef } from 'vue'
import type { SupportedLocale } from '~/core/constants/categorySlugs'
import type { DibodevBreadcrumbItem } from '~/core/types/DibodevBreadcrumb'
import type { DibodevLandingSecondaryCta } from '~/core/types/DibodevLandingSection'
import type { DibodevPricingOffer } from '~/core/types/DibodevPricingSection'
import type { DibodevStatItemProps } from '~/core/types/DibodevStat'
import type { DibodevTradeWebsiteDefinition } from '~/core/types/DibodevTradeWebsite'
import type { DibodevTradeWebsiteCatalogCard } from '~/core/types/DibodevTradeWebsiteCatalogSection'
import type {
  DibodevTradeWebsiteHubCardContent,
  DibodevTradeWebsiteHubPageContent,
} from '~/core/types/DibodevTradeWebsiteHubPage'
import type { DibodevTradeWebsiteSharedWording } from '~/core/types/DibodevTradeWebsitePage'
import { computed } from 'vue'
import DibodevContactCtaSection from '~/components/sections/DibodevContactCtaSection.vue'
import DibodevFaqSection from '~/components/sections/DibodevFaqSection.vue'
import DibodevLandingSection from '~/components/sections/DibodevLandingSection.vue'
import DibodevPricingSection from '~/components/sections/DibodevPricingSection.vue'
import DibodevTradeWebsiteCatalogSection from '~/components/sections/DibodevTradeWebsiteCatalogSection.vue'
import { useBreadcrumbTrail } from '~/composables/useBreadcrumbTrail'
import { ORGANIZATION_ID, PERSON_ID } from '~/config/schema'
import {
  TRADE_WEBSITE_CATALOG,
  TRADE_WEBSITE_TEMPLATE_COUNT,
  TRADE_WEBSITES_HUB_TRACKING_LOCATION,
  TRADE_WEBSITES_HUB_UPDATED_AT,
} from '~/core/constants/tradeWebsites/tradeWebsiteCatalog'
import { TRADE_WEBSITE_WORDINGS } from '~/core/constants/tradeWebsites/tradeWebsiteWording'
import { TRADE_WEBSITES_HUB_PAGES } from '~/core/constants/tradeWebsites/tradeWebsitesHubPage'
import { QuizTextUtils } from '~/core/utils/QuizTextUtils'

definePageMeta({
  i18n: {
    paths: {
      fr: '/site-internet-par-metier',
      en: '/websites-by-trade',
      es: '/pagina-web-por-oficio',
    },
  },
})

const SITE_URL: string = 'https://dibodev.fr'
const HUB_SHARE_TEMPLATE_IMAGE_SRC: string = '/images/sites/artisan-edito-share.jpg'

const { locale }: { locale: WritableComputedRef<string> } = useI18n()
const localePath = useLocalePath()
const route = useRoute()
const pageLocale: SupportedLocale = (locale.value as SupportedLocale) || 'fr'
const page: DibodevTradeWebsiteHubPageContent = TRADE_WEBSITES_HUB_PAGES[pageLocale] ?? TRADE_WEBSITES_HUB_PAGES.fr
const sharedWording: DibodevTradeWebsiteSharedWording = TRADE_WEBSITE_WORDINGS[pageLocale] ?? TRADE_WEBSITE_WORDINGS.fr

defineOgImageComponent(
  'DibodevTradeWebsiteShareImage',
  {
    titleLines: page.shareImage.titleLines,
    highlight: page.shareImage.highlight,
    subtitle: page.shareImage.subtitle,
    badge: page.shareImage.badge,
    templateImageSrc: HUB_SHARE_TEMPLATE_IMAGE_SRC,
  },
  { alt: page.shareImage.alt },
)

const breadcrumbs: ComputedRef<DibodevBreadcrumbItem[]> = useBreadcrumbTrail((): DibodevBreadcrumbItem[] => [
  { label: sharedWording.hubBreadcrumbLabel, to: null },
])

const heroStats: ComputedRef<DibodevStatItemProps[]> = computed((): DibodevStatItemProps[] => [
  { value: String(TRADE_WEBSITE_CATALOG.length), label: page.hero.tradesCountLabel },
  { value: String(TRADE_WEBSITE_TEMPLATE_COUNT), label: page.hero.templatesCountLabel },
  { value: page.hero.priceValue, label: page.hero.priceLabel },
])

const catalogCards: ComputedRef<DibodevTradeWebsiteCatalogCard[]> = computed((): DibodevTradeWebsiteCatalogCard[] =>
  TRADE_WEBSITE_CATALOG.map((trade: DibodevTradeWebsiteDefinition): DibodevTradeWebsiteCatalogCard => {
    const card: DibodevTradeWebsiteHubCardContent | undefined = page.catalog.cards.find(
      (hubCard: DibodevTradeWebsiteHubCardContent): boolean => hubCard.key === trade.key,
    )
    const stylesCountLabel: string =
      trade.templates.length === 1
        ? page.catalog.stylesCountOne
        : QuizTextUtils.fillTemplate(page.catalog.stylesCountMany, { count: String(trade.templates.length) })
    return {
      key: trade.key,
      icon: trade.icon,
      tradeLabel: sharedWording.tradeLabels[trade.key],
      title: card?.title ?? '',
      description: card?.description ?? '',
      stylesCountLabel,
      thumbnailSrc: trade.templates[0]?.thumbnailSrc ?? '',
      routeName: trade.routeName,
    }
  }),
)

const pricingOffers: ComputedRef<DibodevPricingOffer[]> = computed((): DibodevPricingOffer[] => [
  {
    title: sharedWording.pricing.templateOfferTitle,
    price: sharedWording.pricing.templateOfferPrice,
    description: page.pricing.templateOfferDescription,
    isHighlighted: true,
  },
  {
    title: sharedWording.pricing.customOfferTitle,
    price: sharedWording.pricing.customOfferPrice,
    description: page.pricing.customOfferDescription,
    isHighlighted: false,
  },
])

const quoteLink: ComputedRef<DibodevLandingSecondaryCta> = computed(
  (): DibodevLandingSecondaryCta => ({ text: sharedWording.pricing.quoteLinkLabel, to: localePath('/contact') }),
)

const collectionSchemaJson: ComputedRef<string> = computed((): string =>
  JSON.stringify({
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    '@id': `${SITE_URL}${route.path}#webpage`,
    url: `${SITE_URL}${route.path}`,
    name: page.meta.title,
    description: page.meta.description,
    inLanguage: page.meta.inLanguage,
    dateModified: TRADE_WEBSITES_HUB_UPDATED_AT,
    author: { '@id': PERSON_ID },
    publisher: { '@id': ORGANIZATION_ID },
    mainEntity: {
      '@type': 'ItemList',
      itemListElement: catalogCards.value.map(
        (card: DibodevTradeWebsiteCatalogCard, index: number): Record<string, string | number> => ({
          '@type': 'ListItem',
          position: index + 1,
          name: card.title,
          url: `${SITE_URL}${localePath({ name: card.routeName })}`,
        }),
      ),
    },
  }),
)

useHead(() => ({
  title: page.meta.title,
  meta: [
    { name: 'description', content: page.meta.description },
    { property: 'og:title', content: page.meta.title },
    { property: 'og:description', content: page.meta.description },
  ],
  script: [{ type: 'application/ld+json', key: 'schema-trade-websites-hub', innerHTML: collectionSchemaJson.value }],
}))
</script>
