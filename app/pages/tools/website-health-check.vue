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
    :updatedAt="WEBSITE_HEALTH_CHECK_PAGE_UPDATED_AT"
  >
    <template #tool>
      <DibodevWebsiteHealthChecker
        :anchorId="WEBSITE_HEALTH_CHECKER_ANCHOR_ID"
        :wording="page.checker"
        :trackingLocation="TRACKING_LOCATION"
      />
      <DibodevWebsiteRedesignPrompt :trackingLocation="`${TRACKING_LOCATION}_redesign`" tone="white" class="mt-6" />
    </template>
  </DibodevToolLandingSection>

  <DibodevGuaranteesSection
    :anchorId="page.checks.anchorId"
    :eyebrow="page.checks.eyebrow"
    :title="page.checks.title"
    :intro="page.checks.intro"
    :guarantees="page.checks.items"
    :columns="4"
    tone="offWhite"
  />

  <DibodevMethodSection
    :eyebrow="page.method.eyebrow"
    :title="page.method.title"
    :intro="page.method.intro"
    :steps="page.method.steps"
    tone="white"
  />

  <section class="bg-white px-6 pb-20 sm:px-8 lg:pb-28">
    <DibodevCallout
      icon="FileSpreadsheet"
      :emphasizedIntro="page.priceTeaser.emphasizedIntro"
      :text="page.priceTeaser.text"
      tone="tint"
    >
      <DibodevLink :link="localePath('website-price-barometer')" class="text-[15px] leading-6 font-medium">
        <span>{{ page.priceTeaser.linkLabel }}</span>
        <DibodevIcon name="ArrowRight" mode="stroke" :width="16" :height="16" aria-hidden="true" />
      </DibodevLink>
    </DibodevCallout>
  </section>

  <DibodevFaqSection :eyebrow="page.faq.eyebrow" :title="page.faq.title" :questions="page.faq.questions" tone="tint" />

  <BlogRelatedArticles
    :title="page.relatedArticles.title"
    :intro="page.relatedArticles.intro"
    :articles="relatedArticles"
    source="website_health_check_related"
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
import type { DibodevArticle } from '~/core/types/DibodevArticle'
import type { DibodevBreadcrumbItem } from '~/core/types/DibodevBreadcrumb'
import type { DibodevWebsiteHealthCheckPageContent } from '~/core/types/DibodevWebsiteHealthCheckPage'
import { computed } from 'vue'
import BlogRelatedArticles from '~/components/blog/BlogRelatedArticles.vue'
import DibodevLink from '~/components/core/DibodevLink.vue'
import DibodevCallout from '~/components/data-displays/DibodevCallout.vue'
import DibodevWebsiteRedesignPrompt from '~/components/data-displays/DibodevWebsiteRedesignPrompt.vue'
import DibodevContactCtaSection from '~/components/sections/DibodevContactCtaSection.vue'
import DibodevFaqSection from '~/components/sections/DibodevFaqSection.vue'
import DibodevGuaranteesSection from '~/components/sections/DibodevGuaranteesSection.vue'
import DibodevMethodSection from '~/components/sections/DibodevMethodSection.vue'
import DibodevToolLandingSection from '~/components/sections/DibodevToolLandingSection.vue'
import DibodevWebsiteHealthChecker from '~/components/sections/DibodevWebsiteHealthChecker.vue'
import DibodevIcon from '~/components/ui/DibodevIcon.vue'
import { useArticlesWithTranslations } from '~/composables/useArticlesWithTranslations'
import { useBreadcrumbTrail } from '~/composables/useBreadcrumbTrail'
import { ORGANIZATION_ID, PERSON_ID } from '~/config/schema'
import {
  WEBSITE_HEALTH_CHECK_PAGE_UPDATED_AT,
  WEBSITE_HEALTH_CHECK_RELATED_ARTICLE_SLUGS,
  WEBSITE_HEALTH_CHECKER_ANCHOR_ID,
} from '~/core/constants/websiteHealthCheck/pageShared'
import { WEBSITE_HEALTH_CHECK_PAGES } from '~/core/constants/websiteHealthCheckPage'
import { ArticleSelectionUtils } from '~/core/utils/ArticleSelectionUtils'

definePageMeta({
  i18n: {
    paths: {
      fr: '/outils/tester-mon-site',
      en: '/tools/test-my-website',
      es: '/herramientas/probar-mi-web',
    },
  },
})

const SITE_URL: string = 'https://dibodev.fr'
const ARTICLES_POOL_SIZE: number = 100
const TRACKING_LOCATION: string = 'website_health_check'

const { t, locale } = useI18n()
const localePath = useLocalePath()
const route = useRoute()
const pageLocale: SupportedLocale = (locale.value as SupportedLocale) || 'fr'
const page: DibodevWebsiteHealthCheckPageContent =
  WEBSITE_HEALTH_CHECK_PAGES[pageLocale] ?? WEBSITE_HEALTH_CHECK_PAGES.fr

defineOgImageComponent(
  'DibodevToolShareImage',
  {
    titleLines: page.shareImage.titleLines,
    highlight: page.shareImage.highlight,
    subtitle: page.shareImage.subtitle,
    badge: page.shareImage.badge,
    icon: 'stethoscope',
  },
  { alt: page.shareImage.alt },
)
const { data: articlesPool } = await useArticlesWithTranslations({ perPage: ARTICLES_POOL_SIZE })

const breadcrumbs: ComputedRef<DibodevBreadcrumbItem[]> = useBreadcrumbTrail((): DibodevBreadcrumbItem[] => [
  { label: t('nav.tools'), to: localePath('tools') },
  { label: page.breadcrumbLabel, to: null },
])

const relatedArticles: ComputedRef<DibodevArticle[]> = computed((): DibodevArticle[] =>
  ArticleSelectionUtils.selectBySlugs(articlesPool.value ?? [], WEBSITE_HEALTH_CHECK_RELATED_ARTICLE_SLUGS),
)

const webPageSchemaJson: string = JSON.stringify({
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  '@id': `${SITE_URL}${route.path}#webpage`,
  url: `${SITE_URL}${route.path}`,
  name: page.meta.title,
  description: page.meta.description,
  inLanguage: page.meta.inLanguage,
  dateModified: WEBSITE_HEALTH_CHECK_PAGE_UPDATED_AT,
  author: { '@id': PERSON_ID },
  publisher: { '@id': ORGANIZATION_ID },
  about: { '@type': 'Thing', name: page.meta.schemaAbout },
})

useHead({
  title: page.meta.title,
  meta: [
    { name: 'description', content: page.meta.description },
    { property: 'og:title', content: page.meta.title },
    { property: 'og:description', content: page.meta.description },
  ],
  script: [{ type: 'application/ld+json', key: 'schema-website-health-check-webpage', innerHTML: webPageSchemaJson }],
})
</script>
