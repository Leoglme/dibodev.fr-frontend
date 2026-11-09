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
    :updatedAt="JOOMLA_VERSION_CHECK_PAGE_UPDATED_AT"
  >
    <template #tool>
      <DibodevJoomlaVersionChecker
        :anchorId="JOOMLA_VERSION_CHECKER_ANCHOR_ID"
        :wording="page.checker"
        :platformLabels="PHP_VULNERABILITY_PLATFORM_LABELS"
        :trackingLocation="TRACKING_LOCATION"
      />
      <DibodevToolTeaser
        :teaser="JOOMLA_UPDATE_SERVICE_TEASER"
        :trackingLocation="`${TRACKING_LOCATION}_hero`"
        tone="white"
        class="mt-6"
      />
      <DibodevWebsiteRedesignPrompt :trackingLocation="`${TRACKING_LOCATION}_redesign`" tone="white" class="mt-4" />
    </template>
  </DibodevToolLandingSection>

  <DibodevSourcedFactsSection
    :anchorId="page.facts.anchorId"
    :eyebrow="page.facts.eyebrow"
    :title="page.facts.title"
    :intro="page.facts.intro"
    :facts="page.facts.facts"
    tone="offWhite"
  >
    <template #footer>
      <DibodevCallout
        icon="ShieldCheck"
        :emphasizedIntro="page.facts.calloutEmphasizedIntro"
        :text="page.facts.calloutText"
        tone="white"
      />
    </template>
  </DibodevSourcedFactsSection>

  <DibodevPriceListSection
    :anchorId="page.versions.anchorId"
    :eyebrow="page.versions.eyebrow"
    :title="page.versions.title"
    :intro="page.versions.intro"
    :productColumnLabel="page.versions.versionColumnLabel"
    :coverageColumnLabel="page.versions.supportColumnLabel"
    :priceColumnLabel="page.versions.latestReleaseColumnLabel"
    :products="page.versions.rows"
    tone="white"
  >
    <template #footer>
      <DibodevCallout
        icon="AlertCircle"
        :emphasizedIntro="page.versions.calloutEmphasizedIntro"
        :text="page.versions.calloutText"
        tone="tint"
      />
    </template>
  </DibodevPriceListSection>

  <DibodevGuaranteesSection
    :anchorId="page.blockers.anchorId"
    :eyebrow="page.blockers.eyebrow"
    :title="page.blockers.title"
    :intro="page.blockers.intro"
    :guarantees="page.blockers.items"
    :columns="3"
    tone="tint"
  />

  <DibodevMethodSection
    :eyebrow="page.method.eyebrow"
    :title="page.method.title"
    :intro="page.method.intro"
    :steps="page.method.steps"
    tone="offWhite"
  />

  <DibodevFaqSection :eyebrow="page.faq.eyebrow" :title="page.faq.title" :questions="page.faq.questions" />

  <BlogRelatedArticles
    :title="page.relatedArticles.title"
    :intro="page.relatedArticles.intro"
    :articles="relatedArticles"
    source="joomla_version_check_related"
  />

  <DibodevContactCtaSection
    :title="page.contactCta.title"
    :description="page.contactCta.description"
    :ctaText="page.contactCta.button"
    :ctaTo="prefilledContactRoute"
  />

  <DibodevMobileContactBar
    :text="page.mobileContactBar.text"
    :buttonLabel="page.mobileContactBar.buttonLabel"
    :to="prefilledContactRoute"
    :hiddenWhileVisibleId="JOOMLA_VERSION_CHECKER_ANCHOR_ID"
    :trackingLocation="`${TRACKING_LOCATION}_mobile_bar`"
  />
</template>

