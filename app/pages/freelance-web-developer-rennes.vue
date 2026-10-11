<template>
  <DibodevLandingSection
    :breadcrumbs="breadcrumbs"
    :titlePart1="t('freelanceRennesPage.hero.titlePart1')"
    :titleHighlight1="t('freelanceRennesPage.hero.titleHighlight1')"
    :titlePart2="t('freelanceRennesPage.hero.titlePart2')"
    :description="t('freelanceRennesPage.hero.description')"
    :ctaText="t('freelanceRennesPage.hero.cta')"
    :ctaPrimaryTo="localePath('/contact')"
    ctaTarget="#services"
    :secondaryCta="{ text: t('freelanceRennesPage.hero.ctaSecondary'), target: '#pricing' }"
    :stats="heroStats"
    :compactTitle="true"
    :reassurances="reassurances"
    :decorated="true"
  >
    <template #aside>
      <DibodevFramedPortrait
        :src="PORTRAIT_SRC"
        :srcset="PORTRAIT_SRCSET"
        :sizes="PORTRAIT_SIZES"
        :alt="t('freelanceRennesPage.hero.portraitAlt')"
        :width="PORTRAIT_SIZE"
        :height="PORTRAIT_SIZE"
        :name="PERSON_NAME"
        :caption="t('freelanceRennesPage.hero.portraitCaption')"
      />
    </template>
  </DibodevLandingSection>
  <DibodevServicesSection
    :eyebrow="t('freelanceRennesPage.services.eyebrow')"
    :title="t('freelanceRennesPage.services.title')"
    :intro="t('freelanceRennesPage.services.intro')"
  />
  <DibodevGuaranteesSection
    anchorId="working-style"
    :eyebrow="t('freelanceRennesPage.workingStyle.eyebrow')"
    :title="t('freelanceRennesPage.workingStyle.title')"
    :intro="t('freelanceRennesPage.workingStyle.intro')"
    :guarantees="workingStyleItems"
    tone="tint"
  />
  <DibodevPricingSection
    :eyebrow="t('freelanceRennesPage.pricing.eyebrow')"
    :title="t('freelanceRennesPage.pricing.title')"
    :intro="t('freelanceRennesPage.pricing.intro')"
    :offers="pricingOffers"
    :notes="pricingNotes"
    :ctaLabel="t('home.pricing.cta')"
    ctaLocation="freelance_rennes_pricing"
    :highlightLabel="t('home.pricing.highlightLabel')"
    :secondaryLink="{ text: t('home.pricing.estimatorLink'), to: estimatorRoute }"
    tone="white"
  />
  <DibodevFeaturedProjectsSection
    :projectSlugs="SHOWCASED_PROJECT_SLUGS"
    :eyebrow="t('freelanceRennesPage.projects.eyebrow')"
    :title="t('freelanceRennesPage.projects.title')"
    :intro="t('freelanceRennesPage.projects.description')"
  />
  <DibodevMethodSection
    :eyebrow="t('method.eyebrow')"
    :title="t('method.title')"
    :intro="t('method.subtitle')"
    :steps="methodSteps"
  />
  <DibodevTestimonialSection
    :eyebrow="t('testimonial.eyebrow')"
    :title="t('testimonial.title')"
    :quote="t('testimonial.quote')"
    :authorName="t('testimonial.authorName')"
    :authorRole="t('testimonial.authorRole')"
    :sourceNote="t('testimonial.sourceNote')"
    :sourceLinkLabel="t('testimonial.sourceLink')"
    :sourceHref="MALT_PROFILE_URL"
    :rating="5"
    :ratingLabel="t('testimonial.ratingLabel')"
    :verifiedLabel="t('testimonial.verifiedLabel')"
  />
  <DibodevFaqSection
    :eyebrow="t('freelanceRennesPage.faq.eyebrow')"
    :title="t('freelanceRennesPage.faq.title')"
    :questions="faqQuestions"
  />
  <BlogRelatedArticles
    :title="t('freelanceRennesPage.articles.title')"
    :intro="t('freelanceRennesPage.articles.intro')"
    :articles="relatedArticles"
    source="freelance_rennes_related"
  />
  <DibodevContactCtaSection
    :title="t('freelanceRennesPage.cta.title')"
    :description="t('freelanceRennesPage.cta.description')"
    :ctaText="t('freelanceRennesPage.cta.button')"
  />
