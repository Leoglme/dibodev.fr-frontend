<template>
  <DibodevToolLandingSection
    :breadcrumbs="breadcrumbs"
    :titleBefore="page.hero.titleBefore"
    :titleHighlight="page.hero.titleHighlight"
    :titleAfter="page.hero.titleAfter"
    :aboutTitle="page.hero.briefTitle"
    :description="page.hero.brief"
    :reassurances="page.hero.reassurances"
    :authorIntro="page.hero.authorIntro"
    :authorBio="page.hero.authorBio"
    :updatedAt="GOOGLE_UPDATE_IMPACT_PAGE_UPDATED_AT"
    contentWidth="wide"
  >
    <template #tool>
      <DibodevGoogleUpdateImpactChecker
        :anchorId="GOOGLE_UPDATE_IMPACT_CHECKER_ANCHOR_ID"
        :wording="page.checker"
        :quiz="quiz"
        :trackingLocation="TRACKING_LOCATION"
      />
    </template>
  </DibodevToolLandingSection>

  <DibodevSourcedFactsSection
    :anchorId="page.definition.anchorId"
    :eyebrow="page.definition.eyebrow"
    :title="page.definition.title"
    :intro="page.definition.intro"
    :facts="page.definition.facts"
    tone="offWhite"
  />

  <DibodevReferenceTableSection
    :anchorId="page.calendar.anchorId"
    :eyebrow="page.calendar.eyebrow"
    :title="page.calendar.title"
    :intro="page.calendar.intro"
    :nameColumnLabel="page.calendar.nameColumnLabel"
    :detailColumnLabel="page.calendar.detailColumnLabel"
    :linkColumnLabel="page.calendar.linkColumnLabel"
    :rows="calendarRows"
    tone="white"
  />

  <DibodevGuaranteesSection
    :anchorId="page.reading.anchorId"
    :eyebrow="page.reading.eyebrow"
    :title="page.reading.title"
    :intro="page.reading.intro"
    :guarantees="page.reading.items"
    :columns="3"
    tone="tint"
  />

  <DibodevNumberedGuideSection
    :anchorId="page.doAndDont.anchorId"
    :eyebrow="page.doAndDont.eyebrow"
    :title="page.doAndDont.title"
    :intro="page.doAndDont.intro"
    :pitfallLabel="page.doAndDont.pitfallLabel"
    :items="page.doAndDont.items"
    tone="white"
  />

  <section :id="page.ownSite.anchorId" class="bg-gray-800 px-6 py-16 sm:px-8 lg:py-20">
    <div class="mx-auto grid w-full max-w-3xl gap-8">
      <DibodevSectionHeading :eyebrow="page.ownSite.eyebrow" :title="page.ownSite.title" intro="" align="center" />
      <DibodevCallout
        icon="Activity"
        :emphasizedIntro="page.ownSite.emphasizedIntro"
        :text="page.ownSite.text"
        :footnote="page.ownSite.footnote"
        tone="white"
      />
    </div>
  </section>

  <DibodevMethodSection
    :eyebrow="page.method.eyebrow"
    :title="page.method.title"
    :intro="page.method.intro"
    :steps="page.method.steps"
    tone="white"
  />

  <DibodevFaqSection :eyebrow="page.faq.eyebrow" :title="page.faq.title" :questions="page.faq.questions" />

  <BlogRelatedArticles
    :title="page.relatedArticles.title"
    :intro="page.relatedArticles.intro"
    :articles="relatedArticles"
    source="google_update_impact_check_related"
  />

  <section class="px-6 pb-16 sm:px-8 lg:pb-20">
    <div class="mx-auto grid w-full max-w-3xl gap-4">
      <DibodevToolTeaser
        v-for="teaser in RELATED_TOOL_TEASERS"
        :key="teaser.toolId"
        :teaser="teaser"
        :trackingLocation="`${TRACKING_LOCATION}_related_tools`"
        tone="tint"
      />
    </div>
  </section>

  <DibodevContactCtaSection
    :title="page.contactCta.title"
    :description="page.contactCta.description"
    :ctaText="page.contactCta.button"
    :ctaTo="contactRoute"
    :secondaryLink="websiteHealthCheckLink"
    :trackingLocation="`${TRACKING_LOCATION}_contact_cta`"
  />

  <DibodevMobileContactBar
    :text="page.mobileContactBar.text"
    :buttonLabel="page.mobileContactBar.buttonLabel"
    :to="contactRoute"
    :hiddenWhileVisibleId="GOOGLE_UPDATE_IMPACT_CHECKER_ANCHOR_ID"
    :trackingLocation="`${TRACKING_LOCATION}_mobile_bar`"
  />
