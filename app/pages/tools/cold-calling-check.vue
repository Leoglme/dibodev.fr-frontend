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
    :updatedAt="COLD_CALLING_CHECK_PAGE_UPDATED_AT"
  >
    <template #tool>
      <div :id="COLD_CALLING_CHECK_QUIZ_ANCHOR_ID" class="scroll-mt-24">
        <DibodevQuizTunnel :quiz="quiz" />
      </div>
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

  <DibodevSourcedFactsSection
    :anchorId="page.findingClientsWithoutCalling.anchorId"
    :eyebrow="page.findingClientsWithoutCalling.eyebrow"
    :title="page.findingClientsWithoutCalling.title"
    :intro="page.findingClientsWithoutCalling.intro"
    :facts="page.findingClientsWithoutCalling.ways"
    tone="offWhite"
  >
    <template #footer>
      <DibodevCallout
        icon="Globe"
        :emphasizedIntro="page.findingClientsWithoutCalling.calloutEmphasizedIntro"
        :text="page.findingClientsWithoutCalling.calloutText"
        :footnote="page.findingClientsWithoutCalling.calloutFootnote"
        tone="white"
      >
        <div class="flex flex-wrap gap-x-6 gap-y-2">
          <DibodevLink :link="localePath('freelance-web-developer-rennes')" class="text-[15px] leading-6">
            <span>{{ page.findingClientsWithoutCalling.freelanceRennesLinkLabel }}</span>
            <DibodevIcon name="ArrowRight" mode="stroke" :width="16" :height="16" aria-hidden="true" />
          </DibodevLink>
          <DibodevLink :link="localePath('/')" class="text-[15px] leading-6">
            <span>{{ page.findingClientsWithoutCalling.homeLinkLabel }}</span>
          </DibodevLink>
        </div>
      </DibodevCallout>
    </template>
  </DibodevSourcedFactsSection>

  <DibodevFaqSection :eyebrow="page.faq.eyebrow" :title="page.faq.title" :questions="page.faq.questions" />

  <BlogRelatedArticles
    :title="page.relatedArticles.title"
    :intro="page.relatedArticles.intro"
    :articles="relatedArticles"
    source="cold_calling_check_related"
  />

  <DibodevContactCtaSection
    :title="page.contactCta.title"
    :description="page.contactCta.description"
    :ctaText="page.contactCta.button"
    :ctaTo="contactRoute"
  />

  <DibodevMobileContactBar
    :text="page.mobileContactBar.text"
    :buttonLabel="page.mobileContactBar.buttonLabel"
    :to="contactRoute"
    :hiddenWhileVisibleId="COLD_CALLING_CHECK_QUIZ_ANCHOR_ID"
    :trackingLocation="`${TRACKING_LOCATION}_mobile_bar`"
  />
</template>

<script lang="ts" setup>
import type { ComputedRef, WritableComputedRef } from 'vue'
import type { SupportedLocale } from '~/core/constants/categorySlugs'
import type { DibodevArticle } from '~/core/types/DibodevArticle'
import type { DibodevBreadcrumbItem } from '~/core/types/DibodevBreadcrumb'
import type { DibodevColdCallingCheckPageContent } from '~/core/types/DibodevColdCallingCheckPage'
import type { DibodevQuizDefinition } from '~/core/types/DibodevQuiz'
import { computed } from 'vue'
import BlogRelatedArticles from '~/components/blog/BlogRelatedArticles.vue'
import DibodevLink from '~/components/core/DibodevLink.vue'
import DibodevCallout from '~/components/data-displays/DibodevCallout.vue'
import DibodevMobileContactBar from '~/components/data-displays/DibodevMobileContactBar.vue'
import DibodevQuizTunnel from '~/components/quiz/DibodevQuizTunnel.vue'
import DibodevContactCtaSection from '~/components/sections/DibodevContactCtaSection.vue'
import DibodevFaqSection from '~/components/sections/DibodevFaqSection.vue'
import DibodevGuaranteesSection from '~/components/sections/DibodevGuaranteesSection.vue'
import DibodevSourcedFactsSection from '~/components/sections/DibodevSourcedFactsSection.vue'
import DibodevToolLandingSection from '~/components/sections/DibodevToolLandingSection.vue'
import DibodevIcon from '~/components/ui/DibodevIcon.vue'
import { useArticlesWithTranslations } from '~/composables/useArticlesWithTranslations'
import { useBreadcrumbTrail } from '~/composables/useBreadcrumbTrail'
import { ORGANIZATION_ID, PERSON_ID } from '~/config/schema'
import {
  COLD_CALLING_CHECK_CONTACT_PROJECT_TYPE,
  COLD_CALLING_CHECK_PAGE_UPDATED_AT,
  COLD_CALLING_CHECK_QUIZ_ANCHOR_ID,
  COLD_CALLING_CHECK_RELATED_ARTICLE_SLUGS,
} from '~/core/constants/coldCallingCheck/pageShared'
import { COLD_CALLING_CHECK_PAGES } from '~/core/constants/coldCallingCheckPage'
import { COLD_CALLING_CHECK_QUIZZES } from '~/core/constants/coldCallingCheckQuiz'
import { ArticleSelectionUtils } from '~/core/utils/ArticleSelectionUtils'

