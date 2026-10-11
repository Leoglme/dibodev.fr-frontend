<template>
  <DibodevLandingSection
    :breadcrumbs="breadcrumbs"
    :titlePart1="page.hero.titlePart1"
    :titleHighlight1="page.hero.titleHighlight"
    :titlePart2="page.hero.titlePart2"
    :description="page.hero.description"
    :ctaText="page.hero.cta"
    :ctaPrimaryTo="localePath('/contact')"
    :secondaryCta="{ text: page.hero.ctaSecondary, target: TEST_ANCHOR, trackedToolId: TEST_TOOL_ID }"
    :stats="heroStats"
    :compactTitle="true"
    :reassurances="page.hero.reassurances"
    :decorated="true"
  >
    <template #aside>
      <DibodevFramedPortrait
        :src="FOUNDER_PORTRAIT_SRC"
        :srcset="FOUNDER_PORTRAIT_SRCSET"
        :sizes="FOUNDER_PORTRAIT_SIZES"
        :alt="page.hero.portraitAlt"
        :width="FOUNDER_PORTRAIT_SIZE"
        :height="FOUNDER_PORTRAIT_SIZE"
        :name="PERSON_NAME"
        :caption="page.hero.portraitCaption"
      />
    </template>
  </DibodevLandingSection>
  <DibodevGuaranteesSection
    anchorId="symptoms"
    :eyebrow="page.symptoms.eyebrow"
    :title="page.symptoms.title"
    :intro="page.symptoms.intro"
    :guarantees="page.symptoms.items"
    :columns="3"
    tone="tint"
  />
  <DibodevSourcedFactsSection
    anchorId="risks"
    :eyebrow="page.risks.eyebrow"
    :title="page.risks.title"
    :intro="page.risks.intro"
    :facts="page.risks.facts"
    tone="white"
  />
  <DibodevQuizSection
    :anchorId="TEST_ANCHOR_ID"
    :eyebrow="page.test.eyebrow"
    :title="page.test.title"
    :intro="page.test.intro"
    :quiz="quiz"
    tone="offWhite"
  />
  <DibodevMethodSection
    :eyebrow="page.method.eyebrow"
    :title="page.method.title"
    :intro="page.method.intro"
    :steps="page.method.steps"
  />
  <DibodevPricingSection
    :eyebrow="page.pricing.eyebrow"
    :title="page.pricing.title"
    :intro="page.pricing.intro"
    :offers="page.pricing.offers"
    :notes="page.pricing.notes"
    :ctaLabel="page.pricing.cta"
    ctaLocation="ai_app_takeover_pricing"
    :highlightLabel="page.pricing.highlightLabel"
    :secondaryLink="{ text: page.pricing.secondaryLink, target: TEST_ANCHOR }"
    tone="tint"
  />
  <DibodevGuaranteesSection
    anchorId="deliverables"
    :eyebrow="page.deliverables.eyebrow"
    :title="page.deliverables.title"
    :intro="page.deliverables.intro"
    :guarantees="page.deliverables.items"
    :columns="4"
    tone="white"
  />
  <DibodevProjectCaseStudySection
    :eyebrow="page.caseStudy.eyebrow"
    :title="page.caseStudy.title"
    :intro="page.caseStudy.intro"
    :columns="page.caseStudy.columns"
    tone="offWhite"
  />
  <DibodevGuaranteesSection
    anchorId="sample-report"
    :eyebrow="page.sampleReport.eyebrow"
    :title="page.sampleReport.title"
    :intro="page.sampleReport.intro"
    :guarantees="page.sampleReport.items"
    :columns="2"
    tone="white"
  />
  <DibodevFaqSection :eyebrow="page.faq.eyebrow" :title="page.faq.title" :questions="page.faq.questions" tone="tint" />
  <BlogRelatedArticles
    :title="page.relatedArticles.title"
    :intro="page.relatedArticles.intro"
    :articles="relatedArticles"
    source="ai_app_takeover_related"
  />
  <DibodevContactCtaSection
    :title="page.contactCta.title"
    :description="page.contactCta.description"
    :ctaText="page.contactCta.button"
  />
</template>

