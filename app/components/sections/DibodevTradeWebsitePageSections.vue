<template>
  <DibodevToolLandingSection
    :breadcrumbs="breadcrumbs"
    :titleBefore="props.page.hero.titleBefore"
    :titleHighlight="props.page.hero.titleHighlight"
    :titleAfter="props.page.hero.titleAfter"
    :intro="props.page.hero.intro"
    contentWidth="wide"
    :aboutTitle="sharedWording.summaryTitle"
    :description="props.page.summary.text"
    :reassurances="props.page.hero.reassurances"
    :authorIntro="sharedWording.authorIntro"
    :authorBio="props.page.summary.authorBio"
    :updatedAt="props.updatedAt"
  >
    <template #tool>
      <DibodevSiteAtelier
        :trade="trade"
        :tradeWording="props.page.atelier"
        :wording="atelierWording"
        :tunnelId="tunnelId"
        :anchorId="TRADE_WEBSITE_ATELIER_ANCHOR_ID"
        :pricingAnchorId="TRADE_WEBSITE_PRICING_ANCHOR_ID"
      />
    </template>
  </DibodevToolLandingSection>

  <DibodevWebsiteExamplesSection
    :anchorId="TRADE_WEBSITE_EXAMPLES_ANCHOR_ID"
    :eyebrow="sharedWording.examples.eyebrow"
    :title="props.page.examples.title"
    :intro="trade.templates.length === 1 ? sharedWording.examples.introOne : sharedWording.examples.introMany"
    :examples="websiteExamples"
    :liveLinkLabel="sharedWording.examples.liveLinkLabel"
    :ctaLabel="sharedWording.examples.ctaLabel"
    :ctaTo="atelierHash"
    tone="offWhite"
    :trackingLocation="`${trackingLocation}_examples`"
  />

  <DibodevFeatureCardsSection
    :anchorId="TRADE_WEBSITE_CONTENTS_ANCHOR_ID"
    :eyebrow="props.page.contents.eyebrow"
    :title="props.page.contents.title"
    :intro="props.page.contents.intro"
    :cards="props.page.contents.cards"
    tone="white"
  />

  <DibodevSourcedFactsSection
    :anchorId="TRADE_WEBSITE_RULES_ANCHOR_ID"
    :eyebrow="props.page.rules.eyebrow"
    :title="props.page.rules.title"
    :intro="props.page.rules.intro"
    :facts="props.page.rules.facts"
    tone="offWhite"
  >
    <template #footer>
      <p class="text-muted max-w-5xl text-sm leading-6">{{ props.page.rules.footnote }}</p>
    </template>
  </DibodevSourcedFactsSection>

  <DibodevPricingSection
    :eyebrow="sharedWording.pricing.eyebrow"
    :title="sharedWording.pricing.title"
    :intro="props.page.pricing.intro"
    :offers="pricingOffers"
    :highlightLabel="sharedWording.pricing.highlightLabel"
    :notes="sharedWording.pricing.notes"
    :ctaLabel="sharedWording.pricing.demoButtonLabel"
    :ctaTo="atelierHash"
    :ctaLocation="`${trackingLocation}_pricing`"
    :secondaryLink="quoteLink"
    tone="white"
  />

  <DibodevResourceCardsSection
    :anchorId="TRADE_WEBSITE_RESOURCES_ANCHOR_ID"
    :eyebrow="sharedWording.resourcesEyebrow"
    :title="props.page.resources.title"
    :cards="resourceCards"
    :pillsTitle="sharedWording.otherTradesTitle"
    :pills="otherTradePills"
    tone="offWhite"
    :trackingLocation="trackingLocation"
  />

  <DibodevFaqSection
    :eyebrow="sharedWording.faqEyebrow"
    :title="props.page.faq.title"
    :questions="props.page.faq.questions"
    tone="white"
  />

  <BlogRelatedArticles
    v-if="relatedArticles.length > 0"
    :title="sharedWording.relatedArticlesTitle"
    :articles="relatedArticles"
    :source="`${trackingLocation}_related`"
  />

  <DibodevContactCtaSection
    :title="props.page.contactCta.title"
    :description="props.page.contactCta.description"
    :ctaText="sharedWording.contactCtaButton"
    :ctaTo="atelierHash"
    :trackingLocation="`${trackingLocation}_contact_cta`"
  />

  <DibodevMobileContactBar
    :text="props.page.mobileBarText"
    :buttonLabel="sharedWording.mobileBarButton"
    :to="{ hash: atelierHash }"
    :trackingLocation="`${trackingLocation}_mobile_bar`"
    :hiddenWhileVisibleId="TRADE_WEBSITE_ATELIER_ANCHOR_ID"
  />
