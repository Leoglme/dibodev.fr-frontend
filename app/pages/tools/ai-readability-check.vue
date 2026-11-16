<template>
  <DibodevToolLandingSection
    :breadcrumbs="breadcrumbs"
    :titleBefore="page.hero.titleBefore"
    :titleHighlight="page.hero.titleHighlight"
    :titleAfter="page.hero.titleAfter"
    :description="page.hero.description"
    :reassurances="page.hero.reassurances"
    :authorIntro="page.hero.authorIntro"
    :authorBio="page.hero.authorBio"
    :updatedAt="AI_READABILITY_CHECK_PAGE_UPDATED_AT"
  >
    <template #tool>
      <DibodevAiReadabilityChecker
        :anchorId="AI_READABILITY_CHECKER_ANCHOR_ID"
        :wording="page.checker"
        :trackingLocation="TRACKING_LOCATION"
      />
      <DibodevWebsiteRedesignPrompt :trackingLocation="`${TRACKING_LOCATION}_redesign`" tone="white" class="mt-6" />
    </template>
  </DibodevToolLandingSection>

  <section class="bg-white px-6 py-14 sm:px-8 lg:py-20" aria-labelledby="en-bref">
    <div class="mx-auto grid w-full max-w-3xl gap-3">
      <h2 id="en-bref" class="text-primary text-xs font-medium tracking-[0.08em] uppercase">
        {{ page.summary.eyebrow }}
      </h2>
      <p class="text-lg leading-8 text-gray-100 sm:text-xl">{{ page.summary.text }}</p>
      <p class="text-muted text-sm leading-6">
        <time :datetime="AI_READABILITY_CHECK_PAGE_UPDATED_AT">{{ page.summary.dateLabel }}</time>
      </p>
    </div>
  </section>

  <DibodevMethodSection
    :eyebrow="page.steps.eyebrow"
    :title="page.steps.title"
    :intro="page.steps.intro"
    :steps="page.steps.steps"
    tone="offWhite"
  />

  <DibodevReferenceTableSection
    :anchorId="page.crawlers.anchorId"
    :eyebrow="page.crawlers.eyebrow"
    :title="page.crawlers.title"
    :intro="page.crawlers.intro"
    :nameColumnLabel="page.crawlers.nameColumnLabel"
    :detailColumnLabel="page.crawlers.detailColumnLabel"
    :linkColumnLabel="page.crawlers.linkColumnLabel"
    :rows="crawlerRows"
    tone="white"
  >
    <template #footer>
      <DibodevCallout
        icon="Info"
        :emphasizedIntro="page.crawlers.calloutEmphasizedIntro"
        :text="page.crawlers.calloutText"
        tone="tint"
      />
    </template>
  </DibodevReferenceTableSection>

  <DibodevSourcedFactsSection
    :anchorId="page.sources.anchorId"
    :eyebrow="page.sources.eyebrow"
    :title="page.sources.title"
    :intro="page.sources.intro"
    :facts="page.sources.facts"
    tone="offWhite"
  />

  <DibodevGuaranteesSection
    :anchorId="page.reasons.anchorId"
    :eyebrow="page.reasons.eyebrow"
    :title="page.reasons.title"
    :intro="page.reasons.intro"
    :guarantees="page.reasons.items"
    :columns="2"
    tone="white"
  />

  <DibodevNumberedGuideSection
    :anchorId="page.remediation.anchorId"
    :eyebrow="page.remediation.eyebrow"
    :title="page.remediation.title"
    :intro="page.remediation.intro"
    :pitfallLabel="page.remediation.pitfallLabel"
    :items="page.remediation.items"
    tone="offWhite"
  />

  <section class="bg-white px-6 py-16 sm:px-8 lg:py-20">
    <div class="mx-auto grid w-full max-w-3xl gap-6">
      <DibodevSectionHeading :eyebrow="page.experience.eyebrow" :title="page.experience.title" />
      <DibodevCallout
        icon="MessageCircle"
        :emphasizedIntro="page.experience.emphasizedIntro"
        :text="page.experience.text"
        tone="tint"
      />
    </div>
  </section>

  <DibodevGuaranteesSection
    :anchorId="page.method.anchorId"
    :eyebrow="page.method.eyebrow"
    :title="page.method.title"
    :intro="page.method.intro"
    :guarantees="page.method.items"
    :columns="3"
    tone="offWhite"
  />

  <DibodevFaqSection :eyebrow="page.faq.eyebrow" :title="page.faq.title" :questions="page.faq.questions" tone="tint" />

  <BlogRelatedArticles
    :title="page.relatedArticles.title"
    :intro="page.relatedArticles.intro"
    :articles="relatedArticles"
    source="ai_readability_check_related"
  />

  <section class="bg-gray-800 px-6 py-16 sm:px-8 lg:py-20">
    <div class="mx-auto grid w-full max-w-3xl gap-6">
      <DibodevSectionHeading :eyebrow="page.nextTools.eyebrow" :title="page.nextTools.title" />
      <DibodevToolTeaser
        v-for="teaser in NEXT_TOOL_TEASERS"
        :key="teaser.toolId"
        :teaser="teaser"
        :trackingLocation="`${TRACKING_LOCATION}_next_tools`"
        tone="white"
      />
    </div>
  </section>

  <DibodevContactCtaSection
    :title="page.contactCta.title"
    :description="page.contactCta.description"
    :ctaText="page.contactCta.button"
    :ctaTo="prefilledContactRoute"
    :secondaryLink="healthCheckLink"
    :trackingLocation="`${TRACKING_LOCATION}_contact_cta`"
  />

  <DibodevMobileContactBar
    :text="page.mobileContactBar.text"
    :buttonLabel="page.mobileContactBar.buttonLabel"
    :to="prefilledContactRoute"
    :hiddenWhileVisibleId="AI_READABILITY_CHECKER_ANCHOR_ID"
    :trackingLocation="`${TRACKING_LOCATION}_mobile_bar`"
  />