<script lang="ts" setup>
import type { ComputedRef } from 'vue'
import type { SupportedLocale } from '~/core/constants/categorySlugs'
import type { DibodevAiAppTakeoverPageContent } from '~/core/types/DibodevAiAppTakeoverPage'
import type { DibodevArticle } from '~/core/types/DibodevArticle'
import type { DibodevBreadcrumbItem } from '~/core/types/DibodevBreadcrumb'
import type { DibodevQuizDefinition } from '~/core/types/DibodevQuiz'
import type { DibodevStatItemProps } from '~/core/types/DibodevStat'
import { computed } from 'vue'
import BlogRelatedArticles from '~/components/blog/BlogRelatedArticles.vue'
import DibodevFramedPortrait from '~/components/data-displays/DibodevFramedPortrait.vue'
import DibodevContactCtaSection from '~/components/sections/DibodevContactCtaSection.vue'
import DibodevFaqSection from '~/components/sections/DibodevFaqSection.vue'
import DibodevGuaranteesSection from '~/components/sections/DibodevGuaranteesSection.vue'
import DibodevLandingSection from '~/components/sections/DibodevLandingSection.vue'
import DibodevMethodSection from '~/components/sections/DibodevMethodSection.vue'
import DibodevPricingSection from '~/components/sections/DibodevPricingSection.vue'
import DibodevProjectCaseStudySection from '~/components/sections/DibodevProjectCaseStudySection.vue'
import DibodevQuizSection from '~/components/sections/DibodevQuizSection.vue'
import DibodevSourcedFactsSection from '~/components/sections/DibodevSourcedFactsSection.vue'
import { PERSON_NAME } from '~/config/schema'
import { buildServiceSchemaJson } from '~/config/serviceSchema'
import { useArticlesWithTranslations } from '~/composables/useArticlesWithTranslations'
import { useBreadcrumbTrail } from '~/composables/useBreadcrumbTrail'
import { useHeroStats } from '~/composables/useHeroStats'
import { usePageShareImage } from '~/composables/usePageShareImage'
import { AI_APP_CHECK_QUIZ_ID, AI_APP_CHECK_QUIZZES } from '~/core/constants/aiAppCheckQuiz'
import {
  AI_APP_TAKEOVER_PAGE_PATHS,
  AI_APP_TAKEOVER_RELATED_ARTICLE_SLUGS,
  AI_APP_TAKEOVER_SERVICE_TYPES,
} from '~/core/constants/aiAppTakeover/pageShared'
import { AI_APP_TAKEOVER_PAGES } from '~/core/constants/aiAppTakeoverPage'
import {
  FOUNDER_PORTRAIT_SIZE,
  FOUNDER_PORTRAIT_SIZES,
  FOUNDER_PORTRAIT_SRC,
  FOUNDER_PORTRAIT_SRCSET,
} from '~/core/constants/founderPortrait'
import { ArticleSelectionUtils } from '~/core/utils/ArticleSelectionUtils'

definePageMeta({
  i18n: {
    paths: {
      fr: '/reprendre-application-lovable-bolt',
      en: '/take-over-lovable-bolt-app',
      es: '/recuperar-aplicacion-lovable-bolt',
    },
  },
})

const ARTICLES_POOL_SIZE: number = 100
const TEST_ANCHOR_ID: string = 'test'
const TEST_ANCHOR: string = `#${TEST_ANCHOR_ID}`
const TEST_TOOL_ID: string = AI_APP_CHECK_QUIZ_ID

const { locale } = useI18n()
const localePath = useLocalePath()
const pageLocale: SupportedLocale = (locale.value as SupportedLocale) || 'fr'
const page: DibodevAiAppTakeoverPageContent = AI_APP_TAKEOVER_PAGES[pageLocale] ?? AI_APP_TAKEOVER_PAGES.fr
const quiz: DibodevQuizDefinition = AI_APP_CHECK_QUIZZES[pageLocale] ?? AI_APP_CHECK_QUIZZES.fr
usePageShareImage('aiAppTakeover')
const { data: articlesPool } = await useArticlesWithTranslations({ perPage: ARTICLES_POOL_SIZE })
const heroStats: ComputedRef<DibodevStatItemProps[]> = await useHeroStats()

const breadcrumbs: ComputedRef<DibodevBreadcrumbItem[]> = useBreadcrumbTrail((): DibodevBreadcrumbItem[] => [
  { label: page.breadcrumbLabel, to: null },
])

const relatedArticles: ComputedRef<DibodevArticle[]> = computed((): DibodevArticle[] =>
  ArticleSelectionUtils.selectBySlugs(articlesPool.value ?? [], AI_APP_TAKEOVER_RELATED_ARTICLE_SLUGS),
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
      key: 'schema-ai-app-takeover-service',
      innerHTML: buildServiceSchemaJson({
        pagePath: AI_APP_TAKEOVER_PAGE_PATHS.fr,
        name: page.meta.serviceName,
        description: page.meta.description,
        serviceType: AI_APP_TAKEOVER_SERVICE_TYPES,
      }),
    },
  ],
})
</script>