</template>

<script lang="ts" setup>
import type { ComputedRef } from 'vue'
import type { SupportedLocale } from '~/core/constants/categorySlugs'
import type { DibodevContactCtaSecondaryLink } from '~/core/types/DibodevContactCtaSection'
import type { DibodevArticle } from '~/core/types/DibodevArticle'
import type { DibodevBreadcrumbItem } from '~/core/types/DibodevBreadcrumb'
import type { DibodevGoogleSearchUpdate } from '~/core/types/DibodevGoogleUpdateImpact'
import type { DibodevGoogleUpdateImpactPageContent } from '~/core/types/DibodevGoogleUpdateImpactPage'
import type { DibodevQuizDefinition } from '~/core/types/DibodevQuiz'
import type { DibodevReferenceTableRow } from '~/core/types/DibodevReferenceTableSection'
import type { DibodevToolTeaserContent } from '~/core/types/DibodevToolTeaser'
import { computed } from 'vue'
import BlogRelatedArticles from '~/components/blog/BlogRelatedArticles.vue'
import DibodevCallout from '~/components/data-displays/DibodevCallout.vue'
import DibodevMobileContactBar from '~/components/data-displays/DibodevMobileContactBar.vue'
import DibodevToolTeaser from '~/components/data-displays/DibodevToolTeaser.vue'
import DibodevGoogleUpdateImpactChecker from '~/components/google-update/DibodevGoogleUpdateImpactChecker.vue'
import DibodevContactCtaSection from '~/components/sections/DibodevContactCtaSection.vue'
import DibodevFaqSection from '~/components/sections/DibodevFaqSection.vue'
import DibodevGuaranteesSection from '~/components/sections/DibodevGuaranteesSection.vue'
import DibodevMethodSection from '~/components/sections/DibodevMethodSection.vue'
import DibodevNumberedGuideSection from '~/components/sections/DibodevNumberedGuideSection.vue'
import DibodevReferenceTableSection from '~/components/sections/DibodevReferenceTableSection.vue'
import DibodevSectionHeading from '~/components/sections/DibodevSectionHeading.vue'
import DibodevSourcedFactsSection from '~/components/sections/DibodevSourcedFactsSection.vue'
import DibodevToolLandingSection from '~/components/sections/DibodevToolLandingSection.vue'
import { useAllArticlesWithTranslations } from '~/composables/useArticlesWithTranslations'
import { useBreadcrumbTrail } from '~/composables/useBreadcrumbTrail'
import { ORGANIZATION_ID, PERSON_ID } from '~/config/schema'
import { GOOGLE_SEARCH_UPDATES, GOOGLE_SEARCH_UPDATES_READ_AT } from '~/core/constants/googleSearchUpdates'
import { GOOGLE_UPDATE_IMPACT_PAGE_EN } from '~/core/constants/googleUpdateImpactCheck/pageContent.en'
import { GOOGLE_UPDATE_IMPACT_PAGE_ES } from '~/core/constants/googleUpdateImpactCheck/pageContent.es'
import { GOOGLE_UPDATE_IMPACT_PAGE_FR } from '~/core/constants/googleUpdateImpactCheck/pageContent.fr'
import {
  GOOGLE_UPDATE_CONTACT_TOPIC,
  GOOGLE_UPDATE_IMPACT_CHECKER_ANCHOR_ID,
  GOOGLE_UPDATE_IMPACT_PAGE_UPDATED_AT,
  GOOGLE_UPDATE_IMPACT_RELATED_ARTICLE_SLUGS,
} from '~/core/constants/googleUpdateImpactCheck/pageShared'
import { GOOGLE_UPDATE_QUIZZES } from '~/core/constants/googleUpdateImpactQuiz'
import { AI_READABILITY_CHECK_TEASER } from '~/core/constants/aiReadabilityCheck/pageShared'
import { WEBSITE_HEALTH_CHECK_TEASER } from '~/core/constants/websiteHealthCheck/pageShared'
import { ArticleSelectionUtils } from '~/core/utils/ArticleSelectionUtils'
import { GoogleUpdateImpactUtils } from '~/core/utils/GoogleUpdateImpactUtils'
import { QuizTextUtils } from '~/core/utils/QuizTextUtils'
import { SiteCheckContactUtils } from '~/core/utils/SiteCheckContactUtils'

