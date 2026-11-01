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
    :updatedAt="HOSTING_STATUS_PAGE_UPDATED_AT"
  >
    <template #tool>
      <DibodevHostingStatusBoard
        :anchorId="HOSTING_STATUS_BOARD_ANCHOR_ID"
        :items="boardItems"
        :wording="content.boardWording"
        :trackingLocation="TRACKING_LOCATION"
      />
    </template>
  </DibodevToolLandingSection>

  <DibodevGuaranteesSection
    :anchorId="page.checks.anchorId"
    :eyebrow="page.checks.eyebrow"
    :title="page.checks.title"
    :intro="page.checks.intro"
    :guarantees="page.checks.items"
    :columns="3"
    tone="offWhite"
  />

  <DibodevSourcedFactsSection
    :anchorId="page.facts.anchorId"
    :eyebrow="page.facts.eyebrow"
    :title="page.facts.title"
    :intro="page.facts.intro"
    :facts="page.facts.facts"
    tone="white"
  >
    <template #footer>
      <DibodevCallout
        icon="Server"
        :emphasizedIntro="page.facts.calloutEmphasizedIntro"
        :text="page.facts.calloutText"
        tone="tint"
      />
    </template>
  </DibodevSourcedFactsSection>

  <DibodevMethodSection
    :eyebrow="page.method.eyebrow"
    :title="page.method.title"
    :intro="page.method.intro"
    :steps="page.method.steps"
    tone="tint"
  />

  <DibodevFaqSection :eyebrow="page.faq.eyebrow" :title="page.faq.title" :questions="page.faq.questions" />

  <BlogRelatedArticles
    :title="page.relatedArticles.title"
    :intro="page.relatedArticles.intro"
    :articles="relatedArticles"
    source="web_host_status_related"
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
    :hiddenWhileVisibleId="HOSTING_STATUS_BOARD_ANCHOR_ID"
    :trackingLocation="`${TRACKING_LOCATION}_mobile_bar`"
  />
</template>

<script lang="ts" setup>
import type { ComputedRef, WritableComputedRef } from 'vue'
import type { SupportedLocale } from '~/core/constants/categorySlugs'
import type { DibodevArticle } from '~/core/types/DibodevArticle'
import type { DibodevBreadcrumbItem } from '~/core/types/DibodevBreadcrumb'
import type { DibodevHostingProviderKey } from '~/core/types/DibodevHostingStatus'
import type { DibodevHostingStatusBoardItem } from '~/core/types/DibodevHostingStatusBoard'
import type {
  DibodevHostingStatusPageContent,
  DibodevHostingStatusPageSections,
} from '~/core/types/DibodevHostingStatusPage'
import { computed } from 'vue'
import BlogRelatedArticles from '~/components/blog/BlogRelatedArticles.vue'
import DibodevCallout from '~/components/data-displays/DibodevCallout.vue'
import DibodevMobileContactBar from '~/components/data-displays/DibodevMobileContactBar.vue'
import DibodevContactCtaSection from '~/components/sections/DibodevContactCtaSection.vue'
import DibodevFaqSection from '~/components/sections/DibodevFaqSection.vue'
import DibodevGuaranteesSection from '~/components/sections/DibodevGuaranteesSection.vue'
import DibodevHostingStatusBoard from '~/components/sections/DibodevHostingStatusBoard.vue'
import DibodevMethodSection from '~/components/sections/DibodevMethodSection.vue'
import DibodevSourcedFactsSection from '~/components/sections/DibodevSourcedFactsSection.vue'
import DibodevToolLandingSection from '~/components/sections/DibodevToolLandingSection.vue'
import { useArticlesWithTranslations } from '~/composables/useArticlesWithTranslations'
import { useBreadcrumbTrail } from '~/composables/useBreadcrumbTrail'
import { ORGANIZATION_ID, PERSON_ID } from '~/config/schema'
import {
  HOSTING_PROVIDER_KEYS,
  HOSTING_STATUS_BOARD_ANCHOR_ID,
  HOSTING_STATUS_PAGE_UPDATED_AT,
  HOSTING_STATUS_PROVIDER_ROUTE_NAME,
  HOSTING_STATUS_RELATED_ARTICLE_SLUGS,
} from '~/core/constants/hostingStatus/pageShared'
import { HOSTING_STATUS_PAGES } from '~/core/constants/hostingStatusPage'
import { ArticleSelectionUtils } from '~/core/utils/ArticleSelectionUtils'
import { HostingStatusContactUtils } from '~/core/utils/HostingStatusContactUtils'

definePageMeta({
  i18n: {
    paths: {
      fr: '/outils/hebergeur-en-panne',
      en: '/tools/web-host-down',
      es: '/herramientas/hosting-caido',
    },
  },
})

const SITE_URL: string = 'https://dibodev.fr'
const ARTICLES_POOL_SIZE: number = 100
const TRACKING_LOCATION: string = 'web_host_status_hub'

const { t, locale }: { t: (key: string) => string; locale: WritableComputedRef<string> } = useI18n()
const localePath: ReturnType<typeof useLocalePath> = useLocalePath()
const route: ReturnType<typeof useRoute> = useRoute()
const pageLocale: SupportedLocale = (locale.value as SupportedLocale) || 'fr'
const content: DibodevHostingStatusPageContent = HOSTING_STATUS_PAGES[pageLocale] ?? HOSTING_STATUS_PAGES.fr
const page: DibodevHostingStatusPageSections = content.hub
const prefilledContactRoute: string = localePath({
  path: '/contact',
  query: HostingStatusContactUtils.buildContactQuery(null, null),
})

defineOgImageComponent(
  'DibodevToolShareImage',
  {
    titleLines: page.shareImage.titleLines,
    highlight: page.shareImage.highlight,
    subtitle: page.shareImage.subtitle,
    badge: page.shareImage.badge,
    icon: 'server',
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

const boardItems: DibodevHostingStatusBoardItem[] = HOSTING_PROVIDER_KEYS.map(
  (key: DibodevHostingProviderKey): DibodevHostingStatusBoardItem => ({
    key,
    name: content.providers[key].name,
    to: localePath({ name: HOSTING_STATUS_PROVIDER_ROUTE_NAME, params: { provider: key } }),
  }),
)

const relatedArticles: ComputedRef<DibodevArticle[]> = computed((): DibodevArticle[] =>
  ArticleSelectionUtils.selectBySlugs(articlesPool.value ?? [], HOSTING_STATUS_RELATED_ARTICLE_SLUGS),
)

const webPageSchemaJson: string = JSON.stringify({
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  '@id': `${SITE_URL}${route.path}#webpage`,
  url: `${SITE_URL}${route.path}`,
  name: page.meta.title,
  description: page.meta.description,
  inLanguage: page.meta.inLanguage,
  dateModified: HOSTING_STATUS_PAGE_UPDATED_AT,
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
  script: [{ type: 'application/ld+json', key: 'schema-web-host-status-webpage', innerHTML: webPageSchemaJson }],
})
</script>
