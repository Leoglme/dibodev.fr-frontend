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
    :updatedAt="E_INVOICING_CHECK_PAGE_UPDATED_AT"
  >
    <template #tool>
      <DibodevEInvoicingSoftwareChecker
        :anchorId="E_INVOICING_CHECKER_ANCHOR_ID"
        :wording="page.checker"
        :trackingLocation="TRACKING_LOCATION"
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
        icon="ClipboardCheck"
        :emphasizedIntro="page.facts.calloutEmphasizedIntro"
        :text="page.facts.calloutText"
        tone="white"
      />
    </template>
  </DibodevSourcedFactsSection>

  <DibodevGuaranteesSection
    :anchorId="page.timeline.anchorId"
    :eyebrow="page.timeline.eyebrow"
    :title="page.timeline.title"
    :intro="page.timeline.intro"
    :guarantees="page.timeline.items"
    :columns="3"
    tone="white"
  />

  <DibodevGuaranteesSection
    :anchorId="page.concerned.anchorId"
    :eyebrow="page.concerned.eyebrow"
    :title="page.concerned.title"
    :intro="page.concerned.intro"
    :guarantees="page.concerned.items"
    :columns="3"
    tone="tint"
  />

  <DibodevPriceListSection
    :anchorId="page.softwareTable.anchorId"
    :eyebrow="page.softwareTable.eyebrow"
    :title="page.softwareTable.title"
    :intro="page.softwareTable.intro"
    :productColumnLabel="page.softwareTable.softwareColumnLabel"
    :coverageColumnLabel="page.softwareTable.statusColumnLabel"
    :priceColumnLabel="page.softwareTable.platformColumnLabel"
    :products="softwareRows"
    tone="offWhite"
  >
    <template #footer>
      <DibodevCallout
        icon="Search"
        :emphasizedIntro="page.softwareTable.calloutEmphasizedIntro"
        :text="page.softwareTable.calloutText"
        tone="white"
      />
    </template>
  </DibodevPriceListSection>

  <DibodevGuaranteesSection
    :anchorId="page.guides.anchorId"
    :eyebrow="page.guides.eyebrow"
    :title="page.guides.title"
    :intro="page.guides.intro"
    :guarantees="guideItems"
    :columns="3"
    tone="white"
  />

  <DibodevGuaranteesSection
    :anchorId="page.freePlatforms.anchorId"
    :eyebrow="page.freePlatforms.eyebrow"
    :title="page.freePlatforms.title"
    :intro="page.freePlatforms.intro"
    :guarantees="freePlatformItems"
    :columns="3"
    tone="tint"
  />

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
    source="e_invoicing_software_check_related"
  />

  <DibodevContactCtaSection
    :title="page.contactCta.title"
    :description="page.contactCta.description"
    :ctaText="page.contactCta.button"
  />

  <DibodevMobileContactBar
    :text="page.mobileContactBar.text"
    :buttonLabel="page.mobileContactBar.buttonLabel"
    :to="mobileContactRoute"
    :hiddenWhileVisibleId="E_INVOICING_CHECKER_ANCHOR_ID"
    :trackingLocation="`${TRACKING_LOCATION}_mobile_bar`"
  />
</template>

