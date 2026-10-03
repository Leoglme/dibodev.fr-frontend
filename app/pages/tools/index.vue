<template>
  <DibodevLandingSection
    :breadcrumbs="breadcrumbs"
    :titlePart1="t('toolsHubPage.hero.titlePart1')"
    :titleHighlight1="t('toolsHubPage.hero.titleHighlight1')"
    :titlePart2="t('toolsHubPage.hero.titlePart2')"
    :description="t('toolsHubPage.hero.description')"
    :ctaText="t('toolsHubPage.hero.cta')"
    ctaTarget="#free-tools"
    :secondaryCta="{ text: t('toolsHubPage.hero.ctaSecondary'), to: estimatorPath }"
    :stats="heroStats"
    :reassurances="reassurances"
    :decorated="true"
  >
    <template v-if="headerResultExample" #aside>
      <DibodevQuizResultPreview :example="headerResultExample" :caption="t('toolsHubPage.hero.previewCaption')" />
    </template>
  </DibodevLandingSection>
  <DibodevFreeToolsSection
    :eyebrow="t('toolsHubPage.list.eyebrow')"
    :title="t('toolsHubPage.list.title')"
    :intro="t('toolsHubPage.list.intro')"
    :tools="toolCards"
    trackingLocation="tools_hub"
  />
  <DibodevQuizResultExamplesSection
    v-if="resultExamples.length > 0"
    :title="t('toolsHubPage.examples.title')"
    :intro="t('toolsHubPage.examples.intro')"
    :points="resultExamplePoints"
    :ctaText="t('toolsHubPage.examples.cta')"
    ctaTo="#free-tools"
    :examples="resultExamples"
  />
  <DibodevFaqSection :title="t('toolsHubPage.faq.title')" :questions="faqQuestions" tone="tint" />
  <DibodevContactCtaSection
    :title="t('toolsHubPage.contactCta.title')"
    :description="t('toolsHubPage.contactCta.description')"
    :ctaText="t('toolsHubPage.contactCta.button')"
  />
</template>

<script lang="ts" setup>
import type { ComputedRef } from 'vue'
import type { SupportedLocale } from '~/core/constants/categorySlugs'
import type { DibodevBreadcrumbItem } from '~/core/types/DibodevBreadcrumb'
import type { DibodevFaqQuestion } from '~/core/types/DibodevFaqSection'
import type { DibodevFreeToolCard } from '~/core/types/DibodevFreeToolsSection'
import type { DibodevQuizResultExample, DibodevQuizResultExampleConfig } from '~/core/types/DibodevQuizResultExample'
import type { DibodevStatItemProps } from '~/core/types/DibodevStat'
import type { DibodevToolTeaserContent } from '~/core/types/DibodevToolTeaser'
import { computed } from 'vue'
import DibodevLandingSection from '~/components/sections/DibodevLandingSection.vue'
import DibodevFreeToolsSection from '~/components/sections/DibodevFreeToolsSection.vue'
import DibodevQuizResultExamplesSection from '~/components/sections/DibodevQuizResultExamplesSection.vue'
import DibodevFaqSection from '~/components/sections/DibodevFaqSection.vue'
import DibodevContactCtaSection from '~/components/sections/DibodevContactCtaSection.vue'
import DibodevQuizResultPreview from '~/components/quiz/DibodevQuizResultPreview.vue'
import { useBreadcrumbTrail } from '~/composables/useBreadcrumbTrail'
import { usePageShareImage } from '~/composables/usePageShareImage'
import { useQuizResultExamples } from '~/composables/useQuizResultExamples'
import { useToolTeasers } from '~/composables/useToolTeasers'
import { PERSON_ID, ORGANIZATION_ID } from '~/config/schema'
import { TOOLS_HUB_HEADER_RESULT_EXAMPLE, TOOLS_HUB_RESULT_EXAMPLES } from '~/core/constants/tools/quizResultExamples'
import { BUSINESS_SOFTWARE_TOOL_TEASERS } from '~/core/constants/tools/toolTeasers'

definePageMeta({
  i18n: {
    paths: {
      fr: '/outils',
      en: '/tools',
      es: '/herramientas',
    },
  },
})

const SITE_URL: string = 'https://dibodev.fr'
const REASSURANCE_KEYS: string[] = ['free', 'instant', 'prices']
const RESULT_EXAMPLE_POINT_KEYS: string[] = ['kind', 'prices', 'budget']
const FAQ_QUESTION_KEYS: string[] = ['free', 'prices', 'marketSoftware', 'missingTrade']

const { t, locale } = useI18n()
const localePath = useLocalePath()
const route = useRoute()
usePageShareImage('tools')

const toolTeasers: ComputedRef<DibodevToolTeaserContent[]> = useToolTeasers(
  (): DibodevToolTeaserContent[] => BUSINESS_SOFTWARE_TOOL_TEASERS,
)

const breadcrumbs: ComputedRef<DibodevBreadcrumbItem[]> = useBreadcrumbTrail((): DibodevBreadcrumbItem[] => [
  { label: t('nav.tools'), to: null },
])

