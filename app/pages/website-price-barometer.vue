<template>
  <DibodevLandingSection
    :breadcrumbs="breadcrumbs"
    :titlePart1="page.hero.titlePart1"
    :titleHighlight1="page.hero.titleHighlight"
    :titlePart2="page.hero.titlePart2"
    :description="page.hero.description"
    :ctaText="page.hero.cta"
    :ctaPrimaryTo="contactRoute"
    :secondaryCta="{ text: page.hero.ctaSecondary, target: SOURCES_ANCHOR }"
    :stats="heroStats"
    :compactTitle="true"
    align="center"
    :reassurances="page.hero.reassurances"
    :decorated="true"
  />
  <DibodevPriceListSection
    anchorId="categories"
    :eyebrow="page.categories.eyebrow"
    :title="page.categories.title"
    :intro="page.categories.intro"
    :productColumnLabel="page.categories.categoryColumnLabel"
    :coverageColumnLabel="page.categories.coverageColumnLabel"
    :priceColumnLabel="page.categories.priceColumnLabel"
    :products="categoryProducts"
    tone="offWhite"
  >
    <template #footer>
      <DibodevCallout
        icon="Info"
        :emphasizedIntro="page.categories.calloutEmphasizedIntro"
        :text="page.categories.calloutText"
        :footnote="page.categories.calloutFootnote"
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
        <div class="flex flex-wrap gap-x-6 gap-y-2">
          <span class="contents" @click="onCsvDownloadClick">
            <DibodevLink
              :link="WEBSITE_PRICE_BAROMETER_CSV_PATH"
              :externalLink="true"
              class="text-[15px] leading-6 font-medium"
            >
              <span>{{ page.sources.csvLinkLabel }}</span>
            </DibodevLink>
          </span>
        </div>
      </DibodevCallout>
    </template>
  </DibodevSourcedFactsSection>
  <DibodevComparisonTableSection
    :eyebrow="page.threeYears.eyebrow"
    :title="page.threeYears.title"
    :intro="page.threeYears.intro"
    headingAlign="left"
    :columns="page.threeYears.columns"
    :rows="threeYearRows"
    :criterionLabel="page.threeYears.criterionLabel"
    :collapsedRowCount="page.threeYears.rowsShownOnSmallScreens"
    tone="offWhite"
    trackingLocation="website_price_barometer"
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
    source="website_price_barometer_related"
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
import type { DibodevPriceRange } from '~/core/types/DibodevPriceBarometer'
import type {
  DibodevWebsitePriceBarometerCategory,
  DibodevWebsitePriceBarometerCategoryStats,
  DibodevWebsitePriceBarometerSource,
} from '~/core/types/DibodevWebsitePriceBarometer'
import type { DibodevWebsitePriceBarometerPageContent } from '~/core/types/DibodevWebsitePriceBarometerPage'
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
import { useTracking } from '~/composables/useTracking'
import { TRACKING_EVENTS } from '~/core/constants/trackingEvents'
import {
  DIBODEV_TEMPLATE_WEBSITE_PRICE,
  WEBSITE_PRICE_BAROMETER_BUILDER_KINDS,
  WEBSITE_PRICE_BAROMETER_CSV_PATH,
  WEBSITE_PRICE_BAROMETER_DATASET,
  WEBSITE_PRICE_BAROMETER_PAGE_PATHS,
  WEBSITE_PRICE_BAROMETER_PROVIDER_KINDS,
  WEBSITE_PRICE_BAROMETER_RELATED_ARTICLE_SLUGS,
  WEBSITE_PRICE_COMPARISON_YEARS,
} from '~/core/constants/websitePriceBarometer/pageShared'
import { WEBSITE_PRICE_BAROMETER_PAGES } from '~/core/constants/websitePriceBarometerPage'
import { ArticleSelectionUtils } from '~/core/utils/ArticleSelectionUtils'
import { PriceBarometerUtils } from '~/core/utils/PriceBarometerUtils'
import { QuizTextUtils } from '~/core/utils/QuizTextUtils'
import { WebsitePriceBarometerUtils } from '~/core/utils/WebsitePriceBarometerUtils'

definePageMeta({
  i18n: {
    paths: {
      fr: '/prix-site-internet',
      en: '/website-price-barometer',
      es: '/precio-pagina-web',
    },
  },
})

