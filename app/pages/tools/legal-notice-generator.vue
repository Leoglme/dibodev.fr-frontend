<template>
  <DibodevToolLandingSection
    :breadcrumbs="breadcrumbs"
    :titleBefore="page.hero.titleBefore"
    :titleHighlight="page.hero.titleHighlight"
    :titleAfter="page.hero.titleAfter"
    :aboutTitle="page.hero.aboutTitle"
    :description="page.hero.description"
    :reassurances="page.hero.reassurances"
    :authorIntro="page.hero.authorIntro"
    :authorBio="page.hero.authorBio"
    :updatedAt="LEGAL_NOTICE_GENERATOR_PAGE_UPDATED_AT"
  >
    <template #tool>
      <DibodevLegalNoticeGenerator
        :wording="page.generator"
        :anchorId="LEGAL_NOTICE_GENERATOR_ANCHOR_ID"
        :trackingLocation="LEGAL_NOTICE_GENERATOR_TRACKING_LOCATION"
      />
      <DibodevToolTeaser
        :teaser="GDPR_COOKIE_CHECK_TEASER"
        :trackingLocation="`${LEGAL_NOTICE_GENERATOR_TRACKING_LOCATION}_hero`"
        tone="white"
        class="mt-6"
      />
    </template>
  </DibodevToolLandingSection>

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

  <DibodevIconCardsSection
    :anchorId="page.statuses.anchorId"
    :eyebrow="page.statuses.eyebrow"
    :title="page.statuses.title"
    :intro="page.statuses.intro"
    :cards="page.statuses.cards"
    :columns="4"
    tone="offWhite"
  />

  <DibodevNumberedGuideSection
    :anchorId="page.privacyGuide.anchorId"
    :eyebrow="page.privacyGuide.eyebrow"
    :title="page.privacyGuide.title"
    :intro="page.privacyGuide.intro"
    :pitfallLabel="page.privacyGuide.pitfallLabel"
    :items="page.privacyGuide.items"
    tone="white"
  />

  <DibodevIconCardsSection
    :anchorId="page.mistakes.anchorId"
    :eyebrow="page.mistakes.eyebrow"
    :title="page.mistakes.title"
    :intro="page.mistakes.intro"
    :cards="page.mistakes.cards"
    :columns="3"
    align="center"
    tone="offWhite"
  />

  <DibodevFaqSection :eyebrow="page.faq.eyebrow" :title="page.faq.title" :questions="page.faq.questions" tone="tint" />

  <DibodevContactCtaSection
    :title="page.contactCta.title"
    :description="page.contactCta.description"
    :ctaText="page.contactCta.button"
    :ctaTo="contactPath"
    :secondaryLink="gdprCheckLink"
    :trackingLocation="`${LEGAL_NOTICE_GENERATOR_TRACKING_LOCATION}_contact_cta`"
  />

  <DibodevMobileContactBar
    :text="page.mobileBar.text"
    :buttonLabel="page.mobileBar.button"
    :to="contactPath"
    :trackingLocation="`${LEGAL_NOTICE_GENERATOR_TRACKING_LOCATION}_mobile_bar`"
    :hiddenWhileVisibleId="LEGAL_NOTICE_GENERATOR_ANCHOR_ID"
  />
</template>

<script lang="ts" setup>
import type { ComputedRef } from 'vue'
import type { SupportedLocale } from '~/core/constants/categorySlugs'
import type { DibodevBreadcrumbItem } from '~/core/types/DibodevBreadcrumb'
import type { DibodevContactCtaSecondaryLink } from '~/core/types/DibodevContactCtaSection'
import type { DibodevLegalNoticePageContent } from '~/core/types/DibodevLegalNoticePage'
import DibodevCallout from '~/components/data-displays/DibodevCallout.vue'
import DibodevMobileContactBar from '~/components/data-displays/DibodevMobileContactBar.vue'
import DibodevToolTeaser from '~/components/data-displays/DibodevToolTeaser.vue'
import DibodevLegalNoticeGenerator from '~/components/legal-notice/DibodevLegalNoticeGenerator.vue'
import DibodevContactCtaSection from '~/components/sections/DibodevContactCtaSection.vue'
import DibodevFaqSection from '~/components/sections/DibodevFaqSection.vue'
import DibodevIconCardsSection from '~/components/sections/DibodevIconCardsSection.vue'
import DibodevNumberedGuideSection from '~/components/sections/DibodevNumberedGuideSection.vue'
import DibodevSourcedFactsSection from '~/components/sections/DibodevSourcedFactsSection.vue'
import DibodevToolLandingSection from '~/components/sections/DibodevToolLandingSection.vue'
import { useBreadcrumbTrail } from '~/composables/useBreadcrumbTrail'
import { ORGANIZATION_ID, PERSON_ID } from '~/config/schema'
import { GDPR_COOKIE_CHECK_ROUTE_NAME, GDPR_COOKIE_CHECK_TEASER } from '~/core/constants/gdprCookieCheck/pageShared'
import {
  LEGAL_NOTICE_GENERATOR_ANCHOR_ID,
  LEGAL_NOTICE_GENERATOR_PAGE_UPDATED_AT,
  LEGAL_NOTICE_GENERATOR_TRACKING_LOCATION,
} from '~/core/constants/legalNotice/pageShared'
import { LEGAL_NOTICE_GENERATOR_PAGES } from '~/core/constants/legalNoticePages'

definePageMeta({
  i18n: {
    paths: {
      fr: '/outils/mentions-legales-generateur',
      en: '/tools/legal-notice-generator',
      es: '/herramientas/generador-aviso-legal',
    },
  },
})

const SITE_URL: string = 'https://dibodev.fr'

const { t, locale } = useI18n()
const localePath = useLocalePath()
const route = useRoute()
const pageLocale: SupportedLocale = (locale.value as SupportedLocale) || 'fr'
const page: DibodevLegalNoticePageContent = LEGAL_NOTICE_GENERATOR_PAGES[pageLocale] ?? LEGAL_NOTICE_GENERATOR_PAGES.fr
const contactPath: string = localePath('/contact')
const gdprCheckLink: DibodevContactCtaSecondaryLink = {
  label: page.contactCta.gdprCheckLabel,
  to: localePath({ name: GDPR_COOKIE_CHECK_ROUTE_NAME }),
  toolId: GDPR_COOKIE_CHECK_TEASER.toolId,
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
      dateModified: LEGAL_NOTICE_GENERATOR_PAGE_UPDATED_AT,
      author: { '@id': PERSON_ID },
      publisher: { '@id': ORGANIZATION_ID },
      about: { '@type': 'Thing', name: page.meta.schemaAbout },
      mainEntity: { '@id': `${SITE_URL}${route.path}#generator` },
    },
    {
      '@type': 'WebApplication',
      '@id': `${SITE_URL}${route.path}#generator`,
      name: page.applicationName,
      description: page.meta.description,
      url: `${SITE_URL}${route.path}`,
      applicationCategory: 'BusinessApplication',
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
    icon: 'fileText',
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
  script: [{ type: 'application/ld+json', key: 'schema-legal-notice-generator', innerHTML: schemaJson }],
})
</script>