const reassurances: ComputedRef<string[]> = computed((): string[] =>
  REASSURANCE_KEYS.map((key: string): string => t(`toolsHubPage.hero.reassurance.${key}`)),
)

const estimatorPath: ComputedRef<string> = computed((): string => `${localePath('custom-business-software')}#estimator`)

const heroStats: ComputedRef<DibodevStatItemProps[]> = computed((): DibodevStatItemProps[] => [
  { value: String(toolTeasers.value.length), label: t('toolsHubPage.hero.stats.testsLabel') },
  { value: t('toolsHubPage.hero.stats.durationValue'), label: t('toolsHubPage.hero.stats.durationLabel') },
])

/** Real result of the garage test, shown in the header: what a visitor gets after six questions. */
const headerResultExamples: ComputedRef<DibodevQuizResultExample[]> = useQuizResultExamples(
  (): DibodevQuizResultExampleConfig[] => [TOOLS_HUB_HEADER_RESULT_EXAMPLE],
)
const headerResultExample: ComputedRef<DibodevQuizResultExample | null> = computed(
  (): DibodevQuizResultExample | null => headerResultExamples.value[0] ?? null,
)

/** Two real results with opposite answers: market software for a small business, a custom tool for a larger one. */
const resultExamples: ComputedRef<DibodevQuizResultExample[]> = useQuizResultExamples(
  (): DibodevQuizResultExampleConfig[] => TOOLS_HUB_RESULT_EXAMPLES,
)

const resultExamplePoints: ComputedRef<string[]> = computed((): string[] =>
  RESULT_EXAMPLE_POINT_KEYS.map((key: string): string => t(`toolsHubPage.examples.points.${key}`)),
)

const faqQuestions: ComputedRef<DibodevFaqQuestion[]> = computed((): DibodevFaqQuestion[] =>
  FAQ_QUESTION_KEYS.map(
    (key: string): DibodevFaqQuestion => ({
      question: t(`toolsHubPage.faq.items.${key}.question`),
      answer: t(`toolsHubPage.faq.items.${key}.answer`),
    }),
  ),
)

/** Trade tests first, then the budget estimator, then a way out for the trades without a test. */
const toolCards: ComputedRef<DibodevFreeToolCard[]> = computed((): DibodevFreeToolCard[] => [
  ...toolTeasers.value.map(
    (teaser: DibodevToolTeaserContent): DibodevFreeToolCard => ({
      key: teaser.toolId,
      title: teaser.wording[locale.value as SupportedLocale]?.listLabel ?? '',
      description: teaser.wording[locale.value as SupportedLocale]?.hubDescription ?? '',
      icon: teaser.icon,
      meta: t('toolsHubPage.cards.test.meta'),
      linkLabel: t('toolsHubPage.cards.test.link'),
      to: localePath({ name: teaser.routeName }),
      toolId: teaser.toolId,
    }),
  ),
  {
    key: 'budget-estimator',
    title: t('toolsHubPage.cards.estimator.title'),
    description: t('toolsHubPage.cards.estimator.description'),
    icon: 'SlidersHorizontal',
    meta: t('toolsHubPage.cards.estimator.meta'),
    linkLabel: t('toolsHubPage.cards.estimator.link'),
    to: estimatorPath.value,
    toolId: 'budget-estimator',
  },
  {
    key: 'contact',
    title: t('toolsHubPage.cards.contact.title'),
    description: t('toolsHubPage.cards.contact.description'),
    icon: 'MessageCircle',
    meta: t('contact.reassurance.response24h'),
    linkLabel: t('toolsHubPage.cards.contact.link'),
    to: localePath('/contact'),
    toolId: null,
  },
])

/** Lists every tool of the page so search engines and AI assistants see the hub as a collection. */
const collectionSchemaJson: ComputedRef<string> = computed((): string =>
  JSON.stringify({
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    '@id': `${SITE_URL}${route.path}#webpage`,
    url: `${SITE_URL}${route.path}`,
    name: t('meta.toolsHubPage.title'),
    description: t('meta.toolsHubPage.description'),
    inLanguage: locale.value,
    author: { '@id': PERSON_ID },
    publisher: { '@id': ORGANIZATION_ID },
    mainEntity: {
      '@type': 'ItemList',
      itemListElement: toolCards.value
        .filter((tool: DibodevFreeToolCard): boolean => tool.toolId !== null)
        .map(
          (tool: DibodevFreeToolCard, index: number): Record<string, string | number> => ({
            '@type': 'ListItem',
            position: index + 1,
            name: tool.title,
            url: `${SITE_URL}${tool.to}`,
          }),
        ),
    },
  }),
)

useHead(() => ({
  title: t('meta.toolsHubPage.title'),
  meta: [
    { name: 'description', content: t('meta.toolsHubPage.description') },
    { property: 'og:title', content: t('meta.toolsHubPage.title') },
    { property: 'og:description', content: t('meta.toolsHubPage.description') },
  ],
  script: [{ type: 'application/ld+json', key: 'schema-webpage', innerHTML: collectionSchemaJson.value }],
}))
</script>
