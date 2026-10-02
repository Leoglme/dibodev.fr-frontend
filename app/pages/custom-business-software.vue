<template>
  <DibodevLandingSection
    :breadcrumbs="breadcrumbs"
    :titlePart1="t('businessSoftwarePage.hero.titlePart1')"
    :titleHighlight1="t('businessSoftwarePage.hero.titleHighlight1')"
    :titlePart2="t('businessSoftwarePage.hero.titlePart2')"
    :description="t('businessSoftwarePage.hero.description')"
    :ctaText="t('businessSoftwarePage.hero.cta')"
    :ctaPrimaryTo="localePath('/contact')"
    ctaTarget="#business-software-tools"
    :secondaryCta="{ text: t('businessSoftwarePage.hero.ctaSecondary'), target: '#estimator' }"
    :stats="heroStats"
    :compactTitle="true"
    :reassurances="reassurances"
    :decorated="true"
  >
    <template #aside>
      <DibodevTradeToolSlideshow
        :slides="heroSlides"
        :accessibleName="t('businessSoftwarePage.hero.slides.label')"
        @navigate="onHeroSlideNavigation"
      />
    </template>
  </DibodevLandingSection>
  <DibodevBusinessSoftwareToolsSection />
  <DibodevBusinessSoftwareProjectsSection />
  <DibodevBudgetEstimatorSection
    :eyebrow="t('businessSoftwarePage.pricing.eyebrow')"
    :title="t('businessSoftwarePage.pricing.title')"
    :intro="t('businessSoftwarePage.pricing.estimatorIntro')"
    tone="tint"
    trackingLocation="business_software"
  >
    <template v-if="toolTeasers.length" #footer>
      <DibodevToolTeaserList :teasers="toolTeasers" trackingLocation="business_software" tone="white" />
    </template>
  </DibodevBudgetEstimatorSection>
  <DibodevComparisonTableSection
    :eyebrow="t('businessSoftwarePage.comparison.eyebrow')"
    :title="t('businessSoftwarePage.comparison.title')"
    :intro="t('businessSoftwarePage.comparison.intro')"
    :columns="comparisonColumns"
    :highlightedColumn="2"
    :rows="comparisonRows"
    :criterionLabel="t('businessSoftwarePage.comparison.criterionLabel')"
    trackingLocation="business_software"
  />
  <DibodevGuaranteesSection
    :eyebrow="t('businessSoftwarePage.guarantees.eyebrow')"
    :title="t('businessSoftwarePage.guarantees.title')"
    :intro="t('businessSoftwarePage.guarantees.intro')"
    :guarantees="guarantees"
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
    :eyebrow="t('businessSoftwarePage.faq.eyebrow')"
    :title="t('businessSoftwarePage.faq.title')"
    :questions="faqQuestions"
  />
  <BlogRelatedArticles :title="t('businessSoftwarePage.articles.title')" :articles="relatedArticles" />
  <DibodevContactCtaSection
    :title="t('businessSoftwarePage.cta.title')"
    :description="t('businessSoftwarePage.cta.description')"
    :ctaText="t('businessSoftwarePage.cta.button')"
  />
</template>