</template>

<script lang="ts" setup>
import type { ComputedRef, PropType } from 'vue'
import type { SupportedLocale } from '~/core/constants/categorySlugs'
import type { DibodevArticle } from '~/core/types/DibodevArticle'
import type { DibodevBreadcrumbItem } from '~/core/types/DibodevBreadcrumb'
import type { DibodevLandingSecondaryCta } from '~/core/types/DibodevLandingSection'
import type { DibodevPricingOffer } from '~/core/types/DibodevPricingSection'
import type {
  DibodevResourceCard,
  DibodevResourceCardLink,
  DibodevResourcePill,
} from '~/core/types/DibodevResourceCardsSection'
import type { DibodevSiteAtelierWording } from '~/core/types/DibodevSiteAtelier'
import type {
  DibodevTradeWebsiteDefinition,
  DibodevTradeWebsiteKey,
  DibodevTradeWebsiteTemplate,
} from '~/core/types/DibodevTradeWebsite'
import type {
  DibodevTradeWebsitePageContent,
  DibodevTradeWebsiteSharedWording,
} from '~/core/types/DibodevTradeWebsitePage'
import type { DibodevTradeWebsitePageSectionsProps } from '~/core/types/DibodevTradeWebsitePageSections'
import type { DibodevWebsiteExample } from '~/core/types/DibodevWebsiteExamplesSection'
import { computed } from 'vue'
import BlogRelatedArticles from '~/components/blog/BlogRelatedArticles.vue'
import DibodevMobileContactBar from '~/components/data-displays/DibodevMobileContactBar.vue'
import DibodevContactCtaSection from '~/components/sections/DibodevContactCtaSection.vue'
import DibodevFaqSection from '~/components/sections/DibodevFaqSection.vue'
import DibodevFeatureCardsSection from '~/components/sections/DibodevFeatureCardsSection.vue'
import DibodevPricingSection from '~/components/sections/DibodevPricingSection.vue'
import DibodevResourceCardsSection from '~/components/sections/DibodevResourceCardsSection.vue'
import DibodevSourcedFactsSection from '~/components/sections/DibodevSourcedFactsSection.vue'
import DibodevToolLandingSection from '~/components/sections/DibodevToolLandingSection.vue'
import DibodevWebsiteExamplesSection from '~/components/sections/DibodevWebsiteExamplesSection.vue'
import DibodevSiteAtelier from '~/components/site-atelier/DibodevSiteAtelier.vue'
import { useArticlesWithTranslations } from '~/composables/useArticlesWithTranslations'
import { useBreadcrumbTrail } from '~/composables/useBreadcrumbTrail'
import { ORGANIZATION_ID, PERSON_ID } from '~/config/schema'
import { buildServiceSchemaJson } from '~/config/serviceSchema'
import { SITE_ATELIER_WORDINGS } from '~/core/constants/siteAtelier/siteAtelierWording'
import {
  SITE_ATELIER_TUNNEL_ID_PREFIX,
  TRADE_WEBSITE_ATELIER_ANCHOR_ID,
  TRADE_WEBSITE_CATALOG,
  TRADE_WEBSITE_CONTENTS_ANCHOR_ID,
  TRADE_WEBSITE_EXAMPLES_ANCHOR_ID,
  TRADE_WEBSITE_PRICING_ANCHOR_ID,
  TRADE_WEBSITE_RESOURCES_ANCHOR_ID,
  TRADE_WEBSITE_RULES_ANCHOR_ID,
  TRADE_WEBSITE_TRACKING_LOCATION_PREFIX,
  TRADE_WEBSITES_BY_KEY,
  TRADE_WEBSITES_HUB_ROUTE_NAME,
} from '~/core/constants/tradeWebsites/tradeWebsiteCatalog'
import { TRADE_WEBSITE_WORDINGS } from '~/core/constants/tradeWebsites/tradeWebsiteWording'
import { ArticleSelectionUtils } from '~/core/utils/ArticleSelectionUtils'
import { QuizTextUtils } from '~/core/utils/QuizTextUtils'
import { SiteAtelierPreviewUtils } from '~/core/utils/SiteAtelierPreviewUtils'

