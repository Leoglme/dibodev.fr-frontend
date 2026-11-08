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
    :updatedAt="GDPR_COOKIE_CHECK_PAGE_UPDATED_AT"
  >
    <template #tool>
      <DibodevGdprCookieChecker
        :anchorId="GDPR_COOKIE_CHECKER_ANCHOR_ID"
        :wording="page.checker"
        :trackingLocation="TRACKING_LOCATION"
      />
      <DibodevToolTeaser
        :teaser="LEGAL_NOTICE_GENERATOR_TEASER"
        :trackingLocation="`${TRACKING_LOCATION}_hero`"
        tone="white"
        class="mt-6"
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
    :anchorId="page.rules.anchorId"
    :eyebrow="page.rules.eyebrow"
    :title="page.rules.title"
    :intro="page.rules.intro"
    :facts="page.rules.facts"
    tone="white"
  >
    <template #footer>
      <DibodevCallout
        icon="Info"
        :emphasizedIntro="page.rules.calloutEmphasizedIntro"
        :text="page.rules.calloutText"
        tone="tint"
      />
    </template>
  </DibodevSourcedFactsSection>

  <DibodevNumberedGuideSection
    :anchorId="page.remediation.anchorId"
    :eyebrow="page.remediation.eyebrow"
    :title="page.remediation.title"
    :intro="page.remediation.intro"
    :pitfallLabel="page.remediation.pitfallLabel"
    :items="page.remediation.items"
    tone="offWhite"
  />

  <DibodevFaqSection :eyebrow="page.faq.eyebrow" :title="page.faq.title" :questions="page.faq.questions" tone="tint" />

  <DibodevContactCtaSection
    :title="page.contactCta.title"
    :description="page.contactCta.description"
    :ctaText="page.contactCta.button"
    :ctaTo="prefilledContactRoute"
    :secondaryLink="healthCheckLink"
    :trackingLocation="`${TRACKING_LOCATION}_contact_cta`"
  />
</template>

<script lang="ts" setup>
import type { ComputedRef } from 'vue'
import type { SupportedLocale } from '~/core/constants/categorySlugs'
import type { DibodevBreadcrumbItem } from '~/core/types/DibodevBreadcrumb'
import type { DibodevContactCtaSecondaryLink } from '~/core/types/DibodevContactCtaSection'
import type { DibodevGdprCookieCheckPageContent } from '~/core/types/DibodevGdprCookieCheckPage'
import DibodevCallout from '~/components/data-displays/DibodevCallout.vue'
import DibodevToolTeaser from '~/components/data-displays/DibodevToolTeaser.vue'
import DibodevContactCtaSection from '~/components/sections/DibodevContactCtaSection.vue'
import DibodevFaqSection from '~/components/sections/DibodevFaqSection.vue'
import DibodevGdprCookieChecker from '~/components/sections/DibodevGdprCookieChecker.vue'
import DibodevGuaranteesSection from '~/components/sections/DibodevGuaranteesSection.vue'
import DibodevNumberedGuideSection from '~/components/sections/DibodevNumberedGuideSection.vue'
import DibodevSourcedFactsSection from '~/components/sections/DibodevSourcedFactsSection.vue'
import DibodevToolLandingSection from '~/components/sections/DibodevToolLandingSection.vue'
import { useBreadcrumbTrail } from '~/composables/useBreadcrumbTrail'
import { ORGANIZATION_ID, PERSON_ID } from '~/config/schema'
import {
  GDPR_COOKIE_CHECK_CONTACT_TOPIC,
  GDPR_COOKIE_CHECK_PAGE_UPDATED_AT,
  GDPR_COOKIE_CHECKER_ANCHOR_ID,
} from '~/core/constants/gdprCookieCheck/pageShared'
import { GDPR_COOKIE_CHECK_PAGES } from '~/core/constants/gdprCookieCheckPage'
import { LEGAL_NOTICE_GENERATOR_TEASER } from '~/core/constants/legalNotice/pageShared'
import {
  WEBSITE_HEALTH_CHECK_ROUTE_NAME,
  WEBSITE_HEALTH_CHECK_TEASER,
} from '~/core/constants/websiteHealthCheck/pageShared'
import { SiteCheckContactUtils } from '~/core/utils/SiteCheckContactUtils'

definePageMeta({
  i18n: {
    paths: {
      fr: '/outils/site-conforme-rgpd-cookies',
      en: '/tools/gdpr-cookie-check',
      es: '/herramientas/web-cumple-rgpd-cookies',
    },
  },
})

const SITE_URL: string = 'https://dibodev.fr'
const TRACKING_LOCATION: string = 'gdpr_cookie_check'

const { t, locale } = useI18n()
const localePath = useLocalePath()
const route = useRoute()
const pageLocale: SupportedLocale = (locale.value as SupportedLocale) || 'fr'
const page: DibodevGdprCookieCheckPageContent = GDPR_COOKIE_CHECK_PAGES[pageLocale] ?? GDPR_COOKIE_CHECK_PAGES.fr
const prefilledContactRoute: string = localePath({
  path: '/contact',
  query: SiteCheckContactUtils.buildContactQuery(GDPR_COOKIE_CHECK_CONTACT_TOPIC, null, null),
})
const healthCheckLink: DibodevContactCtaSecondaryLink = {
  label: page.contactCta.healthCheckLabel,
  to: localePath({ name: WEBSITE_HEALTH_CHECK_ROUTE_NAME }),
  toolId: WEBSITE_HEALTH_CHECK_TEASER.toolId,
}
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
      dateModified: GDPR_COOKIE_CHECK_PAGE_UPDATED_AT,
      author: { '@id': PERSON_ID },
      publisher: { '@id': ORGANIZATION_ID },
      about: { '@type': 'Thing', name: page.meta.schemaAbout },
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

const breadcrumbs: ComputedRef<DibodevBreadcrumbItem[]> = useBreadcrumbTrail((): DibodevBreadcrumbItem[] => [
  { label: t('nav.tools'), to: localePath('tools') },
  { label: page.breadcrumbLabel, to: null },
])

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

useHead({
  title: page.meta.title,
  meta: [
    { name: 'description', content: page.meta.description },
    { property: 'og:title', content: page.meta.title },
    { property: 'og:description', content: page.meta.description },
  ],
  script: [{ type: 'application/ld+json', key: 'schema-gdpr-cookie-check', innerHTML: schemaJson }],
})
</script>
