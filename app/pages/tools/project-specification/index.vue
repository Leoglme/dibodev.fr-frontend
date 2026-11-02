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
    :updatedAt="PROJECT_SPECIFICATION_PAGE_UPDATED_AT"
  >
    <template #tool>
      <DibodevProjectSpecificationGenerator
        :wording="wording"
        :anchorId="PROJECT_SPECIFICATION_GENERATOR_ANCHOR_ID"
        :languageTag="PROJECT_SPECIFICATION_LANGUAGE_TAGS[pageLocale]"
        :trackingLocation="PROJECT_SPECIFICATION_TRACKING_LOCATION"
      />
    </template>
  </DibodevToolLandingSection>

  <DibodevNumberedGuideSection
    anchorId="contenu"
    :eyebrow="page.guide.eyebrow"
    :title="page.guide.title"
    :intro="page.guide.intro"
    :pitfallLabel="page.guide.pitfallLabel"
    :items="page.guide.items"
    tone="white"
  />

  <DibodevIconCardsSection
    anchorId="modeles"
    :eyebrow="page.templates.eyebrow"
    :title="page.templates.title"
    :intro="page.templates.intro"
    :cards="templateCards"
    :columns="4"
    :trackingLocation="PROJECT_SPECIFICATION_TRACKING_LOCATION"
    tone="offWhite"
  />

  <DibodevIconCardsSection
    anchorId="erreurs"
    :eyebrow="page.pitfalls.eyebrow"
    :title="page.pitfalls.title"
    :intro="page.pitfalls.intro"
    :cards="page.pitfalls.cards"
    :columns="3"
    align="center"
    tone="white"
  />

  <DibodevPricingSection
    :eyebrow="page.pricing.eyebrow"
    :title="page.pricing.title"
    :intro="page.pricing.intro"
    :offers="page.pricing.offers"
    :notes="page.pricing.notes"
    :ctaLabel="page.pricing.ctaLabel"
    :ctaLocation="PROJECT_SPECIFICATION_TRACKING_LOCATION"
    :secondaryLink="pricingSecondaryLink"
    tone="offWhite"
  />

  <DibodevFaqSection :eyebrow="page.faq.eyebrow" :title="page.faq.title" :questions="page.faq.questions" />

  <DibodevIconCardsSection
    anchorId="aller-plus-loin"
    :eyebrow="page.related.eyebrow"
    :title="page.related.title"
    :cards="relatedCards"
    :columns="3"
    :trackingLocation="PROJECT_SPECIFICATION_TRACKING_LOCATION"
    tone="offWhite"
  />

  <DibodevContactCtaSection
    :title="page.contactCta.title"
    :description="page.contactCta.description"
    :ctaText="page.contactCta.button"
    :trackingLocation="PROJECT_SPECIFICATION_TRACKING_LOCATION"
  />

  <DibodevMobileContactBar
    :text="page.mobileBar.text"
    :buttonLabel="page.mobileBar.button"
    :to="localePath('contact')"
    :trackingLocation="PROJECT_SPECIFICATION_TRACKING_LOCATION"
    :hiddenWhileVisibleId="PROJECT_SPECIFICATION_GENERATOR_ANCHOR_ID"
  />
</template>

<script lang="ts" setup>
import type { ComputedRef, WritableComputedRef } from 'vue'
import type { SupportedLocale } from '~/core/constants/categorySlugs'
import type { DibodevBreadcrumbItem } from '~/core/types/DibodevBreadcrumb'
import type { DibodevIconCard, DibodevIconCardTone } from '~/core/types/DibodevIconCardsSection'
import type { DibodevLandingSecondaryCta } from '~/core/types/DibodevLandingSection'
import type { DibodevProjectSpecificationWording } from '~/core/types/DibodevProjectSpecification'
import type {
  DibodevProjectSpecificationGeneratorPageContent,
  DibodevProjectSpecificationRelatedLink,
  DibodevProjectSpecificationTemplateCard,
} from '~/core/types/DibodevProjectSpecificationPage'
import { computed } from 'vue'
import DibodevMobileContactBar from '~/components/data-displays/DibodevMobileContactBar.vue'
import DibodevProjectSpecificationGenerator from '~/components/project-specification/DibodevProjectSpecificationGenerator.vue'
import DibodevContactCtaSection from '~/components/sections/DibodevContactCtaSection.vue'
import DibodevFaqSection from '~/components/sections/DibodevFaqSection.vue'
import DibodevIconCardsSection from '~/components/sections/DibodevIconCardsSection.vue'
import DibodevNumberedGuideSection from '~/components/sections/DibodevNumberedGuideSection.vue'
import DibodevPricingSection from '~/components/sections/DibodevPricingSection.vue'
import DibodevToolLandingSection from '~/components/sections/DibodevToolLandingSection.vue'
import { useBreadcrumbTrail } from '~/composables/useBreadcrumbTrail'
import { ORGANIZATION_ID, PERSON_ID } from '~/config/schema'
import {
  PROJECT_SPECIFICATION_CARD_TONES,
  PROJECT_SPECIFICATION_GENERATOR_ANCHOR_ID,
  PROJECT_SPECIFICATION_LANGUAGE_TAGS,
  PROJECT_SPECIFICATION_PAGE_UPDATED_AT,
  PROJECT_SPECIFICATION_TEMPLATE_ROUTE_NAMES,
  PROJECT_SPECIFICATION_TRACKING_LOCATION,
} from '~/core/constants/projectSpecification/pageShared'
import {
  PROJECT_SPECIFICATION_GENERATOR_PAGES,
  PROJECT_SPECIFICATION_WORDINGS,
} from '~/core/constants/projectSpecification/projectSpecificationPages'

