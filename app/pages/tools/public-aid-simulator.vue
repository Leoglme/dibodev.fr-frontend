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
    :updatedAt="PUBLIC_AID_PAGE_UPDATED_AT"
  >
    <template #tool>
      <DibodevPublicAidSimulator
        :anchorId="PUBLIC_AID_SIMULATOR_ANCHOR_ID"
        :wording="page.simulator"
        :schemes="PUBLIC_AID_DATASET"
        :communes="BRITTANY_COMMUNES"
        :numberLocale="page.numberLocale"
        :trackingLocation="TRACKING_LOCATION"
      />
    </template>
  </DibodevToolLandingSection>

  <DibodevSourcedFactsSection
    :anchorId="page.rules.anchorId"
    :eyebrow="page.rules.eyebrow"
    :title="page.rules.title"
    :intro="page.rules.intro"
    :facts="page.rules.facts"
    tone="offWhite"
  >
    <template #footer>
      <DibodevCallout
        icon="ShieldCheck"
        :emphasizedIntro="page.rules.calloutEmphasizedIntro"
        :text="page.rules.calloutText"
        tone="white"
      />
    </template>
  </DibodevSourcedFactsSection>

  <DibodevPriceListSection
    :anchorId="page.territories.anchorId"
    :eyebrow="page.territories.eyebrow"
    :title="page.territories.title"
    :intro="page.territories.intro"
    :productColumnLabel="page.territories.territoryColumnLabel"
    :coverageColumnLabel="page.territories.coverageColumnLabel"
    :priceColumnLabel="page.territories.aidColumnLabel"
    :products="territoryRows"
    tone="white"
  >
    <template #footer>
      <DibodevCallout
        icon="Info"
        :emphasizedIntro="page.territories.calloutEmphasizedIntro"
        :text="page.territories.calloutText"
        :footnote="page.territories.calloutFootnote"
        tone="tint"
      />
    </template>
  </DibodevPriceListSection>

  <DibodevGuaranteesSection
    :anchorId="page.beyond.anchorId"
    :eyebrow="page.beyond.eyebrow"
    :title="page.beyond.title"
    :intro="page.beyond.intro"
    :guarantees="page.beyond.items"
    :columns="3"
    tone="offWhite"
  />

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
    source="public_aid_related"
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
import type { DibodevPricedProduct } from '~/core/types/DibodevPriceListSection'
import type { DibodevPublicAidScheme } from '~/core/types/DibodevPublicAid'
import type { DibodevPublicAidPageContent } from '~/core/types/DibodevPublicAidPage'
import { computed } from 'vue'
import BlogRelatedArticles from '~/components/blog/BlogRelatedArticles.vue'
import DibodevCallout from '~/components/data-displays/DibodevCallout.vue'
import DibodevContactCtaSection from '~/components/sections/DibodevContactCtaSection.vue'
import DibodevFaqSection from '~/components/sections/DibodevFaqSection.vue'
import DibodevGuaranteesSection from '~/components/sections/DibodevGuaranteesSection.vue'
import DibodevMethodSection from '~/components/sections/DibodevMethodSection.vue'
import DibodevPriceListSection from '~/components/sections/DibodevPriceListSection.vue'
import DibodevPublicAidSimulator from '~/components/sections/DibodevPublicAidSimulator.vue'
import DibodevSourcedFactsSection from '~/components/sections/DibodevSourcedFactsSection.vue'
import DibodevToolLandingSection from '~/components/sections/DibodevToolLandingSection.vue'
import { useArticlesWithTranslations } from '~/composables/useArticlesWithTranslations'
import { useBreadcrumbTrail } from '~/composables/useBreadcrumbTrail'
import { usePageShareImage } from '~/composables/usePageShareImage'
import { ORGANIZATION_ID, PERSON_ID } from '~/config/schema'
import {
  BRITTANY_COMMUNES,
  ILLE_ET_VILAINE_DEPARTMENT,
  PUBLIC_AID_DATASET,
  PUBLIC_AID_PAGE_UPDATED_AT,
  PUBLIC_AID_RELATED_ARTICLE_SLUGS,
  PUBLIC_AID_SIMULATOR_ANCHOR_ID,
} from '~/core/constants/publicAid/pageShared'
import { PUBLIC_AID_PAGES } from '~/core/constants/publicAidPage'
import { ArticleSelectionUtils } from '~/core/utils/ArticleSelectionUtils'
import { PublicAidUtils } from '~/core/utils/PublicAidUtils'
import { QuizTextUtils } from '~/core/utils/QuizTextUtils'