</template>

<script setup lang="ts">
import type { ComputedRef } from 'vue'
import type { DibodevArticle } from '~/core/types/DibodevArticle'
import type { DibodevBreadcrumbItem } from '~/core/types/DibodevBreadcrumb'
import type { DibodevFaqQuestion } from '~/core/types/DibodevFaqSection'
import type { DibodevGuarantee } from '~/core/types/DibodevGuaranteesSection'
import type { DibodevMethodStep } from '~/core/types/DibodevMethodSection'
import type { DibodevPricingOffer } from '~/core/types/DibodevPricingSection'
import type { DibodevStatItemProps } from '~/core/types/DibodevStat'
import { computed } from 'vue'
import DibodevLandingSection from '~/components/sections/DibodevLandingSection.vue'
import DibodevFramedPortrait from '~/components/data-displays/DibodevFramedPortrait.vue'
import DibodevServicesSection from '~/components/sections/DibodevServicesSection.vue'
import DibodevGuaranteesSection from '~/components/sections/DibodevGuaranteesSection.vue'
import DibodevPricingSection from '~/components/sections/DibodevPricingSection.vue'
import DibodevFeaturedProjectsSection from '~/components/sections/DibodevFeaturedProjectsSection.vue'
import DibodevMethodSection from '~/components/sections/DibodevMethodSection.vue'
import DibodevTestimonialSection from '~/components/sections/DibodevTestimonialSection.vue'
import DibodevFaqSection from '~/components/sections/DibodevFaqSection.vue'
import BlogRelatedArticles from '~/components/blog/BlogRelatedArticles.vue'
import DibodevContactCtaSection from '~/components/sections/DibodevContactCtaSection.vue'
import { MALT_PROFILE_URL } from '~/config/contact'
import { PERSON_NAME } from '~/config/schema'
import { buildFreelanceRennesServiceSchemaJson } from '~/config/freelanceRennesSchema'
import { useArticlesWithTranslations } from '~/composables/useArticlesWithTranslations'
import { useBreadcrumbTrail } from '~/composables/useBreadcrumbTrail'
import { useHeroStats } from '~/composables/useHeroStats'
import { usePageShareImage } from '~/composables/usePageShareImage'
import { ArticleSelectionUtils } from '~/core/utils/ArticleSelectionUtils'

definePageMeta({
  i18n: {
    paths: {
      fr: '/developpeur-web-freelance-rennes',
      en: '/freelance-web-developer-rennes',
      es: '/desarrollador-web-freelance-rennes',
    },
  },
})

const ARTICLES_POOL_SIZE: number = 100
const PORTRAIT_SIZE: number = 800
const PORTRAIT_SRC: string = '/images/about/leo-guillaume-portrait-800.webp'
const PORTRAIT_SRCSET: string =
  '/images/about/leo-guillaume-portrait-400.webp 400w, /images/about/leo-guillaume-portrait-800.webp 800w'
const PORTRAIT_SIZES: string = '(min-width: 1280px) 448px, (min-width: 1024px) 384px, (min-width: 640px) 384px, 320px'
/** Projects shown as cards: the ones built for companies of the Rennes area first, then Léo's own products. */
const SHOWCASED_PROJECT_SLUGS: string[] = [
  'izidoor',
  'a2m-orizon-solution',
  'gestion-temps',
  'stockpme',
  'devleadhunter',
  'goupixdex',
]
const RELATED_ARTICLE_SLUGS: string[] = [
  'developpeur-nuxt-freelance-rennes',
  'freelance-ou-agence-rennes-outil-metier-sur-mesure',
  'developpeur-application-metier-rennes-freelance-local',
]
const WORKING_STYLE_KEYS: string[] = ['remote', 'singleContact', 'ownership']
/** Offers of the home pricing texts (`home.pricing.offers.*`), the custom software card being the emphasised one. */
const PRICING_OFFER_KEYS: string[] = ['website', 'automation', 'software', 'maintenance']
const HIGHLIGHTED_PRICING_OFFER_KEY: string = 'software'
const PRICING_NOTE_KEYS: string[] = ['dailyRateNote', 'freeQuoteNote', 'vatNote']
const FAQ_QUESTION_KEYS: string[] = ['rate', 'delay', 'agency', 'onSite', 'stack', 'afterLaunch', 'area']
const METHOD_STEP_KEYS: string[] = ['discovery', 'quote', 'build', 'support']
const REASSURANCE_KEYS: string[] = ['response24h', 'freeQuote', 'noCommitment']

