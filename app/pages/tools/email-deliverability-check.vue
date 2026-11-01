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
    :updatedAt="EMAIL_DELIVERABILITY_CHECK_PAGE_UPDATED_AT"
  >
    <template #tool>
      <DibodevEmailDeliverabilityChecker
        :anchorId="EMAIL_DELIVERABILITY_CHECKER_ANCHOR_ID"
        :wording="page.checker"
        :trackingLocation="TRACKING_LOCATION"
      />
      <DibodevContactPrompt
        icon="Mail"
        :emphasizedIntro="page.offer.emphasizedIntro"
        :text="page.offer.text"
        :linkLabel="page.offer.linkLabel"
        :to="prefilledContactRoute"
        :trackingLocation="`${TRACKING_LOCATION}_offer`"
        tone="white"
        class="mt-6"
      />
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

  <DibodevGuaranteesSection
    :anchorId="page.checks.anchorId"
    :eyebrow="page.checks.eyebrow"
    :title="page.checks.title"
    :intro="page.checks.intro"
    :guarantees="page.checks.items"
    :columns="3"
    tone="white"
  />

  <DibodevReferenceTableSection
    :anchorId="page.providers.anchorId"
    :eyebrow="page.providers.eyebrow"
    :title="page.providers.title"
    :intro="page.providers.intro"
    :nameColumnLabel="page.providers.providerColumnLabel"
    :detailColumnLabel="page.providers.detailColumnLabel"
    :linkColumnLabel="page.providers.guideColumnLabel"
    :rows="page.providers.rows"
    tone="tint"
  >
    <template #footer>
      <DibodevCallout
        icon="Info"
        :emphasizedIntro="page.providers.calloutEmphasizedIntro"
        :text="page.providers.calloutText"
        tone="white"
      />
    </template>
  </DibodevReferenceTableSection>

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
    source="email_deliverability_check_related"
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
    :hiddenWhileVisibleId="EMAIL_DELIVERABILITY_CHECKER_ANCHOR_ID"
    :trackingLocation="`${TRACKING_LOCATION}_mobile_bar`"
  />
</template>

<script lang="ts" setup>
import type { ComputedRef, WritableComputedRef } from 'vue'
import type { SupportedLocale } from '~/core/constants/categorySlugs'
import type { DibodevArticle } from '~/core/types/DibodevArticle'
import type { DibodevBreadcrumbItem } from '~/core/types/DibodevBreadcrumb'
import type { DibodevEmailDeliverabilityCheckPageContent } from '~/core/types/DibodevEmailDeliverabilityCheckPage'
import { computed } from 'vue'
import BlogRelatedArticles from '~/components/blog/BlogRelatedArticles.vue'
import DibodevCallout from '~/components/data-displays/DibodevCallout.vue'
import DibodevContactPrompt from '~/components/data-displays/DibodevContactPrompt.vue'
import DibodevMobileContactBar from '~/components/data-displays/DibodevMobileContactBar.vue'
import DibodevContactCtaSection from '~/components/sections/DibodevContactCtaSection.vue'
import DibodevEmailDeliverabilityChecker from '~/components/sections/DibodevEmailDeliverabilityChecker.vue'
import DibodevFaqSection from '~/components/sections/DibodevFaqSection.vue'
import DibodevGuaranteesSection from '~/components/sections/DibodevGuaranteesSection.vue'
import DibodevMethodSection from '~/components/sections/DibodevMethodSection.vue'
import DibodevReferenceTableSection from '~/components/sections/DibodevReferenceTableSection.vue'
import DibodevSourcedFactsSection from '~/components/sections/DibodevSourcedFactsSection.vue'
import DibodevToolLandingSection from '~/components/sections/DibodevToolLandingSection.vue'
import { useArticlesWithTranslations } from '~/composables/useArticlesWithTranslations'
import { useBreadcrumbTrail } from '~/composables/useBreadcrumbTrail'
import { ORGANIZATION_ID, PERSON_ID } from '~/config/schema'
import {
  EMAIL_DELIVERABILITY_CHECK_PAGE_UPDATED_AT,
  EMAIL_DELIVERABILITY_CHECK_RELATED_ARTICLE_SLUGS,
  EMAIL_DELIVERABILITY_CHECKER_ANCHOR_ID,
  EMAIL_DELIVERABILITY_CONTACT_TOPIC,
} from '~/core/constants/emailDeliverabilityCheck/pageShared'
import { EMAIL_DELIVERABILITY_CHECK_PAGES } from '~/core/constants/emailDeliverabilityCheckPage'
import { ArticleSelectionUtils } from '~/core/utils/ArticleSelectionUtils'
import { SiteCheckContactUtils } from '~/core/utils/SiteCheckContactUtils'

definePageMeta({
  i18n: {
    paths: {
      fr: '/outils/mes-mails-arrivent-en-spam',
      en: '/tools/email-spam-check-spf-dkim-dmarc',
      es: '/herramientas/correos-llegan-a-spam',
    },
  },
})

const SITE_URL: string = 'https://dibodev.fr'
const ARTICLES_POOL_SIZE: number = 100
const TRACKING_LOCATION: string = 'email_deliverability_check'

const { t, locale }: { t: (key: string) => string; locale: WritableComputedRef<string> } = useI18n()
const localePath: ReturnType<typeof useLocalePath> = useLocalePath()
const route: ReturnType<typeof useRoute> = useRoute()
const pageLocale: SupportedLocale = (locale.value as SupportedLocale) || 'fr'
const page: DibodevEmailDeliverabilityCheckPageContent =
  EMAIL_DELIVERABILITY_CHECK_PAGES[pageLocale] ?? EMAIL_DELIVERABILITY_CHECK_PAGES.fr
const prefilledContactRoute: string = localePath({
  path: '/contact',
  query: SiteCheckContactUtils.buildContactQuery(EMAIL_DELIVERABILITY_CONTACT_TOPIC, null, null),
})

defineOgImageComponent(
  'DibodevToolShareImage',
  {
    titleLines: page.shareImage.titleLines,
    highlight: page.shareImage.highlight,
    subtitle: page.shareImage.subtitle,
    badge: page.shareImage.badge,
    icon: 'shield',
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
  ArticleSelectionUtils.selectBySlugs(articlesPool.value ?? [], EMAIL_DELIVERABILITY_CHECK_RELATED_ARTICLE_SLUGS),
)

const webPageSchemaJson: string = JSON.stringify({
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  '@id': `${SITE_URL}${route.path}#webpage`,
  url: `${SITE_URL}${route.path}`,
  name: page.meta.title,
  description: page.meta.description,
  inLanguage: page.meta.inLanguage,
  dateModified: EMAIL_DELIVERABILITY_CHECK_PAGE_UPDATED_AT,
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
    { type: 'application/ld+json', key: 'schema-email-deliverability-check-webpage', innerHTML: webPageSchemaJson },
  ],
})
</script>