</template>

<script lang="ts" setup>
import type { ComputedRef } from 'vue'
import type { SupportedLocale } from '~/core/constants/categorySlugs'
import type { DibodevAiCrawlerReference } from '~/core/types/DibodevAiReadabilityCheck'
import type { DibodevAiReadabilityCheckPageContent } from '~/core/types/DibodevAiReadabilityCheckPage'
import type { DibodevArticle } from '~/core/types/DibodevArticle'
import type { DibodevBreadcrumbItem } from '~/core/types/DibodevBreadcrumb'
import type { DibodevContactCtaSecondaryLink } from '~/core/types/DibodevContactCtaSection'
import type { DibodevReferenceTableRow } from '~/core/types/DibodevReferenceTableSection'
import type { DibodevToolTeaserContent } from '~/core/types/DibodevToolTeaser'
import { computed } from 'vue'
import BlogRelatedArticles from '~/components/blog/BlogRelatedArticles.vue'
import DibodevCallout from '~/components/data-displays/DibodevCallout.vue'
import DibodevMobileContactBar from '~/components/data-displays/DibodevMobileContactBar.vue'
import DibodevToolTeaser from '~/components/data-displays/DibodevToolTeaser.vue'
import DibodevWebsiteRedesignPrompt from '~/components/data-displays/DibodevWebsiteRedesignPrompt.vue'
import DibodevAiReadabilityChecker from '~/components/sections/DibodevAiReadabilityChecker.vue'
import DibodevContactCtaSection from '~/components/sections/DibodevContactCtaSection.vue'
import DibodevFaqSection from '~/components/sections/DibodevFaqSection.vue'
import DibodevGuaranteesSection from '~/components/sections/DibodevGuaranteesSection.vue'
import DibodevMethodSection from '~/components/sections/DibodevMethodSection.vue'
import DibodevNumberedGuideSection from '~/components/sections/DibodevNumberedGuideSection.vue'
import DibodevReferenceTableSection from '~/components/sections/DibodevReferenceTableSection.vue'
import DibodevSectionHeading from '~/components/sections/DibodevSectionHeading.vue'
import DibodevSourcedFactsSection from '~/components/sections/DibodevSourcedFactsSection.vue'
import DibodevToolLandingSection from '~/components/sections/DibodevToolLandingSection.vue'
import { useArticlesWithTranslations } from '~/composables/useArticlesWithTranslations'
import { useBreadcrumbTrail } from '~/composables/useBreadcrumbTrail'
import { ORGANIZATION_ID, PERSON_ID } from '~/config/schema'
import {
  AI_CRAWLER_REFERENCES,
  AI_READABILITY_CHECK_CONTACT_TOPIC,
  AI_READABILITY_CHECK_PAGE_UPDATED_AT,
  AI_READABILITY_CHECK_RELATED_ARTICLE_SLUGS,
  AI_READABILITY_CHECKER_ANCHOR_ID,
} from '~/core/constants/aiReadabilityCheck/pageShared'
import { AI_READABILITY_CHECK_PAGES } from '~/core/constants/aiReadabilityCheckPage'
import { GOOGLE_UPDATE_IMPACT_CHECK_TEASER } from '~/core/constants/googleUpdateImpactCheck/pageShared'
import {
  WEBSITE_HEALTH_CHECK_ROUTE_NAME,
  WEBSITE_HEALTH_CHECK_TEASER,
} from '~/core/constants/websiteHealthCheck/pageShared'
import { ArticleSelectionUtils } from '~/core/utils/ArticleSelectionUtils'
import { QuizTextUtils } from '~/core/utils/QuizTextUtils'
import { SiteCheckContactUtils } from '~/core/utils/SiteCheckContactUtils'