<script setup lang="ts">
import type {
  DibodevComparisonCell,
  DibodevComparisonRow,
  DibodevComparisonState,
} from '~/core/types/DibodevComparisonTableSection'
import type { DibodevPhotoSlideshowNavigation } from '~/core/types/DibodevPhotoSlideshow'
import type { DibodevTradeToolSlide } from '~/core/types/DibodevTradeToolSlideshow'
import type { DibodevBusinessSoftwareHeroSlide } from '~/core/types/DibodevBusinessSoftwareHeroSlide'
import type { ComputedRef } from 'vue'
import type { DibodevArticle } from '~/core/types/DibodevArticle'
import type { DibodevBreadcrumbItem } from '~/core/types/DibodevBreadcrumb'
import type { DibodevFaqQuestion } from '~/core/types/DibodevFaqSection'
import type { DibodevGuarantee } from '~/core/types/DibodevGuaranteesSection'
import type { DibodevMethodStep } from '~/core/types/DibodevMethodSection'
import type { DibodevStatItemProps } from '~/core/types/DibodevStat'
import type { DibodevToolTeaserContent } from '~/core/types/DibodevToolTeaser'
import { computed } from 'vue'
import DibodevLandingSection from '~/components/sections/DibodevLandingSection.vue'
import DibodevBusinessSoftwareToolsSection from '~/components/sections/DibodevBusinessSoftwareToolsSection.vue'
import DibodevGuaranteesSection from '~/components/sections/DibodevGuaranteesSection.vue'
import DibodevMethodSection from '~/components/sections/DibodevMethodSection.vue'
import DibodevBusinessSoftwareProjectsSection from '~/components/sections/DibodevBusinessSoftwareProjectsSection.vue'
import DibodevTestimonialSection from '~/components/sections/DibodevTestimonialSection.vue'
import DibodevFaqSection from '~/components/sections/DibodevFaqSection.vue'
import BlogRelatedArticles from '~/components/blog/BlogRelatedArticles.vue'
import DibodevContactCtaSection from '~/components/sections/DibodevContactCtaSection.vue'
import DibodevTradeToolSlideshow from '~/components/data-displays/DibodevTradeToolSlideshow.vue'
import DibodevComparisonTableSection from '~/components/sections/DibodevComparisonTableSection.vue'
import DibodevBudgetEstimatorSection from '~/components/sections/DibodevBudgetEstimatorSection.vue'
import DibodevToolTeaserList from '~/components/data-displays/DibodevToolTeaserList.vue'
import { MALT_PROFILE_URL } from '~/config/contact'
import { useArticlesWithTranslations } from '~/composables/useArticlesWithTranslations'
import { useBreadcrumbTrail } from '~/composables/useBreadcrumbTrail'
import { useHeroStats } from '~/composables/useHeroStats'
import { useTracking } from '~/composables/useTracking'
import { usePageShareImage } from '~/composables/usePageShareImage'
import { useToolTeasers } from '~/composables/useToolTeasers'
import { BUSINESS_SOFTWARE_TOOL_TEASERS } from '~/core/constants/tools/toolTeasers'
import {
  BUSINESS_SOFTWARE_HERO_PHOTO_WIDTHS,
  BUSINESS_SOFTWARE_HERO_SLIDES,
} from '~/core/constants/businessSoftwareHeroSlides'
import { TRACKING_EVENTS } from '~/core/constants/trackingEvents'

definePageMeta({
  i18n: {
    paths: {
      fr: '/application-metier-sur-mesure-rennes',
      en: '/custom-business-software-rennes',
      es: '/software-de-gestion-a-medida-rennes',
    },
  },
})

const ARTICLES_POOL_SIZE: number = 100
const RELATED_ARTICLE_SLUGS: string[] = [
  'developpeur-application-metier-rennes-freelance-local',
  'freelance-ou-agence-rennes-outil-metier-sur-mesure',
  'developpement-logiciel-b2b-sur-mesure-prix',
]
const FAQ_QUESTION_KEYS: string[] = ['price', 'delay', 'freelance', 'area', 'excel', 'existing', 'vocabulary']
const METHOD_STEP_KEYS: string[] = ['discovery', 'quote', 'build', 'support']
const GUARANTEE_KEYS: string[] = ['ownership', 'data', 'training']
const REASSURANCE_KEYS: string[] = ['response24h', 'freeQuote', 'noCommitment']
/** Options compared, in column order; the third one is Dibodev. */
const COMPARISON_COLUMN_KEYS: string[] = ['offTheShelf', 'agency', 'dibodev']
const COMPARISON_ROW_KEYS: string[] = ['fit', 'price', 'contact', 'ownership', 'evolutions', 'delay']
/** Coverage of each criterion per column (see the i18n texts for the wording). */
const COMPARISON_STATES: Record<string, DibodevComparisonState[]> = {
  fit: ['partial', 'yes', 'yes'],
  price: ['partial', 'partial', 'yes'],
  contact: ['no', 'partial', 'yes'],
  ownership: ['no', 'partial', 'yes'],
  evolutions: ['no', 'partial', 'yes'],
  delay: ['yes', 'partial', 'partial'],
}
const HERO_IMAGES_FOLDER: string = '/images/business-software/hero'

