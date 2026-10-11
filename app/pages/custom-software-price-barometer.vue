<template>
  <DibodevLandingSection
    :breadcrumbs="breadcrumbs"
    :titlePart1="page.hero.titlePart1"
    :titleHighlight1="page.hero.titleHighlight"
    :titlePart2="page.hero.titlePart2"
    :description="page.hero.description"
    :ctaText="page.hero.cta"
    :ctaPrimaryTo="estimatorRoute"
    :secondaryCta="{ text: page.hero.ctaSecondary, target: SOURCES_ANCHOR }"
    :stats="heroStats"
    :compactTitle="true"
    align="center"
    :reassurances="page.hero.reassurances"
    :decorated="true"
  />
  <DibodevPriceListSection
    anchorId="tiers"
    :eyebrow="page.tiers.eyebrow"
    :title="page.tiers.title"
    :intro="page.tiers.intro"
    :productColumnLabel="page.tiers.tierColumnLabel"
    :coverageColumnLabel="page.tiers.coverageColumnLabel"
    :priceColumnLabel="page.tiers.priceColumnLabel"
    :products="tierProducts"
    tone="offWhite"
  >
    <template #footer>
      <DibodevCallout
        icon="Info"
        :emphasizedIntro="page.tiers.calloutEmphasizedIntro"
        :text="page.tiers.calloutText"
        :footnote="page.tiers.calloutFootnote"
        tone="white"
      />
    </template>
  </DibodevPriceListSection>
  <DibodevSourcedFactsSection
    :anchorId="SOURCES_ANCHOR_ID"
    :eyebrow="page.sources.eyebrow"
    :title="page.sources.title"
    :intro="page.sources.intro"
    :facts="sourceFacts"
    tone="white"
  >
    <template #footer>
      <DibodevCallout
        icon="FileSpreadsheet"
        :emphasizedIntro="page.sources.csvEmphasizedIntro"
        :text="page.sources.csvText"
        :footnote="page.sources.csvFootnote"
        tone="tint"
      >
        <DibodevLink :link="PRICE_BAROMETER_CSV_PATH" :externalLink="true" class="text-[15px] leading-6 font-medium">
          <span>{{ page.sources.csvLinkLabel }}</span>
        </DibodevLink>
      </DibodevCallout>
    </template>
  </DibodevSourcedFactsSection>
  <DibodevComparisonTableSection
    :eyebrow="page.fiveYears.eyebrow"
    :title="page.fiveYears.title"
    :intro="page.fiveYears.intro"
    headingAlign="left"
    :columns="page.fiveYears.columns"
    :rows="fiveYearRows"
    :criterionLabel="page.fiveYears.criterionLabel"
    :collapsedRowCount="page.fiveYears.rowsShownOnSmallScreens"
    tone="offWhite"
    trackingLocation="price_barometer"
  />
  <DibodevGuaranteesSection
    anchorId="factors"
    :eyebrow="page.factors.eyebrow"
    :title="page.factors.title"
    :intro="page.factors.intro"
    :guarantees="page.factors.items"
    :columns="3"
    tone="white"
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
    source="price_barometer_related"
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
import type { DibodevComparisonCell, DibodevComparisonRow } from '~/core/types/DibodevComparisonTableSection'
import type {
  DibodevPriceBarometerSource,
  DibodevPriceBarometerTier,
  DibodevPriceBarometerTierStats,
  DibodevPriceRange,
} from '~/core/types/DibodevPriceBarometer'
import type { DibodevPriceBarometerPageContent } from '~/core/types/DibodevPriceBarometerPage'
import type { DibodevPricedProduct } from '~/core/types/DibodevPriceListSection'
import type { DibodevSourcedFact } from '~/core/types/DibodevSourcedFactsSection'
import type { DibodevStatItemProps } from '~/core/types/DibodevStat'
import { computed } from 'vue'
import BlogRelatedArticles from '~/components/blog/BlogRelatedArticles.vue'
import DibodevLink from '~/components/core/DibodevLink.vue'
import DibodevCallout from '~/components/data-displays/DibodevCallout.vue'
import DibodevComparisonTableSection from '~/components/sections/DibodevComparisonTableSection.vue'
import DibodevContactCtaSection from '~/components/sections/DibodevContactCtaSection.vue'
import DibodevFaqSection from '~/components/sections/DibodevFaqSection.vue'
import DibodevGuaranteesSection from '~/components/sections/DibodevGuaranteesSection.vue'
import DibodevLandingSection from '~/components/sections/DibodevLandingSection.vue'
import DibodevMethodSection from '~/components/sections/DibodevMethodSection.vue'
import DibodevPriceListSection from '~/components/sections/DibodevPriceListSection.vue'
import DibodevSourcedFactsSection from '~/components/sections/DibodevSourcedFactsSection.vue'
import { buildDatasetSchemaJson } from '~/config/datasetSchema'
import { useArticlesWithTranslations } from '~/composables/useArticlesWithTranslations'
import { useBreadcrumbTrail } from '~/composables/useBreadcrumbTrail'
import { usePageShareImage } from '~/composables/usePageShareImage'
import {
  AGENCY_MAINTENANCE_PERCENT_RANGE,
  COMPARISON_YEARS,
  DIBODEV_MAINTENANCE_MONTHLY_RANGE,
  PRICE_BAROMETER_CSV_PATH,
  PRICE_BAROMETER_DATASET,
  PRICE_BAROMETER_PAGE_PATHS,
  PRICE_BAROMETER_RELATED_ARTICLE_SLUGS,
  TRADE_SUBSCRIPTION_MONTHLY_RANGE,
} from '~/core/constants/priceBarometer/pageShared'
import { PRICE_BAROMETER_PAGES } from '~/core/constants/priceBarometerPage'
import { ArticleSelectionUtils } from '~/core/utils/ArticleSelectionUtils'
import { PriceBarometerUtils } from '~/core/utils/PriceBarometerUtils'
import { QuizTextUtils } from '~/core/utils/QuizTextUtils'