<script lang="ts" setup>
import type { ComputedRef, WritableComputedRef } from 'vue'
import type { SupportedLocale } from '~/core/constants/categorySlugs'
import type { DibodevArticle } from '~/core/types/DibodevArticle'
import type { DibodevBreadcrumbItem } from '~/core/types/DibodevBreadcrumb'
import type { DibodevJoomlaVersionCheckPageContent } from '~/core/types/DibodevJoomlaVersionCheckPage'
import { computed } from 'vue'
import BlogRelatedArticles from '~/components/blog/BlogRelatedArticles.vue'
import DibodevCallout from '~/components/data-displays/DibodevCallout.vue'
import DibodevMobileContactBar from '~/components/data-displays/DibodevMobileContactBar.vue'
import DibodevToolTeaser from '~/components/data-displays/DibodevToolTeaser.vue'
import DibodevWebsiteRedesignPrompt from '~/components/data-displays/DibodevWebsiteRedesignPrompt.vue'
import DibodevContactCtaSection from '~/components/sections/DibodevContactCtaSection.vue'
import DibodevFaqSection from '~/components/sections/DibodevFaqSection.vue'
import DibodevGuaranteesSection from '~/components/sections/DibodevGuaranteesSection.vue'
import DibodevJoomlaVersionChecker from '~/components/sections/DibodevJoomlaVersionChecker.vue'
import DibodevMethodSection from '~/components/sections/DibodevMethodSection.vue'
import DibodevPriceListSection from '~/components/sections/DibodevPriceListSection.vue'
import DibodevSourcedFactsSection from '~/components/sections/DibodevSourcedFactsSection.vue'
import DibodevToolLandingSection from '~/components/sections/DibodevToolLandingSection.vue'
import { useArticlesWithTranslations } from '~/composables/useArticlesWithTranslations'
import { useBreadcrumbTrail } from '~/composables/useBreadcrumbTrail'
import { ORGANIZATION_ID, PERSON_ID } from '~/config/schema'
import {
  JOOMLA_UPDATE_CONTACT_PRESELECTION,
  JOOMLA_UPDATE_SERVICE_TEASER,
} from '~/core/constants/joomlaUpdateService/pageShared'
import {
  JOOMLA_VERSION_CHECK_PAGE_UPDATED_AT,
  JOOMLA_VERSION_CHECK_RELATED_ARTICLE_SLUGS,
  JOOMLA_VERSION_CHECKER_ANCHOR_ID,
  JOOMLA_VERSION_CONTACT_TOPIC,
} from '~/core/constants/joomlaVersionCheck/pageShared'
import { JOOMLA_VERSION_CHECK_PAGES } from '~/core/constants/joomlaVersionCheckPage'
import { PHP_VULNERABILITY_PLATFORM_LABELS } from '~/core/constants/phpVulnerabilityCheck/pageShared'
import { ArticleSelectionUtils } from '~/core/utils/ArticleSelectionUtils'
import { SiteCheckContactUtils } from '~/core/utils/SiteCheckContactUtils'

definePageMeta({
  i18n: {
    paths: {
      fr: '/outils/version-joomla-verifier-mon-site',
      en: '/tools/joomla-version-check',
      es: '/herramientas/version-joomla-comprobar-mi-web',
    },
  },
})

const SITE_URL: string = 'https://dibodev.fr'
const ARTICLES_POOL_SIZE: number = 100
const TRACKING_LOCATION: string = 'joomla_version_check'

const { t, locale }: { t: (key: string) => string; locale: WritableComputedRef<string> } = useI18n()
const localePath: ReturnType<typeof useLocalePath> = useLocalePath()
const route: ReturnType<typeof useRoute> = useRoute()
const pageLocale: SupportedLocale = (locale.value as SupportedLocale) || 'fr'
const page: DibodevJoomlaVersionCheckPageContent =
  JOOMLA_VERSION_CHECK_PAGES[pageLocale] ?? JOOMLA_VERSION_CHECK_PAGES.fr
const prefilledContactRoute: string = localePath({
  path: '/contact',
  query: {
    ...SiteCheckContactUtils.buildContactQuery(JOOMLA_VERSION_CONTACT_TOPIC, null, null),
    ...JOOMLA_UPDATE_CONTACT_PRESELECTION,
  },
})

defineOgImageComponent(
  'DibodevToolShareImage',
  {
    titleLines: page.shareImage.titleLines,
    highlight: page.shareImage.highlight,
    subtitle: page.shareImage.subtitle,
    badge: page.shareImage.badge,
    icon: 'wrench',
  },
  { alt: page.shareImage.alt },
)
const { data: articlesPool }: Awaited<ReturnType<typeof useArticlesWithTranslations>> =
  await useArticlesWithTranslations({
    perPage: ARTICLES_POOL_SIZE,
  })

const breadcrumbs: ComputedRef<DibodevBreadcrumbItem[]> = useBreadcrumbTrail((): DibodevBreadcrumbItem[] => [
  { label: t('nav.tools'), to: localePath('tools') },
  { label: page.breadcrumbLabel, to: null },
])

const relatedArticles: ComputedRef<DibodevArticle[]> = computed((): DibodevArticle[] =>
  ArticleSelectionUtils.selectBySlugs(articlesPool.value ?? [], JOOMLA_VERSION_CHECK_RELATED_ARTICLE_SLUGS),
)

const webPageSchemaJson: string = JSON.stringify({
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  '@id': `${SITE_URL}${route.path}#webpage`,
  url: `${SITE_URL}${route.path}`,
  name: page.meta.title,
  description: page.meta.description,
  inLanguage: page.meta.inLanguage,
  dateModified: JOOMLA_VERSION_CHECK_PAGE_UPDATED_AT,
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
  script: [{ type: 'application/ld+json', key: 'schema-joomla-version-check-webpage', innerHTML: webPageSchemaJson }],
})
</script>