const { t } = useI18n()
const { track } = useTracking()
usePageShareImage('businessSoftware')
const localePath = useLocalePath()
const { data: articlesPool } = await useArticlesWithTranslations({ perPage: ARTICLES_POOL_SIZE })
const heroStats: ComputedRef<DibodevStatItemProps[]> = await useHeroStats()
const reassurances: ComputedRef<string[]> = computed((): string[] =>
  REASSURANCE_KEYS.map((key: string): string => t(`contact.reassurance.${key}`)),
)
const comparisonColumns: ComputedRef<string[]> = computed((): string[] =>
  COMPARISON_COLUMN_KEYS.map((key: string): string => t(`businessSoftwarePage.comparison.columns.${key}`)),
)
const comparisonRows: ComputedRef<DibodevComparisonRow[]> = computed((): DibodevComparisonRow[] =>
  COMPARISON_ROW_KEYS.map(
    (rowKey: string): DibodevComparisonRow => ({
      label: t(`businessSoftwarePage.comparison.rows.${rowKey}.label`),
      cells: COMPARISON_COLUMN_KEYS.map(
        (columnKey: string, columnIndex: number): DibodevComparisonCell => ({
          state: COMPARISON_STATES[rowKey]?.[columnIndex] ?? 'partial',
          text: t(`businessSoftwarePage.comparison.rows.${rowKey}.${columnKey}`),
        }),
      ),
    }),
  ),
)
const heroSlides: ComputedRef<DibodevTradeToolSlide[]> = computed((): DibodevTradeToolSlide[] =>
  BUSINESS_SOFTWARE_HERO_SLIDES.map((slide: DibodevBusinessSoftwareHeroSlide): DibodevTradeToolSlide => {
    const texts: string = `businessSoftwarePage.hero.slides.items.${slide.id}`
    return {
      id: slide.id,
      photoUrl: buildHeroPhotoUrl(slide.fileSlug, BUSINESS_SOFTWARE_HERO_PHOTO_WIDTHS[0]!),
      photoSrcset: BUSINESS_SOFTWARE_HERO_PHOTO_WIDTHS.map(
        (width: number): string => `${buildHeroPhotoUrl(slide.fileSlug, width)} ${width}w`,
      ).join(', '),
      photoAlt: t(`${texts}.photoAlt`),
      screenshotUrl: `${HERO_IMAGES_FOLDER}/${slide.fileSlug}-screen.webp`,
      screenshotAlt: t(`${texts}.screenshotAlt`),
      hasTransparentScreenshot: slide.hasTransparentScreenshot,
      tradeLabel: t(`${texts}.pill`),
      need: t(`${texts}.need`),
      needSuffix: t('businessSoftwarePage.hero.slides.needSuffix', { trade: t(`${texts}.trade`) }),
    }
  }),
)
const toolTeasers: ComputedRef<DibodevToolTeaserContent[]> = useToolTeasers(
  (): DibodevToolTeaserContent[] => BUSINESS_SOFTWARE_TOOL_TEASERS,
)

/**
 * Builds the URL of a hero photo file at a given width.
 * @param {string} fileSlug - Slug of the photo files.
 * @param {number} width - Width of the file, in pixels.
 * @returns {string} The URL of the photo, served from `public/images/business-software/hero`.
 */
function buildHeroPhotoUrl(fileSlug: string, width: number): string {
  return `${HERO_IMAGES_FOLDER}/${fileSlug}-photo-${width}.webp`
}

/**
 * Tracks a slide change made by the visitor in the hero slideshow (auto-play is not reported).
 * @param {DibodevPhotoSlideshowNavigation} navigation - The slide now displayed and how the visitor reached it.
 * @returns {void}
 */
function onHeroSlideNavigation(navigation: DibodevPhotoSlideshowNavigation): void {
  track(TRACKING_EVENTS.photoSlideshowNavigated, {
    slide: navigation.slideId,
    method: navigation.method,
    location: 'business_software_hero',
  })
}

const breadcrumbs: ComputedRef<DibodevBreadcrumbItem[]> = useBreadcrumbTrail((): DibodevBreadcrumbItem[] => [
  { label: t('nav.businessSoftware'), to: null },
])

const relatedArticles: ComputedRef<DibodevArticle[]> = computed((): DibodevArticle[] =>
  RELATED_ARTICLE_SLUGS.map((slug: string): DibodevArticle | undefined =>
    (articlesPool.value ?? []).find((article: DibodevArticle): boolean => article.slug === slug),
  ).filter((article: DibodevArticle | undefined): article is DibodevArticle => article !== undefined),
)

const faqQuestions: ComputedRef<DibodevFaqQuestion[]> = computed((): DibodevFaqQuestion[] =>
  FAQ_QUESTION_KEYS.map(
    (key: string): DibodevFaqQuestion => ({
      question: t(`businessSoftwarePage.faq.${key}.question`),
      answer: t(`businessSoftwarePage.faq.${key}.answer`),
    }),
  ),
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

const guarantees: ComputedRef<DibodevGuarantee[]> = computed((): DibodevGuarantee[] =>
  GUARANTEE_KEYS.map(
    (key: string): DibodevGuarantee => ({
      title: t(`businessSoftwarePage.guarantees.items.${key}.title`),
      description: t(`businessSoftwarePage.guarantees.items.${key}.description`),
    }),
  ),
)

useHead(() => ({
  title: t('meta.businessSoftwarePage.title'),
  meta: [
    { name: 'description', content: t('meta.businessSoftwarePage.description') },
    { property: 'og:title', content: t('meta.businessSoftwarePage.title') },
    { property: 'og:description', content: t('meta.businessSoftwarePage.description') },
  ],
}))
</script>