definePageMeta({
  i18n: {
    paths: {
      fr: '/outils/cahier-des-charges',
      en: '/tools/project-brief',
      es: '/herramientas/pliego-de-condiciones',
    },
  },
})

const SITE_URL: string = 'https://dibodev.fr'

const RELATED_CARD_TONES_IN_ORDER: DibodevIconCardTone[] = ['green', 'violet', 'cyan']

const { t, locale }: { t: (key: string) => string; locale: WritableComputedRef<string> } = useI18n()
const localePath = useLocalePath()
const route = useRoute()
const pageLocale: SupportedLocale = (locale.value as SupportedLocale) || 'fr'
const page: DibodevProjectSpecificationGeneratorPageContent =
  PROJECT_SPECIFICATION_GENERATOR_PAGES[pageLocale] ?? PROJECT_SPECIFICATION_GENERATOR_PAGES.fr
const wording: DibodevProjectSpecificationWording =
  PROJECT_SPECIFICATION_WORDINGS[pageLocale] ?? PROJECT_SPECIFICATION_WORDINGS.fr

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

const breadcrumbs: ComputedRef<DibodevBreadcrumbItem[]> = useBreadcrumbTrail((): DibodevBreadcrumbItem[] => [
  { label: t('nav.tools'), to: localePath('tools') },
  { label: page.breadcrumbLabel, to: null },
])

const templateCards: ComputedRef<DibodevIconCard[]> = computed((): DibodevIconCard[] =>
  page.templates.cards.map(
    (card: DibodevProjectSpecificationTemplateCard): DibodevIconCard => ({
      key: `template-${card.projectType}`,
      icon: wording.types[card.projectType].icon,
      iconTone: PROJECT_SPECIFICATION_CARD_TONES[card.projectType],
      eyebrow: card.eyebrow,
      title: card.title,
      text: card.text,
      note: card.note,
      link: {
        label: page.templates.linkLabel,
        to: localePath(PROJECT_SPECIFICATION_TEMPLATE_ROUTE_NAMES[card.projectType]),
      },
    }),
  ),
)

const relatedCards: ComputedRef<DibodevIconCard[]> = computed((): DibodevIconCard[] =>
  page.related.links.map(
    (relatedLink: DibodevProjectSpecificationRelatedLink, index: number): DibodevIconCard => ({
      key: relatedLink.key,
      icon: relatedLink.icon,
      iconTone: RELATED_CARD_TONES_IN_ORDER[index % RELATED_CARD_TONES_IN_ORDER.length] ?? 'violet',
      eyebrow: relatedLink.eyebrow,
      title: relatedLink.title,
      text: relatedLink.text,
      note: '',
      link: { label: page.related.linkLabel, to: localePath(relatedLink.routeName) },
    }),
  ),
)

const pricingSecondaryLink: ComputedRef<DibodevLandingSecondaryCta> = computed(
  (): DibodevLandingSecondaryCta => ({
    text: page.pricing.secondaryLinkLabel,
    to: localePath('website-price-barometer'),
  }),
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
      dateModified: PROJECT_SPECIFICATION_PAGE_UPDATED_AT,
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

useHead({
  title: page.meta.title,
  meta: [
    { name: 'description', content: page.meta.description },
    { property: 'og:title', content: page.meta.title },
    { property: 'og:description', content: page.meta.description },
  ],
  script: [{ type: 'application/ld+json', key: 'schema-project-specification', innerHTML: schemaJson }],
})
</script>