const { t } = useI18n()
const localePath = useLocalePath()
usePageShareImage('freelanceRennes')
const { data: articlesPool } = await useArticlesWithTranslations({ perPage: ARTICLES_POOL_SIZE })
const heroStats: ComputedRef<DibodevStatItemProps[]> = await useHeroStats()

const reassurances: ComputedRef<string[]> = computed((): string[] =>
  REASSURANCE_KEYS.map((key: string): string => t(`contact.reassurance.${key}`)),
)

const breadcrumbs: ComputedRef<DibodevBreadcrumbItem[]> = useBreadcrumbTrail((): DibodevBreadcrumbItem[] => [
  { label: t('freelanceRennesPage.breadcrumb'), to: null },
])

const workingStyleItems: ComputedRef<DibodevGuarantee[]> = computed((): DibodevGuarantee[] =>
  WORKING_STYLE_KEYS.map(
    (key: string): DibodevGuarantee => ({
      title: t(`freelanceRennesPage.workingStyle.items.${key}.title`),
      description: t(`freelanceRennesPage.workingStyle.items.${key}.description`),
    }),
  ),
)

const pricingOffers: ComputedRef<DibodevPricingOffer[]> = computed((): DibodevPricingOffer[] =>
  PRICING_OFFER_KEYS.map(
    (key: string): DibodevPricingOffer => ({
      title: t(`home.pricing.offers.${key}.title`),
      price: t(`home.pricing.offers.${key}.price`),
      description: t(`home.pricing.offers.${key}.description`),
      isHighlighted: key === HIGHLIGHTED_PRICING_OFFER_KEY,
    }),
  ),
)

const pricingNotes: ComputedRef<string[]> = computed((): string[] =>
  PRICING_NOTE_KEYS.map((key: string): string => t(`home.pricing.${key}`)),
)

/** Budget estimator of the business software page, where every kind of project gets a price range. */
const estimatorRoute: ComputedRef<string> = computed(
  (): string => `${localePath('custom-business-software')}#estimator`,
)

const methodSteps: ComputedRef<DibodevMethodStep[]> = computed((): DibodevMethodStep[] =>
  METHOD_STEP_KEYS.map(
    (key: string): DibodevMethodStep => ({
      label: t(`method.${key}.label`),
      title: t(`method.${key}.title`),
      description: t(`method.${key}.description`),
    }),
  ),
)

const faqQuestions: ComputedRef<DibodevFaqQuestion[]> = computed((): DibodevFaqQuestion[] =>
  FAQ_QUESTION_KEYS.map(
    (key: string): DibodevFaqQuestion => ({
      question: t(`freelanceRennesPage.faq.${key}.question`),
      answer: t(`freelanceRennesPage.faq.${key}.answer`),
    }),
  ),
)

const relatedArticles: ComputedRef<DibodevArticle[]> = computed((): DibodevArticle[] =>
  ArticleSelectionUtils.selectBySlugs(articlesPool.value ?? [], RELATED_ARTICLE_SLUGS),
)

useHead(() => ({
  title: t('meta.freelanceRennesPage.title'),
  meta: [
    { name: 'description', content: t('meta.freelanceRennesPage.description') },
    { property: 'og:title', content: t('meta.freelanceRennesPage.title') },
    { property: 'og:description', content: t('meta.freelanceRennesPage.description') },
  ],
  script: [
    {
      type: 'application/ld+json',
      key: 'schema-freelance-rennes-service',
      innerHTML: buildFreelanceRennesServiceSchemaJson(
        t('freelanceRennesPage.schema.serviceName'),
        t('meta.freelanceRennesPage.description'),
      ),
    },
  ],
}))
</script>