// The English and Spanish pages describe the French schemes too, and say so (Brittany, its intercommunalités, the CCI and CMA).
definePageMeta({
  i18n: {
    paths: {
      fr: '/outils/aides-site-internet-logiciel',
      en: '/tools/public-aid-website-software',
      es: '/herramientas/ayudas-web-software',
    },
  },
})

const SITE_URL: string = 'https://dibodev.fr'
const ARTICLES_POOL_SIZE: number = 100
const TRACKING_LOCATION: string = 'public_aid_simulator'

const { t, locale } = useI18n()
const localePath = useLocalePath()
const route = useRoute()
const pageLocale: SupportedLocale = (locale.value as SupportedLocale) || 'fr'
const page: DibodevPublicAidPageContent = PUBLIC_AID_PAGES[pageLocale] ?? PUBLIC_AID_PAGES.fr
usePageShareImage('publicAid')
const { data: articlesPool } = await useArticlesWithTranslations({ perPage: ARTICLES_POOL_SIZE })

const breadcrumbs: ComputedRef<DibodevBreadcrumbItem[]> = useBreadcrumbTrail((): DibodevBreadcrumbItem[] => [
  { label: t('nav.tools'), to: localePath('tools') },
  { label: page.breadcrumbLabel, to: null },
])

/** One row per intercommunalité of Ille-et-Vilaine, in alphabetical order, with the rules as published. */
const territoryRows: ComputedRef<DibodevPricedProduct[]> = computed((): DibodevPricedProduct[] =>
  PUBLIC_AID_DATASET.epcis
    .filter((scheme: DibodevPublicAidScheme): boolean => scheme.department === ILLE_ET_VILAINE_DEPARTMENT)
    .slice()
    .sort((a: DibodevPublicAidScheme, b: DibodevPublicAidScheme): number => a.name.localeCompare(b.name, 'fr'))
    .map(
      (scheme: DibodevPublicAidScheme): DibodevPricedProduct => ({
        name: scheme.status === 'partial' ? `${scheme.name}${page.territories.partialSuffix}` : scheme.name,
        coverage: QuizTextUtils.fillTemplate(page.territories.coverageTemplate, {
          website: page.territories.eligibilityLabels[scheme.projects.website],
          onlineSales: page.territories.eligibilityLabels[scheme.projects.onlineSales],
          software: page.territories.eligibilityLabels[scheme.projects.software],
        }),
        price: QuizTextUtils.fillTemplate(page.territories.aidTemplate, {
          rate: String(scheme.ratePercent),
          maxAid: PublicAidUtils.formatAmount(scheme.maxAid, page.numberLocale),
        }),
        priceCondition:
          scheme.floorHt === null
            ? page.territories.floorUnknownCondition
            : QuizTextUtils.fillTemplate(page.territories.conditionTemplate, {
                floor: PublicAidUtils.formatAmount(scheme.floorHt, page.numberLocale),
              }),
      }),
    ),
)

const relatedArticles: ComputedRef<DibodevArticle[]> = computed((): DibodevArticle[] =>
  ArticleSelectionUtils.selectBySlugs(articlesPool.value ?? [], PUBLIC_AID_RELATED_ARTICLE_SLUGS),
)

/** Author and update date tell search engines and AI assistants how fresh the rules are. */
const webPageSchemaJson: string = JSON.stringify({
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  '@id': `${SITE_URL}${route.path}#webpage`,
  url: `${SITE_URL}${route.path}`,
  name: page.meta.title,
  description: page.meta.description,
  inLanguage: page.meta.inLanguage,
  dateModified: PUBLIC_AID_PAGE_UPDATED_AT,
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
  script: [{ type: 'application/ld+json', key: 'schema-public-aid-webpage', innerHTML: webPageSchemaJson }],
})
</script>
