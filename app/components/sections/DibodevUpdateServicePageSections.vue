<template>
  <DibodevLandingSection
    :breadcrumbs="breadcrumbs"
    :titlePart1="props.page.hero.titlePart1"
    :titleHighlight1="props.page.hero.titleHighlight1"
    :titlePart2="props.page.hero.titlePart2"
    :description="props.page.hero.description"
    :ctaText="props.page.hero.ctaText"
    :ctaPrimaryTo="contactRoute"
    :secondaryCta="{ text: props.page.hero.secondaryCtaText, target: '#pricing' }"
    :reassurances="props.page.hero.reassurances"
    :compactTitle="true"
    :decorated="true"
  />

  <DibodevPricingSection
    :eyebrow="props.page.offers.eyebrow"
    :title="props.page.offers.title"
    :intro="props.page.offers.intro"
    :offers="props.page.offers.cards"
    :notes="props.page.offers.notes"
    :ctaLabel="props.page.offers.ctaLabel"
    :ctaTo="contactRoute"
    :ctaLocation="`${props.trackingLocation}_pricing`"
    :highlightLabel="props.page.offers.highlightLabel"
    :secondaryLink="{
      text: props.page.offers.toolLinkText,
      to: checkerRoute,
      trackedToolId: props.checkerTeaser.toolId,
    }"
    tone="white"
  >
    <template #footer>
      <DibodevWebsiteRedesignPrompt :trackingLocation="`${props.trackingLocation}_redesign`" />
    </template>
  </DibodevPricingSection>

  <DibodevGuaranteesSection
    :anchorId="props.page.included.anchorId"
    :eyebrow="props.page.included.eyebrow"
    :title="props.page.included.title"
    :intro="props.page.included.intro"
    :guarantees="props.page.included.items"
    :columns="3"
    tone="offWhite"
  />

  <DibodevGuaranteesSection
    :anchorId="props.page.audiences.anchorId"
    :eyebrow="props.page.audiences.eyebrow"
    :title="props.page.audiences.title"
    :intro="props.page.audiences.intro"
    :guarantees="props.page.audiences.items"
    :columns="2"
    tone="tint"
  />

  <DibodevMethodSection
    :eyebrow="props.page.method.eyebrow"
    :title="props.page.method.title"
    :intro="props.page.method.intro"
    :steps="props.page.method.steps"
    tone="white"
  />

  <DibodevFaqSection
    :eyebrow="props.page.faq.eyebrow"
    :title="props.page.faq.title"
    :questions="props.page.faq.questions"
  />

  <BlogRelatedArticles
    :title="props.page.relatedArticles.title"
    :intro="props.page.relatedArticles.intro"
    :articles="relatedArticles"
    :source="`${props.trackingLocation}_related`"
  />

  <DibodevContactCtaSection
    :title="props.page.contactCta.title"
    :description="props.page.contactCta.description"
    :ctaText="props.page.contactCta.button"
    :ctaTo="contactRoute"
  />

  <DibodevMobileContactBar
    :text="props.page.mobileContactBar.text"
    :buttonLabel="props.page.mobileContactBar.buttonLabel"
    :to="contactRoute"
    :hiddenWhileVisibleId="LANDING_SECTION_ID"
    :trackingLocation="`${props.trackingLocation}_mobile_bar`"
  />
</template>

<script lang="ts" setup>
import type { ComputedRef, PropType } from 'vue'
import type { LocationQueryRaw } from 'vue-router'
import type { SchemaServiceOfferDefinition } from '~/config/serviceSchema'
import type { DibodevArticle } from '~/core/types/DibodevArticle'
import type { DibodevBreadcrumbItem } from '~/core/types/DibodevBreadcrumb'
import type { DibodevPricingOffer } from '~/core/types/DibodevPricingSection'
import type { DibodevToolShareImageIcon } from '~/core/types/DibodevToolShareImage'
import type { DibodevToolTeaserContent } from '~/core/types/DibodevToolTeaser'
import type { DibodevUpdateServicePageContent } from '~/core/types/DibodevUpdateServicePage'
import type { DibodevUpdateServicePageSectionsProps } from '~/core/types/DibodevUpdateServicePageSections'
import { computed } from 'vue'
import BlogRelatedArticles from '~/components/blog/BlogRelatedArticles.vue'
import DibodevMobileContactBar from '~/components/data-displays/DibodevMobileContactBar.vue'
import DibodevWebsiteRedesignPrompt from '~/components/data-displays/DibodevWebsiteRedesignPrompt.vue'
import DibodevContactCtaSection from '~/components/sections/DibodevContactCtaSection.vue'
import DibodevFaqSection from '~/components/sections/DibodevFaqSection.vue'
import DibodevGuaranteesSection from '~/components/sections/DibodevGuaranteesSection.vue'
import DibodevLandingSection from '~/components/sections/DibodevLandingSection.vue'
import DibodevMethodSection from '~/components/sections/DibodevMethodSection.vue'
import DibodevPricingSection from '~/components/sections/DibodevPricingSection.vue'
import { useArticlesWithTranslations } from '~/composables/useArticlesWithTranslations'
import { useBreadcrumbTrail } from '~/composables/useBreadcrumbTrail'
import { buildServiceSchemaJson } from '~/config/serviceSchema'
import { ArticleSelectionUtils } from '~/core/utils/ArticleSelectionUtils'

