<template>
  <DibodevLandingSection
    :breadcrumbs="breadcrumbs"
    :titlePart1="page.hero.titlePart1"
    :titleHighlight1="page.hero.titleHighlight"
    :titlePart2="page.hero.titlePart2"
    :description="page.hero.description"
    :ctaText="page.hero.cta"
    :ctaPrimaryTo="phpVersionCheckRoute"
    :secondaryCta="{ text: page.hero.ctaSecondary, target: DEPARTMENTS_ANCHOR }"
    :stats="page.hero.stats"
    :compactTitle="true"
    align="center"
    :reassurances="page.hero.reassurances"
    :decorated="true"
  />
  <DibodevPriceListSection
    anchorId="chiffres"
    :eyebrow="page.keyFigures.eyebrow"
    :title="page.keyFigures.title"
    :intro="page.keyFigures.intro"
    :productColumnLabel="page.keyFigures.indicatorColumnLabel"
    :coverageColumnLabel="page.keyFigures.basisColumnLabel"
    :priceColumnLabel="page.keyFigures.resultColumnLabel"
    :products="page.keyFigures.items"
    tone="offWhite"
  >
    <template #footer>
      <DibodevCallout
        icon="Info"
        :emphasizedIntro="page.keyFigures.calloutEmphasizedIntro"
        :text="page.keyFigures.calloutText"
        :footnote="page.keyFigures.calloutFootnote"
        tone="white"
      />
    </template>
  </DibodevPriceListSection>
  <DibodevPriceListSection
    :anchorId="DEPARTMENTS_ANCHOR_ID"
    :eyebrow="page.departments.eyebrow"
    :title="page.departments.title"
    :intro="page.departments.intro"
    :productColumnLabel="page.departments.departmentColumnLabel"
    :coverageColumnLabel="page.departments.countsColumnLabel"
    :priceColumnLabel="page.departments.phpColumnLabel"
    :products="departmentProducts"
    tone="white"
  >
    <template #footer>
      <DibodevCallout
        icon="FileSpreadsheet"
        :emphasizedIntro="page.departments.csvEmphasizedIntro"
        :text="page.departments.csvText"
        :footnote="page.departments.csvFootnote"
        tone="tint"
      >
        <div class="flex flex-wrap gap-x-6 gap-y-2">
          <span class="contents" @click="onCsvDownloadClick">
            <DibodevLink
              :link="TOWN_HALL_WEBSITES_STUDY_CSV_PATH"
              :externalLink="true"
              class="text-[15px] leading-6 font-medium"
            >
              <span>{{ page.departments.csvLinkLabel }}</span>
            </DibodevLink>
          </span>
          <DibodevLink
            :link="TOWN_HALL_WEBSITES_STUDY_OPEN_DATA_URL"
            :externalLink="true"
            class="text-[15px] leading-6 font-medium"
          >
            <span>{{ page.departments.openDataLinkLabel }}</span>
            <DibodevIcon name="ExternalLink" mode="stroke" :width="16" :height="16" />
          </DibodevLink>
        </div>
      </DibodevCallout>
    </template>
  </DibodevPriceListSection>
  <DibodevFeatureCardsSection
    anchorId="limites"
    :eyebrow="page.limits.eyebrow"
    :title="page.limits.title"
    :intro="page.limits.intro"
    :cards="page.limits.items"
    tone="offWhite"
  />
  <DibodevGuaranteesSection
    anchorId="que-faire"
    :eyebrow="page.actions.eyebrow"
    :title="page.actions.title"
    :intro="page.actions.intro"
    :guarantees="actionGuarantees"
    :columns="2"
    tone="white"
  />
  <DibodevSourcedFactsSection
    anchorId="sources"
    :eyebrow="page.sources.eyebrow"
    :title="page.sources.title"
    :intro="page.sources.intro"
    :facts="page.sources.facts"
    tone="offWhite"
  >
    <template #footer>
      <DibodevCallout
        icon="Search"
        :emphasizedIntro="page.sources.authorEmphasizedIntro"
        :text="page.sources.authorText"
        :footnote="page.sources.authorFootnote"
        tone="white"
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
    source="town_hall_websites_study_related"
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
import type { DibodevGuarantee } from '~/core/types/DibodevGuaranteesSection'
import type { DibodevPricedProduct } from '~/core/types/DibodevPriceListSection'
import type {
  DibodevTownHallWebsitesStudyActionKey,
  DibodevTownHallWebsitesStudyDepartmentRow,
  DibodevTownHallWebsitesStudyPageContent,
} from '~/core/types/DibodevTownHallWebsitesStudyPage'
import { computed } from 'vue'
import BlogRelatedArticles from '~/components/blog/BlogRelatedArticles.vue'
import DibodevLink from '~/components/core/DibodevLink.vue'
import DibodevCallout from '~/components/data-displays/DibodevCallout.vue'
import DibodevContactCtaSection from '~/components/sections/DibodevContactCtaSection.vue'
import DibodevFaqSection from '~/components/sections/DibodevFaqSection.vue'
import DibodevFeatureCardsSection from '~/components/sections/DibodevFeatureCardsSection.vue'
import DibodevGuaranteesSection from '~/components/sections/DibodevGuaranteesSection.vue'
import DibodevLandingSection from '~/components/sections/DibodevLandingSection.vue'
import DibodevMethodSection from '~/components/sections/DibodevMethodSection.vue'
import DibodevPriceListSection from '~/components/sections/DibodevPriceListSection.vue'
import DibodevSourcedFactsSection from '~/components/sections/DibodevSourcedFactsSection.vue'
import DibodevIcon from '~/components/ui/DibodevIcon.vue'
import { buildDatasetSchemaJson } from '~/config/datasetSchema'
import { useArticlesWithTranslations } from '~/composables/useArticlesWithTranslations'
import { useBreadcrumbTrail } from '~/composables/useBreadcrumbTrail'
import { usePageShareImage } from '~/composables/usePageShareImage'
import { useTracking } from '~/composables/useTracking'
import { TOWN_HALL_WEBSITES_STUDY_DEPARTMENT_ROWS } from '~/core/constants/townHallWebsitesStudy/departmentRows'
import {
  TOWN_HALL_WEBSITES_STUDY_ACTION_KEYS,
  TOWN_HALL_WEBSITES_STUDY_ACTION_ROUTE_NAMES,
  TOWN_HALL_WEBSITES_STUDY_CSV_PATH,
  TOWN_HALL_WEBSITES_STUDY_DEPARTMENTS_SHOWN_COUNT,
  TOWN_HALL_WEBSITES_STUDY_ENDED_AT,
  TOWN_HALL_WEBSITES_STUDY_OPEN_DATA_URL,
  TOWN_HALL_WEBSITES_STUDY_PAGE_PATHS,
  TOWN_HALL_WEBSITES_STUDY_RELATED_ARTICLE_SLUGS,
} from '~/core/constants/townHallWebsitesStudy/pageShared'
import { TOWN_HALL_WEBSITES_STUDY_PAGES } from '~/core/constants/townHallWebsitesStudyPage'
import { TRACKING_EVENTS } from '~/core/constants/trackingEvents'
import { ArticleSelectionUtils } from '~/core/utils/ArticleSelectionUtils'
import { QuizTextUtils } from '~/core/utils/QuizTextUtils'