const ARTICLES_POOL_SIZE: number = 100
const SOURCES_ANCHOR_ID: string = 'sources'
const SOURCES_ANCHOR: string = `#${SOURCES_ANCHOR_ID}`
const CATEGORIES: DibodevWebsitePriceBarometerCategory[] = ['onePage', 'showcase', 'fullShowcase']
const DATASET_SPATIAL_COVERAGE: string = 'France'
const DATASET_KEYWORDS: string[] = [
  'prix site internet',
  'coût création site web',
  'tarif site vitrine',
  'prix site internet artisan',
  'maintenance site internet',
]

const { locale } = useI18n()
const localePath = useLocalePath()
const { track } = useTracking()
const pageLocale: SupportedLocale = (locale.value as SupportedLocale) || 'fr'
const page: DibodevWebsitePriceBarometerPageContent =
  WEBSITE_PRICE_BAROMETER_PAGES[pageLocale] ?? WEBSITE_PRICE_BAROMETER_PAGES.fr
usePageShareImage('websitePriceBarometer')
const { data: articlesPool } = await useArticlesWithTranslations({ perPage: ARTICLES_POOL_SIZE })

const categoryStats: Record<DibodevWebsitePriceBarometerCategory, DibodevWebsitePriceBarometerCategoryStats> = {
  onePage: WebsitePriceBarometerUtils.categoryStatsOf(WEBSITE_PRICE_BAROMETER_DATASET, 'onePage'),
  showcase: WebsitePriceBarometerUtils.categoryStatsOf(WEBSITE_PRICE_BAROMETER_DATASET, 'showcase'),
  fullShowcase: WebsitePriceBarometerUtils.categoryStatsOf(WEBSITE_PRICE_BAROMETER_DATASET, 'fullShowcase'),
}
/** Monthly maintenance of the freelancers and agencies, the figure of the "maintenance" row. */
const maintenanceStats: DibodevWebsitePriceBarometerCategoryStats = WebsitePriceBarometerUtils.monthlyStatsOf(
  WEBSITE_PRICE_BAROMETER_DATASET,
  WEBSITE_PRICE_BAROMETER_PROVIDER_KINDS,
)
/** Monthly subscription of the website builders, from the cheapest plan to the most expensive one. */
const builderSubscriptionStats: DibodevWebsitePriceBarometerCategoryStats = WebsitePriceBarometerUtils.monthlyStatsOf(
  WEBSITE_PRICE_BAROMETER_DATASET,
  WEBSITE_PRICE_BAROMETER_BUILDER_KINDS,
)
/** Median floor and ceiling of the showcase website, the figure quoted everywhere on the page. */
const showcaseMedianRange: DibodevPriceRange = {
  min: categoryStats.showcase.floorMedian,
  max: categoryStats.showcase.ceilingMedian,
}
const maintenanceMedianRange: DibodevPriceRange = {
  min: maintenanceStats.floorMedian,
  max: maintenanceStats.ceilingMedian,
}
const builderSubscriptionRange: DibodevPriceRange = {
  min: builderSubscriptionStats.lowestFloor,
  max: builderSubscriptionStats.highestCeiling,
}
const checkedAtLabel: string = new Date(WEBSITE_PRICE_BAROMETER_DATASET.checkedAt).toLocaleDateString(
  page.numberLocale,
  { day: 'numeric', month: 'long', year: 'numeric' },
)

const breadcrumbs: ComputedRef<DibodevBreadcrumbItem[]> = useBreadcrumbTrail((): DibodevBreadcrumbItem[] => [
  { label: page.breadcrumbLabel, to: null },
])

const contactRoute: ComputedRef<string> = computed((): string => localePath('/contact'))

const heroStats: ComputedRef<DibodevStatItemProps[]> = computed((): DibodevStatItemProps[] => [
  { value: formatRange(showcaseMedianRange), label: page.hero.statLabels.showcaseRange },
  { value: String(WEBSITE_PRICE_BAROMETER_DATASET.sources.length), label: page.hero.statLabels.sources },
  { value: checkedAtLabel, label: page.hero.statLabels.checkedAt },
])

/** The three website sizes, then the monthly maintenance of the freelancers and agencies. */
const categoryProducts: ComputedRef<DibodevPricedProduct[]> = computed((): DibodevPricedProduct[] => [
  ...CATEGORIES.map((category: DibodevWebsitePriceBarometerCategory): DibodevPricedProduct => {
    const stats: DibodevWebsitePriceBarometerCategoryStats = categoryStats[category]
    return {
      name: page.categories.items[category].name,
      coverage: page.categories.items[category].coverage,
      price: formatRange({ min: stats.floorMedian, max: stats.ceilingMedian }),
      priceCondition: fillCondition(page.categories.conditionTemplate, stats),
    }
  }),
  {
    name: page.categories.items.maintenance.name,
    coverage: page.categories.items.maintenance.coverage,
    price: formatMonthlyRange(maintenanceMedianRange),
    priceCondition: fillCondition(page.categories.maintenanceConditionTemplate, maintenanceStats),
  },
])