const ARTICLES_POOL_SIZE: number = 100
/** Id of the landing section root: the contact bar of small screens waits until its buttons leave the screen. */
const LANDING_SECTION_ID: string = 'landing'

/**
 * Every section of an update service page (PHP, Joomla), with its meta tags, share image and Service JSON-LD.
 */
const props: DibodevUpdateServicePageSectionsProps = defineProps({
  page: {
    type: Object as PropType<DibodevUpdateServicePageContent>,
    required: true,
  },
  servicePagePath: {
    type: String as PropType<string>,
    required: true,
  },
  serviceTypes: {
    type: Array as PropType<string[]>,
    required: true,
  },
  offerPricesInEuros: {
    type: Array as PropType<number[]>,
    required: true,
  },
  relatedArticleSlugs: {
    type: Array as PropType<string[]>,
    default: (): string[] => [],
  },
  contactQuery: {
    type: Object as PropType<LocationQueryRaw>,
    required: true,
  },
  checkerTeaser: {
    type: Object as PropType<DibodevToolTeaserContent>,
    required: true,
  },
  trackingLocation: {
    type: String as PropType<string>,
    required: true,
  },
  shareImageIcon: {
    type: String as PropType<DibodevToolShareImageIcon>,
    required: true,
  },
})

const localePath: ReturnType<typeof useLocalePath> = useLocalePath()

/** The contact page with the message of the page already written. */
const contactRoute: string = localePath({ path: '/contact', query: props.contactQuery })
const checkerRoute: string = localePath({ name: props.checkerTeaser.routeName })

defineOgImageComponent(
  'DibodevToolShareImage',
  {
    titleLines: props.page.shareImage.titleLines,
    highlight: props.page.shareImage.highlight,
    subtitle: props.page.shareImage.subtitle,
    badge: props.page.shareImage.badge,
    icon: props.shareImageIcon,
  },
  { alt: props.page.shareImage.alt },
)
const { data: articlesPool } = await useArticlesWithTranslations({ perPage: ARTICLES_POOL_SIZE })

const breadcrumbs: ComputedRef<DibodevBreadcrumbItem[]> = useBreadcrumbTrail((): DibodevBreadcrumbItem[] => [
  { label: props.page.breadcrumbLabel, to: null },
])

const relatedArticles: ComputedRef<DibodevArticle[]> = computed((): DibodevArticle[] =>
  ArticleSelectionUtils.selectBySlugs(articlesPool.value ?? [], props.relatedArticleSlugs),
)

/** The priced offers of the JSON-LD, one per card, in the page language. */
const schemaOffers: SchemaServiceOfferDefinition[] = props.page.offers.cards.map(
  (card: DibodevPricingOffer, index: number): SchemaServiceOfferDefinition => ({
    name: card.title,
    price: props.offerPricesInEuros[index] ?? 0,
  }),
)

useHead({
  title: props.page.meta.title,
  meta: [
    { name: 'description', content: props.page.meta.description },
    { property: 'og:title', content: props.page.meta.title },
    { property: 'og:description', content: props.page.meta.description },
  ],
  script: [
    {
      type: 'application/ld+json',
      key: 'schema-update-service',
      innerHTML: buildServiceSchemaJson({
        pagePath: props.servicePagePath,
        name: props.page.meta.serviceName,
        description: props.page.meta.description,
        serviceType: props.serviceTypes,
        offers: schemaOffers,
      }),
    },
  ],
})
</script>