const SITE_URL: string = 'https://dibodev.fr'
const ARTICLES_POOL_SIZE: number = 100
const TEMPLATE_WEBSITE_PRICE: number = 290
const CUSTOM_WEBSITE_STARTING_PRICE: number = 1500
const WEBSITE_HEALTH_CHECK_ROUTE_NAME: string = 'tools-website-health-check'
const WEBSITE_PRICE_BAROMETER_ROUTE_NAME: string = 'website-price-barometer'
const SERVICE_AREAS: string[] = ['France']

/**
 * Every section of a "website for <trade>" page, with its meta tags, share image and WebPage and Service JSON-LD.
 */
const props: DibodevTradeWebsitePageSectionsProps = defineProps({
  tradeKey: {
    type: String as PropType<DibodevTradeWebsiteKey>,
    required: true,
  },
  page: {
    type: Object as PropType<DibodevTradeWebsitePageContent>,
    required: true,
  },
  updatedAt: {
    type: String as PropType<string>,
    required: true,
  },
  relatedArticleSlugs: {
    type: Array as PropType<string[]>,
    default: (): string[] => [],
  },
})

const { locale } = useI18n()
const localePath = useLocalePath()
const route = useRoute()
const pageLocale: SupportedLocale = (locale.value as SupportedLocale) || 'fr'
const trade: DibodevTradeWebsiteDefinition = TRADE_WEBSITES_BY_KEY[props.tradeKey]
const sharedWording: DibodevTradeWebsiteSharedWording = TRADE_WEBSITE_WORDINGS[pageLocale] ?? TRADE_WEBSITE_WORDINGS.fr
const atelierWording: DibodevSiteAtelierWording = SITE_ATELIER_WORDINGS[pageLocale] ?? SITE_ATELIER_WORDINGS.fr
const tunnelId: string = `${SITE_ATELIER_TUNNEL_ID_PREFIX}${trade.key}`
const trackingLocation: string = `${TRADE_WEBSITE_TRACKING_LOCATION_PREFIX}${trade.key}`
const atelierHash: string = `#${TRADE_WEBSITE_ATELIER_ANCHOR_ID}`

defineOgImageComponent(
  'DibodevTradeWebsiteShareImage',
  {
    titleLines: props.page.shareImage.titleLines,
    highlight: props.page.shareImage.highlight,
    subtitle: props.page.shareImage.subtitle,
    badge: props.page.shareImage.badge,
    templateImageSrc: trade.templates[0]?.shareImageSrc ?? '',
  },
  { alt: props.page.shareImage.alt },
)
const { data: articlesPool } = await useArticlesWithTranslations({ perPage: ARTICLES_POOL_SIZE })

/* COMPUTED */
const breadcrumbs: ComputedRef<DibodevBreadcrumbItem[]> = useBreadcrumbTrail((): DibodevBreadcrumbItem[] => [
  { label: sharedWording.hubBreadcrumbLabel, to: localePath({ name: TRADE_WEBSITES_HUB_ROUTE_NAME }) },
  { label: props.page.breadcrumbLabel, to: null },
])

const websiteExamples: ComputedRef<DibodevWebsiteExample[]> = computed((): DibodevWebsiteExample[] =>
  trade.templates.map((template: DibodevTradeWebsiteTemplate): DibodevWebsiteExample => {
    const templateTexts: { name: string; description: string } | undefined = props.page.atelier.templates[template.id]
    const templateName: string = templateTexts?.name ?? template.id
    return {
      key: template.id,
      name: QuizTextUtils.fillTemplate(sharedWording.examples.nameTemplate, { name: templateName }),
      description: templateTexts?.description ?? '',
      imageSrc: template.thumbnailSrc,
      imageAlt: QuizTextUtils.fillTemplate(props.page.examples.imageAlt, { name: templateName }),
      liveUrl: SiteAtelierPreviewUtils.demoUrlOf(template, false),
    }
  }),
)