definePageMeta({
  i18n: {
    paths: {
      fr: '/prix-logiciel-sur-mesure',
      en: '/custom-software-price-barometer',
      es: '/precio-software-a-medida',
    },
  },
})

const ARTICLES_POOL_SIZE: number = 100
const SOURCES_ANCHOR_ID: string = 'sources'
const SOURCES_ANCHOR: string = `#${SOURCES_ANCHOR_ID}`
const TIERS: DibodevPriceBarometerTier[] = ['simpleTool', 'businessApp', 'platform']
const DIBODEV_SOURCE_KEY: string = 'dibodev'
const DATASET_SPATIAL_COVERAGE: string = 'France'
const DATASET_KEYWORDS: string[] = [
  'prix logiciel sur mesure',
  'coût développement logiciel',
  'application métier',
  'tarifs agences développement',
  'TJM développeur freelance',
]

const { locale } = useI18n()
const localePath = useLocalePath()
const pageLocale: SupportedLocale = (locale.value as SupportedLocale) || 'fr'
const page: DibodevPriceBarometerPageContent = PRICE_BAROMETER_PAGES[pageLocale] ?? PRICE_BAROMETER_PAGES.fr
usePageShareImage('priceBarometer')
const { data: articlesPool } = await useArticlesWithTranslations({ perPage: ARTICLES_POOL_SIZE })

const tierStats: Record<DibodevPriceBarometerTier, DibodevPriceBarometerTierStats> = {
  simpleTool: PriceBarometerUtils.tierStatsOf(PRICE_BAROMETER_DATASET, 'simpleTool'),
  businessApp: PriceBarometerUtils.tierStatsOf(PRICE_BAROMETER_DATASET, 'businessApp'),
  platform: PriceBarometerUtils.tierStatsOf(PRICE_BAROMETER_DATASET, 'platform'),
}
/** Median floor and ceiling of the business application tier, the figure quoted everywhere on the page. */
const businessAppMedianRange: DibodevPriceRange = {
  min: tierStats.businessApp.floorMedian,
  max: tierStats.businessApp.ceilingMedian,
}
const dibodevBusinessAppRange: DibodevPriceRange = PRICE_BAROMETER_DATASET.sources.find(
  (source: DibodevPriceBarometerSource): boolean => source.key === DIBODEV_SOURCE_KEY,
)?.ranges.businessApp ?? { min: 0, max: 0 }
const checkedAtLabel: string = new Date(PRICE_BAROMETER_DATASET.checkedAt).toLocaleDateString(page.numberLocale, {
  day: 'numeric',
  month: 'long',
  year: 'numeric',
})

const breadcrumbs: ComputedRef<DibodevBreadcrumbItem[]> = useBreadcrumbTrail((): DibodevBreadcrumbItem[] => [
  { label: page.breadcrumbLabel, to: null },
])

/** Budget estimator of the business software page, where every kind of project gets a price range. */
const estimatorRoute: ComputedRef<string> = computed(
  (): string => `${localePath('custom-business-software')}#estimator`,
)

