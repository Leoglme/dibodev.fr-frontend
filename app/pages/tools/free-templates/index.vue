<template>
  <DibodevLandingSection
    :breadcrumbs="breadcrumbs"
    :titlePart1="page.hero.titlePart1"
    :titleHighlight1="page.hero.titleHighlight1"
    :titlePart2="page.hero.titlePart2"
    :description="page.hero.description"
    :ctaText="page.hero.cta"
    :ctaTarget="`#${page.catalog.anchorId}`"
    :stats="heroStats"
    :reassurances="page.hero.reassurances"
    :decorated="true"
    align="center"
  />
  <DibodevFreeTemplateCatalogSection
    :anchorId="page.catalog.anchorId"
    :eyebrow="page.catalog.eyebrow"
    :title="page.catalog.title"
    :intro="page.catalog.intro"
    :templates="templateCards"
    tone="tint"
    :trackingLocation="FREE_TEMPLATES_HUB_TRACKING_LOCATION"
  />
  <DibodevFaqSection :eyebrow="page.faq.eyebrow" :title="page.faq.title" :questions="page.faq.questions" />
  <DibodevContactCtaSection
    :title="page.contactCta.title"
    :description="page.contactCta.description"
    :ctaText="page.contactCta.button"
    :trackingLocation="FREE_TEMPLATES_HUB_TRACKING_LOCATION"
  />
</template>

<script lang="ts" setup>
import type { ComputedRef, WritableComputedRef } from 'vue'
import type { SupportedLocale } from '~/core/constants/categorySlugs'
import type { DibodevBreadcrumbItem } from '~/core/types/DibodevBreadcrumb'
import type { DibodevFreeTemplateCatalogEntry } from '~/core/types/DibodevFreeTemplateCatalog'
import type { DibodevFreeTemplateCatalogCard } from '~/core/types/DibodevFreeTemplateCatalogSection'
import type {
  DibodevFreeTemplateHubCardContent,
  DibodevFreeTemplateHubPageContent,
} from '~/core/types/DibodevFreeTemplateHubPage'
import type { DibodevStatItemProps } from '~/core/types/DibodevStat'
import { computed } from 'vue'
import DibodevContactCtaSection from '~/components/sections/DibodevContactCtaSection.vue'
import DibodevFaqSection from '~/components/sections/DibodevFaqSection.vue'
import DibodevFreeTemplateCatalogSection from '~/components/sections/DibodevFreeTemplateCatalogSection.vue'
import DibodevLandingSection from '~/components/sections/DibodevLandingSection.vue'
import { useBreadcrumbTrail } from '~/composables/useBreadcrumbTrail'
import { PERSON_ID, ORGANIZATION_ID } from '~/config/schema'
import {
  FREE_TEMPLATE_CATALOG,
  FREE_TEMPLATES_HUB_TRACKING_LOCATION,
  FREE_TEMPLATES_HUB_UPDATED_AT,
} from '~/core/constants/freeTemplates/freeTemplateCatalog'
import { FREE_TEMPLATES_HUB_PAGES } from '~/core/constants/freeTemplates/freeTemplatesHubPage'

definePageMeta({
  i18n: {
    paths: {
      fr: '/outils/modeles-gratuits',
      en: '/tools/free-templates',
      es: '/herramientas/plantillas-gratuitas',
    },
  },
})

const SITE_URL: string = 'https://dibodev.fr'

const { t, locale }: { t: (key: string) => string; locale: WritableComputedRef<string> } = useI18n()
const localePath = useLocalePath()
const route = useRoute()
const pageLocale: SupportedLocale = (locale.value as SupportedLocale) || 'fr'
const page: DibodevFreeTemplateHubPageContent = FREE_TEMPLATES_HUB_PAGES[pageLocale] ?? FREE_TEMPLATES_HUB_PAGES.fr

defineOgImageComponent(
  'DibodevToolShareImage',
  {
    titleLines: page.shareImage.titleLines,
    highlight: page.shareImage.highlight,
    subtitle: page.shareImage.subtitle,
    badge: page.shareImage.badge,
    icon: page.shareImage.icon,
  },
  { alt: page.shareImage.alt },
)

const breadcrumbs: ComputedRef<DibodevBreadcrumbItem[]> = useBreadcrumbTrail((): DibodevBreadcrumbItem[] => [
  { label: t('nav.tools'), to: localePath('tools') },
  { label: page.breadcrumbLabel, to: null },
])

const heroStats: ComputedRef<DibodevStatItemProps[]> = computed((): DibodevStatItemProps[] => [
  { value: String(FREE_TEMPLATE_CATALOG.length), label: page.hero.templatesCountLabel },
  { value: page.hero.formatsValue, label: page.hero.formatsLabel },
])

/** One card per catalog entry, with the texts of the current language matched by key. */
const templateCards: ComputedRef<DibodevFreeTemplateCatalogCard[]> = computed((): DibodevFreeTemplateCatalogCard[] =>
  FREE_TEMPLATE_CATALOG.map((entry: DibodevFreeTemplateCatalogEntry): DibodevFreeTemplateCatalogCard => {
    const card: DibodevFreeTemplateHubCardContent | undefined = page.catalog.cards.find(
      (hubCard: DibodevFreeTemplateHubCardContent): boolean => hubCard.key === entry.key,
    )
    return {
      key: entry.key,
      tradeLabel: card?.tradeLabel ?? '',
      title: card?.title ?? '',
      description: card?.description ?? '',
      formats: card?.formats ?? '',
      icon: entry.icon,
      templateRouteName: entry.routeName,
      templateLinkLabel: page.catalog.templateLinkLabel,
      toolId: entry.teaser.toolId,
      toolRouteName: entry.teaser.routeName,
      testLinkLabel: page.catalog.testLinkLabel,
    }
  }),
)

/** Lists every template so search engines and AI assistants see the hub as a collection. */
const collectionSchemaJson: ComputedRef<string> = computed((): string =>
  JSON.stringify({
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    '@id': `${SITE_URL}${route.path}#webpage`,
    url: `${SITE_URL}${route.path}`,
    name: page.meta.title,
    description: page.meta.description,
    inLanguage: page.meta.inLanguage,
    dateModified: FREE_TEMPLATES_HUB_UPDATED_AT,
    author: { '@id': PERSON_ID },
    publisher: { '@id': ORGANIZATION_ID },
    mainEntity: {
      '@type': 'ItemList',
      itemListElement: templateCards.value.map(
        (card: DibodevFreeTemplateCatalogCard, index: number): Record<string, string | number> => ({
          '@type': 'ListItem',
          position: index + 1,
          name: `${card.tradeLabel} · ${card.title}`,
          url: `${SITE_URL}${localePath({ name: card.templateRouteName })}`,
        }),
      ),
    },
  }),
)

useHead(() => ({
  title: page.meta.title,
  meta: [
    { name: 'description', content: page.meta.description },
    { property: 'og:title', content: page.meta.title },
    { property: 'og:description', content: page.meta.description },
  ],
  script: [{ type: 'application/ld+json', key: 'schema-webpage', innerHTML: collectionSchemaJson.value }],
}))
</script>