<script lang="ts" setup>
import type { ComputedRef } from 'vue'
import type { SupportedLocale } from '~/core/constants/categorySlugs'
import type { DibodevArticle } from '~/core/types/DibodevArticle'
import type { DibodevBreadcrumbItem } from '~/core/types/DibodevBreadcrumb'
import type { DibodevEInvoicingPlatform, DibodevEInvoicingSoftware } from '~/core/types/DibodevEInvoicingCheck'
import type { DibodevEInvoicingCheckPageContent } from '~/core/types/DibodevEInvoicingCheckPage'
import type { DibodevGuarantee } from '~/core/types/DibodevGuaranteesSection'
import type { DibodevPricedProduct } from '~/core/types/DibodevPriceListSection'
import { computed } from 'vue'
import BlogRelatedArticles from '~/components/blog/BlogRelatedArticles.vue'
import DibodevCallout from '~/components/data-displays/DibodevCallout.vue'
import DibodevMobileContactBar from '~/components/data-displays/DibodevMobileContactBar.vue'
import DibodevContactCtaSection from '~/components/sections/DibodevContactCtaSection.vue'
import DibodevEInvoicingSoftwareChecker from '~/components/sections/DibodevEInvoicingSoftwareChecker.vue'
import DibodevFaqSection from '~/components/sections/DibodevFaqSection.vue'
import DibodevGuaranteesSection from '~/components/sections/DibodevGuaranteesSection.vue'
import DibodevMethodSection from '~/components/sections/DibodevMethodSection.vue'
import DibodevPriceListSection from '~/components/sections/DibodevPriceListSection.vue'
import DibodevSourcedFactsSection from '~/components/sections/DibodevSourcedFactsSection.vue'
import DibodevToolLandingSection from '~/components/sections/DibodevToolLandingSection.vue'
import { useArticlesWithTranslations } from '~/composables/useArticlesWithTranslations'
import { useBreadcrumbTrail } from '~/composables/useBreadcrumbTrail'
import { ORGANIZATION_ID, PERSON_ID } from '~/config/schema'
import {
  E_INVOICING_CHECK_PAGE_UPDATED_AT,
  E_INVOICING_CHECK_RELATED_ARTICLE_SLUGS,
  E_INVOICING_CHECKER_ANCHOR_ID,
  E_INVOICING_DATASET,
  E_INVOICING_GUIDE_SOFTWARE_IDS,
  E_INVOICING_TABLE_SOFTWARE_IDS,
} from '~/core/constants/eInvoicingCheck/pageShared'
import { E_INVOICING_CHECK_PAGES } from '~/core/constants/eInvoicingCheckPage'
import { ArticleSelectionUtils } from '~/core/utils/ArticleSelectionUtils'
import { EInvoicingContactUtils } from '~/core/utils/EInvoicingContactUtils'
import { EInvoicingSoftwareUtils } from '~/core/utils/EInvoicingSoftwareUtils'
import { QuizTextUtils } from '~/core/utils/QuizTextUtils'

definePageMeta({
  i18n: {
    paths: {
      fr: '/outils/facture-electronique-logiciel-agree',
      en: '/tools/e-invoicing-software-check',
      es: '/herramientas/factura-electronica-software-homologado',
    },
  },
})

const SITE_URL: string = 'https://dibodev.fr'
const ARTICLES_POOL_SIZE: number = 100
const TRACKING_LOCATION: string = 'e_invoicing_software_check'

const { t, locale } = useI18n()
const localePath = useLocalePath()
const route = useRoute()
const pageLocale: SupportedLocale = (locale.value as SupportedLocale) || 'fr'
const page: DibodevEInvoicingCheckPageContent = E_INVOICING_CHECK_PAGES[pageLocale] ?? E_INVOICING_CHECK_PAGES.fr
const listDateLabel: string = EInvoicingSoftwareUtils.formatDate(E_INVOICING_DATASET.officialList.updatedAt, pageLocale)
const readAtLabel: string = EInvoicingSoftwareUtils.formatDate(E_INVOICING_DATASET.publishersReadAt, pageLocale)
/** The contact page opened from the bar at the bottom of small screens, with the e-invoicing message prefilled. */
const mobileContactRoute: string = localePath({
  path: '/contact',
  query: EInvoicingContactUtils.buildContactQuery(null, null),
})

defineOgImageComponent(
  'DibodevToolShareImage',
  {
    titleLines: page.shareImage.titleLines,
    highlight: page.shareImage.highlight,
    subtitle: page.shareImage.subtitle,
    badge: page.shareImage.badge,
    icon: 'receipt',
  },
  { alt: page.shareImage.alt },
)
const { data: articlesPool } = await useArticlesWithTranslations({ perPage: ARTICLES_POOL_SIZE })

const breadcrumbs: ComputedRef<DibodevBreadcrumbItem[]> = useBreadcrumbTrail((): DibodevBreadcrumbItem[] => [
  { label: t('nav.tools'), to: localePath('tools') },
  { label: page.breadcrumbLabel, to: null },
])

const relatedArticles: ComputedRef<DibodevArticle[]> = computed((): DibodevArticle[] =>
  ArticleSelectionUtils.selectBySlugs(articlesPool.value ?? [], E_INVOICING_CHECK_RELATED_ARTICLE_SLUGS),
)

/**
 * Finds a tool of the dataset by its id.
 * @param {string} id - The tool id.
 * @returns {DibodevEInvoicingSoftware | null} The tool, or null when the id is unknown.
 */
function findSoftware(id: string): DibodevEInvoicingSoftware | null {
  return E_INVOICING_DATASET.software.find((software: DibodevEInvoicingSoftware): boolean => software.id === id) ?? null
}