definePageMeta({
  i18n: {
    paths: {
      fr: '/outils/demarchage-telephonique-interdit-puis-je-appeler',
      en: '/tools/cold-calling-ban-france-check',
      es: '/herramientas/prospeccion-telefonica-prohibida-francia',
    },
  },
})

const SITE_URL: string = 'https://dibodev.fr'
const ARTICLES_POOL_SIZE: number = 100
const TRACKING_LOCATION: string = 'cold_calling_check'

const { t, locale }: { t: (key: string) => string; locale: WritableComputedRef<string> } = useI18n()
const localePath: ReturnType<typeof useLocalePath> = useLocalePath()
const route: ReturnType<typeof useRoute> = useRoute()
const pageLocale: SupportedLocale = (locale.value as SupportedLocale) || 'fr'
const page: DibodevColdCallingCheckPageContent = COLD_CALLING_CHECK_PAGES[pageLocale] ?? COLD_CALLING_CHECK_PAGES.fr
const quiz: DibodevQuizDefinition = COLD_CALLING_CHECK_QUIZZES[pageLocale] ?? COLD_CALLING_CHECK_QUIZZES.fr
const contactRoute: string = localePath({
  path: '/contact',
  query: { type: COLD_CALLING_CHECK_CONTACT_PROJECT_TYPE },
})

defineOgImageComponent(
  'DibodevToolShareImage',
  {
    titleLines: page.shareImage.titleLines,
    highlight: page.shareImage.highlight,
    subtitle: page.shareImage.subtitle,
    badge: page.shareImage.badge,
    icon: 'phone',
  },
  { alt: page.shareImage.alt },
)
const { data: articlesPool }: Awaited<ReturnType<typeof useArticlesWithTranslations>> =
  await useArticlesWithTranslations({
    perPage: ARTICLES_POOL_SIZE,
  })

const breadcrumbs: ComputedRef<DibodevBreadcrumbItem[]> = useBreadcrumbTrail((): DibodevBreadcrumbItem[] => [
  { label: t('nav.tools'), to: localePath('tools') },
  { label: page.breadcrumbLabel, to: null },
])

const relatedArticles: ComputedRef<DibodevArticle[]> = computed((): DibodevArticle[] =>
  ArticleSelectionUtils.selectBySlugs(articlesPool.value ?? [], COLD_CALLING_CHECK_RELATED_ARTICLE_SLUGS),
)

const webPageSchemaJson: string = JSON.stringify({
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  '@id': `${SITE_URL}${route.path}#webpage`,
  url: `${SITE_URL}${route.path}`,
  name: page.meta.title,
  description: page.meta.description,
  inLanguage: page.meta.inLanguage,
  dateModified: COLD_CALLING_CHECK_PAGE_UPDATED_AT,
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
  script: [{ type: 'application/ld+json', key: 'schema-cold-calling-check-webpage', innerHTML: webPageSchemaJson }],
})
</script>