definePageMeta({
  i18n: {
    paths: {
      fr: '/outils/site-lisible-par-chatgpt',
      en: '/tools/can-chatgpt-read-my-website',
      es: '/herramientas/chatgpt-puede-leer-mi-web',
    },
  },
})

const SITE_URL: string = 'https://dibodev.fr'
const ARTICLES_POOL_SIZE: number = 100
const TRACKING_LOCATION: string = 'ai_readability_check'
/** The two checks teased under the FAQ: the whole site health, and the Google update impact. */
const NEXT_TOOL_TEASERS: DibodevToolTeaserContent[] = [WEBSITE_HEALTH_CHECK_TEASER, GOOGLE_UPDATE_IMPACT_CHECK_TEASER]

const { t, locale } = useI18n()
const localePath = useLocalePath()
const route = useRoute()
const pageLocale: SupportedLocale = (locale.value as SupportedLocale) || 'fr'
const page: DibodevAiReadabilityCheckPageContent =
  AI_READABILITY_CHECK_PAGES[pageLocale] ?? AI_READABILITY_CHECK_PAGES.fr
const prefilledContactRoute: string = localePath({
  path: '/contact',
  query: SiteCheckContactUtils.buildContactQuery(AI_READABILITY_CHECK_CONTACT_TOPIC, null, null),
})
const healthCheckLink: DibodevContactCtaSecondaryLink = {
  label: page.contactCta.healthCheckLabel,
  to: localePath({ name: WEBSITE_HEALTH_CHECK_ROUTE_NAME }),
  toolId: WEBSITE_HEALTH_CHECK_TEASER.toolId,
}
/** One row per robot of the server list: its name, its publisher and role, and the documentation read. */
const crawlerRows: DibodevReferenceTableRow[] = AI_CRAWLER_REFERENCES.map(
  (crawler: DibodevAiCrawlerReference): DibodevReferenceTableRow => ({
    name: crawler.token,
    detail: `${crawler.operator} · ${page.crawlers.roleLabels[crawler.role]}. ${page.crawlers.descriptions[crawler.key]}`,
    linkLabel: QuizTextUtils.fillTemplate(page.crawlers.linkLabel, { operator: crawler.operator }),
    linkUrl: crawler.documentationUrl,
  }),
)

defineOgImageComponent(
  'DibodevToolShareImage',
  {
    titleLines: page.shareImage.titleLines,
    highlight: page.shareImage.highlight,
    subtitle: page.shareImage.subtitle,
    badge: page.shareImage.badge,
    icon: 'sparkles',
  },
  { alt: page.shareImage.alt },
)
const { data: articlesPool } = await useArticlesWithTranslations({ perPage: ARTICLES_POOL_SIZE })

const breadcrumbs: ComputedRef<DibodevBreadcrumbItem[]> = useBreadcrumbTrail((): DibodevBreadcrumbItem[] => [
  { label: t('nav.tools'), to: localePath('tools') },
  { label: page.breadcrumbLabel, to: null },
])

const relatedArticles: ComputedRef<DibodevArticle[]> = computed((): DibodevArticle[] =>
  ArticleSelectionUtils.selectBySlugs(articlesPool.value ?? [], AI_READABILITY_CHECK_RELATED_ARTICLE_SLUGS),
)

const schemaJson: string = JSON.stringify({
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebPage',
      '@id': `${SITE_URL}${route.path}#webpage`,
      url: `${SITE_URL}${route.path}`,
      name: page.meta.title,
      description: page.meta.description,
      inLanguage: page.meta.inLanguage,
      datePublished: AI_READABILITY_CHECK_PAGE_UPDATED_AT,
      dateModified: AI_READABILITY_CHECK_PAGE_UPDATED_AT,
      author: { '@id': PERSON_ID },
      publisher: { '@id': ORGANIZATION_ID },
      about: { '@type': 'Thing', name: page.meta.schemaAbout },
      abstract: page.summary.text,
      mainEntity: { '@id': `${SITE_URL}${route.path}#checker` },
    },
    {
      '@type': 'WebApplication',
      '@id': `${SITE_URL}${route.path}#checker`,
      name: page.applicationName,
      description: page.meta.description,
      url: `${SITE_URL}${route.path}`,
      applicationCategory: 'UtilitiesApplication',
      operatingSystem: 'Web',
      inLanguage: page.meta.inLanguage,
      isAccessibleForFree: true,
      offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
      author: { '@id': PERSON_ID },
      publisher: { '@id': ORGANIZATION_ID },
    },
  ],
})

useHead({
  title: page.meta.title,
  meta: [
    { name: 'description', content: page.meta.description },
    { property: 'og:title', content: page.meta.title },
    { property: 'og:description', content: page.meta.description },
  ],
  script: [{ type: 'application/ld+json', key: 'schema-ai-readability-check', innerHTML: schemaJson }],
})
</script>