/**
 * Writes a date in words for the page language, or null when there is none.
 * @param {string | null} isoDate - The date (YYYY-MM-DD), or null.
 * @returns {string | null} The date in words, or null.
 */
function formatOptionalDate(isoDate: string | null): string | null {
  return isoDate ? EInvoicingSoftwareUtils.formatDate(isoDate, pageLocale) : null
}

/** One row per common tool: its status, the accredited platform behind it, and where that comes from. */
const softwareRows: DibodevPricedProduct[] = E_INVOICING_TABLE_SOFTWARE_IDS.map(
  (id: string): DibodevPricedProduct | null => {
    const software: DibodevEInvoicingSoftware | null = findSoftware(id)

    if (!software) {
      return null
    }
    const platform: DibodevEInvoicingPlatform | null = EInvoicingSoftwareUtils.findPlatformByName(
      E_INVOICING_DATASET,
      software.platformName,
    )
    const isOfficial: boolean = software.status === 'accredited'
    const platformLabel: string = isOfficial
      ? (formatOptionalDate(platform?.registrationDate ?? null) ?? software.name)
      : (platform?.name ?? page.softwareTable.noPlatformLabel)

    return {
      name: software.name,
      coverage: page.softwareTable.statusLabels[software.status],
      price: platformLabel,
      priceCondition: QuizTextUtils.fillTemplate(
        isOfficial ? page.softwareTable.officialSourceTemplate : page.softwareTable.publisherSourceTemplate,
        { listDate: listDateLabel, sourceDate: formatOptionalDate(software.sourceDate ?? null) ?? readAtLabel },
      ),
    }
  },
).filter((row: DibodevPricedProduct | null): row is DibodevPricedProduct => row !== null)

/** One tile per tool: what its publisher says for compatible solutions, the same sentence for accredited platforms. */
const guideItems: DibodevGuarantee[] = E_INVOICING_GUIDE_SOFTWARE_IDS.map((id: string): DibodevGuarantee | null => {
  const software: DibodevEInvoicingSoftware | null = findSoftware(id)

  if (!software) {
    return null
  }
  const platform: DibodevEInvoicingPlatform | null = EInvoicingSoftwareUtils.findPlatformByName(
    E_INVOICING_DATASET,
    software.platformName,
  )
  const values: Record<string, string> = {
    name: software.name,
    date: formatOptionalDate(platform?.registrationDate ?? null) ?? '',
    platform: platform?.name ?? '',
    platformDate: formatOptionalDate(platform?.registrationDate ?? null) ?? '',
  }

  if (software.status === 'accredited') {
    return {
      title: software.name,
      description: QuizTextUtils.fillTemplate(
        values.date ? page.guides.accreditedTemplate : page.guides.accreditedDateUnknownTemplate,
        values,
      ),
    }
  }
  const note: string = software.note?.[pageLocale] ?? software.note?.fr ?? ''
  const platformLine: string =
    software.status === 'connected' && platform?.registrationDate
      ? QuizTextUtils.fillTemplate(page.guides.connectedPlatformTemplate, values)
      : ''

  return { title: software.name, description: `${note}${platformLine}` }
}).filter((item: DibodevGuarantee | null): item is DibodevGuarantee => item !== null)

/** The registered platforms aimed at small businesses that announce a free plan, from the official list. */
const freePlatformItems: DibodevGuarantee[] = E_INVOICING_DATASET.platforms
  .filter(
    (platform: DibodevEInvoicingPlatform): boolean =>
      platform.status === 'registered' && platform.smallBusiness && platform.freeOffer,
  )
  .map(
    (platform: DibodevEInvoicingPlatform): DibodevGuarantee => ({
      title: platform.name,
      description: QuizTextUtils.fillTemplate(
        platform.registrationDate ? page.freePlatforms.itemTemplate : page.freePlatforms.itemDateUnknownTemplate,
        { date: formatOptionalDate(platform.registrationDate) ?? '' },
      ),
    }),
  )

const webPageSchemaJson: string = JSON.stringify({
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  '@id': `${SITE_URL}${route.path}#webpage`,
  url: `${SITE_URL}${route.path}`,
  name: page.meta.title,
  description: page.meta.description,
  inLanguage: page.meta.inLanguage,
  dateModified: E_INVOICING_CHECK_PAGE_UPDATED_AT,
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
    { type: 'application/ld+json', key: 'schema-e-invoicing-software-check-webpage', innerHTML: webPageSchemaJson },
  ],
})
</script>