definePageMeta({
  i18n: {
    paths: {
      fr: '/outils/mise-a-jour-google-mon-site-est-il-touche',
      en: '/tools/google-update-is-my-site-affected',
      es: '/herramientas/actualizacion-google-mi-web-esta-afectada',
    },
  },
})

const SITE_URL: string = 'https://dibodev.fr'
const TRACKING_LOCATION: string = 'google_update_impact_check'
/** A drop often comes from the site itself, or from what the AI assistants can read of it: the two checks offered under the articles. */
const RELATED_TOOL_TEASERS: DibodevToolTeaserContent[] = [WEBSITE_HEALTH_CHECK_TEASER, AI_READABILITY_CHECK_TEASER]
const PAGES: Record<SupportedLocale, DibodevGoogleUpdateImpactPageContent> = {
  fr: GOOGLE_UPDATE_IMPACT_PAGE_FR,
  en: GOOGLE_UPDATE_IMPACT_PAGE_EN,
  es: GOOGLE_UPDATE_IMPACT_PAGE_ES,
}

const { t, locale } = useI18n()
const localePath = useLocalePath()
const route = useRoute()
const pageLocale: SupportedLocale = (locale.value as SupportedLocale) || 'fr'
const page: DibodevGoogleUpdateImpactPageContent = PAGES[pageLocale] ?? PAGES.fr
const quiz: DibodevQuizDefinition = GOOGLE_UPDATE_QUIZZES[pageLocale] ?? GOOGLE_UPDATE_QUIZZES.fr
/** The contact page, with the message of the tool prefilled. */
const contactRoute: string = localePath({
  path: '/contact',
  query: SiteCheckContactUtils.buildContactQuery(GOOGLE_UPDATE_CONTACT_TOPIC, null, null),
})
/** The website health check, offered next to the contact button: a drop often comes from the site itself. */
const websiteHealthCheckLink: DibodevContactCtaSecondaryLink = {
  label: WEBSITE_HEALTH_CHECK_TEASER.wording[pageLocale]?.listLabel ?? '',
  to: localePath({ name: WEBSITE_HEALTH_CHECK_TEASER.routeName }),
  toolId: WEBSITE_HEALTH_CHECK_TEASER.toolId,
}

defineOgImageComponent(
  'DibodevToolShareImage',
  {
    titleLines: page.shareImage.titleLines,
    highlight: page.shareImage.highlight,
    subtitle: page.shareImage.subtitle,
    badge: page.shareImage.badge,
    icon: 'trendingDown',
  },
  { alt: page.shareImage.alt },
)
const { data: articlesPool } = await useAllArticlesWithTranslations()

const breadcrumbs: ComputedRef<DibodevBreadcrumbItem[]> = useBreadcrumbTrail((): DibodevBreadcrumbItem[] => [
  { label: t('nav.tools'), to: localePath('tools') },
  { label: page.breadcrumbLabel, to: null },
])

const relatedArticles: ComputedRef<DibodevArticle[]> = computed((): DibodevArticle[] =>
  ArticleSelectionUtils.selectBySlugs(articlesPool.value ?? [], GOOGLE_UPDATE_IMPACT_RELATED_ARTICLE_SLUGS),
)

/** One row per update of the constant, newest first: its official name, its kind and its dates. */
const calendarRows: DibodevReferenceTableRow[] = GOOGLE_SEARCH_UPDATES.map(
  (update: DibodevGoogleSearchUpdate): DibodevReferenceTableRow => ({
    name: update.name,
    detail: QuizTextUtils.fillTemplate(
      update.endDate ? page.calendar.finishedTemplate : page.calendar.ongoingTemplate,
      {
        kind: page.calendar.kindLabels[update.kind],
        startDate: GoogleUpdateImpactUtils.formatDate(update.startDate, pageLocale),
        endDate: update.endDate ? GoogleUpdateImpactUtils.formatDate(update.endDate, pageLocale) : '',
        readAt: GoogleUpdateImpactUtils.formatDate(GOOGLE_SEARCH_UPDATES_READ_AT, pageLocale),
      },
    ),
    linkLabel: page.calendar.linkLabel,
    linkUrl: update.incidentUrl,
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
  dateModified: GOOGLE_UPDATE_IMPACT_PAGE_UPDATED_AT,
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
    {
      type: 'application/ld+json',
      key: 'schema-google-update-impact-check-webpage',
      innerHTML: webPageSchemaJson,
    },
  ],
})
</script>
