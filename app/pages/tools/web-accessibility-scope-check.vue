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
    :updatedAt="WEB_ACCESSIBILITY_SCOPE_PAGE_UPDATED_AT"
  >
    <template #tool>
      <div :id="WEB_ACCESSIBILITY_SCOPE_QUIZ_ANCHOR_ID">
        <DibodevQuizTunnel :quiz="quiz" />
      </div>
      <DibodevToolTeaser
        :teaser="GDPR_COOKIE_CHECK_TEASER"
        :trackingLocation="`${TRACKING_LOCATION}_hero`"
        tone="white"
        class="mt-6"
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
    :anchorId="page.cases.anchorId"
    :eyebrow="page.cases.eyebrow"
    :title="page.cases.title"
    :intro="page.cases.intro"
    :guarantees="page.cases.items"
    :columns="3"
    tone="white"
  />

  <DibodevGuaranteesSection
    :anchorId="page.timeline.anchorId"
    :eyebrow="page.timeline.eyebrow"
    :title="page.timeline.title"
    :intro="page.timeline.intro"
    :guarantees="page.timeline.items"
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
    source="web_accessibility_scope_check_related"
  />

  <DibodevContactCtaSection
    :title="page.contactCta.title"
    :description="page.contactCta.description"
    :ctaText="page.contactCta.button"
    :ctaTo="contactRoute"
    :trackingLocation="`${TRACKING_LOCATION}_contact_cta`"
  />

  <DibodevMobileContactBar
    :text="page.mobileContactBar.text"
    :buttonLabel="page.mobileContactBar.buttonLabel"
    :to="contactRoute"
    :hiddenWhileVisibleId="WEB_ACCESSIBILITY_SCOPE_QUIZ_ANCHOR_ID"
    :trackingLocation="`${TRACKING_LOCATION}_mobile_bar`"
  />
</template>

<script lang="ts" setup>
import type { ComputedRef } from 'vue'
import type { SupportedLocale } from '~/core/constants/categorySlugs'
import type { DibodevArticle } from '~/core/types/DibodevArticle'
import type { DibodevBreadcrumbItem } from '~/core/types/DibodevBreadcrumb'
import type { DibodevQuizDefinition } from '~/core/types/DibodevQuiz'
import type { DibodevWebAccessibilityScopePageContent } from '~/core/types/DibodevWebAccessibilityScopePage'
import { computed } from 'vue'
import BlogRelatedArticles from '~/components/blog/BlogRelatedArticles.vue'
import DibodevCallout from '~/components/data-displays/DibodevCallout.vue'
import DibodevMobileContactBar from '~/components/data-displays/DibodevMobileContactBar.vue'
import DibodevToolTeaser from '~/components/data-displays/DibodevToolTeaser.vue'
import DibodevQuizTunnel from '~/components/quiz/DibodevQuizTunnel.vue'
import DibodevContactCtaSection from '~/components/sections/DibodevContactCtaSection.vue'
import DibodevFaqSection from '~/components/sections/DibodevFaqSection.vue'
import DibodevGuaranteesSection from '~/components/sections/DibodevGuaranteesSection.vue'
import DibodevMethodSection from '~/components/sections/DibodevMethodSection.vue'
import DibodevSourcedFactsSection from '~/components/sections/DibodevSourcedFactsSection.vue'
import DibodevToolLandingSection from '~/components/sections/DibodevToolLandingSection.vue'
import { useArticlesWithTranslations } from '~/composables/useArticlesWithTranslations'
import { useBreadcrumbTrail } from '~/composables/useBreadcrumbTrail'
import { ORGANIZATION_ID, PERSON_ID } from '~/config/schema'
import { GDPR_COOKIE_CHECK_TEASER } from '~/core/constants/gdprCookieCheck/pageShared'
import {
  WEB_ACCESSIBILITY_SCOPE_PAGE_UPDATED_AT,
  WEB_ACCESSIBILITY_SCOPE_QUIZ_ANCHOR_ID,
  WEB_ACCESSIBILITY_SCOPE_RELATED_ARTICLE_SLUGS,
} from '~/core/constants/webAccessibilityScope/pageShared'
import { WEB_ACCESSIBILITY_SCOPE_PAGES } from '~/core/constants/webAccessibilityScopePage'
import { WEB_ACCESSIBILITY_SCOPE_QUIZZES } from '~/core/constants/webAccessibilityScopeQuiz'
import { ArticleSelectionUtils } from '~/core/utils/ArticleSelectionUtils'

definePageMeta({
  i18n: {
    paths: {
      fr: '/outils/accessibilite-site-internet-suis-je-concerne',
      en: '/tools/web-accessibility-am-i-concerned',
      es: '/herramientas/accesibilidad-web-me-afecta',
    },
  },
})

const SITE_URL: string = 'https://dibodev.fr'
const ARTICLES_POOL_SIZE: number = 100
const TRACKING_LOCATION: string = 'web_accessibility_scope_check'

const { t, locale } = useI18n()
const localePath = useLocalePath()
const route = useRoute()
const pageLocale: SupportedLocale = (locale.value as SupportedLocale) || 'fr'
const page: DibodevWebAccessibilityScopePageContent =
  WEB_ACCESSIBILITY_SCOPE_PAGES[pageLocale] ?? WEB_ACCESSIBILITY_SCOPE_PAGES.fr
const quiz: DibodevQuizDefinition = WEB_ACCESSIBILITY_SCOPE_QUIZZES[pageLocale] ?? WEB_ACCESSIBILITY_SCOPE_QUIZZES.fr
const contactRoute: string = localePath('/contact')

defineOgImageComponent(
  'DibodevToolShareImage',
  {
    titleLines: page.shareImage.titleLines,
    highlight: page.shareImage.highlight,
    subtitle: page.shareImage.subtitle,
    badge: page.shareImage.badge,
    icon: 'clipboard',
  },
  { alt: page.shareImage.alt },
)
const { data: articlesPool } = await useArticlesWithTranslations({ perPage: ARTICLES_POOL_SIZE })

const breadcrumbs: ComputedRef<DibodevBreadcrumbItem[]> = useBreadcrumbTrail((): DibodevBreadcrumbItem[] => [
  { label: t('nav.tools'), to: localePath('tools') },
  { label: page.breadcrumbLabel, to: null },
])

const relatedArticles: ComputedRef<DibodevArticle[]> = computed((): DibodevArticle[] =>
  ArticleSelectionUtils.selectBySlugs(articlesPool.value ?? [], WEB_ACCESSIBILITY_SCOPE_RELATED_ARTICLE_SLUGS),
)

const webPageSchemaJson: string = JSON.stringify({
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  '@id': `${SITE_URL}${route.path}#webpage`,
  url: `${SITE_URL}${route.path}`,
  name: page.meta.title,
  description: page.meta.description,
  inLanguage: page.meta.inLanguage,
  dateModified: WEB_ACCESSIBILITY_SCOPE_PAGE_UPDATED_AT,
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
      key: 'schema-web-accessibility-scope-check-webpage',
      innerHTML: webPageSchemaJson,
    },
  ],
})
</script>