const heroStats: ComputedRef<DibodevStatItemProps[]> = computed((): DibodevStatItemProps[] => [
  { value: formatRange(businessAppMedianRange), label: page.hero.statLabels.businessAppRange },
  { value: String(PRICE_BAROMETER_DATASET.sources.length), label: page.hero.statLabels.sources },
  { value: checkedAtLabel, label: page.hero.statLabels.checkedAt },
])

const tierProducts: ComputedRef<DibodevPricedProduct[]> = computed((): DibodevPricedProduct[] =>
  TIERS.map((tier: DibodevPriceBarometerTier): DibodevPricedProduct => {
    const stats: DibodevPriceBarometerTierStats = tierStats[tier]
    return {
      name: page.tiers.items[tier].name,
      coverage: page.tiers.items[tier].coverage,
      price: formatRange({ min: stats.floorMedian, max: stats.ceilingMedian }),
      priceCondition: QuizTextUtils.fillTemplate(page.tiers.conditionTemplate, {
        count: String(stats.sourceCount),
        lowestFloor: PriceBarometerUtils.formatAmount(stats.lowestFloor, page.numberLocale),
        highestCeiling: PriceBarometerUtils.formatAmount(stats.highestCeiling, page.numberLocale),
      }),
    }
  }),
)

const sourceFacts: ComputedRef<DibodevSourcedFact[]> = computed((): DibodevSourcedFact[] =>
  PRICE_BAROMETER_DATASET.sources.map(
    (source: DibodevPriceBarometerSource): DibodevSourcedFact => ({
      contextLabel: `${page.sources.wording.kindLabels[source.kind]} · ${source.city}`,
      title: source.name,
      text: PriceBarometerUtils.describeSource(source, page.sources.wording, checkedAtLabel, page.numberLocale),
      sourceName: PriceBarometerUtils.hostOf(source.sourceUrl),
      sourceUrl: source.sourceUrl,
    }),
  ),
)

/** The comparison texts with the computed amounts: subscription, Dibodev and agency medians over the period. */
const fiveYearRows: ComputedRef<DibodevComparisonRow[]> = computed((): DibodevComparisonRow[] => {
  const amounts: Record<string, string> = {
    agencyRange: formatRange(businessAppMedianRange),
    subscriptionFiveYears: formatRange(
      PriceBarometerUtils.subscriptionCostOver(TRADE_SUBSCRIPTION_MONTHLY_RANGE, COMPARISON_YEARS),
    ),
    dibodevFiveYears: formatRange(
      PriceBarometerUtils.customCostWithMonthlyMaintenance(
        dibodevBusinessAppRange,
        DIBODEV_MAINTENANCE_MONTHLY_RANGE,
        COMPARISON_YEARS,
      ),
    ),
    agencyFiveYears: formatRange(
      PriceBarometerUtils.customCostWithPercentMaintenance(
        businessAppMedianRange,
        AGENCY_MAINTENANCE_PERCENT_RANGE,
        COMPARISON_YEARS,
      ),
    ),
  }
  return page.fiveYears.rows.map(
    (row: DibodevComparisonRow): DibodevComparisonRow => ({
      label: row.label,
      cells: row.cells.map(
        (cell: DibodevComparisonCell): DibodevComparisonCell => ({
          state: cell.state,
          text: QuizTextUtils.fillTemplate(cell.text, amounts),
        }),
      ),
    }),
  )
})

const relatedArticles: ComputedRef<DibodevArticle[]> = computed((): DibodevArticle[] =>
  ArticleSelectionUtils.selectBySlugs(articlesPool.value ?? [], PRICE_BAROMETER_RELATED_ARTICLE_SLUGS),
)

/**
 * Formats a range in the page language ("13 500 à 50 000 €").
 * @param {DibodevPriceRange} range - The range.
 * @returns {string} The formatted range.
 */
function formatRange(range: DibodevPriceRange): string {
  return PriceBarometerUtils.formatRange(range, page.rangeTemplate, page.numberLocale)
}

useHead({
  title: page.meta.title,
  meta: [
    { name: 'description', content: page.meta.description },
    { property: 'og:title', content: page.meta.title },
    { property: 'og:description', content: page.meta.description },
  ],
  script: [
    {
      type: 'application/ld+json',
      key: 'schema-price-barometer-dataset',
      innerHTML: buildDatasetSchemaJson({
        pagePath: PRICE_BAROMETER_PAGE_PATHS.fr,
        name: page.meta.datasetName,
        description: page.meta.datasetDescription,
        csvPath: PRICE_BAROMETER_CSV_PATH,
        dateModified: PRICE_BAROMETER_DATASET.checkedAt,
        spatialCoverage: DATASET_SPATIAL_COVERAGE,
        keywords: DATASET_KEYWORDS,
      }),
    },
  ],
})
</script>