const pricingOffers: ComputedRef<DibodevPricingOffer[]> = computed((): DibodevPricingOffer[] => [
  {
    title: sharedWording.pricing.templateOfferTitle,
    price: sharedWording.pricing.templateOfferPrice,
    description: props.page.pricing.templateOfferDescription,
    isHighlighted: true,
  },
  {
    title: sharedWording.pricing.customOfferTitle,
    price: sharedWording.pricing.customOfferPrice,
    description: props.page.pricing.customOfferDescription,
    isHighlighted: false,
  },
])

const quoteLink: ComputedRef<DibodevLandingSecondaryCta> = computed(
  (): DibodevLandingSecondaryCta => ({ text: sharedWording.pricing.quoteLinkLabel, to: localePath('/contact') }),
)

const resourceCards: ComputedRef<DibodevResourceCardLink[]> = computed((): DibodevResourceCardLink[] => {
  const toolCard: DibodevResourceCard =
    props.page.resources.toolCard ?? sharedWording.fallbackResourceCards.websiteHealthCheck
  const toolRouteName: string =
    props.page.resources.toolCard && trade.toolRouteName ? trade.toolRouteName : WEBSITE_HEALTH_CHECK_ROUTE_NAME
  const templateCard: DibodevResourceCard =
    props.page.resources.freeTemplateCard ?? sharedWording.fallbackResourceCards.websitePriceBarometer
  const templateRouteName: string =
    props.page.resources.freeTemplateCard && trade.freeTemplateRouteName
      ? trade.freeTemplateRouteName
      : WEBSITE_PRICE_BAROMETER_ROUTE_NAME
  return [
    { ...toolCard, routeName: toolRouteName, toolId: toolRouteName },
    { ...templateCard, routeName: templateRouteName, toolId: templateRouteName },
  ]
})

const otherTradePills: ComputedRef<DibodevResourcePill[]> = computed((): DibodevResourcePill[] => {
  const pills: DibodevResourcePill[] = TRADE_WEBSITE_CATALOG.filter(
    (otherTrade: DibodevTradeWebsiteDefinition): boolean => otherTrade.key !== trade.key,
  ).map(
    (otherTrade: DibodevTradeWebsiteDefinition): DibodevResourcePill => ({
      label: sharedWording.tradeLabels[otherTrade.key],
      routeName: otherTrade.routeName,
      toolId: otherTrade.routeName,
    }),
  )
  pills.push({
    label: sharedWording.allTradesLabel,
    routeName: TRADE_WEBSITES_HUB_ROUTE_NAME,
    toolId: TRADE_WEBSITES_HUB_ROUTE_NAME,
  })
  return pills
})

const relatedArticles: ComputedRef<DibodevArticle[]> = computed((): DibodevArticle[] =>
  ArticleSelectionUtils.selectBySlugs(articlesPool.value ?? [], props.relatedArticleSlugs),
)

/** The service is one entity across the languages: its id is the French address of the page. */
const servicePagePath: string = localePath({ name: trade.routeName }, 'fr')

const serviceSchemaJson: string = buildServiceSchemaJson({
  pagePath: servicePagePath,
  name: props.page.meta.serviceName,
  description: props.page.meta.serviceDescription,
  serviceType: [props.page.meta.serviceType],
  areaServed: SERVICE_AREAS,
  offers: [
    { name: sharedWording.pricing.templateOfferTitle, price: TEMPLATE_WEBSITE_PRICE },
    { name: sharedWording.pricing.customOfferTitle, price: CUSTOM_WEBSITE_STARTING_PRICE, isStartingPrice: true },
  ],
})

const webPageSchemaJson: string = JSON.stringify({
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  '@id': `${SITE_URL}${route.path}#webpage`,
  url: `${SITE_URL}${route.path}`,
  name: props.page.meta.title,
  description: props.page.meta.description,
  inLanguage: props.page.meta.inLanguage,
  dateModified: props.updatedAt,
  author: { '@id': PERSON_ID },
  publisher: { '@id': ORGANIZATION_ID },
  about: { '@id': `${SITE_URL}${servicePagePath}#service` },
})

useHead({
  title: props.page.meta.title,
  meta: [
    { name: 'description', content: props.page.meta.description },
    { property: 'og:title', content: props.page.meta.title },
    { property: 'og:description', content: props.page.meta.description },
  ],
  script: [
    { type: 'application/ld+json', key: 'schema-trade-website-webpage', innerHTML: webPageSchemaJson },
    { type: 'application/ld+json', key: 'schema-trade-website-service', innerHTML: serviceSchemaJson },
  ],
})
</script>
