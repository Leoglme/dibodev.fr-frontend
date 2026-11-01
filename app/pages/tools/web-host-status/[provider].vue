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
      <DibodevHostingStatusCard
        :anchorId="HOSTING_STATUS_CARD_ANCHOR_ID"
        :provider="providerKey"
        :providerName="page.name"
        :wording="content.cardWording"
        :trackingLocation="trackingLocation"
      >
        <template v-if="hasReadableStatusPage" #alert>
          <DibodevAlertSubscriptionForm
            :topic="alertTopic"
            :providerName="page.name"
            :trackingLocation="trackingLocation"
            tone="dark"
            class="relative"
          />
        </template>
      </DibodevHostingStatusCard>
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
    :hiddenWhileVisibleId="HOSTING_STATUS_CARD_ANCHOR_ID"
    :trackingLocation="`${trackingLocation}_mobile_bar`"
  />
</template>

<script lang="ts" setup>
import type { ComputedRef, WritableComputedRef } from 'vue'
import type { SupportedLocale } from '~/core/constants/categorySlugs'
import type { DibodevArticle } from '~/core/types/DibodevArticle'
import type { DibodevBreadcrumbItem } from '~/core/types/DibodevBreadcrumb'
import type { DibodevHostingProviderKey } from '~/core/types/DibodevHostingStatus'
import type { DibodevSecurityAlertTopic } from '~/core/types/DibodevSecurityAlert'
import type {
  DibodevHostingProviderPageContent,
  DibodevHostingStatusPageContent,
} from '~/core/types/DibodevHostingStatusPage'
import { computed } from 'vue'
import BlogRelatedArticles from '~/components/blog/BlogRelatedArticles.vue'
import DibodevCallout from '~/components/data-displays/DibodevCallout.vue'
import DibodevMobileContactBar from '~/components/data-displays/DibodevMobileContactBar.vue'
import DibodevContactCtaSection from '~/components/sections/DibodevContactCtaSection.vue'
import DibodevFaqSection from '~/components/sections/DibodevFaqSection.vue'
import DibodevGuaranteesSection from '~/components/sections/DibodevGuaranteesSection.vue'
import DibodevHostingStatusCard from '~/components/sections/DibodevHostingStatusCard.vue'
import DibodevMethodSection from '~/components/sections/DibodevMethodSection.vue'
import DibodevSourcedFactsSection from '~/components/sections/DibodevSourcedFactsSection.vue'
import DibodevToolLandingSection from '~/components/sections/DibodevToolLandingSection.vue'
import DibodevAlertSubscriptionForm from '~/forms/DibodevAlertSubscriptionForm.vue'
import { useArticlesWithTranslations } from '~/composables/useArticlesWithTranslations'
import { useBreadcrumbTrail } from '~/composables/useBreadcrumbTrail'
import { ORGANIZATION_ID, PERSON_ID } from '~/config/schema'
import {
  HOSTING_PROVIDER_GUIDE_SLUGS,
  HOSTING_PROVIDER_KEYS,
  HOSTING_STATUS_CARD_ANCHOR_ID,
  HOSTING_STATUS_HUB_ROUTE_NAME,
  HOSTING_STATUS_PAGE_UPDATED_AT,
  HOSTING_STATUS_RELATED_ARTICLE_SLUGS,
} from '~/core/constants/hostingStatus/pageShared'
import { HOSTING_STATUS_PAGES } from '~/core/constants/hostingStatusPage'
import { ArticleSelectionUtils } from '~/core/utils/ArticleSelectionUtils'
import { HostingStatusContactUtils } from '~/core/utils/HostingStatusContactUtils'
import { HostingStatusUtils } from '~/core/utils/HostingStatusUtils'

definePageMeta({
  i18n: {
    paths: {
      fr: '/outils/hebergeur-en-panne/[provider]',
      en: '/tools/web-host-down/[provider]',
      es: '/herramientas/hosting-caido/[provider]',
    },
  },
})

const SITE_URL: string = 'https://dibodev.fr'
const ARTICLES_POOL_SIZE: number = 100

const { t, locale }: { t: (key: string) => string; locale: WritableComputedRef<string> } = useI18n()
const localePath: ReturnType<typeof useLocalePath> = useLocalePath()
const route: ReturnType<typeof useRoute> = useRoute()
const requestedProvider: string = String(route.params.provider ?? '')

if (!(HOSTING_PROVIDER_KEYS as string[]).includes(requestedProvider)) {
  throw createError({ statusCode: 404, statusMessage: 'Unknown hosting provider', fatal: true })
}
const providerKey: DibodevHostingProviderKey = requestedProvider as DibodevHostingProviderKey
const trackingLocation: string = `web_host_status_${providerKey}`
const alertTopic: DibodevSecurityAlertTopic = `hosting:${providerKey}`
const hasReadableStatusPage: boolean = HostingStatusUtils.hasReadableStatusPage(providerKey)
const pageLocale: SupportedLocale = (locale.value as SupportedLocale) || 'fr'
const content: DibodevHostingStatusPageContent = HOSTING_STATUS_PAGES[pageLocale] ?? HOSTING_STATUS_PAGES.fr
const page: DibodevHostingProviderPageContent = content.providers[providerKey]
const prefilledContactRoute: string = localePath({
  path: '/contact',
  query: HostingStatusContactUtils.buildContactQuery(providerKey, null),
})
const providerGuideSlug: string | undefined = HOSTING_PROVIDER_GUIDE_SLUGS[providerKey]
const relatedArticleSlugs: string[] = HOSTING_STATUS_RELATED_ARTICLE_SLUGS.filter(
  (slug: string): boolean => slug !== providerGuideSlug,
)

if (providerGuideSlug) {
  relatedArticleSlugs.unshift(providerGuideSlug)
}

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
  { label: content.hub.breadcrumbLabel, to: localePath({ name: HOSTING_STATUS_HUB_ROUTE_NAME }) },
  { label: page.breadcrumbLabel, to: null },
])

const relatedArticles: ComputedRef<DibodevArticle[]> = computed((): DibodevArticle[] =>
  ArticleSelectionUtils.selectBySlugs(articlesPool.value ?? [], relatedArticleSlugs),
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
  script: [
    { type: 'application/ld+json', key: `schema-web-host-status-${providerKey}-webpage`, innerHTML: webPageSchemaJson },
  ],
})
</script>