definePageMeta({
  i18n: {
    paths: {
      fr: '/etude-sites-internet-mairies',
      en: '/french-town-hall-websites-study',
      es: '/estudio-webs-ayuntamientos-franceses',
    },
  },
})

const ARTICLES_POOL_SIZE: number = 100
const DEPARTMENTS_ANCHOR_ID: string = 'departements'
const DEPARTMENTS_ANCHOR: string = `#${DEPARTMENTS_ANCHOR_ID}`
const DATASET_SPATIAL_COVERAGE: string = 'France'
const DATASET_KEYWORDS: string[] = [
  'sites internet des mairies',
  'version de PHP',
  'WordPress mairie',
  'Joomla mairie',
  'site de commune à jour',
]

const { locale } = useI18n()
const localePath = useLocalePath()
const { track } = useTracking()
const pageLocale: SupportedLocale = (locale.value as SupportedLocale) || 'fr'
const page: DibodevTownHallWebsitesStudyPageContent =
  TOWN_HALL_WEBSITES_STUDY_PAGES[pageLocale] ?? TOWN_HALL_WEBSITES_STUDY_PAGES.fr
const { data: articlesPool } = await useArticlesWithTranslations({ perPage: ARTICLES_POOL_SIZE })

/** Departments with the most read websites, largest first; the CSV holds every department. */
const shownDepartmentRows: DibodevTownHallWebsitesStudyDepartmentRow[] = [...TOWN_HALL_WEBSITES_STUDY_DEPARTMENT_ROWS]
  .sort(
    (first: DibodevTownHallWebsitesStudyDepartmentRow, second: DibodevTownHallWebsitesStudyDepartmentRow): number =>
      second.readWebsiteCount - first.readWebsiteCount || first.code.localeCompare(second.code),
  )
  .slice(0, TOWN_HALL_WEBSITES_STUDY_DEPARTMENTS_SHOWN_COUNT)