const sourceFacts: ComputedRef<DibodevSourcedFact[]> = computed((): DibodevSourcedFact[] =>
  WEBSITE_PRICE_BAROMETER_DATASET.sources.map(
    (source: DibodevWebsitePriceBarometerSource): DibodevSourcedFact => ({
      contextLabel: `${page.sources.wording.kindLabels[source.kind]} · ${source.city}`,
      title: source.name,
      text: WebsitePriceBarometerUtils.describeSource(source, page.sources.wording, checkedAtLabel, page.numberLocale),
      sourceName: PriceBarometerUtils.hostOf(source.sourceUrl),
      sourceUrl: source.sourceUrl,
    }),
  ),
)

/** The comparison texts with the computed amounts: builder subscription, template site and custom site over the period. */
const threeYearRows: ComputedRef<DibodevComparisonRow[]> = computed((): DibodevComparisonRow[] => {
  const noMonthlyCost: DibodevPriceRange = { min: 0, max: 0 }
  const amounts: Record<string, string> = {
    builderMonthly: formatMonthlyRange(builderSubscriptionRange),
    builderThreeYears: formatRange(
      WebsitePriceBarometerUtils.costOver(noMonthlyCost, builderSubscriptionRange, WEBSITE_PRICE_COMPARISON_YEARS),
    ),
    templatePrice: formatRange(DIBODEV_TEMPLATE_WEBSITE_PRICE),
    showcaseRange: formatRange(showcaseMedianRange),
    maintenanceMonthly: formatMonthlyRange(maintenanceMedianRange),
    customThreeYears: formatRange(
      WebsitePriceBarometerUtils.costOver(showcaseMedianRange, maintenanceMedianRange, WEBSITE_PRICE_COMPARISON_YEARS),
    ),
  }
  return page.threeYears.rows.map(
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
  ArticleSelectionUtils.selectBySlugs(articlesPool.value ?? [], WEBSITE_PRICE_BAROMETER_RELATED_ARTICLE_SLUGS),
)

/**
 * Formats a one-off price range in the page language ("1 500 à 2 500 €").
 * @param {DibodevPriceRange} range - The range.
 * @returns {string} The formatted range.
 */
function formatRange(range: DibodevPriceRange): string {
  return PriceBarometerUtils.formatRange(range, page.rangeTemplate, page.numberLocale)
}

/**
 * Formats a monthly price range in the page language ("22 à 60 € par mois").
 * @param {DibodevPriceRange} range - The range.
 * @returns {string} The formatted range.
 */
function formatMonthlyRange(range: DibodevPriceRange): string {
  return PriceBarometerUtils.formatRange(range, page.monthlyRangeTemplate, page.numberLocale)
}

/**
 * Fills the line under a price: how many sources publish it, and their lowest and highest figures.
 * @param {string} template - The sentence with `{count}`, `{lowestFloor}` and `{highestCeiling}`.
 * @param {DibodevWebsitePriceBarometerCategoryStats} stats - The figures of the row.
 * @returns {string} The sentence.
 */
function fillCondition(template: string, stats: DibodevWebsitePriceBarometerCategoryStats): string {
  return QuizTextUtils.fillTemplate(template, {
    count: String(stats.sourceCount),
    lowestFloor: PriceBarometerUtils.formatAmount(stats.lowestFloor, page.numberLocale),
    highestCeiling: PriceBarometerUtils.formatAmount(stats.highestCeiling, page.numberLocale),
  })
}

/**
 * Sends the download event when the visitor opens the public CSV of the barometer.
 * @returns {void}
 */
function onCsvDownloadClick(): void {
  track(TRACKING_EVENTS.fileDownloadClicked, {
    file: WEBSITE_PRICE_BAROMETER_CSV_PATH,
    location: 'website_price_barometer',
  })
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
      key: 'schema-website-price-barometer-dataset',
      innerHTML: buildDatasetSchemaJson({
        pagePath: WEBSITE_PRICE_BAROMETER_PAGE_PATHS.fr,
        name: page.meta.datasetName,
        description: page.meta.datasetDescription,
        csvPath: WEBSITE_PRICE_BAROMETER_CSV_PATH,
        dateModified: WEBSITE_PRICE_BAROMETER_DATASET.checkedAt,
        spatialCoverage: DATASET_SPATIAL_COVERAGE,
        keywords: DATASET_KEYWORDS,
      }),
    },
  ],
})
</script>