const breadcrumbs: ComputedRef<DibodevBreadcrumbItem[]> = useBreadcrumbTrail((): DibodevBreadcrumbItem[] => [
  { label: page.breadcrumbLabel, to: null },
])

const phpVersionCheckRoute: ComputedRef<string> = computed((): string =>
  localePath({ name: TOWN_HALL_WEBSITES_STUDY_ACTION_ROUTE_NAMES.phpVersionCheck }),
)

/** One row per shown department: counts, WordPress and Joomla shares, then the share of PHP without security fixes. */
const departmentProducts: ComputedRef<DibodevPricedProduct[]> = computed((): DibodevPricedProduct[] =>
  shownDepartmentRows.map(
    (row: DibodevTownHallWebsitesStudyDepartmentRow): DibodevPricedProduct => ({
      name: QuizTextUtils.fillTemplate(page.departments.nameTemplate, { code: row.code, name: row.name }),
      coverage: QuizTextUtils.fillTemplate(page.departments.countsTemplate, {
        townHallCount: formatCount(row.townHallCount),
        withoutDeclaredWebsiteCount: formatCount(row.withoutDeclaredWebsiteCount),
        readWebsiteCount: formatCount(row.readWebsiteCount),
        wordpressShare: formatPercent(row.wordpressSharePercent),
        wordpressCount: formatCount(row.wordpressWebsiteCount),
        joomlaShare: formatPercent(row.joomlaSharePercent),
        joomlaCount: formatCount(row.joomlaWebsiteCount),
      }),
      price: formatPercent(row.phpWithoutSecurityFixesSharePercent),
      priceCondition: QuizTextUtils.fillTemplate(page.departments.phpConditionTemplate, {
        phpWithoutSecurityFixesCount: formatCount(row.phpWithoutSecurityFixesCount),
        phpVisibleWebsiteCount: formatCount(row.phpVisibleWebsiteCount),
      }),
    }),
  ),
)

/** The steps of the "what to do" section, each with a link to its tool or update page in the page language. */
const actionGuarantees: ComputedRef<DibodevGuarantee[]> = computed((): DibodevGuarantee[] =>
  TOWN_HALL_WEBSITES_STUDY_ACTION_KEYS.map(
    (actionKey: DibodevTownHallWebsitesStudyActionKey): DibodevGuarantee => ({
      title: page.actions.items[actionKey].title,
      description: page.actions.items[actionKey].description,
      link: {
        label: page.actions.items[actionKey].linkLabel,
        to: localePath({ name: TOWN_HALL_WEBSITES_STUDY_ACTION_ROUTE_NAMES[actionKey] }),
      },
    }),
  ),
)

const relatedArticles: ComputedRef<DibodevArticle[]> = computed((): DibodevArticle[] =>
  ArticleSelectionUtils.selectBySlugs(articlesPool.value ?? [], TOWN_HALL_WEBSITES_STUDY_RELATED_ARTICLE_SLUGS),
)

/**
 * Formats a count in the page language ("19 854", "19,854").
 * @param {number} count - The count.
 * @returns {string} The formatted count.
 */
function formatCount(count: number): string {
  return count.toLocaleString(page.numberLocale)
}

/**
 * Formats a whole percentage in the page language, or the "no base" label when the department has no website to count.
 * @param {number | null} percent - The whole percentage, null when its base is zero.
 * @returns {string} The formatted percentage.
 */
function formatPercent(percent: number | null): string {
  if (percent === null) return page.departments.noShareLabel
  return QuizTextUtils.fillTemplate(page.percentTemplate, { value: String(percent) })
}

/**
 * Sends the download event when the visitor opens the public CSV of the study.
 * @returns {void}
 */
function onCsvDownloadClick(): void {
  track(TRACKING_EVENTS.fileDownloadClicked, {
    file: TOWN_HALL_WEBSITES_STUDY_CSV_PATH,
    location: 'town_hall_websites_study',
  })
}

usePageShareImage('townHallWebsitesStudy')

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
      key: 'schema-town-hall-websites-study-dataset',
      innerHTML: buildDatasetSchemaJson({
        pagePath: TOWN_HALL_WEBSITES_STUDY_PAGE_PATHS.fr,
        name: page.meta.datasetName,
        description: page.meta.datasetDescription,
        csvPath: TOWN_HALL_WEBSITES_STUDY_CSV_PATH,
        openDataUrl: TOWN_HALL_WEBSITES_STUDY_OPEN_DATA_URL,
        dateModified: TOWN_HALL_WEBSITES_STUDY_ENDED_AT,
        spatialCoverage: DATASET_SPATIAL_COVERAGE,
        keywords: DATASET_KEYWORDS,
      }),
    },
  ],
})
</script>
